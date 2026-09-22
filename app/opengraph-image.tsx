import { SITE_TAGLINE_LINES } from "@/lib/site";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og-card";

/**
 * Miniatura de todo el sitio. Al estar en la raiz de `app/`, la hereda cada
 * pagina: el titulo y la descripcion del enlace si cambian por pagina —cada
 * una declara los suyos— pero la imagen es la misma tarjeta de marca.
 *
 * Una sola tarjeta y no una por pagina a proposito: el enlace que se comparte
 * de verdad
 * es la raiz, desde el outreach. Si alguna pagina llega a necesitar la suya,
 * basta un `opengraph-image.tsx` en su carpeta llamando a `renderOgCard` con
 * otro titular.
 *
 * Sin `twitter-image.tsx` aparte: cuando no hay `twitter:image`, X usa
 * `og:image`. El `summary_large_image` que decide el formato esta en
 * app/layout.tsx.
 */
export const alt = "Emmvi: websites and automation for installers";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard(SITE_TAGLINE_LINES);
}
