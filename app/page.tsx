import type { Metadata } from "next";
import Image from "next/image";

import { CalendlyButton } from "@/components/calendly-button";
import { HomeIllustration } from "@/components/home-illustrations";
import { JourneySteps } from "@/components/journey-steps";
import { ComingSoon, comingSoonMetadata } from "@/components/coming-soon";
import { MeetMap } from "@/components/meet-map";
import { ContactForm } from "@/components/contact-form";
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
      // Absoluto porque ya dice "emmvi": la plantilla lo dejaria repetido.
      title: "emmvi · Every quote request answered in under a minute",
      absoluteTitle: true,
      description:
        "We build the website that takes the request and the system behind it: the instant reply, the quote follow-up and the review request.",
    });

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
    a: "That is most of our work. We are not built for enterprise projects and we do not pretend otherwise. If your company is small enough that the owner still reads the messages that come in, we are probably a good fit.",
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
    a: "Book a thirty-minute call. We look at what happens to a request on your site today and tell you what we would change. No slide deck.",
  },
];

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const section = "py-16 lg:py-[104px]";

/** Cada seccion de la historia: titular, texto y una escena. `flip` pone la
 *  escena a la izquierda en escritorio, para que las secciones se alternen en
 *  vez de repetir la misma composicion. */
function StorySection({
  id,
  title,
  body,
  children,
  alt = false,
  flip = false,
}: {
  id?: string;
  title: string;
  body: React.ReactNode;
  children: React.ReactNode;
  alt?: boolean;
  flip?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${alt ? "bg-paper-alt" : ""} ${id ? "scroll-mt-24" : ""} ${section}`}
    >
      <div
        className={`${wrap} grid items-center gap-8 md:gap-16 ${
          flip
            ? "md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
            : "md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
        }`}
      >
        <div className={flip ? "md:order-2" : ""}>
          <h2 className="text-h2 text-balance text-ink">{title}</h2>
          <div className="mt-5 max-w-[30em] text-lede text-pretty text-ink-soft">
            {body}
          </div>
        </div>
        <div className={`-mx-6 md:mx-0 ${flip ? "md:order-1" : ""}`}>
          {children}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  if (comingSoon) return <ComingSoon />;

  return (
    <>
      <OrganizationSchema />
      <SiteHeader />

      <main id="top">
        {/* El titular es la promesa verificable, no un resultado de negocio: se
            puede defender en la llamada. Al lado, la escena que la demuestra:
            la solicitud de las 21:47 contestada 34 segundos despues. En movil
            la escena se recorta al telefono, que es lo que tiene que leerse. */}
        <section className={`${wrap} grid items-center gap-10 pt-12 pb-16 md:grid-cols-2 md:gap-12 md:pt-16 md:pb-20 lg:pt-[88px] lg:pb-24`}>
          <div>
            <h1 className="max-w-[14em] text-display text-balance text-ink">
              Every quote request answered in under a minute
            </h1>
            <p className="mt-5 max-w-[30em] text-lede text-pretty text-ink-soft md:mt-6">
              We build the website that takes the request, and the system that
              replies, chases the quote and asks for the review.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 md:mt-9">
              <CalendlyButton className="max-md:w-full">
                Book a 30-minute call
              </CalendlyButton>
              <a
                href="#services"
                className="inline-flex min-h-[44px] items-center text-ui font-medium text-ink underline underline-offset-[5px] hover:text-ink-black max-md:hidden"
              >
                See what happens to a request
              </a>
            </div>
          </div>
          <HomeIllustration
            name="reply"
            label="A quote request for an EV charger sent from a website at 21:47, answered by text 34 seconds later, with the quote follow-up and the review request queued next."
            className="max-md:-mx-6"
          />
        </section>

        <StorySection
          alt
          flip
          title="Where the work gets lost"
          body="Not on the job. In the hours after the request comes in, while you are on a roof and the phone is in your pocket."
        >
          <HomeIllustration
            name="chaos"
            label="An unread WhatsApp, two missed calls, fourteen unread emails, a voicemail from a new number and a notebook page that says call Sarah back."
          />
        </StorySection>

        {/* El centro de la pagina: lo que le pasa a una solicitud. En
            escritorio es la escena ancha; en movil las cuatro tarjetas en
            columna, porque en fila no se leen a 390px. */}
        <section id="services" className={`scroll-mt-24 ${section}`}>
          <div className={wrap}>
            <h2 className="text-h2 text-balance text-ink md:text-center">
              What happens to a request
            </h2>
            <p className="mt-5 max-w-[30em] text-lede text-pretty text-ink-soft md:mx-auto md:text-center">
              From the form to the review, without anyone having to remember.
            </p>
            <HomeIllustration
              name="journey"
              label="A request comes in at 21:47, the reply goes out 34 seconds later, the quote is followed up on day 2 and a review is requested on day 9."
              className="mx-auto mt-10 max-w-[1040px] max-md:hidden"
            />
            <JourneySteps className="mt-10 md:hidden" />
          </div>
        </section>

        <StorySection
          alt
          title="Every request in one place"
          body="Web, calls, WhatsApp and email land on one board, each with an owner and a date. No more notebook."
        >
          <HomeIllustration
            name="board"
            label="A board with columns New, Quoted, Won and Review asked, with a card per job, fed by WhatsApp, calls, email and the website form."
          />
        </StorySection>

        <StorySection
          flip
          title="Built properly, and yours"
          body="Design, build and hosting, looked after by us. The site, the domain and the customer data belong to you. If you leave, you take them with you."
        >
          <HomeIllustration
            name="work"
            label="The home page of jbzbeats.com, a site we built, in a browser window, next to a card saying the client owns the website, the domain and the customer data."
          />
        </StorySection>

        {/* --night acaba en #2e2e2e, asi que el blanco al 80% aguanta hasta el
            final del recorrido: 9.25:1 en el peor punto. Antes terminaba en
            #7d7d7d y habia que reservar el tramo claro como aire. */}
        <section id="about" className={`bg-night scroll-mt-24 ${section}`}>
          <div className={wrap}>
            <h2 className="text-h2 text-balance text-white">
              Meet emmvi
            </h2>
            {/* Sin nombres propios y sin repartir roles entre personas: las
                dos cosas dicen cuanta gente hay. Ciudades si — eso es donde se
                trabaja, no cuantos. Ver PRODUCT.md. */}
            <p className="mt-6 max-w-[38em] text-body text-pretty text-white/80">
              emmvi builds websites and the systems that run behind them, from
              Valencia and from Argentina. Design, build and automation all
              happen in house, so you talk to the people doing the work and
              nothing is handed to a supplier you have never met.
            </p>
            {/* De borde a borde en movil: el mapa esta dibujado para 1200 de
                ancho y dentro del canal se queda en nada. */}
            <div className="mt-12 -mx-6 w-screen max-w-[100vw] lg:mx-0 lg:w-auto lg:max-w-none">
              <MeetMap />
            </div>

            <p className="mt-10 max-w-[38em] text-body text-pretty text-white/80">
              Working across both time zones covers most of the working day for
              clients in Europe and the Americas.
            </p>
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
                  one we have gone deepest on.
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
                  <h3 className="mb-3 text-h4 font-semibold text-ink">
                    {t.title}
                  </h3>
                  <p className="flex-1 text-copy tracking-[-0.2px] text-pretty text-ink-soft">
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
                    <span className="text-ui tracking-[-0.2px]">
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

        <section id="call" className={`bg-paper-alt scroll-mt-24 ${section}`}>
          <div
            className={`${wrap} grid items-center gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16`}
          >
            <div>
              <h2 className="text-h2 text-balance text-ink">
                Start with a{" "}
                <span className="whitespace-nowrap">30-minute</span> call
              </h2>
              <p className="mt-5 max-w-[30em] text-lede text-pretty text-ink-soft">
                We look at your site, follow one request through it, and tell
                you what we would change. Even if you do not hire us.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <CalendlyButton className="max-md:w-full">
                  Book a 30-minute call
                </CalendlyButton>
                <a
                  href="#contact"
                  className="inline-flex min-h-[44px] items-center text-ui text-ink-soft underline underline-offset-[5px] hover:text-ink max-md:w-full max-md:justify-center"
                >
                  or write to us instead
                </a>
              </div>
            </div>
            <HomeIllustration
              name="call"
              label="A booking calendar with 10:30 selected, next to what happens in the 30 minutes: we look at your site, follow one request through, and tell you what we would change."
              className="-mx-6 md:mx-0"
            />
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
                  <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-6 text-h4 font-semibold text-ink group-open:text-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-ui font-normal text-ink-black group-open:text-violet"
                    >
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">&ndash;</span>
                    </span>
                  </summary>
                  <p className="mt-4 text-body text-pretty text-ink-soft">
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
              <h2 className="text-h2 text-balance text-ink">
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
