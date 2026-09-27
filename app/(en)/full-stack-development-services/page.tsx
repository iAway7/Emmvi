import type { Metadata } from "next";
import Image from "next/image";

import { CalendlyButton } from "@/components/calendly-button";
import { ContactForm } from "@/components/contact-form";
import { CtaLink } from "@/components/cta-link";
import { FaqAccordion, type FaqItem } from "@/components/faq-accordion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FullStackIllustration } from "@/components/services/full-stack-illustrations";
import { pageMetadata } from "@/lib/site";

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
 */
export const metadata: Metadata = pageMetadata({
  path: "/full-stack-development-services",
  title: "Full-Stack Development",
  description:
    "Client portals, internal dashboards and SaaS MVPs built to fit your workflow, so the tools stop being held together by hand.",
});

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const section = "py-16 lg:py-[104px]";
const h2Class = "text-ink";

/** Las cuatro frases del original, tal cual. Son quejas reales de cliente y
 *  funcionan porque son concretas. */
const familiar = [
  "We use 5 different tools that don’t talk to each other.",
  "I wish there was a custom dashboard for my team.",
  "We’re growing, but our backend is duct-taped together.",
  "We spend hours copying info between platforms.",
];

/** Las tres ilustraciones ya estaban en el repo: son las mismas que usa la
 *  home, y en el WordPress se llamaban design.svg, coding.svg y Rocket2.svg. */
const pillars = [
  {
    n: "01",
    title: "Custom built, so there are no workarounds",
    body: "We scope the exact thing you need and build it to fit. No bloated SaaS you grow out of, and no monthly licence for features you never use.",
    illo: "/illustrations/design.svg",
    alt: "A browser window showing a finished interface.",
  },
  {
    n: "02",
    title: "Full-stack, so it is one team front to back",
    body: "Frontend, backend, database and deployment. Nobody hands off to a second supplier halfway through, and nobody is waiting on anyone else to finish.",
    illo: "/illustrations/coding.svg",
    alt: "A laptop with a connection running out to a separate node.",
  },
  {
    n: "03",
    title: "Short sprints, so you see it early",
    body: "We work in short cycles with something to look at at the end of each one. Many apps launch in four to six weeks.",
    illo: "/illustrations/launch.svg",
    alt: "A rocket in flight.",
  },
];

const before = [
  "Information lost between tools",
  "Hours spent copying between platforms",
  "A backend held together by hand",
];

const after = [
  "Direct API connections between what you already use",
  "Everything in one place, with one owner",
  "A system that holds when the volume goes up",
];

const faqs: FaqItem[] = [
  {
    q: "What tech stack do you use?",
    a: "Typically React, Next.js, Node.js, PostgreSQL and Firebase, plus whatever APIs your existing tools expose. We adapt to what you already run rather than making you move to our favourites.",
  },
  {
    q: "Can you connect it to the tools we already use?",
    a: "That is usually most of the work. Stripe, Airtable, HubSpot, Zapier and anything else with an API. If a tool you depend on has no API, we say so before you commit rather than after.",
  },
  {
    q: "How much does it cost?",
    a: "It depends on what the thing has to do, and we put a number on it after the discovery call rather than before. What the call establishes is scope: which problem you are solving, what has to exist for it to be useful, and what can wait for a second phase. You get the figure in writing, with the phases separated, and you decide then.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. Monthly maintenance or feature work on retainer, or nothing at all if you would rather take it in-house. The code is yours either way.",
  },
  {
    q: "What if we need new features later?",
    a: "You book a further phase or a retainer. We build so that adding to it later is ordinary work rather than a rebuild, which is the main reason to have it custom in the first place.",
  },
];

export default function FullStackDevelopment() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className={`${wrap} pt-14 pb-10 lg:pt-20`}>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-small font-medium tracking-[0.18em] text-violet uppercase">
                Development
              </p>
              <h1 className="mt-5 text-ink">
                Stop duct-taping. Start scaling.
              </h1>
              <p className="mt-6 max-w-[44ch] text-lede text-pretty text-ink-soft">
                From client portals to internal dashboards and SaaS MVPs: we
                design, build and launch full-stack apps that fit the way you
                already work.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <CalendlyButton>Book a discovery call</CalendlyButton>
                <CtaLink href="#build" variant="ghost">
                  Tell us what you need
                </CtaLink>
              </div>
            </div>

            <FullStackIllustration
              name="hero"
              label="A custom client portal for an example business, listing this week's jobs with their payment status, connected to Stripe, Airtable and HubSpot, with the code behind it and a note that it is deployed and yours to keep."
              className="w-full max-md:mx-auto max-md:max-w-[420px]"
            />
          </div>
        </section>

        <section className={`reveal ${wrap} ${section}`}>
          <h2 className={h2Class}>Sound familiar?</h2>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {familiar.map((quote) => (
              <li
                key={quote}
                className="rounded-md border border-line p-7 text-lede text-pretty text-ink"
              >
                &ldquo;{quote}&rdquo;
              </li>
            ))}
          </ul>
          <p className="mt-9 text-lede text-pretty text-ink-soft">
            If that sounds like your week, you are exactly who this is for.
          </p>
        </section>

        <section className="bg-paper-alt">
          <div className={`reveal ${wrap} ${section}`}>
            <h2 className={h2Class}>
              Replace the patchwork with one system
            </h2>
            <FullStackIllustration
              name="patchwork"
              label="Now: a spreadsheet, email, forms, invoices and a CRM held together with tape. After: one system holding all five, in one place with one owner."
              className="mx-auto mt-10 w-full max-w-[960px]"
            />
            <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="rounded-lg border border-line bg-paper p-8 lg:p-10">
                <h3 className="text-ink">Now</h3>
                <ul className="mt-5 flex flex-col gap-3 pl-6 text-body list-disc text-ink-soft">
                  {before.map((x) => (
                    <li key={x} className="text-pretty">
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-violet bg-paper p-8 lg:p-10">
                <h3 className="text-ink">After</h3>
                <ul className="mt-5 flex flex-col gap-3 pl-6 text-body list-disc text-ink-soft">
                  {after.map((x) => (
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
          <h2 className={h2Class}>Why work with us</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.n}>
                <Image
                  src={p.illo}
                  alt={p.alt}
                  width={360}
                  height={240}
                  className="h-auto w-full max-w-[220px]"
                />
                <p className="mt-6 font-mono text-small text-ink-soft">{p.n}</p>
                <h3 className="mt-2 text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-body text-pretty text-ink-soft">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className={`reveal ${wrap} ${section}`}>
          <h2 className={`text-center ${h2Class}`}>Frequently asked questions</h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-center text-body text-pretty text-ink-soft">
            Anything not answered here is worth a call. Thirty minutes, and
            nothing to decide on the call itself.
          </p>
          <div className="mx-auto mt-10 max-w-[636px]">
            <FaqAccordion items={faqs} />
          </div>
        </section>

        <section id="build" className={`reveal ${wrap} scroll-mt-24 ${section}`}>
          <div className="grid items-start gap-10 rounded-lg bg-paper-panel p-9 min-[900px]:grid-cols-2 min-[900px]:gap-16 min-[900px]:p-16">
            <div>
              <h2 className="text-ink">
                Ready to build something real?
              </h2>
              <p className="mt-5 max-w-[34em] text-lede text-pretty text-ink-soft">
                Tell us what you are trying to replace and what it has to do. We
                will tell you what we would build, what we would leave alone,
                and whether it is worth paying us for.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
