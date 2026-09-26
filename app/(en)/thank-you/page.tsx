import type { Metadata } from "next";

import { ThankYouPage, thankYouCopy } from "@/components/pages/thank-you";

/**
 * /thank-you en ingles. Composicion y texto en components/pages/thank-you.tsx,
 * compartidos con app/(es)/es/thank-you/page.tsx.
 *
 * Sin `pageMetadata`: con `noindex` no hace falta canonica ni Open Graph, y
 * un `hreflang` en una pagina que no se indexa no le sirve a nadie.
 */
export const metadata: Metadata = {
  title: thankYouCopy.en.title,
  description: thankYouCopy.en.description,
  robots: { index: false, follow: true },
};

export default function ThankYou() {
  return <ThankYouPage locale="en" />;
}
