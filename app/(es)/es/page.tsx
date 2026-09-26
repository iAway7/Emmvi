import type { Metadata } from "next";

import { ComingSoon, comingSoonMetadata } from "@/components/coming-soon";
import { HomePage } from "@/components/pages/home";
import { homeCopy } from "@/lib/copy/home";
import { comingSoon, pageMetadata } from "@/lib/site";

/**
 * La home en español, en /es/. Misma plantilla y mismo texto tipado que la
 * inglesa (components/pages/home.tsx, lib/copy/home.ts): solo cambia el
 * idioma.
 *
 * Con COMING_SOON=1 sirve la misma pantalla de espera que la raiz, para que
 * las dos versiones se abran a la vez y no una antes que la otra.
 */

export const metadata: Metadata = comingSoon
  ? comingSoonMetadata
  : pageMetadata({
      path: "/",
      locale: "es",
      title: homeCopy.es.meta.title,
      absoluteTitle: true,
      description: homeCopy.es.meta.description,
    });

export default function HomeEs() {
  if (comingSoon) return <ComingSoon />;
  return <HomePage locale="es" />;
}
