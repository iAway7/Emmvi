import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaLink } from "@/components/cta-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SalesForm } from "@/components/services/sales-form";
import { pageMetadata } from "@/lib/site";

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
 *  - "Explore Opportunities" no tiene destino en el archivo y no hay página de
 *    empleo: lleva al formulario.
 */

export const metadata: Metadata = pageMetadata({
  path: "/about-us",
  // Absoluto: la plantilla "%s · Emmvi" dejaria "About Emmvi · Emmvi".
  title: "About Emmvi — websites and the systems behind them",
  absoluteTitle: true,
  description:
    "Emmvi builds websites and the systems that run behind them, from Valencia and from Argentina. How a project actually runs, and who we work with.",
  legacy: true,
});

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
const h2Class = "text-h2 text-balance text-ink";

/**
 * Las tres bandas de texto del archivo miden 674 px con 197, 242 y 281 px de
 * contenido: 238, 216 y 196 px de aire arriba y abajo. Son tres valores para lo
 * mismo, así que aquí comparten uno.
 */
const band = "py-20 lg:py-[200px]";

/** Párrafo grande de las tres bandas: 30 px con tracking -1px y línea de 45. */
const lead30 =
  "text-[1.5rem] leading-[36px] tracking-[-0.033em] text-pretty lg:text-[1.875rem] lg:leading-[45px]";

/** Antetítulo de banda: 18 px medium en versalitas, tracking -0.4px. */
const eyebrow = "text-[1.125rem] leading-normal font-medium tracking-[-0.022em] uppercase";

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
        : "bg-ink";
  return (
    <span aria-hidden="true" className="relative block h-[3px] w-[83px]">
      <span className={`absolute inset-x-0 top-px block h-px ${color}`} />
      <span className={`absolute top-0 left-0 block h-[3px] w-[41.5px] ${color}`} />
    </span>
  );
}

/** Los tres SVG traen la caja de 56 px, su borde y el dibujo, como los iconos
 *  de website-design: el markup no vuelve a pintar el chip. */
const values = [
  {
    icon: "/figma/about-us/expertise.svg",
    title: "Expertise",
    body: "Highlighting our experience and knowledge in the industry.",
  },
  {
    icon: "/figma/about-us/client-centric.svg",
    title: "Client-Centric",
    body: "Emphasizing our commitment to client satisfaction.",
  },
  {
    icon: "/figma/about-us/transparency-and-integrity.svg",
    title: "Transparency and Integrity",
    body: "At Emmvi, honesty is our guiding principle. We make realistic promises and work closely with you to achieve your goals effectively.",
  },
];

/**
 * Los siete del archivo, con sus cargos. La retícula del Figma dibuja un octavo
 * hueco (nodo 165:2246, una copia de Camila oculta) para cuadrar la fila: aquí
 * la celda vacía la deja el propio grid.
 *
 * Las seis primeras fotos las entregó el usuario. La de Nicolas no venía en la
 * entrega y se exportó del mismo nodo del Figma, reescalada a los 191 px de las
 * otras seis.
 */
const team = [
  { name: "Nicolas Mastromarino", role: "SEO Analyst", photo: "nicolas-mastromarino" },
  { name: "Gustavo Polin", role: "UI Designer", photo: "gustavo-polin" },
  { name: "Ezequiel Cenicola", role: "UX Designer", photo: "ezequiel-cenicola" },
  { name: "Camila Garcia", role: "Software Engineer", photo: "camila-garcia" },
  { name: "Facundo Palombo", role: "Sr. Software Engineer", photo: "facundo-palombo" },
  { name: "Araceli Villalba", role: "Graphic Designer", photo: "araceli-villalba" },
  { name: "Lucas Burgos", role: "Social Media Strategist", photo: "lucas-burgos" },
];

export default function AboutUsPage() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* --- Our Mission --------------------------------------------- */}
        {/* El frame no tiene hero aparte: esta sección lo es, y su titular va a
            64px, el tamaño del h1, no a los 51 del text-h2. */}
        <section className={`${wrap} pt-14 pb-16 lg:pt-24 lg:pb-24`}>
          <p className="mx-auto w-fit rounded-sm bg-[#f8f8ff] px-2 py-1.5 text-[1rem] leading-[22px] font-medium text-violet-ink">
            Our Mission
          </p>
          <h1 className="mt-4 text-center text-display text-balance text-ink">
            Streamlining Entrepreneurial Journeys
          </h1>
          <p className="mx-auto mt-6 max-w-[1044px] text-center text-body text-pretty text-ink-soft">
            At emmvi.com, our mission is clear: to provide affordable solutions
            for entrepreneurs and help them grow without the hassle of dealing
            with the technical complexities that often accompany business growth.
          </p>

          {/* El Figma centra las tres tarjetas en una caja de 232px, así que los
              tres iconos quedan a tres alturas distintas. En una fila de tres
              iguales eso se lee como un error, no como una decisión: aquí van
              alineadas arriba. El hueco entre columnas es el 6% del ancho de
              contenido, que a 1296 son los 78px del archivo. */}
          <ul className="mt-16 grid list-none items-start gap-y-12 min-[900px]:grid-cols-3 min-[900px]:gap-x-[6%]">
            {values.map((v) => (
              <li key={v.title}>
                <Image
                  src={v.icon}
                  alt=""
                  width={56}
                  height={56}
                  className="size-14"
                />
                <h2 className="mt-4 text-h3 text-ink">{v.title}</h2>
                <p className="mt-4 text-copy tracking-[-0.0125em] text-pretty text-ink-soft">
                  {v.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* --- About Us ------------------------------------------------ */}
        {/* Banda a sangre en --color-ink, la única de esta pantalla. */}
        <section className="bg-ink">
          <div className={`${wrap} ${band}`}>
            <h2 className={`${eyebrow} text-paper`}>About Us</h2>
            <div className="mt-4">
              <Divider tone="violet-light" />
            </div>
            <p className={`mt-6 ${lead30} text-paper`}>
              At Emmvi, we believe in simplicity and honesty. Founded in{" "}
              {FOUNDED} by a team of professionals with over {yearsSinceFounding}{" "}
              years of experience in digital marketing, design, and development,
              our company was born out of a passion for helping entrepreneurs
              establish effective online presences.
            </p>
          </div>
        </section>

        {/* --- Our mission --------------------------------------------- */}
        {/* El archivo repite el rótulo del hero: allí es la chapa violeta y aquí
            el antetítulo de banda. Se conservan los dos. */}
        <section className="border-b border-line">
          <div className={`${wrap} ${band}`}>
            <h2 className={`${eyebrow} text-ink`}>Our mission</h2>
            <div className="mt-4">
              <Divider tone="violet" />
            </div>
            <p className={`mt-6 ${lead30} text-ink-soft`}>
              Our mission is to simplify the lives of entrepreneurs, from small
              businesses to large agencies. We understand that establishing an
              online presence can be overwhelming, which is why we offer
              comprehensive services, including SEO, Email Marketing, Web Design,
              and PPC, so you can focus on what you do best while we take care of
              the rest.
            </p>
          </div>
        </section>

        {/* --- The team behind ----------------------------------------- */}
        <section className={`${wrap} ${band}`}>
          <p className={`${eyebrow} text-ink`}>The team behind</p>
          <h2 className={`mt-6 ${h2Class}`}>
            Worldwide Digital Marketing Professionals.
          </h2>
          <div className="mt-4">
            <Divider tone="ink" />
          </div>
          <p className={`mt-6 ${lead30} text-ink-soft`}>
            Our story began when a group of experts decided to combine their
            knowledge and experience in the digital world to establish Emmvi.
            After years of collaboration in the industry, we knew we could make a
            difference by providing high-quality services with a focus on honesty
            and transparency.
          </p>
        </section>

        {/* --- Our Team ------------------------------------------------ */}
        <section className={`${wrap} py-16 lg:py-24`}>
          <h2 className={`text-center ${h2Class}`}>Our Team</h2>
          <p className="mx-auto mt-6 max-w-[658px] text-center text-[1.125rem] leading-8 text-pretty text-ink-soft">
            Emmvi started with helping people build awesome projects. Each day
            our team continues to grow and empower more creators in the world to
            do that.
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
            {team.map((p) => (
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
                <p className="mt-4 text-[1.25rem] leading-7 font-medium tracking-[-0.02em] text-ink">
                  {p.name}
                </p>
                <p className="text-[1rem] leading-7 tracking-[-0.025em] text-ink-soft">
                  {p.role}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* --- Join Our Passionate Crew -------------------------------- */}
        <section className={`${wrap} pb-16 lg:pb-24`}>
          <div className="flex flex-col items-center gap-6 rounded-lg bg-paper-panel px-6 py-16 text-center lg:py-[90px]">
            <h2 className={h2Class}>Join Our Passionate Crew</h2>
            <p className={`${lead30} text-ink-soft`}>
              Join us and shape the future of the web
            </p>
            {/* El botón del Figma no tiene destino y no hay página de empleo:
                lleva al formulario, que es donde llegaría la candidatura. */}
            <CtaLink href="#contact">Explore Opportunities</CtaLink>
          </div>
        </section>

        {/* --- Talk to our Sales team ---------------------------------- */}
        <section id="contact" className={`${wrap} scroll-mt-24 pb-16 lg:pb-[104px]`}>
          <h2 className={`text-center ${h2Class}`}>Talk to our Sales team</h2>
          <p className="mx-auto mt-5 max-w-[40em] text-center text-body text-pretty text-ink-soft">
            We&rsquo;ll help you find the right plan and pricing for your business.
          </p>

          <div className="mt-12 rounded-lg bg-paper-panel p-6 min-[900px]:p-16">
            <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,460px)_minmax(0,1fr)] min-[900px]:gap-20">
              <div>
                <SalesForm />
                <p className="mt-5 max-w-[34em] text-small text-ink-soft">
                  By submitting this form, I confirm that I have read and
                  understood the Emmvi{" "}
                  <Link
                    href="/privacy-policy/"
                    className="text-ink underline underline-offset-[3px] hover:text-violet"
                  >
                    Privacy Statement
                  </Link>
                  .
                </p>
              </div>

              {/* El Figma repite aquí la cita de Email Marketing y la firma con
                  un logo de cliente sin verificar. Las otras tres pantallas
                  dejan un placeholder porque ya traen sus testimonios reales
                  más arriba; esta no tiene sección de testimonios, así que va
                  uno real y atribuible. Habla del trabajo de Nico, que es de
                  quien va esta página. */}
              <blockquote className="text-ink-soft">
                <p aria-hidden="true" className="text-h3">&ldquo;</p>
                <p className="mt-2 text-[1.25rem] leading-[32px] text-pretty">
                  I was drowning in manual work and reached out to Nico for help
                  with automations. He set up email flows, follow-ups, and little
                  systems I didn&rsquo;t even know I needed. Everything feels more
                  organized now.
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <Image
                    src="/testimonials/adriana-patania-1.png"
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                    className="size-10 shrink-0 rounded-full object-cover"
                  />
                  <span className="text-small leading-5">
                    <span className="block font-bold text-ink">Adriana Patania</span>
                    <span className="block text-ink-soft">Local gym</span>
                  </span>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
