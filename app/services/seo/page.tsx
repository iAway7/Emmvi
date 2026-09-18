import type { Metadata } from "next";
import Image from "next/image";

import { CtaLink } from "@/components/cta-link";
import { FaqAccordion, type FaqItem } from "@/components/services/faq-accordion";
import { WebsiteDesignFooter } from "@/components/services/footer";
import { WebsiteDesignHeader } from "@/components/services/header";
import { PackageTabs, type PackageTab } from "@/components/services/package-tabs";
import { SalesForm } from "@/components/services/sales-form";

/**
 * Réplica del frame "Services - SEO Services" del Figma
 * (0niWGidrfk5rCNfWgb3L3z, nodo 165:2291, 1400x7371).
 *
 * Tercera pantalla del posicionamiento viejo, misma decisión que las otras dos.
 * Comparte shell con ellas.
 *
 * Dos cosas del frame no se copian tal cual:
 *  - La retícula de servicios dibuja seis tarjetas, pero dos están repetidas
 *    (Comprehensive SEO Audit y Local SEO salen dos veces). Eso es un
 *    copia-pega para llenar la fila, no un servicio más.
 *  - El testimonio lo firma Jared White, que es cliente real, pero con una cita
 *    escrita para el Figma. Va la que dijo de verdad, la misma que la home.
 */

export const metadata: Metadata = {
  title: "SEO Services",
  description:
    "Celebrate startup growth with our SEO expertise. Discover how we can fuel your success and propel your brand to new heights.",
};

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const section = "py-16 lg:py-[104px]";
const h2Class = "text-h2 text-balance text-ink";

/**
 * Banda de herramientas. **El Figma la dibuja sobre tinta y aquí va sobre
 * papel**, por decisión del usuario, así que los logos del archivo —que son las
 * versiones blancas— no valen. Los seis son ahora la versión oficial de cada
 * marca para fondo claro, entregada por el usuario. Nada recoloreado a mano.
 *
 * Son **seis, no las cuatro del Figma**: Search Console y Google Business
 * Profile las añadió el usuario como herramientas que usa de verdad, mismo
 * criterio que GoHighLevel en la banda de Email Marketing.
 *
 * Cada uno va a su proporción, no todos a la misma altura: Analytics es un
 * lockup apilado y Semrush ahora trae el endoso de Adobe en una segunda línea,
 * así que igualar alturas los descompensa ópticamente. Es la regla del trust
 * band de website-design. Las medidas son las intrínsecas de cada archivo,
 * salvo Semrush: a sus 36 px nativos el lockup de dos líneas se lee más
 * pequeño que el resto, y sube a 44 para pesar lo mismo.
 */
const tools = [
  { src: "/tools/seo/ahrefs.svg", name: "Ahrefs", w: 127, h: 33 },
  { src: "/tools/seo/google-analytics.svg", name: "Google Analytics", w: 139, h: 54 },
  { src: "/tools/seo/semrush.svg", name: "Semrush", w: 183, h: 44 },
  { src: "/tools/seo/moz.svg", name: "Moz", w: 103, h: 30 },
  { src: "/tools/seo/google-search-console.svg", name: "Google Search Console", w: 244, h: 36 },
  // La chapa va más alta que los wordmarks: a la misma altura pesa menos
  // ópticamente, igual que en el trust band de website-design.
  { src: "/tools/seo/google-business-profile.svg", name: "Google Business Profile", w: 46, h: 40 },
];

const services = [
  {
    title: "Comprehensive SEO Audit",
    body: "An easy start to boost your business. Get the best results tailored to your industry.",
    illo: "/figma/seo/card-audit.svg",
    alt: "An isometric dashboard with a bar chart and a magnifier.",
  },
  {
    title: "Local SEO",
    body: "Reach the pinnacle of local search with highly effective geographic targeting.",
    illo: "/figma/seo/card-local.svg",
    alt: "A map pin marked SEO dropped on a location.",
  },
  {
    title: "Link Building",
    body: "Maximize budget efficiency with top-tier backlinks.",
    illo: "/figma/seo/card-backlinks.svg",
    alt: "A monitor showing a rising line chart beside two gears.",
  },
];

/** El Figma solo desarrolla la primera. Las otras tres se marcan. */
const packageTabs: PackageTab[] = [
  {
    title: "Website Audit",
    heading: "Website Audit Services",
    body: "At Emmvi, our first step in enhancing your online presence is to conduct a comprehensive website audit. This audit involves a meticulous evaluation of every vital aspect of your website to uncover potential issues that could impact its performance, user experience, and search engine ranking. Our goal is to help you identify and rectify issues like broken links, slow loading times, duplicate content, subpar design, low-quality backlinks, and more. We're here to provide you with expert recommendations and best practices that will elevate your website's SEO, user-friendliness, and conversion rates.",
  },
  { title: "Keyword Research" },
  { title: "On-page Optimization" },
  { title: "Off-page Optimization" },
];

const steps = [
  "Thorough Analysis of the Niche (Topics) in the Target Region",
  "Development of a Comprehensive Promotion Strategy, Including Content Marketing and Link Building",
  "Complete Technical Analysis of the Website",
  "EAT (Expertise, Authoritativeness, Trustworthiness) Analysis of the Website",
  "Iterative Semantic Core Preparation",
  "Website Optimization for Target Region's Search Engines",
  "Link Building Maintenance for Quality Backlinks",
  "Website Structure Creation",
  "Competitor Audit",
  "Preparation of Essential Content of All Types",
];

/** Igual que en Email Marketing: el Figma escribe las cinco preguntas y solo
 *  una respuesta. Las otras cuatro van marcadas. */
const faqs: FaqItem[] = [
  {
    q: "What is SEO, and why do I need it?",
    a: "SEO, or Search Engine Optimization, is the process of improving your website's visibility in search engine results. It's essential for driving organic traffic, increasing online presence, and ultimately boosting business success.",
  },
  { q: "How long does it take to see SEO results?" },
  { q: "What is link building, and why is it essential for SEO?" },
  { q: "Do you guarantee the #1 position in search results?" },
  { q: "What reporting and analytics do you provide for SEO?" },
];

export default function SeoPage() {
  return (
    <>
      <WebsiteDesignHeader current="/services/seo" />

      <main id="top">
        {/* --- Hero ---------------------------------------------------- */}
        <section className={`${wrap} pt-14 pb-16 lg:pt-[90px] lg:pb-20`}>
          <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,601px)_minmax(0,1fr)] min-[900px]:gap-8">
            <div>
              <p className="inline-flex rounded-sm border border-pink bg-pink-wash px-3 py-1.5 text-small leading-5 text-pink-ink">
                Search Engine Optimization
              </p>
              <h1 className="mt-6 max-w-[601px] text-display text-balance text-ink">
                Fueling Startup Growth with SEO
              </h1>
              <p className="mt-6 max-w-[34em] text-body text-pretty text-ink-soft">
                Celebrate startup growth with our SEO expertise. Discover how we
                can fuel your success and propel your brand to new heights.
              </p>
              <div className="mt-8">
                <CtaLink href="#contact">Get Started</CtaLink>
              </div>
            </div>

            <Image
              src="/figma/seo/hero.svg"
              alt="Someone inspecting a phone screen with a magnifier, beside charts and a lightbulb."
              width={642}
              height={470}
              priority
              className="h-auto w-full max-w-[642px] justify-self-end"
            />
          </div>
        </section>

        {/* --- Banda de herramientas ----------------------------------- */}
        {/* La etiqueta no está en el Figma y hace falta: una fila de logos justo
            debajo del hero se lee como clientes, no como herramientas. Es la
            misma corrección que lleva la banda de /services/email-marketing. */}
        <section>
          <div className={wrap}>
            <p className="text-center text-small text-ink-soft">
              Tools we work with
            </p>
            <ul className="mt-7 flex list-none flex-wrap items-center justify-center gap-x-12 gap-y-7 min-[900px]:justify-between">
              {tools.map((t) => (
                <li key={t.name}>
                  <Image
                    src={t.src}
                    alt={t.name}
                    width={t.w}
                    height={t.h}
                    className="max-w-full"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- Services ------------------------------------------------ */}
        {/* El Figma dibuja seis tarjetas, pero dos van repetidas para llenar la
            fila. Aquí van las tres distintas y el CTA cierra a ancho completo,
            como "You own everything" en la home. */}
        <section className={`${wrap} ${section}`}>
          <h2 className={h2Class}>Services</h2>

          <ul className="mt-12 grid list-none gap-4 min-[900px]:grid-cols-3">
            {services.map((s) => (
              <li
                key={s.title}
                className="flex flex-col rounded-md border border-line bg-paper p-8"
              >
                <Image
                  src={s.illo}
                  alt={s.alt}
                  width={256}
                  height={256}
                  loading="lazy"
                  className="mx-auto h-auto w-full max-w-[256px]"
                />
                <h3 className="mt-6 text-[1.25rem] font-bold tracking-[-0.02em] text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-small leading-[22px] text-pretty text-ink-soft">
                  {s.body}
                </p>
                <div className="mt-6">
                  <CtaLink href="#contact" variant="outline">
                    Let&rsquo;s Talk
                  </CtaLink>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col items-center gap-5 rounded-md border border-line bg-paper px-8 py-10 text-center">
            <p className="text-[1.25rem] font-bold tracking-[-0.02em] text-ink">
              Can&rsquo;t find what you need?
            </p>
            <CtaLink href="#contact">Contact Us</CtaLink>
          </div>
        </section>

        {/* --- What is included in our SEO package? -------------------- */}
        <section className={`${wrap} pb-16 lg:pb-24`}>
          <div className="text-center">
            <p className="inline-flex rounded-sm border border-teal-line bg-teal-wash px-3 py-1.5 text-small leading-5 text-teal-ink">
              SEO Package
            </p>
            <h2 className={`mx-auto mt-6 max-w-[868px] ${h2Class}`}>
              What is included in our SEO package?
            </h2>
            <p className="mx-auto mt-5 max-w-[868px] text-[1rem] leading-[26px] text-pretty text-ink-soft">
              When you join forces with Emmvi, we&rsquo;ll enhance your
              website&rsquo;s visibility, drive traffic, and supercharge
              conversions. Our services are crafted to optimize your website and
              elevate your ranking, encompassing:
            </p>
          </div>

          <div className="mt-12">
            <PackageTabs tabs={packageTabs} />
          </div>
        </section>

        {/* --- Steps in Website Search Optimization -------------------- */}
        <section className={`${wrap} pb-16 lg:pb-24`}>
          <h2 className={`mx-auto max-w-[12em] text-center ${h2Class}`}>
            Steps in Website Search Optimization
          </h2>
          <p className="mt-5 text-center text-[1rem] leading-6 text-ink-soft">
            Unlocking Search Optimization Success
          </p>

          <div className="bg-dusk mt-12 rounded-lg px-8 py-12 min-[900px]:px-16">
            <ol className="grid list-none gap-x-16 min-[900px]:grid-cols-2">
              {steps.map((s, i) => (
                <li
                  key={s}
                  className="flex items-start gap-5 border-b border-white/12 py-5 last:border-b-0 min-[900px]:[&:nth-child(5)]:border-b-0 min-[900px]:[&:nth-child(10)]:border-b-0"
                >
                  <span
                    aria-hidden="true"
                    className="text-[1.125rem] leading-6 font-extrabold text-white"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-small leading-5 font-semibold text-pretty text-white/85">
                    {s}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 flex justify-center">
            <CtaLink href="#contact">Get Started</CtaLink>
          </div>
        </section>

        {/* --- What Our Clients Say ------------------------------------ */}
        {/* Jared White es cliente real; la cita del Figma no es suya. Va la que
            dijo de verdad, la misma que la home y las otras dos pantallas. */}
        <section className={`${wrap} pb-16 lg:pb-24`}>
          <h2 className={`text-center ${h2Class}`}>What Our Clients Say</h2>

          <figure className="mt-12 grid items-center gap-10 rounded-lg bg-paper-panel p-8 min-[900px]:grid-cols-[minmax(0,630px)_minmax(0,1fr)] min-[900px]:gap-16 min-[900px]:p-16">
            <div>
              {/* La comilla del Figma es un icono de 60x60, no el glifo de 32 px
                  de las tarjetas de Email Marketing: aquí el testimonio ocupa
                  un panel entero y a 32 px se pierde. A 128 px el glifo de DM
                  Sans mide 33 px de alto, que es la medida del original. */}
              <p aria-hidden="true" className="text-[8rem] leading-[0.4] font-extrabold text-violet">
                &ldquo;
              </p>
              <blockquote className="mt-4 text-[1rem] leading-[26px] text-pretty text-ink-soft">
                Gustavo and Nico do great work. I&rsquo;ve been really happy with
                multiple websites they&rsquo;ve built for me. They have a great
                eye for design and a strong focus on user experience, making sure
                everything not only looks good but is easy to navigate.
                They&rsquo;re talented, reliable, and easy to work with.
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src="/testimonials/jared-white.png"
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                  className="size-10 shrink-0 rounded-full object-cover"
                />
                <span className="text-small leading-5">
                  <span className="block font-bold text-ink">Jared White</span>
                  <span className="block text-violet-ink">Founder at JBZ Beats</span>
                </span>
              </figcaption>
            </div>

            <Image
              src="/figma/seo/testimonial.png"
              alt="People assembling a five-star review on a large screen."
              width={412}
              height={412}
              loading="lazy"
              className="h-auto w-full max-w-[412px] justify-self-center"
            />
          </figure>
        </section>

        {/* --- FAQ ----------------------------------------------------- */}
        <section className={`${wrap} pb-16 lg:pb-24`}>
          <h2 className={`text-center ${h2Class}`}>Frequently Asked Questions</h2>
          <p className="mx-auto mt-5 max-w-[40em] text-center text-[1rem] leading-6 text-pretty text-ink-soft">
            If you have any questions that aren&rsquo;t listed below, feel free to
            schedule a call to speak with someone from our team.
          </p>

          <div className="mx-auto mt-12 max-w-[636px]">
            <FaqAccordion items={faqs} />
          </div>

          <div className="mt-10 flex justify-center">
            <CtaLink href="#contact">Schedule a Call</CtaLink>
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
                  <a
                    href="/privacy-policy"
                    className="text-ink underline underline-offset-[3px] hover:text-violet"
                  >
                    Privacy Statement
                  </a>
                  .
                </p>
              </div>

              <blockquote className="text-ink-soft">
                <p aria-hidden="true" className="text-h3">&ldquo;</p>
                <p className="mt-2 text-[1.25rem] leading-[32px] text-pretty">
                  Gus helped me redesign my website and honestly, it turned out
                  way better than I imagined. It looks clean, it loads fast, and
                  it works great on phones too.
                </p>
                {/* El Figma firma esta cita con un avatar de 60 px (nodo
                    165:2317) y aquí no había ninguno. Va el de 40 px del resto
                    del proyecto, con la imagen que usa Alicia en las otras dos
                    pantallas. */}
                <footer className="mt-6 flex items-center gap-3">
                  <Image
                    src="/testimonials/alicia-ryz.png"
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                    className="size-10 shrink-0 rounded-full object-cover"
                  />
                  <span className="text-small leading-5">
                    <span className="block font-bold text-ink">Alicia Ryz</span>
                    <span className="block text-ink-soft">Ecommerce store</span>
                  </span>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
      </main>

      <WebsiteDesignFooter />
    </>
  );
}
