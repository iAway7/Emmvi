import Link from "next/link";

import { Wordmark } from "@/components/wordmark";

import { InstagramIcon, LinkedInIcon, XIcon } from "./icons";

/**
 * Footer del frame de Figma: wordmark + tres columnas + regla + copyright y
 * redes. No es el SiteFooter del sitio vivo, que tiene otras columnas.
 *
 * El copyright se conserva tal cual esta en el Figma, 2024 incluido.
 */

const columns = [
  {
    title: "Services",
    links: [
      { href: "/services/email-marketing", label: "Email Marketing" },
      { href: "/services/website-design", label: "Web Design" },
      { href: "/services/seo", label: "SEO Services" },
      { href: "/services/ppc", label: "PPC" },
    ],
  },
  {
    title: "About emmvi",
    links: [
      { href: "/about-us", label: "Our Team" },
      { href: "#contact", label: "Contact Us" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/cookies", label: "Cookie Preference" },
    ],
  },
];

const social = [
  { href: "https://www.linkedin.com/company/emmvi", label: "emmvi on LinkedIn", Icon: LinkedInIcon },
  { href: "https://x.com/emmvi", label: "emmvi on X", Icon: XIcon },
  { href: "https://www.instagram.com/emmvi", label: "emmvi on Instagram", Icon: InstagramIcon },
];

export function WebsiteDesignFooter() {
  return (
    <footer className="border-t border-line pt-16 pb-12">
      <div className="mx-auto max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
          <Link
            href="/"
            aria-label="emmvi, home"
            className="inline-flex h-9 w-fit items-center rounded-sm text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
          >
            <Wordmark className="h-9 w-auto" />
          </Link>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-ui font-semibold text-ink">
                {col.title}
              </p>
              <ul className="mt-1">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="inline-flex min-h-[44px] items-center text-ui text-ink-soft transition-colors hover:text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
          <p className="text-small text-ink-soft">
            &copy;emmvi Inc. 2024 ALL RIGHTS RESERVED.
          </p>
          <ul className="flex items-center gap-2">
            {social.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="inline-flex size-11 items-center justify-center rounded-sm text-ink transition-colors hover:text-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
