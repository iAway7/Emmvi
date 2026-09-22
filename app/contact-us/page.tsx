import type { Metadata } from "next";

import { CalendlyButton } from "@/components/calendly-button";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pageMetadata } from "@/lib/site";

/**
 * Pagina de contacto del sitio vivo, no del Figma: el frame "Contact Us" del
 * archivo es del posicionamiento viejo y esta pagina habla el nuevo.
 *
 * Reutiliza el <ContactForm> de la home, asi que va contra la misma Server
 * Action y hereda validacion, honeypot y rate limit. La seccion del panel
 * lleva id="contact" a proposito: el CTA del header y el del menu movil
 * apuntan a "#contact", y asi siguen funcionando tambien aqui.
 *
 * No usa ReplyProof. Ese panel demuestra la respuesta en menos de un minuto
 * que Emmvi *construye para el cliente*; junto a este formulario se leeria
 * como una promesa sobre la propia bandeja de Emmvi, que no esta automatizada.
 */

export const metadata: Metadata = pageMetadata({
  path: "/contact-us",
  title: "Contact",
  description:
    "Tell us what you are trying to fix and get an honest read on it, or book a thirty-minute call. A person reads every enquiry and a person answers it.",
});

/** Sin tiempos de respuesta: lo que se puede defender es que lo lee alguien,
 *  no en cuanto contesta. La reserva de Calendly es la via rapida de verdad. */
const afterwards = [
  {
    n: "01",
    title: "A person reads it",
    body: "Not a queue and not a bot. We read the message and look at your site before answering.",
  },
  {
    n: "02",
    title: "You get an honest read",
    body: "What we would change, what we would leave alone, and whether you need us at all. Sometimes the answer is that you do not.",
  },
  {
    n: "03",
    title: "A call if it makes sense",
    body: "Thirty minutes to go through it properly. No slide deck, and nothing to decide on the call itself.",
  },
];

const notes = [
  {
    title: "We do not do ads, SEO or social",
    body: "We build the site and the systems behind it: forms, CRM, instant replies, quote follow-ups, review requests and reporting. If what you need is someone running a monthly ad budget, say so and we will point you elsewhere instead of taking the work.",
  },
  {
    title: "Prices are not on the site",
    body: "What it costs depends on what the site has to do and how much of the follow-up you want automated. We put a number on it after the call, once we know which of the two it is.",
  },
  {
    title: "You own everything we build",
    body: "The site, the domain and the customer data are yours. If you leave, you take them with you and we help you move.",
  },
];

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const section = "py-16 lg:py-[104px]";
const rowBody =
  "text-[1rem] leading-[26px] tracking-[-0.2px] text-pretty text-ink-soft";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className={`${wrap} pt-16 pb-12 text-center lg:pt-[88px] lg:pb-16`}>
          <h1 className="mx-auto max-w-[14em] text-display text-balance text-ink">
            Talk to us
          </h1>
          <p className="mx-auto mt-6 max-w-[36em] text-lede text-pretty text-ink-soft">
            Tell us what you are trying to fix. You will get an honest read on
            it: what we would change, what we would leave alone, and whether
            you need us at all.
          </p>
        </section>

        <section
          id="contact"
          className={`${wrap} scroll-mt-24 pb-16 lg:pb-[104px]`}
        >
          <div className="grid gap-8 rounded-lg bg-paper-panel p-9 min-[900px]:grid-cols-[1fr_auto_1fr] min-[900px]:items-stretch min-[900px]:gap-10 min-[900px]:p-16">
            <div className="min-[900px]:self-center">
              <h2 className="text-h3 text-balance text-ink">Book the call</h2>
              <p className={`mt-3 max-w-[34em] ${rowBody}`}>
                Thirty minutes. We look at what happens to an enquiry on your
                site today and tell you what we would change. It is the fastest
                way in, and it lands straight on the calendar.
              </p>
              <div className="mt-6">
                <CalendlyButton>Schedule a 30-minute call</CalendlyButton>
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
                or
              </span>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </section>

        <section className={`bg-paper-alt ${section}`}>
          <div className={wrap}>
            <h2 className="text-h2 text-balance text-ink">
              What happens after you send it
            </h2>
            <ol className="mt-14 grid gap-6 md:grid-cols-3">
              {afterwards.map((s) => (
                <li
                  key={s.n}
                  className="flex flex-col rounded-md border border-line bg-paper p-8"
                >
                  <span
                    aria-hidden="true"
                    className="text-[2rem] font-extrabold leading-none tracking-[-0.03em] text-violet"
                  >
                    {s.n}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-4 block h-0.5 w-8 bg-violet"
                  />
                  <h3 className="mt-4 text-h3 text-balance text-ink">
                    {s.title}
                  </h3>
                  <p className={`mt-2 flex-1 ${rowBody}`}>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={section}>
          <div className={wrap}>
            <h2 className="text-h2 text-balance text-ink">
              Worth knowing before we talk
            </h2>
            <div className="mt-14 border-t border-line">
              {notes.map((n) => (
                <div
                  key={n.title}
                  className="grid gap-4 border-b border-line py-8 md:grid-cols-[0.95fr_1.05fr] md:gap-12"
                >
                  <h3 className="text-h3 text-balance text-ink">{n.title}</h3>
                  <p className="text-body text-pretty text-ink-soft">
                    {n.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
