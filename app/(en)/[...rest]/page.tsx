import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { notFoundCopy } from "@/components/pages/not-found";

/**
 * Cualquier URL que no case con ninguna ruta acaba aqui, y de aqui al 404 en
 * ingles (app/(en)/not-found.tsx).
 *
 * Hacia falta desde que el sitio tiene dos layouts raiz. Con uno solo,
 * app/not-found.tsx recogia las URLs sin ruta el solo; con dos, Next no sabe
 * bajo cual pintarlas y cae en su pantalla por defecto, sin estilos y con
 * `<html>` sin `lang`. Este catch-all lanza `notFound()` desde dentro del
 * grupo ingles, que es lo que hace que el 404 propio se muestre.
 *
 * Las URLs bajo /es/ no llegan aqui: app/(es)/es/[...rest] es mas concreto y
 * gana. `[slug]` (los articulos) tambien es mas concreto que esto, asi que un
 * articulo que no existe sigue pasando por su propio `notFound()`.
 *
 * `global-not-found.tsx` haria lo mismo sin catch-all, pero en Next 16.3
 * sigue detras de un flag experimental.
 */
/**
 * El mismo titulo que not-found.tsx. Sin esto el HTML sale con el titulo del
 * 404 pero al hidratar Next lo sustituye por el del layout, porque la ruta
 * que lanzo `notFound()` es esta y no declaraba ninguno.
 */
export const metadata: Metadata = {
  title: notFoundCopy.en.title,
  robots: { index: false, follow: true },
};

export default function CatchAll() {
  notFound();
}
