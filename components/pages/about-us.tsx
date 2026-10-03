import Image from "next/image";

import { CtaLink } from "@/components/cta-link";
import { MeetMap } from "@/components/meet-map";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SalesForm } from "@/components/services/sales-form";
import { aboutUsCopy, fillYears } from "@/lib/copy/about-us";
import { localizePath, type Locale } from "@/lib/i18n";

/**
 * Réplica del frame "Services - About Us" del Figma
 * (0niWGidrfk5rCNfWgb3L3z, nodo 165:2085, 1400x6122).
 *
 * Quinta pantalla del posicionamiento viejo, misma decisión que las cuatro de
 * servicio: se reconstruye a propósito y comparte su shell. A diferencia de
 * ellas, esta sí estaba enlazada desde el header y el footer de ese shell
 * —"About Us" en la nav y "Our Team" en el footer—, así que hasta ahora los dos
 * enlaces iban a un 404.
 *
 * Tres cosas del frame no se copian tal cual, y están comentadas donde pasan:
 *  - Las tres tarjetas de valores van centradas verticalmente en el archivo, lo
 *    que deja los tres iconos a tres alturas distintas. Aquí van alineadas
 *    arriba.
 *  - La cita del panel de contacto es la de Email Marketing repetida y firmada
 *    con un logo de cliente sin verificar. Va una real.
 *  - "Explore Opportunities" no tiene destino en el archivo: lleva a
 *    /careers, que existe desde 2026-10-01.
 *
 * El texto vive en lib/copy/about-us.ts, en los dos idiomas. Esta plantilla
 * la montan app/(en)/about-us/page.tsx y app/(es)/es/about-us/page.tsx.
 */

/**
 * Año de fundación. **Los años de experiencia se calculan, no se escriben.**
 *
 * El texto decia "over 8+ years" —redundante, y ademas ya iban nueve—, que es
 * lo que pasa con un numero cosido a mano en una pagina de "sobre nosotros":
 * caduca cada enero y nadie lo nota hasta que un cliente hace la resta.
 *
 * Se resuelve en build, asi que se pone al dia con cada despliegue. Redondea
 * al año natural: si la fundacion fue a final de 2017, en enero dira un año de
 * mas durante unos meses. Con "over" delante sigue siendo defendible, y es
 * mejor trato que un literal que se queda corto para siempre.
 */
const FOUNDED = 2017;
const yearsSinceFounding = new Date().getFullYear() - FOUNDED;

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const h2Class = "text-ink";

/**
 * Las tres bandas de texto del archivo miden 674 px con 197, 242 y 281 px de
 * contenido: 238, 216 y 196 px de aire arriba y abajo. Son tres valores para lo
 * mismo, así que aquí comparten uno.
 */
const band = "py-20 lg:py-[200px]";

/** Párrafo grande de las tres bandas. El Figma lo tenía a 30px con línea de
 *  45; va al lede de la escala (18 → 24px) porque es el mismo papel que el
 *  lede de cualquier otra página y un tamaño propio era una excepción más. */
const lead30 = "text-lede text-pretty";

/** Antetítulo de banda en versalitas. El Figma lo tenía a 18px; va al
 *  eyebrow de la escala (16px medium), el mismo de la home. */
const eyebrow = "text-eyebrow uppercase";

/**
 * "Divider 3" del Figma: 83 px de ancho, un filete de 1 px de punta a punta y
 * los primeros 41,5 px a 3 px de grosor. En la banda oscura y en "our mission"
 * va en violeta de marca; bajo el titular de "the team behind", en tinta.
 *
 * El de la banda oscura usa la variante clara. Con el violeta anterior daba
 * 3.88:1 sobre `--color-ink` y se veia; el nuevo se queda en 2.68:1 y casi
 * desaparece. Es decorativo, asi que no es un fallo de accesibilidad — pero un
 * divisor que no se ve no divide nada.
 */
function Divider({ tone }: { tone: "violet" | "violet-light" | "ink" }) {
  const color =
    tone === "violet"
      ? "bg-violet"
      : tone === "violet-light"
        ? "bg-violet-light"
        : "bg-ink-deep";
  return (
    <span aria-hidden="true" className="relative block h-[3px] w-[83px]">
      <span className={`absolute inset-x-0 top-px block h-px ${color}`} />
      <span className={`absolute top-0 left-0 block h-[3px] w-[41.5px] ${color}`} />
    </span>
  );
}

export function AboutUsPage({ locale = "en" }: { locale?: Locale }) {
  const t = aboutUsCopy[locale];

  return (
    <>
      <SiteHeader locale={locale} path="/about-us" />

      <main id="top">
        {/* --- Our Mission --------------------------------------------- */}
        {/* El frame no tiene hero aparte: esta sección lo es, y su titular va a
            64px, el tamaño del h1, no a los 51 del text-h2. */}
        <section className={`${wrap} pt-14 pb-16 lg:pt-24 lg:pb-24`}>
          <p className="mx-auto w-fit rounded-sm bg-[#f8f8ff] px-2 py-1.5 text-ui font-medium text-violet-ink">
            {t.mission.badge}
          </p>
          <h1 className="mt-4 text-center text-ink">{t.mission.title}</h1>
          <p className="mx-auto mt-6 max-w-[1044px] text-center text-body text-pretty text-ink-soft">
            {t.mission.lede}
          </p>

          {/* El Figma centra las tres tarjetas en una caja de 232px, así que los
              tres iconos quedan a tres alturas distintas. En una fila de tres
              iguales eso se lee como un error, no como una decisión: aquí van
              alineadas arriba. El hueco entre columnas es el 6% del ancho de
              contenido, que a 1296 son los 78px del archivo. */}
          <ul className="mt-16 grid list-none items-start gap-y-12 min-[900px]:grid-cols-3 min-[900px]:gap-x-[6%]">
            {t.values.map((v) => (
              <li key={v.title}>
                <Image
                  src={v.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="size-14"
                />
                <h3 className="mt-4 text-ink">{v.title}</h3>
                <p className="mt-4 text-copy tracking-[-0.0125em] text-pretty text-ink-soft">
                  {v.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* --- Las tres bandas de texto -------------------------------- */}
        {/* Se apilan al hacer scroll: cada una se queda clavada arriba y la
            siguiente pasa por encima. Lo hace `position: sticky` desde
            globals.css; aquí solo hace falta que las tres tengan fondo opaco y
            que estén dentro del mismo contenedor, que es lo que suelta el
            efecto al terminar. */}
        <div className="band-stack">
          {/* --- About Us ---------------------------------------------- */}
          {/* Banda a sangre en --color-ink, la única de esta pantalla. */}
          <section className="bg-ink-deep">
            <div className={`reveal ${wrap} ${band}`}>
              <p className={`${eyebrow} text-paper`}>{t.about.eyebrow}</p>
              <div className="mt-4">
                <Divider tone="violet-light" />
              </div>
              <p className={`mt-6 ${lead30} text-paper`}>
                {fillYears(t.about.body, FOUNDED, yearsSinceFounding)}
              </p>
            </div>
          </section>

          {/* --- Our mission --------------------------------------------- */}
          {/* El archivo repite el rótulo del hero: allí es la chapa violeta y aquí
              el antetítulo de banda. Se conservan los dos. */}
          <section className="border-b border-line bg-paper">
            <div className={`reveal ${wrap} ${band}`}>
              <p className={`${eyebrow} text-ink`}>{t.missionBand.eyebrow}</p>
              <div className="mt-4">
                <Divider tone="violet" />
              </div>
              <p className={`mt-6 ${lead30} text-ink-soft`}>{t.missionBand.body}</p>
            </div>
          </section>

          {/* --- The team behind --------------------------------------- */}
          <section className="bg-paper">
            <div className={`reveal ${wrap} ${band}`}>
              <p className={`${eyebrow} text-ink`}>{t.teamBand.eyebrow}</p>
              <h2 className={`mt-6 ${h2Class}`}>{t.teamBand.title}</h2>
              <div className="mt-4">
                <Divider tone="ink" />
              </div>
              <p className={`mt-6 ${lead30} text-ink-soft`}>{t.teamBand.body}</p>
            </div>
          </section>
        </div>

        {/* --- Our Team ------------------------------------------------ */}
        {/* `relative z-10` y fondo propio: es la seccion que sube por encima
            del apilado y lo tapa. Sin posicionar se pintaria por debajo. */}
        <section
          className={`reveal relative z-10 overflow-hidden bg-paper ${wrap} py-16 lg:py-24`}
        >
          {/* Mapa de fondo: el mismo de la home en su variante clara. La
              sección se llama "Worldwide" y el mapa lo enseña en vez de
              repetirlo.

              `-z-10` dentro de la sección, que ya es un contexto de apilado por
              su `z-10`: los hijos de z negativo pintan encima del fondo de la
              sección pero debajo del contenido en flujo, que es justo lo que
              hace falta. Con `z-0` taparía los retratos; sacándolo del contexto
              se iría detrás del `bg-paper` y no se vería nada.

              Decorativo: quién trabaja desde dónde ya lo anuncian el mapa de la
              home y el de /careers, y aquí compite con siete nombres. */}
          <div
            aria-hidden="true"
            className="team-map pointer-events-none absolute inset-x-0 top-1/2 -z-10 hidden -translate-y-1/2 min-[900px]:block"
          >
            <MeetMap locale={locale} tone="light" pins={false} />
          </div>

          <h2 className={`text-center ${h2Class}`}>{t.team.title}</h2>
          <p className="mx-auto mt-6 max-w-[658px] text-center text-body text-pretty text-ink-soft">
            {t.team.lede}
          </p>

          {/* Filete vertical del archivo (nodo 165:2185). Decorativo: allí cae
              20px a la derecha del centro del contenido y aquí va centrado. */}
          <div
            aria-hidden="true"
            className="mx-auto mt-6 h-[105px] w-px bg-[#4e5a74]"
          />

          {/* El Figma pone cuatro columnas de 191px con 177 de hueco (13.66%) a
              1296 de ancho. Copiar ese porcentaje daba peor resultado que el
              propio archivo: "Nicolas Mastromarino" mide 205px en DM Sans y no
              entra en 191 —en la Roboto del Figma sí—, se partía en dos líneas,
              y como los cuatro de su fila comparten fila de `subgrid`, los
              otros tres heredaban una fila de 56px para un texto de 28. Se veía
              como un hueco muerto entre el nombre y el cargo.

              El hueco baja al 9% para que la columna llegue a ~217px y el
              nombre más largo entre en una línea. Se pierde la proporción
              literal del archivo y se gana la intención, que era una pila
              apretada. La octava celda sigue vacía, como en el Figma.

              El `subgrid` se queda: por debajo de ~1100px las columnas vuelven
              a estrecharse y algún nombre se parte, y entonces es lo que
              mantiene los cargos alineados de columna a columna. */}
          <ul className="mt-10 grid list-none grid-cols-2 gap-x-8 gap-y-10 min-[900px]:grid-cols-4 min-[900px]:gap-x-[9%]">
            {t.team.members.map((p) => (
              <li
                key={p.name}
                className="min-[900px]:row-span-3 min-[900px]:grid min-[900px]:grid-rows-subgrid min-[900px]:gap-y-0"
              >
                <Image
                  src={`/figma/about-us/${p.photo}.png`}
                  alt=""
                  width={191}
                  height={191}
                  loading="lazy"
                  className="aspect-square w-full max-w-[191px] rounded-sm object-cover"
                />
                <p className="mt-4 text-h4 font-medium text-ink">
                  {p.name}
                </p>
                <p className="text-copy text-ink-soft">
                  {p.role}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* --- Join Our Passionate Crew -------------------------------- */}
        <section className={`reveal ${wrap} pb-16 lg:pb-24`}>
          <div className="flex flex-col items-center gap-6 rounded-lg bg-paper-panel px-6 py-16 text-center lg:py-[90px]">
            <h2 className={h2Class}>{t.join.title}</h2>
            <p className={`${lead30} text-ink-soft`}>{t.join.lede}</p>
            {/* El botón del Figma no tiene destino. Llevaba al formulario
                mientras no hubo página de empleo; desde 2026-10-01 la hay. */}
            <CtaLink href={localizePath("/careers", locale)}>{t.join.cta}</CtaLink>
          </div>
        </section>

        {/* --- Talk to our Sales team ---------------------------------- */}
        <section id="contact" className={`reveal ${wrap} scroll-mt-24 pb-16 lg:pb-[104px]`}>
          <h2 className={`text-center ${h2Class}`}>{t.sales.title}</h2>
          <p className="mx-auto mt-5 max-w-[40em] text-center text-body text-pretty text-ink-soft">
            {t.sales.lede}
          </p>

          <div className="mt-12 rounded-lg bg-paper-panel p-6 min-[900px]:p-16">
            <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,460px)_minmax(0,1fr)] min-[900px]:gap-20">
              <div>
                <SalesForm locale={locale} />
              </div>

              {/* El Figma repite aquí la cita de Email Marketing y la firma con
                  un logo de cliente sin verificar. Las otras tres pantallas
                  dejan un placeholder porque ya traen sus testimonios reales
                  más arriba; esta no tiene sección de testimonios, así que va
                  uno real y atribuible. Habla del trabajo de Nico, que es de
                  quien va esta página. */}
              <blockquote className="text-ink-soft">
                <p aria-hidden="true" className="text-h3">&ldquo;</p>
                <p className="mt-2 text-lede text-pretty">{t.sales.quote.text}</p>
                <footer className="mt-6 flex items-center gap-3">
                  <Image
                    src={t.sales.quote.photo}
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                    className="size-10 shrink-0 rounded-full object-cover"
                  />
                  <span className="text-small leading-5">
                    <span className="block font-bold text-ink">{t.sales.quote.name}</span>
                    <span className="block text-ink-soft">{t.sales.quote.org}</span>
                  </span>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} path="/about-us" />
    </>
  );
}
