import type { Metadata } from "next";

import { NotFoundPage, notFoundCopy } from "@/components/pages/not-found";

/**
 * 404 del sitio en ingles. En el App Router este archivo captura cualquier
 * ruta que no exista bajo este layout raiz, y sustituye a la pantalla por
 * defecto de Next. La composicion vive en components/pages/not-found.tsx,
 * compartida con la version española.
 *
 * Las rutas bajo /es/ que no existen las recoge app/(es)/es/[...rest], que
 * lanza `notFound()` para que el 404 salga en español.
 */
export const metadata: Metadata = {
  title: notFoundCopy.en.title,
  // Una pagina de error no aporta nada a un buscador, y ademas Next le pone
  // 404 de todos modos.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundPage locale="en" />;
}
