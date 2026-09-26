import type { MetadataRoute } from "next";

import { isTranslated, localizePath } from "@/lib/i18n";
import { SITE_URL, sitemapRoutes, spanishSitemapRoutes } from "@/lib/site";

/**
 * sitemap.xml, generado en build a partir de la lista de lib/site.ts. No se
 * escribe a mano ninguna URL: añadir una pagina al array la publica aqui.
 *
 * Se publica tambien mientras la raiz sirve la pagina de espera, por lo mismo
 * que el robots.txt de al lado esta abierto: hay 18 URLs del WordPress
 * anterior en el indice, y el sitemap es la via mas rapida para que Google
 * vuelva a pasar por el dominio y lea los 301 de next.config.ts.
 *
 * Sin `lastModified`: el unico valor honesto seria la fecha del despliegue, y
 * eso marcaria las siete paginas como modificadas en cada push aunque no se
 * hubieran tocado. Un sitemap que miente sobre la frescura vale menos que uno
 * que no dice nada. `changeFrequency` y `priority` se omiten por lo mismo —
 * Google los ignora desde hace años.
 *
 * **Las paginas traducidas llevan `alternates.languages`**, que Next escribe
 * como `xhtml:link hreflang`. Es la misma informacion que ya va en el <head>
 * de cada pagina; repetirla aqui es lo que Google recomienda cuando el sitio
 * tiene mas de un idioma, y ademas es la unica forma de que un rastreador que
 * llega por el sitemap sepa que /es/contact-us/ es la version española de
 * /contact-us/ sin abrir ninguna de las dos.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Con barra final, porque `trailingSlash: true` es lo que sirve el sitio y
  // lo que Next escribe en la canonica de cada pagina. Un sitemap que lista
  // una forma distinta de la canonica se contradice solo, y el buscador tiene
  // que decidir cual vale.
  const entry = (route: string): MetadataRoute.Sitemap[number] => ({
    url: `${SITE_URL}${route.endsWith("/") ? route : route + "/"}`,
    ...(isTranslated(route)
      ? {
          alternates: {
            languages: {
              en: `${SITE_URL}${localizePath(route, "en")}`,
              es: `${SITE_URL}${localizePath(route, "es")}`,
              "x-default": `${SITE_URL}${localizePath(route, "en")}`,
            },
          },
        }
      : {}),
  });

  return [...sitemapRoutes, ...spanishSitemapRoutes].map(entry);
}
