import type { Metadata } from "next";

import { ComingSoon, comingSoonMetadata } from "@/components/coming-soon";

/** Ruta propia, util para previsualizarla con la home todavia servida en /. */
export const metadata: Metadata = comingSoonMetadata;

export default function ComingSoonPage() {
  return <ComingSoon />;
}
