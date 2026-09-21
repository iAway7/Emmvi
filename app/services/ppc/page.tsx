import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaLink } from "@/components/cta-link";
import { AfterYouSend } from "@/components/services/after-you-send";
import { FaqAccordion, type FaqItem } from "@/components/services/faq-accordion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CheckIcon } from "@/components/services/icons";
import { SalesForm } from "@/components/services/sales-form";
import { pageMetadata } from "@/lib/site";

/**
 * Réplica del frame "Services - PPC" del Figma
 * (0niWGidrfk5rCNfWgb3L3z, nodo 165:3225, 1440x8865).
 *
 * Cuarta y última pantalla de servicio del posicionamiento viejo, misma
 * decisión que las otras tres. Comparte shell con ellas.
 *
 * Ojo con el ancho: este frame mide **1440**, no los 1400 de los otros tres.
 * El contenido sigue en 1296 con canal de 72, así que el ancho de contenido no
 * cambia y `--container-wrap` vale igual; lo que cambia es el margen exterior,
 * que aquí no se replica porque el layout es fluido.
 *
 * Tres cosas del frame no se publican tal cual, todas por la misma regla de
 * PRODUCT.md — nada de cifras sin medir ni logos sin permiso:
 *  - La banda de "Brands we work with" son Google Premier Partner, Amazon Ads,
 *    Bing Ads y Meta Business Partners. Dos de esos cuatro son **sellos de
 *    acreditación**: publicarlos afirma una certificación que no está
 *    verificada. Va una banda de plataformas, etiquetada.
 *  - Las cuatro cifras (-28%, +30%, +40%, -35%) son métricas inventadas. Van
 *    las etiquetas y el hueco, como en Email Marketing.
 *  - El "311% on average" de la lista del hero es la misma cifra inventada en
 *    línea de texto.
 */

export const metadata: Metadata = pageMetadata({
  path: "/services/ppc",
  title: "PPC",
  description:
    "Unlock the potential of your business with our PPC expertise. Drive targeted traffic, maximize ROI, and experience growth like never before.",
  legacy: true,
});

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const h2Class = "text-h2 text-balance text-ink";
/**
 * Los cuatro titulares grandes de esta pantalla **no son del tamaño de h2**:
 * miden 64px, igual que el h1, con interlineado 1.1–1.2. Medido sobre el render
 * comparando alturas de mayúscula contra "Frequently Asked Questions", que sí
 * es el h2 de 51px de las otras pantallas. `text-display` es un token de
 * tamaño, no de jerarquía, así que se usa en un `<h2>` sin problema.
 */
const h2Big = "text-display text-balance text-ink";

/**
 * Sustituye a la banda del Figma. **Google Premier Partner y Meta Business
 * Partners son sellos de acreditación**, no logos de plataforma: publicarlos
 * afirma un partnership certificado que nadie ha verificado, que es justo lo
 * que PRODUCT.md prohíbe. Amazon Ads y Bing Ads además son dos canales que la
 * página no menciona en ningún otro sitio.
 *
 * Lo que queda, por decisión del usuario: Google Ads, Facebook, Instagram,
 * TikTok y LinkedIn. La etiqueta es la misma corrección que llevan las bandas
 * de Email Marketing y SEO.
 *
 * Meta va **en dos logos, no en el lockup** de la tarjeta de servicio: son dos
 * sitios distintos para quien lee, aunque se compren en la misma cuenta.
 *
 * Los dos iconos sueltos venían **inclinados** (19,3° Facebook y 10,2°
 * Instagram), con la rotación horneada en las coordenadas y no en un
 * `transform`. Se enderezaron girando el contenido y recortando el viewBox al
 * icono: los dos son cuadrados de 40×40 dentro de una caja mayor.
 *
 * Microsoft Advertising estaba y se quitó: el único archivo disponible es el
 * wordmark "Bing ads", nombre retirado en 2019, y en una página que vende PPC
 * eso se nota. Queda sin usar en `microsoft-advertising.svg`; vuelve a entrar
 * cuando haya el lockup actual.
 *
 * Amazon Ads se queda fuera a propósito aunque el Figma lo dibuje: es retail
 * media y solo sirve a quien vende producto en Amazon, que no es el cliente de
 * esta casa. El archivo está en `public/figma/ppc/logo-amazon-ads.svg` si
 * alguna vez entra un ecommerce.
 */
const platforms = [
  { src: "/figma/ppc/card-google-ads.svg", name: "Google Ads", w: 53, h: 48 },
  // Facebook e Instagram van sueltos, no como el lockup de la tarjeta: son dos
  // sitios distintos para quien lee, aunque se compren en la misma cuenta.
  { src: "/figma/ppc/logo-facebook.svg", name: "Facebook Ads", w: 48, h: 48 },
  { src: "/figma/ppc/logo-instagram.svg", name: "Instagram Ads", w: 48, h: 48 },
  { src: "/figma/ppc/card-tiktok-ads.svg", name: "TikTok Ads", w: 44, h: 48 },
  { src: "/figma/ppc/card-linkedin-ads.svg", name: "LinkedIn Ads", w: 48, h: 48 },
];

/**
 * El segundo punto del Figma dice "Paid ads management boosting conversions by
 * 311% on average". Esa cifra no está medida, así que se cae — no el punto.
 *
 * El tercero viene roto en el archivo: "Visually fun data reports ‍real-time
 * data reports on KPIs" repite "data reports" porque el original une dos
 * fragmentos con un ZWJ. Es errata, como "Reponsive Design" en website-design.
 */
const highlights = [
  "A team of certified paid advertising experts",
  "Paid ads management focused on conversions",
  "Visually fun, real-time data reports on KPIs",
  "Omni-channel PPC management services",
];

/* Igual que en /services/email-marketing: la banda de cifras no se publica,
   porque las cuatro del Figma (-28%, +30%, +40%, -35%) están inventadas. Las
   etiquetas, para cuando haya números medidos: Decrease in Cost-Per-Lead,
   Increase in eCommerce Sales, Increase in Click Through Rate (CTR), Reduction
   in Cost Per Click (CPC). */

const channels = [
  {
    title: "Google Ads",
    body: "Bypassing organic search results, Google Ads puts your message in front of people who are already searching for what you have to offer. Ads are displayed at the top of SERPs, which means they will be seen by potential customers.",
    icon: "/figma/ppc/card-google-ads.svg",
    alt: "",
    w: 53,
  },
  {
    title: "Facebook and Instagram Ads",
    body: "Get your message in front of billions of active monthly users on the world’s largest social media platform. We target your audience with laser precision, whether they’re scrolling through their newsfeed, looking for something specific, or using Facebook to research products and services.",
    icon: "/figma/ppc/card-facebook-instagram-ads.svg",
    alt: "",
    w: 108,
  },
  {
    title: "TikTok Ads",
    body: "With over 1 billion active monthly users, TikTok is one of the fastest-growing social media platforms. We create engaging, short-form videos that capture the attention of your target audience and prompt them to take action.",
    icon: "/figma/ppc/card-tiktok-ads.svg",
    alt: "",
    w: 44,
  },
  {
    title: "LinkedIn Ads",
    body: "Allow your brand to be seen by professionals on the world’s largest professional network. We create ads that drive awareness, engagement, and conversions by targeting your ideal customer with powerful filters.",
    icon: "/figma/ppc/card-linkedin-ads.svg",
    alt: "",
    w: 48,
  },
];

const adTypes = [
  "Search engine marketing (SEM)",
  "Display advertising",
  "Social media advertising",
  "Google shopping advertising",
  "Local services advertising",
  "Remarketing advertising",
];

/**
 * Las cinco chapas que flotan a la derecha del panel "Types of Paid Ads". Son
 * decoración pura —el SVG trae el círculo blanco, su borde y la inclinación
 * horneados—, así que van `aria-hidden`: los cuatro canales ya están nombrados
 * en texto en las tarjetas de arriba.
 *
 * Posiciones en % de la caja del panel (1296x670 en el Figma), para que sigan
 * la misma curva a cualquier ancho. Por debajo de 900px no caben sobre el
 * texto y pasan a una fila centrada bajo la lista.
 */
const chips = [
  { src: "/figma/ppc/chip-google.svg", size: 86, left: "74.92%", top: "11.75%", w: "6.57%" },
  { src: "/figma/ppc/chip-tiktok.svg", size: 70, left: "83.18%", top: "18.36%", w: "5.40%" },
  { src: "/figma/ppc/chip-linkedin.svg", size: 96, left: "59.58%", top: "32.18%", w: "7.38%" },
  { src: "/figma/ppc/chip-instagram.svg", size: 84, left: "67.51%", top: "39.43%", w: "6.45%" },
  { src: "/figma/ppc/chip-facebook.svg", size: 92, left: "53.33%", top: "62.67%", w: "7.08%" },
];

const benefits = [
  {
    title: "Diversified Service",
    body: "Emmvi goes beyond mere paid advertising; we provide a diverse array of customizable digital marketing services tailored to suit your specific requirements.",
    icon: "/figma/ppc/benefit-diversified.svg",
    alt: "An isometric gear linked to three cubes.",
  },
  {
    title: "Expertise Within Our Walls",
    body: "Our in-house team comprises experts proficient in every facet of digital marketing. From crafting campaigns to devising strategies, and thorough analysis to comprehensive reporting, we’ve got it all covered.",
    icon: "/figma/ppc/benefit-expertise.svg",
    alt: "An isometric browser window beside a bar chart.",
  },
  {
    title: "Customized Solutions",
    body: "Recognizing the uniqueness of each business, we provide customized solutions crafted specifically for your needs. We invest time in understanding your business, goals, and target audience before formulating a personalized plan of action.",
    icon: "/figma/ppc/benefit-customized.svg",
    alt: "An isometric dartboard with an arrow in the bullseye.",
  },
  {
    title: "Transparency and Communication",
    body: "At Emmvi, we prioritize transparency and open communication. You’ll stay informed about your campaign’s progress and budget allocation. Regular reports and analyses ensure you witness the tangible results of our dedicated efforts.",
    icon: "/figma/ppc/benefit-transparency.svg",
    alt: "An isometric envelope with a bar chart rising out of it.",
  },
];

/**
 * Como en Email Marketing y SEO: el Figma escribe las siete preguntas y
 * desarrolla solo la que dibuja abierta. Las otras seis van marcadas.
 *
 * "How does PPC work?" va primera porque es la que el archivo dibuja abierta,
 * aunque en el orden de capas esté al final.
 */
const faqs: FaqItem[] = [
  {
    q: "How does PPC work?",
    a: "In a PPC campaign, advertisers bid on specific keywords, and their ads are displayed when users search for those keywords. Advertisers pay a fee only when their ad is clicked.",
  },
  { q: "What platforms support PPC advertising?" },
  { q: "How can PPC benefit my business?" },
  { q: "Do I have control over my PPC budget?" },
  { q: "How do I choose the right keywords for my PPC campaign?" },
  { q: "How do you measure the success of a PPC campaign?" },
  { q: "What ongoing management is required for a PPC campaign?" },
];

export default function PpcPage() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* --- Hero ---------------------------------------------------- */}
        <section className={`${wrap} pt-14 pb-16 lg:pt-[90px] lg:pb-20`}>
          <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,601px)_minmax(0,1fr)] min-[900px]:gap-8">
            <div>
              <p className="inline-flex rounded-sm border border-pink bg-pink-wash px-3 py-1.5 text-small leading-5 text-pink-ink">
                PPC
              </p>
              <h1 className="mt-6 max-w-[601px] text-display text-balance text-ink">
                Paid Advertising Services to Make Every Click Count
              </h1>
              <p className="mt-6 max-w-[34em] text-body text-pretty text-ink-soft">
                Unlock the potential of your business with our PPC expertise.
                Drive targeted traffic, maximize ROI, and experience growth like
                never before.
              </p>
              <div className="mt-8">
                <CtaLink href="#contact">Get Started</CtaLink>
              </div>
            </div>

            <Image
              src="/figma/ppc/hero.svg"
              alt="Someone holding a phone beside a dartboard struck in the bullseye, ringed by customer avatars."
              width={642}
              height={483}
              priority
              className="h-auto w-full max-w-[642px] justify-self-end"
            />
          </div>
        </section>

        {/* --- Banda de plataformas ------------------------------------ */}
        {/* No es la del Figma: ver el comentario de `platforms`. */}
        <section>
          <div className={wrap}>
            <p className="text-center text-small text-ink-soft">
              Platforms we run ads on
            </p>
            <ul className="mt-7 flex list-none flex-wrap items-center justify-center gap-x-16 gap-y-7 min-[900px]:justify-between">
              {platforms.map((p) => (
                <li key={p.name}>
                  <Image
                    src={p.src}
                    alt={p.name}
                    width={p.w}
                    height={p.h}
                    className="max-w-full"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- Need a Paid Ads Agency to Boost ROI? -------------------- */}
        <section className={`${wrap} pt-16 pb-16 lg:pt-24 lg:pb-24`}>
          <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,601px)_minmax(0,1fr)] min-[900px]:gap-8">
            <div>
              <h2 className={h2Big}>Need a Paid Ads Agency to Boost ROI?</h2>
              <p className="mt-6 text-[1rem] leading-[26px] text-pretty text-ink-soft">
                Ready to reach new customers and supercharge your business? Paid
                advertising is the way to go, but it&rsquo;s not just about
                spending money. You need a friendly, results-driven agency that
                knows how to create winning campaigns, measure success, and boost
                conversions.
              </p>

              <ul className="mt-8 grid list-none gap-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckIcon className="mt-1 size-4 shrink-0 text-violet" />
                    <span className="text-[1rem] leading-6 text-ink">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CtaLink href="#contact">Get Started</CtaLink>
              </div>
            </div>

            <Image
              src="/figma/ppc/boost-roi.svg"
              alt="Someone holding a magnet that pulls in customer avatars, shopping bags and a discount tag."
              width={665}
              height={484}
              loading="lazy"
              className="h-auto w-full max-w-[665px] justify-self-end"
            />
          </div>
        </section>

        {/* --- Skilled Paid Ads Control -------------------------------- */}
        <section className={`${wrap} pb-16 lg:pb-24`}>
          <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,715px)_minmax(0,1fr)] min-[900px]:gap-8">
            <div>
              <h2 className={h2Big}>
                Skilled Paid Ads Control Delivered by Online Advertising Pros
              </h2>
              <p className="mt-8 max-w-[601px] text-[1rem] leading-[26px] text-pretty text-ink-soft">
                We believe in promoting your message across different channels
                and optimizing for conversions. After all, we&rsquo;ve done it
                time and time again.
              </p>
              {/* El Figma escribe "matters most- whether", con guion corto
                  pegado. Es puntuación rota, no decisión de diseño. */}
              <p className="mt-6 max-w-[601px] text-[1rem] leading-[26px] text-pretty text-ink-soft">
                We help you get found when and where it matters most &mdash;
                whether that&rsquo;s on Google, Facebook, TikTok, LinkedIn, or any
                other channel. Our paid advertising agency offers a variety of
                services to help you reach your goals, including but not limited
                to:
              </p>
            </div>

            <Image
              src="/figma/ppc/money-making.svg"
              alt="An isometric stack of coins sitting inside a gear."
              width={409}
              height={409}
              loading="lazy"
              className="h-auto w-full max-w-[409px] justify-self-center"
            />
          </div>
        </section>

        {/* --- Los cuatro canales -------------------------------------- */}
        <section className={`${wrap} pb-16 lg:pb-24`}>
          <ul className="grid list-none gap-6 rounded-lg bg-paper-panel p-8 min-[900px]:grid-cols-2">
            {channels.map((c) => (
              <li
                key={c.title}
                className="flex flex-col gap-4 rounded-md border border-line bg-paper px-10 py-8"
              >
                {/* Caja fija de 48 de alto: los cuatro logos tienen anchos
                    distintos (44 a 108) y comparten altura en el original.
                    `self-start` es obligatorio: en una columna flex el
                    `align-items: stretch` por defecto estira un `w-auto` hasta
                    el ancho de la tarjeta, y el SVG se centraba dentro de una
                    caja de 470 px en vez de quedar pegado a la izquierda. */}
                <Image
                  src={c.icon}
                  alt={c.alt}
                  width={c.w}
                  height={48}
                  loading="lazy"
                  className="h-12 w-auto self-start"
                />
                <h3 className="text-h3 text-ink">{c.title}</h3>
                <p className="text-[1rem] leading-[26px] text-pretty text-ink-soft">
                  {c.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* --- What Is Paid Advertising and How Does It Work? ---------- */}
        <section className={`${wrap} pb-16 lg:pb-24`}>
          <div className="bg-dusk rounded-lg px-8 py-12 min-[900px]:px-18 min-[900px]:py-24">
            <div className="max-w-[723px]">
              <h2 className="text-display text-balance text-white">
                What Is Paid Advertising and How Does It Work?
              </h2>
              <p className="mt-10 text-[1rem] leading-[26px] text-pretty text-white/85">
                Paid advertising is when businesses pay to put their ads on
                platforms like Google, Facebook, Instagram, and LinkedIn.
                It&rsquo;s a powerful online marketing method. Using services like
                PPC campaign management, businesses can place ads strategically to
                find the right audience.
              </p>
              <p className="mt-6 text-[1rem] leading-[26px] text-pretty text-white/85">
                When someone clicks on your ad, they go to your website or a
                special page to learn more. Paid advertising lets you target your
                ideal customer very precisely, making it more likely they&rsquo;ll
                become a paying customer.
              </p>
              <p className="mt-6 text-[1rem] leading-[26px] text-pretty text-white/85">
                While paid advertising helps get new customers, remember,
                it&rsquo;s just part of the whole picture. A successful marketing
                strategy also includes other things like SEO, content marketing,
                and social media.
              </p>
              {/* El Figma pone aquí el botón negro sobre el panel oscuro: el
                  borde del botón contra el panel da 1.3:1 y se lo come el
                  fondo (WCAG 2.2 SC 1.4.11 pide 3:1). Va la variante clara,
                  la misma que el panel `--night` de la home. */}
              <div className="mt-10">
                <CtaLink href="#contact" variant="light">
                  Get Started
                </CtaLink>
              </div>
            </div>
          </div>
        </section>

        {/* --- Types of Paid Ads --------------------------------------- */}
        <section className={`${wrap} pb-16 lg:pb-24`}>
          <div className="relative overflow-hidden rounded-lg border border-line bg-paper px-8 py-12 min-[900px]:px-16 min-[900px]:py-16">
            <div className="max-w-[705px]">
              <h2 className={h2Big}>Types of Paid Ads</h2>
              {/* La regla del original son dos tramos: 3px de violeta de marca
                  y una prolongación de 1px más clara. Es decorativa.

                  El segundo tramo era el `#7f7bff` del Figma, que es un tinte
                  del violeta viejo: con el nuevo, los dos tramos dejaban de ser
                  el mismo color. Ahora es el propio token al 60%, así que sigue
                  al violeta que haya. */}
              <div aria-hidden="true" className="mt-4 flex items-center">
                <span className="h-[3px] w-[264px] max-w-[50%] bg-violet" />
                <span className="h-px flex-1 bg-violet/60" />
              </div>

              <p className="mt-8 text-[1rem] leading-[26px] text-pretty text-ink-soft">
                We will help you decide which type of paid ads will be best for
                your business, based on your goals, target audience, and budget,
                but it doesn&rsquo;t hurt to know the basics.
              </p>
              <p className="mt-6 text-[1rem] leading-[26px] text-ink-soft">
                The most common types are:
              </p>

              <ol className="mt-6 grid list-none gap-3">
                {adTypes.map((t, i) => (
                  <li key={t} className="flex items-baseline gap-4">
                    <span
                      aria-hidden="true"
                      className="w-7 shrink-0 text-[1.125rem] leading-6 font-extrabold text-ink"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[1rem] leading-6 font-medium text-ink-soft">
                      {t}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Chapas decorativas: absolutas sobre el panel en desktop, fila
                centrada bajo la lista en móvil, donde no caben sobre el texto. */}
            <ul
              aria-hidden="true"
              className="mt-12 flex list-none flex-wrap items-center justify-center gap-6 min-[900px]:pointer-events-none min-[900px]:absolute min-[900px]:inset-0 min-[900px]:mt-0 min-[900px]:block"
            >
              {chips.map((c) => (
                // La posición va en custom properties y solo se consume a
                // partir de 900px. En `style` suelto el ancho en % se aplicaba
                // también en móvil, donde el `li` no está posicionado: los
                // cinco se encogían a 17px.
                <li
                  key={c.src}
                  className="min-[900px]:absolute min-[900px]:top-[var(--chip-y)] min-[900px]:left-[var(--chip-x)] min-[900px]:w-[var(--chip-w)]"
                  style={
                    {
                      "--chip-x": c.left,
                      "--chip-y": c.top,
                      "--chip-w": c.w,
                    } as React.CSSProperties
                  }
                >
                  <Image
                    src={c.src}
                    alt=""
                    width={c.size}
                    height={c.size}
                    loading="lazy"
                    className="h-auto w-14 min-[900px]:w-full"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex justify-center">
            <CtaLink href="#contact">Get Started</CtaLink>
          </div>
        </section>

        {/* --- The Benefits of Paid Online Advertising ----------------- */}
        <section className={`${wrap} pb-16 lg:pb-24`}>
          {/* Las dos columnas van a la proporción del Figma (611 / 122 / 563
              sobre 1296), no a 611 y 563 en píxeles: el contenido aquí mide
              1192, así que en píxeles se pasaban y salían las dos iguales. */}
          <div className="grid gap-8 min-[900px]:grid-cols-[minmax(0,562px)_minmax(0,518px)] min-[900px]:items-start min-[900px]:justify-between min-[900px]:gap-8">
            {/* El Figma escribe "The Benefits of Paid Online Advertising With
                Emmvi", que a 64px son cuatro líneas en esta columna. Acortado
                a dos, en la misma forma de pregunta que los otros dos
                titulares de la pantalla. */}
            <h2 className={h2Big}>Why Run Your Ads With Us</h2>
            <p className="text-[1rem] leading-8 text-pretty text-ink-soft min-[900px]:mt-16">
              Having gained insights into the fundamentals of paid online
              advertising and its mechanics, let&rsquo;s explore the advantages of
              leveraging our PPC management services:
            </p>
          </div>

          <ul className="mt-12 grid list-none gap-6 min-[900px]:grid-cols-2">
            {benefits.map((b) => (
              <li
                key={b.title}
                className="rounded-md border border-line bg-paper px-10 py-8"
              >
                <Image
                  src={b.icon}
                  alt={b.alt}
                  width={133}
                  height={133}
                  loading="lazy"
                  className="size-[133px]"
                />
                <h3 className="mt-4 text-h3 text-ink">{b.title}</h3>
                <p className="mt-4 text-[1rem] leading-[26px] text-pretty text-ink-soft">
                  {b.body}
                </p>
              </li>
            ))}
          </ul>
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
        <section id="contact" className={`${wrap} scroll-mt-24 py-16 lg:py-[104px]`}>
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
                  <Link
                    href="/privacy-policy/"
                    className="text-ink underline underline-offset-[3px] hover:text-violet"
                  >
                    Privacy Statement
                  </Link>
                  .
                </p>
              </div>

              <AfterYouSend />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
