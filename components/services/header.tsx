import Link from "next/link";

import { MobileMenu } from "@/components/mobile-menu";
import { Wordmark } from "@/components/wordmark";

import { ChevronDownIcon } from "./icons";

/**
 * Header del frame "Services - Website Design" (Figma 165:831): barra superior
 * de utilidades (buscador + "Our Packages") sobre una regla, y debajo el
 * wordmark con la nav de cuatro entradas.
 *
 * No es el SiteHeader del sitio vivo, que tiene otra nav y otro CTA. Este vive
 * aparte a proposito: la replica del Figma no debe arrastrar la home real.
 */

const services = [
  { href: "/services/website-design", label: "Web Design" },
  { href: "/services/email-marketing", label: "Email Marketing" },
  { href: "/services/seo", label: "SEO Services" },
  { href: "/services/ppc", label: "PPC" },
];

const navLink =
  "inline-flex min-h-[44px] items-center text-ui text-ink-soft " +
  "transition-colors hover:text-ink-black focus-visible:outline-[3px] " +
  "focus-visible:outline-offset-[3px] focus-visible:outline-violet";

/** El menu movil reutiliza el <dialog> del sitio, que solo acepta enlaces
 *  planos: los cuatro servicios se aplanan en lugar del desplegable. */
const mobileLinks = [
  { href: "/", label: "Home" },
  ...services.map((s) => ({ href: s.href, label: s.label })),
  { href: "/about-us", label: "About Us" },
  { href: "#contact", label: "Contact Us" },
];

/** `current` es la ruta de la pantalla que lo monta, para que el `aria-current`
 *  senale la pagina en la que se esta. Estaba fijo en Web Design, asi que las
 *  otras tres se anunciaban como si lo fueran. Lo miran tambien las entradas de
 *  primer nivel desde que existe /about-us, que es una de ellas. */
export function WebsiteDesignHeader({ current }: { current?: string }) {
  return (
    <header className="sticky top-0 z-20 bg-paper/94 backdrop-blur-lg">
      {/* Barra de utilidades. Se oculta en movil: el buscador y el pill no
          caben junto al wordmark a 375px. */}
      <div className="hidden border-b border-line min-[900px]:block">
        <div className="mx-auto flex h-[62px] max-w-[var(--container-wrap)] items-center justify-end gap-4 px-6 lg:px-[var(--spacing-gut)]">
          {/* El buscador del Figma no tiene backend detras. Se dibuja igual,
              pero deshabilitado: un campo que acepta texto y no busca nada
              miente mas que uno que se declara apagado. */}
          <div className="relative">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-ink-soft"
            >
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="m15.8 15.8 4.2 4.2" />
            </svg>
            <input
              type="search"
              disabled
              placeholder="Search"
              aria-label="Search"
              title="Search is not wired up yet"
              className="h-8 w-[211px] rounded-sm border border-line bg-paper pr-3 pl-9 text-small leading-5 text-ink placeholder:text-ink-soft disabled:cursor-not-allowed"
            />
          </div>

          <a
            href="#contact"
            className="inline-flex h-8 items-center justify-center rounded-sm bg-ink-black px-4 text-small font-semibold text-paper transition-colors hover:bg-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
          >
            Our Packages
          </a>
        </div>
      </div>

      <div className="border-b border-line min-[900px]:border-b-0">
        <div className="mx-auto flex h-16 max-w-[var(--container-wrap)] items-center justify-between gap-8 px-6 lg:px-[var(--spacing-gut)]">
          <Link
            href="/"
            aria-label="Emmvi, home"
            className="inline-flex min-h-[44px] items-center rounded-sm text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
          >
            <Wordmark className="h-8 w-auto" />
          </Link>

          <nav aria-label="Main" className="hidden min-[900px]:block">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/"
                  aria-current={current === "/" ? "page" : undefined}
                  className={`${navLink} aria-[current=page]:text-ink-black`}
                >
                  Home
                </Link>
              </li>

              {/* Desplegable sobre <details>: abre con teclado y con el raton,
                  y sigue abriendo sin JS. */}
              <li className="relative">
                <details className="group">
                  <summary
                    className={`${navLink} cursor-pointer list-none gap-1.5 text-ink-black [&::-webkit-details-marker]:hidden`}
                  >
                    Services
                    <ChevronDownIcon className="size-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="absolute top-full right-0 z-10 mt-1 w-[210px] rounded-md border border-line bg-paper py-2 shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
                    {services.map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          aria-current={s.href === current ? "page" : undefined}
                          className="flex min-h-[44px] items-center px-4 text-ui text-ink-soft transition-colors hover:bg-paper-alt hover:text-ink-black aria-[current=page]:font-medium aria-[current=page]:text-ink-black focus-visible:outline-[3px] focus-visible:-outline-offset-2 focus-visible:outline-violet"
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>

              <li>
                <Link
                  href="/about-us"
                  aria-current={current === "/about-us" ? "page" : undefined}
                  className={`${navLink} aria-[current=page]:text-ink-black`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <a href="#contact" className={navLink}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <MobileMenu links={mobileLinks} />
        </div>
      </div>
    </header>
  );
}
