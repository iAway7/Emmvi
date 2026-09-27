/**
 * COPIA DE TRABAJO de la home (components/pages/home.tsx), servida en
 * /home-lab/ con noindex y fuera del sitemap. Existe para probar cambios de
 * diseño (skills de taste, gradientes, etc.) sin tocar la home real. Cuando
 * algo de aquí convenza, se pasa a mano a home.tsx y esta copia se borra.
 */
import Image from "next/image";

import { CalendlyButton } from "@/components/calendly-button";
import { ContactForm } from "@/components/contact-form";
import { SceneLab } from "@/components/scenes-lab";
import { JourneySteps } from "@/components/journey-steps";
import { MeetMap } from "@/components/meet-map";
import { ClientMarquee } from "@/components/services/client-marquee";
import { SiteFooter } from "@/components/site-footer";
import { StatBand } from "@/components/stat-band";
import { ToolMarquee } from "@/components/tool-marquee";
import { stats, tools } from "@/lib/capabilities";
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

/** Recortes de las citas para la home: la frase que mas dice, en tres lineas.
 *  Son fragmentos literales de las citas completas de lib/copy/home.ts, sin
 *  reescribir nada. Solo en ingles: la version española cae en la integra. */
const labQuotes: Record<string, string> = {
  "Jared White":
    "They have a great eye for design and a strong focus on user experience, making sure everything not only looks good but is easy to navigate.",
  "Adriana Patania":
    "He set up email flows, follow-ups, and little systems I didn't even know I needed. Everything feels more organized now.",
  "Alicia Ryz":
    "It looks clean, it loads fast, and it works great on phones too. He really listened to what I needed and made the process super smooth.",
};

/**
 * Composicion de la home real (bandas alternas, texto a un lado y escena al
 * otro) con profundidad encima. Lo que la hacia plana no era la estructura
 * sino que cada banda era un rectangulo a sangre pegado al siguiente:
 *
 * - Cada seccion es una "hoja" (.sheet): se monta 48px sobre la anterior con
 *   la esquina superior redondeada, y el z-index crece hacia abajo. La pagina
 *   se lee como hojas apiladas, no como franjas.
 * - En las bandas con fondo, la escena asoma por encima del borde superior
 *   de su hoja (md:-mt-*), asi que cruza dos fondos.
 * - Tarjetas y paneles llevan sombra tintada del violeta (.shadow-tint), no
 *   negra.
 * - Las bandas grises llevan un brillo radial muy suave arriba a la izquierda
 *   en vez de un gris uniforme.
 *
 * Los textos siguen en lib/copy/home.ts. Las escenas son las de scenes-lab.tsx.
 */
const sheet =
  "sheet relative -mt-8 rounded-t-[32px] md:-mt-12 md:rounded-t-[48px]";
const glow =
  "bg-paper-alt bg-[radial-gradient(120%_80%_at_0%_0%,#ffffff_0%,transparent_60%)]";

function StorySection({
  id,
  z,
  title,
  body,
  children,
  tone = "paper",
  flip = false,
  peek = false,
}: {
  id?: string;
  /** Orden de apilado: crece hacia abajo. */
  z: number;
  title: string;
  body: React.ReactNode;
  children: React.ReactNode;
  tone?: "paper" | "alt" | "lavender";
  flip?: boolean;
  /** La escena asoma por encima del borde de la hoja. */
  peek?: boolean;
}) {
  const bg =
    tone === "lavender"
      ? "bg-[image:var(--lavender)]"
      : tone === "alt"
        ? glow
        : "bg-paper";
  return (
    <section
      id={id}
      style={{ zIndex: z }}
      className={`${sheet} ${bg} ${id ? "scroll-mt-24" : ""} ${section}`}
    >
      <div
        className={`${wrap} grid items-center gap-8 md:gap-16 ${
          flip
            ? "md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
            : "md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
        }`}
      >
        <div className={`reveal ${flip ? "md:order-2" : ""}`}>
          <h2 className="text-ink">{title}</h2>
          <div className="mt-5 max-w-[30em] text-lede text-pretty text-ink-soft">
            {body}
          </div>
        </div>
        <div
          className={`reveal-scene -mx-6 md:mx-0 ${flip ? "md:order-1" : ""} ${
            peek ? "md:-mt-32 lg:-mt-40" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}


export function HomeLabPage({ locale }: { locale: Locale }) {
  const t = homeCopy[locale];

  return (
    <>
      <SiteHeader locale={locale} path="/" />

      <main id="top" className="home-lab">
        <section
          className={`${wrap} grid items-center gap-10 pt-12 pb-16 md:grid-cols-2 md:gap-12 md:pt-16 md:pb-20 lg:pt-[88px] lg:pb-24`}
        >
          <div>
            <h1 className="hero-in max-w-[14em] text-ink">{t.hero.title}</h1>
            <p className="hero-in mt-5 max-w-[30em] text-lede text-pretty text-ink-soft md:mt-6 [--i:1]">
              {t.hero.lede}
            </p>
            <div className="hero-in mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-9 [--i:2]">
              <CalendlyButton className="max-md:w-full">{t.hero.cta}</CalendlyButton>
              <a
                href="#services"
                className="inline-flex min-h-[44px] items-center text-ui font-medium text-ink underline underline-offset-[5px] transition-[text-underline-offset,color] duration-200 hover:text-ink-black hover:underline-offset-[8px] max-md:hidden"
              >
                {t.hero.seeMore}
              </a>
            </div>
          </div>
          <SceneLab
            name="reply"
            label={t.hero.scene}
            className="hero-in max-md:-mx-6 [--i:3]"
          />
        </section>

        <section className={`reveal ${wrap} pb-20 lg:pb-28`}>
          <ClientMarquee locale={locale} />
        </section>

        {/* --- Herramientas (banco de pruebas) ------------------------- */}
        {/* Nombres y no logos: añadir una es una linea de texto, no un SVG que
            recortar. Y un nombre dice "trabajamos con esto" sin insinuar una
            relacion comercial que un logotipo ajeno si insinua.
            Lista provisional: son las once que el sitio ya nombra en las
            paginas de SEO y Email Marketing. */}
        <section className={`reveal bg-night ${section}`}>
          <div className={wrap}>
            <h2 className="text-white">
              The tools we work in
            </h2>
            <p className="mt-5 max-w-[34em] text-body text-pretty text-white/80">
              Whatever you already pay for, we work inside it.
            </p>
          </div>
          <div className="mt-12 text-white">
            <ToolMarquee tools={tools} locale={locale} />
          </div>

          <div className={`${wrap} mt-16`}>
            <StatBand stats={stats} locale={locale} tone="dark" />
          </div>
        </section>

        <StorySection z={1} tone="lavender" flip peek title={t.lost.title} body={t.lost.body}>
          <SceneLab name="chaos" label={t.lost.scene} />
        </StorySection>

        <section
          id="services"
          style={{ zIndex: 2 }}
          className={`${sheet} reveal bg-paper scroll-mt-24 ${section}`}
        >
          <div className={wrap}>
            <h2 className="text-ink md:text-center">{t.services.title}</h2>
            <p className="mt-5 max-w-[30em] text-lede text-pretty text-ink-soft md:mx-auto md:text-center">
              {t.services.lede}
            </p>
            <SceneLab
              name="journey"
              label={t.services.scene}
              className="mx-auto mt-10 max-w-[1040px] max-md:hidden"
            />
            <JourneySteps locale={locale} className="mt-10 md:hidden" />
          </div>
        </section>

        <StorySection z={3} tone="alt" peek title={t.board.title} body={t.board.body}>
          <SceneLab name="board" label={t.board.scene} />
        </StorySection>

        <StorySection z={4} flip title={t.work.title} body={t.work.body}>
          <SceneLab name="work" label={t.work.scene} />
        </StorySection>

        <section
          id="about"
          style={{ zIndex: 5 }}
          className={`${sheet} bg-night scroll-mt-24 ${section}`}
        >
          <div className={`reveal ${wrap}`}>
            <h2 className="text-white">{t.about.title}</h2>
            <p className="mt-6 max-w-[38em] text-body text-pretty text-white/80">
              {t.about.body}
            </p>
            <div className="mt-12 -mx-6 w-screen max-w-[100vw] lg:mx-0 lg:w-auto lg:max-w-none">
              <MeetMap locale={locale} />
            </div>
            <p className="mt-10 max-w-[38em] text-body text-pretty text-white/80">
              {t.about.timezones}
            </p>
          </div>
        </section>

        <section
          id="who"
          style={{ zIndex: 6 }}
          className={`${sheet} bg-paper scroll-mt-24 ${section}`}
        >
          <div className={wrap}>
            <h2 className="reveal text-ink">{t.who.title}</h2>
            <div className="mt-14 border-t border-line">
              {t.who.rows.map((row) => (
                <div
                  key={row.title}
                  className="reveal grid gap-4 border-b border-line py-8 md:grid-cols-[0.95fr_1.05fr] md:gap-12"
                >
                  <h3 className="text-ink">{row.title}</h3>
                  <p className="text-body text-pretty text-ink-soft">{row.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-[36em] text-body text-pretty text-ink-soft">
              {t.who.note}
            </p>
          </div>
        </section>

        <section className={`${section} pt-0 lg:pt-0`}>
          <div className={wrap}>
            <h2 className="reveal text-ink">{t.testimonials.title}</h2>
            <div className="mt-12 grid gap-6 min-[900px]:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
              {t.testimonials.items.map((item, i) => (
                <blockquote
                  key={item.name}
                  className={`reveal shadow-tint m-0 flex flex-col rounded-md border border-line bg-paper p-8 ${
                    i === 0
                      ? "min-[900px]:row-span-2 min-[900px]:justify-between min-[900px]:p-12"
                      : ""
                  }`}
                >
                  <div>
                    <h3 className="mb-3 text-ink">{item.title}</h3>
                    <p
                      className={`tracking-[-0.2px] text-pretty text-ink-soft ${
                        i === 0 ? "text-lede max-w-[26em]" : "text-copy"
                      }`}
                    >
                      {labQuotes[item.name] ?? item.quote}
                    </p>
                  </div>
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
                      <span className="block font-semibold text-ink">{item.name}</span>
                      <span className="block text-ink-soft">{item.org}</span>
                    </span>
                  </cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section
          id="call"
          style={{ zIndex: 7 }}
          className={`${sheet} ${glow} scroll-mt-24 ${section}`}
        >
          <div
            className={`${wrap} grid items-center gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16`}
          >
            <div className="reveal">
              <h2 className="text-ink">
                {t.call.before}
                <span className="whitespace-nowrap">{t.call.nowrap}</span>
                {t.call.after}
              </h2>
              <p className="mt-5 max-w-[30em] text-lede text-pretty text-ink-soft">
                {t.call.lede}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <CalendlyButton className="max-md:w-full">{t.call.cta}</CalendlyButton>
                <a
                  href="#contact"
                  className="inline-flex min-h-[44px] items-center text-ui text-ink-soft underline underline-offset-[5px] hover:text-ink max-md:w-full max-md:justify-center"
                >
                  {t.call.or}
                </a>
              </div>
            </div>
            <div className="reveal-scene -mx-6 md:mx-0 md:-mt-32 lg:-mt-40">
              <SceneLab name="call" label={t.call.scene} />
            </div>
          </div>
        </section>

        <section
          id="faq"
          style={{ zIndex: 8 }}
          className={`${sheet} reveal bg-paper scroll-mt-24 ${section}`}
        >
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
                      <span className="hidden group-open:inline">&minus;</span>
                    </span>
                  </summary>
                  <p className="faq-answer mt-4 text-body text-pretty text-ink-soft">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={`reveal ${wrap} scroll-mt-24 ${section} pt-0 lg:pt-0`}>
          <div className="shadow-tint grid items-start gap-10 rounded-lg bg-paper-panel p-9 min-[900px]:grid-cols-2 min-[900px]:gap-16 min-[900px]:p-16">
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
