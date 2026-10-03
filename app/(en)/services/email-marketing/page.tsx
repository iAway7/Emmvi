import type { Metadata } from "next";

import { EmailMarketingPage } from "@/components/pages/email-marketing";
import { emailMarketingCopy } from "@/lib/copy/email-marketing";
import { pageMetadata } from "@/lib/site";

/**
 * /services/email-marketing. Composicion en
 * components/pages/email-marketing.tsx y texto en lib/copy/email-marketing.ts,
 * compartidos con app/(es)/es/services/email-marketing/page.tsx.
 */
export const metadata: Metadata = pageMetadata({
  path: "/services/email-marketing",
  title: emailMarketingCopy.en.meta.title,
  description: emailMarketingCopy.en.meta.description,
  legacy: true,
});

export default function EmailMarketing() {
  return <EmailMarketingPage locale="en" />;
}
