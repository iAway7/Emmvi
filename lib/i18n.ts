/**
 * Los dos idiomas del sitio y como se traducen las rutas entre ellos.
 *
 * **El ingles vive en la raiz y el español bajo /es/.** No se movio el ingles
 * a /en/ a proposito: son las URLs que Google ya tiene indexadas y a las que
 * apuntan los 301 del WordPress anterior (next.config.ts). Moverlas seria
 * redirigir todo el sitio por segunda vez en un año.
 *
 * **Sin redireccion por idioma del navegador.** No hay middleware (ver
 * app/(en)/page.tsx: Vercel lo revienta con este proyecto) y tampoco haria
 * falta: el rastreador de Google entra desde EE. UU., y una redireccion
 * automatica le esconderia una de las dos versiones. El visitante elige con
 * el selector de la cabecera y el pie, y nada mas.
 *
 * Cada idioma tiene su propio layout raiz (app/(en) y app/(es)), porque es la
 * unica forma de que `<html lang>` cambie con la URL sin middleware. Lo que
 * comparten esta en components/document.tsx.
 */

export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/**
 * Las paginas que existen en los dos idiomas, por su ruta inglesa sin barra
 * final. Es la lista que decide tres cosas a la vez:
 *
 *  - que paginas llevan `hreflang` (las que no estan aqui no lo llevan, y
 *    asi no se declara una traduccion que no existe);
 *  - a donde lleva el selector de idioma: a la pagina equivalente si esta
 *    aqui, y a la home del otro idioma si no;
 *  - que rutas en español entran en el sitemap.
 *
 * Añadir una pagina en español es crear app/(es)/es/<ruta>/page.tsx **y**
 * apuntarla aqui. Sin lo segundo, existe pero nadie la encuentra.
 *
 * Fuera quedan, de momento: las cinco pantallas de servicio y /about-us (son
 * el posicionamiento viejo del Figma, ver `indexLegacyPages` en lib/site.ts),
 * el blog (se publica solo, en ingles, y traducirlo es otro proyecto) y las
 * URLs heredadas que devuelven 410.
 */
export const translatedPaths: readonly string[] = [
  "/",
  "/contact-us",
  "/thank-you",
  "/legal-notice",
  "/privacy-policy",
];

/** "/contact-us" -> "/contact-us/", "/" -> "/". Con ancla: "/#faq" -> "/#faq". */
function withSlash(path: string): string {
  const [base, hash] = path.split("#");
  const slashed = base.endsWith("/") ? base : `${base}/`;
  return hash === undefined ? slashed : `${slashed}#${hash}`;
}

/** Quita el prefijo /es y la barra final: "/es/contact-us/" -> "/contact-us". */
export function canonicalPath(path: string): string {
  const [base] = path.split("#");
  const stripped = base.replace(/^\/es(?=\/|$)/, "");
  const noSlash = stripped.length > 1 ? stripped.replace(/\/$/, "") : stripped;
  return noSlash === "" ? "/" : noSlash;
}

/**
 * La ruta de una pagina en un idioma, siempre con barra final (es lo que
 * sirve el sitio, `trailingSlash: true`) y conservando el ancla si la hay.
 *
 *   localizePath("/contact-us", "es")  -> "/es/contact-us/"
 *   localizePath("/#faq", "es")        -> "/es/#faq"
 *   localizePath("/es/contact-us/", "en") -> "/contact-us/"
 */
export function localizePath(path: string, locale: Locale): string {
  const [, hash] = path.split("#");
  const canonical = canonicalPath(path);
  const prefix = locale === "en" ? "" : "/es";
  const base = canonical === "/" ? `${prefix}/` : withSlash(`${prefix}${canonical}`);
  return hash === undefined ? base : `${base}#${hash}`;
}

export function isTranslated(path: string): boolean {
  return translatedPaths.includes(canonicalPath(path));
}

/**
 * El bloque `alternates.languages` de una pagina: las dos versiones mas
 * `x-default`, que es la que el buscador enseña a quien no encaja en ninguno
 * de los dos idiomas. Apunta al ingles porque es el idioma del mercado
 * principal, no porque sea el "original".
 *
 * Devuelve `undefined` para las paginas sin traduccion: un `hreflang` que
 * apunta a una URL que no existe es peor que ninguno.
 */
export function languageAlternates(
  path: string,
): Record<string, string> | undefined {
  if (!isTranslated(path)) return undefined;
  return {
    en: localizePath(path, "en"),
    es: localizePath(path, "es"),
    "x-default": localizePath(path, "en"),
  };
}

/** El `og:locale` de cada idioma. */
export const ogLocale: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
};

/** Como se llama cada idioma, en ese idioma. Es lo que ve el selector. */
export const localeName: Record<Locale, string> = {
  en: "English",
  es: "Español",
};
