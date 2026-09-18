import type { Metadata } from "next";
import Image from "next/image";

import { CtaLink } from "@/components/cta-link";
import { ClientMarquee } from "@/components/services/client-marquee";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Journey } from "@/components/services/journey";
import { SalesForm } from "@/components/services/sales-form";
import { Testimonials } from "@/components/services/testimonials";

/**
 * Réplica del frame "Services - Website Design" del Figma
 * (0niWGidrfk5rCNfWgb3L3z, nodo 165:831, 1400x13516).
 *
 * Es el posicionamiento viejo de Emmvi: la agencia de menú de servicios que
 * PRODUCT.md lista como anti-referencia. Se reconstruye tal cual a propósito,
 * por decisión explícita. Dos cosas NO se portan, porque son prueba social
 * prestada y la regla del proyecto lo prohíbe: el trust band de logos ajenos y
 * el testimonio firmado con un logo de cliente sin verificar. Los dos quedan
 * como placeholder visible.
 *
 * Los tokens de color, tipografía y layout salen de globals.css, que ya está
 * portado de este mismo archivo de Figma.
 */

export const metadata: Metadata = {
  title: "Website Design",
  description:
    "Our web design expertise transforms your vision into captivating, user-centric digital experiences that leave a lasting impact.",
};

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const section = "py-16 lg:py-[104px]";
const h2Class = "text-h2 text-balance text-ink";

const benefits = [
  {
    title: "Enhanced User Experience",
    body: "Professional web design ensures your website is user-friendly, making it easy for visitors to navigate, find information, and engage with your content or products.",
  },
  {
    title: "Mobile Responsiveness",
    body: "A professionally designed website is optimized for mobile devices, ensuring that it looks and functions well on smartphones and tablets, increasing your reach to mobile users.",
  },
  {
    title: "Improved SEO",
    body: "Properly structured websites with clean code and optimized elements rank higher in search engines, driving more organic traffic to your site.",
  },
];

/** Las tres ilustraciones son las del propio Figma, ya en public/illustrations
 *  desde la home: navegador, portátil con código y cohete, en ese orden.
 *
 *  El Figma dibuja la segunda tarjeta con borde negro. No es que esa tarjeta
 *  sea especial: es el estado hover, capturado en el archivo. Aquí va como
 *  hover en las tres, no fijo en una. */
const kickoff = [
  {
    n: "01",
    title: "Design Phase in Figma",
    body: "In this phase, we bring your vision to life within the Figma design platform. We focus on crafting the visual elements and layout that will define your website's aesthetic.",
    illo: "/illustrations/design.svg",
    alt: "A browser window showing a finished page.",
  },
  {
    n: "02",
    title: "Figma-to-WordPress Transformation",
    body: "Next, we take the meticulously crafted Figma design and replicate it in WordPress. This step is all about turning the static design into a dynamic, functional website.",
    illo: "/illustrations/coding.svg",
    alt: "A laptop with a connection running out to a separate node.",
  },
  {
    n: "03",
    title: "Integrations, Quality Checks, and Delivery",
    body: "Finally, we seamlessly integrate your website with the necessary tools and perform thorough testing to ensure it functions flawlessly. Once it's perfect, we deliver your fully functional website.",
    illo: "/illustrations/launch.svg",
    alt: "A rocket in flight.",
  },
];

/** Los iconos son el chip completo de 56px del Figma: caja, borde y glifo en un
 *  solo SVG. Sustituyen al wrapper + glifo dibujado a mano que había antes, que
 *  además tenía el borde mal (es el violeta de marca, no un lila claro).
 *
 *  El Figma escribe "Reponsive Design". Aquí va corregido: es errata, no
 *  decisión de diseño, y se vería en producción. */
const included = [
  {
    title: "Site Speed Optimization",
    body: "We fine-tune your website for lightning-fast loading times, ensuring a seamless and responsive UX.",
    icon: "/figma/website-design/icons/site-speed.svg",
  },
  {
    title: "Responsive Design",
    body: "Our designs adapt to any device, delivering an optimal viewing experience on mobile, tablet, and desktop.",
    icon: "/figma/website-design/icons/responsive-design.svg",
  },
  {
    title: "SEO Optimized",
    body: "Our web design service goes beyond aesthetics. We'll craft a stunning website and ensure it's on-page SEO-optimized for higher search engine visibility.",
    icon: "/figma/website-design/icons/seo-optimized.svg",
  },
  {
    title: "20+ App Integrations",
    body: "Integrate your website seamlessly with a range of apps to streamline operations and offer additional features to your users.",
    icon: "/figma/website-design/icons/app-integrations.svg",
  },
  {
    title: "Premium Plugins for Free",
    body: "Access a selection of premium plugins at no extra cost, enhancing your website's functionality and performance.",
    icon: "/figma/website-design/icons/premium-plugins.svg",
  },
];

const hosting = [
  {
    title: "Ultrafast PHP",
    body: "Custom PHP setup that cuts the TTFB (time to first byte) and makes the overall resource usage more efficient, to ultimately let your web pages load 30% faster compared to standard PHP setups.",
    icon: "/figma/website-design/icons/ultrafast-php.svg",
  },
  {
    title: "Powered By Google Cloud",
    body: "We run our service on Google Cloud, which guarantees premium availability and reliability and one of the fastest networks out there. We use distributed SSD storage for multiple redundancies.",
    icon: "/figma/website-design/icons/google-cloud.svg",
  },
  {
    title: "Free SSL Certificates",
    body: "Let’s Encrypt Standard and Wildcard SSL certificates at no extra cost. For your convenience, the Standard SSL comes preinstalled on your site.",
    icon: "/figma/website-design/icons/free-ssl.svg",
  },
  {
    title: "Daily Backups",
    body: "We back up your account daily and keep up to 30 copies. You also have the option to create instant on-demand backups with the click of a button.",
    icon: "/figma/website-design/icons/daily-backups.svg",
  },
  {
    title: "Dev Toolkit",
    body: "Advanced users will love our tools like WP-CLI, SSH access, PHP version control, Git integration and more that make workflows easy and fast.",
    icon: "/figma/website-design/icons/dev-toolkit.svg",
  },
  {
    title: "Staging Tool",
    body: "Making changes on your site has never been easier. Make a copy of your site in a click, work on it, and then push the changes live with our staging tool.",
    icon: "/figma/website-design/icons/staging-tool.svg",
  },
];

/**
 * Las quince piezas de "Our Work Showcase". Ya no son recortes del render: las
 * entregó el usuario a 836x670, el doble de resolución, y con el cliente en el
 * nombre del archivo.
 *
 * El Figma no pone rótulo bajo cada captura y aquí tampoco, pero el nombre sí
 * va en el `alt`: para quien no ve la imagen, "proyecto 7 del portfolio" no
 * dice nada y "AgencyHub" sí. Orden alfabético, que es el de la carpeta.
 */
const showcase = [
  { slug: "agencyhub", name: "AgencyHub" },
  { slug: "agenserv", name: "AgenServ" },
  { slug: "better-backlinks", name: "BetterBacklinks" },
  { slug: "cerium-cyber", name: "Cerium Cyber" },
  { slug: "huskky-energy", name: "Huskky Energy" },
  { slug: "jbz-beats", name: "JBZ Beats" },
  { slug: "medhub360", name: "Medhub360" },
  { slug: "medicare-how", name: "Medicare How" },
  { slug: "minuteman-security", name: "MinuteMan Security" },
  { slug: "palms-wellington-plastic-surgery", name: "Palms Wellington Plastic Surgery" },
  { slug: "steady-content", name: "SteadyContent" },
  { slug: "super-power-pro", name: "Super Power Pro" },
  { slug: "touchofclass", name: "TouchOfClass" },
  { slug: "voip-virtual", name: "VoipVirtual" },
  { slug: "webprops-int", name: "WebProps Int" },
];

export default function WebsiteDesignPage() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* --- Hero --------------------------------------------------- */}
        <section className={`${wrap} pt-14 pb-16 lg:pt-[90px] lg:pb-20`}>
          <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,601px)_minmax(0,1fr)] min-[900px]:gap-8">
            <div>
              <p className="inline-flex rounded-sm border border-[#c8c6f9] bg-[#f8f8ff] px-3 py-1.5 text-small leading-5 text-violet-ink">
                Website Design
              </p>
              <h1 className="mt-6 max-w-[8.8em] text-display text-balance text-ink">
                Crafting Unique Online Experiences
              </h1>
              <p className="mt-6 max-w-[34em] text-body text-pretty text-ink-soft">
                Our web design expertise transforms your vision into captivating,
                user-centric digital experiences that leave a lasting impact.
              </p>
              <div className="mt-8">
                <CtaLink href="#contact">Get Started</CtaLink>
              </div>
            </div>

            <Image
              src="/figma/website-design/hero.svg"
              alt="A designer building a web page next to a browser window and a code panel."
              width={642}
              height={537}
              priority
              className="h-auto w-full max-w-[642px] justify-self-end"
            />
          </div>
        </section>

        {/* --- Trust band --------------------------------------------- */}
        {/* El Figma pone aquí ShapeShift, Cameo y Bounce, que no son clientes.
            Aquí van los nueve reales, en una cinta que corre sola. */}
        <section className={`${wrap} pb-16 lg:pb-20`}>
          <ClientMarquee />
        </section>

        {/* --- Beneficios + preview ----------------------------------- */}
        <section className={`${wrap} pb-16 lg:pb-24`}>
          <div className="grid gap-10 min-[900px]:grid-cols-[460px_minmax(0,1fr)] min-[900px]:items-start min-[900px]:gap-8">
            <ul className="grid list-none gap-4">
              {benefits.map((b) => (
                <li
                  key={b.title}
                  className="rounded-md border border-line bg-paper p-8"
                >
                  <h2 className="text-[1.25rem] font-bold tracking-[-0.02em] text-ink">
                    {b.title}
                  </h2>
                  <p className="mt-3 text-small leading-[22px] text-pretty text-ink-soft">
                    {b.body}
                  </p>
                </li>
              ))}
            </ul>

            {/* En el Figma esta captura se sale por la derecha del frame y se
                recorta. Aquí igual: el canal derecho la corta. */}
            <div className="min-[900px]:-mr-[var(--spacing-gut)] min-[900px]:overflow-hidden">
              <Image
                src="/figma/website-design/preview.jpg"
                alt="Preview of a landing page about conversion rate optimization."
                width={870}
                height={730}
                className="h-auto w-full rounded-md border border-line min-[900px]:w-[870px] min-[900px]:max-w-none min-[900px]:rounded-none min-[900px]:border-0"
              />
            </div>
          </div>

          <Image
            src="/figma/website-design/mockups.png"
            alt="Panels of a finished site for a music producer, laid out in perspective: home, beat catalogue, licensing tiers, about, FAQ and contact."
            width={1580}
            height={1557}
            loading="lazy"
            className="mx-auto mt-14 h-auto w-full max-w-[1096px] lg:mt-20"
          />
        </section>

        {/* --- Navigating the Web Design Journey ---------------------- */}
        <section className={`${wrap} ${section}`}>
          <h2 className={`mx-auto max-w-[11em] text-center ${h2Class}`}>
            Navigating the Web Design Journey
          </h2>
          <Journey />
        </section>

        {/* --- Project Kickoff and Planning --------------------------- */}
        <section className={`${wrap} ${section}`}>
          <h2 className={`max-w-[9em] ${h2Class}`}>
            Project Kickoff and Planning
          </h2>
          <div className="mt-8">
            <CtaLink href="#contact">Get Started</CtaLink>
          </div>

          <ul className="mt-12 grid list-none gap-4 min-[900px]:grid-cols-3">
            {kickoff.map((k) => (
              <li
                key={k.n}
                className="flex flex-col rounded-md border border-line bg-paper p-8 transition-colors duration-150 hover:border-ink-black"
              >
                <Image
                  src={k.illo}
                  alt={k.alt}
                  width={252}
                  height={252}
                  loading="lazy"
                  className="mx-auto h-auto w-full max-w-[252px]"
                />
                <p
                  aria-hidden="true"
                  className="mt-8 text-[2rem] leading-none font-extrabold text-[#8f8f8f]"
                >
                  {k.n}
                </p>
                <h3 className="mt-4 text-[1.125rem] leading-6 font-bold tracking-[-0.02em] text-balance text-ink">
                  {k.title}
                </h3>
                <p className="mt-3 text-small leading-[22px] text-pretty text-ink-soft">
                  {k.body}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center">
            <CtaLink href="#contact">Get Started</CtaLink>
          </div>
        </section>

        {/* --- Here's What's Included --------------------------------- */}
        <section className={`${wrap} ${section}`}>
          <h2 className={`text-center ${h2Class}`}>Here&rsquo;s What&rsquo;s Included</h2>

          <ul className="mt-12 grid list-none gap-x-8 gap-y-12 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3">
            {included.map(({ title, body, icon }) => (
              <li key={title}>
                <Image src={icon} alt="" width={56} height={56} loading="lazy" />
                <h3 className="mt-4 text-[1.25rem] font-bold tracking-[-0.02em] text-ink">
                  {title}
                </h3>
                <p className="mt-3 max-w-[34em] text-[1rem] leading-[26px] text-pretty text-ink-soft">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* --- No hosting? -------------------------------------------- */}
        <section className={`${wrap} ${section}`}>
          <h2 className={`text-center ${h2Class}`}>
            No hosting? Get it all with us!
          </h2>
          <p className="mx-auto mt-5 max-w-[33em] text-center text-body text-pretty text-ink-soft">
            Upgrade your web design with our premium hosting. A fast, secure, and
            reliable solution to power your online success.
          </p>

          <div className="mt-12 rounded-lg bg-paper-panel p-5 min-[900px]:mx-auto min-[900px]:max-w-[1136px] min-[900px]:p-8">
            <ul className="grid list-none gap-4 min-[900px]:grid-cols-2">
              {hosting.map(({ title, body, icon }) => (
                <li
                  key={title}
                  className="rounded-md border border-line bg-paper p-6 min-[900px]:p-10"
                >
                  <Image src={icon} alt="" width={56} height={56} loading="lazy" />
                  <h3 className="mt-6 text-[1.25rem] font-bold tracking-[-0.02em] text-ink">
                    {title}
                  </h3>
                  <p className="mt-3 text-[1rem] leading-[26px] text-pretty text-ink-soft">
                    {body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CtaLink href="#contact">Yes, I want both!</CtaLink>
            <CtaLink href="#contact" variant="ghost">
              Learn More
            </CtaLink>
          </div>
        </section>

        {/* --- Our Work Showcase -------------------------------------- */}
        <section className={`${wrap} ${section}`}>
          <h2 className={`text-center ${h2Class}`}>Our Work Showcase</h2>
          <p className="mx-auto mt-5 max-w-[46em] text-center text-body text-pretty text-ink-soft">
            Celebrating Our Creative Excellence: Take a Closer Look at Our Diverse
            Web Design Portfolio.
          </p>

          <ul className="mt-12 grid list-none gap-8 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3">
            {showcase.map(({ slug, name }) => (
              <li key={slug}>
                <Image
                  src={`/figma/website-design/work/${slug}.jpg`}
                  alt={`The ${name} website, built by Emmvi.`}
                  width={836}
                  height={670}
                  loading="lazy"
                  className="h-auto w-full rounded-md border border-line"
                />
              </li>
            ))}
          </ul>

          <div className="mt-12 flex justify-center">
            <CtaLink href="#contact">Get Started</CtaLink>
          </div>
        </section>

        {/* --- Real-Life Experiences ---------------------------------- */}
        <section className={`${wrap} ${section}`}>
          <h2 className={`text-center ${h2Class}`}>Real-Life Experiences</h2>
          <div className="mt-12">
            <Testimonials />
          </div>
        </section>

        {/* --- Talk to our Sales team --------------------------------- */}
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

              {/* El Figma firma esta cita con el logo de un cliente que no está
                  verificado. Va como placeholder hasta que haya uno atribuible. */}
              <div className="rounded-md border border-dashed border-line p-8">
                <p className="text-h3 text-ink-soft">&ldquo;</p>
                <p className="mt-2 text-[1rem] leading-[26px] text-pretty text-ink-soft">
                  Placeholder. The Figma signs this quote with a client logo we
                  cannot verify, so neither the quote nor the logo is published.
                  The three testimonials above are the real ones.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
