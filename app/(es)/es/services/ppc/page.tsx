import type { Metadata } from "next";

import { PpcPage } from "@/components/pages/ppc";
import { ppcCopy } from "@/lib/copy/ppc";
import { pageMetadata } from "@/lib/site";

/** /es/services/ppc. Misma plantilla y texto tipado que la inglesa. */
export const metadata: Metadata = pageMetadata({
  path: "/services/ppc",
  locale: "es",
  title: ppcCopy.es.meta.title,
  description: ppcCopy.es.meta.description,
  legacy: true,
});

export default function PpcEs() {
  return <PpcPage locale="es" />;
}
