import Image from "next/image";
import Link from "next/link";

import type { Block, Rich } from "@/lib/posts";

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
 * Pinta texto con formato. Una cadena suelta sale tal cual; una lista de
 * fragmentos puede traer negrita, enlace o los dos.
 *
 * Los enlaces internos van por `<Link>` y los externos por `<a>` con
 * `rel="noopener noreferrer"`. La frontera es la barra inicial: el conversor
 * de los articulos recuperados ya dejo las rutas internas relativas.
 */
function Texto({ value }: { value: Rich }) {
  if (typeof value === "string") return <>{value}</>;

  return (
    <>
      {value.map((frag, i) => {
        if (typeof frag === "string") return <span key={i}>{frag}</span>;

        const cuerpo = frag.bold ? (
          <strong className="font-semibold text-ink">{frag.text}</strong>
        ) : (
          frag.text
        );

        if (!frag.href) return <span key={i}>{cuerpo}</span>;

        return frag.href.startsWith("/") ? (
          <Link key={i} href={frag.href} className={enlace}>
            {cuerpo}
          </Link>
        ) : (
          <a
            key={i}
            href={frag.href}
            className={enlace}
            target="_blank"
            rel="noopener noreferrer"
          >
            {cuerpo}
          </a>
        );
      })}
    </>
  );
}

export function PostBody({ blocks }: { blocks: readonly Block[] }) {
  return (
    <div className="max-w-[68ch]">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "h2":
            return (
              <h2
                key={i}
                // Primer bloque sin margen superior: ya lo pone la entradilla.
                className={`text-h3 text-balance text-ink ${i === 0 ? "" : "mt-12"}`}
              >
                {block.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={i}
                className="mt-9 text-[1.1875rem] leading-snug font-semibold text-balance text-ink"
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
