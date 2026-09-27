import type { Metadata } from "next";

import { ThankYouPage, thankYouCopy } from "@/components/pages/thank-you";

/** /es/thank-you. Mismo `noindex` que la version inglesa, por lo mismo. */
export const metadata: Metadata = {
  title: thankYouCopy.es.title,
  description: thankYouCopy.es.description,
  robots: { index: false, follow: true },
};

export default function ThankYouEs() {
  return <ThankYouPage locale="es" />;
}
