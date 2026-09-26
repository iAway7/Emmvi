import Image from "next/image";

import { CtaLink } from "@/components/cta-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { localizePath, type Locale } from "@/lib/i18n";

/**
 * 404 del sitio, en los dos idiomas. Lo montan app/(en)/not-found.tsx y
 * app/(es)/es/not-found.tsx.
 *
 * No es un callejon sin salida: la promesa de emmvi es que toda consulta se
 * contesta, asi que ademas de devolver a la home ofrece contacto. Es el mismo
 * criterio que la pagina de espera.
 *
 * La ilustracion la entrego el usuario; es line-art en la misma paleta que el
 * resto (#161616, #E8E8E8, #666), asi que entra sin recolorear. Va con alt
 * vacio a proposito: el h1 ya dice en palabras lo que el dibujo cuenta, y
 * repetirlo solo alarga lo que oye un lector de pantalla.
 */

export const notFoundCopy = {
  en: {
    title: "Page not found",
    heading: "This page doesn’t exist",
    lede: "The link may be wrong, or the page may have moved. Nothing is broken on your end.",
    home: "Go to the homepage",
    contact: "Get in touch",
    hint: "Looking for something specific? Everything is linked from the bottom of any page.",
  },
  es: {
    title: "Página no encontrada",
    heading: "Esta página no existe",
    lede: "Puede que el enlace esté mal o que la página se haya movido. Por tu parte no hay nada roto.",
    home: "Ir a la portada",
    contact: "Escríbenos",
    hint: "¿Buscas algo concreto? Todo está enlazado al pie de cualquier página.",
  },
} satisfies Record<Locale, Record<string, string>>;

export function NotFoundPage({ locale }: { locale: Locale }) {
  const t = notFoundCopy[locale];

  return (
    <>
      <SiteHeader locale={locale} />

      <main className="mx-auto w-full max-w-[var(--container-wrap)] px-6 py-16 lg:px-[var(--spacing-gut)] lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <h1 className="text-ink">{t.heading}</h1>
            <p className="mt-6 max-w-[44ch] text-lede text-pretty text-ink-soft">
              {t.lede}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <CtaLink href={localizePath("/", locale)}>{t.home}</CtaLink>
              <CtaLink href={localizePath("/contact-us", locale)} variant="ghost">
                {t.contact}
              </CtaLink>
            </div>

            <p className="mt-8 text-small text-ink-soft">{t.hint}</p>
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

      <SiteFooter locale={locale} />
    </>
  );
}
