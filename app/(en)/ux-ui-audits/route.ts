import { gone } from "@/lib/gone";

/**
 * Tercera pagina de servicio retirada, con el mismo trato que /web-hosting y
 * /full-stack-development-services: indexada, sin equivalente, y un servicio
 * que el posicionamiento nuevo no ofrece.
 *
 * Se retira "por el momento", que con un 410 tiene un matiz: Google la suelta
 * en dias en vez de en meses, y si algun dia vuelve, vuelve desde cero. Es el
 * precio de que desaparezca rapido.
 */
export function GET() {
  return gone("UX/UI audits");
}
