"use client";

import { useEffect, useRef, useState } from "react";

import { Wordmark } from "./wordmark";

/**
 * Menu movil sobre <dialog> nativo: el focus trap y el cierre con Escape los
 * da el navegador. El bloqueo de scroll de fondo NO lo da: se comprobo que la
 * pagina seguia desplazandose detras, y se bloquea con la regla
 * `html:has(dialog[open])` de globals.css.
 *
 * Por debajo de 900px la nav del header se oculta, asi que este es el unico
 * acceso a Services / Who we work with / About / FAQ.
 */
type NavLink = {
  href: string;
  label: string;
  children?: readonly { href: string; label: string }[];
};

export function MobileMenu({ links }: { links: readonly NavLink[] }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  function close() {
    ref.current?.close();
  }

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    const onClose = () => setOpen(false);
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  /** Si se ensancha por encima del breakpoint con el menu abierto, cerrarlo. */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const onChange = () => {
      if (mq.matches) ref.current?.close();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="min-[900px]:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => {
          ref.current?.showModal();
          setOpen(true);
        }}
        className="inline-flex size-11 items-center justify-center rounded-sm text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      </button>

      <dialog
        ref={ref}
        id="mobile-menu"
        aria-label="Menu"
        className="m-0 h-full max-h-none w-full max-w-none bg-paper p-0 text-ink backdrop:bg-ink/40"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-[88px] shrink-0 items-center justify-between px-6">
            <Wordmark className="h-8 w-auto text-ink" />
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="inline-flex size-11 items-center justify-center rounded-sm text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
          </div>

          <nav aria-label="Main" className="flex-1 overflow-y-auto px-6 pb-10">
            <ul className="border-t border-line">
              {links.map((l) =>
                l.children ? (
                  /* Con submenu el titulo deja de ser enlace y pasa a ser
                     encabezado: en una pantalla estrecha no hay sitio para un
                     desplegable, asi que los hijos se ven directamente. Un
                     acordeon aqui solo anadiria un toque mas para llegar a lo
                     mismo. */
                  <li key={l.href} className="border-b border-line py-5">
                    <h2 className="text-h3 text-ink">{l.label}</h2>
                    <ul className="mt-1">
                      {l.children.map((c) => (
                        <li key={c.href}>
                          <a
                            href={c.href}
                            onClick={close}
                            className="flex min-h-[52px] items-center text-lede text-ink-soft focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
                          >
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={l.href} className="border-b border-line">
                    <a
                      href={l.href}
                      onClick={close}
                      className="flex min-h-[64px] items-center text-h3 text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
                    >
                      {l.label}
                    </a>
                  </li>
                ),
              )}
            </ul>

            <a
              href="#contact"
              onClick={close}
              className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-sm bg-ink px-6 text-[1rem] font-medium leading-6 text-paper transition-colors duration-150 hover:bg-ink-black focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
            >
              Schedule a call
            </a>
          </nav>
        </div>
      </dialog>
    </div>
  );
}
