import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { SITE_URL } from "@/lib/site";

/**
 * Contenedor de Google Tag Manager.
 *
 * Va escrito aqui y no en una variable de entorno a proposito: es un
 * identificador publico que viaja en el HTML de todas formas, y tenerlo en el
 * codigo evita que un despliegue se quede sin medicion por una variable que
 * nadie copio.
 *
 * **Los despliegues de vista previa de Vercel tambien lo cargan.** Si eso
 * ensucia los datos, se filtra por nombre de host dentro de GTM, no quitando
 * el script.
 */
const GTM_ID = "GTM-M2BGFZRC";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/**
 * Lo que heredan todas las paginas. Titulo y descripcion propios los declara
 * cada una con `pageMetadata` (lib/site.ts); aqui solo queda lo que de verdad
 * es comun.
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
    default: "Emmvi — websites and automation that answer every enquiry",
    template: "%s · Emmvi",
  },
  description:
    "We build the website and the follow-up system that answers every enquiry in under a minute and chases every quote.",
  // Sin `twitter-image.tsx` aparte: cuando no hay `twitter:image`, X cae en el
  // `og:image` de app/opengraph-image.tsx. Esto solo elige el formato grande,
  // que es el que deja ver la tarjeta entera en vez de un cuadrado recortado.
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        {/*
         * GTM. Es el fragmento oficial, con dos diferencias obligadas por el
         * App Router:
         *
         *  - Va por `next/script` en vez de un <script> suelto en el <head>.
         *    Next no deja escribir a mano en el <head> del layout, y ademas
         *    asi el contenedor no bloquea el primer pintado.
         *  - `afterInteractive` es la estrategia que recomienda Next para GTM.
         *    Carga en cuanto la pagina es interactiva, algo mas tarde que un
         *    script en el <head>. `beforeInteractive` lo pondria antes, pero
         *    bloquea la carga y GTM no es critico para renderizar.
         *
         * El <noscript> va pegado a la apertura de <body>, como pide el
         * fragmento: solo sirve a visitantes sin JavaScript y unicamente
         * dispara etiquetas de imagen.
         */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            // Sin titulo un iframe es un elemento sin nombre para un lector de
            // pantalla. Esta oculto, pero el fragmento de Google no lo trae y
            // es un fallo de accesibilidad conocido.
            title="Google Tag Manager"
          />
        </noscript>

        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

        {children}
      </body>
    </html>
  );
}
