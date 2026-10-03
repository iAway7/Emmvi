import type { Metadata } from "next";

import { GohighlevelPage } from "@/components/pages/gohighlevel";
import { gohighlevelCopy } from "@/lib/copy/gohighlevel";
import { pageMetadata } from "@/lib/site";

/**
 * /es/services/gohighlevel-automation. Misma plantilla y texto tipado que la
 * inglesa. Borrador como ella: `robots` igual, y se quita de los dos a la vez
 * cuando se publique.
 */
export const metadata: Metadata = {
  ...pageMetadata({
    path: "/services/gohighlevel-automation",
    locale: "es",
    title: gohighlevelCopy.es.meta.title,
    description: gohighlevelCopy.es.meta.description,
  }),
  robots: { index: false, follow: false },
};

export default function GoHighLevelAutomationEs() {
  return <GohighlevelPage locale="es" />;
}
