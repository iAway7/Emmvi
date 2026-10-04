import Image from "next/image";

import { CalendlyButton } from "@/components/calendly-button";
import { ContactForm } from "@/components/contact-form";
import { FaqSchema } from "@/components/faq-schema";
import { CtaLink } from "@/components/cta-link";
import { FaqAccordion } from "@/components/faq-accordion";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StageTimeline, type Stage } from "@/components/services/stage-timeline";
import { GhlIllustration } from "@/components/services/ghl-illustrations";
import {
  catalogue,
  connectLogos,
  gohighlevelCopy,
} from "@/lib/copy/gohighlevel";
import { localizePath, type Locale } from "@/lib/i18n";

/**
 * Pagina de servicio del posicionamiento nuevo, no una replica del Figma.
 * Plantilla de /services/gohighlevel-automation y /es/services/
 * gohighlevel-automation; el texto vive en lib/copy/gohighlevel.ts.
 *
 * ## El diseno sale de "emmvi GHL Recorrido"
 *
 * Portado del HTML que entrego el usuario el 2026-09-25. Lo que trae de nuevo
 * respecto a la version anterior es **el recorrido**: la pieza deja de ser una
 * lista de lo que se monta y pasa a seguir una sola consulta —llega a las
 * 21:47, se contesta en 34 segundos, se persigue al dia siguiente, se cierra—
 * que reaparece en el demo del hero, en la banda violeta y, negada, en los
 * sintomas.
 *
 * Sus colores ya eran los del sistema (#171717, #423af4, #847ff8, #f9fafd,
 * #eaeaea), asi que van por token. Lo que no coincidia:
 *
 * - **El ancho.** El archivo usa 1140px y aqui va el `wrap` del sitio: la
 *   cabecera y el pie ya se alinean a ese, y el contenido mas estrecho dejaba
 *   la nav flotando mas ancha que la pagina.
 * - **Los tamanos de texto.** El archivo trae quince medidas a mano, de 11px a
 *   56px. Van a la escala de `globals.css`, que ademas es lo que la regla
 *   `no-restricted-syntax` de ESLint obliga.
 * - **Los radios**, de 10/16/22px a los 8/12/32 de DESIGN.md.
 * - **El degradado violeta** (#423af4 a #5a52f6) si se conserva: es la unica
 *   banda del sitio que llena el ancho de violeta, y plano se veia mas duro.
 *
 * ## Tres cosas del archivo que NO se publican tal cual
 *
 * 1. **"We are a certified admin and automation partner".** No lo somos: el
 *    usuario lo confirmo al montar esta pagina y la version anterior ya
 *    respondia que no. Afirmar una certificacion inexistente es lo contrario
 *    de la regla de PRODUCT.md y se cae en la primera llamada.
 * 2. **El testimonio de Adriana venia reescrito.** El archivo le pone una
 *    frase que ella no dijo. Va el texto real, el mismo que usan la home y
 *    /services/email-marketing.
 * 3. **"HighLevel, Inc."** en el aviso de marca. La entidad es GoHighLevel
 *    Inc.: lo dice el pie de su propio sitio ("HighLevel LLC, a subsidiary of
 *    GoHighLevel Inc."). Y el archivo escribia "Emmvi" con mayuscula.
 *
 * Ademas, "enquiry" pasa a **"quote request"** en todo el cuerpo, que es el
 * vocabulario elegido y el que ya usa la home.
 */

/** Las dos cifras se cuentan, no se escriben: un "52" a mano queda falso en
 *  cuanto alguien toca el array, y son las que cargan el argumento. */
const allItems = catalogue.flat();
const platformCount = new Set(allItems.map((i) => i.name)).size;
const oursCount = allItems.filter((i) => i.ours).length;
const counts = {
  ours: oursCount,
  total: platformCount,
  rest: platformCount - oursCount,
};

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";
const section = "py-16 lg:py-[104px]";
/** El archivo pone los rotulos a 11px; la escala arranca en `text-small` (14),
 *  que es lo mas cerca sin estrenar una medida para esta sola pagina. */
const eyebrow = "text-small font-bold tracking-[0.16em] uppercase";

export function GohighlevelPage({ locale }: { locale: Locale }) {
  const t = gohighlevelCopy[locale];

  /** El catalogo con el nombre de cada etapa en el idioma de la pagina; las
   *  funciones son las del producto y no se traducen. */
  const platform: Stage[] = catalogue.map((items, i) => ({
    stage: t.catalogue.stages[i],
    items: [...items],
  }));

  return (
    <>
      {/* Las preguntas, declaradas. No es por el carrusel de Google, que desde
          2023 solo sale en sitios de administracion y salud: es para las
          maquinas que leen la pagina y sintetizan la respuesta, y este FAQ es
          casi literal lo que alguien escribe antes de contratar esto. Mientras
          la pagina pida `noindex` no la lee nadie, pero el marcado ya esta
          cuando se publique. */}
      <FaqSchema
        locale={locale}
        items={t.faq.items}
        path="/services/gohighlevel-automation"
      />
      <SiteHeader locale={locale} path="/services/gohighlevel-automation" />

      <main id="top">
        {/* --- Hero: el texto y el recorrido empezando -------------------- */}
        <section className={`${wrap} pt-12 pb-16 lg:pt-[88px] lg:pb-20`}>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className={`${eyebrow} text-violet`}>{t.hero.eyebrow}</p>
              <h1 className="mt-6 text-ink">{t.hero.title}</h1>
              {/* `text-body` (18px fijo) y no `text-lede`, que escala hasta 24
                  en escritorio. El token, no una medida a mano: lo obliga la
                  regla `no-restricted-syntax` de ESLint, y asi el interlineado
                  viene con el tamano en vez de quedarse el de la entradilla. */}
              <p className="mt-6 max-w-[46ch] text-body text-pretty text-ink-soft">
                {t.hero.lede}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <CtaLink href="#contact">{t.hero.cta}</CtaLink>
                <CtaLink href="#build" variant="outline">
                  {t.hero.ctaSecondary}
                </CtaLink>
              </div>
            </div>

            {/* La escena del demo: el presupuesto de un martes por la noche,
                la respuesta 34 segundos despues y la oportunidad pasando a
                Replied. Es la misma conversacion que el demo en HTML que habia
                aqui, ahora en el estilo de ilustracion del sitio. */}
            <GhlIllustration
              name="hero"
              locale={locale}
              label={t.hero.label}
              className="w-full max-md:mx-auto max-md:max-w-[340px]"
            />
          </div>
        </section>

        {/* --- El recorrido, a ancho completo ----------------------------- */}
        {/* Degradado y no violeta plano: es del archivo, y es la unica banda
            del sitio que llena el ancho de violeta. Los rotulos van sobre
            `bg-ink-deep` para no depender del punto del degradado que les toque. */}
        <section className="bg-[linear-gradient(100deg,#423af4_0%,#5a52f6_100%)]">
          <ol className="mx-auto grid max-w-[var(--container-wrap)] list-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {t.journey.map((j, i) => (
              <li
                key={j.label}
                className={`border-white/28 px-6 py-9 lg:px-8 lg:py-11 ${
                  i < t.journey.length - 1 ? "max-sm:border-b" : ""
                } ${i < 2 ? "sm:max-lg:border-b" : ""} ${
                  i % 2 === 0 ? "sm:max-lg:border-r" : ""
                } ${i < t.journey.length - 1 ? "lg:border-r" : ""}`}
              >
                <span className="inline-flex rounded-full bg-ink-deep px-3 py-1.5 text-small font-bold text-white">
                  {j.label}
                </span>
                <p className="mt-4 font-mono text-stat leading-none font-bold text-white">
                  {j.figure}
                </p>
                <p className="mt-2 text-small text-white">{j.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* --- La licencia no es el sistema ------------------------------- */}
        <section className={`${wrap} ${section}`}>
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className={`${eyebrow} text-ink-soft`}>{t.licence.eyebrow}</p>
              <h2 className="mt-5 text-ink">{t.licence.title}</h2>
              <p className="mt-5 max-w-[34ch] text-copy text-pretty text-ink-soft">
                {t.licence.lede}
              </p>
              <GhlIllustration
                name="licence"
                locale={locale}
                label={t.licence.label}
                className="mt-8 w-full max-w-[520px]"
              />
            </div>
            <ul className="list-none">
              {t.licence.symptoms.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3.5 border-b border-line py-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-ink-deep"
                  />
                  <p className="text-copy text-pretty text-ink-soft">{s}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- Lo que cambia, sobre oscuro -------------------------------- */}
        <section className="bg-ink-deep bg-noise">
          <div className={`${wrap} ${section}`}>
            {/* Titular y parrafo en dos columnas, como "The licence is not
                the system" mas arriba. Apilados eran once lineas seguidas con
                media pantalla vacia al lado: el titular ya ocupa cuatro, y el
                parrafo crecio a siete al nombrar las funciones.

                Las dos cifras salen del catalogo que HighLevel publica en su
                web: cincuenta y dos funciones, quince de las que tocan a un
                presupuesto. Van con tres ejemplos y no con cinco, que es lo
                que hacia falta para que el numero se entienda sin la lista que
                se quedo fuera al portar este diseno. */}
            <div className="grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-14">
              <div>
                <p className={`${eyebrow} text-violet-light`}>
                  {t.changes.eyebrow}
                </p>
                <h2 className="mt-4 max-w-[14ch] text-white">{t.changes.title}</h2>
              </div>
              {/* Las cifras entran por `intro(counts)`: una sola cadena, asi
                  que no hay salto de linea que JSX pueda comerse delante de la
                  expresion (antes se publicaba "work.52 features" pegado). */}
              <p className="max-w-[46ch] text-lede text-pretty text-white/78">
                {t.changes.intro(counts)}
              </p>
            </div>
            {/* Tarjetas, no bloques sueltos con filete: es la forma de las
                de /services/website-design, en oscuro.

                El relleno va con `bg-white/4` y no con un gris fijo: sobre el
                #101010 de la seccion queda a un paso por encima del fondo, y
                si algun dia cambia el fondo la tarjeta le sigue sola. El borde
                al 10% es lo que dibuja el canto sin convertirse en una reja.

                El filete violeta del diseno original no se pierde, pasa a ser
                la regla corta bajo el numeral: dentro de una tarjeta, un borde
                superior de color competia con el canto de la propia tarjeta. */}
            <ol className="mt-10 grid list-none gap-4 sm:grid-cols-2 lg:mt-14">
              {t.changes.items.map((c, i) => (
                <li
                  key={c.title}
                  className="rounded-md border border-white/10 bg-white/4 p-6 lg:p-7"
                >
                  <p
                    aria-hidden="true"
                    className="font-mono text-small font-bold text-violet-light"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-3 block h-0.5 w-8 bg-violet-light"
                  />
                  <h3 className="mt-4 text-white">{c.title}</h3>
                  <p className="mt-2.5 text-copy text-pretty text-white/78">
                    {c.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* --- Lo que se monta dentro ------------------------------------- */}
        {/* --- El catalogo entero, con lo nuestro marcado ------------------ */}
        {/* Va justo detras de la banda que nombra las dos cifras, para que el
            lector pueda contarlas en vez de creerselas.

            Por etapa y en tarjetas, no en cinco columnas de texto: la version
            anterior listaba las 52 en columnas y a 52 lineas seguidas no se
            escanea. Cada tarjeta se lee sola.

            Las que no montamos van en `ink-soft` (5.74:1) y no en un gris mas
            claro: apagadas, no ilegibles. Y el hueco del tick se reserva
            igualmente, para que los nombres queden alineados. */}
        <section className={`${wrap} ${section}`}>
          {/* El logo oficial de HighLevel, a su tamano de rotulo y no de
              cartel: aqui identifica de quien es el catalogo que viene debajo,
              que es uso nominativo. Grande se leeria como sello de partner, y
              no lo somos —el aviso del pie y el FAQ lo dicen—.

              El SVG es el archivo de marca sin tocar, con su clearspace: no se
              recolorea ni se recorta. */}
          <Image
            src="/tools/gohighlevel.svg"
            alt={t.catalogue.logoAlt}
            width={1000}
            height={225}
            className="h-7 w-auto"
          />
          {/* "All 52, and the 19" pedia que ya supieras de que iban esos dos
              numeros: fuera de contexto no decia nada. El titular dice ahora
              como se lee la lista, que es lo unico que hace falta saber para
              mirarla; las cifras viven en el parrafo, donde tienen sitio para
              explicarse. */}
          <p className={`${eyebrow} mt-5 text-ink-soft`}>{t.catalogue.eyebrow}</p>
          <h2 className="mt-5 max-w-[24ch] text-balance text-ink">
            {t.catalogue.title}
          </h2>
          <p className="mt-5 max-w-[48ch] text-copy text-pretty text-ink-soft">
            {t.catalogue.intro(counts)}
          </p>

          {/* Recorrido y no cinco tarjetas apiladas: las etapas del catalogo
              de HighLevel son el orden en que pasa una consulta, no cinco
              cajones. La forma dice lo mismo que el contenido, que ademas es
              el tema de la pagina entera.

              El componente renderiza las cinco siempre y oculta las que no
              tocan, asi que el buscador ve las 52 funciones sin pulsar nada. */}
          <div className="mt-8 lg:mt-10">
            <StageTimeline
              stages={platform}
              label={t.catalogue.timelineLabel}
              locale={locale}
            />
          </div>
        </section>

        <section id="build" className="scroll-mt-24 bg-paper-panel">
          <div className={`${wrap} ${section}`}>
            <p className={`${eyebrow} text-ink-soft`}>{t.build.eyebrow}</p>
            <h2 className="mt-5 max-w-[24ch] text-ink">{t.build.title}</h2>
            <p className="mt-5 max-w-[40ch] text-copy text-pretty text-ink-soft">
              {t.build.lede}
            </p>

            {/* Los dos primeros van en tarjeta grande y los cuatro siguientes
                en chica: es la jerarquia del archivo, y dice cual es el
                trabajo que de verdad se compra. */}
            <div className="mt-8 grid gap-4 lg:mt-10 lg:grid-cols-2">
              {t.build.lead.map((b) => (
                <article
                  key={b.n}
                  className="rounded-md border border-line bg-paper p-5 lg:p-6"
                >
                  <p className="font-mono text-small font-bold text-violet">
                    {b.n}
                  </p>
                  <h3 className="mt-2 text-ink">{b.title}</h3>
                  <p className="mt-2.5 text-copy text-pretty text-ink-soft">
                    {b.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.build.rest.map((b) => (
                <article
                  key={b.n}
                  className="rounded-md border border-line bg-paper px-5 py-4"
                >
                  <p className="font-mono text-small font-bold text-ink-soft">
                    {b.n}
                  </p>
                  <p className="mt-1.5 text-ui font-bold text-balance text-ink">
                    {b.title}
                  </p>
                  <p className="mt-1.5 text-small text-pretty text-ink-soft">
                    {b.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- La llamada que nadie coge ---------------------------------- */}
        {/* El recorrido del hero entra por un formulario a las 21:47. Esta es
            la misma historia por el otro canal, y para quien vive de instalar
            es la objecion mas cara: el que llama y no recibe respuesta no
            espera, llama al siguiente de la lista.

            Va aqui, detras de "lo que montamos dentro", porque a esta altura
            el lector ya sabe que se construye y esto es el ejemplo que mas
            duele. Antes del recorrido violeta habria sido una segunda foto
            del "despues" sin haber contado todavia el problema.

            Con escena propia y no con una tarjeta mas: una llamada perdida se
            entiende mirandola, y la pagina ya tiene lenguaje para dibujarla. */}
        <section className={`${wrap} ${section}`}>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className={`${eyebrow} text-ink-soft`}>
                {t.missedCall.eyebrow}
              </p>
              <h2 className="mt-5 max-w-[16ch] text-ink">
                {t.missedCall.title}
              </h2>
              <p className="mt-5 max-w-[44ch] text-copy text-pretty text-ink-soft">
                {t.missedCall.body}
              </p>
            </div>
            <GhlIllustration
              name="missedcall"
              locale={locale}
              label={t.missedCall.label}
              className="w-full max-w-[560px] lg:justify-self-end"
            />
          </div>
        </section>

        {/* --- El orden de trabajo ---------------------------------------- */}
        <section className={`${wrap} ${section}`}>
          {/* Antes decia "Knowing which fifteen is half the job". El numero
              venia de la lista de las 52 funciones con 15 marcadas, que esta
              version ya no lleva: sin ella el titular referenciaba una cifra
              suelta tres secciones mas arriba y no se entendia. El 52/15 se
              queda solo donde la frase se explica a si misma. */}
          <h2 className="max-w-[20ch] text-ink">{t.order.title}</h2>
          <p className="mt-5 max-w-[56ch] text-lede text-pretty text-ink-soft">
            {t.order.lede}
          </p>
          {/* Los tres primeros llevan filete violeta y los seis siguientes
              gris: se lee de un vistazo donde esta el grueso del trabajo. */}
          <ol className="mt-8 grid list-none gap-x-8 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3">
            {t.order.items.map((o, i) => (
              <li
                key={o.n}
                className={`py-4 ${
                  i < 3 ? "border-t-2 border-violet" : "border-t border-line"
                }`}
              >
                <p
                  className={`font-mono text-small font-bold ${
                    i < 3 ? "text-violet" : "text-ink-soft"
                  }`}
                >
                  {o.n}
                </p>
                <p className="mt-1.5 text-ui font-bold text-balance text-ink">
                  {o.title}
                </p>
                <p className="mt-1.5 text-small text-pretty text-ink-soft">
                  {o.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* --- El flujo real ---------------------------------------------- */}
        <section className="bg-paper-panel">
          <div className={`${wrap} ${section}`}>
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className={`${eyebrow} text-ink-soft`}>{t.flow.eyebrow}</p>
                <h2 className="mt-5 text-ink">{t.flow.title}</h2>
                <p className="mt-2.5 max-w-[42ch] text-copy text-pretty text-ink-soft">
                  {t.flow.lede}
                </p>
                <p className="mt-5 max-w-[46ch] text-copy text-pretty text-ink-soft">
                  {t.flow.body}
                </p>
                {/* Los cuatro bloques del flujo, en palabras. Son los mismos
                    que se ven en la captura de al lado: quien no la abra
                    grande sigue pudiendo leer de que va. */}
                <ul className="mt-4 flex list-none flex-wrap gap-2">
                  {t.flow.blocks.map((b) => (
                    <li
                      key={b}
                      className="rounded-full border border-line bg-paper px-3.5 py-2 text-small font-bold text-ink"
                    >
                      {b}
                    </li>
                  ))}
                  <li className="rounded-full bg-ink-deep px-3.5 py-2 text-small font-bold text-white">
                    {t.flow.end}
                  </li>
                </ul>
              </div>
              {/* El flujo dibujado bloque por bloque, con el texto de cada SMS.
                  Sustituye a la captura real de GoHighLevel, que era el mismo
                  flujo: la captura sigue en public/home si hace falta volver. */}
              <GhlIllustration
                name="flow"
                locale={locale}
                label={t.flow.label}
                className="mx-auto w-full max-w-[520px]"
              />
            </div>
          </div>
        </section>

        {/* --- Con qué se conecta ----------------------------------------- */}
        <section className={`${wrap} ${section}`}>
          <p className={`${eyebrow} text-ink-soft`}>{t.connect.eyebrow}</p>
          <h2 className="mt-5 max-w-[24ch] text-ink">{t.connect.title}</h2>
          <p className="mt-2.5 max-w-[42ch] text-copy text-pretty text-ink-soft">
            {t.connect.lede}
          </p>
          <GhlIllustration
            name="connect"
            locale={locale}
            label={t.connect.label}
            className="mx-auto mt-8 w-full max-w-[900px]"
          />
          {/* El logo de cada marca ocupa el sitio de su nombre. Los archivos
              oficiales ya traen el nombre dentro, asi que ponerlos encima de
              un "Stripe" en negrita lo diria dos veces; quien no ve la imagen
              lo tiene en el `alt`.

              La caja de altura fija los alinea por abajo aunque midan distinto,
              y es la misma que ocupa el nombre escrito de la primera celda. */}
          <div className="mt-7 grid sm:grid-cols-2 lg:mt-8 lg:grid-cols-5">
            {t.connect.items.map((c, i) => {
              const logos = connectLogos[i];
              return (
                <div key={c.name} className="border-t border-ink py-4 pr-5">
                  <div className="flex h-9 items-center gap-4">
                    {logos ? (
                      <>
                        {logos.map((l) => (
                          <Image
                            key={l.src}
                            src={l.src}
                            alt={l.alt}
                            width={l.w}
                            height={l.h}
                            className={`${l.alto} w-auto`}
                          />
                        ))}
                        {logos.map((l) =>
                          l.pendiente ? (
                            <span
                              key={`${l.src}-pendiente`}
                              className="text-ui font-bold text-ink"
                            >
                              {l.pendiente}
                            </span>
                          ) : null,
                        )}
                      </>
                    ) : (
                      <p className="text-ui font-bold text-ink">{c.name}</p>
                    )}
                  </div>
                  <p className="mt-3 text-small text-pretty text-ink-soft">
                    {c.body}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- La web que lo alimenta ------------------------------------- */}
        {/* "¿La web va a parecer una plantilla?" era la unica pregunta de la
            lista que esta pagina no contestaba por ningun lado: la web salia
            como el paso 06 de nueve, en letra pequena, y es de lo que vive
            emmvi.

            La escena contesta ensenandola: dominio propio, marca propia y el
            formulario cayendo en el pipeline. El boton lleva a
            /services/website-design, que es donde esta el trabajo de verdad;
            `localizePath` le pone el prefijo del idioma y la barra final.

            En escritorio la escena va a la izquierda y el texto a la derecha,
            al reves que la llamada perdida: dos secciones seguidas con la
            imagen del mismo lado se leen como una sola. El orden se cambia con
            `order` y no en el DOM porque en movil las columnas se apilan como
            esten escritas, y el titular tiene que ir antes que el dibujo. */}
        <section className={`${wrap} ${section}`}>
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="lg:order-2">
              <p className={`${eyebrow} text-ink-soft`}>{t.website.eyebrow}</p>
              <h2 className="mt-5 max-w-[16ch] text-ink">
                {t.website.title}
              </h2>
              <p className="mt-5 max-w-[44ch] text-copy text-pretty text-ink-soft">
                {t.website.body}
              </p>
              <div className="mt-7">
                <CtaLink
                  href={localizePath("/services/website-design", locale)}
                  variant="outline"
                >
                  {t.website.cta}
                </CtaLink>
              </div>
            </div>
            <GhlIllustration
              name="website"
              locale={locale}
              label={t.website.label}
              className="w-full max-w-[560px] lg:order-1"
            />
          </div>
        </section>

        {/* --- Cómo funciona, sobre oscuro -------------------------------- */}
        <section className="bg-ink-deep bg-noise">
          <div
            className={`${wrap} ${section} flex flex-wrap items-start gap-8 lg:gap-14`}
          >
            <div className="min-w-0 flex-[1_1_560px]">
              <p className={`${eyebrow} text-violet-light`}>{t.how.eyebrow}</p>
              {/* Grid y no `flex-wrap` con base de 130px: a 375 los tres
                  pasos entraban como dos arriba y el tercero solo abajo a
                  todo lo ancho, que de un 1-2-3 hace una escalera rota. En
                  columna se leen en orden y los titulos dejan de partirse en
                  dos lineas; a partir de `sm` vuelven a ser tres. */}
              <ol className="mt-7 grid list-none gap-6 sm:grid-cols-3 lg:gap-7">
                {t.how.steps.map((s) => (
                  <li key={s.n} className="min-w-0">
                    <p className="font-mono text-stat leading-none font-bold text-violet-light">
                      {s.n}
                    </p>
                    <p className="mt-3 text-ui font-bold text-white">
                      {s.title}
                    </p>
                    <p className="mt-2 text-small text-white/78">{s.body}</p>
                  </li>
                ))}
              </ol>
            </div>
            {/* El `pt-7` alinea el boton con el primer numeral, pero solo
                cuando las dos columnas van lado a lado. Apiladas era un hueco
                muerto encima del boton. */}
            <div className="flex min-w-0 flex-[1_1_260px] flex-col items-start gap-3 lg:pt-7">
              {/* El archivo pedia oscuro con borde blanco; va con la variante
                  `light`, que es la que la home ya usa para un CTA sobre panel
                  oscuro. Una variante mas para una sola pagina no compensa. */}
              <CalendlyButton variant="light">{t.how.cta}</CalendlyButton>
              <p className="max-w-[34ch] text-small text-white/60">
                {t.how.note}
              </p>
            </div>
          </div>
        </section>

        {/* --- Lo que no hacemos ------------------------------------------ */}
        <section className={`${wrap} ${section}`}>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
            <div>
              <h2 className="text-ink">{t.refusals.title}</h2>
              <p className="mt-2.5 max-w-[30ch] text-copy text-pretty text-ink-soft">
                {t.refusals.lede}
              </p>
            </div>
            <ul className="list-none">
              {t.refusals.items.map((r, i) => (
                <li
                  key={r.title}
                  className={`grid grid-cols-[28px_1fr] gap-3.5 py-4 ${
                    i < t.refusals.items.length - 1 ? "border-b border-line" : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="text-h4 leading-snug text-violet"
                  >
                    &#10005;
                  </span>
                  <div>
                    <p className="text-ui font-bold text-balance text-ink">
                      {r.title}
                    </p>
                    <p className="mt-1.5 text-copy text-pretty text-ink-soft">
                      {r.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- Testimonio y preguntas ------------------------------------- */}
        <section className="bg-paper-panel">
          <div className={`${wrap} ${section}`}>
            <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
              {/* El texto real de Adriana. El archivo traia una frase
                  reescrita que ella no dijo; esta es la misma cita que usan la
                  home y /services/email-marketing. */}
              {/* La cita acompana al acordeon en vez de quedarse arriba.

                  Con las once preguntas del analisis de Upwork la columna de
                  la derecha mide 1533px y la cita 241: sin esto quedaban 1292
                  de blanco al lado de un testimonio de cuatro lineas. El
                  `items-start` del grid es justo lo que lo hace posible: la
                  celda mide lo que la fila, pero la cita mide su contenido, y
                  en esa diferencia es por donde viaja. Con `self-stretch` la
                  cita llenaria la celda y no se moveria nada.

                  Solo en escritorio: en movil las dos cosas van apiladas y una
                  cita pegada taparia las preguntas. */}
              <div className="lg:sticky lg:top-28">
              <blockquote className="m-0">
                <p className="text-h3 leading-snug font-medium text-pretty text-ink">
                  {t.testimonial.quote}
                </p>
                <cite className="mt-5 flex items-center gap-3.5 not-italic">
                  <Image
                    src="/testimonials/adriana-patania-1.png"
                    alt=""
                    width={56}
                    height={56}
                    loading="lazy"
                    className="size-14 shrink-0 rounded-full object-cover"
                  />
                  <span className="text-ui">
                    <span className="block font-bold text-ink">
                      {t.testimonial.name}
                    </span>
                    <span className="block text-small text-ink-soft">
                      {t.testimonial.org}
                    </span>
                  </span>
                </cite>
              </blockquote>
              </div>

              {/* El acordeon del sitio, el mismo que la home.

                  Esta pagina lo tenia y lo perdio al portar el diseno del
                  recorrido: quedaron once preguntas abiertas a la vez, que es
                  una pagina de texto, no un FAQ. `FaqAccordion` ya es el unico
                  marcado para las seis paginas que llevan preguntas, asi que
                  volver a el tambien deshace la copia. */}
              <div>
                <p className={`${eyebrow} mb-2 text-ink-soft`}>
                  {t.faq.eyebrow}
                </p>
                <FaqAccordion items={[...t.faq.items]} />
              </div>
            </div>
          </div>
        </section>

        {/* --- Contacto ---------------------------------------------------- */}
        {/* El archivo pintaba tres campos sueltos sin destino. Aqui va el
            `ContactForm` del sitio, que es el que valida, lleva honeypot,
            limita por IP y manda de verdad. En panel blanco sobre el
            degradado: sus campos son claros y sobre violeta no se leen. */}
        <section
          id="contact"
          className="scroll-mt-24 bg-[linear-gradient(100deg,#423af4_0%,#5a52f6_100%)]"
        >
          <div className={`${wrap} ${section}`}>
            <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-14">
              {/* La columna de la izquierda llevaba solo titulo y parrafo, y
                  al lado de un formulario de cuatro campos quedaba vacia.
                  Ahora cuenta que pasa en la media hora y lleva el boton de
                  agendar, que es la via principal en todo el sitio; el
                  formulario es la segunda. */}
              <div>
                <h2 className="text-white">{t.contact.title}</h2>
                <p className="mt-5 max-w-[40ch] text-lede text-pretty text-white">
                  {t.contact.lede}
                </p>
                <ol className="mt-10 m-0 list-none border-t border-white/25 p-0">
                  {t.contact.steps.map((step, i) => (
                    <li
                      key={step.title}
                      className="grid grid-cols-[2rem_1fr] gap-x-4 border-b border-white/25 py-5"
                    >
                      <span
                        aria-hidden="true"
                        className="font-mono text-ui font-bold text-white/70"
                      >
                        {i + 1}
                      </span>
                      <div>
                        <h4 className="text-white">{step.title}</h4>
                        <p className="mt-1 text-copy text-pretty text-white/85">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <CalendlyButton variant="light" className="max-md:w-full">
                    {t.contact.cta}
                  </CalendlyButton>
                  <p className="text-small text-white/85">{t.contact.or}</p>
                </div>
              </div>
              <div className="rounded-lg bg-paper p-6 lg:p-8">
                <ContactForm locale={locale} />
              </div>
            </div>
          </div>
        </section>

        {/* Aviso de marca. La entidad es GoHighLevel Inc. y no "HighLevel,
            Inc." como decia el archivo: lo dice el pie de su propio sitio
            —"HighLevel LLC, a subsidiary of GoHighLevel Inc."—, la filial se
            llama HighLevel y la matriz GoHighLevel. Sin el simbolo (R): el
            estado del registro no se ha comprobado en ninguna oficina de
            marcas. */}
        {/* Sin filete encima: el aviso ya viene detras de una banda violeta a
            ancho completo, que separa de sobra. La regla solo anadia un tercer
            borde en cuatro centimetros. */}
        <aside className={`${wrap} pt-10 pb-14`}>
          <p className="text-small text-pretty text-ink-soft">{t.trademark}</p>
        </aside>
      </main>

      <SiteFooter locale={locale} path="/services/gohighlevel-automation" />
    </>
  );
}
