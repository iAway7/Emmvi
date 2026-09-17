import Link from "next/link";
import { CtaLink } from "./cta-link";
import { MobileMenu } from "./mobile-menu";
import { Wordmark } from "./wordmark";

const links = [
  { href: "#services", label: "Services" },
  { href: "#who", label: "Who we work with" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
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
                <a
                  href={l.href}
                  className="inline-flex min-h-[44px] items-center text-[1rem] leading-6 text-ink-soft transition-colors hover:text-ink-black focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* A 375px el wordmark, el CTA y el boton de menu no caben juntos, asi
            que por debajo de 900px el CTA vive dentro del menu. */}
        <CtaLink href="#contact" className="hidden min-[900px]:inline-flex">
          Schedule a call
        </CtaLink>
        <MobileMenu links={links} />
      </div>
    </header>
  );
}
