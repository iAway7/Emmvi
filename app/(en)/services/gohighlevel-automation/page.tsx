import type { Metadata } from "next";

import { GohighlevelPage } from "@/components/pages/gohighlevel";
import { gohighlevelCopy } from "@/lib/copy/gohighlevel";
import { pageMetadata } from "@/lib/site";

/**
 * /services/gohighlevel-automation. Composicion en
 * components/pages/gohighlevel.tsx y texto en lib/copy/gohighlevel.ts,
 * compartidos con app/(es)/es/services/gohighlevel-automation/page.tsx.
 *
 * **Publicada como borrador**, por decision del usuario el 2026-09-21: sale de
 * la nav y del pie, sale del sitemap (`lib/site.ts`) y pide no ser indexada.
 * La pagina sigue existiendo en su URL, asi que se puede revisar en vivo sin
 * que nadie llegue a ella por su cuenta.
 *
 * `follow: false` ademas de `index: false` porque enlaza a /contact-us y a la
 * home, y no hace falta que un rastreador entre por aqui a paginas que ya
 * tienen su propia via.
 *
 * Para publicarla: quitar `robots` de aqui y de la ruta en español, devolver
 * la ruta a `currentRoutes` en lib/site.ts y volver a ponerla en `services`
 * de site-header.tsx y en la columna del pie. Lo que falta para que este
 * terminada esta en el README.
 */
export const metadata: Metadata = {
  ...pageMetadata({
    path: "/services/gohighlevel-automation",
    title: gohighlevelCopy.en.meta.title,
    description: gohighlevelCopy.en.meta.description,
  }),
  robots: { index: false, follow: false },
};

export default function GoHighLevelAutomation() {
  return <GohighlevelPage locale="en" />;
}
