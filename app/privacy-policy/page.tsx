import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACT_EMAIL, controller, pageMetadata } from "@/lib/site";

/**
 * Politica de privacidad, en /privacy-policy porque es la URL que el WordPress
 * anterior dejo indexada.
 *
 * No es una plantilla: cada afirmacion sale de leer el codigo. El formulario
 * manda por Resend y no guarda nada (app/actions/contact.ts), el limite de
 * envios tiene las IPs en un Map en memoria diez minutos (lib/contact.ts), el
 * contenedor de GTM carga en app/layout.tsx, y DM Sans la sirve el propio
 * dominio porque `next/font` la descarga en build.
 *
 * **Si alguna de esas cosas cambia, esta pagina miente.** Ya paso una vez: la
 * primera version decia "no analytics, no other measurement tool" y se quedo
 * falsa el dia que se instalo GTM. Tocar un script de terceros obliga a pasar
 * por aqui.
 *
 * ## Lo que esta pagina da por instalado y todavia no lo esta
 *
 * Describe **Google Analytics 4 y PostHog** como si ya estuvieran corriendo.
 * Hoy solo esta GTM. Es el sentido seguro del desfase —declara mas de lo que
 * pasa, no menos— pero deja de ser cierto en cuanto se decida no instalar
 * alguno de los dos, y entonces hay que quitar su parrafo.
 *
 * ## Tres promesas que el codigo tiene que cumplir
 *
 * No son descripciones, son compromisos con el visitante. Si la configuracion
 * no coincide, la pagina promete algo que no se cumple:
 *
 *  1. **El enmascarado de PostHog.** La pagina dice que lo que se teclea en un
 *     formulario se sustituye antes de que la grabacion salga del navegador.
 *     Eso es el `maskAllInputs` que PostHog trae activado por defecto: quien
 *     lo desactive convierte esta frase en falsa, y la grabacion pasaria a
 *     contener nombres, correos y mensajes.
 *  2. **PostHog en la nube europea.** La pagina afirma que la analitica no
 *     sale de la UE. Exige inicializar contra `eu.i.posthog.com`, no el host
 *     estadounidense por defecto.
 *  3. **Nada conectado a publicidad.** Activar Google Signals o enlazar la
 *     propiedad de GA4 con una cuenta de Google Ads contradice la lista de
 *     "What we do not do".
 *
 * **Faltan los datos registrales del responsable** (razon social, domicilio,
 * NIF). El RGPD los exige y no se inventan aqui: mientras `controller.legalName`
 * o `controller.registeredAddress` esten a null, la pagina muestra un aviso
 * visible de borrador. Rellenarlos lo quita solo.
 */
export const metadata: Metadata = pageMetadata({
  path: "/privacy-policy",
  title: "Privacy Policy",
  description:
    "What this site collects, what it does not, who processes it and how to get it deleted, in plain words rather than legal boilerplate.",
});


const incomplete = !controller.legalName || !controller.registeredAddress;

/** Al publicar cambios de fondo, subirla. */
const LAST_UPDATED = "19 September 2026";

/**
 * Plazo de conservacion de las consultas que no acaban en trabajo. Es un
 * compromiso con el visitante, asi que conviene que sea el que de verdad se
 * cumple: si las consultas se quedan en la bandeja para siempre, este numero
 * es falso.
 */
const ENQUIRY_RETENTION_MONTHS = 12;

/**
 * Los otros dos plazos que la pagina promete. Igual que el de arriba, son
 * compromisos y no descripciones: **hay que comprobar que coinciden con lo
 * configurado de verdad** en GA4 (Administrar -> Conservacion de datos; el
 * maximo que permite Google son 14 meses) y en PostHog (la retencion de
 * grabaciones depende del plan).
 */
const GA4_RETENTION_MONTHS = 14;
const SESSION_RECORDING_RETENTION_DAYS = 30;

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";

const h2 = "mt-14 text-h3 text-balance text-ink";
const p = "mt-5 text-body text-pretty text-ink-soft";
const ul = "mt-5 flex flex-col gap-3 pl-6 text-body list-disc text-ink-soft";
const a =
  "text-ink underline underline-offset-[3px] transition-colors hover:text-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet";

export default function PrivacyPolicy() {
  return (
    <>
      <SiteHeader />

      <main className={`${wrap} py-16 lg:py-24`}>
        <h1 className="max-w-[16em] text-display text-balance text-ink">
          Privacy Policy
        </h1>
        <p className="mt-6 max-w-[44ch] text-lede text-pretty text-ink-soft">
          What this site collects, what it deliberately does not, and how to
          have any of it deleted.
        </p>
        <p className="mt-6 font-mono text-small text-ink-soft">
          Last updated {LAST_UPDATED}
        </p>

        <div className="mt-12 max-w-[68ch]">
          {incomplete && (
            <p className="border-l-[3px] border-violet bg-paper-alt p-5 text-body text-pretty text-ink">
              <strong>Draft.</strong> The registered company details in the
              first section are still to be completed. Everything else on this
              page describes what the site actually does today.
            </p>
          )}

          <h2 className={`${h2} mt-10`}>Who is responsible</h2>
          {controller.legalName && controller.registeredAddress ? (
            <p className={p}>
              {controller.tradingName} is a trading name of{" "}
              {controller.legalName}
              {controller.taxId ? `, NIF ${controller.taxId}` : ""}, of{" "}
              {controller.registeredAddress}, who is the data controller for
              this website, <span className="font-mono">emmvi.com</span>. emmvi
              is a registered trademark in Spain.
            </p>
          ) : (
            <p className={p}>
              {controller.tradingName} is the data controller for this website,{" "}
              <span className="font-mono">emmvi.com</span>. Registered name,
              address and tax number: to be completed.
            </p>
          )}
          <p className={p}>
            For anything on this page, including any of the requests described
            below, write to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className={a}>
              {CONTACT_EMAIL}
            </a>
            . A person reads it.
          </p>

          <h2 className={h2}>What this policy covers</h2>
          <p className={p}>
            This site only. It does not cover the websites, CRMs or automations
            we build for clients: on those, the client is the controller of
            their own customers&rsquo; data and their own policy applies.
          </p>

          <h2 className={h2}>What we collect when you fill in a form</h2>
          <p className={p}>
            The enquiry forms ask for your name, your email address, your
            company (optional) and your message. The enquiry form on the website
            design page also asks roughly how many pages you need, whether you
            want us to host the site, and a budget range.
          </p>
          <p className={p}>
            When you submit it, that message is sent straight to our own inbox
            as an email, through a delivery service called Resend. It is not
            saved to a database on this website, because this website does not
            have one. Your email address is set as the reply address so we can
            answer you.
          </p>
          <p className={p}>
            The legal basis is your request: you are asking us to get in touch,
            which under the GDPR is processing necessary to take steps at your
            request before entering into a contract.
          </p>

          <h2 className={h2}>What happens when you book a call</h2>
          <p className={p}>
            Booking goes through Calendly. Whatever you type into the booking
            form is collected by Calendly and reaches us as a calendar invite.
            Their privacy policy governs what they do with it.
          </p>
          <p className={p}>
            One thing worth saying plainly, because most sites do not: the
            Calendly script and stylesheet load automatically on any page with a
            booking button, not only when you press it. That means
            Calendly&rsquo;s servers can see your IP address and browser details
            even if you never click. Nothing is shown or opened until you do.
          </p>

          <h2 className={h2}>Measurement</h2>
          <p className={p}>
            We measure how the site is used so we know what to write and what to
            fix. Three tools are involved, and it is worth being specific about
            which does what.
          </p>
          <ul className={ul}>
            <li>
              <strong className="text-ink">Google Tag Manager</strong> is a
              container. It measures nothing itself; it loads the other two.
              Because it is delivered by Google, Google receives your IP address
              and browser details when the page loads.
            </li>
            <li>
              <strong className="text-ink">Google Analytics 4</strong> counts
              page views and sessions, and tells us roughly where visitors come
              from and which pages they read. Google states that Analytics does
              not store IP addresses: it uses them to work out an approximate
              location and then discards them.
            </li>
            <li>
              <strong className="text-ink">PostHog</strong> is product
              analytics. It records which pages you open and which things you
              click, and it links those events to a randomly generated
              identifier so we can tell one visit apart from another. It does
              not know your name unless you give it to us in a form. We use{" "}
              <strong className="text-ink">PostHog&rsquo;s European cloud</strong>,
              so this data is stored in the EU and never leaves it.
            </li>
          </ul>
          <p className={p}>
            None of this is connected to any advertising platform. We do not run
            ads and we do not pass any of it to anyone who does.
          </p>
          <p className={p}>
            The legal basis for measurement is your consent, and you can stop
            all of it at any time with a tracker-blocking extension or your
            browser&rsquo;s own protection. Nothing on this site breaks if you
            do.
          </p>

          <h2 className={h2}>Session recording</h2>
          <p className={p}>
            This is the most intrusive thing on the page, so it gets its own
            heading rather than a line buried in a list.
          </p>
          <p className={p}>
            PostHog records sessions on this site. That means a playback of your
            visit as the page appeared: the pages you moved through, where you
            scrolled and what you clicked. We watch them to find the places
            where the site confuses people.
          </p>
          <p className={p}>
            <strong className="text-ink">
              What you type into forms is masked and never reaches the
              recording.
            </strong>{" "}
            Your name, your email address and your message are replaced before
            the recording leaves your browser, so they exist only in the email
            that comes to us. Recordings are stored in PostHog&rsquo;s European
            cloud and deleted automatically after{" "}
            {SESSION_RECORDING_RETENTION_DAYS} days.
          </p>
          <p className={p}>
            If you would rather not be recorded, a tracker-blocking extension
            stops it, and you can write to us to have any recording of your
            visit deleted.
          </p>

          <h2 className={h2}>What is collected automatically</h2>
          <ul className={ul}>
            <li>
              Server logs. Our host, Vercel, records the usual request
              information, IP address, browser, the page requested and when.
              This is standard for any web server and is used to keep the site
              running and secure.
            </li>
            <li>
              Spam protection. When a form is submitted, your IP address is held
              in the server&rsquo;s memory for ten minutes so that no more than
              five submissions can come from the same connection in that window.
              It is never written to disk, never stored alongside your message,
              and disappears when the window passes or the server restarts.
            </li>
          </ul>

          <h2 className={h2}>Cookies</h2>
          <p className={p}>
            The site itself sets no cookies. It has no login, no session and no
            preference store, so there is nothing of our own to remember.
          </p>
          <p className={p}>
            The tools described above do set their own, and these are the ones
            you will find if you look:
          </p>
          <ul className={ul}>
            <li>
              Google Analytics sets cookies beginning{" "}
              <span className="font-mono">_ga</span> to tell repeat visits
              apart. Google&rsquo;s default lifetime for them is two years.
            </li>
            <li>
              PostHog sets a cookie beginning{" "}
              <span className="font-mono">ph_</span> holding the random
              identifier described above, and uses your browser&rsquo;s local
              storage alongside it.
            </li>
            <li>
              Calendly may set its own when its widget loads or when you open
              the booking window.
            </li>
          </ul>
          <p className={p}>
            These belong to those companies rather than to us, and their own
            policies describe them in full. Clearing your browser&rsquo;s cookies
            and site data removes all of them.
          </p>

          <h2 className={h2}>What we do not do</h2>
          <p className={p}>
            This list is as much a part of the policy as the rest of it.
          </p>
          <ul className={ul}>
            <li>
              No advertising or retargeting trackers, and no link between our
              analytics and any advertising account.
            </li>
            <li>
              No calls to Google Fonts. The typeface is downloaded when the site
              is built and served from our own domain, so nothing about the way
              this page is drawn involves a request to Google.
            </li>
            <li>
              No selling, renting or sharing your details with anyone for their
              own marketing.
            </li>
            <li>
              No automated decisions about you. Nothing here decides anything
              on its own: when you send an enquiry, a person reads it and a
              person answers it.
            </li>
            <li>
              No attempt to identify you. The analytics identifier is random and
              we never try to match it to a name, an email address or a company
              unless you tell us who you are in a form.
            </li>
            <li>
              No newsletter sign-up hidden inside the contact form. If we ever
              add one, it will be a separate box you have to tick.
            </li>
          </ul>

          <h2 className={h2}>Who else handles your information</h2>
          <p className={p}>
            Five services are involved in running this site. Each processes
            data on our behalf or as an independent controller of their own
            platform, and each publishes its own policy and safeguards.
          </p>
          <ul className={ul}>
            <li>
              <a
                href="https://resend.com/legal/privacy-policy"
                className={a}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resend
              </a>{" "}delivers the enquiry email to our inbox.
            </li>
            <li>
              <a
                href="https://calendly.com/privacy"
                className={a}
                target="_blank"
                rel="noopener noreferrer"
              >
                Calendly
              </a>{" "}handles call bookings.
            </li>
            <li>
              <a
                href="https://vercel.com/legal/privacy-policy"
                className={a}
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel
              </a>{" "}hosts and serves the site.
            </li>
            <li>
              <a
                href="https://policies.google.com/privacy"
                className={a}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google
              </a>{" "}delivers the Tag Manager container and runs Analytics.
            </li>
            <li>
              <a
                href="https://posthog.com/privacy"
                className={a}
                target="_blank"
                rel="noopener noreferrer"
              >
                PostHog
              </a>{" "}product analytics and session recording, on their European
              cloud.
            </li>
          </ul>
          <p className={p}>
            Resend, Calendly, Vercel and Google are based in the United States
            or process data there, so sending an enquiry involves an
            international transfer. Each publishes the safeguards it relies on
            for transfers out of the European Economic Area; the links above are
            the current versions.
          </p>
          <p className={p}>
            PostHog is the exception, and deliberately so: we chose their
            European cloud, so the analytics and the session recordings stay in
            the EU and no transfer arises for them at all.
          </p>

          <h2 className={h2}>How long we keep it</h2>
          <ul className={ul}>
            <li>
              Enquiries that do not lead to work: deleted within{" "}
              {ENQUIRY_RETENTION_MONTHS} months.
            </li>
            <li>
              If you become a client: for as long as we work together, and
              afterwards for the period that Spanish commercial and tax law
              requires records to be kept.
            </li>
            <li>
              Server logs: for the retention period our host applies, which is
              short and measured in days.
            </li>
            <li>
              Analytics: {GA4_RETENTION_MONTHS} months in Google Analytics, and
              the equivalent period in PostHog.
            </li>
            <li>
              Session recordings: {SESSION_RECORDING_RETENTION_DAYS} days, then
              deleted automatically.
            </li>
          </ul>
          <p className={p}>
            You can ask us to delete an enquiry at any point before that and we
            will, unless we are legally required to keep it.
          </p>

          <h2 className={h2}>Your rights</h2>
          <p className={p}>
            Under the GDPR you can ask us for a copy of what we hold about you,
            to correct it, to delete it, to restrict what we do with it, to
            receive it in a portable format, or to object to us processing it.
            Where processing rests on your consent, you can withdraw it at any
            time.
          </p>
          <p className={p}>
            Write to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className={a}>
              {CONTACT_EMAIL}
            </a>
            . We will answer within one month, and we will not ask you to
            justify the request.
          </p>
          <p className={p}>
            If you think we have handled your data badly, you can complain to a
            supervisory authority. In Spain that is the Agencia Española de
            Protección de Datos (
            <a
              href="https://www.aepd.es"
              className={a}
              target="_blank"
              rel="noopener noreferrer"
            >
              aepd.es
            </a>
            ). In the United Kingdom it is the Information Commissioner&rsquo;s
            Office (
            <a
              href="https://ico.org.uk"
              className={a}
              target="_blank"
              rel="noopener noreferrer"
            >
              ico.org.uk
            </a>
            ). You can also complain to the authority where you live.
          </p>

          <h2 className={h2}>Children</h2>
          <p className={p}>
            This site is aimed at businesses and is not intended for anyone
            under 16. We do not knowingly collect their information.
          </p>

          <h2 className={h2}>Changes to this policy</h2>
          <p className={p}>
            If what the site does changes, this page changes with it, and the
            date at the top changes too. There is no archive of previous
            versions; if you need one for a specific date, ask us.
          </p>

          <p className="mt-14 text-body text-ink-soft">
            Questions about any of this?{" "}
            <Link href="/contact-us/" className={a}>
              Get in touch
            </Link>
            .
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
