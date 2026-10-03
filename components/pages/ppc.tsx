import Image from "next/image";

import { CtaLink } from "@/components/cta-link";
import { AfterYouSend } from "@/components/services/after-you-send";
import { FaqAccordion } from "@/components/faq-accordion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CheckIcon } from "@/components/services/icons";
import { SalesForm } from "@/components/services/sales-form";
import { PpcIllustration } from "@/components/services/ppc-illustrations";
import { ppcCopy } from "@/lib/copy/ppc";
import type { Locale } from "@/lib/i18n";

/**
 * Réplica del frame "Services - PPC" del Figma
 * (0niWGidrfk5rCNfWgb3L3z, nodo 165:3225, 1440x8865).
 *
 * Cuarta y última pantalla de servicio del posicionamiento viejo, misma
 * decisión que las otras tres. Comparte shell con ellas.
 *
 * Plantilla compartida por app/(en)/services/ppc/page.tsx y
 * app/(es)/es/services/ppc/page.tsx. El texto vive en lib/copy/ppc.ts, con
 * las notas sobre lo que cambio respecto al Figma; aqui queda lo que es de
 * composicion.
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

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
/**
 * El Figma ponía cuatro de los titulares de esta pantalla a 64px, el tamaño
 * del h1 (ver DESIGN.md). Aquí no se replica: el tamaño lo pone la etiqueta
 * en globals.css y un h2 mide 51px en todo el sitio. Era la única pantalla
 * con secciones al tamaño del h1.
 */
const h2Class = "text-ink";

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
 *
 * Los nombres son marcas y no se traducen, por eso viven aqui y no en el
 * diccionario.
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

/* Igual que en /services/email-marketing: la banda de cifras no se publica,
   porque las cuatro del Figma (-28%, +30%, +40%, -35%) están inventadas. Las
   etiquetas, para cuando haya números medidos: Decrease in Cost-Per-Lead,
   Increase in eCommerce Sales, Increase in Click Through Rate (CTR), Reduction
   in Cost Per Click (CPC). */

/**
 * Los iconos de las cuatro tarjetas de canal, en el mismo orden que
 * `channels` en lib/copy/ppc.ts (Google, Meta, TikTok, LinkedIn). El titulo y
 * el cuerpo salen del diccionario.
 */
const channelIcons = [
  { icon: "/figma/ppc/card-google-ads.svg", alt: "", w: 53 },
  { icon: "/figma/ppc/card-facebook-instagram-ads.svg", alt: "", w: 108 },
  { icon: "/figma/ppc/card-tiktok-ads.svg", alt: "", w: 44 },
  { icon: "/figma/ppc/card-linkedin-ads.svg", alt: "", w: 48 },
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
/**
 * Las cinco chapas del panel, con la posicion del Figma y **el sentido de giro
 * del WordPress**.
 *
 * En el sitio viejo giraban al hacer scroll: Elementor las llevaba con
 * `motion_fx_rotateZ_effect` activo y `motion_fx_motion_fx_scrolling`, y tres
 * de las cinco —Instagram, Google y Facebook— con
 * `motion_fx_rotateZ_direction: "negative"`. Sacado del `_elementor_data` del
 * backup, no reconstruido a ojo: los archivos alli se llaman
 * `Social-Media-Ads-{Google,Facebook,Instagram,Linkedin,TikTok}.svg`.
 *
 * Que no giren todas en el mismo sentido es lo que evita que el grupo se lea
 * como un engranaje. Se conserva.
 */
const chips = [
  { src: "/figma/ppc/chip-google.svg", size: 86, left: "74.92%", top: "11.75%", w: "6.57%", ccw: true },
  { src: "/figma/ppc/chip-tiktok.svg", size: 70, left: "83.18%", top: "18.36%", w: "5.40%" },
  { src: "/figma/ppc/chip-linkedin.svg", size: 96, left: "59.58%", top: "32.18%", w: "7.38%" },
  { src: "/figma/ppc/chip-instagram.svg", size: 84, left: "67.51%", top: "39.43%", w: "6.45%", ccw: true },
  { src: "/figma/ppc/chip-facebook.svg", size: 92, left: "53.33%", top: "62.67%", w: "7.08%", ccw: true },
];

/** Iconos de las cuatro ventajas, en el orden de `benefits.items` del diccionario. */
const benefitIcons = [
  "/figma/ppc/benefit-diversified.svg",
  "/figma/ppc/benefit-expertise.svg",
  "/figma/ppc/benefit-customized.svg",
  "/figma/ppc/benefit-transparency.svg",
];

export function PpcPage({ locale }: { locale: Locale }) {
  const t = ppcCopy[locale];

  return (
    <>
      <SiteHeader locale={locale} path="/services/ppc" />

      <main id="top">
        {/* --- Hero ---------------------------------------------------- */}
        <section className={`${wrap} pt-14 pb-16 lg:pt-[90px] lg:pb-20`}>
          <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,601px)_minmax(0,1fr)] min-[900px]:gap-8">
            <div>
              <p className="inline-flex rounded-sm border border-pink bg-pink-wash px-3 py-1.5 text-small leading-5 text-pink-ink">
                {t.hero.eyebrow}
              </p>
              <h1 className="mt-6 max-w-[601px] text-ink">{t.hero.title}</h1>
              <p className="mt-6 max-w-[34em] text-body text-pretty text-ink-soft">
                {t.hero.lede}
              </p>
              <div className="mt-8">
                <CtaLink href="#contact">{t.hero.cta}</CtaLink>
              </div>
            </div>

            <PpcIllustration
              name="hero"
              locale={locale}
              label={t.hero.label}
              className="w-full max-w-[642px] justify-self-end max-md:mx-auto max-md:max-w-[320px]"
            />
          </div>
        </section>

        {/* --- Banda de plataformas ------------------------------------ */}
        {/* No es la del Figma: ver el comentario de `platforms`. */}
        <section className="reveal">
          <div className={wrap}>
            <p className="text-center text-small text-ink-soft">
              {t.platforms.caption}
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
        <section className={`reveal ${wrap} pt-16 pb-16 lg:pt-24 lg:pb-24`}>
          <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,601px)_minmax(0,1fr)] min-[900px]:gap-8">
            <div>
              <h2 className={h2Class}>{t.roi.title}</h2>
              <p className="mt-6 text-copy text-pretty text-ink-soft">
                {t.roi.body}
              </p>

              <ul className="mt-8 grid list-none gap-3">
                {t.roi.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckIcon className="mt-1 size-4 shrink-0 text-violet" />
                    <span className="text-ui text-ink">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CtaLink href="#contact">{t.roi.cta}</CtaLink>
              </div>
            </div>

            <PpcIllustration
              name="roi"
              locale={locale}
              label={t.roi.label}
              className="w-full max-w-[665px] justify-self-end max-md:mx-auto max-md:max-w-[360px]"
            />
          </div>
        </section>

        {/* --- Skilled Paid Ads Control -------------------------------- */}
        <section className={`reveal ${wrap} pb-16 lg:pb-24`}>
          <div className="grid items-center gap-12 min-[900px]:grid-cols-[minmax(0,715px)_minmax(0,1fr)] min-[900px]:gap-8">
            <div>
              <h2 className={h2Class}>{t.control.title}</h2>
              <p className="mt-8 max-w-[601px] text-copy text-pretty text-ink-soft">
                {t.control.p1}
              </p>
              {/* El Figma escribe "matters most- whether", con guion corto
                  pegado. Es puntuación rota, no decisión de diseño. */}
              <p className="mt-6 max-w-[601px] text-copy text-pretty text-ink-soft">
                {t.control.p2}
              </p>
            </div>

            <PpcIllustration
              name="control"
              locale={locale}
              label={t.control.label}
              className="w-full max-w-[409px] justify-self-center"
            />
          </div>
        </section>

        {/* --- Los cuatro canales -------------------------------------- */}
        <section className={`reveal ${wrap} pb-16 lg:pb-24`}>
          <ul className="grid list-none gap-6 rounded-lg bg-paper-panel p-8 min-[900px]:grid-cols-2">
            {t.channels.map((c, i) => (
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
                  src={channelIcons[i].icon}
                  alt={channelIcons[i].alt}
                  width={channelIcons[i].w}
                  height={48}
                  loading="lazy"
                  className="h-12 w-auto self-start"
                />
                <h3 className="text-ink">{c.title}</h3>
                <p className="text-copy text-pretty text-ink-soft">
                  {c.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* --- What Is Paid Advertising and How Does It Work? ---------- */}
        <section className={`reveal ${wrap} pb-16 lg:pb-24`}>
          <div className="bg-dusk rounded-lg px-8 py-12 min-[900px]:px-18 min-[900px]:py-24">
            {/* Dos columnas, como la seccion "Capture, sell, and retain
                customers." de /services/email-marketing: titulo a la izquierda,
                cuerpo a la derecha. En una sola columna el texto salia a 90
                caracteres por linea —el rango comodo es 45-75— y dejaba 309px
                muertos a la derecha del panel. El `max-w-[34em]` de los
                parrafos es lo que fija la medida en unos 68. */}
            <div className="grid gap-8 min-[900px]:grid-cols-2 min-[900px]:items-start min-[900px]:gap-16">
              <h2 className="text-white">{t.what.title}</h2>

              <div className="min-[900px]:pt-3">
                <p className="max-w-[34em] text-copy text-pretty text-white/85">
                  {t.what.p1}
                </p>
                <p className="mt-6 max-w-[34em] text-copy text-pretty text-white/85">
                  {t.what.p2}
                </p>
                <p className="mt-6 max-w-[34em] text-copy text-pretty text-white/85">
                  {t.what.p3}
                </p>
                {/* El Figma pone aqui el boton negro sobre el panel oscuro: el
                    borde del boton contra el panel da 1.3:1 y se lo come el
                    fondo (WCAG 2.2 SC 1.4.11 pide 3:1). Va la variante clara,
                    la misma que el panel `--night` de la home. */}
                <div className="mt-10">
                  <CtaLink href="#contact" variant="light">
                    {t.what.cta}
                  </CtaLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Types of Paid Ads --------------------------------------- */}
        <section className={`reveal ${wrap} pb-16 lg:pb-24`}>
          {/* `overflow-clip` y no `overflow-hidden`, y la diferencia no es de
              estilo: `hidden` convierte al panel en contenedor de scroll, y
              entonces el `view()` de las chapas se ancla **a el** en vez de a
              la pagina. Como el panel no se desplaza, su rango de scroll es
              cero, el ViewTimeline no resuelve (`currentTime` a null) y las
              chapas no giraban. `clip` recorta igual —radio incluido— sin
              crear contenedor de scroll. */}
          <div className="relative overflow-clip rounded-lg border border-line bg-paper px-8 py-12 min-[900px]:px-16 min-[900px]:py-16">
            <div className="max-w-[705px]">
              <h2 className={h2Class}>{t.types.title}</h2>
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

              <p className="mt-8 text-copy text-pretty text-ink-soft">
                {t.types.p1}
              </p>
              <p className="mt-6 text-copy text-ink-soft">{t.types.p2}</p>

              <ol className="mt-6 grid list-none gap-3">
                {t.types.items.map((item, i) => (
                  <li key={item} className="flex items-baseline gap-4">
                    <span
                      aria-hidden="true"
                      className="w-7 shrink-0 text-body leading-6 font-extrabold text-ink"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-ui font-medium text-ink-soft">
                      {item}
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
                    className={`ppc-chip h-auto w-14 min-[900px]:w-full${
                      c.ccw ? " ppc-chip--ccw" : ""
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex justify-center">
            <CtaLink href="#contact">{t.types.cta}</CtaLink>
          </div>
        </section>

        {/* --- The Benefits of Paid Online Advertising ----------------- */}
        <section className={`reveal ${wrap} pb-16 lg:pb-24`}>
          {/* Las dos columnas van a la proporción del Figma (611 / 122 / 563
              sobre 1296), no a 611 y 563 en píxeles: el contenido aquí mide
              1192, así que en píxeles se pasaban y salían las dos iguales. */}
          <div className="grid gap-8 min-[900px]:grid-cols-[minmax(0,562px)_minmax(0,518px)] min-[900px]:items-start min-[900px]:justify-between min-[900px]:gap-8">
            {/* El Figma escribe "The Benefits of Paid Online Advertising With
                emmvi", que a 64px son cuatro líneas en esta columna. Acortado
                a dos, en la misma forma de pregunta que los otros dos
                titulares de la pantalla. */}
            <h2 className={h2Class}>{t.benefits.title}</h2>
            <p className="text-copy text-pretty text-ink-soft min-[900px]:mt-16">
              {t.benefits.lede}
            </p>
          </div>

          <ul className="mt-12 grid list-none gap-6 min-[900px]:grid-cols-2">
            {t.benefits.items.map((b, i) => (
              <li
                key={b.title}
                className="rounded-md border border-line bg-paper px-10 py-8"
              >
                <Image
                  src={benefitIcons[i]}
                  alt={b.alt}
                  width={133}
                  height={133}
                  loading="lazy"
                  className="size-[133px]"
                />
                <h3 className="mt-4 text-ink">{b.title}</h3>
                <p className="mt-4 text-copy text-pretty text-ink-soft">
                  {b.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* --- FAQ ----------------------------------------------------- */}
        <section className={`reveal ${wrap} pb-16 lg:pb-24`}>
          <h2 className={`text-center ${h2Class}`}>{t.faq.title}</h2>
          <p className="mx-auto mt-5 max-w-[40em] text-center text-ui text-pretty text-ink-soft">
            {t.faq.lede}
          </p>

          <div className="mx-auto mt-12 max-w-[636px]">
            <FaqAccordion items={[...t.faq.items]} />
          </div>

          <div className="mt-10 flex justify-center">
            <CtaLink href="#contact">{t.faq.cta}</CtaLink>
          </div>
        </section>

        {/* --- Talk to our Sales team ---------------------------------- */}
        <section id="contact" className={`reveal ${wrap} scroll-mt-24 py-16 lg:py-[104px]`}>
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

      <SiteFooter locale={locale} path="/services/ppc" />
    </>
  );
}
