import { SITE_TAGLINE_LINES } from "@/lib/site";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og-card";

/**
 * Miniatura del sitio en ingles. Vive en `app/(en)/` y no en la raiz de
 * `app/`: desde que hay dos layouts raiz, la raiz no tiene layout ni
 * `metadataBase`, y ahi la imagen salia con URL de localhost y la home se
 * quedaba sin ella. Aqui la resuelve el layout ingles. /es no tiene tarjeta
 * todavia: `renderOgCard` lleva el antetitulo y el pie en ingles.
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
export const alt = "emmvi: websites and automation for installers";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgCard(SITE_TAGLINE_LINES);
}
