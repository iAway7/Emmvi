import type { Metadata } from "next";

import { InstallersPage } from "@/components/pages/installers";
import { installersCopy } from "@/lib/copy/installers";
import { pageMetadata } from "@/lib/site";

/** /es/installers. Misma plantilla y texto tipado que la inglesa. */
export const metadata: Metadata = pageMetadata({
  path: "/installers",
  locale: "es",
  title: installersCopy.es.meta.title,
  description: installersCopy.es.meta.description,
});

export default function InstallersEs() {
  return <InstallersPage locale="es" />;
}
