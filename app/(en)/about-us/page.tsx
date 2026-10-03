import type { Metadata } from "next";

import { AboutUsPage } from "@/components/pages/about-us";
import { aboutUsCopy } from "@/lib/copy/about-us";
import { pageMetadata } from "@/lib/site";

/**
 * /about-us. Composicion en components/pages/about-us.tsx y texto en
 * lib/copy/about-us.ts, compartidos con app/(es)/es/about-us/page.tsx.
 */
export const metadata: Metadata = pageMetadata({
  path: "/about-us",
  // Absoluto: la plantilla "%s · emmvi" dejaria "About emmvi · emmvi".
  title: aboutUsCopy.en.meta.title,
  absoluteTitle: true,
  description: aboutUsCopy.en.meta.description,
  legacy: true,
});

export default function AboutUs() {
  return <AboutUsPage locale="en" />;
}
