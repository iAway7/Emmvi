import type { Metadata } from "next";
import Image from "next/image";

import { CalendlyButton } from "@/components/calendly-button";
import { ContactForm } from "@/components/contact-form";
import { CtaLink } from "@/components/cta-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { GhlIllustration } from "@/components/services/ghl-illustrations";
import { pageMetadata } from "@/lib/site";

/**
 * Pagina de servicio del posicionamiento nuevo, no una replica del Figma.
 *
 * ## El diseno sale de "emmvi GHL Recorrido"
 *
 * Portado del HTML que entrego el usuario el 2026-09-25. Lo que trae de nuevo
 * respecto a la version anterior es **el recorrido**: la pieza deja de ser una
 * lista de lo que se monta y pasa a seguir una sola consulta —llega a las
 * 21:47, se contesta en 34 segundos, se persigue al dia siguiente, se cierra—
 * que reaparece en el demo del hero, en la banda violeta y, negada, en los
 * sintomas.
 *
 * Sus colores ya eran los del sistema (#171717, #423af4, #847ff8, #f9fafd,
 * #eaeaea), asi que van por token. Lo que no coincidia:
 *
 * - **El ancho.** El archivo usa 1140px y aqui va el `wrap` del sitio: la
 *   cabecera y el pie ya se alinean a ese, y el contenido mas estrecho dejaba
 *   la nav flotando mas ancha que la pagina.
 * - **Los tamanos de texto.** El archivo trae quince medidas a mano, de 11px a
 *   56px. Van a la escala de `globals.css`, que ademas es lo que la regla
 *   `no-restricted-syntax` de ESLint obliga.
 * - **Los radios**, de 10/16/22px a los 8/12/32 de DESIGN.md.
 * - **El degradado violeta** (#423af4 a #5a52f6) si se conserva: es la unica
 *   banda del sitio que llena el ancho de violeta, y plano se veia mas duro.
 *
 * ## Tres cosas del archivo que NO se publican tal cual
 *
 * 1. **"We are a certified admin and automation partner".** No lo somos: el
 *    usuario lo confirmo al montar esta pagina y la version anterior ya
 *    respondia que no. Afirmar una certificacion inexistente es lo contrario
 *    de la regla de PRODUCT.md y se cae en la primera llamada.
 * 2. **El testimonio de Adriana venia reescrito.** El archivo le pone una
 *    frase que ella no dijo. Va el texto real, el mismo que usan la home y
 *    /services/email-marketing.
 * 3. **"HighLevel, Inc."** en el aviso de marca. La entidad es GoHighLevel
 *    Inc.: lo dice el pie de su propio sitio ("HighLevel LLC, a subsidiary of
 *    GoHighLevel Inc."). Y el archivo escribia "Emmvi" con mayuscula.
 *
 * Ademas, "enquiry" pasa a **"quote request"** en todo el cuerpo, que es el
 * vocabulario elegido y el que ya usa la home.
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

/** El recorrido de una sola consulta. Es la espina de la pagina: el demo del
 *  hero lo abre, esta banda lo resume y los sintomas de abajo lo niegan. */
const journey = [
  {
    label: "It arrives",
    figure: "21:47",
    body: "A quote request, on a Tuesday night, after everyone has gone home.",
  },
  {
    label: "It is answered",
    figure: "34s",
    body: "By text and email, with their name on it and two times to choose from.",
  },
  {
    label: "It is chased",
    figure: "+1 day",
    body: "If the quote goes quiet, it gets followed up without anyone remembering to.",
  },
  {
    label: "It is closed",
    figure: "Done",
    body: "The job gets marked complete and the review request goes out on its own.",
  },
];

/** Lo que pasa hoy, en el mismo orden que el recorrido de arriba. */
const symptoms = [
  "The quote request that came in at 21:47 sat in an inbox until somebody opened it the next morning.",
  "The quote you sent on Thursday was never followed up, because Friday happened.",
  "Half a day went on messages agreeing a time that a booking link would have settled.",
  "The customer was happy and nobody ever asked them for a review.",
];

/** Cuatro resultados, sobre oscuro. No son funciones: son lo que cambia. */
const changes = [
  {
    title: "Nobody waits until morning",
    body: "Every quote request gets a real reply with the person's name on it, at whatever hour it lands, from whichever form or inbox it came through.",
  },
  {
    title: "Quotes get chased for you",
    body: "A quote that goes quiet is followed up on a schedule you set, twice, and then left alone. No note on your desk, no guilt about it.",
  },
  {
    title: "The diary fills itself",
    body: "People pick a slot that is genuinely free and get reminded before it, so the back and forth stops and so do the no-shows you were absorbing.",
  },
  {
    title: "Reviews arrive because someone asked",
    body: "The request goes out when the job is marked done and the customer still remembers it, not three weeks later when you find the time.",
  },
];

/** Los dos primeros van en tarjeta grande y los cuatro siguientes en chica: es
 *  la jerarquia del archivo, y dice cual es el trabajo que de verdad se
 *  compra. */
const buildLead = [
  {
    n: "01",
    title: "Nothing arrives and gets lost",
    body: "Forms, calls, texts and social messages all land in one place, tagged with where they came from and assigned to whoever should answer.",
  },
  {
    n: "02",
    title: "Every one gets an answer",
    body: "A reply that reads like you wrote it goes out within the minute, and the conversation carries on in the same thread when you pick it up.",
  },
];

const buildRest = [
  {
    n: "03",
    title: "Quotes that follow themselves up",
    body: "Sent, chased, and marked won or lost without anyone tracking it by hand.",
  },
  {
    n: "04",
    title: "Bookings without the back and forth",
    body: "Real availability, confirmations, and a reminder before the slot.",
  },
  {
    n: "05",
    title: "Reviews asked for on time",
    body: "Triggered by the job being finished, not by you finding a spare hour.",
  },
  {
    n: "06",
    title: "One screen that tells the truth",
    body: "Where quote requests came from, which turned into work, what is still open.",
  },
];

/** Los tres primeros llevan filete violeta y los seis siguientes gris: se lee
 *  de un vistazo donde esta el grueso del trabajo. */
const order = [
  {
    n: "01",
    title: "Look at what is already there",
    body: "Your account, your forms, your calendar, and whatever you are paying for twice.",
  },
  {
    n: "02",
    title: "Set the account up properly",
    body: "Numbers, domains, sending reputation and permissions, done once and done right.",
  },
  {
    n: "03",
    title: "Build the workflows",
    body: "The replies, the chases, the reminders and the review requests, in your words.",
  },
  {
    n: "04",
    title: "Bring your data across",
    body: "Contacts, history and pipelines out of the spreadsheet and into one place.",
  },
  {
    n: "05",
    title: "Connect what it cannot reach",
    body: "Your job software, your payments, your sheets, through whatever bridge fits.",
  },
  {
    n: "06",
    title: "Build the website that feeds it",
    body: "If the site is the reason quote requests are thin, we fix that too.",
  },
  {
    n: "07",
    title: "Test it with a real quote request",
    body: "We send one through ourselves and watch what happens, end to end.",
  },
  {
    n: "08",
    title: "Hand it over",
    body: "Your login, your account, and a walkthrough of what changes what.",
  },
  {
    n: "09",
    title: "Change it as the business changes",
    body: "New service, new season, new number. It is a system, not a monument.",
  },
];

const connected = [
  {
    name: "Your website",
    body: "Forms and chat post straight in, so nothing is retyped.",
  },
  {
    name: "Kickserv",
    body: "Jobs and customers stay in step with the pipeline.",
  },
  {
    name: "Stripe",
    body: "Payments and invoices, chased the same way quotes are.",
  },
  {
    name: "Airtable",
    body: "For whatever you track that no CRM has a field for.",
  },
  {
    name: "Zapier and Make",
    body: "The bridge for anything on this list we have not met yet.",
  },
];

const steps = [
  {
    n: "1",
    title: "We look at the account",
    body: "Half an hour, screen shared, no charge.",
  },
  {
    n: "2",
    title: "We build it",
    body: "A fixed scope and a fixed price, agreed first.",
  },
  {
    n: "3",
    title: "We test it, then it runs",
    body: "A real quote request goes through before you sign off.",
  },
];

const refusals = [
  {
    title: "We don't sell hours",
    body: "You get a scope and a price. If it takes us longer than we thought, that is our problem.",
  },
  {
    title: "We don't hold your account hostage",
    body: "The licence is in your name and the logins are yours. If you leave, everything keeps running.",
  },
  {
    title: "We don't promise a revenue number",
    body: "Anyone who does is guessing. We will tell you what we are building and what it is meant to stop.",
  },
];

/**
 * La primera es la del archivo con la respuesta cambiada: alli decia "We are a
 * certified admin and automation partner" y no lo somos. Decir que no, y
 * ofrecer lo que si se puede ensenar, es lo que pasa el filtro de PRODUCT.md
 * —y es lo que mas separa a emmvi del resto de resultados de esta busqueda,
 * que viven del sello.
 */
const faqs = [
  {
    q: "Are you a certified GoHighLevel partner?",
    a: "No. HighLevel runs its own certification programme and we have not taken it. What we can show you is an account we built, the workflows running inside it and a client who will talk to you. Ask for that from us, and from anyone else you are considering.",
  },
  {
    q: "I already pay for it and barely use it.",
    a: "That is the usual starting point. The licence stays where it is and we build inside the account you already have.",
  },
  {
    q: "Who owns the data?",
    a: "You do, and the account is in your name. We work in it with the access you give us and you can take it away.",
  },
  {
    q: "Can you move me from another CRM?",
    a: "Usually, yes. Contacts and history come across first, then we rebuild the parts that were doing real work.",
  },
  {
    q: "How long does it take?",
    a: "Weeks, not months, for the first workflows. We would rather have two things running than ten half built.",
  },
];

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const section = "py-14 lg:py-[84px]";
/** El archivo pone los rotulos a 11px; la escala arranca en `text-small` (14),
 *  que es lo mas cerca sin estrenar una medida para esta sola pagina. */
const eyebrow = "text-small font-bold tracking-[0.16em] uppercase";

export default function GoHighLevelAutomation() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* --- Hero: el texto y el recorrido empezando -------------------- */}
        <section className={`${wrap} pt-10 pb-12 lg:pt-11 lg:pb-16`}>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className={`${eyebrow} text-violet`}>GoHighLevel automation</p>
              <h1 className="mt-4 text-ink">
                Your GoHighLevel, answering in under a minute
              </h1>
              <p className="mt-5 max-w-[46ch] text-lede text-pretty text-ink-soft">
                You are already paying for the software. We build the part that
                actually replies, chases and books, then hand it back to you
                running.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <CtaLink href="#contact">Get your account looked at</CtaLink>
                <CtaLink href="#build" variant="outline">
                  See what we build
                </CtaLink>
              </div>
            </div>

            {/* La escena del demo: el presupuesto de un martes por la noche,
                la respuesta 34 segundos despues y la oportunidad pasando a
                Replied. Es la misma conversacion que el demo en HTML que habia
                aqui, ahora en el estilo de ilustracion del sitio. */}
            <GhlIllustration
              name="hero"
              label="A quote request for a full clean in Marbella arrives at 21:47 and is answered 34 seconds later with two times to choose from; the opportunity moves from New lead to Replied, answered while you were out."
              className="w-full max-md:mx-auto max-md:max-w-[340px]"
            />
          </div>
        </section>

        {/* --- El recorrido, a ancho completo ----------------------------- */}
        {/* Degradado y no violeta plano: es del archivo, y es la unica banda
            del sitio que llena el ancho de violeta. Los rotulos van sobre
            `bg-ink` para no depender del punto del degradado que les toque. */}
        <section className="bg-[linear-gradient(100deg,#423af4_0%,#5a52f6_100%)]">
          <ol className="mx-auto grid max-w-[var(--container-wrap)] list-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((j, i) => (
              <li
                key={j.label}
                className={`border-white/28 px-6 py-7 lg:px-8 lg:py-8 ${
                  i < journey.length - 1 ? "max-sm:border-b" : ""
                } ${i < 2 ? "sm:max-lg:border-b" : ""} ${
                  i % 2 === 0 ? "sm:max-lg:border-r" : ""
                } ${i < journey.length - 1 ? "lg:border-r" : ""}`}
              >
                <span className="inline-flex rounded-full bg-ink px-3 py-1.5 text-small font-bold text-white">
                  {j.label}
                </span>
                <p className="mt-4 font-mono text-stat leading-none font-bold text-white">
                  {j.figure}
                </p>
                <p className="mt-1.5 text-small text-white">{j.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* --- La licencia no es el sistema ------------------------------- */}
        <section className={`${wrap} ${section}`}>
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className={`${eyebrow} text-ink-soft`}>
                The licence is not the system
              </p>
              <h2 className="mt-3.5 text-ink">
                You pay for it either way.
              </h2>
              <p className="mt-3.5 max-w-[34ch] text-copy text-pretty text-ink-soft">
                GoHighLevel bills every month whether or not anything runs
                inside it.
              </p>
              <GhlIllustration
                name="licence"
                label="A GoHighLevel account with its conversations, pipelines and calendars empty, no workflows running and reputation not set up, next to the monthly licence, marked paid."
                className="mt-8 w-full max-w-[520px]"
              />
            </div>
            <ul className="list-none">
              {symptoms.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3.5 border-b border-line py-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-ink"
                  />
                  <p className="text-copy text-pretty text-ink-soft">{s}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- Lo que cambia, sobre oscuro -------------------------------- */}
        <section className="bg-ink">
          <div className={`${wrap} py-14 lg:py-[88px]`}>
            {/* Titular y parrafo en dos columnas, como "The licence is not
                the system" mas arriba. Apilados eran once lineas seguidas con
                media pantalla vacia al lado: el titular ya ocupa cuatro, y el
                parrafo crecio a siete al nombrar las funciones.

                Las dos cifras salen del catalogo que HighLevel publica en su
                web: cincuenta y dos funciones, quince de las que tocan a un
                presupuesto. Van con tres ejemplos y no con cinco, que es lo
                que hacia falta para que el numero se entienda sin la lista que
                se quedo fuera al portar este diseno. */}
            <div className="grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-14">
              <div>
                <p className={`${eyebrow} text-violet-light`}>
                  What changes once it runs
                </p>
                <h2 className="mt-4 max-w-[14ch] text-white">
                  Not a new tool.
                </h2>
              </div>
              <p className="max-w-[46ch] text-lede text-pretty text-white/78">
                It is the one you already pay for, finally doing the work.
                Fifty-two features come with the licence; the fifteen that turn
                a quote request into a job are the forms, the pipeline, the
                replies and the calendar. We build those and leave the rest.
              </p>
            </div>
            {/* Tarjetas, no bloques sueltos con filete: es la forma de las
                de /services/website-design, en oscuro.

                El relleno va con `bg-white/4` y no con un gris fijo: sobre el
                #171717 de la seccion queda a un paso por encima del fondo, y
                si algun dia cambia el fondo la tarjeta le sigue sola. El borde
                al 10% es lo que dibuja el canto sin convertirse en una reja.

                El filete violeta del diseno original no se pierde, pasa a ser
                la regla corta bajo el numeral: dentro de una tarjeta, un borde
                superior de color competia con el canto de la propia tarjeta. */}
            <ol className="mt-10 grid list-none gap-4 sm:grid-cols-2 lg:mt-14">
              {changes.map((c, i) => (
                <li
                  key={c.title}
                  className="rounded-md border border-white/10 bg-white/4 p-6 lg:p-7"
                >
                  <p
                    aria-hidden="true"
                    className="font-mono text-small font-bold text-violet-light"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-3 block h-0.5 w-8 bg-violet-light"
                  />
                  <h3 className="mt-4 text-white">
                    {c.title}
                  </h3>
                  <p className="mt-2.5 text-copy text-pretty text-white/78">
                    {c.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* --- Lo que se monta dentro ------------------------------------- */}
        <section id="build" className="scroll-mt-24 bg-paper-panel">
          <div className={`${wrap} ${section}`}>
            <p className={`${eyebrow} text-ink-soft`}>What we build inside it</p>
            <h2 className="mt-3.5 max-w-[24ch] text-ink">
              Not all of it on day one.
            </h2>
            <p className="mt-3.5 max-w-[40ch] text-copy text-pretty text-ink-soft">
              We start with whatever is losing you work right now.
            </p>

            <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-2">
              {buildLead.map((b) => (
                <article
                  key={b.n}
                  className="rounded-md border border-line bg-paper p-5 lg:p-6"
                >
                  <p className="font-mono text-small font-bold text-violet">
                    {b.n}
                  </p>
                  <h3 className="mt-2 text-ink">
                    {b.title}
                  </h3>
                  <p className="mt-2.5 text-copy text-pretty text-ink-soft">
                    {b.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {buildRest.map((b) => (
                <article
                  key={b.n}
                  className="rounded-md border border-line bg-paper px-5 py-4"
                >
                  <p className="font-mono text-small font-bold text-ink-soft">
                    {b.n}
                  </p>
                  <p className="mt-1.5 text-ui font-bold text-balance text-ink">
                    {b.title}
                  </p>
                  <p className="mt-1.5 text-small text-pretty text-ink-soft">
                    {b.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- El orden de trabajo ---------------------------------------- */}
        <section className={`${wrap} ${section}`}>
          {/* Antes decia "Knowing which fifteen is half the job". El numero
              venia de la lista de las 52 funciones con 15 marcadas, que esta
              version ya no lleva: sin ella el titular referenciaba una cifra
              suelta tres secciones mas arriba y no se entendia. El 52/15 se
              queda solo donde la frase se explica a si misma. */}
          <h2 className="max-w-[20ch] text-ink">
            Knowing what to build.
          </h2>
          <p className="mt-3.5 max-w-[56ch] text-lede text-pretty text-ink-soft">
            That is half the job. The other half is setting it up so it keeps
            running after we leave. This is the order we work in.
          </p>
          <ol className="mt-8 grid list-none gap-x-8 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
            {order.map((o, i) => (
              <li
                key={o.n}
                className={`py-4 ${
                  i < 3 ? "border-t-2 border-violet" : "border-t border-line"
                }`}
              >
                <p
                  className={`font-mono text-small font-bold ${
                    i < 3 ? "text-violet" : "text-ink-soft"
                  }`}
                >
                  {o.n}
                </p>
                <p className="mt-1.5 text-ui font-bold text-balance text-ink">
                  {o.title}
                </p>
                <p className="mt-1.5 text-small text-pretty text-ink-soft">
                  {o.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* --- El flujo real ---------------------------------------------- */}
        <section className="bg-paper-panel">
          <div className={`${wrap} ${section}`}>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className={`${eyebrow} text-ink-soft`}>Here is one of them</p>
                <h2 className="mt-3.5 text-ink">
                  Four blocks on a canvas.
                </h2>
                <p className="mt-2.5 max-w-[42ch] text-copy text-pretty text-ink-soft">
                  And the difference between a quote that gets chased and one
                  that does not.
                </p>
                <p className="mt-3.5 max-w-[46ch] text-copy text-pretty text-ink-soft">
                  The quote moves to sent, the customer goes quiet, a text goes
                  out the next day, and if they are still quiet it stops. That
                  is the whole thing, and it runs whether or not you think about
                  it.
                </p>
                {/* Los cuatro bloques del flujo, en palabras. Son los mismos
                    que se ven en la captura de al lado: quien no la abra
                    grande sigue pudiendo leer de que va. */}
                <ul className="mt-4 flex list-none flex-wrap gap-2">
                  {["Opportunity changed", "Send SMS", "Wait 1 day"].map((b) => (
                    <li
                      key={b}
                      className="rounded-full border border-line bg-paper px-3.5 py-2 text-small font-bold text-ink"
                    >
                      {b}
                    </li>
                  ))}
                  <li className="rounded-full bg-ink px-3.5 py-2 text-small font-bold text-white">
                    End
                  </li>
                </ul>
              </div>
              {/* El flujo dibujado bloque por bloque, con el texto de cada SMS.
                  Sustituye a la captura real de GoHighLevel, que era el mismo
                  flujo: la captura sigue en public/home si hace falta volver. */}
              <GhlIllustration
                name="flow"
                label="A GoHighLevel workflow: when a quote is sent, a text asks whether it came through, it waits a day, and a second text offers help; if the customer replies it stops on its own."
                className="mx-auto w-full max-w-[520px]"
              />
            </div>
          </div>
        </section>

        {/* --- Con qué se conecta ----------------------------------------- */}
        <section className={`${wrap} ${section}`}>
          <p className={`${eyebrow} text-ink-soft`}>
            And what it is connected to
          </p>
          <h2 className="mt-3.5 max-w-[24ch] text-ink">
            Or it is just another window.
          </h2>
          <p className="mt-2.5 max-w-[42ch] text-copy text-pretty text-ink-soft">
            It has to talk to the things you already use.
          </p>
          <GhlIllustration
            name="connect"
            label="GoHighLevel in the middle, connected to your website for requests, Kickserv for jobs and schedule, Stripe for payments, Airtable for your records, and Zapier and Make for everything else."
            className="mx-auto mt-8 w-full max-w-[900px]"
          />
          <div className="mt-7 grid sm:grid-cols-2 lg:mt-8 lg:grid-cols-5">
            {connected.map((c) => (
              <div key={c.name} className="border-t border-ink py-4 pr-5">
                <p className="text-ui font-bold text-ink">{c.name}</p>
                <p className="mt-1.5 text-small text-pretty text-ink-soft">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Cómo funciona, sobre oscuro -------------------------------- */}
        <section className="bg-ink">
          <div
            className={`${wrap} flex flex-wrap items-start gap-8 py-11 lg:gap-14 lg:py-[68px]`}
          >
            <div className="min-w-0 flex-[1_1_560px]">
              <p className={`${eyebrow} text-violet-light`}>How it works</p>
              <ol className="mt-5 flex list-none flex-wrap gap-5 lg:gap-7">
                {steps.map((s) => (
                  <li key={s.n} className="min-w-0 flex-[1_1_130px]">
                    <p className="font-mono text-stat leading-none font-bold text-violet-light">
                      {s.n}
                    </p>
                    <p className="mt-2 text-ui font-bold text-white">
                      {s.title}
                    </p>
                    <p className="mt-1.5 text-small text-white/78">{s.body}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex min-w-0 flex-[1_1_260px] flex-col items-start gap-3 pt-7">
              {/* El archivo pedia oscuro con borde blanco; va con la variante
                  `light`, que es la que la home ya usa para un CTA sobre panel
                  oscuro. Una variante mas para una sola pagina no compensa. */}
              <CalendlyButton variant="light">
                Book a thirty-minute call
              </CalendlyButton>
              <p className="max-w-[34ch] text-small text-white/60">
                If there is nothing worth building, we will tell you on the call
                and you will have lost half an hour.
              </p>
            </div>
          </div>
        </section>

        {/* --- Lo que no hacemos ------------------------------------------ */}
        <section className={`${wrap} ${section}`}>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
            <div>
              <h2 className="text-ink">
                What we don&rsquo;t do
              </h2>
              <p className="mt-2.5 max-w-[30ch] text-copy text-pretty text-ink-soft">
                Worth reading before the call, so nobody wastes half an hour.
              </p>
            </div>
            <ul className="list-none">
              {refusals.map((r, i) => (
                <li
                  key={r.title}
                  className={`grid grid-cols-[28px_1fr] gap-3.5 py-4 ${
                    i < refusals.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="text-h4 leading-snug text-violet"
                  >
                    &#10005;
                  </span>
                  <div>
                    <p className="text-ui font-bold text-balance text-ink">
                      {r.title}
                    </p>
                    <p className="mt-1.5 text-copy text-pretty text-ink-soft">
                      {r.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- Testimonio y preguntas ------------------------------------- */}
        <section className="bg-paper-panel">
          <div className={`${wrap} ${section}`}>
            <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
              {/* El texto real de Adriana. El archivo traia una frase
                  reescrita que ella no dijo; esta es la misma cita que usan la
                  home y /services/email-marketing. */}
              <blockquote className="m-0">
                <p className="text-h3 leading-snug font-medium text-pretty text-ink">
                  I was drowning in manual work and reached out to Nico for help
                  with automations. He set up email flows, follow-ups, and
                  little systems I didn&rsquo;t even know I needed. Everything
                  feels more organized now.
                </p>
                <cite className="mt-5 flex items-center gap-3.5 not-italic">
                  <Image
                    src="/testimonials/adriana-patania-1.png"
                    alt=""
                    width={56}
                    height={56}
                    loading="lazy"
                    className="size-14 shrink-0 rounded-full object-cover"
                  />
                  <span className="text-ui">
                    <span className="block font-bold text-ink">
                      Adriana Patania
                    </span>
                    <span className="block text-small text-ink-soft">
                      Local gym
                    </span>
                  </span>
                </cite>
              </blockquote>

              <div>
                <p className={`${eyebrow} mb-3.5 text-ink-soft`}>Questions</p>
                {faqs.map((f, i) => (
                  <div
                    key={f.q}
                    className={`py-4 ${
                      i === 0
                        ? "border-t-2 border-ink"
                        : "border-t border-line"
                    } ${i === faqs.length - 1 ? "border-b border-line" : ""}`}
                  >
                    <p className="text-ui font-bold text-balance text-ink">
                      {f.q}
                    </p>
                    <p className="mt-1.5 text-copy text-pretty text-ink-soft">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Contacto ---------------------------------------------------- */}
        {/* El archivo pintaba tres campos sueltos sin destino. Aqui va el
            `ContactForm` del sitio, que es el que valida, lleva honeypot,
            limita por IP y manda de verdad. En panel blanco sobre el
            degradado: sus campos son claros y sobre violeta no se leen. */}
        <section
          id="contact"
          className="scroll-mt-24 bg-[linear-gradient(100deg,#423af4_0%,#5a52f6_100%)]"
        >
          <div className={`${wrap} ${section}`}>
            <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
              <div>
                <h2 className="text-white">
                  Show us the account
                </h2>
                <p className="mt-3.5 max-w-[40ch] text-lede text-pretty text-white">
                  Half an hour on a call, screen shared. You will leave knowing
                  what is worth building and what is not, whether or not you
                  hire us.
                </p>
              </div>
              <div className="rounded-lg bg-paper p-6 lg:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Aviso de marca. La entidad es GoHighLevel Inc. y no "HighLevel,
            Inc." como decia el archivo: lo dice el pie de su propio sitio
            —"HighLevel LLC, a subsidiary of GoHighLevel Inc."—, la filial se
            llama HighLevel y la matriz GoHighLevel. Sin el simbolo (R): el
            estado del registro no se ha comprobado en ninguna oficina de
            marcas. */}
        <aside className={`${wrap} pt-10 pb-14`}>
          <p className="border-t border-line pt-7 text-small text-pretty text-ink-soft">
            GoHighLevel is a trademark of GoHighLevel Inc. emmvi is an
            independent service provider and is not affiliated with, endorsed by
            or certified by GoHighLevel Inc.
          </p>
        </aside>
      </main>

      <SiteFooter />
    </>
  );
}
