import type { Metadata } from "next";

import { SeoPage } from "@/components/pages/seo";
import { seoCopy } from "@/lib/copy/seo";
import { pageMetadata } from "@/lib/site";

/**
 * /services/seo, la pantalla de SEO del posicionamiento viejo. Composicion en
 * components/pages/seo.tsx y texto en lib/copy/seo.ts, compartidos con
 * app/(es)/es/services/seo/page.tsx.
 */
export const metadata: Metadata = pageMetadata({
  path: "/services/seo",
  title: seoCopy.en.meta.title,
  description: seoCopy.en.meta.description,
  legacy: true,
});

export default function Seo() {
  return <SeoPage locale="en" />;
}
