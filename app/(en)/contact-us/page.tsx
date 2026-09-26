import type { Metadata } from "next";

import { ContactPage } from "@/components/pages/contact";
import { contactCopy } from "@/lib/copy/contact";
import { pageMetadata } from "@/lib/site";

/**
 * /contact-us en ingles. Composicion en components/pages/contact.tsx y texto
 * en lib/copy/contact.ts, compartidos con app/(es)/es/contact-us/page.tsx.
 */
export const metadata: Metadata = pageMetadata({
  path: "/contact-us",
  title: contactCopy.en.meta.title,
  description: contactCopy.en.meta.description,
});

export default function Contact() {
  return <ContactPage locale="en" />;
}
