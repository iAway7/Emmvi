import type { Metadata } from "next";

import { HomeLabPage } from "@/components/pages/home-lab";

/**
 * Laboratorio de la home: sirve components/pages/home-lab.tsx, que es una
 * copia de la home para probar diseño sin tocar la real. No se indexa y no
 * está en el sitemap (lib/site.ts no la lista).
 */
export const metadata: Metadata = {
  title: { absolute: "Home lab · emmvi" },
  robots: { index: false, follow: false },
};

export default function HomeLab() {
  return <HomeLabPage locale="en" />;
}
