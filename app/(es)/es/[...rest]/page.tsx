import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { notFoundCopy } from "@/components/pages/not-found";

/**
 * Cualquier URL bajo /es/ que no tenga pagina propia acaba aqui, y de aqui al
 * 404 en español (app/(es)/es/not-found.tsx).
 *
 * Hace falta porque el App Router solo enseña un not-found.tsx anidado cuando
 * algo dentro de su segmento lanza `notFound()`: una URL que no casa con
 * ninguna ruta va al 404 del layout raiz que toque, y con dos layouts raiz
 * no hay forma de elegir cual sin este catch-all. Sin el, /es/lo-que-sea
 * saldria en ingles.
 *
 * Sin `generateStaticParams`: no hay nada que pregenerar, y el 404 se sirve
 * igual.
 */
/**
 * El mismo titulo que not-found.tsx. Sin esto el HTML sale con el titulo del
 * 404 pero al hidratar Next lo sustituye por el del layout, porque la ruta
 * que lanzo `notFound()` es esta y no declaraba ninguno.
 */
export const metadata: Metadata = {
  title: notFoundCopy.es.title,
  robots: { index: false, follow: true },
};

export default function CatchAllEs() {
  notFound();
}
