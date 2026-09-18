import type { Metadata } from "next";
import Image from "next/image";

import { CtaLink } from "@/components/cta-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

/**
 * 404 del sitio. En el App Router este archivo captura cualquier ruta que no
 * exista, y sustituye a la pantalla por defecto de Next.
 *
 * No es un callejon sin salida: la promesa de Emmvi es que toda consulta se
 * contesta, asi que ademas de devolver a la home ofrece contacto. Es el mismo
 * criterio que la pagina de espera.
 *
 * La ilustracion la entrego el usuario; es line-art en la misma paleta que el
 * resto (#161616, #E8E8E8, #666), asi que entra sin recolorear. Va con alt
 * vacio a proposito: el h1 ya dice en palabras lo que el dibujo cuenta, y
 * repetirlo solo alarga lo que oye un lector de pantalla.
 */
export const metadata: Metadata = {
  title: "Page not found",
  // Una pagina de error no aporta nada a un buscador, y ademas Next le pone
  // 404 de todos modos.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />

      <main className="mx-auto w-full max-w-[var(--container-wrap)] px-6 py-16 lg:px-[var(--spacing-gut)] lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <h1 className="text-display text-balance text-ink">
              This page doesn&rsquo;t exist
            </h1>
            <p className="mt-6 max-w-[44ch] text-lede text-pretty text-ink-soft">
              The link may be wrong, or the page may have moved. Nothing is
              broken on your end.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink href="/">Go to the homepage</CtaLink>
              <CtaLink href="/contact" variant="ghost">
                Get in touch
              </CtaLink>
            </div>

            <p className="mt-8 text-small text-ink-soft">
              Looking for something specific? Everything is linked from the
              bottom of any page.
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <Image
              src="/figma/404.svg"
              alt=""
              width={1301}
              height={1082}
              priority
              className="mx-auto h-auto w-full max-w-[560px]"
            />
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
