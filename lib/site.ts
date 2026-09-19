import type { Metadata } from "next";

import { postSlugs } from "@/lib/posts";

/**
 * Lo que comparten robots.txt, el sitemap, las canonicas y la tarjeta de Open
 * Graph, mas el constructor de metadata que usan todas las paginas.
 *
 * Esta junto aqui porque hasta ahora cada pagina declaraba titulo y descripcion
 * por su cuenta, el dominio vivia suelto en app/layout.tsx y no habia canonica
 * ni Open Graph en ninguna. Con dieciseis paginas eso son dieciseis sitios
 * donde olvidarse de uno.
 */

/** Sin barra final: se concatena con rutas que ya empiezan por "/". */
export const SITE_URL = "https://emmvi.com";

export const SITE_NAME = "Emmvi";

/** El mismo que ofrece la pagina de espera. Lo usan esa pagina y el JSON-LD. */
export const CONTACT_EMAIL = "sales@emmvi.com";

/**
 * Misma lectura que hacia app/page.tsx, y por el mismo motivo: la variable se
 * resuelve en build, no por peticion. Cambiarla exige volver a desplegar.
 *
 * **No toca el buscador.** Una version anterior la uso tambien para cerrar el
 * robots.txt y poner noindex; se revirtio al descubrir que el WordPress
 * anterior dejo URLs indexadas. Ver app/robots.ts.
 */
export const comingSoon = process.env.COMING_SOON === "1";

/**
 * La linea de marca. Es la de la pagina de espera, que es la que pasa el filtro
 * de PRODUCT.md: promete respuesta en menos de un minuto, que es verificable, y
 * no promete porcentajes de facturacion. Ademas deja claro que el minuto es lo
 * que contesta *el sistema que se construye*, no la bandeja de Emmvi.
 *
 * El salto de linea esta escrito donde la frase se parte de verdad —la web y el
 * sistema, que es la oferta unica— y solo lo lee la tarjeta de Open Graph. Las
 * descripciones usan `SITE_TAGLINE`, la misma frase seguida: una sola copia del
 * texto, dos formas.
 */
export const SITE_TAGLINE_LINES =
  "We build the website that takes the enquiry\nand the system that answers it in under a minute.";

export const SITE_TAGLINE = SITE_TAGLINE_LINES.replace("\n", " ");

/* --------------------------------------------------------------------------
   Quien responde del sitio
   -------------------------------------------------------------------------- */

/**
 * Datos identificativos del responsable, que publican la politica de
 * privacidad (RGPD) y el aviso legal (LSSI-CE).
 *
 * Viven aqui y no dentro de una de las dos paginas porque las dos los
 * necesitan, y una identidad legal que diverge entre dos paginas del mismo
 * sitio es un problema mayor que la duplicacion.
 *
 * **Es una persona fisica, no una sociedad**: Emmvi es nombre comercial y
 * quien responde legalmente es el titular. De ahi que el texto diga "trading
 * name of" y no "a company registered in", y que no haya datos registrales de
 * sociedad que dar.
 *
 * Que aparezca un nombre propio no contradice la regla de PRODUCT.md de no dar
 * el tamano del equipo: identifica a quien responde, que las dos normas
 * obligan a publicar, y no dice cuanta gente trabaja aqui.
 *
 * Falta el codigo postal. Aldaia tiene el suyo y no se pone a ojo: un dato
 * identificativo mal puesto es peor que uno incompleto.
 */
export const controller = {
  tradingName: SITE_NAME,
  legalName: "Jorge Gustavo Polin Barrionuevo",
  registeredAddress: "Av. de la Música 2, Aldaia, Valencia, Spain",
  /** Validado contra el digito de control: 55434019 mod 23 = 17 -> "V". */
  taxId: "55434019V",
};

/* --------------------------------------------------------------------------
   Que entra en el buscador
   -------------------------------------------------------------------------- */

/**
 * Las paginas del sitio nuevo. Van siempre al sitemap.
 *
 * /coming-soon queda fuera a proposito: con COMING_SOON=1 es la misma pantalla
 * que la raiz, y ofrecerle al buscador dos URLs con el mismo contenido solo
 * sirve para que elija una de las dos por su cuenta. La ruta sigue existiendo
 * para previsualizar, pero con noindex.
 */
const currentRoutes = [
  "/",
  "/contact-us",
  "/blog",
  "/privacy-policy",
  "/legal-notice",
] as const;

/**
 * Las cinco pantallas reconstruidas del Figma: el posicionamiento viejo de menu
 * de servicios que el relanzamiento abandona. Estan vivas, responden 200 y el
 * footer las enlaza, asi que hoy entran en el sitemap como cualquier otra.
 *
 * **Este es el interruptor.** Ponerlo a `false` hace las dos cosas a la vez:
 * las saca del sitemap y les pone `noindex` (las cinco pasan `legacy: true` a
 * `pageMetadata`). Siguen accesibles para quien tenga el enlace; solo
 * desaparecen del buscador.
 *
 * Decision aplazada a proposito hasta que la home nueva este publicada: hasta
 * entonces son el unico contenido real que hay.
 */
export const indexLegacyPages = true;

const legacyRoutes = [
  "/about-us",
  "/services/website-design",
  "/services/email-marketing",
  "/services/seo",
  "/services/ppc",
] as const;

/**
 * Lo que ve el sitemap.
 *
 * Los articulos salen de `postSlugs` y no de una lista repetida aqui: son
 * ocho, viven en la raiz, y mantener dos copias de esa lista acaba con una de
 * las dos desactualizada. Añadir un articulo a lib/posts.ts lo publica en el
 * sitemap sin tocar nada mas.
 */
export const sitemapRoutes: readonly string[] = [
  ...currentRoutes,
  ...postSlugs.map((slug) => `/${slug}`),
  ...(indexLegacyPages ? legacyRoutes : []),
];

/* --------------------------------------------------------------------------
   Metadata por pagina
   -------------------------------------------------------------------------- */

type PageMeta = {
  /** Ruta canonica, con barra inicial. `metadataBase` le pone el dominio. */
  path: string;
  /**
   * Titulo de la pestana. Le cae encima la plantilla "%s · Emmvi" de
   * app/layout.tsx, salvo con `absoluteTitle`.
   */
  title: string;
  /** Para titulos que ya dicen "Emmvi" y no deben repetirlo. */
  absoluteTitle?: boolean;
  description: string;
  /** Una de las cinco pantallas del Figma viejo. Ver `indexLegacyPages`. */
  legacy?: boolean;
};

/**
 * Arma el bloque entero de una pagina: titulo, descripcion, canonica y Open
 * Graph.
 *
 * La canonica hace falta aunque el sitio no tenga parametros hoy: en cuanto se
 * empiece a enviar trafico con `?utm_source=` desde el outreach, cada campana
 * crea una URL distinta con el mismo contenido. Sin canonica, el buscador
 * decide cual es la buena por su cuenta.
 *
 * El Open Graph se escribe completo en cada pagina en vez de heredarlo del
 * layout porque Next fusiona la metadata en superficie: si una pagina declara
 * `openGraph`, sustituye al del padre entero, y el `siteName` heredado se
 * perderia sin avisar.
 */
export function pageMetadata({
  path,
  title,
  absoluteTitle,
  description,
  legacy,
}: PageMeta): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url: path,
      // Al compartir no hay pestana que de contexto, asi que el nombre va
      // dentro del titulo. Es la misma forma que produce la plantilla.
      title: absoluteTitle ? title : `${title} · ${SITE_NAME}`,
      description,
    },
    ...(legacy && !indexLegacyPages
      ? // `follow` sigue en true aunque no se indexen: los enlaces internos que
        // llevan a /contact tienen que seguir contando.
        { robots: { index: false, follow: true } }
      : {}),
  };
}
