import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaLink } from "@/components/cta-link";
import { AfterYouSend } from "@/components/services/after-you-send";
import { DarkTestimonials } from "@/components/services/dark-testimonials";
import { FaqAccordion, type FaqItem } from "@/components/services/faq-accordion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CheckIcon } from "@/components/services/icons";
import { SalesForm } from "@/components/services/sales-form";
import { pageMetadata } from "@/lib/site";

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
 */

export const metadata: Metadata = pageMetadata({
  path: "/services/email-marketing",
  title: "Email Marketing and Follow-Up Sequences",
  description:
    "Campaigns, follow-up sequences and the automation behind them, set up so the message goes out whether or not anyone remembers to send it.",
  legacy: true,
});

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const section = "py-16 lg:py-[104px]";
const h2Class = "text-h2 text-balance text-ink";

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

const pillars = [
  {
    title: "Customized Strategies",
    body: "We dive deep into your brand to define, design, and implement tailored strategies that align with both your brand identity and your specific business needs.",
    illo: "/figma/email-marketing/card-strategies.svg",
    alt: "An envelope being stamped.",
  },
  {
    title: "Newsletters and Automation",
    body: "Send the emails your customers genuinely want to read and engage with, fostering a close relationship and a sense of belonging that retains and fosters your community..",
    illo: "/figma/email-marketing/card-newsletters.svg",
    alt: "An envelope with a discount tag.",
  },
  {
    title: "Impactful Texts and Designs",
    body: "Your emails won't be 'just another one.' Each email is crafted to make an impact and hold the customer's attention until the end. Stand out from your competition and position yourself in your customers' 'top of mind.",
    illo: "/figma/email-marketing/card-texts.svg",
    alt: "A person beside an email message.",
  },
  {
    title: "Analysis and Continuous Optimization",
    body: "Without analysis, there's no improvement. That's why we closely track your metrics and adjust the strategy to maximize results, ensuring your sales continually improve.",
    illo: "/figma/email-marketing/card-analytics.svg",
    alt: "An envelope with a rising bar chart.",
  },
];

const outcomes = [
  "Transform website visitors into subscribers.",
  "Build strong relationships that drive sales.",
  "Foster customer loyalty and maximize profits.",
];

/* La banda de cifras del Figma (75+, 32.3M€, 6.7X, 4.9/5) no está aquí:
   ninguna de las cuatro está medida, y PRODUCT.md prohíbe publicar métricas sin
   respaldo. Estuvo un tiempo con las etiquetas y un guion en lugar del número,
   más una nota que decía "Placeholder. The figures in the Figma are not
   measured" — es decir, una sección entera cuyo contenido era una disculpa.
   Cuando haya cifras medidas, las etiquetas eran: Trusted Clients, Generated
   through emails, Average ROI, Customer Satisfaction. */

/**
 * El Figma solo escribe la primera respuesta; las otras siete estaban sin
 * contenido y el acordeon las filtraba, asi que la pagina publicaba un FAQ de
 * una sola pregunta con el hueco debajo.
 *
 * Las siete se escriben aqui en el registro de PRODUCT.md, no en el del frame:
 * son afirmaciones sobre el servicio y tienen que poder defenderse en una
 * llamada. De ahi tres decisiones que conviene no deshacer sin pensarlo:
 *
 * - **"What kind of results can I expect?" no lleva cifra**, y dice por que.
 *   Es la pregunta donde la regla de no prometer porcentajes de facturacion se
 *   juega entera; el Figma la dibuja esperando el numero que aqui no va.
 * - **"Have you worked with brands in my niche?" nombra los tres clientes
 *   reales** —la tienda, el gimnasio, el productor musical— y admite que eso
 *   es variedad, no especialidad. Es lo unico verificable que hay.
 * - Cada respuesta larga termina en el mecanismo o en el limite, no en el
 *   beneficio.
 *
 * La primera sigue siendo la del Figma, que promete "the perfect solution for
 * you" y es el lenguaje de consultora que PRODUCT.md lista como
 * anti-referencia. Se deja porque es contenido del archivo y no un hueco; si
 * se reescribe, es la unica del bloque que cambia de registro.
 */
const faqs: FaqItem[] = [
  {
    q: "Can my store benefit from email marketing?",
    a: "We focus on helping all types of online stores reach their full potential through email marketing. If you're looking for an effective way to engage your audience, increase conversion rates, and generate more sales, our service can be the perfect solution for you.",
  },
  {
    q: "What are flows or automations?",
    a: "An email that sends itself when something happens, instead of when someone remembers. A cart gets abandoned, a first order arrives, three months go by with no opens: each of those can start a sequence. You write it once and it keeps running, including on the days nobody is at a desk.",
  },
  {
    q: "What do your services include?",
    a: "Strategy, the writing, the design, the build inside your email platform, and the reporting afterwards. In practice that is the automated flows, the campaigns you send by hand, the templates they use, how the list is segmented, and a monthly read of what actually happened. If some of it already exists we work with what is there instead of starting again.",
  },
  {
    q: "Will you consider the brand's branding?",
    a: "Yes. If you have guidelines we follow them, and if you do not we work from what your site and your products already look like. An email that does not look like the shop it came from gets deleted by people, which is a worse problem than being caught by a spam filter.",
  },
  {
    q: "Have you worked with brands in my niche?",
    a: "Maybe, and we will tell you straight on the call rather than stretch a case to fit. So far this has been built for an online store, a local gym and a music producer, which is a range rather than a speciality. What carries across is the mechanism, not the subject matter, and where it does not carry across, you should hear that before you pay for anything.",
  },
  {
    q: "What kind of results can I expect?",
    a: "No number from us before we have seen your list, your product and your margins. Anyone who gives you one at this stage is guessing. What we will commit to is what gets built: the flows live and tested, the campaigns going out on a schedule, and a monthly report showing opens, clicks, revenue attributed to email and what changed. If those are not moving after a few months, that is a conversation we start, not one you have to.",
  },
  {
    q: "What are newsletters or email campaigns?",
    a: "The ones you decide to send: a launch, an offer, a seasonal message, something worth telling. They go out to a list, or a segment of it, on a date you pick. Flows run themselves off what a customer does; campaigns have a person deciding. Most stores want both, and it is usually the flows that earn quietly in the background.",
  },
  {
    q: "Is there any type of reporting or tracking?",
    a: "Yes, and it is the part that usually gets skipped. Every month you get what was sent, what was opened and clicked, what was bought as a result, and which flows are paying for themselves, written in plain language, not a platform export forwarded to you. You keep your own access to the platform too, so nothing we report is something you cannot go and check.",
  },
];

export default function EmailMarketingPage() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* --- Hero ---------------------------------------------------- */}
        <section className={`${wrap} pt-14 pb-16 lg:pt-[90px] lg:pb-20`}>
          <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,601px)_minmax(0,1fr)] min-[900px]:gap-8">
            <div>
              <p className="inline-flex rounded-sm border border-pink bg-pink-wash px-3 py-1.5 text-small leading-5 text-pink-ink">
                Email Marketing
              </p>
              <h1 className="mt-6 max-w-[601px] text-display text-balance text-ink">
                Maximize Customer Engagement
              </h1>
              <p className="mt-6 max-w-[34em] text-body text-pretty text-ink-soft">
                Our team handles every aspect, ensuring your email campaigns are
                expertly crafted, timed, and fine-tuned for success.
              </p>
              <div className="mt-8">
                <CtaLink href="#contact">Get Started</CtaLink>
              </div>
            </div>

            <Image
              src="/figma/email-marketing/hero.svg"
              alt="Someone at a desk sending email from a laptop, with a cloud and a paper plane above."
              width={642}
              height={431}
              priority
              className="h-auto w-full max-w-[642px] justify-self-end"
            />
          </div>
        </section>

        {/* --- Plataformas + "Capture, sell, and retain customers." ----- */}
        <div className="bg-paper-panel">
          <section className={`${wrap} py-10`}>
            <p className="text-center text-small text-ink-soft">
              Platforms we work with
            </p>
            <ul className="mt-6 flex list-none flex-wrap items-center justify-center gap-x-12 gap-y-8 min-[900px]:justify-between">
              {tools.map((t) => (
                <li key={t.name}>
                  <Image
                    src={t.src}
                    alt={t.name}
                    width={t.w}
                    height={t.h ?? 42}
                    className="h-[26px] w-auto min-[900px]:h-[34px]"
                  />
                </li>
              ))}
            </ul>
          </section>

          <section className={`${wrap} pt-8 pb-16 lg:pt-12 lg:pb-24`}>
            <div className="grid gap-8 min-[900px]:grid-cols-2 min-[900px]:items-start min-[900px]:gap-16">
              <h2 className={`max-w-[601px] ${h2Class}`}>
                Capture, sell, and retain customers.
              </h2>
              <p className="max-w-[34em] text-copy text-pretty text-ink-soft min-[900px]:pt-3">
                Transform every website visit into loyal, repeat customers. With
                our proven methodology, you can boost your store&rsquo;s sales and
                achieve sustainable, long-term growth.
              </p>
            </div>

            <ul className="mt-12 grid list-none gap-6 min-[900px]:grid-cols-2">
              {pillars.map((p) => (
                <li
                  key={p.title}
                  className="rounded-md border border-line bg-paper p-8 min-[900px]:p-10"
                >
                  <Image
                    src={p.illo}
                    alt={p.alt}
                    width={133}
                    height={133}
                    loading="lazy"
                    className="h-[100px] w-auto min-[900px]:h-[133px]"
                  />
                  <h3 className="mt-6 text-[1.25rem] font-bold tracking-[-0.02em] text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-copy text-pretty text-ink-soft">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* --- Maximize Customer Engagement ---------------------------- */}
        <section className={`${wrap} ${section}`}>
          <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,601px)_minmax(0,1fr)] min-[900px]:gap-8">
            <div>
              <h2 className={`max-w-[601px] ${h2Class}`}>
                Maximize Customer Engagement
              </h2>
              <p className="mt-6 max-w-[34em] text-copy text-pretty text-ink-soft">
                Rising advertising costs make acquiring new customers increasingly
                expensive. Relying solely on paid traffic leaves your business
                vulnerable and less profitable, allowing better-funded competitors
                to outperform you.
              </p>
              <p className="mt-5 max-w-[34em] text-copy text-pretty text-ink-soft">
                You need a robust customer retention and customer lifetime value
                (LTV) enhancement system.
              </p>

              <ul className="mt-8 grid list-none gap-3">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 size-5 shrink-0 text-violet" />
                    <span className="text-ui text-ink">{o}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CtaLink href="#contact">Get Started</CtaLink>
              </div>
            </div>

            <Image
              src="/figma/email-marketing/retention.png"
              alt="Someone drawing customers in with a magnet, next to gifts and a discount tag."
              width={665}
              height={484}
              loading="lazy"
              className="h-auto w-full max-w-[665px] justify-self-end"
            />
          </div>
        </section>

        {/* --- Automate Processes and Scale Your Sales ----------------- */}
        <section className={`${wrap} pb-16 lg:pb-24`}>
          <div className="max-w-[601px]">
            <h2 className={`max-w-[601px] ${h2Class}`}>
              Automate Processes and Scale Your Sales
            </h2>
            <p className="mt-6 text-copy text-pretty text-ink-soft">
              Imagine being able to send each customer the right message at the
              right moment, entirely personalized based on their relationship with
              your brand.
            </p>
            <p className="mt-5 text-copy text-pretty text-ink-soft">
              Now, picture being able to send that personalized email
              automatically. What would be the impact on your business?
            </p>
            <p className="mt-5 text-copy text-pretty text-ink-soft">
              Let the systems work for you, achieving higher productivity, more
              sales, and a solid, scalable growth.
            </p>
            <div className="mt-8">
              <CtaLink href="#contact">Get Started</CtaLink>
            </div>
          </div>

          {/* El diagrama es un solo asset de 1110px con etiquetas de 14px.
              Encajado a 375px de ancho las etiquetas caen a ~4px, ilegibles.
              Por debajo de 900px se desplaza en horizontal con un ancho minimo
              que las deja a ~11px, en vez de encoger hasta no servir. */}
          <div className="-mx-6 mt-12 overflow-x-auto px-6 min-[900px]:mx-0 min-[900px]:overflow-visible min-[900px]:px-0">
            <Image
              src="/figma/email-marketing/flow.png"
              alt="The lifecycle of email flows around a loyal customer: welcome series, browse abandonment, abandoned cart, sell, post-purchase, upsell and cross-sell, windback and sunset flow."
              width={2220}
              height={2204}
              loading="lazy"
              className="h-auto w-[860px] max-w-none min-[900px]:w-full min-[900px]:max-w-[1110px]"
            />
          </div>
        </section>

        {/* --- What Our Clients Say ------------------------------------ */}
        <section className="bg-dusk">
          <div className={`${wrap} ${section}`}>
            <h2 className="text-center text-h2 text-balance text-white">
              What Our Clients Say
            </h2>
            <div className="mt-12">
              <DarkTestimonials />
            </div>
          </div>
        </section>

        {/* --- FAQ ----------------------------------------------------- */}
        <section className={`${wrap} ${section}`}>
          <div className="grid gap-12 min-[900px]:grid-cols-[minmax(0,601px)_minmax(0,1fr)] min-[900px]:items-start min-[900px]:gap-16">
            <div>
              <p className="text-small font-medium text-violet-ink">
                Have you made it this far and you&rsquo;re still not sure?
              </p>
              <h2 className={`mt-4 max-w-[601px] ${h2Class}`}>
                Here, we address the most common questions:
              </h2>
              <p className="mt-6 max-w-[34em] text-copy text-pretty text-ink-soft">
                Starting to work with an agency can be a significant improvement,
                but it involves an important decision. That&rsquo;s why we want to
                help you make an informed choice. Many of our clients had similar
                doubts before working with us, which is why we created this
                section.
              </p>
              <p className="mt-5 max-w-[34em] text-copy text-pretty text-ink-soft">
                If you have any unanswered questions, don&rsquo;t hesitate to
                contact us right here. We&rsquo;ll be happy to provide the answers.
              </p>
              <div className="mt-8">
                <CtaLink href="#contact">Get Started</CtaLink>
              </div>
            </div>

            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* --- Talk to our Sales team ---------------------------------- */}
        <section id="contact" className={`${wrap} scroll-mt-24 ${section}`}>
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

              <AfterYouSend />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
