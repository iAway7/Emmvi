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
      // Duplicado exacto de la raiz cuando la espera esta activa, y una
      // pantalla de obras cuando no lo esta. Nunca interesa que se rastree.
      disallow: "/coming-soon",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
