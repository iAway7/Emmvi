import type { Metadata } from "next";

import { FullStackPage } from "@/components/pages/full-stack";
import { fullStackCopy } from "@/lib/copy/full-stack";
import { pageMetadata } from "@/lib/site";

/**
 * /full-stack-development-services. Composicion en
 * components/pages/full-stack.tsx y texto en lib/copy/full-stack.ts,
 * compartidos con app/(es)/es/full-stack-development-services/page.tsx.
 */
export const metadata: Metadata = pageMetadata({
  path: "/full-stack-development-services",
  title: fullStackCopy.en.meta.title,
  description: fullStackCopy.en.meta.description,
});

export default function FullStackDevelopment() {
  return <FullStackPage locale="en" />;
}
