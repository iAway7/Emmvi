import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CalendlyButton } from "@/components/calendly-button";
import { ComingSoon, comingSoonMetadata } from "@/components/coming-soon";
import { ContactForm } from "@/components/contact-form";
import { CtaLink } from "@/components/cta-link";
import { OrganizationSchema } from "@/components/organization-schema";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { comingSoon, pageMetadata } from "@/lib/site";

/**
 * COMING_SOON=1 sirve la pagina de espera en la raiz.
 *
 * Se resuelve en build y no en middleware: Next 16 emite el middleware con
 * sintaxis ESM pero Vercel lo carga como CommonJS sin "type":"module" en
 * package.json, y revienta con MIDDLEWARE_INVOCATION_FAILED. Para un flag
 * estatico el middleware sobraba igualmente: esto se resuelve en build, sin
 * invocacion serverless por peticion.
 *
 * A cambio, cambiar la variable exige volver a desplegar.
 *
 * La lectura de la variable esta ahora en lib/site.ts, porque el robots.txt y
 * el sitemap dependen de ella tanto como esta pagina.
 */

export const metadata: Metadata = comingSoon
  ? comingSoonMetadata
  : pageMetadata({
      path: "/",
      // Absoluto porque ya dice "Emmvi": la plantilla lo dejaria repetido.
      title: "Emmvi · Get more customers without doing more work",
      absoluteTitle: true,
      description:
        "We build the website and the systems behind it, so the work that happens after someone fills in a form does not depend on anyone remembering.",
    });

const familiar = [
  "I run a great business, but not enough people know about it.",
  "I've tried running ads. They either didn't work, or they got way too expensive, too fast.",
  "Honestly? I just want someone to do it right the first time. I don't have time to mess with tech issues or guess what's wrong.",
  "I just want someone who can take this off my plate, and tell me if I really need all those extra tools everyone keeps talking about.",
];

type Service = {
  title: string;
  body: string;
  /** Marcador visible mientras no haya imagen. Se renderiza tal cual. */
  shot?: string;
  image?: { src: string; alt: string; width: number; height: number };
};

const services: Service[] = [
  {
    shot: "[Screenshot of a site you built]",
    title: "Design and build",
    body: "Sites built to do one specific job: get the enquiry, book the call, sell the thing. Design, copy, build and hosting. Usually WordPress, sometimes not, depending on what the site has to do.",
  },
  {
    /**
     * Un flujo real montado en GoHighLevel: cambia la oportunidad, sale un
     * SMS, espera un dia, sale el segundo. Es el seguimiento de presupuesto
     * que el propio cuerpo de la tarjeta nombra.
     *
     * Sustituye a la imagen de marca de GoHighLevel que hubo antes aqui. La
     * diferencia importa: aquella era arte promocional de un proveedor —no
     * enseñaba nada construido, e implicaba un partnership que no existe—, y
     * esta enseña el trabajo. El hueco pedia exactamente eso.
     *
     * Viene recortada a su contenido: el pantallazo original tenia 223 px de
     * margen a la izquierda y 81 a la derecha, asi que el flujo salia
     * descentrado. Recortada gana ademas un 14% de tamano en el mismo hueco.
     *
     * Es casi cuadrada (1398x1542), asi que el hueco de las tarjetas pasa de
     * 7/3 a 4/3 y la imagen va con `object-contain`: recortarla partiria el
     * flujo por la mitad. El fondo del pantallazo es un #f3f4f8 uniforme —los
     * puntos del patron son de contraste minimo— asi que el mismo color en la
     * caja hace que las bandas laterales no se noten.
     */
    image: {
      src: "/home/automation-flow.png",
      alt: "A GoHighLevel workflow: an opportunity changes, a text message goes out, it waits a day, and a second text follows.",
      width: 1398,
      height: 1542,
    },
    title: "CRM and automation",
    body: "Lead routing, instant replies, quote follow-ups, review requests and reporting that builds itself. Put together with GoHighLevel, Kickserv, Airtable, Stripe and Zapier, connected so nobody retypes anything.",
  },
];

/** Ilustraciones del propio Figma, entregadas por el usuario ya limpias (sin el
 *  fondo de tarjeta horneado que traia el export del frame). Son tres, asi que
 *  "You own everything" cierra la seccion a ancho completo en vez de forzar una
 *  cuarta ilustracion que no existe. */
const why = [
  {
    title: "Look more professional online",
    body: "A site that matches the quality of the work you actually do, and that turns visitors into enquiries instead of just sitting there.",
    illo: "/illustrations/design.svg",
    alt: "A browser window showing a finished page.",
  },
  {
    title: "Stop losing the leads you already have",
    body: "Instant replies, follow-ups that go out on their own and review requests after every job. Most businesses do not need more leads. They need to stop dropping the ones they get.",
    illo: "/illustrations/launch.svg",
    alt: "A rocket in flight.",
  },
  {
    title: "One system instead of four",
    body: "Enquiry, quote, job and invoice in one place, with an owner and a date on each. No more email, WhatsApp, phone and a notebook.",
    illo: "/illustrations/coding.svg",
    alt: "A laptop with a connection running out to a separate node.",
  },
];

const ownership = {
  title: "You own everything",
  body: "The site, the domain and the customer data are yours. If you leave, you take them with you and we help you move.",
};

type Chip = { label: string; dot?: boolean; tick?: boolean };

/** Los chips son artefactos concretos de cada paso, no adornos: lo que traes,
 *  lo que se construye y lo que queda funcionando. Nada de metricas inventadas. */
const steps: { n: string; title: string; body: string; chips: Chip[] }[] = [
  {
    n: "01",
    title: "Book a call",
    body: "Thirty minutes. Tell us about your business and what you are trying to fix. You will get our honest read, whether you hire us or not.",
    chips: [
      { label: "30 min" },
      { label: "your site today" },
      { label: "no slide deck" },
    ],
  },
  {
    n: "02",
    title: "We build it",
    body: "Site, forms, automations and CRM. You review it at the end of the first week, so nothing is a surprise at the end.",
    chips: [
      { label: "website" },
      { label: "quote form" },
      { label: "CRM" },
      { label: "follow-ups" },
      { label: "reporting" },
    ],
  },
  {
    n: "03",
    title: "It runs",
    body: "We test every automation before launch. After that, hosting, changes and adjustments as the business changes.",
    chips: [
      { label: "Live", dot: true },
      { label: "every enquiry answered", tick: true },
    ],
  },
];

type Testimonial = {
  title: string;
  quote: string;
  name: string;
  org: string;
  /** Sin foto: cae en las iniciales. */
  photo?: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    title: "Finally getting leads",
    quote:
      "Gustavo and Nico do great work. I've been really happy with multiple websites they've built for me. They have a great eye for design and a strong focus on user experience, making sure everything not only looks good but is easy to navigate. They're talented, reliable, and easy to work with.",
    name: "Jared White",
    org: "JBZ Beats",
    photo: "/testimonials/jared-white.png",
    initials: "JW",
  },
  {
    title: "Automation that works",
    quote:
      "I was drowning in manual work and reached out to Nico for help with automations. He set up email flows, follow-ups, and little systems I didn't even know I needed. Everything feels more organized now. Super grateful, this was a game-changer for me.",
    name: "Adriana Patania",
    org: "Local gym",
    photo: "/testimonials/adriana-patania-1.png",
    initials: "AP",
  },
  {
    title: "Smooth website redesign",
    quote:
      "Gus helped me redesign my website and honestly, it turned out way better than I imagined. It looks clean, it loads fast, and it works great on phones too. He really listened to what I needed and made the process super smooth. Totally recommend him.",
    name: "Alicia Ryz",
    // Logo de Kurokink, no un retrato: es lo unico que hay de ella.
    org: "Ecommerce store",
    photo: "/testimonials/alicia-ryz.png",
    initials: "AR",
  },
];

const faqs = [
  {
    q: "What exactly do you do?",
    a: "Two things: we design and build websites, and we set up the CRM and automations behind them. That covers the site itself, the forms, instant replies, quote follow-ups, review requests and reporting.",
    open: true,
  },
  {
    q: "Are you a fit for a small business?",
    a: "That is most of our work. We are not built for enterprise projects and we do not pretend otherwise. If your company is small enough that the owner still reads the enquiries, we are probably a good fit.",
  },
  {
    q: "I already have a website. Do I need a new one?",
    a: "Not always. Sometimes the site is fine and the problem is what happens after someone fills in the form. We will tell you which one it is on the call.",
  },
  {
    q: "Will this work with the software I already use?",
    a: "Usually yes. We work with GoHighLevel, Kickserv, Airtable, Stripe and most tools that have an API. If yours does not connect, we will say so before you pay anything.",
  },
  {
    q: "Who owns the website and the customer data?",
    a: "You do. If you leave, you take the site, the domain and the database with you, and we help you move the hosting.",
  },
  {
    q: "How do I get started?",
    a: "Book a thirty-minute call. We look at what happens to an enquiry on your site today and tell you what we would change. No slide deck.",
  },
];

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const section = "py-16 lg:py-[104px]";

export default function Home() {
  if (comingSoon) return <ComingSoon />;

  return (
    <>
      <OrganizationSchema />
      <SiteHeader />

      <main id="top">
        <section className={`${wrap} pt-16 pb-20 text-center lg:pt-[88px] lg:pb-24`}>
          <h1 className="mx-auto max-w-[18em] text-display text-balance text-ink">
            Get more customers without doing more work
          </h1>
          <p className="mx-auto mt-6 max-w-[34em] text-lede text-pretty text-ink-soft">
            We build the website and the systems behind it, so the work that
            happens after someone fills in a form does not depend on anyone
            remembering.
          </p>
          <div className="mt-9 flex justify-center">
            <CtaLink href="#contact">Let&rsquo;s grow my business</CtaLink>
          </div>
        </section>

        <section className={`bg-paper-alt ${section}`}>
          <div className={wrap}>
            <h2 className="text-h2 text-balance text-ink">
              Does this sound familiar?
            </h2>
            <p className="mt-5 max-w-[34em] text-lede text-pretty text-ink-soft">
              If you have said, or thought, any of these, you are not alone.
            </p>
            <ul className="mt-14 grid gap-6 md:grid-cols-2">
              {familiar.map((line) => (
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

        <section id="services" className={`scroll-mt-24 ${section}`}>
          <div className={wrap}>
            <h2 className="text-h2 text-balance text-ink">
              Two things, done properly
            </h2>
            <p className="mt-5 max-w-[34em] text-lede text-pretty text-ink-soft">
              Most clients want both, because a site that collects enquiries
              nobody answers is just a nicer way to lose work. We do them
              separately too.
            </p>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {services.map((s) => (
                <article
                  key={s.title}
                  className="flex flex-col gap-4 rounded-md border border-line bg-paper p-8"
                >
                  {s.image ? (
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      width={s.image.width}
                      height={s.image.height}
                      className="aspect-[4/3] w-full rounded-sm bg-[#f3f4f8] object-contain"
                      sizes="(min-width: 768px) 30rem, 90vw"
                    />
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center rounded-sm bg-paper-panel p-4 text-center text-small text-ink-soft">
                      {s.shot}
                    </div>
                  )}
                  <h3 className="text-h3 text-balance text-ink">{s.title}</h3>
                  <p className="text-[1rem] leading-[26px] tracking-[-0.2px] text-pretty text-ink-soft">
                    {s.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* El gradiente --night aclara hasta #7d7d7d al 100%. El texto se queda
            en white/80 y la seccion reserva el tramo claro como aire. */}
        <section id="about" className={`bg-night scroll-mt-24 ${section}`}>
          <div className={wrap}>
            <h2 className="text-[2rem] font-bold tracking-[-1px] text-balance text-white lg:text-[3rem]">
              Meet Emmvi
            </h2>
            {/* Sin nombres propios y sin repartir roles entre personas: las
                dos cosas dicen cuanta gente hay. Ciudades si — eso es donde se
                trabaja, no cuantos. Ver PRODUCT.md. */}
            <p className="mt-6 max-w-[38em] text-body text-pretty text-white/80">
              Emmvi builds websites and the systems that run behind them, from
              Valencia and from Argentina. Design, build and automation all
              happen in house, so you talk to the people doing the work and
              nothing is handed to a supplier you have never met.
            </p>
            <p className="mt-6 max-w-[38em] text-body text-pretty text-white/80">
              Working across both time zones covers most of the working day for
              clients in Europe and the Americas.
            </p>
            <div className="mt-9">
              <CtaLink href="#contact" variant="light">
                Schedule a call
              </CtaLink>
            </div>
          </div>
        </section>

        <section className={section}>
          <div className={wrap}>
            <h2 className="text-h2 text-balance text-ink">Why work with us</h2>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {why.map((w) => (
                <article
                  key={w.title}
                  className="flex flex-col gap-4 rounded-md border border-line bg-paper p-8"
                >
                  <div className="flex items-center justify-center rounded-sm bg-paper-panel p-6">
                    <Image
                      src={w.illo}
                      alt={w.alt}
                      width={336}
                      height={336}
                      className="h-40 w-auto"
                    />
                  </div>
                  <h3 className="text-h3 text-balance text-ink">{w.title}</h3>
                  <p className="flex-1 text-[1rem] leading-[26px] tracking-[-0.2px] text-pretty text-ink-soft">
                    {w.body}
                  </p>
                </article>
              ))}
            </div>

            {/* La propiedad no es una prestacion mas: cierra la seccion. */}
            <div className="mt-6 rounded-md border border-line bg-paper p-8 md:flex md:items-baseline md:gap-12">
              <h3 className="text-h3 text-balance text-ink md:shrink-0">
                {ownership.title}
              </h3>
              <p className="mt-3 max-w-[58ch] text-body text-pretty text-ink-soft md:mt-0">
                {ownership.body}
              </p>
            </div>
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
                  {/* Numeral propio: DM Sans 800 en el violeta de marca, que
                      hasta aqui no aparecia a tamano en la pagina. Nada de
                      mono apagado. Separado del titulo por una regla violeta
                      corta que lee como tramo de una secuencia. */}
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
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {s.chips.map((c) => (
                      <li
                        key={c.label}
                        className="inline-flex items-center gap-1.5 rounded-sm border border-line bg-paper px-2.5 py-1.5 font-mono text-small text-ink-soft"
                      >
                        {c.dot ? (
                          <span
                            aria-hidden="true"
                            className="size-1.5 rounded-full bg-violet-ink"
                          />
                        ) : null}
                        {c.tick ? (
                          <span aria-hidden="true" className="text-violet-ink">
                            &#10003;
                          </span>
                        ) : null}
                        {c.label}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <div className="mt-10 flex justify-center">
              <CalendlyButton>Schedule a call</CalendlyButton>
            </div>
          </div>
        </section>

        <section id="who" className={`scroll-mt-24 ${section}`}>
          <div className={wrap}>
            <h2 className="text-h2 text-balance text-ink">Who we work with</h2>
            <div className="mt-14 border-t border-line">
              <div className="grid gap-4 border-b border-line py-8 md:grid-cols-[0.95fr_1.05fr] md:gap-12">
                <h3 className="text-h3 text-balance text-ink">
                  Installation and home service businesses
                </h3>
                <p className="text-body text-pretty text-ink-soft">
                  Solar, EV chargers, security, heating and cooling. This is the
                  one we have gone deepest on, and we have a page just for it.{" "}
                  <Link
                    href="/for/installers/"
                    className="text-ink underline underline-offset-[3px] transition-colors hover:text-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
                  >
                    See what we build for installers
                  </Link>
                  .
                </p>
              </div>
              <div className="grid gap-4 border-b border-line py-8 md:grid-cols-[0.95fr_1.05fr] md:gap-12">
                <h3 className="text-h3 text-balance text-ink">
                  Clinics and private practices
                </h3>
                <p className="text-body text-pretty text-ink-soft">
                  Bookings, reminders and quote follow-up, with the extra care
                  that health data needs.
                </p>
              </div>
              <div className="grid gap-4 border-b border-line py-8 md:grid-cols-[0.95fr_1.05fr] md:gap-12">
                <h3 className="text-h3 text-balance text-ink">
                  Agencies who need a build partner
                </h3>
                <p className="text-body text-pretty text-ink-soft">
                  We build under your name. You keep the client relationship, we
                  do the work and stay out of the way.
                </p>
              </div>
            </div>
            <p className="mt-8 max-w-[36em] text-body text-pretty text-ink-soft">
              If you are not on this list, say so on the call. We will tell you
              honestly whether we are the right people for it.
            </p>
          </div>
        </section>

        <section className={section}>
          <div className={wrap}>
            <p className="text-eyebrow text-ink">Testimonials</p>
            <h2 className="mt-2 text-h2 text-balance text-ink">
              What our clients say
            </h2>
            <div className="mt-12 grid items-stretch gap-6 min-[900px]:grid-cols-3">
              {testimonials.map((t) => (
                <blockquote
                  key={t.name}
                  className="m-0 flex flex-col rounded-md border border-line bg-paper p-8"
                >
                  <h3 className="mb-3 text-[1.125rem] font-semibold leading-6 tracking-normal text-ink">
                    {t.title}
                  </h3>
                  <p className="flex-1 text-[1rem] leading-[26px] tracking-[-0.2px] text-pretty text-ink-soft">
                    {t.quote}
                  </p>
                  <cite className="mt-6 flex items-center gap-3 border-t border-line pt-5 not-italic">
                    {t.photo ? (
                      <Image
                        src={t.photo}
                        alt=""
                        width={40}
                        height={40}
                        loading="lazy"
                        className="size-10 shrink-0 rounded-full object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="grid size-10 shrink-0 place-items-center rounded-full bg-[#f0edff] text-small font-bold text-violet-ink"
                      >
                        {t.initials}
                      </span>
                    )}
                    <span className="text-[1rem] leading-6 tracking-[-0.2px]">
                      <span className="block font-semibold text-ink">
                        {t.name}
                      </span>
                      <span className="block text-ink-soft">{t.org}</span>
                    </span>
                  </cite>
                </blockquote>
              ))}
            </div>
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
                Talk to us
              </h2>
              <p className="mt-5 max-w-[34em] text-lede text-pretty text-ink-soft">
                Tell us what you are trying to fix. We will tell you what we
                would do about it, and whether it is worth paying us for.
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
