import type { Metadata } from "next";

import { SeoPage } from "@/components/pages/seo";
import { seoCopy } from "@/lib/copy/seo";
import { pageMetadata } from "@/lib/site";

/** /es/services/seo. Misma plantilla y texto tipado que la inglesa. */
export const metadata: Metadata = pageMetadata({
  path: "/services/seo",
  locale: "es",
  title: seoCopy.es.meta.title,
  description: seoCopy.es.meta.description,
  legacy: true,
});

export default function SeoEs() {
  return <SeoPage locale="es" />;
}
