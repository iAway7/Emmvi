import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CalendlyButton } from "@/components/calendly-button";
import { ContactForm } from "@/components/contact-form";
import { CtaLink } from "@/components/cta-link";
import { ReplyProof } from "@/components/reply-proof";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pageMetadata } from "@/lib/site";

/**
 * Pagina de servicio del posicionamiento nuevo, no una replica del Figma: usa
 * el shell del sitio vivo y los patrones de la home, no los de /services/seo.
 *
 * Existe para una busqueda concreta —"GoHighLevel automation", "GHL
 * workflows"— y para el outreach a quien ya paga la licencia. El lector es el
 * mismo de PRODUCT.md: dueno de negocio pequeno, no tecnico, en el movil.
 *
 * **No contradice "una oferta, no un menu".** No ofrece GHL como pieza suelta
 * frente a otras: es la misma oferta entrada por la puerta de quien ya tiene
 * la herramienta. Por eso la seccion "The site is part of this" devuelve a la
 * home en vez de dejar la automatizacion como servicio independiente.
 *
 * Tres cosas que no se afirman aqui, y es deliberado:
 * - **Ninguna certificacion.** HighLevel tiene programa propio y Emmvi no lo
 *   ha hecho. El FAQ lo dice con todas las letras en vez de callarlo.
 * - **Ningun numero sin medir.** Nada de "48h de entrega" ni "60% menos de
 *   admin", que es de lo que vive la competencia de este termino.
 * - **Ningun porcentaje de facturacion.** Regla de PRODUCT.md.
 */

/**
 * **Publicada como borrador**, por decision del usuario el 2026-09-21: sale de
 * la nav y del pie, sale del sitemap (`lib/site.ts`) y pide no ser indexada.
 * La pagina sigue existiendo en su URL, asi que se puede revisar en vivo sin
 * que nadie llegue a ella por su cuenta.
 *
 * `follow: false` ademas de `index: false` porque enlaza a /contact-us y a la
 * home, y no hace falta que un rastreador entre por aqui a paginas que ya
 * tienen su propia via.
 *
 * Para publicarla: quitar `robots` de aqui, devolver la ruta a
 * `currentRoutes` en lib/site.ts y volver a ponerla en `services` de
 * site-header.tsx y en la columna del pie. Lo que falta para que este
 * terminada esta en el README.
 */
export const metadata: Metadata = {
  ...pageMetadata({
    path: "/services/gohighlevel-automation",
    title: "GoHighLevel Automation Setup and Workflows",
    description:
      "We build what runs inside your GoHighLevel account: lead routing, instant replies, quote follow-ups, review requests and reporting. Every workflow tested before launch, and the account stays yours.",
  }),
  robots: { index: false, follow: false },
};

/** Sintomas, no objeciones. Cada uno es una escena que el lector reconoce, y
 *  los cuatro describen el mismo fallo: la licencia comprada y el sistema sin
 *  montar. Ninguno culpa al lector. */
const symptoms = [
  "The account has been open for months and the only thing in it is the snapshot that came with it.",
  "Leads land in the CRM. That is as far as they get.",
  "Half a workflow exists. Nobody remembers what the other half was meant to do.",
  "The follow-up is you, at nine at night, going back through the pipeline.",
];

/** Lo que se construye dentro de la cuenta. Seis, y cada uno nombra el
 *  artefacto concreto —el pipeline, la secuencia, el calendario— en vez de
 *  quedarse en "automatizamos tus procesos". */
const built = [
  {
    title: "Lead capture and routing",
    body: "Website forms, phone calls, missed calls and chat all land in one pipeline, tagged by where they came from and assigned to someone. Nothing arrives in a shared inbox and waits.",
  },
  {
    title: "Instant reply",
    body: "A text and an email go out the moment an enquiry arrives, day or night, with the name and the job in them. This is the one we can show you running before you pay anything.",
  },
  {
    title: "Quote follow-up",
    body: "A quote that goes out and hears nothing back gets chased on a schedule you set, and stops the moment the customer replies or the opportunity moves stage.",
  },
  {
    title: "Booking and reminders",
    body: "Calendars that only offer the slots you can actually work, confirmations when someone books, and reminders before the appointment so fewer people forget.",
  },
  {
    title: "Review requests",
    body: "The request goes out after the job is marked done, not when someone remembers. Bad replies route back to you instead of going public.",
  },
  {
    title: "Reporting",
    body: "Where enquiries come from, how many got answered, how many turned into quotes and what happened to them. One page, built once, updates itself.",
  },
];

/**
 * El catalogo de GoHighLevel, en su propia taxonomia y con sus propios nombres
 * de producto.
 *
 * **Copiado de gohighlevel.com, no de memoria ni de una comparativa de
 * terceros.** Las pestanas Capture y Nurture se verificaron contra el sitio
 * vivo palabra por palabra; las otras tres salen de capturas del mismo sitio.
 * "CalendarsText Snippets" viene asi de su pagina —son dos funciones que su
 * maquetacion junto— y aqui van separadas, que es lo unico que se ha
 * corregido.
 *
 * Esta lista es una afirmacion sobre el producto de otro, asi que envejece
 * sola: si HighLevel cambia su catalogo, esto miente. Conviene repasarla cuando
 * se toque la pagina.
 *
 * **No es una lista de lo que Emmvi monta.** Es justo lo contrario: el volumen
 * es el argumento. Ver el puente que va debajo.
 */
type Stage = {
  stage: string;
  /** `ours` marca las que Emmvi monta. Ver el render y el conteo de abajo. */
  items: { name: string; ours?: boolean }[];
};

const platform: Stage[] = [
  {
    stage: "Capture",
    items: [
      { name: "CRM", ours: true },
      { name: "Voice AI" },
      { name: "Forms, Surveys & Quizzes", ours: true },
      { name: "Websites, Funnels & Landing Pages" },
      { name: "Webinar Funnels" },
      { name: "Chat Widget / Conversation AI" },
      { name: "Call Tracking" },
      { name: "Inbound SMS & Social DMs", ours: true },
      { name: "Social Planner" },
      { name: "Missed Call Text-Back", ours: true },
      { name: "AI Biz Card Scanner" },
      { name: "QR Codes" },
      { name: "Prospecting Tool" },
      { name: "Ad Manager" },
    ],
  },
  {
    stage: "Nurture",
    items: [
      { name: "Conversation AI" },
      { name: "Consolidated conversation stream", ours: true },
      { name: "Sales Pipelines", ours: true },
      { name: "Workflows & Automations", ours: true },
      { name: "Calendars", ours: true },
      { name: "Text Snippets" },
      { name: "Appointment Reminders", ours: true },
      { name: "Ringless Voicemail" },
      { name: "Mobile App" },
      { name: "Automated Outbound Call Connect" },
    ],
  },
  {
    stage: "Close",
    items: [
      { name: "Lead Scoring" },
      { name: "Estimates & Proposals", ours: true },
      { name: "Invoicing", ours: true },
      { name: "Payment Integrations", ours: true },
      { name: "Paid Calendars" },
      { name: "Order Forms / Upsells / Downsells" },
      { name: "Membership Offers / Courses" },
      { name: "One-click Upsell Funnels" },
      { name: "Text-2-Pay" },
      { name: "Tap-2-Pay" },
      { name: "Gift Cards" },
      { name: "Loyalty Programs" },
    ],
  },
  {
    stage: "Evangelize",
    items: [
      { name: "Reputation Management", ours: true },
      { name: "Automated Review Requests", ours: true },
      { name: "AI Review Reply" },
      { name: "Affiliate Manager" },
      { name: "Website Review Widgets" },
      { name: "Video Review Capture" },
      { name: "Video Review Widgets" },
      { name: "Social Planner Auto-Review Posts" },
      { name: "Communities" },
    ],
  },
  {
    stage: "Reactivate",
    items: [
      { name: "Broadcast Campaigns" },
      { name: "Smart Lists / Segmentation", ours: true },
      { name: "Automated Birthday Campaigns" },
      { name: "Automated Seasonal Campaigns" },
      { name: "Database Reactivation Templates" },
      { name: "Newsletter Automation" },
      { name: "Content AI" },
    ],
  },
];

/**
 * Las dos cifras se cuentan, no se escriben. Un "over fifty features" a mano
 * queda falso en cuanto alguien toca el array, y las dos frases que cargan el
 * argumento de la seccion son justo esas.
 *
 * Unicos: "Loyalty Programs" y "Conversation AI" aparecen en varias etapas del
 * catalogo original y se han dejado donde su sitio los pone.
 */
const allItems = platform.flatMap((p) => p.items);
const platformCount = new Set(allItems.map((i) => i.name)).size;
const oursCount = allItems.filter((i) => i.ours).length;

/**
 * Lo que hace Emmvi. Es deliberadamente mas corta que la de arriba y esta
 * escrita en verbos: aquella son cosas que existen, estas son cosas que alguien
 * hace.
 *
 * Ninguna promete resultado. Cada una es una tarea que se puede facturar,
 * comprobar y discutir en una llamada, que es el filtro de PRODUCT.md.
 */
const work = [
  {
    title: "Look at what is already there",
    body: "Before anything else. Half-built workflows, the snapshot that came with the account, the pipeline nobody uses. Some of it is worth keeping and we will tell you which.",
  },
  {
    title: "Set the account up properly",
    body: "Pipelines and stages that match how you actually quote, the custom fields you need, calendars, phone numbers, and email authentication so what you send arrives.",
  },
  {
    title: "Build the workflows",
    body: "The instant reply, the quote chase, the reminders, the review request. Written for your trade and your wording, not a template with your name dropped into it.",
  },
  {
    title: "Bring your data across",
    body: "Contacts and history out of HubSpot, ActiveCampaign, Mailchimp or a spreadsheet. The old system stays on until the new one has run alongside it.",
  },
  {
    title: "Connect what GoHighLevel does not reach",
    body: "Your job software, your payments, your own records. Through Zapier, Make or a direct API. If yours will not connect we say so before you pay anything.",
  },
  {
    title: "Build the website that feeds it",
    body: "The forms, the quote request and the booking button, built as one job with the automation instead of handed between two suppliers.",
  },
  {
    title: "Test it with a real enquiry",
    body: "Every workflow gets fired for real before launch. Not a preview: an actual enquiry going in one end and an actual text arriving at a phone.",
  },
  {
    title: "Hand it over so your team can run it",
    body: "A walkthrough of what was built and why, and a short written record of it. You should not need us to change a reply template.",
  },
  {
    title: "Change it as the business changes",
    body: "New service, new area, a sequence that is annoying people. The first version of a follow-up is never the right one.",
  },
];

/** Los pasos son los de la home, reescritos para esta puerta de entrada: aqui
 *  el paso 01 es una auditoria de lo que ya hay montado, no una presentacion. */
const steps = [
  {
    n: "01",
    title: "We look at the account",
    body: "Thirty minutes, screen shared. What is built, what is half built, what the snapshot left behind. You get our read on what is worth keeping, whether you hire us or not.",
  },
  {
    n: "02",
    title: "We build it",
    body: "Pipelines, workflows, calendars, templates and the connections to whatever else you run. You see it in the account as it goes in, not in a slide at the end.",
  },
  {
    n: "03",
    title: "We test it, then it runs",
    body: "Every workflow gets fired with a real enquiry before launch. After that we watch it for the first weeks and adjust, because the first version of a follow-up sequence is never the right one.",
  },
];

/** GHL no es una isla y la pagina no finge que lo sea: lo que hace que valga
 *  la pena es lo que queda conectado a los lados. Son las mismas herramientas
 *  que ya nombra la home — una sola lista, no dos que divergen. */
const connected = [
  {
    name: "Your website",
    body: "The forms, the quote request and the booking button. We build the site too, so the handover between the two no longer exists.",
  },
  {
    name: "Kickserv",
    body: "Jobs, scheduling and invoicing for field work, with the enquiry carried across instead of retyped.",
  },
  {
    name: "Stripe",
    body: "Deposits and payments, with the payment status visible on the opportunity.",
  },
  {
    name: "Airtable",
    body: "Where a business already keeps its own records and wants to go on keeping them.",
  },
  {
    name: "Zapier and Make",
    body: "For everything else with an API. If yours does not connect, we say so before you pay anything.",
  },
];

const faqs = [
  {
    q: "What is GoHighLevel?",
    a: "It is a CRM with marketing automation built in: contacts, pipelines, text and email, calendars, forms and reporting in one account, instead of five tools that have to be glued together. Agencies use it most, but it works just as well for a single business. You pay HighLevel a monthly licence for it.",
    open: true,
  },
  {
    q: "Are you a certified GoHighLevel partner?",
    a: "No. HighLevel runs its own certification programme and we have not taken it. What we can show you is an account we built, the workflows running inside it and a client who will talk to you. Ask for that from us, and from anyone else you are considering.",
  },
  {
    q: "I already pay for it and barely use it. Is that fixable?",
    a: "Usually, and it is most of what we get asked for. The licence is normally not the problem. On the call we go through the account and tell you what is worth building on and what is better rebuilt.",
  },
  {
    q: "Do I have to buy GoHighLevel through you?",
    a: "No. We have an agency account, so your sub-account can live inside ours, or you can hold your own licence and pay HighLevel directly. We will tell you what each option costs and what changes before you pick one.",
  },
  {
    q: "Who owns the account and the customer data?",
    a: "You do. The contacts, the conversations and the workflows are yours. If you leave, we export the data and help you move the sub-account, whichever licence it sits under.",
  },
  {
    q: "Can you move me over from another CRM?",
    a: "Yes, from HubSpot, ActiveCampaign, Mailchimp, a spreadsheet or all four at once. Contacts, history and the sequences that are worth keeping. We do not switch the old system off until the new one has run for a while alongside it.",
  },
  {
    q: "Will it work with the website I already have?",
    a: "Usually yes, whatever it is built on. Sometimes the site is fine and only the forms need rewiring. Sometimes the site is what is losing the enquiry, and we will say so.",
  },
  {
    q: "How long does it take?",
    a: "It depends on how much is already there and how many tools it has to reach. We give you a date on the call, after looking at the account, rather than a number on a page before we have seen anything.",
  },
];

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const section = "py-16 lg:py-[104px]";

export default function GoHighLevelAutomation() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className={`${wrap} pt-16 pb-20 lg:pt-[88px] lg:pb-24`}>
          <div className="grid items-center gap-12 min-[900px]:grid-cols-[1.05fr_0.95fr] min-[900px]:gap-16">
            <div>
              <p className="text-eyebrow text-violet">GoHighLevel automation</p>
              <h1 className="mt-3 max-w-[14em] text-display text-balance text-ink">
                Your GoHighLevel, answering in under a minute
              </h1>
              <p className="mt-6 max-w-[34em] text-lede text-pretty text-ink-soft">
                Lead routing, instant replies, quote follow-ups, review requests
                and reporting, built inside your account and tested with a real
                enquiry before it goes live.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <CtaLink href="#contact">Get your account looked at</CtaLink>
                <CtaLink href="#built" variant="ghost">
                  See what we build
                </CtaLink>
              </div>
            </div>

            {/* Aqui ReplyProof si es honesto: ensena la respuesta que se
                construye *para el cliente*, que es literalmente lo que hace el
                workflow de GHL. Ver la nota contraria en /contact-us. */}
            <div className="flex justify-center min-[900px]:justify-end">
              <ReplyProof />
            </div>
          </div>
        </section>

        <section className={`bg-paper-alt ${section}`}>
          <div className={wrap}>
            <h2 className="text-h2 text-balance text-ink">
              The licence is not the system
            </h2>
            <p className="mt-5 max-w-[38em] text-lede text-pretty text-ink-soft">
              GoHighLevel bills every month whether or not anything runs inside
              it. Buying it gets you an empty account and a snapshot somebody
              built for somebody else&rsquo;s business.
            </p>
            <ul className="mt-14 grid gap-6 md:grid-cols-2">
              {symptoms.map((line) => (
                <li
                  key={line}
                  className="rounded-md bg-paper p-8 text-[1.5rem] font-medium leading-[34px] tracking-[-0.3px] text-pretty text-ink max-md:text-[1.25rem] max-md:leading-[30px]"
                >
                  <span aria-hidden="true" className="font-bold text-violet">
                    &ldquo;
                  </span>
                  {line}
                  <span aria-hidden="true" className="font-bold text-violet">
                    &rdquo;
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="built" className={`scroll-mt-24 ${section}`}>
          <div className={wrap}>
            <h2 className="text-h2 text-balance text-ink">
              What we build inside it
            </h2>
            <p className="mt-5 max-w-[38em] text-lede text-pretty text-ink-soft">
              Not all six on day one. We start with whatever is losing you work
              right now, which is almost always the first two.
            </p>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {built.map((b) => (
                <article
                  key={b.title}
                  className="flex flex-col gap-3 rounded-md border border-line bg-paper p-8"
                >
                  <h3 className="text-h3 text-balance text-ink">{b.title}</h3>
                  <p className="text-[1rem] leading-[26px] tracking-[-0.2px] text-pretty text-ink-soft">
                    {b.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* El catalogo ajeno y el trabajo propio, encadenados y no enfrentados en
            dos columnas: apilados, el salto de la banda oscura al papel cuenta
            el argumento solo —todo esto lo pagas / esto es lo que hay que
            hacer—, y en el movil, donde dos columnas se apilarian igual, no se
            pierde nada.

            Fondo `bg-ink` solido y no `bg-night`: el gradiente aclara hasta
            #7d7d7d al final, y esta seccion lleva cincuenta lineas de texto
            hasta abajo. Sobre #171717 el blanco al 70% rinde ~9.4:1. */}
        <section className={`bg-ink ${section}`}>
          <div className={wrap}>
            <p className="text-eyebrow text-violet-light">In the box</p>
            <h2 className="mt-3 max-w-[16em] text-h2 text-balance text-white">
              All {platformCount} of these come with the licence
            </h2>
            <p className="mt-5 max-w-[38em] text-lede text-pretty text-white/80">
              That is HighLevel&rsquo;s own feature list, in their own words. You
              are paying for every one of them, every month, today.{" "}
              <strong className="font-medium text-white">
                The {oursCount} ticked are the ones we build.
              </strong>{" "}
              The rest came in the box and will stay there.
            </p>

            <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
              {platform.map((group) => (
                <div key={group.stage}>
                  <h3 className="border-b border-white/20 pb-3 font-mono text-small tracking-wide text-white/60 uppercase">
                    {group.stage}
                  </h3>
                  {/* Las que montamos van en blanco y las demas al 55%, que
                      sobre #171717 sigue dando 6.4:1 — apagadas, no
                      inaccesibles. El resaltado no es solo color: lleva marca
                      delante, para quien no distingue los dos grises, y un
                      texto solo para lectores de pantalla, que de otro modo
                      oirian las cincuenta y dos como iguales. */}
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className={`flex gap-2 text-[0.9375rem] leading-[22px] text-pretty ${
                          item.ours
                            ? "font-medium text-white"
                            : "text-white/55"
                        }`}
                      >
                        {item.ours ? (
                          <span className="shrink-0 text-violet-light">
                            <span className="sr-only">We build this: </span>
                            <span aria-hidden="true">&#10003;</span>
                          </span>
                        ) : (
                          <span
                            aria-hidden="true"
                            className="shrink-0 opacity-0"
                          >
                            &#10003;
                          </span>
                        )}
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* El puente. Es la frase que convierte la lista de arriba de catalogo
            en argumento, asi que va sola y a tamano de titular, sin tarjeta. */}
        <section className={section}>
          <div className={wrap}>
            <p className="max-w-[24em] text-h2 text-balance text-ink">
              Knowing which {oursCount} is half the job.
            </p>
            <p className="mt-6 max-w-[38em] text-lede text-pretty text-ink-soft">
              The other {platformCount - oursCount} are why the account feels
              impossible to start, and why the snapshot that came with it made
              things worse instead of better. This is the other half.
            </p>

            <ol className="mt-14 border-t border-line">
              {work.map((w, i) => (
                <li
                  key={w.title}
                  className="grid gap-x-8 gap-y-2 border-b border-line py-7 md:grid-cols-[3rem_0.9fr_1.4fr]"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-small text-violet"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-h3 text-balance text-ink">{w.title}</h3>
                  <p className="text-body text-pretty text-ink-soft max-md:col-start-1 md:col-start-3">
                    {w.body}
                  </p>
                </li>
              ))}
            </ol>

            <p className="mt-8 max-w-[38em] text-body text-pretty text-ink-soft">
              One gap up there is deliberate. GoHighLevel builds websites and
              funnels, and we do not use it for that: your site is what people
              judge you on before they ever reach a form, and it should not be
              limited by a page builder that came free with a CRM. We build it
              properly and wire it in.
            </p>
          </div>
        </section>

        <section className={`bg-paper-alt ${section}`}>
          <div className={wrap}>
            <div className="grid items-center gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-16">
              <div>
                <h2 className="text-h2 text-balance text-ink">
                  Here is one of them
                </h2>
                <p className="mt-5 text-lede text-pretty text-ink-soft">
                  A quote goes out and the opportunity moves stage. That fires a
                  text the same day, waits a day, and sends a second one. If the
                  customer replies or the stage changes again, the sequence
                  stops on its own.
                </p>
                <p className="mt-5 max-w-[34em] text-body text-pretty text-ink-soft">
                  It is four blocks on a canvas, and it is also the difference
                  between a quote that gets chased and one that does not. Most
                  of this work looks like this: small, specific, and running
                  whether or not anyone is at a desk.
                </p>
              </div>
              {/* Recortada a su contenido y casi cuadrada (1398x1542), asi que
                  va con object-contain sobre el mismo #f3f4f8 del pantallazo:
                  recortarla partiria el flujo por la mitad. Misma imagen que la
                  tarjeta de la home — un solo archivo, un solo flujo real. */}
              <Image
                src="/home/automation-flow.png"
                alt="A GoHighLevel workflow: an opportunity changes stage, a text message goes out, it waits a day, and a second text follows."
                width={1398}
                height={1542}
                className="w-full rounded-md border border-line bg-[#f3f4f8] object-contain p-2"
                sizes="(min-width: 900px) 34rem, 90vw"
              />
            </div>
          </div>
        </section>

        <section className={section}>
          <div className={wrap}>
            <h2 className="text-h2 text-balance text-ink">
              And what it is connected to
            </h2>
            <p className="mt-5 max-w-[38em] text-lede text-pretty text-ink-soft">
              GoHighLevel on its own is another place to check. It earns its
              keep when the rest of the business feeds it and reads from it.
            </p>
            <div className="mt-14 border-t border-line">
              {connected.map((c) => (
                <div
                  key={c.name}
                  className="grid gap-2 border-b border-line py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-12"
                >
                  <h3 className="text-h3 text-balance text-ink">{c.name}</h3>
                  <p className="text-body text-pretty text-ink-soft">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-[38em] text-body text-pretty text-ink-soft">
              The website and the automation are one job here, not two
              suppliers.{" "}
              <Link
                href="/"
                className="text-ink underline underline-offset-[3px] transition-colors hover:text-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
              >
                See how the two fit together
              </Link>
              .
            </p>
          </div>
        </section>

        <section className={`bg-paper-alt ${section}`}>
          <div className={wrap}>
            <h2 className="text-h2 text-balance text-ink">How it works</h2>
            <ol className="mt-14 grid gap-6 md:grid-cols-3">
              {steps.map((s) => (
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
                  <p className="mt-2 flex-1 text-[1rem] leading-[26px] tracking-[-0.2px] text-pretty text-ink-soft">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex justify-center">
              <CalendlyButton>Book a thirty-minute call</CalendlyButton>
            </div>
          </div>
        </section>

        {/* Decir lo que no se hace, que es el principio 3 de DESIGN.md — y en
            este termino en concreto es lo que mas separa a Emmvi del resto de
            resultados, que venden horas de VA y sellos de certificacion. */}
        <section className={section}>
          <div className={wrap}>
            <div className="grid gap-10 min-[900px]:grid-cols-[0.9fr_1.1fr] min-[900px]:gap-16">
              <div>
                <h2 className="text-h2 text-balance text-ink">
                  What we don&rsquo;t do
                </h2>
                <p className="mt-5 text-body text-pretty text-ink-soft">
                  Worth reading before the call, so nobody wastes half an hour
                  finding out.
                </p>
              </div>
              <ul className="space-y-6">
                <li>
                  <h3 className="text-h3 text-balance text-ink">
                    We don&rsquo;t sell hours
                  </h3>
                  <p className="mt-2 text-body text-pretty text-ink-soft">
                    There is no hourly assistant sitting in your account doing
                    tasks. We build a thing, test it and hand it over. If you
                    want someone in the account every day, we are the wrong
                    people and we will tell you on the call.
                  </p>
                </li>
                <li>
                  <h3 className="text-h3 text-balance text-ink">
                    We don&rsquo;t hold your account hostage
                  </h3>
                  <p className="mt-2 text-body text-pretty text-ink-soft">
                    The contacts, the conversations and the workflows are yours,
                    and so is the data behind them. Leaving means an export and
                    a sub-account transfer, not a negotiation.
                  </p>
                </li>
                <li>
                  <h3 className="text-h3 text-balance text-ink">
                    We don&rsquo;t promise a revenue number
                  </h3>
                  <p className="mt-2 text-body text-pretty text-ink-soft">
                    We can promise that every enquiry gets answered and every
                    quote gets followed up, because those are things we build
                    and test. What that is worth to your business depends on
                    your business.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={`bg-paper-alt ${section}`}>
          <div className={wrap}>
            <blockquote className="m-0 mx-auto max-w-[52em] text-center">
              <p className="text-[1.5rem] font-medium leading-[38px] tracking-[-0.3px] text-pretty text-ink max-md:text-[1.25rem] max-md:leading-[32px]">
                <span aria-hidden="true" className="font-bold text-violet">
                  &ldquo;
                </span>
                I was drowning in manual work and reached out to Nico for help
                with automations. He set up email flows, follow-ups, and little
                systems I didn&rsquo;t even know I needed. Everything feels more
                organized now. Super grateful, this was a game-changer for me.
                <span aria-hidden="true" className="font-bold text-violet">
                  &rdquo;
                </span>
              </p>
              <cite className="mt-8 flex items-center justify-center gap-3 not-italic">
                <Image
                  src="/testimonials/adriana-patania-1.png"
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                  className="size-10 shrink-0 rounded-full object-cover"
                />
                <span className="text-left text-[1rem] leading-6 tracking-[-0.2px]">
                  <span className="block font-semibold text-ink">
                    Adriana Patania
                  </span>
                  <span className="block text-ink-soft">Local gym</span>
                </span>
              </cite>
            </blockquote>
          </div>
        </section>

        <section id="faq" className={`scroll-mt-24 ${section}`}>
          <div className={wrap}>
            <h2 className="text-h2 text-balance text-ink">
              Frequently asked questions
            </h2>
            <div className="mt-12 max-w-[920px]">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  open={f.open}
                  className="group border-b border-line py-6"
                >
                  <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-6 text-[1.125rem] font-semibold leading-6 text-ink group-open:text-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-[1rem] font-normal text-ink-black group-open:text-violet"
                    >
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">&ndash;</span>
                    </span>
                  </summary>
                  <p className="mt-4 text-[1.125rem] leading-[27px] text-pretty text-ink-soft">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={`${wrap} scroll-mt-24 ${section}`}>
          <div className="grid items-start gap-10 rounded-lg bg-paper-panel p-9 min-[900px]:grid-cols-2 min-[900px]:gap-16 min-[900px]:p-16">
            <div>
              <h2 className="text-[2rem] font-bold tracking-[-1px] text-balance text-ink min-[900px]:text-[3rem]">
                Show us the account
              </h2>
              <p className="mt-5 max-w-[34em] text-lede text-pretty text-ink-soft">
                Tell us what is in there and what keeps falling through. We will
                tell you what we would build first, and whether it is worth
                paying us for.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>

        {/* Aviso de marca. No es un tramite: esta pagina usa el nombre de un
            producto ajeno en el titulo, en la URL y en todo el cuerpo, y la
            regla de PRODUCT.md —prometer solo lo cumplible— cubre tambien lo
            que se insinua sin decir. Sin esta linea, "GoHighLevel automation"
            en un h1 se lee como acreditacion.

            **La entidad es GoHighLevel Inc.**, no "HighLevel, Inc." como decia
            la primera version de esta linea. El pie de gohighlevel.com lo dice
            asi: "HighLevel LLC, a subsidiary of GoHighLevel Inc." — la filial
            se llama HighLevel y la matriz GoHighLevel, al reves de lo que
            parece. Verificado en su sitio, no deducido del nombre del producto.

            Sin el simbolo (R): que la empresa sea la titular es publico, pero el
            estado exacto del registro no se ha comprobado en ninguna oficina de
            marcas. Se afirma lo que consta. */}
        <aside className={`${wrap} pb-16 lg:pb-24`}>
          <p className="border-t border-line pt-8 text-small text-pretty text-ink-soft">
            GoHighLevel is a trademark of GoHighLevel Inc. Emmvi is an
            independent service provider and is not affiliated with, endorsed by
            or certified by GoHighLevel Inc.
          </p>
        </aside>
      </main>

      <SiteFooter />
    </>
  );
}
