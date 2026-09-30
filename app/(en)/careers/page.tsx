import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CareersIllustration } from "@/components/careers-illustrations";
import { CtaLink } from "@/components/cta-link";
import { MeetMap } from "@/components/meet-map";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACT_EMAIL, pageMetadata } from "@/lib/site";

/**
 * /careers. Pagina del sitio vivo, sin frame en el Figma: el "Explore
 * Opportunities" de /about-us apuntaba al formulario porque no habia a donde
 * mandarlo, y esto es ese destino.
 *
 * **Replica la estructura de attio.com/careers** (decision del usuario,
 * 2026-10-01), seccion por seccion y en el mismo orden:
 *
 *   chapa + titular + CTA, con la escena del tablero de la semana
 *   → "Join a team of builders." con el equipo sobre el mapa
 *   → "We build inside…" (fila de nombres apagados; Attio pone logos de
 *     otras empresas)
 *   → "Our values." en 2×2 con icono geometrico por celda
 *   → "Open positions." con la lista agrupada y numerada
 *   → "Right role, right time." con la escena del estado sin puestos
 *   → "Keep up to date." en tarjetas
 *
 * Tambien se toma el aspecto: la columna con guias verticales, las reglas
 * de seccion, el "01" apagado delante de cada puesto, el "[1]" en
 * superindice del grupo y el punto final en los titulos.
 *
 * **El equipo sale con foto y en el mapa**, por indicacion del usuario
 * (2026-10-01): donde Attio pone la nube de avatares y la cita de un
 * empleado, aqui va el mapa de la home con las fotos de /about-us sobre cada
 * pais, Gustavo, Araceli y Facundo en España y el resto en Argentina. Es la
 * excepcion consciente a "no decir cuantos somos" de PRODUCT.md: en una
 * pagina de empleo, quien va a escribir tiene derecho a ver con quien
 * trabajaria.
 *
 * Lo que de Attio no se copia, y con que se sustituye:
 *
 *  - **El video** ("What it's like building…"): no hay video. Se omite.
 *  - **La cita de un empleado**: no hay ninguna real. No se inventa.
 *  - **Los logos de Stripe, Intercom…**: nombres de herramientas, no
 *    logotipos ajenos. Van seis nombres en gris, en la misma fila.
 *  - **Los filtros de la lista**: con cero puestos serian controles muertos.
 *    Queda la linea de recuento y el grupo "Open Applications", que Attio
 *    tambien tiene.
 *  - **El "Subscribe" con correo**: no hay lista de correo. El panel lleva el
 *    mismo `mailto:` que la candidatura abierta.
 *
 * **Sin formulario.** El <ContactForm> valida y avisa para una peticion de
 * presupuesto (art. 6.1.b); una candidatura es otro tratamiento con otra
 * base. Hasta que haya un puesto que lo justifique, va por correo al buzon
 * que ya existe, con el asunto puesto para distinguirla de una consulta.
 *
 * Solo en ingles, como /about-us y los servicios.
 */

export const metadata: Metadata = pageMetadata({
  path: "/careers",
  title: "Careers",
  description:
    "emmvi builds the website that takes the quote request and the system that answers it. No open positions right now; open applications are welcome.",
});

/**
 * El asunto va puesto para que en la bandeja una candidatura no se confunda
 * con una peticion de presupuesto: llegan al mismo buzon.
 */
const applyHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Open application")}`;

/** Anchura de contenido de Attio: el contenedor lleva un borde fino y, dentro,
 *  dos guias discontinuas donde empieza y acaba el texto. */
const gut = "px-6 lg:px-[var(--spacing-gut)]";
const guides = "lg:border-x lg:border-dashed lg:border-line lg:px-[var(--spacing-gut)]";

/**
 * Las mismas siete personas y fotos de /about-us, repartidas por pais. Las
 * posiciones son el porcentaje del viewBox del mapa (1200×447) donde estan
 * sus dos chinchetas: España en (588,125) y Argentina en (387,377).
 */
const team = {
  spain: {
    x: 49, y: 28,
    people: [
      { name: "Gustavo Polin", photo: "gustavo-polin" },
      { name: "Araceli Villalba", photo: "araceli-villalba" },
      { name: "Facundo Palombo", photo: "facundo-palombo" },
    ],
  },
  argentina: {
    x: 32.3, y: 84.3,
    people: [
      { name: "Nicolas Mastromarino", photo: "nicolas-mastromarino" },
      { name: "Ezequiel Cenicola", photo: "ezequiel-cenicola" },
      { name: "Camila Garcia", photo: "camila-garcia" },
      { name: "Lucas Burgos", photo: "lucas-burgos" },
    ],
  },
} as const;

const copy = {
  hero: {
    eyebrow: "Careers",
    title: "Help small businesses stop losing jobs.",
    /** Se recorta de 35 palabras a 25: fuera "for small businesses in Europe
     *  and the Americas", que lo repite `builders.where` unas pantallas mas
     *  abajo con las ciudades puestas, y fuera el "one business at a time",
     *  que era adorno. Se queda entero lo que se promete. */
    lede:
      "emmvi builds the website that takes the quote request and the system that answers it in under a minute. Join us to build it properly.",
    cta: "See open positions",
    scene:
      "This week's build board: a quote follow-up flow and a welcome email being built, a booking page in review, a site launch and review requests live. Below it: something broke? Whoever built it answers.",
  },
  builders: {
    title: "Join a team of builders.",
    lede: "We are looking for people who build properly, say what they cannot do, and answer when it breaks.",
    where: "Building from Valencia, Spain, and from Argentina, across two time zones that cover the working day in Europe and the Americas.",
  },
  inside: {
    label: "We build inside...",
    names: ["GoHighLevel", "Zapier", "Klaviyo", "Stripe", "Cloudflare", "Figma"],
  },
  values: {
    title: "Our values.",
    lede: "To build for businesses that live off the next quote request, we hold to four principles in everything we do, from what goes on a site to how we answer a message.",
    items: [
      {
        icon: "diamond",
        title: "Promise what you can deliver.",
        body: "If a line cannot be defended on a call, it does not go on the site, in a proposal or in an estimate.",
      },
      {
        icon: "circle",
        title: "Say the limit first.",
        body: "Every strong claim comes with how it works or where it stops. Saying what we do not do is what makes the rest believable.",
      },
      {
        icon: "hexagon",
        title: "Talk to whoever builds it.",
        body: "Design, build and automation happen in house. The person who built something is the one who answers when it breaks.",
      },
      {
        icon: "square",
        title: "The client owns everything.",
        body: "The site, the domain and the customer data belong to the client. We build so they could leave tomorrow.",
      },
    ],
  },
  positions: {
    title: "Open positions.",
    lede: "If you want to build the site and the system behind it for people who answer the phone from a roof, we would like to hear from you.",
    count: "No open positions right now.",
    groups: [
      {
        name: "Open Applications",
        roles: [
          { title: "General Application", location: "Valencia, Argentina [Remote]", href: applyHref },
        ],
      },
    ],
  },
  rightRole: {
    title: "Right role, right time.",
    lede: "There is nothing open today. Tell us what you do and where you are, and we will write when a role fits.",
    cta: "Send an open application",
    scene:
      "An empty list of open positions, and next to it the open application, which is always open.",
  },
  updates: {
    title: "Keep up to date.",
    lede: "See what we are building and writing.",
    cards: [
      {
        icon: "in",
        title: "LinkedIn",
        body: "Follow what the team is building.",
        href: "https://www.linkedin.com/company/emmvi/",
        external: true,
      },
      {
        icon: "doc",
        title: "Blog",
        body: "What we write about quote requests, CRMs and follow-up.",
        href: "/blog/",
        external: false,
      },
    ],
  },
} as const;

/* --------------------------------------------------------------------------
   Piezas dibujadas
   -------------------------------------------------------------------------- */

/**
 * Las fotos de un pais, apiladas como los avatares del hero de Attio y
 * colocadas sobre su chincheta. Cada foto lleva el nombre en `alt`, asi que
 * el lector de pantalla recorre el equipo pais por pais.
 */
function TeamCluster({
  x,
  y,
  people,
  align,
}: {
  x: number;
  y: number;
  people: readonly { name: string; photo: string }[];
  align: "right" | "left";
}) {
  return (
    <ul
      className={`absolute flex list-none ${
        align === "right" ? "-translate-y-1/2 pl-6" : "-translate-x-full -translate-y-1/2 pr-6"
      }`}
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {people.map((p, i) => (
        <li key={p.photo} className={i > 0 ? "-ml-2.5 md:-ml-3" : ""}>
          <Image
            src={`/figma/about-us/${p.photo}.png`}
            alt={p.name}
            width={56}
            height={56}
            className="size-9 rounded-full border-2 border-paper object-cover shadow-[0_1px_4px_rgba(23,23,23,0.18)] md:size-14"
          />
        </li>
      ))}
    </ul>
  );
}

/**
 * Los iconos de los valores, en el estilo de ilustracion del sitio: uno por
 * valor, en components/careers-illustrations.tsx. Decorativos: el titulo de
 * la celda ya nombra el valor, asi que van con la etiqueta vacia.
 */
const valueScene = {
  diamond: "promise",
  circle: "limit",
  hexagon: "talk",
  square: "owns",
} as const;

function ValueIcon({ kind }: { kind: keyof typeof valueScene }) {
  return (
    <CareersIllustration
      name={valueScene[kind]}
      label=""
      className="size-24 shrink-0"
    />
  );
}

function CardIcon({ kind }: { kind: "in" | "doc" }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex size-6 items-center justify-center rounded-[6px] border border-line font-mono text-small leading-none text-ink"
    >
      {kind === "in" ? (
        "in"
      ) : (
        <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.3">
          <path d="M4 1.5h5.5L13 5v9.5H4z" />
          <path d="M9.5 1.5V5H13M6 8h4M6 10.5h4" />
        </svg>
      )}
    </span>
  );
}

/* --------------------------------------------------------------------------
   Pagina
   -------------------------------------------------------------------------- */

export default function CareersPage() {
  const t = copy;

  return (
    <>
      <SiteHeader path="/careers" />

      <main id="top">
        {/* La columna de Attio: borde fino a los lados del contenedor y, dentro,
            las dos guias discontinuas. Las secciones se separan con una regla
            a todo el ancho del contenedor. */}
        <div className="mx-auto max-w-[var(--container-wrap)] lg:border-x lg:border-line">
          {/* --- Hero ------------------------------------------------ */}
          <section className={gut}>
            <div className={`${guides} grid gap-10 py-16 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-end lg:py-24`}>
              <div>
                <p className="w-fit rounded-sm border border-line bg-paper-alt px-2.5 py-1 text-small font-medium text-ink">
                  {t.hero.eyebrow}
                </p>
                <h1 className="mt-6 max-w-[14em] text-ink">{t.hero.title}</h1>
                {/* 18px, no el `text-lede` de 24: a ese tamano el parrafo
                    competia con el h1 en vez de servirlo. */}
                <p className="mt-5 max-w-[34em] text-body text-pretty text-ink-soft">
                  {t.hero.lede}
                </p>
                <div className="mt-8">
                  <CtaLink href="#positions" className="max-md:w-full">
                    {t.hero.cta}
                  </CtaLink>
                </div>
              </div>
              {/* Donde Attio pone su grafico de contribuciones, el tablero de
                  la semana: lo que se esta construyendo y quien responde. */}
              <CareersIllustration
                name="hero"
                label={t.hero.scene}
                className="w-full max-md:mx-auto max-md:max-w-[360px]"
              />
            </div>
          </section>

          {/* --- Join a team of builders --------------------------------- */}
          {/* Donde Attio pone la nube de avatares y la cita, el equipo con
              foto sobre el mapa de la home en su variante clara. */}
          <section className={`border-t border-line ${gut}`}>
            <div className={`${guides} py-16 lg:py-24`}>
              <h2 className="mx-auto max-w-[14em] text-center text-ink">{t.builders.title}</h2>
              <p className="mx-auto mt-4 max-w-[26em] text-center text-lede text-pretty text-ink-soft">
                {t.builders.lede}
              </p>

              <div className="relative mx-auto mt-14 max-w-[1040px]">
                <MeetMap tone="light" pins={false} />
                <TeamCluster align="right" {...team.spain} />
                <TeamCluster align="right" {...team.argentina} />
              </div>

              <p className="mx-auto mt-10 max-w-[28em] text-center text-ui text-pretty text-ink-soft">
                {t.builders.where}
              </p>
            </div>
          </section>

          {/* --- We build inside --------------------------------------- */}
          {/* La fila "We've sharpened our skills at…" con nombres en gris
              donde Attio pone logotipos. */}
          <section className={`border-t border-line ${gut}`}>
            <div className={`${guides} py-14 text-center lg:py-16`}>
              <p className="text-small text-ink-soft">{t.inside.label}</p>
              <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-14">
                {t.inside.names.map((n) => (
                  <li key={n} className="text-h4 font-bold text-ink-soft/70">
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* --- Our values ------------------------------------------- */}
          <section className={`border-t border-line ${gut}`}>
            <div className={`${guides} py-16 lg:py-24`}>
              <h2 className="text-ink">{t.values.title}</h2>
              <p className="mt-4 max-w-[30em] text-lede text-pretty text-ink-soft">
                {t.values.lede}
              </p>
              {/* 2×2 con reglas entre celdas, icono a la izquierda y texto a la
                  derecha, como el suyo. */}
              <ul className="mt-14 grid list-none border-t border-line md:grid-cols-2">
                {t.values.items.map((v, i) => (
                  <li
                    key={v.title}
                    className={`flex items-center gap-6 border-b border-line py-8 md:pr-10 ${
                      i % 2 === 1 ? "md:border-l md:pl-10" : ""
                    }`}
                  >
                    <ValueIcon kind={v.icon} />
                    <div>
                      <h3 className="text-ink">{v.title}</h3>
                      <p className="mt-2 max-w-[26em] text-copy text-pretty text-ink-soft">
                        {v.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* --- Open positions ----------------------------------------- */}
          <section id="positions" className={`scroll-mt-24 border-t border-line ${gut}`}>
            <div className={`${guides} pt-16 pb-6 text-center lg:pt-24`}>
              <h2 className="text-ink">{t.positions.title}</h2>
              <p className="mx-auto mt-4 max-w-[28em] text-lede text-pretty text-ink-soft">
                {t.positions.lede}
              </p>
              {/* Donde Attio dice "36 open positions match the current filters". */}
              <p className="mt-10 text-small text-ink-soft">{t.positions.count}</p>

            </div>
          </section>

          {/* La lista sale de las guias y va de borde a borde del contenedor,
              como la suya: cabecera de grupo en gris con el recuento en
              superindice, y filas numeradas con el destino a la derecha. */}
          {t.positions.groups.map((g) => (
            <section key={g.name} aria-labelledby={`group-${g.name}`} className="pb-16 lg:pb-24">
              <p
                id={`group-${g.name}`}
                className={`border-y border-line bg-paper-alt py-5 text-h4 font-medium text-ink ${gut}`}
              >
                {g.name}
                <sup className="ml-1 font-mono text-small font-normal text-ink-soft">
                  [{g.roles.length}]
                </sup>
              </p>
              <ol className="list-none">
                {g.roles.map((r, i) => (
                  <li key={r.title} className="border-b border-line">
                    <a
                      href={r.href}
                      className={`grid min-h-[64px] grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 py-4 transition-colors hover:bg-paper-alt focus-visible:outline-[3px] focus-visible:-outline-offset-[3px] focus-visible:outline-violet md:grid-cols-[2.5rem_1fr_1fr_auto] ${gut}`}
                    >
                      <span className="row-span-2 font-mono text-small text-ink-soft md:row-span-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-ui font-medium text-ink">{r.title}</span>
                      <span className="col-start-2 text-small text-ink-soft md:col-start-auto md:text-ui">
                        {r.location}
                      </span>
                      <span aria-hidden="true" className="col-start-3 row-span-2 row-start-1 text-ink-soft md:col-start-auto md:row-span-1 md:row-start-auto">
                        &rarr;
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </section>
          ))}

          {/* --- Right role, right time ----------------------------------- */}
          {/* Su panel de suscripcion: texto a la izquierda y, a la derecha,
              la escena del estado sin puestos (la lista vacia y la
              candidatura abierta) donde Attio pone su avion de papel. Sin lista de correo, el boton
              manda al mismo buzon que la candidatura abierta. */}
          <section className={`border-t border-line bg-paper-alt ${gut}`}>
            <div className={`${guides} grid items-center gap-10 py-16 md:grid-cols-2 lg:py-20`}>
              <div>
                <h2 className="text-ink">{t.rightRole.title}</h2>
                <p className="mt-4 max-w-[24em] text-lede text-pretty text-ink-soft">
                  {t.rightRole.lede}
                </p>
                <div className="mt-8">
                  <CtaLink href={applyHref} className="max-md:w-full">
                    {t.rightRole.cta}
                  </CtaLink>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <CareersIllustration
                  name="empty"
                  label={t.rightRole.scene}
                  className="w-full max-w-[420px]"
                />
              </div>
            </div>
          </section>

          {/* --- Keep up to date ------------------------------------------ */}
          <section className={`border-t border-line ${gut}`}>
            <div className={`${guides} py-16 lg:py-24`}>
              <h2 className="text-ink">{t.updates.title}</h2>
              <p className="mt-4 text-lede text-pretty text-ink-soft">{t.updates.lede}</p>
              <ul className="mt-10 grid list-none gap-4 md:grid-cols-2">
                {t.updates.cards.map((c) => {
                  const cls =
                    "lift block rounded-md border border-line bg-paper p-6 transition-colors hover:border-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet";
                  const inner = (
                    <>
                      <CardIcon kind={c.icon} />
                      <span className="mt-4 block text-ui font-semibold text-ink">{c.title}</span>
                      <span className="mt-1 block text-copy text-ink-soft">{c.body}</span>
                    </>
                  );
                  return (
                    <li key={c.title}>
                      {c.external ? (
                        <a href={c.href} rel="noopener" target="_blank" className={cls}>
                          {inner}
                        </a>
                      ) : (
                        <Link href={c.href} className={cls}>
                          {inner}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter path="/careers" />
    </>
  );
}
