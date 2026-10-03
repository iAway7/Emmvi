import type { Metadata } from "next";

import { PpcPage } from "@/components/pages/ppc";
import { ppcCopy } from "@/lib/copy/ppc";
import { pageMetadata } from "@/lib/site";

/**
 * /services/ppc, la pagina de PPC del posicionamiento viejo. Composicion en
 * components/pages/ppc.tsx y texto en lib/copy/ppc.ts, compartidos con
 * app/(es)/es/services/ppc/page.tsx.
 */
export const metadata: Metadata = pageMetadata({
  path: "/services/ppc",
  title: ppcCopy.en.meta.title,
  description: ppcCopy.en.meta.description,
  legacy: true,
});

export default function Ppc() {
  return <PpcPage locale="en" />;
}
