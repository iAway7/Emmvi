import { DM_Sans } from "next/font/google";
import Script from "next/script";

import "@/app/globals.css";
import type { Locale } from "@/lib/i18n";

/**
 * El documento HTML entero: <html>, <body>, la fuente y GTM.
 *
 * Vive fuera de app/ porque el sitio tiene **dos layouts raiz**, uno por
 * idioma (app/(en)/layout.tsx y app/(es)/layout.tsx), y el App Router no deja
 * anidar <html>: la unica forma de que `lang` cambie con la URL sin middleware
 * es que cada grupo de rutas monte su propio <html>. Lo que los dos comparten
 * esta aqui, para que un cambio en la carga de GTM no haya que hacerlo dos
 * veces.
 *
 * `lang` importa mas de lo que parece: es lo que le dice al lector de pantalla
 * con que voz leer, al navegador si ofrecer traduccion, y al buscador en que
 * idioma esta la pagina. Con el sitio en dos idiomas, un `lang="en"` fijo en
 * /es/ es un error de accesibilidad y de SEO a la vez.
 */

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

export function Document({
  lang,
  children,
}: Readonly<{ lang: Locale; children: React.ReactNode }>) {
  return (
    <html lang={lang} className={dmSans.variable}>
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
