import Link from "next/link";
import { CtaLink } from "./cta-link";
import { MobileMenu } from "./mobile-menu";
import { NavDropdown } from "./nav-dropdown";
import { Wordmark } from "./wordmark";

/**
 * Anclas absolutas (`/#services`, no `#services`): este header ya no vive solo
 * en la home — `/contact` lo monta tambien, y ahi un ancla relativa no lleva a
 * ninguna parte. Desde la home siguen siendo navegacion dentro del documento,
 * asi que el scroll suave no cambia.
 *
 * El CTA se queda en `#contact` a proposito: las dos paginas que montan este
 * header tienen su propia seccion con ese id, asi que no hace falta salir de
 * la pagina para llegar al formulario.
 */
/**
 * Las cinco paginas de servicio. Cuelgan de "Services" en la nav en vez de
 * quedarse solo en el pie, que hasta ahora era la unica via para llegar a
 * ellas desde dentro del sitio.
 *
 * "Full-Stack Development" no vive bajo /services/ como las otras cuatro: es
 * la URL que el WordPress tenia indexada y se conserva. Ver next.config.ts.
 *
 * /services/gohighlevel-automation no esta aqui: la pagina existe pero sale
 * como borrador, sin enlazar y sin indexar. Ver su propio page.tsx.
 */
const services = [
  { href: "/services/website-design/", label: "Web Design" },
  { href: "/services/email-marketing/", label: "Email Marketing" },
  { href: "/services/seo/", label: "SEO Services" },
  { href: "/services/ppc/", label: "PPC" },
  { href: "/full-stack-development-services/", label: "Full-Stack Development" },
];

/**
 * `children` convierte una entrada en desplegable. "Services" dejo de ser un
 * ancla a la seccion de la home: ahora abre el menu, que es lo que un visitante
 * espera de esa palabra en una barra de navegacion.
 */
const links = [
  { href: "/#services", label: "Services", children: services },
  { href: "/#who", label: "Who we work with" },
  // Pagina propia, no el ancla de la seccion "Meet Emmvi" de la home.
  { href: "/about-us/", label: "About" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/94 backdrop-blur-lg">
      <div className="mx-auto flex h-[88px] max-w-[var(--container-wrap)] items-center justify-between gap-8 px-6 lg:px-[var(--spacing-gut)]">
        <Link
          href="/"
          aria-label="Emmvi, home"
          className="inline-flex min-h-[44px] items-center rounded-sm text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
        >
          <Wordmark className="h-8 w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden min-[900px]:block">
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
          Schedule a call
        </CtaLink>
        <MobileMenu links={links} />
      </div>
    </header>
  );
}
