import type { Metadata } from "next";

import { Document } from "@/components/document";
import { SITE_URL } from "@/lib/site";

/**
 * Layout raiz del sitio en español. Cuelga de el todo lo que vive bajo /es/
 * (las paginas estan en app/(es)/es/), y es el que pone `<html lang="es">`.
 *
 * Es el segundo de los dos layouts raiz; el <html> y GTM viven en
 * components/document.tsx, compartidos con app/(en)/layout.tsx. Ver lib/i18n.ts
 * para por que el español va en subcarpeta y sin redireccion automatica.
 *
 * La plantilla del titulo es la misma que en ingles: "%s · emmvi". El nombre
 * no se traduce y va en minuscula (DESIGN.md).
 */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "emmvi: webs y automatización que responden cada solicitud",
    template: "%s · emmvi",
  },
  description:
    "Construimos la web y el sistema de seguimiento que responde cada solicitud en menos de un minuto y hace seguimiento de cada presupuesto.",
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <Document lang="es">{children}</Document>;
}
