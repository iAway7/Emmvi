import { gone } from "@/lib/gone";

/**
 * URL del WordPress anterior, indexada. Alli habia una pagina de preferencias
 * de cookies; aqui las preferencias son el panel de CookieYes, que abre el
 * boton "Cookie preferences" del pie.
 *
 * No es un servicio retirado sino una pagina que dejo de ser pagina, asi que
 * el 410 lleva su propia explicacion en vez de la de por defecto: a quien
 * llegue desde el buscador hay que decirle donde estan ahora, no que dejamos
 * de ofrecerlas.
 */
export function GET() {
  return gone(
    "the cookie preferences page",
    "Cookie preferences now open in a panel instead of living on their own page. Use the “Cookie preferences” link at the bottom of any page on this site to change them at any time.",
  );
}
