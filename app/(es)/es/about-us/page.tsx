import type { Metadata } from "next";

import { AboutUsPage } from "@/components/pages/about-us";
import { aboutUsCopy } from "@/lib/copy/about-us";
import { pageMetadata } from "@/lib/site";

/** /es/about-us. Misma plantilla y texto tipado que la inglesa. */
export const metadata: Metadata = pageMetadata({
  path: "/about-us",
  locale: "es",
  // Absoluto, como la inglesa: la plantilla dejaria "Sobre emmvi · emmvi".
  title: aboutUsCopy.es.meta.title,
  absoluteTitle: true,
  description: aboutUsCopy.es.meta.description,
  legacy: true,
});

export default function AboutUsEs() {
  return <AboutUsPage locale="es" />;
}
