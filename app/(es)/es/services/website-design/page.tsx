import type { Metadata } from "next";

import { WebsiteDesignPage } from "@/components/pages/website-design";
import { websiteDesignCopy } from "@/lib/copy/website-design";
import { pageMetadata } from "@/lib/site";

/** /es/services/website-design. Misma plantilla y texto tipado que la inglesa. */
export const metadata: Metadata = pageMetadata({
  path: "/services/website-design",
  locale: "es",
  title: websiteDesignCopy.es.meta.title,
  description: websiteDesignCopy.es.meta.description,
  legacy: true,
});

export default function WebsiteDesignEs() {
  return <WebsiteDesignPage locale="es" />;
}
