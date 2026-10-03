import type { Metadata } from "next";

import { FullStackPage } from "@/components/pages/full-stack";
import { fullStackCopy } from "@/lib/copy/full-stack";
import { pageMetadata } from "@/lib/site";

/** /es/full-stack-development-services. Misma plantilla y texto tipado que la inglesa. */
export const metadata: Metadata = pageMetadata({
  path: "/full-stack-development-services",
  locale: "es",
  title: fullStackCopy.es.meta.title,
  description: fullStackCopy.es.meta.description,
});

export default function FullStackDevelopmentEs() {
  return <FullStackPage locale="es" />;
}
