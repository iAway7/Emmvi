import type { Metadata } from "next";

import { CareersPage } from "@/components/pages/careers";
import { careersCopy } from "@/lib/copy/careers";
import { pageMetadata } from "@/lib/site";

/**
 * /careers en ingles. Composicion en components/pages/careers.tsx y texto en
 * lib/copy/careers.ts, compartidos con app/(es)/es/careers/page.tsx.
 */
export const metadata: Metadata = pageMetadata({
  path: "/careers",
  title: careersCopy.en.meta.title,
  description: careersCopy.en.meta.description,
});

export default function Careers() {
  return <CareersPage locale="en" />;
}
