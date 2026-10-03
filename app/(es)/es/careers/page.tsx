import type { Metadata } from "next";

import { CareersPage } from "@/components/pages/careers";
import { careersCopy } from "@/lib/copy/careers";
import { pageMetadata } from "@/lib/site";

/** /es/careers. Misma plantilla y texto tipado que la inglesa. */
export const metadata: Metadata = pageMetadata({
  path: "/careers",
  locale: "es",
  title: careersCopy.es.meta.title,
  description: careersCopy.es.meta.description,
});

export default function CareersEs() {
  return <CareersPage locale="es" />;
}
