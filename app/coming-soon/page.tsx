import type { Metadata } from "next";

import {
  COMING_SOON_DESCRIPTION,
  COMING_SOON_TITLE,
  ComingSoon,
} from "@/components/coming-soon";

/** Ruta propia, util para previsualizarla con la home todavia servida en /. */

/**
 * No reutiliza `comingSoonMetadata`: esa lleva la canonica de la raiz, y
 * aqui lo unico que hace falta es que esta URL no llegue al buscador. Con
 * COMING_SOON=1 son la misma pantalla, y una copia indexada compitiendo con la
 * raiz es exactamente lo que no interesa. El robots.txt tambien la excluye.
 *
 * El titulo va absoluto para que la plantilla "%s · emmvi" no lo deje en
 * "emmvi — ... · emmvi".
 */
export const metadata: Metadata = {
  title: { absolute: COMING_SOON_TITLE },
  description: COMING_SOON_DESCRIPTION,
  robots: { index: false, follow: false },
};

export default function ComingSoonPage() {
  return <ComingSoon />;
}
