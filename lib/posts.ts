import { a5ProvenWaysTo } from "@/content/posts/5-proven-ways-to-get-more-leads-for-your-online-business";
import { afterHoursAnsweringService } from "@/content/posts/after-hours-answering-service";
import { appointmentReminderText } from "@/content/posts/appointment-reminder-text";
import { businessTextingForContractors } from "@/content/posts/business-texting-for-contractors";
import { contractorWebsiteDesign } from "@/content/posts/contractor-website-design";
import { crmForContractors } from "@/content/posts/crm-for-contractors";
import { crmForElectricians } from "@/content/posts/crm-for-electricians";
import { crmForPlumbers } from "@/content/posts/crm-for-plumbers";
import { emailAutomationAndFunnel } from "@/content/posts/email-automation-and-funnel-building-the-secret-to-driving-more-sales";
import { harnessingAiWithoutCode } from "@/content/posts/harnessing-ai-without-code-how-crms-and-automation-tools-empower-online-businesses";
import { howEmailMarketingAnd } from "@/content/posts/how-email-marketing-and-automated-series-can-increase-roi";
import { howEmailMarketingHelps } from "@/content/posts/how-email-marketing-helps-maximize-customer-engagement";
import { howToGetMore } from "@/content/posts/how-to-get-more-google-reviews";
import { hvacCrm } from "@/content/posts/hvac-crm";
import { leadSourceTracking } from "@/content/posts/lead-source-tracking";
import { missedCallTextBack } from "@/content/posts/missed-call-text-back";
import { onlineBookingForContractors } from "@/content/posts/online-booking-for-contractors";
import { quoteFollowUp } from "@/content/posts/quote-follow-up";
import { reactivateOldLeads } from "@/content/posts/reactivate-old-leads";
import { roofingCrm } from "@/content/posts/roofing-crm";
import { solarCrm } from "@/content/posts/solar-crm";
import { speedToLead } from "@/content/posts/speed-to-lead";
import { streamlineLeadCaptureAnd } from "@/content/posts/streamline-lead-capture-and-sales-with-a-smarter-crm";
import { streamlineScaleSucceedUsing } from "@/content/posts/streamline-scale-succeed-using-zapier-and-gohighlevel-to-grow-your-business";
import { the2MostUsed } from "@/content/posts/the-2-most-used-style-cores-in-modern-web-design-today";
import { theArtOfUi } from "@/content/posts/the-art-of-ui-design-a-deep-dive-before-website-development";
import { theBest5Web } from "@/content/posts/the-best-5-web-hosting-providers-in-2025";
import { top5BestAi } from "@/content/posts/top-5-best-ai-tools-for-images";
import { top7WebDesign } from "@/content/posts/top-7-web-design-mistakes-that-are-killing-your-conversions-in-2025";
import { turnLeadsIntoLoyal } from "@/content/posts/turn-leads-into-loyal-customers-with-funnels-automations-digital-firepower-powered-by-gohighlevel";
import { unlockingEfficiencyHowGohighlevel } from "@/content/posts/unlocking-efficiency-how-gohighlevel-streamlines-your-business-operations";
import { webflowVsWixThe } from "@/content/posts/webflow-vs-wix-the-ultimate-website-builder-showdown";
import { zapierTheNoCode } from "@/content/posts/zapier-the-no-code-automation-revolution-for-businesses";

/**
 * El blog.
 *
 * No es una seccion nueva: son las nueve URLs que el WordPress anterior dejo
 * indexadas —/blog/ y sus ocho articulos— y que hoy devuelven 404. El
 * contenido original se perdio con el hosting y no esta archivado en ningun
 * sitio (el Wayback Machine solo guardo la home), asi que se reescribe entero.
 * Lo unico que se conserva de cada articulo es la URL, que es lo que tiene
 * valor para el buscador.
 *
 * **Los slugs no se tocan.** Cambiar uno tira el motivo entero de este
 * ejercicio.
 *
 * Los articulos van como bloques y no como MDX ni Markdown a proposito: son
 * piezas fijas, y asi el cuerpo sale con los mismos tokens tipograficos
 * que el resto del sitio sin meter tres dependencias ni un renderizador de
 * Markdown en medio.
 */

/**
 * Fragmento de texto dentro de un parrafo. La cadena suelta es texto llano;
 * el objeto lleva negrita, enlace o las dos.
 *
 * Existe porque los articulos recuperados del WordPress traen 345 `<strong>`
 * y 44 enlaces, y tirarlos al convertir habria perdido las referencias
 * externas y los enlaces internos, que es justo lo que no interesa perder en
 * una restauracion hecha para conservar posicionamiento.
 */
export type Inline = string | { text: string; bold?: boolean; href?: string };

/** Una cadena cuando no hay formato, que es la mayoria de las veces. */
export type Rich = string | readonly Inline[];

export type Block =
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "p"; text: Rich }
  | { kind: "list"; items: readonly Rich[]; ordered?: boolean }
  /**
   * Nota al margen: un limite, una advertencia, lo que no se dice arriba.
   *
   * Sin `tone` es lo que ha sido siempre —filete violeta y texto, sin mas—, y
   * es lo que quiere el uso mas comun hoy: reproducir un mensaje de ejemplo.
   * Ahi un titulillo que ponga "Tip" encima sobraria.
   *
   * Con `tone` se convierte en un aviso con etiqueta e icono, para lo que hoy
   * se disuelve en el cuerpo: el consejo practico y la advertencia. Un lector
   * que baja rapido los ve; en un parrafo normal, no.
   */
  | {
      kind: "aside";
      text: Rich;
      /**
       * `tip` es el consejo accionable; `important` el limite o la
       * advertencia. **Son dos y no cinco a proposito**: en cuanto hay seis
       * colores de aviso, dejan de avisar de nada y el articulo parece un
       * panel de control.
       *
       * Ninguno estrena color. `tip` va en el violeta de marca e `important`
       * en tinta sobre papel, porque DESIGN.md dice que la paleta no crece —
       * el verde del Figma ya se quedo fuera por eso mismo.
       */
      tone?: "tip" | "important";
      /**
       * Sustituye a la etiqueta por defecto ("Tip" / "Important") cuando el
       * aviso pide una mas concreta: "Before you publish", "One limit".
       *
       * En ingles, como todo lo que lee el visitante.
       */
      label?: string;
    }
  | { kind: "image"; src: string; alt: string; width: number; height: number };

/**
 * La etiqueta por defecto de cada tono de `aside`.
 *
 * Vive aqui, con el tipo, y no dentro del componente que la pinta, porque la
 * leen dos sitios: `components/post-body.tsx` para la caja y
 * `lib/markdown.ts` para el `.md`. Con una copia en cada uno, el dia que "Tip"
 * pase a ser otra cosa cambiaria en la pagina y no en lo que lee una maquina.
 */
export const ASIDE_LABELS = {
  tip: "Tip",
  important: "Important",
} as const;

/**
 * Minutos de lectura, contados del cuerpo real y no estimados a ojo.
 *
 * 200 palabras por minuto: es el numero conservador que se usa para texto web
 * —las horquillas habituales van de 200 a 250— y aqui interesa quedarse corto.
 * Prometer 5 minutos y que sean 7 molesta; prometer 7 y que sean 5, no.
 *
 * Las imagenes no suman. El `aside` si: es texto que se lee.
 *
 * Minimo un minuto, porque "0 min" no informa de nada.
 */
function palabrasDe(r: Rich): number {
  if (typeof r === "string") return r.trim().split(/\s+/).filter(Boolean).length;
  return r.reduce(
    (n, i) => n + palabrasDe(typeof i === "string" ? i : i.text),
    0,
  );
}

export function readingMinutes(body: readonly Block[]): number {
  const palabras = body.reduce((n, b) => {
    if (b.kind === "image") return n;
    if (b.kind === "list") return n + b.items.reduce((m, i) => m + palabrasDe(i), 0);
    return n + palabrasDe(b.text);
  }, 0);
  return Math.max(1, Math.round(palabras / 200));
}

export type Post = {
  /** Sin barras. Es la ruta: emmvi.com/<slug>. */
  slug: string;
  /**
   * Titulo visible. **No tiene por que coincidir con el slug.** Dos de los
   * seis llevan "in 2025" en la URL y estariamos en 2026: la URL se queda como
   * esta —es la que Google conoce— y el titulo se escribe sin caducidad.
   */
  title: string;
  description: string;
  /**
   * Entradilla. Va bajo el h1 del articulo y no se repite dentro del cuerpo.
   *
   * **Ya no es la `rank_math_description` del WordPress**, que es lo que era
   * al recuperarla: aquella esta escrita para el resultado de busqueda —168
   * caracteres de media, una de 343— y bajo el titular ocupaba cuatro lineas
   * repitiendolo en otras palabras. Estan reescritas a menos de 90, que a 44
   * de medida son dos lineas justas, sin recortes ni puntos suspensivos.
   *
   * El texto original sigue vivo en `description`, que es de donde salen la
   * meta description y el extracto de las tarjetas. Ahi hace su trabajo.
   */
  lede: string;
  /**
   * Categoria, recuperada del WordPress (`terms` + `term_relationships`). La
   * pinta el badge de las tarjetas de /blog, que es lo que hacia el skin
   * `archive_cards` del original.
   *
   * **Una sola, aunque varios articulos tenian dos o tres.** Un badge con tres
   * etiquetas deja de ser una senal y pasa a ser una lista. Donde habia varias
   * se eligio la que mas le dice a quien lee: `streamline-scale-succeed`
   * llevaba GoHighLevel, Automation y Zapier, y se queda en Automation, que es
   * de lo que va. "Uncategorized" se descarta: es el relleno de WordPress.
   *
   * No es un enlace. No hay pagina de categoria y no se va a inventar una para
   * que liste dos articulos.
   */
  category: string;
  /**
   * Imagen destacada, recuperada del backup del WordPress: los diecisiete la
   * tenian, y se dieron por inexistentes hasta que se abrio la tabla
   * `postmeta` buscando `_thumbnail_id`.
   *
   * **No son trabajo de emmvi.** Son ilustraciones de banco, plantillas de
   * Canva y arte generado con IA, que es lo que el WordPress publicaba. No es
   * prueba social prestada —no afirman nada sobre emmvi ni sobre sus
   * clientes, que es lo que PRODUCT.md prohibe— pero tampoco son una senal de
   * calidad: varias llevan su propio titulo quemado dentro y ninguna comparte
   * paleta con el sitio. Ver el README.
   */
  image?: { src: string; width: number; height: number; alt: string };
  /**
   * Fecha de publicacion de *esta* version, no de la original, que se
   * desconoce. Al publicar conviene ponerla al dia.
   */
  published: string;
  /**
   * Fecha de la ultima revision **de verdad**, cuando la haya habido.
   *
   * **Ausente es lo normal, y es lo honesto.** Sin este campo, el articulo
   * declara `dateModified` igual a `datePublished` y no enseña ninguna fecha
   * de actualizacion. Un sitio que marca los diecisiete como revisados hoy
   * para parecer fresco esta afirmando algo que no puede sostener, que es lo
   * que PRODUCT.md prohibe.
   *
   * **Se pone cuando se reescribe el cuerpo, no cuando se toca una coma.**
   * El caso previsto son las reescrituras de `content/rewrites/`: sustituir el
   * `body` de un original por su version nueva es exactamente el cambio que
   * esta fecha describe. Corregir una errata no lo es.
   *
   * `slug`, `title` y `published` no se tocan al revisar: la URL es lo que
   * Google conoce y la fecha de publicacion sigue siendo cuando se publico.
   * Ver el README de content/rewrites/.
   */
  updated?: string;
  body: Block[];
};

/**
 * Los diecisiete articulos del WordPress anterior, recuperados de su backup
 * (`.wpress` de agosto de 2026) y convertidos desde el marcado Gutenberg.
 *
 * Search Console solo enseñaba ocho entre los dos informes; los otros nueve
 * aparecieron al abrir la base de datos. Es el motivo de trabajar del backup y
 * no de lo que se ve en el panel: el panel enseña lo que tuvo trafico, no lo
 * que existe.
 *
 * **Orden: el mas reciente primero.** Es lo que espera quien llega a un blog.
 *
 * Las ocho reescrituras que se hicieron antes de aparecer el backup ya no estan
 * pendientes: siete se publicaron y la de Figma vs Adobe XD se descarto. Ver el
 * README de content/rewrites/.
 */
export const posts: readonly Post[] = [
  reactivateOldLeads,
  businessTextingForContractors,
  crmForElectricians,
  afterHoursAnsweringService,
  onlineBookingForContractors,
  leadSourceTracking,
  crmForContractors,
  contractorWebsiteDesign,
  appointmentReminderText,
  roofingCrm,
  crmForPlumbers,
  speedToLead,
  hvacCrm,
  solarCrm,
  howToGetMore,
  quoteFollowUp,
  missedCallTextBack,
  streamlineLeadCaptureAnd,
  streamlineScaleSucceedUsing,
  turnLeadsIntoLoyal,
  a5ProvenWaysTo,
  howEmailMarketingAnd,
  top7WebDesign,
  top5BestAi,
  theBest5Web,
  theArtOfUi,
  harnessingAiWithoutCode,
  zapierTheNoCode,
  unlockingEfficiencyHowGohighlevel,
  the2MostUsed,
  howEmailMarketingHelps,
  emailAutomationAndFunnel,
  webflowVsWixThe,
];

export function findPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

/** Para el sitemap y para `generateStaticParams`. */
export const postSlugs = posts.map((p) => p.slug);

/**
 * Minutos de lectura del articulo.
 *
 * Cuenta las palabras de verdad —recorre los bloques y saca el texto de los
 * fragmentos, no del JSON— y divide por 220 palabras por minuto, que es la
 * media habitual de lectura en pantalla en ingles. Medium usa 265 y le sale
 * siempre menos; 220 se queda del lado de no prometer que se lee mas rapido de
 * lo que se lee.
 *
 * Se redondea hacia arriba y nunca baja de 1: "0 min read" no dice nada.
 */
function textoDe(r: Rich): string {
  if (typeof r === "string") return r;
  return r.map((f) => (typeof f === "string" ? f : f.text)).join(" ");
}

export function readingTime(blocks: readonly Block[]): number {
  let palabras = 0;

  for (const block of blocks) {
    if (block.kind === "image") continue;
    const texto =
      block.kind === "list"
        ? block.items.map(textoDe).join(" ")
        : textoDe(block.text);
    palabras += texto.split(/\s+/).filter(Boolean).length;
  }

  return Math.max(1, Math.ceil(palabras / 220));
}

/**
 * Los tres articulos que se ofrecen al final de uno.
 *
 * Reconstruye el bloque "Related Posts" de la plantilla del WordPress. Alli los
 * elegia Elementor por taxonomia; aqui se hace igual, primero por categoria y
 * rellenando con los mas recientes si no hay bastantes.
 *
 * **El original mostraba dos, en dos columnas anchas.** Son tres: a dos, cada
 * tarjeta ocupa media pantalla y la imagen crece con ella, y el bloque acaba
 * pesando mas que el final del articulo que lo precede. Tres llenan la fila sin
 * dejar huecos y se leen como lo que son, una salida y no otra seccion.
 */
export function relatedPosts(post: Post, cuantos = 3): Post[] {
  const resto = posts.filter((p) => p.slug !== post.slug);
  const mismos = resto.filter((p) => p.category === post.category);
  const otros = resto
    .filter((p) => p.category !== post.category)
    .sort((a, b) => b.published.localeCompare(a.published));
  return [...mismos, ...otros].slice(0, cuantos);
}
