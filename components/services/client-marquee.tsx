import type { Locale } from "@/lib/i18n";

/**
 * Cinta de clientes: corre sola hacia la izquierda, sin dots ni flechas.
 *
 * Sustituye al trust band del Figma, que usaba logos de ShapeShift, Cameo y
 * Bounce sin ser clientes. Toda la mecánica es CSS (ver `.marquee` en
 * globals.css): cero JS, y con `prefers-reduced-motion: reduce` se cae a la
 * retícula centrada de siempre con una sola copia de la lista.
 *
 * La altura va **por logo** y no es la misma para todos: un wordmark ancho a
 * 48px pesa mucho más que una chapa circular a 48px, así que las dos chapas
 * suben y los wordmarks bajan hasta que ópticamente miden lo mismo.
 *
 * `w`/`h` son las medidas intrínsecas de cada archivo. Van al atributo para que
 * el navegador reserve el ancho antes de que cargue la imagen: sin eso el
 * carril mide cero al principio y la cinta arranca dando un salto.
 */

const clients = [
  { src: "/clients/installpros.svg", name: "InstallPros", h: "h-9", w: 1008, ih: 252 },
  { src: "/clients/better-backlinks.svg", name: "BetterBacklinks", h: "h-8", w: 300, ih: 69 },
  { src: "/clients/agency-hub.svg", name: "AgencyHub", h: "h-7", w: 179, ih: 40 },
  { src: "/clients/voip-virtual.svg", name: "VoipVirtual", h: "h-7", w: 245, ih: 47 },
  { src: "/clients/steady-content.svg", name: "SteadyContent", h: "h-8", w: 300, ih: 57 },
  { src: "/clients/afax.png", name: "aFax", h: "h-9", w: 308, ih: 144 },
  { src: "/clients/kurokink.svg", name: "KuroKink", h: "h-7", w: 1659, ih: 438 },
  { src: "/clients/fenekoi.png", name: "Fenekoi", h: "h-10", w: 331, ih: 240 },
  { src: "/clients/jbz-beats.png", name: "JBZ Beats", h: "h-12", w: 81, ih: 80 },
  { src: "/clients/tc-tails.png", name: "TC Tails Dog Grooming", h: "h-12", w: 80, ih: 80 },
];

function Logos({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className="marquee__list"
      // La segunda copia existe solo para que la vuelta no se vea. Para un
      // lector de pantalla no está: si no, lee los nueve clientes dos veces.
      aria-hidden={duplicate || undefined}
    >
      {clients.map((c) => (
        <li key={c.name} className="grid h-12 shrink-0 place-items-center">
          {/* <img> a propósito, no next/image. No es por los SVG: Next 16 los
              sirve directos sin pasar por el optimizador, y el resto del
              proyecto los usa con next/image sin problema. Es por la cinta: el
              carril se mide en px y aquí interesa que el <img> sea exactamente
              lo que se pide, sin envoltorio ni estilos inline que compliquen
              el cálculo del -50%. Los tres PNG suman 63 KB. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={c.src}
            alt={duplicate ? "" : c.name}
            width={c.w}
            height={c.ih}
            decoding="async"
            className={`${c.h} w-auto max-w-none object-contain`}
          />
        </li>
      ))}
    </ul>
  );
}

/** Etiqueta del grupo de logos, en cada idioma. */
const groupLabel: Record<Locale, string> = {
  en: "Companies we have worked with",
  es: "Empresas con las que hemos trabajado",
};

/**
 * La etiqueta va **visible**, no solo en `aria-label`.
 *
 * Antes solo existia para el lector de pantalla, asi que quien ve la pagina se
 * encontraba una fila de logos ajenos sin ninguna explicacion: no decia si son
 * clientes, integraciones o patrocinadores. Es el mismo patron que ya usan las
 * bandas de /services/seo ("Tools we work with") y /services/ppc.
 *
 * Con el texto a la vista, `aria-label` sobra y se cambia por `aria-labelledby`
 * apuntando a el: si no, el lector de pantalla lo anuncia dos veces.
 *
 * El id es fijo porque el componente sale **una vez por pagina** (home, home-lab
 * y /services/website-design). Si algun dia se montan dos en la misma, hay que
 * pasar a `useId()` — y eso obliga a convertirlo en componente de cliente.
 */
export function ClientMarquee({ locale = "en" }: { locale?: Locale }) {
  return (
    <div>
      <p id="client-marquee-label" className="text-center text-small text-ink-soft">
        {groupLabel[locale]}
      </p>

      <div
        className="marquee mt-7"
        aria-labelledby="client-marquee-label"
        role="group"
      >
        <div className="marquee__track">
          <Logos />
          <Logos duplicate />
        </div>
      </div>
    </div>
  );
}
