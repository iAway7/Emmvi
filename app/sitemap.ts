import type { MetadataRoute } from "next";

import { SITE_URL, sitemapRoutes } from "@/lib/site";

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
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Con barra final, porque `trailingSlash: true` es lo que sirve el sitio y
  // lo que Next escribe en la canonica de cada pagina. Un sitemap que lista
  // una forma distinta de la canonica se contradice solo, y el buscador tiene
  // que decidir cual vale.
  return sitemapRoutes.map((route) => ({
    url: `${SITE_URL}${route.endsWith("/") ? route : route + "/"}`,
  }));
}
