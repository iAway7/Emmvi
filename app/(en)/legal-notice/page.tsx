import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACT_EMAIL, SITE_NAME, controller, pageMetadata } from "@/lib/site";

/**
 * Aviso legal. Lo enlaza el pie desde las veinticuatro paginas del sitio y
 * hasta ahora devolvia 404 — un enlace roto en todas ellas.
 *
 * **No existia tampoco en el WordPress anterior**, asi que no es una URL
 * recuperada: es un hueco que ya estaba abierto antes de la migracion. Por eso
 * no tiene historial en el buscador y la ruta se elige libremente.
 *
 * Es otra cosa que la politica de privacidad, aunque se confundan: la de
 * privacidad cuenta que se hace con los datos (RGPD); esta identifica a quien
 * responde del sitio y fija sus condiciones de uso, que es lo que pide la
 * LSSI-CE a un sitio con actividad comercial en España. Se solapan solo en la
 * identificacion, y por eso los dos leen el mismo `controller` de lib/site.ts.
 *
 * Nada de lo que hay aqui esta inventado. No se da telefono porque no hay uno
 * publicado, y no hay datos de registro mercantil porque el titular es persona
 * fisica. Donde la LSSI pediria un dato que no existe, no se rellena el hueco.
 *
 * El apartado sobre el blog no es relleno: los diecisiete articulos recomiendan
 * proveedores de hosting y herramientas concretas, y conviene decir que son
 * opiniones y no asesoramiento antes de que alguien contrate algo por leerlas.
 */
export const metadata: Metadata = pageMetadata({
  path: "/legal-notice",
  title: "Legal Notice",
  description:
    "Who is responsible for this website, what you may do with it, and which law applies.",
});

/** Al publicar cambios de fondo, subirla. */
const LAST_UPDATED = "20 September 2026";

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";

const h2 = "mt-14 text-ink";
const p = "mt-5 text-body text-pretty text-ink-soft";
const a =
  "text-ink underline underline-offset-[3px] transition-colors hover:text-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet";

export default function LegalNotice() {
  return (
    <>
      <SiteHeader path="/legal-notice" />

      <main className={`${wrap} py-16 lg:py-24`}>
        <h1 className="max-w-[16em] text-ink">
          Legal Notice
        </h1>
        <p className="mt-6 max-w-[44ch] text-lede text-pretty text-ink-soft">
          Who is responsible for this website, what you may do with it, and
          which law applies if something goes wrong.
        </p>
        <p className="mt-6 font-mono text-small text-ink-soft">
          Last updated {LAST_UPDATED}
        </p>

        <div className="doc mt-12 max-w-[68ch]">
          <h2 className={`${h2} mt-10`}>Who runs this site</h2>
          <p className={p}>
            {SITE_NAME} is a trading name of {controller.legalName}, NIF{" "}
            {controller.taxId}, of {controller.registeredAddress}.
          </p>
          <p className={p}>
            {SITE_NAME} is a registered trademark in Spain. The operator is an
            individual rather than a company, so there are no company registry
            details to give.
          </p>
          <p className={p}>
            The way to reach us in writing is{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className={a}>
              {CONTACT_EMAIL}
            </a>
            . A person reads it, and that is the address to use for anything on
            this page.
          </p>

          <h2 className={h2}>What this site is for</h2>
          <p className={p}>
            It describes what we do and lets you get in touch or book a call.
            Nothing is sold here: there is no shop, no checkout and no account
            to create. If we end up working together, the terms of that work are
            in the proposal and contract we sign, not on this page.
          </p>

          <h2 className={h2}>Using the site</h2>
          <p className={p}>
            You are welcome to read it, quote it with attribution, and link to
            it. What you may not do is the short list you would expect: attack
            it, scrape it in a way that degrades it for anyone else, use the
            contact form to send unsolicited commercial messages, or try to get
            at parts of it that are not public.
          </p>
          <p className={p}>
            If you use the contact form, what you write is yours and you are
            responsible for it &mdash; including for having the right to share
            any details about other people that you put in the message.
          </p>

          <h2 className={h2}>What belongs to whom</h2>
          <p className={p}>
            The design, the text, the code and the {SITE_NAME} name and mark are
            ours. You do not get a licence to reuse them by visiting, beyond the
            ordinary quoting and linking above.
          </p>
          <p className={p}>
            Other companies&rsquo; names, logos and marks appear on this site
            &mdash; the tools we use and the platforms we write about. They
            belong to their owners. We mention them to be specific about what we
            work with, and that mention is not a partnership, an endorsement or
            a certification unless the page says so in plain words.
          </p>
          <p className={p}>
            Work we did for clients is shown with their permission. Their brands
            remain theirs.
          </p>

          <h2 className={h2}>The blog is opinion, not advice</h2>
          <p className={p}>
            The articles name specific tools, hosting providers and platforms,
            and say what we think of them. That is an opinion written at a point
            in time, from our own experience. It is not professional,
            technical, financial or legal advice, and nobody is paid to appear
            in it &mdash; there are no affiliate links on this site.
          </p>
          <p className={p}>
            Software changes faster than articles do. Check the current terms,
            prices and features with the provider before you decide anything on
            the strength of something you read here.
          </p>

          <h2 className={h2}>Links to other sites</h2>
          <p className={p}>
            We link outwards where it is useful. We do not control those sites,
            we are not responsible for what they contain or do, and a link is
            not an endorsement of everything on the other end of it.
          </p>

          <h2 className={h2}>Availability and accuracy</h2>
          <p className={p}>
            We keep the site working and truthful, but we do not promise it will
            be available without interruption or free of error. Content can
            change or be removed without notice. Where a page states a date, it
            describes how things were on that date.
          </p>

          <h2 className={h2}>Your data</h2>
          <p className={p}>
            What this site collects, who processes it and how to have it deleted
            is set out in the{" "}
            <Link href="/privacy-policy/" className={a}>
              Privacy Policy
            </Link>
            , in plain words rather than legal boilerplate.
          </p>

          <h2 className={h2}>Which law applies</h2>
          <p className={p}>
            This notice is governed by Spanish law, and in particular by Law
            34/2002 on information society services and electronic commerce
            (LSSI-CE). Any dispute goes to the courts that the applicable rules
            designate. If you are a consumer, that is normally the courts where
            you live, and nothing here takes away rights you have under the law
            of your own country.
          </p>

          <p className="mt-14 text-body text-ink-soft">
            Something here unclear or wrong?{" "}
            <Link href="/contact-us/" className={a}>
              Tell us
            </Link>{" "}
            and we will fix it.
          </p>
        </div>
      </main>

      <SiteFooter path="/legal-notice" />
    </>
  );
}
