import Image from "next/image";
import Link from "next/link";

import type { Block, Inline, Rich } from "@/lib/posts";
import { tableOfContents } from "@/lib/toc";

/**
 * Cuerpo de un articulo. Recibe los bloques de content/posts/*.ts y los pinta
 * con los tokens tipograficos del sitio.
 *
 * La medida va a 68ch y no al ancho del contenedor: el resto del sitio son
 * bloques cortos, pero esto es texto seguido, y una linea de 1296 px se lee
 * mal. 68 caracteres es el rango en el que el ojo encuentra el principio de la
 * linea siguiente sin perderse.
 *
 * El texto llega como dato, no como JSX, asi que los apostrofes y las comillas
 * no hay que escaparlos: React los escribe tal cual.
 */

const enlace =
  "text-ink underline underline-offset-[3px] transition-colors hover:text-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet";

/**
 * Un espacio entre dos fragmentos que se quedaron pegados al convertir.
 *
 * **El conversor de Gutenberg se comio la separacion alrededor de los 345
 * `<strong>` y los 44 enlaces, y los 27 `<br>`.** El texto llego entero —se
 * comprobo frase a frase contra el backup— pero se lee pegado: "usingWordPress",
 * "Tools likeFigma,InVision, andMarvelare commonly used", "Start a
 * Blog:Regularly publish", "Let's Build Smarter TogetherIf you're serious".
 * Ciento veintiseis uniones asi en los diecisiete articulos.
 *
 * Se arregla aqui y no en los datos a proposito: los articulos son contenido
 * restaurado que no se toca, y el defecto es del paso de conversion, no del
 * texto. Un solo sitio, y si algun dia se reconvierten, esto sobra sin estorbar.
 *
 * La regla mira los dos lados y es deliberadamente estrecha por la derecha:
 * **el fragmento siguiente tiene que empezar por letra o cifra.** Asi "$5.45"
 * seguido de "/month" no se parte, ni "Figma" seguido de ",", ni nada que ya
 * traiga su espacio.
 *
 * Por la izquierda entran ademas los signos que cierran una etiqueta —dos
 * puntos, interrogacion, punto, coma— porque el caso mas repetido del blog es
 * justo ese: `<strong>Start a Blog:</strong>` pegado a "Regularly publish".
 * Una primera version solo aceptaba letra o cifra a la izquierda y se dejaba
 * 73 de las 126 sin arreglar.
 *
 * Verificado contra el original del backup en los diecisiete articulos.
 */
const FIN = /[\p{L}\p{N}:;,.!?)\]]$/u;
const INICIO = /^[\p{L}\p{N}]/u;

function pegados(previo: string, siguiente: string) {
  return FIN.test(previo) && INICIO.test(siguiente);
}

/** El texto plano de un fragmento, para decidir la separacion. */
function plano(frag: Inline) {
  return typeof frag === "string" ? frag : frag.text;
}

/**
 * Une los fragmentos contiguos que tienen el mismo formato.
 *
 * **El conversor partio palabras.** "Bluehost" llego como tres fragmentos
 * —`Blue`, `h`, `ost`— los tres con el mismo `href`, seguramente porque el
 * editor de WordPress habia dejado un `<span>` suelto dentro del enlace. Sin
 * unirlos, el separador de arriba mete espacio entre ellos y sale
 * "Blue h ost": la regla no puede distinguir dos palabras pegadas de una
 * palabra rota.
 *
 * Unir es ademas lo correcto por si solo: tres enlaces seguidos al mismo
 * destino son un enlace, y como tres son tres paradas del teclado y tres
 * anuncios de un lector de pantalla para una sola palabra.
 */
function une(value: readonly Inline[]): Inline[] {
  const salida: Inline[] = [];

  const formato = (frag: Inline) =>
    typeof frag === "string"
      ? { href: undefined, bold: undefined }
      : { href: frag.href, bold: frag.bold };

  for (const frag of value) {
    const ultimo = salida[salida.length - 1];
    if (ultimo !== undefined) {
      const a = formato(ultimo);
      const b = formato(frag);
      if (a.href === b.href && !!a.bold === !!b.bold) {
        const texto = plano(ultimo) + plano(frag);
        salida[salida.length - 1] =
          a.href || a.bold ? { text: texto, href: a.href, bold: a.bold } : texto;
        continue;
      }
    }
    salida.push(frag);
  }

  return salida;
}

/**
 * Pinta texto con formato. Una cadena suelta sale tal cual; una lista de
 * fragmentos puede traer negrita, enlace o los dos.
 *
 * Los enlaces internos van por `<Link>` y los externos por `<a>` con
 * `rel="noopener noreferrer"`. La frontera es la barra inicial: el conversor
 * de los articulos recuperados ya dejo las rutas internas relativas.
 */
function Texto({ value }: { value: Rich }) {
  if (typeof value === "string") return <>{value}</>;

  const fragmentos = une(value);

  return (
    <>
      {fragmentos.map((frag, i) => {
        const previo = i > 0 ? plano(fragmentos[i - 1]) : "";
        const sep =
          previo && pegados(previo, plano(frag)) ? <span> </span> : null;

        if (typeof frag === "string")
          return (
            <span key={i}>
              {sep}
              {frag}
            </span>
          );

        const cuerpo = frag.bold ? (
          <strong className="font-semibold text-ink">{frag.text}</strong>
        ) : (
          frag.text
        );

        if (!frag.href)
          return (
            <span key={i}>
              {sep}
              {cuerpo}
            </span>
          );

        // El separador va FUERA del enlace: dentro, el subrayado se estiraria
        // un espacio a la izquierda y el area pulsable crece sin motivo.
        return frag.href.startsWith("/") ? (
          <span key={i}>
            {sep}
            <Link href={frag.href} className={enlace}>
              {cuerpo}
            </Link>
          </span>
        ) : (
          <span key={i}>
            {sep}
            <a
              href={frag.href}
              className={enlace}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cuerpo}
            </a>
          </span>
        );
      })}
    </>
  );
}

export function PostBody({ blocks }: { blocks: readonly Block[] }) {
  /**
   * Los `id` de los h2 salen de `tableOfContents`, no de recalcularlos aqui:
   * el indice escribe los enlaces y esto escribe los destinos, y dos copias de
   * la misma regla acaban divergiendo. El desempate de encabezados repetidos
   * —varios articulos abren cada apartado con "Fix:"— viene ya resuelto.
   */
  const anclas = tableOfContents(blocks);
  let visto = 0;

  return (
    <div className="max-w-[68ch]">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "h2": {
            // `scroll-mt` deja el encabezado por debajo de la cabecera fija al
            // saltar desde el indice; sin esto queda tapado.
            const ancla = anclas[visto++];
            return (
              <h2
                key={i}
                id={ancla?.id}
                // Primer bloque sin margen superior: ya lo pone la entradilla.
                className={`scroll-mt-28 text-h3 text-balance text-ink ${i === 0 ? "" : "mt-12"}`}
              >
                {block.text}
              </h2>
            );
          }

          case "h3":
            return (
              <h3
                key={i}
                className="mt-9 text-h4 font-semibold text-balance text-ink"
              >
                {block.text}
              </h3>
            );

          case "p":
            return (
              <p key={i} className="mt-5 text-body text-pretty text-ink-soft">
                <Texto value={block.text} />
              </p>
            );

          case "list": {
            const List = block.ordered ? "ol" : "ul";
            return (
              <List
                key={i}
                className={`mt-5 flex flex-col gap-3 pl-6 text-body text-ink-soft ${
                  block.ordered ? "list-decimal" : "list-disc"
                }`}
              >
                {block.items.map((item, j) => (
                  <li key={j} className="text-pretty">
                    <Texto value={item} />
                  </li>
                ))}
              </List>
            );
          }

          case "aside":
            // Filete violeta a la izquierda, no una tarjeta: es una nota
            // dentro de la lectura, no una seccion aparte.
            return (
              <p
                key={i}
                className="mt-8 border-l-[3px] border-violet pl-5 text-body text-pretty text-ink"
              >
                <Texto value={block.text} />
              </p>
            );

          case "image":
            return (
              <Image
                key={i}
                src={block.src}
                alt={block.alt}
                width={block.width}
                height={block.height}
                className="mt-8 h-auto w-full rounded-md"
                sizes="(min-width: 68rem) 68ch, 100vw"
              />
            );
        }
      })}
    </div>
  );
}
