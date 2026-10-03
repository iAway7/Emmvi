import Image from "next/image";

import { CtaLink } from "@/components/cta-link";
import { AfterYouSend } from "@/components/services/after-you-send";
import { ClientMarquee } from "@/components/services/client-marquee";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Journey } from "@/components/services/journey";
import { SalesForm } from "@/components/services/sales-form";
import { Testimonials } from "@/components/services/testimonials";
import {
  WebDesignIllustration,
  type WebDesignScene,
} from "@/components/services/web-design-illustrations";
import { websiteDesignCopy } from "@/lib/copy/website-design";
import type { Locale } from "@/lib/i18n";

/**
 * Réplica del frame "Services - Website Design" del Figma
 * (0niWGidrfk5rCNfWgb3L3z, nodo 165:831, 1400x13516).
 *
 * Es el posicionamiento viejo de emmvi: la agencia de menú de servicios que
 * PRODUCT.md lista como anti-referencia. Se reconstruye tal cual a propósito,
 * por decisión explícita. Dos cosas NO se portan, porque son prueba social
 * prestada y la regla del proyecto lo prohíbe: el trust band de logos ajenos y
 * el testimonio firmado con un logo de cliente sin verificar. Los dos quedan
 * como placeholder visible.
 *
 * Los tokens de color, tipografía y layout salen de globals.css, que ya está
 * portado de este mismo archivo de Figma.
 *
 * El texto vive en lib/copy/website-design.ts, en los dos idiomas; esta
 * plantilla la montan app/(en)/services/website-design/page.tsx y
 * app/(es)/es/services/website-design/page.tsx.
 */

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const section = "py-16 lg:py-[104px]";
const h2Class = "text-ink";

/** Una escena por paso, dibujada para lo que dice el paso: el diseño en
 *  Figma, el paso del diseño al sitio vivo y la lista de comprobaciones antes
 *  de publicar. Sustituyen al navegador, el portátil y el cohete isométricos
 *  del Figma. Ver components/services/web-design-illustrations.tsx.
 *
 *  El Figma dibuja la segunda tarjeta con borde negro. No es que esa tarjeta
 *  sea especial: es el estado hover, capturado en el archivo. Aquí va como
 *  hover en las tres, no fijo en una.
 *
 *  Numero y escena de cada paso; titulo, cuerpo y alt salen del diccionario,
 *  en este mismo orden. */
const kickoff: readonly { n: string; scene: WebDesignScene }[] = [
  { n: "01", scene: "design" },
  { n: "02", scene: "build" },
  { n: "03", scene: "launch" },
];

/** Los iconos son el chip completo de 56px del Figma: caja, borde y glifo en un
 *  solo SVG. Sustituyen al wrapper + glifo dibujado a mano que había antes, que
 *  además tenía el borde mal (es el violeta de marca, no un lila claro).
 *
 *  El Figma escribe "Reponsive Design". Aquí va corregido: es errata, no
 *  decisión de diseño, y se vería en producción.
 *
 *  Mismo orden que `included.items` del diccionario. */
const includedIcons = [
  "/figma/website-design/icons/site-speed.svg",
  "/figma/website-design/icons/responsive-design.svg",
  "/figma/website-design/icons/seo-optimized.svg",
  "/figma/website-design/icons/app-integrations.svg",
  "/figma/website-design/icons/premium-plugins.svg",
];

/** Mismo orden que `hosting.items` del diccionario. */
const hostingIcons = [
  "/figma/website-design/icons/ultrafast-php.svg",
  "/figma/website-design/icons/google-cloud.svg",
  "/figma/website-design/icons/free-ssl.svg",
  "/figma/website-design/icons/daily-backups.svg",
  "/figma/website-design/icons/dev-toolkit.svg",
  "/figma/website-design/icons/staging-tool.svg",
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

export function WebsiteDesignPage({ locale }: { locale: Locale }) {
  const t = websiteDesignCopy[locale];
  const path = "/services/website-design";

  return (
    <>
      <SiteHeader locale={locale} path={path} />

      <main id="top">
        {/* --- Hero --------------------------------------------------- */}
        <section className={`${wrap} pt-14 pb-16 lg:pt-[90px] lg:pb-20`}>
          <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,601px)_minmax(0,1fr)] min-[900px]:gap-8">
            <div>
              <p className="inline-flex rounded-sm border border-[#c8c6f9] bg-[#f8f8ff] px-3 py-1.5 text-small leading-5 text-violet-ink">
                {t.hero.eyebrow}
              </p>
              <h1 className="mt-6 max-w-[8.8em] text-ink">{t.hero.title}</h1>
              <p className="mt-6 max-w-[34em] text-body text-pretty text-ink-soft">
                {t.hero.lede}
              </p>
              <div className="mt-8">
                <CtaLink href="#contact">{t.hero.cta}</CtaLink>
              </div>
            </div>

            <WebDesignIllustration
              name="hero"
              label={t.hero.label}
              locale={locale}
              className="w-full max-w-[642px] justify-self-end max-md:mx-auto max-md:max-w-[320px]"
            />
          </div>
        </section>

        {/* --- Trust band --------------------------------------------- */}
        {/* El Figma pone aquí ShapeShift, Cameo y Bounce, que no son clientes.
            Aquí van los nueve reales, en una cinta que corre sola. */}
        <section className={`reveal ${wrap} pb-16 lg:pb-20`}>
          <ClientMarquee locale={locale} />
        </section>

        {/* --- Beneficios + preview ----------------------------------- */}
        <section className={`reveal ${wrap} pb-16 lg:pb-24`}>
          <div className="grid gap-10 min-[900px]:grid-cols-[460px_minmax(0,1fr)] min-[900px]:items-start min-[900px]:gap-8">
            <ul className="grid list-none gap-4">
              {t.benefits.items.map((b) => (
                <li
                  key={b.title}
                  className="rounded-md border border-line bg-paper p-8"
                >
                  <h3 className="text-ink">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-small leading-[22px] text-pretty text-ink-soft">
                    {b.body}
                  </p>
                </li>
              ))}
            </ul>

            {/* Antes, una captura de una plantilla ajena de CRO (con su "LOGO"
                y sus "Brands we work with"). Ahora la escena cuenta los tres
                beneficios de la izquierda como un recorrido. Como en el Figma,
                se sale por la derecha y el canal la corta: lo que importa de
                la escena queda lejos de ese borde. */}
            <div className="min-[900px]:-mr-[var(--spacing-gut)] min-[900px]:overflow-hidden">
              <WebDesignIllustration
                name="benefits"
                label={t.benefits.label}
                locale={locale}
                className="w-full min-[900px]:w-[870px] min-[900px]:max-w-none"
              />
            </div>
          </div>

          <Image
            src="/figma/website-design/mockups.png"
            alt={t.benefits.mockupsAlt}
            width={1580}
            height={1557}
            loading="lazy"
            className="mx-auto mt-14 h-auto w-full max-w-[1096px] lg:mt-20"
          />
        </section>

        {/* --- Navigating the Web Design Journey ---------------------- */}
        <section className={`reveal ${wrap} ${section}`}>
          <h2 className={`mx-auto max-w-[11em] text-center ${h2Class}`}>
            {t.journey.title}
          </h2>
          <Journey locale={locale} />
        </section>

        {/* --- Project Kickoff and Planning --------------------------- */}
        <section className={`reveal ${wrap} ${section}`}>
          <h2 className={`max-w-[9em] ${h2Class}`}>{t.kickoff.title}</h2>
          <div className="mt-8">
            <CtaLink href="#contact">{t.kickoff.cta}</CtaLink>
          </div>

          <ul className="mt-12 grid list-none gap-4 min-[900px]:grid-cols-3">
            {kickoff.map((k, i) => {
              const step = t.kickoff.steps[i];
              return (
                <li
                  key={k.n}
                  className="flex flex-col rounded-md border border-line bg-paper p-8 transition-colors duration-150 hover:border-ink-black"
                >
                  <WebDesignIllustration
                    name={k.scene}
                    label={step.alt}
                    locale={locale}
                    className="mx-auto w-full max-w-[252px]"
                  />
                  <p
                    aria-hidden="true"
                    className="mt-8 text-stat text-[#8f8f8f]"
                  >
                    {k.n}
                  </p>
                  <h3 className="mt-4 text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-small leading-[22px] text-pretty text-ink-soft">
                    {step.body}
                  </p>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 flex justify-center">
            <CtaLink href="#contact">{t.kickoff.cta}</CtaLink>
          </div>
        </section>

        {/* --- Here's What's Included --------------------------------- */}
        <section className={`reveal ${wrap} ${section}`}>
          <h2 className={`text-center ${h2Class}`}>{t.included.title}</h2>

          <ul className="mt-12 grid list-none gap-x-8 gap-y-12 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3">
            {t.included.items.map(({ title, body }, i) => (
              <li key={title}>
                <Image src={includedIcons[i]} alt="" width={56} height={56} loading="lazy" />
                <h3 className="mt-4 text-ink">
                  {title}
                </h3>
                <p className="mt-3 max-w-[34em] text-copy text-pretty text-ink-soft">
                  {body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* --- No hosting? -------------------------------------------- */}
        <section className={`reveal ${wrap} ${section}`}>
          <h2 className={`text-center ${h2Class}`}>{t.hosting.title}</h2>
          <p className="mx-auto mt-5 max-w-[33em] text-center text-body text-pretty text-ink-soft">
            {t.hosting.lede}
          </p>

          <div className="mt-12 rounded-lg bg-paper-panel p-5 min-[900px]:mx-auto min-[900px]:max-w-[1136px] min-[900px]:p-8">
            <ul className="grid list-none gap-4 min-[900px]:grid-cols-2">
              {t.hosting.items.map(({ title, body }, i) => (
                <li
                  key={title}
                  className="rounded-md border border-line bg-paper p-6 min-[900px]:p-10"
                >
                  <Image src={hostingIcons[i]} alt="" width={56} height={56} loading="lazy" />
                  <h3 className="mt-6 text-ink">
                    {title}
                  </h3>
                  <p className="mt-3 text-copy text-pretty text-ink-soft">
                    {body}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <CtaLink href="#contact">{t.hosting.cta}</CtaLink>
            <CtaLink href="#contact" variant="ghost">
              {t.hosting.more}
            </CtaLink>
          </div>
        </section>

        {/* --- Our Work Showcase -------------------------------------- */}
        <section className={`reveal ${wrap} ${section}`}>
          <h2 className={`text-center ${h2Class}`}>{t.showcase.title}</h2>
          <p className="mx-auto mt-5 max-w-[46em] text-center text-body text-pretty text-ink-soft">
            {t.showcase.lede}
          </p>

          <ul className="mt-12 grid list-none gap-8 min-[640px]:grid-cols-2 min-[900px]:grid-cols-3">
            {showcase.map(({ slug, name }) => (
              <li key={slug}>
                <Image
                  src={`/figma/website-design/work/${slug}.jpg`}
                  alt={t.showcase.alt.replace("{name}", name)}
                  width={836}
                  height={670}
                  loading="lazy"
                  className="h-auto w-full rounded-md border border-line"
                />
              </li>
            ))}
          </ul>

          <div className="mt-12 flex justify-center">
            <CtaLink href="#contact">{t.showcase.cta}</CtaLink>
          </div>
        </section>

        {/* --- Real-Life Experiences ---------------------------------- */}
        <section className={`reveal ${wrap} ${section}`}>
          <h2 className={`text-center ${h2Class}`}>{t.testimonials.title}</h2>
          <div className="mt-12">
            <Testimonials locale={locale} />
          </div>
        </section>

        {/* --- Talk to our Sales team --------------------------------- */}
        <section id="contact" className={`reveal ${wrap} scroll-mt-24 ${section}`}>
          <h2 className={`text-center ${h2Class}`}>{t.contact.title}</h2>
          <p className="mx-auto mt-5 max-w-[40em] text-center text-body text-pretty text-ink-soft">
            {t.contact.lede}
          </p>

          <div className="mt-12 rounded-lg bg-paper-panel p-6 min-[900px]:p-16">
            <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,460px)_minmax(0,1fr)] min-[900px]:gap-20">
              <div>
                <SalesForm locale={locale} />
              </div>

              <AfterYouSend locale={locale} />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} path={path} />
    </>
  );
}
