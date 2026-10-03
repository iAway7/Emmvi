import Image from "next/image";

import { CalendlyButton } from "@/components/calendly-button";
import { ContactForm } from "@/components/contact-form";
import { CtaLink } from "@/components/cta-link";
import { FaqAccordion } from "@/components/faq-accordion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FullStackIllustration } from "@/components/services/full-stack-illustrations";
import { fullStackCopy } from "@/lib/copy/full-stack";
import type { Locale } from "@/lib/i18n";

/**
 * Recuperada del backup del WordPress. Estuvo unas horas devolviendo 410 junto
 * a /web-hosting/ y /ux-ui-audits/, y vuelve porque es la unica de las tres
 * cuyo servicio se sigue vendiendo.
 *
 * Es ademas la que mejor encaja con el posicionamiento nuevo sin tocarle el
 * angulo: "replace the patchwork of tools with one smart system" es, con otras
 * palabras, lo que vende la home.
 *
 * **Tres cosas del original no se publican**, y ninguna es cosmetica:
 *
 *  - Los tres testimonios. Iban firmados "Janelle R., Director of Ops,
 *    Member-Based Organization" y con fotos Sarah-T.webp, John-M.webp y
 *    Lisa-M.webp: stock con nombres genericos. Es la prueba social prestada
 *    que PRODUCT.md prohibe, la misma que ya se retiro de /services/* y
 *    /about-us. La seccion desaparece entera por decision del usuario: los
 *    tres testimonios reales que si existen son de web y automatizacion, y
 *    ponerlos aqui estiraria lo que dijeron.
 *  - **"Projects start at $5K"**, en la FAQ del precio. El sitio no lleva
 *    precio por decision explicita de PRODUCT.md: se habla en la llamada. La
 *    respuesta cuenta ahora como se llega al numero, no cual es.
 *  - El formulario de calificacion con tramos de presupuesto (Under $5K,
 *    $5K-$10K...). Mismo motivo, y ademas el sitio ya tiene un formulario que
 *    va contra la misma Server Action.
 *
 * Se conserva "many apps launch in 4-6 weeks", que si es defendible: es un
 * plazo de entrega del propio trabajo, no un porcentaje de facturacion
 * inventado. Si deja de ser cierto, hay que quitarlo.
 *
 * El hero y la seccion del patchwork llevan escenas propias: ver
 * components/services/full-stack-illustrations.tsx. La del original
 * (Web-Dev.svg, remapeada a la paleta) queda en public/illustrations sin uso.
 *
 * El texto vive en lib/copy/full-stack.ts, en los dos idiomas. Esta plantilla
 * la montan app/(en)/full-stack-development-services/page.tsx y
 * app/(es)/es/full-stack-development-services/page.tsx.
 */

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const section = "py-16 lg:py-[104px]";
const h2Class = "text-ink";

export function FullStackPage({ locale = "en" }: { locale?: Locale }) {
  const t = fullStackCopy[locale];

  return (
    <>
      <SiteHeader locale={locale} path="/full-stack-development-services" />

      <main>
        <section className={`${wrap} pt-14 pb-10 lg:pt-20`}>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-small font-medium tracking-[0.18em] text-violet uppercase">
                {t.hero.eyebrow}
              </p>
              <h1 className="mt-5 text-ink">{t.hero.title}</h1>
              <p className="mt-6 max-w-[44ch] text-lede text-pretty text-ink-soft">
                {t.hero.lede}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <CalendlyButton>{t.hero.cta}</CalendlyButton>
                <CtaLink href="#build" variant="ghost">
                  {t.hero.secondary}
                </CtaLink>
              </div>
            </div>

            <FullStackIllustration
              name="hero"
              locale={locale}
              label={t.hero.scene}
              className="w-full max-md:mx-auto max-md:max-w-[420px]"
            />
          </div>
        </section>

        <section className={`reveal ${wrap} ${section}`}>
          <h2 className={h2Class}>{t.familiar.title}</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {t.familiar.quotes.map((quote) => (
              <li
                key={quote}
                className="rounded-md border border-line p-7 text-lede text-pretty text-ink"
              >
                &ldquo;{quote}&rdquo;
              </li>
            ))}
          </ul>
          <p className="mt-9 text-lede text-pretty text-ink-soft">{t.familiar.close}</p>
        </section>

        <section className="bg-paper-alt">
          <div className={`reveal ${wrap} ${section}`}>
            <h2 className={h2Class}>{t.patchwork.title}</h2>
            <FullStackIllustration
              name="patchwork"
              locale={locale}
              label={t.patchwork.scene}
              className="mx-auto mt-10 w-full max-w-[960px]"
            />
            <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="rounded-lg border border-line bg-paper p-8 lg:p-10">
                <h3 className="text-ink">{t.patchwork.before.title}</h3>
                <ul className="mt-5 flex flex-col gap-3 pl-6 text-body list-disc text-ink-soft">
                  {t.patchwork.before.items.map((x) => (
                    <li key={x} className="text-pretty">
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-violet bg-paper p-8 lg:p-10">
                <h3 className="text-ink">{t.patchwork.after.title}</h3>
                <ul className="mt-5 flex flex-col gap-3 pl-6 text-body list-disc text-ink-soft">
                  {t.patchwork.after.items.map((x) => (
                    <li key={x} className="text-pretty">
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={`reveal ${wrap} ${section}`}>
          <h2 className={h2Class}>{t.why.title}</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {t.why.pillars.map((p) => (
              <div key={p.n}>
                <Image
                  src={p.illo}
                  alt={p.alt}
                  width={360}
                  height={240}
                  className="h-auto w-full max-w-[220px]"
                />
                <p className="mt-6 font-mono text-small text-ink-soft">{p.n}</p>
                <h3 className="mt-2 text-ink">{p.title}</h3>
                <p className="mt-3 text-body text-pretty text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`reveal ${wrap} ${section}`}>
          <h2 className={`text-center ${h2Class}`}>{t.faq.title}</h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-center text-body text-pretty text-ink-soft">
            {t.faq.lede}
          </p>
          <div className="mx-auto mt-10 max-w-[636px]">
            <FaqAccordion items={t.faq.items} />
          </div>
        </section>

        <section id="build" className={`reveal ${wrap} scroll-mt-24 ${section}`}>
          <div className="grid items-start gap-10 rounded-lg bg-paper-panel p-9 min-[900px]:grid-cols-2 min-[900px]:gap-16 min-[900px]:p-16">
            <div>
              <h2 className="text-ink">{t.build.title}</h2>
              <p className="mt-5 max-w-[34em] text-lede text-pretty text-ink-soft">
                {t.build.lede}
              </p>
            </div>
            <ContactForm locale={locale} />
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} path="/full-stack-development-services" />
    </>
  );
}
