import Link from "next/link";

import { Wordmark } from "./wordmark";

/** Mismas anclas absolutas que el header, por la misma razon: el footer
 *  tambien se monta fuera de la home. "Contact" ya no es un ancla sino
 *  `/contact`, que es una pagina de verdad. */
const columns = [
  {
    title: "Services",
    links: [
      { href: "/services/website-design/", label: "Web Design" },
      { href: "/services/email-marketing/", label: "Email Marketing" },
      { href: "/services/seo/", label: "SEO Services" },
      { href: "/services/ppc/", label: "PPC" },
      { href: "/for/installers/", label: "For installers" },
    ],
  },
  {
    title: "Company",
    // "About" apunta a la pagina, no al ancla de la home: existe /about-us y es
    // la unica via que queda para llegar, desde que todas las paginas montan
    // este footer en lugar del de la replica del Figma.
    links: [
      { href: "/about-us/", label: "About" },
      { href: "/blog/", label: "Blog" },
      { href: "/contact-us/", label: "Contact" },
    ],
  },
  /**
   * "Legal Notice" apunta a /legal-notice, que todavia no existe.
   *
   * "Cookie preferences" no es un enlace, es un boton: ver `CookiePreferences`
   * mas abajo.
   */
  {
    title: "Legal",
    links: [
      { href: "/legal-notice/", label: "Legal Notice" },
      { href: "/privacy-policy/", label: "Privacy Policy" },
    ],
    cookieButton: true,
  },
];

/**
 * Los enlaces miden 44px de alto en movil y 32px en escritorio (`lg:min-h-8`).
 *
 * WCAG 2.2 AA pide 24x24 (SC 2.5.8); los 44 son AAA (SC 2.5.5). Tenerlos a 44
 * en escritorio dejaba 20px de aire muerto por fila —el texto solo ocupa 24—
 * y con cinco servicios la columna se estiraba sin motivo. En movil se quedan
 * en 44 porque ahi si se pulsa con el dedo.
 */
/**
 * Abre el panel de preferencias de CookieYes.
 *
 * **La pieza entera es la clase `cky-banner-element`.** El script de CookieYes
 * la busca al cargar y le engancha el evento el solo; aqui no hay ni una linea
 * de JavaScript escuchando este boton, y no hace falta.
 *
 * Es un <button> y no un <a href="#"> a proposito. CookieYes se carga desde
 * GTM y puede no estar vivo —no lo esta en local, donde el dominio no coincide
 * con el registrado en su cuenta—: un enlace saltaria al principio de la
 * pagina al pulsarlo, y un boton sin nadie escuchando no hace absolutamente
 * nada, que es el fallo correcto.
 *
 * Sustituye al widget flotante de CookieYes, que conviene dejar desactivado en
 * su panel: se coloca abajo a la izquierda y acabaria siendo un circulo
 * permanente tapando la pagina.
 *
 * Y sustituye tambien a la URL /cookie-preference/ que tenia el WordPress: el
 * panel es un modal, no una pagina, asi que esa URL no vuelve por aqui.
 */
function CookiePreferences() {
  return (
    <button
      type="button"
      className="cky-banner-element inline-flex min-h-[44px] items-center text-left text-[1rem] text-ink-soft transition-colors hover:text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet lg:min-h-8"
    >
      Cookie preferences
    </button>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line pt-18 pb-14">
      <div className="mx-auto max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
          <div>
            <Link
              href="/"
              aria-label="Emmvi, home"
              className="inline-flex rounded-sm text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
            >
              <Wordmark className="h-8 w-auto" />
            </Link>
            <p className="mt-5 max-w-[24em] text-body text-ink-soft">
              Websites and the systems that run behind them, for small
              businesses in Europe and the Americas.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="text-[1rem] font-semibold leading-6 text-ink">
                {col.title}
              </h2>
              <ul className="mt-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="inline-flex min-h-[44px] items-center text-[1rem] text-ink-soft transition-colors hover:text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet lg:min-h-8"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                {"cookieButton" in col ? (
                  <li>
                    <CookiePreferences />
                  </li>
                ) : null}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-6 border-t border-line pt-8 text-small text-ink-soft">
          <p>&copy; 2026 Emmvi. All rights reserved.</p>
          <p>Emmvi&reg; is a registered trademark in Spain.</p>
        </div>
      </div>
    </footer>
  );
}
