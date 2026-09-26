import Image from "next/image";

import { CalendlyButton } from "@/components/calendly-button";
import { ContactForm } from "@/components/contact-form";
import { HomeIllustration } from "@/components/home-illustrations";
import { JourneySteps } from "@/components/journey-steps";
import { MeetMap } from "@/components/meet-map";
import { OrganizationSchema } from "@/components/organization-schema";
import { ClientMarquee } from "@/components/services/client-marquee";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { homeCopy } from "@/lib/copy/home";
import type { Locale } from "@/lib/i18n";

/**
 * La home, en los dos idiomas. Es la historia de una solicitud: entra, se
 * contesta, se persigue el presupuesto y se pide la reseña. El texto vive en
 * lib/copy/home.ts; aqui esta la composicion y el porque de cada seccion.
 *
 * app/(en)/page.tsx y app/(es)/es/page.tsx la montan con su `locale`. La
 * pantalla de espera (COMING_SOON) la decide la ruta inglesa, no esta
 * plantilla.
 *
 * **Las escenas ilustradas siguen en ingles en la version española.** Su
 * texto es `<text>` dentro del SVG (components/home-illustrations.tsx), asi
 * que es traducible, pero cada frase en español es mas larga y hay que
 * revisar el encaje escena por escena. Lo que si cambia de idioma es su
 * `aria-label`, que es lo que oye un lector de pantalla.
 */

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const section = "py-16 lg:py-[104px]";

/** Cada seccion de la historia: titular, texto y una escena. `flip` pone la
 *  escena a la izquierda en escritorio, para que las secciones se alternen en
 *  vez de repetir la misma composicion. */
function StorySection({
  id,
  title,
  body,
  children,
  alt = false,
  lavender = false,
  flip = false,
}: {
  id?: string;
  title: string;
  body: React.ReactNode;
  children: React.ReactNode;
  alt?: boolean;
  /** Fondo con el degradado --lavender en vez de la banda gris. */
  lavender?: boolean;
  flip?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${lavender ? "bg-[image:var(--lavender)]" : alt ? "bg-paper-alt" : ""} ${id ? "scroll-mt-24" : ""} ${section}`}
    >
      <div
        className={`${wrap} grid items-center gap-8 md:gap-16 ${
          flip
            ? "md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
            : "md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
        }`}
      >
        <div className={flip ? "md:order-2" : ""}>
          <h2 className="text-ink">{title}</h2>
          <div className="mt-5 max-w-[30em] text-lede text-pretty text-ink-soft">
            {body}
          </div>
        </div>
        <div className={`-mx-6 md:mx-0 ${flip ? "md:order-1" : ""}`}>
          {children}
        </div>
      </div>
    </section>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = homeCopy[locale];

  return (
    <>
      <OrganizationSchema />
      <SiteHeader locale={locale} path="/" />

      <main id="top">
        {/* El titular es la promesa verificable, no un resultado de negocio: se
            puede defender en la llamada. Al lado, la escena que la demuestra:
            la solicitud de las 21:47 contestada 34 segundos despues. En movil
            la escena se recorta al telefono, que es lo que tiene que leerse. */}
        <section className={`${wrap} grid items-center gap-10 pt-12 pb-16 md:grid-cols-2 md:gap-12 md:pt-16 md:pb-20 lg:pt-[88px] lg:pb-24`}>
          <div>
            <h1 className="max-w-[14em] text-ink">
              {t.hero.title}
            </h1>
            <p className="mt-5 max-w-[30em] text-lede text-pretty text-ink-soft md:mt-6">
              {t.hero.lede}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-9">
              <CalendlyButton className="max-md:w-full">
                {t.hero.cta}
              </CalendlyButton>
              <a
                href="#services"
                className="inline-flex min-h-[44px] items-center text-ui font-medium text-ink underline underline-offset-[5px] hover:text-ink-black max-md:hidden"
              >
                {t.hero.seeMore}
              </a>
            </div>
          </div>
          <HomeIllustration
            name="reply"
            label={t.hero.scene}
            className="max-md:-mx-6"
          />
        </section>

        {/* Cinta de clientes, la misma de /services/website-design. Va aqui,
            entre el hero y el relato: los logos contestan a "¿y a quien se lo
            habeis hecho?", y mas abajo partirian en dos la historia de la
            solicitud. Son todos clientes reales; el trust band del Figma usaba
            ShapeShift, Cameo y Bounce, que no son clientes. */}
        <section className={`reveal ${wrap} pb-16 lg:pb-20`}>
          <ClientMarquee locale={locale} />
        </section>

        <StorySection lavender flip title={t.lost.title} body={t.lost.body}>
          <HomeIllustration name="chaos" label={t.lost.scene} />
        </StorySection>

        {/* El centro de la pagina: lo que le pasa a una solicitud. En
            escritorio es la escena ancha; en movil las cuatro tarjetas en
            columna, porque en fila no se leen a 390px. */}
        <section id="services" className={`reveal scroll-mt-24 ${section}`}>
          <div className={wrap}>
            <h2 className="text-ink md:text-center">
              {t.services.title}
            </h2>
            <p className="mt-5 max-w-[30em] text-lede text-pretty text-ink-soft md:mx-auto md:text-center">
              {t.services.lede}
            </p>
            <HomeIllustration
              name="journey"
              label={t.services.scene}
              className="mx-auto mt-10 max-w-[1040px] max-md:hidden"
            />
            <JourneySteps locale={locale} className="mt-10 md:hidden" />
          </div>
        </section>

        <StorySection alt title={t.board.title} body={t.board.body}>
          <HomeIllustration name="board" label={t.board.scene} />
        </StorySection>

        <StorySection flip title={t.work.title} body={t.work.body}>
          <HomeIllustration name="work" label={t.work.scene} />
        </StorySection>

        {/* --night acaba en #2e2e2e, asi que el blanco al 80% aguanta hasta el
            final del recorrido: 9.25:1 en el peor punto. Antes terminaba en
            #7d7d7d y habia que reservar el tramo claro como aire. */}
        <section id="about" className={`bg-night scroll-mt-24 ${section}`}>
          <div className={`reveal ${wrap}`}>
            <h2 className="text-white">{t.about.title}</h2>
            {/* Sin nombres propios y sin repartir roles entre personas: las
                dos cosas dicen cuanta gente hay. Ciudades si — eso es donde se
                trabaja, no cuantos. Ver PRODUCT.md. */}
            <p className="mt-6 max-w-[38em] text-body text-pretty text-white/80">
              {t.about.body}
            </p>
            {/* De borde a borde en movil: el mapa esta dibujado para 1200 de
                ancho y dentro del canal se queda en nada. */}
            <div className="mt-12 -mx-6 w-screen max-w-[100vw] lg:mx-0 lg:w-auto lg:max-w-none">
              <MeetMap locale={locale} />
            </div>

            <p className="mt-10 max-w-[38em] text-body text-pretty text-white/80">
              {t.about.timezones}
            </p>
          </div>
        </section>

        <section id="who" className={`reveal scroll-mt-24 ${section}`}>
          <div className={wrap}>
            <h2 className="text-ink">{t.who.title}</h2>
            <div className="mt-14 border-t border-line">
              {t.who.rows.map((row) => (
                <div
                  key={row.title}
                  className="grid gap-4 border-b border-line py-8 md:grid-cols-[0.95fr_1.05fr] md:gap-12"
                >
                  <h3 className="text-ink">{row.title}</h3>
                  <p className="text-body text-pretty text-ink-soft">
                    {row.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-[36em] text-body text-pretty text-ink-soft">
              {t.who.note}
            </p>
          </div>
        </section>

        <section className={`reveal ${section}`}>
          <div className={wrap}>
            <p className="text-eyebrow text-ink">{t.testimonials.eyebrow}</p>
            <h2 className="mt-2 text-ink">
              {t.testimonials.title}
            </h2>
            <div className="mt-12 grid items-stretch gap-6 min-[900px]:grid-cols-3">
              {t.testimonials.items.map((item) => (
                <blockquote
                  key={item.name}
                  className="m-0 flex flex-col rounded-md border border-line bg-paper p-8"
                >
                  <h3 className="mb-3 text-ink">
                    {item.title}
                  </h3>
                  <p className="flex-1 text-copy tracking-[-0.2px] text-pretty text-ink-soft">
                    {item.quote}
                  </p>
                  <cite className="mt-6 flex items-center gap-3 border-t border-line pt-5 not-italic">
                    {item.photo ? (
                      <Image
                        src={item.photo}
                        alt=""
                        width={40}
                        height={40}
                        loading="lazy"
                        className="size-10 shrink-0 rounded-full object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="grid size-10 shrink-0 place-items-center rounded-full bg-[#f0edff] text-small font-bold text-violet-ink"
                      >
                        {item.initials}
                      </span>
                    )}
                    <span className="text-ui tracking-[-0.2px]">
                      <span className="block font-semibold text-ink">
                        {item.name}
                      </span>
                      <span className="block text-ink-soft">{item.org}</span>
                    </span>
                  </cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="call" className={`bg-paper-alt scroll-mt-24 ${section}`}>
          <div
            className={`reveal ${wrap} grid items-center gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16`}
          >
            <div>
              <h2 className="text-ink">
                {t.call.before}
                <span className="whitespace-nowrap">{t.call.nowrap}</span>
                {t.call.after}
              </h2>
              <p className="mt-5 max-w-[30em] text-lede text-pretty text-ink-soft">
                {t.call.lede}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <CalendlyButton className="max-md:w-full">
                  {t.call.cta}
                </CalendlyButton>
                <a
                  href="#contact"
                  className="inline-flex min-h-[44px] items-center text-ui text-ink-soft underline underline-offset-[5px] hover:text-ink max-md:w-full max-md:justify-center"
                >
                  {t.call.or}
                </a>
              </div>
            </div>
            <HomeIllustration
              name="call"
              label={t.call.scene}
              className="-mx-6 md:mx-0"
            />
          </div>
        </section>

        <section id="faq" className={`reveal scroll-mt-24 ${section}`}>
          <div className={wrap}>
            <h2 className="text-ink">{t.faq.title}</h2>
            <div className="mt-12 max-w-[920px]">
              {t.faq.items.map((f) => (
                <details
                  key={f.q}
                  open={f.open}
                  className="group border-b border-line py-6"
                >
                  <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-6 text-h4 font-semibold text-ink group-open:text-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-ui font-normal text-ink-black group-open:text-violet"
                    >
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">&ndash;</span>
                    </span>
                  </summary>
                  <p className="mt-4 text-body text-pretty text-ink-soft">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={`reveal ${wrap} scroll-mt-24 ${section}`}>
          <div className="grid items-start gap-10 rounded-lg bg-paper-panel p-9 min-[900px]:grid-cols-2 min-[900px]:gap-16 min-[900px]:p-16">
            <div>
              <h2 className="text-ink">{t.contact.title}</h2>
              <p className="mt-5 max-w-[34em] text-lede text-pretty text-ink-soft">
                {t.contact.lede}
              </p>
            </div>
            <ContactForm locale={locale} />
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} path="/" />
    </>
  );
}
