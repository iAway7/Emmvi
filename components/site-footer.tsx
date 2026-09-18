import Link from "next/link";

import { Wordmark } from "./wordmark";

/** Mismas anclas absolutas que el header, por la misma razon: el footer
 *  tambien se monta fuera de la home. "Contact" ya no es un ancla sino
 *  `/contact`, que es una pagina de verdad. */
const columns = [
  {
    title: "Services",
    links: [
      { href: "/#services", label: "Design and build" },
      { href: "/#services", label: "CRM and automation" },
      { href: "/for/installers", label: "For installers" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#about", label: "About" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal-notice", label: "Legal Notice" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/cookies", label: "Cookie preferences" },
    ],
  },
];

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
                      className="inline-flex min-h-[44px] items-center text-[1rem] text-ink-soft transition-colors hover:text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
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
