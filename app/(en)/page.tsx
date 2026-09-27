import type { Metadata } from "next";

import { ComingSoon, comingSoonMetadata } from "@/components/coming-soon";
import { HomePage } from "@/components/pages/home";
import { homeCopy } from "@/lib/copy/home";
import { comingSoon, pageMetadata } from "@/lib/site";

/**
 * La home en ingles. La composicion vive en components/pages/home.tsx y el
 * texto en lib/copy/home.ts, compartidos con app/(es)/es/page.tsx.
 *
 * COMING_SOON=1 sirve la pagina de espera en la raiz.
 *
 * Se resuelve en build y no en middleware: Next 16 emite el middleware con
 * sintaxis ESM pero Vercel lo carga como CommonJS sin "type":"module" en
 * package.json, y revienta con MIDDLEWARE_INVOCATION_FAILED. Para un flag
 * estatico el middleware sobraba igualmente: esto se resuelve en build, sin
 * invocacion serverless por peticion.
 *
 * A cambio, cambiar la variable exige volver a desplegar.
 *
 * La lectura de la variable esta ahora en lib/site.ts, porque el robots.txt y
 * el sitemap dependen de ella tanto como esta pagina.
 */

export const metadata: Metadata = comingSoon
  ? comingSoonMetadata
  : pageMetadata({
      path: "/",
      title: homeCopy.en.meta.title,
      // Absoluto porque ya dice "emmvi": la plantilla lo dejaria repetido.
      absoluteTitle: true,
      description: homeCopy.en.meta.description,
    });

export default function Home() {
  if (comingSoon) return <ComingSoon />;
  return <HomePage locale="en" />;
}
