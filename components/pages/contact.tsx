import { BookCallIllustration } from "@/components/book-call-illustration";
import { CalendlyButton } from "@/components/calendly-button";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { contactCopy } from "@/lib/copy/contact";
import type { Locale } from "@/lib/i18n";

/**
 * Pagina de contacto del sitio vivo, no del Figma: el frame "Contact Us" del
 * archivo es del posicionamiento viejo y esta pagina habla el nuevo. En los
 * dos idiomas; el texto esta en lib/copy/contact.ts.
 *
 * Reutiliza el <ContactForm> de la home, asi que va contra la misma Server
 * Action y hereda validacion, honeypot y rate limit. La seccion del panel
 * lleva id="contact" a proposito: el CTA del header y el del menu movil
 * apuntan a "#contact", y asi siguen funcionando tambien aqui.
 *
 * No usa ReplyProof. Ese panel demuestra la respuesta en menos de un minuto
 * que emmvi *construye para el cliente*; junto a este formulario se leeria
 * como una promesa sobre la propia bandeja de emmvi, que no esta automatizada.
 */

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const section = "py-16 lg:py-[104px]";
const rowBody = "text-copy tracking-[-0.2px] text-pretty text-ink-soft";

export function ContactPage({ locale }: { locale: Locale }) {
  const t = contactCopy[locale];

  return (
    <>
      <SiteHeader locale={locale} path="/contact-us" />

      <main id="top">
        <section className={`${wrap} pt-16 pb-12 text-center lg:pt-[88px] lg:pb-16`}>
          <h1 className="mx-auto max-w-[14em] text-ink">
            {t.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-[36em] text-lede text-pretty text-ink-soft">
            {t.hero.lede}
          </p>
        </section>

        <section
          id="contact"
          className={`${wrap} scroll-mt-24 pb-16 lg:pb-[104px]`}
        >
          <div className="grid gap-8 rounded-lg bg-paper-panel p-9 min-[900px]:grid-cols-[1fr_auto_1fr] min-[900px]:items-stretch min-[900px]:gap-10 min-[900px]:p-16">
            <div className="min-[900px]:self-center">
              <BookCallIllustration className="mb-6 w-full max-w-[300px]" />
              <h3 className="text-ink">{t.book.title}</h3>
              <p className={`mt-3 max-w-[34em] ${rowBody}`}>{t.book.body}</p>
              <div className="mt-6">
                <CalendlyButton>{t.book.cta}</CalendlyButton>
              </div>
            </div>

            {/* La bifurcacion. La regla y el "or" dicen lo mismo que decia el
                encabezado "Or send a message" que se quito, pero sin pedirle al
                visitante que lea una instruccion: son dos vias, elige una.

                La regla va en dos <span> `aria-hidden` y el "or" no, porque en
                lectura lineal esa palabra es justo lo que separa un camino del
                otro. El chip lleva el fondo del panel para cortar la linea por
                detras en vez de cruzarla. */}
            <div className="relative flex items-center justify-center">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-1/2 h-px bg-line min-[900px]:inset-x-auto min-[900px]:inset-y-0 min-[900px]:left-1/2 min-[900px]:h-auto min-[900px]:w-px"
              />
              <span className="relative bg-paper-panel px-4 text-small font-medium tracking-[0.18em] text-ink-soft uppercase min-[900px]:px-0 min-[900px]:py-4">
                {t.or}
              </span>
            </div>

            <div>
              <ContactForm locale={locale} />
            </div>
          </div>
        </section>

        <section className={`bg-paper-alt ${section}`}>
          <div className={`reveal ${wrap}`}>
            <h2 className="text-ink">{t.afterwards.title}</h2>
            <ol className="mt-14 grid gap-6 md:grid-cols-3">
              {t.afterwards.steps.map((s) => (
                <li
                  key={s.n}
                  className="flex flex-col rounded-md border border-line bg-paper p-8"
                >
                  <span aria-hidden="true" className="text-stat text-violet">
                    {s.n}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-4 block h-0.5 w-8 bg-violet"
                  />
                  <h3 className="mt-4 text-ink">{s.title}</h3>
                  <p className={`mt-2 flex-1 ${rowBody}`}>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={`reveal ${section}`}>
          <div className={wrap}>
            <h2 className="text-ink">{t.notes.title}</h2>
            <div className="mt-14 border-t border-line">
              {t.notes.items.map((n) => (
                <div
                  key={n.title}
                  className="grid gap-4 border-b border-line py-8 md:grid-cols-[0.95fr_1.05fr] md:gap-12"
                >
                  <h3 className="text-ink">{n.title}</h3>
                  <p className="text-body text-pretty text-ink-soft">{n.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} path="/contact-us" />
    </>
  );
}
