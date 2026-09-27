import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

/**
 * robots.txt. Hasta ahora no habia ninguno.
 *
 * **Abierto incluso mientras la raiz sirve la pagina de espera**, y es a
 * proposito. La primera version de este archivo cerraba el sitio entero con
 * COMING_SOON=1, partiendo de que no habia nada indexado. Era falso: Search
 * Console lista 18 URLs del WordPress anterior, rastreadas hasta mediados de
 * septiembre de 2026.
 *
 * Con un indice vivo, cerrar el rastreo hace justo lo contrario de lo que se
 * busca. El `Disallow` no desindexa nada —las URLs viejas se quedarian ahi
 * como resultados sin descripcion— y ademas **impide que Google lea los 301
 * de next.config.ts**, que son los que trasladan la autoridad de cada URL
 * vieja a la ruta nueva. Sin rastreo no hay traslado.
 *
 * El coste de tenerlo abierto es que, hasta que se publique la home nueva, lo
 * que Google enseña para "emmvi" es la pantalla de espera. Es mejor trato que
 * perder el dominio entero del indice y volver a ganarlo desde cero.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        // Duplicado exacto de la raiz cuando la espera esta activa, y una
        // pantalla de obras cuando no lo esta. Nunca interesa que se rastree.
        "/coming-soon",
        // El destino interno de la reescritura de `/<slug>.md`. Los mismos
        // bytes por otro camino; la URL buena es la de la extension, que es la
        // que enlaza el articulo y lista /llms.txt. No la enlaza nadie, pero
        // costaba una linea cerrarla.
        //
        // **No afecta al `.md`.** El rastreador pide `/<slug>.md` y la
        // reescritura ocurre despues, dentro del servidor: lo que se compara
        // con esta regla es lo que se pidio.
        "/md/",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
