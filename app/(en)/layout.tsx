import type { Metadata } from "next";

import { Document } from "@/components/document";
import { SITE_URL } from "@/lib/site";

/**
 * Layout raiz del sitio en ingles. Todo lo que no cuelga de /es/ pasa por
 * aqui: la home, los servicios, el blog y las URLs heredadas.
 *
 * Es uno de dos layouts raiz —el otro es app/(es)/layout.tsx— y por eso el
 * <html> y GTM no estan escritos aqui sino en components/document.tsx: la
 * unica diferencia entre los dos es el `lang` y los textos por defecto.
 *
 * Titulo y descripcion propios los declara cada pagina con `pageMetadata`
 * (lib/site.ts); aqui solo queda lo que de verdad es comun.
 *
 * **Sin `robots`.** Una version anterior ponia `noindex` en todo el sitio
 * mientras COMING_SOON estuviera activo. Con el dominio recien estrenado eso
 * habria sido inofensivo, pero el dominio no lo esta: el WordPress anterior
 * dejo 18 URLs indexadas, la raiz entre ellas. Un `noindex` no protege una URL
 * ya indexada, la expulsa — y recuperar la posicion de la home cuesta mucho
 * mas que aguantar unas semanas con la pantalla de espera como resultado.
 *
 * El `noindex` se queda solo donde de verdad sobra una URL: /coming-soon (un
 * duplicado de la raiz) y el 404.
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "emmvi: websites and automation that answer every enquiry",
    template: "%s · emmvi",
  },
  description:
    "We build the website and the follow-up system that answers every enquiry in under a minute and chases every quote.",
  // Sin `twitter-image.tsx` aparte: cuando no hay `twitter:image`, X cae en el
  // `og:image` de app/(en)/opengraph-image.tsx. Esto solo elige el formato grande,
  // que es el que deja ver la tarjeta entera en vez de un cuadrado recortado.
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <Document lang="en">{children}</Document>;
}
