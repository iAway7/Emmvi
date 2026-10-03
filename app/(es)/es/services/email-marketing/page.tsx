import type { Metadata } from "next";

import { EmailMarketingPage } from "@/components/pages/email-marketing";
import { emailMarketingCopy } from "@/lib/copy/email-marketing";
import { pageMetadata } from "@/lib/site";

/** /es/services/email-marketing. Misma plantilla y texto tipado que la inglesa. */
export const metadata: Metadata = pageMetadata({
  path: "/services/email-marketing",
  locale: "es",
  title: emailMarketingCopy.es.meta.title,
  description: emailMarketingCopy.es.meta.description,
  legacy: true,
});

export default function EmailMarketingEs() {
  return <EmailMarketingPage locale="es" />;
}
