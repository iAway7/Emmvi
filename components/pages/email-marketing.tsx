import Image from "next/image";

import { CtaLink } from "@/components/cta-link";
import { AfterYouSend } from "@/components/services/after-you-send";
import { DarkTestimonials } from "@/components/services/dark-testimonials";
import { FaqAccordion } from "@/components/faq-accordion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CheckIcon } from "@/components/services/icons";
import { SalesForm } from "@/components/services/sales-form";
import { EmailIllustration } from "@/components/services/email-illustrations";
import { emailMarketingCopy } from "@/lib/copy/email-marketing";
import type { Locale } from "@/lib/i18n";

/**
 * Réplica del frame "Services - Email Marketing" del Figma
 * (0niWGidrfk5rCNfWgb3L3z, nodo 165:1596, 1400x8332).
 *
 * Misma decisión que /services/website-design: es el posicionamiento viejo y se
 * reconstruye a propósito. Comparte shell (header, footer, formulario) con ella.
 *
 * Dos cosas del frame NO se publican tal cual, por la misma regla de siempre:
 * la banda de cifras (75+ clientes, 32,3 M€ generados, 6,7X de ROI, 4,9/5) son
 * métricas inventadas, y los tres testimonios vuelven a ser de relleno con
 * caras de stock. Las cifras quedan como hueco visible; los testimonios se
 * sustituyen por los tres reales.
 *
 * El texto vive en lib/copy/email-marketing.ts, en los dos idiomas; esta
 * plantilla la comparten app/(en)/services/email-marketing/page.tsx y
 * app/(es)/es/services/email-marketing/page.tsx. El texto de dentro de las
 * escenas se traduce en components/services/email-illustrations.tsx.
 */

const path = "/services/email-marketing";

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const section = "py-16 lg:py-[104px]";
const h2Class = "text-ink";

/** Plataformas, no clientes. El Figma las pone sin etiqueta, donde se leen como
 *  lo segundo; la etiqueta de la sección lo deja dicho. */
const tools = [
  { src: "/tools/klaviyo.svg", name: "Klaviyo", w: 181 },
  { src: "/tools/sendgrid.svg", name: "SendGrid", w: 145 },
  { src: "/tools/mailchimp.svg", name: "Mailchimp", w: 155 },
  { src: "/tools/activecampaign.svg", name: "ActiveCampaign", w: 202 },
  // Raster entre vectoriales: es el logo tal cual lo dio el usuario. next/image
  // lo sirve en WebP, asi que no compensa convertirlo a mano.
  { src: "/tools/gohighlevel.png", name: "GoHighLevel", w: 1853, h: 420 },
];

/* La banda de cifras del Figma (75+, 32.3M€, 6.7X, 4.9/5) no está aquí:
   ninguna de las cuatro está medida, y PRODUCT.md prohíbe publicar métricas sin
   respaldo. Estuvo un tiempo con las etiquetas y un guion en lugar del número,
   más una nota que decía "Placeholder. The figures in the Figma are not
   measured" — es decir, una sección entera cuyo contenido era una disculpa.
   Cuando haya cifras medidas, las etiquetas eran: Trusted Clients, Generated
   through emails, Average ROI, Customer Satisfaction. */

/* Las siete respuestas del FAQ que el Figma dejaba vacias, y por que se
   escribieron como se escribieron, estan anotadas junto al texto en
   lib/copy/email-marketing.ts. */

export function EmailMarketingPage({ locale }: { locale: Locale }) {
  const t = emailMarketingCopy[locale];

  return (
    <>
      <SiteHeader locale={locale} path={path} />

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

            <EmailIllustration
              name="hero"
              locale={locale}
              label={t.hero.label}
              className="w-full max-w-[642px] justify-self-end max-md:mx-auto max-md:max-w-[340px]"
            />
          </div>
        </section>

        {/* --- Plataformas + "Capture, sell, and retain customers." ----- */}
        <div className="bg-paper-panel">
          <section className={`reveal ${wrap} py-10`}>
            <p className="text-center text-small text-ink-soft">{t.tools.label}</p>
            <ul className="mt-6 flex list-none flex-wrap items-center justify-center gap-x-12 gap-y-8 min-[900px]:justify-between">
              {tools.map((tool) => (
                <li key={tool.name}>
                  <Image
                    src={tool.src}
                    alt={tool.name}
                    width={tool.w}
                    height={tool.h ?? 42}
                    className="h-[26px] w-auto min-[900px]:h-[34px]"
                  />
                </li>
              ))}
            </ul>
          </section>

          <section className={`reveal ${wrap} pt-8 pb-16 lg:pt-12 lg:pb-24`}>
            <div className="grid gap-8 min-[900px]:grid-cols-2 min-[900px]:items-start min-[900px]:gap-16">
              <h2 className={`max-w-[601px] ${h2Class}`}>{t.capture.title}</h2>
              <p className="max-w-[34em] text-copy text-pretty text-ink-soft min-[900px]:pt-3">
                {t.capture.lede}
              </p>
            </div>

            <ul className="mt-12 grid list-none gap-6 min-[900px]:grid-cols-2">
              {t.capture.pillars.map((p) => (
                <li
                  key={p.scene}
                  className="rounded-md border border-line bg-paper p-8 min-[900px]:p-10"
                >
                  <EmailIllustration
                    name={p.scene}
                    locale={locale}
                    label={p.alt}
                    className="size-[100px] min-[900px]:size-[133px]"
                  />
                  <h3 className="mt-6 text-ink">{p.title}</h3>
                  <p className="mt-3 text-copy text-pretty text-ink-soft">{p.body}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* --- Maximize Customer Engagement ---------------------------- */}
        <section className={`reveal ${wrap} ${section}`}>
          <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,601px)_minmax(0,1fr)] min-[900px]:gap-8">
            <div>
              <h2 className={`max-w-[601px] ${h2Class}`}>{t.retention.title}</h2>
              {t.retention.body.map((paragraph, i) => (
                <p
                  key={paragraph}
                  className={`${i === 0 ? "mt-6" : "mt-5"} max-w-[34em] text-copy text-pretty text-ink-soft`}
                >
                  {paragraph}
                </p>
              ))}

              <ul className="mt-8 grid list-none gap-3">
                {t.retention.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 size-5 shrink-0 text-violet" />
                    <span className="text-ui text-ink">{o}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CtaLink href="#contact">{t.retention.cta}</CtaLink>
              </div>
            </div>

            <EmailIllustration
              name="retention"
              locale={locale}
              label={t.retention.label}
              className="w-full max-w-[665px] justify-self-end max-md:mx-auto max-md:max-w-[360px]"
            />
          </div>
        </section>

        {/* --- Automate Processes and Scale Your Sales ----------------- */}
        <section className={`reveal ${wrap} pb-16 lg:pb-24`}>
          <div className="max-w-[601px]">
            <h2 className={`max-w-[601px] ${h2Class}`}>{t.automate.title}</h2>
            {t.automate.body.map((paragraph, i) => (
              <p
                key={paragraph}
                className={`${i === 0 ? "mt-6" : "mt-5"} text-copy text-pretty text-ink-soft`}
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <CtaLink href="#contact">{t.automate.cta}</CtaLink>
            </div>
          </div>

          {/* El diagrama es un solo asset de 1110px con etiquetas de 14px.
              Encajado a 375px de ancho las etiquetas caen a ~4px, ilegibles.
              Por debajo de 900px se desplaza en horizontal con un ancho minimo
              que las deja a ~11px, en vez de encoger hasta no servir. */}
          <div className="-mx-6 mt-12 overflow-x-auto px-6 min-[900px]:mx-0 min-[900px]:overflow-visible min-[900px]:px-0">
            <EmailIllustration
              name="flow"
              locale={locale}
              label={t.automate.label}
              className="w-[640px] max-w-none min-[900px]:mx-auto min-[900px]:w-full min-[900px]:max-w-[900px]"
            />
          </div>
        </section>

        {/* --- What Our Clients Say ------------------------------------ */}
        <section className="bg-dusk">
          <div className={`reveal ${wrap} ${section}`}>
            <h2 className="text-center text-white">{t.testimonials.title}</h2>
            <div className="mt-12">
              <DarkTestimonials locale={locale} />
            </div>
          </div>
        </section>

        {/* --- FAQ ----------------------------------------------------- */}
        <section className={`reveal ${wrap} ${section}`}>
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

              <AfterYouSend locale={locale} />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} path={path} />
    </>
  );
}
