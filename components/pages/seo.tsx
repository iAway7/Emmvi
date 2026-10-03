import Image from "next/image";

import { CtaLink } from "@/components/cta-link";
import { FaqAccordion } from "@/components/faq-accordion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PackageTabs } from "@/components/services/package-tabs";
import { SalesForm } from "@/components/services/sales-form";
import { SeoIllustration } from "@/components/services/seo-illustrations";
import { seoCopy } from "@/lib/copy/seo";
import type { Locale } from "@/lib/i18n";

/**
 * Réplica del frame "Services - SEO Services" del Figma
 * (0niWGidrfk5rCNfWgb3L3z, nodo 165:2291, 1400x7371).
 *
 * Tercera pantalla del posicionamiento viejo, misma decisión que las otras dos.
 * Comparte shell con ellas.
 *
 * Dos cosas del frame no se copian tal cual:
 *  - La retícula de servicios dibuja seis tarjetas, pero dos están repetidas
 *    (Comprehensive SEO Audit y Local SEO salen dos veces). Eso es un
 *    copia-pega para llenar la fila, no un servicio más.
 *  - El testimonio lo firma Jared White, que es cliente real, pero con una cita
 *    escrita para el Figma. Va la que dijo de verdad, la misma que la home.
 *
 * El texto vive en lib/copy/seo.ts, en los dos idiomas. Las rutas finas son
 * app/(en)/services/seo/page.tsx y app/(es)/es/services/seo/page.tsx.
 */

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const section = "py-16 lg:py-[104px]";
const h2Class = "text-ink";

/**
 * Banda de herramientas. **El Figma la dibuja sobre tinta y aquí va sobre
 * papel**, por decisión del usuario, así que los logos del archivo —que son las
 * versiones blancas— no valen. Los seis son ahora la versión oficial de cada
 * marca para fondo claro, entregada por el usuario. Nada recoloreado a mano.
 *
 * Son **seis, no las cuatro del Figma**: Search Console y Google Business
 * Profile las añadió el usuario como herramientas que usa de verdad, mismo
 * criterio que GoHighLevel en la banda de Email Marketing.
 *
 * Cada uno va a su proporción, no todos a la misma altura: Analytics es un
 * lockup apilado y Semrush ahora trae el endoso de Adobe en una segunda línea,
 * así que igualar alturas los descompensa ópticamente. Es la regla del trust
 * band de website-design. Las medidas son las intrínsecas de cada archivo,
 * salvo Semrush: a sus 36 px nativos el lockup de dos líneas se lee más
 * pequeño que el resto, y sube a 44 para pesar lo mismo.
 */
const tools = [
  { src: "/tools/seo/ahrefs.svg", name: "Ahrefs", w: 127, h: 33 },
  { src: "/tools/seo/google-analytics.svg", name: "Google Analytics", w: 139, h: 54 },
  { src: "/tools/seo/semrush.svg", name: "Semrush", w: 183, h: 44 },
  { src: "/tools/seo/moz.svg", name: "Moz", w: 103, h: 30 },
  { src: "/tools/seo/google-search-console.svg", name: "Google Search Console", w: 244, h: 36 },
  // La chapa va más alta que los wordmarks: a la misma altura pesa menos
  // ópticamente, igual que en el trust band de website-design.
  { src: "/tools/seo/google-business-profile.svg", name: "Google Business Profile", w: 46, h: 40 },
];

/**
 * Las ilustraciones de las tres tarjetas, en el mismo orden que
 * `services.items` del diccionario. Son las del Figma: se probaron escenas
 * nuevas y el usuario prefirio las originales.
 */
const serviceIllos = [
  "/figma/seo/card-audit.svg",
  "/figma/seo/card-local.svg",
  "/figma/seo/card-backlinks.svg",
];

/**
 * Las pestañas del paquete y la FAQ vienen del backup del WordPress (`.wpress`
 * de agosto de 2026, tabla `posts`, pagina `seo`). El Figma solo desarrollaba
 * la primera pestaña; las demas estuvieron marcadas como pendientes hasta que
 * se abrio el backup, que las tenia escritas enteras. Es el mismo copy: el
 * archivo de Figma reutilizaba el texto del sitio vivo.
 *
 * **Texto intacto** en ingles, como con los articulos. No se ha reescrito
 * nada. Ver lib/copy/seo.ts.
 */
export function SeoPage({ locale = "en" }: { locale?: Locale }) {
  const t = seoCopy[locale];

  return (
    <>
      <SiteHeader locale={locale} path="/services/seo" />

      <main id="top">
        {/* --- Hero ---------------------------------------------------- */}
        <section className={`${wrap} pt-14 pb-16 lg:pt-[90px] lg:pb-20`}>
          <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,601px)_minmax(0,1fr)] min-[900px]:gap-8">
            <div>
              <p className="inline-flex rounded-sm border border-pink bg-pink-wash px-3 py-1.5 text-small leading-5 text-pink-ink">
                {t.hero.eyebrow}
              </p>
              <h1 className="mt-6 max-w-[601px] text-ink">{t.hero.title}</h1>
              <p className="mt-6 max-w-[34em] text-body text-pretty text-ink-soft">
                {t.hero.lede}
              </p>
              <div className="mt-8">
                <CtaLink href="#contact">{t.hero.cta}</CtaLink>
              </div>
            </div>

            <SeoIllustration
              name="hero"
              locale={locale}
              label={t.hero.scene}
              className="w-full max-w-[642px] justify-self-end max-md:mx-auto max-md:max-w-[360px]"
            />
          </div>
        </section>

        {/* --- Banda de herramientas ----------------------------------- */}
        {/* La etiqueta no está en el Figma y hace falta: una fila de logos justo
            debajo del hero se lee como clientes, no como herramientas. Es la
            misma corrección que lleva la banda de /services/email-marketing. */}
        <section className="reveal">
          <div className={wrap}>
            <p className="text-center text-small text-ink-soft">{t.tools.label}</p>
            <ul className="mt-7 flex list-none flex-wrap items-center justify-center gap-x-12 gap-y-7 min-[900px]:justify-between">
              {tools.map((tool) => (
                <li key={tool.name}>
                  <Image
                    src={tool.src}
                    alt={tool.name}
                    width={tool.w}
                    height={tool.h}
                    className="max-w-full"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- Services ------------------------------------------------ */}
        {/* El Figma dibuja seis tarjetas, pero dos van repetidas para llenar la
            fila. Aquí van las tres distintas y el CTA cierra a ancho completo,
            como "You own everything" en la home. */}
        <section className={`reveal ${wrap} ${section}`}>
          <h2 className={h2Class}>{t.services.title}</h2>

          <ul className="mt-12 grid list-none gap-4 min-[900px]:grid-cols-3">
            {t.services.items.map((s, i) => (
              <li
                key={s.title}
                className="flex flex-col rounded-md border border-line bg-paper p-8"
              >
                <Image
                  src={serviceIllos[i]}
                  alt={s.alt}
                  width={256}
                  height={256}
                  loading="lazy"
                  className="mx-auto h-auto w-full max-w-[256px]"
                />
                <h3 className="mt-6 text-ink">{s.title}</h3>
                <p className="mt-3 flex-1 text-small leading-[22px] text-pretty text-ink-soft">
                  {s.body}
                </p>
                <div className="mt-6">
                  <CtaLink href="#contact" variant="outline">
                    {t.services.cta}
                  </CtaLink>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col items-center gap-5 rounded-md border border-line bg-paper px-8 py-10 text-center">
            <p className="text-h4 text-ink">{t.services.moreTitle}</p>
            <CtaLink href="#contact">{t.services.moreCta}</CtaLink>
          </div>
        </section>

        {/* --- What is included in our SEO package? -------------------- */}
        <section className={`reveal ${wrap} pb-16 lg:pb-24`}>
          <div className="text-center">
            <p className="inline-flex rounded-sm border border-teal-line bg-teal-wash px-3 py-1.5 text-small leading-5 text-teal-ink">
              {t.pkg.eyebrow}
            </p>
            <h2 className={`mx-auto mt-6 max-w-[868px] ${h2Class}`}>{t.pkg.title}</h2>
            <p className="mx-auto mt-5 max-w-[868px] text-copy text-pretty text-ink-soft">
              {t.pkg.lede}
            </p>
          </div>

          <div className="mt-12">
            <PackageTabs tabs={[...t.pkg.tabs]} label={t.pkg.tablist} />
          </div>
        </section>

        {/* --- Steps in Website Search Optimization -------------------- */}
        <section className={`reveal ${wrap} pb-16 lg:pb-24`}>
          <h2 className={`mx-auto max-w-[12em] text-center ${h2Class}`}>
            {t.steps.title}
          </h2>
          <p className="mt-5 text-center text-ui text-ink-soft">{t.steps.lede}</p>

          <div className="bg-dusk mt-12 rounded-lg px-8 py-12 min-[900px]:px-16">
            {/* Se lee hacia abajo: 01-05 a la izquierda, 06-10 a la derecha.
                Con `grid-cols-2` rellenaba por filas (01,02 / 03,04) y bajando por
                la izquierda se leia 1,3,5,7,9. `grid-flow-col` + `grid-rows-5` lo
                invierte, y de paso deja correcta la regla de abajo que quita el
                borde a los items 5 y 10: son los ultimos de cada columna. */}
            <ol className="grid list-none gap-x-16 min-[900px]:grid-flow-col min-[900px]:grid-rows-5 min-[900px]:auto-cols-fr">
              {t.steps.items.map((s, i) => (
                <li
                  key={s}
                  className="flex items-start gap-5 border-b border-white/12 py-5 last:border-b-0 min-[900px]:[&:nth-child(5)]:border-b-0 min-[900px]:[&:nth-child(10)]:border-b-0"
                >
                  <span
                    aria-hidden="true"
                    /* Ancho fijo, como en /services/ppc. `tabular-nums` no sirve aqui:
                       DM Sans no trae cifras tabulares, asi que el "1" es mas
                       estrecho y cada fila arrancaba en una x distinta. */
                    className="w-7 shrink-0 text-body leading-6 font-extrabold text-white"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-small leading-5 font-semibold text-pretty text-white/85">
                    {s}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 flex justify-center">
            <CtaLink href="#contact">{t.steps.cta}</CtaLink>
          </div>
        </section>

        {/* --- What Our Clients Say ------------------------------------ */}
        {/* Jared White es cliente real; la cita del Figma no es suya. Va la que
            dijo de verdad, la misma que la home y las otras dos pantallas. */}
        <section className={`reveal ${wrap} pb-16 lg:pb-24`}>
          <h2 className={`text-center ${h2Class}`}>{t.clients.title}</h2>

          <figure className="mt-12 grid items-center gap-10 rounded-lg bg-paper-panel p-8 min-[900px]:grid-cols-[minmax(0,630px)_minmax(0,1fr)] min-[900px]:gap-16 min-[900px]:p-16">
            <div>
              {/* La comilla del Figma es un icono de 60x60, no el glifo de 32 px
                  de las tarjetas de Email Marketing: aquí el testimonio ocupa
                  un panel entero y a 32 px se pierde. A 128 px el glifo de DM
                  Sans mide 33 px de alto, que es la medida del original. */}
              {/* eslint-disable-next-line no-restricted-syntax -- glifo decorativo, no texto: el tamano es el del icono del Figma */}
              <p aria-hidden="true" className="text-[8rem] leading-[0.4] font-extrabold text-violet">
                &ldquo;
              </p>
              <blockquote className="mt-4 text-copy text-pretty text-ink-soft">
                {t.clients.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src="/testimonials/jared-white.png"
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                  className="size-10 shrink-0 rounded-full object-cover"
                />
                <span className="text-small leading-5">
                  <span className="block font-bold text-ink">{t.clients.name}</span>
                  <span className="block text-violet-ink">{t.clients.role}</span>
                </span>
              </figcaption>
            </div>

            <SeoIllustration
              name="review"
              locale={locale}
              label={t.clients.scene}
              className="w-full max-w-[412px] justify-self-center"
            />
          </figure>
        </section>

        {/* --- FAQ ----------------------------------------------------- */}
        <section className={`reveal ${wrap} pb-16 lg:pb-24`}>
          <h2 className={`text-center ${h2Class}`}>{t.faq.title}</h2>
          <p className="mx-auto mt-5 max-w-[40em] text-center text-ui text-pretty text-ink-soft">
            {t.faq.lede}
          </p>

          <div className="mx-auto mt-12 max-w-[636px]">
            <FaqAccordion items={[...t.faq.items]} />
          </div>

          <div className="mt-10 flex justify-center">
            <CtaLink href="#contact">{t.faq.cta}</CtaLink>
          </div>
        </section>

        {/* --- Talk to our Sales team ---------------------------------- */}
        <section id="contact" className={`reveal ${wrap} scroll-mt-24 ${section}`}>
          <h2 className={`text-center ${h2Class}`}>{t.contact.title}</h2>
          <p className="mx-auto mt-5 max-w-[40em] text-center text-body text-pretty text-ink-soft">
            {t.contact.lede}
          </p>

          <div className="mt-12 rounded-lg bg-paper-panel p-6 min-[900px]:p-16">
            <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,460px)_minmax(0,1fr)] min-[900px]:gap-20">
              <div>
                <SalesForm locale={locale} />
              </div>

              <blockquote className="text-ink-soft">
                <p aria-hidden="true" className="text-h3">&ldquo;</p>
                <p className="mt-2 text-lede text-pretty">{t.contact.quote}</p>
                {/* El Figma firma esta cita con un avatar de 60 px (nodo
                    165:2317) y aquí no había ninguno. Va el de 40 px del resto
                    del proyecto, con la imagen que usa Alicia en las otras dos
                    pantallas. */}
                <footer className="mt-6 flex items-center gap-3">
                  <Image
                    src="/testimonials/alicia-ryz.png"
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                    className="size-10 shrink-0 rounded-full object-cover"
                  />
                  <span className="text-small leading-5">
                    <span className="block font-bold text-ink">{t.contact.name}</span>
                    <span className="block text-ink-soft">{t.contact.role}</span>
                  </span>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} path="/services/seo" />
    </>
  );
}
