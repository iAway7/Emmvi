import Image from "next/image";
import Link from "next/link";

import { CalendlyButton } from "@/components/calendly-button";
import { FaqAccordion } from "@/components/faq-accordion";
import { HomeIllustration } from "@/components/home-illustrations";
import { InstallersHeroIllustration } from "@/components/installers-hero-illustration";
import { QuoteTimeline } from "@/components/quote-timeline";
import { ClientMarquee } from "@/components/services/client-marquee";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { homeCopy } from "@/lib/copy/home";
import { installersCopy, type SetupIcon } from "@/lib/copy/installers";
import { localizePath, type Locale } from "@/lib/i18n";

/**
 * /installers: la pagina de destino del outreach a instaladores. Cabecera y
 * pie son los del sitio; lo que cambia es el medio, que sigue el borrador
 * "emmvi Installers.html" (2026-09-28) seccion por seccion:
 *
 *   hero con la escena "lo que ve tu cliente" · "no vendemos anuncios" ·
 *   el recorrido de una solicitud (oscuro) · lo que se monta · clientes ·
 *   proceso · FAQ · reservar (oscuro)
 *
 * Dos secciones del borrador salieron por decision del usuario (2026-09-28):
 * "Yours if you leave", que ya dice la fila "The customer data" y el FAQ, y
 * la demo del SMS ("See the text yourself"), que necesitaba un webhook de
 * GoHighLevel que no existe todavia. Si vuelve, el borrador
 * "emmvi Installers.html" tiene el diseño: nombre y movil, y el texto llega
 * desde el mismo flujo que se le monta a un cliente.
 *
 * El texto vive en lib/copy/installers.ts, y ahi esta anotado lo que cambio
 * al portar el borrador. Solo en ingles.
 *
 * Los titulos de fila, paso y tarjeta son h4 (20px) y no h3 (22-24px): el
 * borrador los dibuja a 19-21px, y a 24 pesaban mas que el texto de al lado.
 *
 * Diferencias con la home, a proposito: aqui no hay cinta de herramientas ni
 * cifras, ni mapa, ni formulario de contacto largo. El lector llega desde un
 * email en frio y hay un solo camino: la llamada.
 */

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const section = "py-16 lg:py-[104px]";

/* --------------------------------------------------------------------------
   Piezas
   -------------------------------------------------------------------------- */

/**
 * El hero: lo que ve el cliente, como escena (components/installers-hero-
 * illustration.tsx). Sustituye al panel en HTML que habia, con el mismo texto.
 * El aviso de que es un ejemplo se queda como texto debajo: es la parte
 * honesta de la pieza y tiene que poder leerse y copiarse.
 */
function CustomerScene({
  t,
  locale,
}: {
  t: (typeof installersCopy)["en"]["hero"]["panel"];
  locale: Locale;
}) {
  return (
    <figure className="m-0">
      <InstallersHeroIllustration
        label={t.label}
        locale={locale}
        className="w-full max-md:mx-auto max-md:max-w-[340px]"
      />
      <figcaption className="mt-4 text-small text-pretty text-ink-soft max-md:text-center">
        {t.disclaimer}
      </figcaption>
    </figure>
  );
}

/** Iconos de "lo que se monta", los del borrador, a trazo fino. */
const icons: Record<SetupIcon, React.ReactNode> = {
  form: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </>
  ),
  reply: (
    <>
      <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
      <path d="M12 8v4l2.5 1.5" />
    </>
  ),
  followup: (
    <>
      <path d="M4 12a8 8 0 0 1 13.7-5.7L20 8.5" />
      <path d="M20 4v4.5h-4.5" />
      <path d="M20 12a8 8 0 0 1-13.7 5.7L4 15.5" />
      <path d="M4 20v-4.5h4.5" />
    </>
  ),
  list: (
    <>
      <path d="M9 6h11M9 12h11M9 18h11" />
      <circle cx="4.5" cy="6" r="1" />
      <circle cx="4.5" cy="12" r="1" />
      <circle cx="4.5" cy="18" r="1" />
    </>
  ),
  review: (
    <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9Z" />
  ),
  report: (
    <>
      <path d="M4 20h16" />
      <path d="M7 16v-5M12 16V7M17 16v-8" />
    </>
  ),
};

function SetupIconBadge({ name }: { name: SetupIcon }) {
  return (
    <span
      aria-hidden="true"
      className="mb-5 flex size-14 items-center justify-center rounded-md border border-violet bg-violet-wash text-violet"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {icons[name]}
      </svg>
    </span>
  );
}

/** Antetitulo de seccion. `tone="dark"` sobre --night. */
function Eyebrow({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`mb-3 text-eyebrow font-semibold ${
        tone === "dark" ? "text-violet-light" : "text-ink-soft"
      }`}
    >
      {children}
    </p>
  );
}

/* --------------------------------------------------------------------------
   La pagina
   -------------------------------------------------------------------------- */

export function InstallersPage({ locale = "en" }: { locale?: Locale }) {
  const t = installersCopy[locale];
  // Los tres testimonios reales, los mismos de la home: una sola copia.
  const testimonials = homeCopy[locale].testimonials.items;

  return (
    <>
      <SiteHeader locale={locale} path="/installers" />

      <main id="top">
        {/* --- Hero ------------------------------------------------------ */}
        <section
          className={`${wrap} grid items-center gap-10 pt-12 pb-16 md:grid-cols-2 md:gap-12 md:pt-16 md:pb-20 lg:pt-[88px] lg:pb-24`}
        >
          <div>
            <p className="mb-4 text-small font-semibold tracking-[0.02em] text-violet">
              {t.hero.eyebrow}
            </p>
            <h1 className="max-w-[12em] text-ink">{t.hero.title}</h1>
            <p className="mt-5 max-w-[30em] text-body text-pretty text-ink-soft md:mt-6">
              {t.hero.lede}
            </p>
            <div className="mt-8 md:mt-9">
              <CalendlyButton className="max-md:w-full">{t.hero.cta}</CalendlyButton>
            </div>
            <p className="mt-6 text-copy text-pretty text-ink-soft">{t.hero.note}</p>
          </div>
          <CustomerScene t={t.hero.panel} locale={locale} />
        </section>

        {/* Los otros dos caminos, en una linea: esta pagina es para
            instaladores y no hay que fingir que es para todos. Enlazan a la
            seccion "Who we work with" de la home. */}
        <div className="border-y border-line bg-paper-alt">
          <div
            className={`${wrap} flex flex-wrap items-center gap-x-6 gap-y-2 py-3.5 text-ui`}
          >
            <span className="text-ink-soft">{t.paths.lead}</span>
            <Link
              href={localizePath("/#who", locale)}
              className="inline-flex min-h-[44px] items-center font-semibold text-ink hover:text-violet"
            >
              {t.paths.clinics} &rarr;
            </Link>
            <Link
              href={localizePath("/#who", locale)}
              className="inline-flex min-h-[44px] items-center font-semibold text-ink hover:text-violet"
            >
              {t.paths.agencies} &rarr;
            </Link>
          </div>
        </div>

        {/* --- No vendemos anuncios ------------------------------------- */}
        <section className={`reveal ${section}`}>
          <div
            className={`${wrap} grid items-start gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16`}
          >
            <div>
              <Eyebrow>{t.noAds.eyebrow}</Eyebrow>
              <h2 className="text-ink">{t.noAds.title}</h2>
              <p className="mt-5 max-w-[26em] text-lede text-pretty text-ink-soft">
                {t.noAds.lede}
              </p>
            </div>
            <ul className="m-0 list-none border-t border-line p-0">
              {t.noAds.rows.map((row) => (
                <li
                  key={row.title}
                  className="grid grid-cols-[28px_1fr] gap-3 border-b border-line py-5"
                >
                  <span aria-hidden="true" className="text-ui font-bold text-violet">
                    &#x2715;
                  </span>
                  <div>
                    <h4 className="text-ink">{row.title}</h4>
                    <p className="mt-1 text-copy text-pretty text-ink-soft">{row.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- El recorrido, paso a paso -------------------------------- */}
        {/* Oscuro, como en el borrador: es donde la pagina demuestra en vez
            de afirmar. Sobre --night el violeta de marca no llega (2.61:1),
            asi que las horas van en violet-light; las burbujas si llevan el
            violeta lleno, que con texto blanco rinde 6.68:1. */}
        <section id="how" className={`bg-night scroll-mt-24 ${section}`}>
          <div className={`reveal ${wrap}`}>
            <Eyebrow tone="dark">{t.how.eyebrow}</Eyebrow>
            <h2 className="max-w-[14em] text-white">{t.how.title}</h2>
            <p className="mt-5 max-w-[36em] text-body text-pretty text-white/80">
              {t.how.lede}
            </p>

            {/* Como el rastreo de un paquete, y movido por el scroll: ver
                components/quote-timeline.tsx. */}
            <QuoteTimeline steps={t.how.steps} card={t.how.card} />
          </div>
        </section>

        {/* --- Lo que se monta ------------------------------------------- */}
        <section className={`reveal ${section}`}>
          <div className={wrap}>
            <Eyebrow>{t.setup.eyebrow}</Eyebrow>
            <h2 className="text-ink">{t.setup.title}</h2>
            <ul className="mt-10 grid list-none gap-x-8 p-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
              {t.setup.items.map((item) => (
                <li key={item.title} className="border-t border-line py-7">
                  <SetupIconBadge name={item.icon} />
                  <h4 className="text-ink">{item.title}</h4>
                  <p className="mt-2 text-copy text-pretty text-ink-soft">{item.body}</p>
                </li>
              ))}
            </ul>
            <p className="max-w-[44em] border-t border-line pt-6 text-copy text-pretty text-ink-soft">
              {t.setup.note}
            </p>
          </div>
        </section>

        {/* --- Clientes -------------------------------------------------- */}
        {/* Los tres testimonios reales y los diez logos con permiso. Se dice
            en el lede que no son instaladores: PRODUCT.md, principio 4. */}
        <section className={`reveal border-t border-line ${section}`}>
          <div className={wrap}>
            <div className="grid items-start gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
              <div>
                <Eyebrow>{t.clients.eyebrow}</Eyebrow>
                <h2 className="text-ink">{t.clients.title}</h2>
                <p className="mt-5 max-w-[26em] text-lede text-pretty text-ink-soft">
                  {t.clients.lede}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {testimonials.map((item) => (
                  <blockquote
                    key={item.name}
                    className="m-0 rounded-md border border-line bg-paper p-6"
                  >
                    <p className="text-copy tracking-[-0.2px] text-pretty text-ink-soft">
                      {item.quote}
                    </p>
                    <cite className="mt-5 flex items-center gap-3 not-italic">
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
                          className="grid size-10 shrink-0 place-items-center rounded-full bg-violet-wash text-small font-bold text-violet-ink"
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
            <div className="mt-12 lg:mt-16">
              <ClientMarquee locale={locale} />
            </div>
          </div>
        </section>

        {/* --- Proceso --------------------------------------------------- */}
        <section className={`reveal ${section}`}>
          <div className={wrap}>
            <Eyebrow>{t.process.eyebrow}</Eyebrow>
            <h2 className="text-ink">{t.process.title}</h2>
            <ol className="mt-10 grid list-none gap-x-8 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {t.process.steps.map((step, i) => (
                <li key={step.title} className="border-t border-line py-5">
                  <span aria-hidden="true" className="block font-mono text-stat text-violet">
                    {i + 1}
                  </span>
                  <h4 className="mt-3 text-ink">{step.title}</h4>
                  <p className="mt-1.5 text-copy text-pretty text-ink-soft">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* --- FAQ ------------------------------------------------------- */}
        <section id="faq" className={`reveal scroll-mt-24 border-t border-line ${section}`}>
          <div
            className={`${wrap} grid items-start gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16`}
          >
            <div>
              <Eyebrow>{t.faq.eyebrow}</Eyebrow>
              <h2 className="text-ink">{t.faq.title}</h2>
            </div>
            <FaqAccordion items={[...t.faq.items]} />
          </div>
        </section>

        {/* --- Reservar -------------------------------------------------- */}
        {/* El borrador dejaba aqui un hueco para la foto de quien atiende la
            llamada. No hay foto; va la escena del calendario de la home, que
            cuenta lo que pasa en esos 30 minutos. */}
        <section id="book" className={`bg-night scroll-mt-24 ${section}`}>
          <div
            className={`reveal ${wrap} grid items-center gap-10 md:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] md:gap-16`}
          >
            <div>
              <h2 className="text-white">{t.book.title}</h2>
              <p className="mt-5 max-w-[30em] text-lede text-pretty text-white/80">
                {t.book.lede}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <CalendlyButton variant="light" className="max-md:w-full">
                  {t.book.cta}
                </CalendlyButton>
                <p className="text-small text-white/80">{t.book.or}</p>
              </div>
            </div>
            <HomeIllustration
              locale={locale}
              name="call"
              label={t.book.scene}
              className="overflow-hidden rounded-lg"
            />
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} path="/installers" />
    </>
  );
}
