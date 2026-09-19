import { a5ProvenWaysTo } from "@/content/posts/5-proven-ways-to-get-more-leads-for-your-online-business";
import { emailAutomationAndFunnel } from "@/content/posts/email-automation-and-funnel-building-the-secret-to-driving-more-sales";
import { figmaVsAdobeXd } from "@/content/posts/figma-vs-adobe-xd-which-design-tool-reigns-supreme";
import { harnessingAiWithoutCode } from "@/content/posts/harnessing-ai-without-code-how-crms-and-automation-tools-empower-online-businesses";
import { howEmailMarketingAnd } from "@/content/posts/how-email-marketing-and-automated-series-can-increase-roi";
import { howEmailMarketingHelps } from "@/content/posts/how-email-marketing-helps-maximize-customer-engagement";
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
  /** Nota al margen: un limite, una advertencia, lo que no se dice arriba. */
  | { kind: "aside"; text: Rich }
  | { kind: "image"; src: string; alt: string; width: number; height: number };

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
  /** Entradilla. Va bajo el h1 y no se repite dentro del cuerpo. */
  lede: string;
  /**
   * Fecha de publicacion de *esta* version, no de la original, que se
   * desconoce. Al publicar conviene ponerla al dia.
   */
  published: string;
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
 * Las ocho reescrituras que se hicieron antes de aparecer el backup estan en
 * content/rewrites/, sin publicar. Ver el README de esa carpeta.
 */
export const posts: readonly Post[] = [
  streamlineLeadCaptureAnd,
  streamlineScaleSucceedUsing,
  turnLeadsIntoLoyal,
  a5ProvenWaysTo,
  howEmailMarketingAnd,
  top7WebDesign,
  figmaVsAdobeXd,
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
