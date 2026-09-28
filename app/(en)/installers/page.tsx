import type { Metadata } from "next";

import { InstallersPage } from "@/components/pages/installers";
import { installersCopy } from "@/lib/copy/installers";
import { pageMetadata } from "@/lib/site";

/**
 * /installers, la pagina de destino del outreach a instaladores. Composicion
 * en components/pages/installers.tsx y texto en lib/copy/installers.ts.
 * Solo en ingles.
 */
export const metadata: Metadata = pageMetadata({
  path: "/installers",
  title: installersCopy.meta.title,
  description: installersCopy.meta.description,
});

export default function Installers() {
  return <InstallersPage />;
}
