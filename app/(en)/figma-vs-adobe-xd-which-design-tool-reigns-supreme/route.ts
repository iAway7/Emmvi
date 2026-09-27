import { gone } from "@/lib/gone";

/**
 * Articulo retirado. Es la unica URL del blog que se cae, y no por la URL sino
 * por lo que decia: comparaba Figma con Adobe XD como si fueran dos rivales
 * vivos, y Adobe dejo XD en mantenimiento en 2023, tras caerse la compra de
 * Figma. Recomendar hoy "elige uno de los dos" es mandar a alguien a una
 * herramienta que no recibe desarrollo.
 *
 * **410 y no 404, ni borrado a secas.** La URL lleva indexada desde abril de
 * 2025: un 404 la deja en el indice meses mientras Google reintenta, y un
 * redirect a la home seria un soft 404 —Google lo descarta igual— ademas de
 * dejar al visitante donde no queria ir. El 410 la retira en dias y le dice al
 * que llega por que.
 *
 * El explicativo es propio porque el de serie dice "We stopped offering ...",
 * que sirve para un servicio y no para un articulo. Mismo caso que
 * /cookie-preference/.
 *
 * **Hay una reescritura sin publicar** en `content/rewrites/` que cuenta bien
 * lo de XD. Si algun dia se publica, esta ruta desaparece y el articulo vuelve
 * a su sitio con la URL intacta, que es todo lo que esa URL tenia de valor.
 */
export function GET() {
  return gone(
    "Figma vs Adobe XD",
    "This article compared Figma and Adobe XD as if they were two live rivals. Adobe put XD into maintenance in 2023 and stopped developing it, so the comparison no longer holds. We took the article down rather than leave it up telling you something that stopped being true.",
  );
}
