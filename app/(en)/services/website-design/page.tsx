import type { Metadata } from "next";

import { WebsiteDesignPage } from "@/components/pages/website-design";
import { websiteDesignCopy } from "@/lib/copy/website-design";
import { pageMetadata } from "@/lib/site";

/**
 * /services/website-design. Composicion en components/pages/website-design.tsx
 * y texto en lib/copy/website-design.ts, compartidos con
 * app/(es)/es/services/website-design/page.tsx.
 */
export const metadata: Metadata = pageMetadata({
  path: "/services/website-design",
  title: websiteDesignCopy.en.meta.title,
  description: websiteDesignCopy.en.meta.description,
  legacy: true,
});

export default function WebsiteDesign() {
  return <WebsiteDesignPage locale="en" />;
}
