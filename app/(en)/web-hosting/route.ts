import { gone } from "@/lib/gone";

/**
 * URL del WordPress anterior, indexada y sin equivalente: el posicionamiento
 * nuevo no vende hosting suelto. Se retira con 410 en vez de dejarla en 404.
 *
 * Un Route Handler en un segmento estatico gana a `app/[slug]`, asi que esto
 * responde antes de que la ruta de los articulos vea la peticion.
 */
export function GET() {
  return gone("standalone web hosting");
}
