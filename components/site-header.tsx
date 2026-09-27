import Link from "next/link";

import { chrome } from "@/lib/chrome-copy";
import { localizePath, type Locale } from "@/lib/i18n";
import { CtaLink } from "./cta-link";
import { MobileMenu } from "./mobile-menu";
import { NavDropdown } from "./nav-dropdown";
import { Wordmark } from "./wordmark";

/**
 * La cabecera de todas las paginas, en los dos idiomas.
 *
 * Los textos y los enlaces salen de lib/chrome-copy.ts segun `locale`. Las
 * anclas son absolutas (`/#services`, no `#services`) porque este header no
 * vive solo en la home, y fuera de ella un ancla relativa no lleva a ninguna
 * parte. Desde la home siguen siendo navegacion dentro del documento, asi que
 * el scroll suave no cambia.
 *
 * El CTA se queda en `#contact` a proposito: las paginas que montan este
 * header tienen su propia seccion con ese id, asi que no hace falta salir de
 * la pagina para llegar al formulario.
 *
 * `path` es la ruta canonica en ingles de la pagina que lo monta. Lo usaba el
 * selector de idioma (components/language-switcher.tsx), que **esta retirado
 * de momento**: se decidio no enseñarlo hasta que el español tenga mas
 * paginas. El prop se conserva para volver a montarlo sin tocar las paginas.
 */
export function SiteHeader({
  locale = "en",
  path,
}: {
  locale?: Locale;
  /** Solo se pasa al menu movil mientras el selector este retirado. */
  path?: string;
} = {}) {
  const copy = chrome[locale];
  const { links } = copy.header;

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/94 backdrop-blur-lg">
      <div className="mx-auto flex h-[88px] max-w-[var(--container-wrap)] items-center justify-between gap-8 px-6 lg:px-[var(--spacing-gut)]">
        <Link
          href={localizePath("/", locale)}
          aria-label={copy.header.homeLabel}
          className="inline-flex min-h-[44px] items-center rounded-sm text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
        >
          <Wordmark className="h-8 w-auto" />
        </Link>

        <nav aria-label={copy.header.navLabel} className="hidden min-[900px]:block">
          <ul className="flex items-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                {l.children ? (
                  <NavDropdown label={l.label} items={l.children} />
                ) : (
                  <a
                    href={l.href}
                    className="inline-flex min-h-[44px] items-center text-ui text-ink-soft transition-colors hover:text-ink-black focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* A 375px el wordmark, el CTA y el boton de menu no caben juntos, asi
            que por debajo de 900px el CTA vive dentro del menu.

            Se oculta con `max-[899px]:hidden` y no con `hidden`, que **no
            funcionaba**: Tailwind 4 emite las utilidades de display por orden
            alfabetico, asi que `.inline-flex` cae despues de `.hidden` y el
            `inline-flex` de la cadena base de CtaLink ganaba por orden de hoja
            — el CTA se veia en movil aplastando al wordmark. Es el mismo fallo
            que ya documenta cta-link.tsx con `border-transparent`. Dentro de
            una media query la regla va despues de todas las utilidades planas,
            asi que esta si gana. */}
        <CtaLink href="#contact" className="max-[899px]:hidden">
          {copy.header.cta}
        </CtaLink>
        <MobileMenu locale={locale} path={path} />
      </div>
    </header>
  );
}
