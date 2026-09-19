import path from "node:path";
import type { NextConfig } from "next";

/**
 * Las URLs del WordPress anterior que siguen en el indice de Google y cuyo
 * contenido existe hoy en otra ruta.
 *
 * El sitio viejo se cayo al no poder renovar el hosting, y al reconstruirlo en
 * Next cambiaron las rutas: lo que era `/seo/` ahora vive en `/services/seo`.
 * Sin esto, cada una de estas devuelve 404 — que es exactamente como se pierde
 * el posicionamiento que ya estaba ganado.
 *
 * Search Console las rastreo por ultima vez a mediados de septiembre de 2026,
 * asi que el indice esta fresco: un 301 ahora traslada la autoridad de la URL
 * vieja a la nueva. Un 404 mantenido unos meses la tira.
 *
 * `/about-us/` no esta en la lista porque no hace falta: la ruta nueva se llama
 * igual y Next ya normaliza la barra final.
 *
 * **Solo van las que tienen destino equivalente de verdad.** Mandar un articulo
 * del blog a la home seria un "soft 404": Google lo trata como pagina no
 * encontrada igualmente, y ademas deja al visitante en un sitio que no es el
 * que buscaba. Las que no tienen equivalente siguen pendientes, en el README.
 */
/**
 * `/contact` fue una URL nuestra durante unas horas. La pagina vive ahora en
 * `/contact-us/`, que es la que el WordPress tenia indexada: usar la que
 * Google ya conoce ahorra el salto para siempre, en vez de redirigirla.
 */
const ownRedirects = [["/contact", "/contact-us/"]];

const legacyRedirects = [
  ["/website-design", "/services/website-design/"],
  ["/email-marketing", "/services/email-marketing/"],
  ["/seo", "/services/seo/"],
  ["/ppc", "/services/ppc/"],
];

const nextConfig: NextConfig = {
  /**
   * Barra final en todas las URLs, como la tenia WordPress.
   *
   * El sitio viejo usaba `/%postname%/` y Google tiene indexadas las 31 URLs
   * **con barra**. Next la quita por defecto, asi que sin esto cada una de
   * ellas —incluidas /about-us/ y /privacy-policy/, que existen— respondia con
   * un 308 antes de servir la pagina.
   *
   * Un salto no pierde autoridad, pero tampoco aporta nada: lo unico que hace
   * es que la forma que Google conoce no sea la forma que servimos. Con esto
   * coinciden.
   */
  trailingSlash: true,

  /**
   * Turbopack infiere la raiz del workspace buscando lockfiles hacia arriba, y
   * encontraba /Users/iaway/package-lock.json (un archivo huerfano, sin
   * package.json al lado). Lo fijamos al repo para que no salga del proyecto.
   */
  turbopack: {
    root: path.dirname(new URL(import.meta.url).pathname),
  },

  async redirects() {
    return [...legacyRedirects, ...ownRedirects].map(([source, destination]) => ({
      source,
      destination,
      // 308. Es lo que le dice a Google que traslade la URL vieja a la nueva
      // en vez de tratarla como un desvio pasajero.
      permanent: true,
    }));
  },
};

export default nextConfig;
