import type { Metadata } from "next";

import { NotFoundPage, notFoundCopy } from "@/components/pages/not-found";

/**
 * 404 en español. Un not-found.tsx anidado solo se muestra cuando algo dentro
 * de su segmento lanza `notFound()`; las URLs que no existen bajo /es/ las
 * recoge el catch-all de al lado (app/(es)/es/[...rest]/page.tsx), que es
 * quien lo lanza.
 */
export const metadata: Metadata = {
  title: notFoundCopy.es.title,
  robots: { index: false, follow: true },
};

export default function NotFoundEs() {
  return <NotFoundPage locale="es" />;
}
