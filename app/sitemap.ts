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
  // La raiz sale sin barra final, que es como la escribe `metadataBase` en la
  // canonica de app/page.tsx. Las dos formas son la misma URL para un
  // buscador, pero no hay motivo para que el mapa y la canonica no coincidan
  // literalmente.
  return sitemapRoutes.map((route) => ({
    url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
  }));
}
