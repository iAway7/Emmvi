"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

export type NavChild = { href: string; label: string };

/**
 * Desplegable de la nav de escritorio.
 *
 * El disparador es un <button> y no un enlace, porque no navega a ninguna
 * parte: abre. Un <a> que no lleva a ningun sitio miente al lector de pantalla
 * y no responde a la barra espaciadora.
 *
 * Abre de tres formas, y hacen falta las tres:
 *  - **Hover**, que es lo que espera quien usa raton.
 *  - **Clic**, que es lo que funciona en un portatil tactil, donde el hover se
 *    dispara de forma erratica.
 *  - **Teclado**: Enter o espacio sobre el boton. Escape cierra y devuelve el
 *    foco al disparador, que si no se pierde al final del documento.
 *
 * Se cierra tambien cuando el foco sale del bloque (`onBlur` comprobando
 * `relatedTarget`), que es el caso de tabular mas alla del ultimo enlace.
 *
 * No hay `aria-haspopup="menu"` ni `role="menu"` a proposito: ese rol es para
 * menus de aplicacion, con navegacion por flechas y sin tabulacion entre
 * items. Esto es una lista de enlaces, y como lista de enlaces se comporta.
 * `aria-expanded` es lo que de verdad hace falta.
 */
export function NavDropdown({
  label,
  items,
  className = "",
}: {
  label: string;
  items: readonly NavChild[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const wrap = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  /** Escape cierra desde cualquier punto del bloque. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  /**
   * Toque fuera del bloque. Solo hace falta en tactil: con raton ya cierra
   * `onMouseLeave`, y con teclado, `onBlur`.
   */
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  return (
    <div
      ref={wrap}
      className={`relative ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        // Solo si el foco sale del bloque entero, no al saltar de un enlace
        // del panel al siguiente.
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        ref={trigger}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        /**
         * Un `onClick` que alterna sin mas **cerraba el panel nada mas
         * abrirse**: con raton, `mouseenter` ya lo habia abierto, y el clic
         * que venia detras lo cerraba.
         *
         * `detail === 0` distingue el origen: es un clic sintetizado por el
         * teclado (Enter o espacio sobre el boton), donde no hubo hover y
         * alternar es justo lo que se espera. Con un clic de raton o un toque,
         * `detail` es 1 o mas: entonces solo abre si el hover no lo hizo ya
         * —el caso tactil— y si ya esta abierto no hace nada, porque cerrarlo
         * dejaria al raton encima de un menu que no se puede reabrir sin salir
         * y volver a entrar.
         */
        onClick={(e) => {
          if (e.detail === 0) setOpen((v) => !v);
          else if (!open) setOpen(true);
        }}
        className="inline-flex min-h-[44px] items-center gap-1.5 text-ui text-ink-soft transition-colors hover:text-ink-black focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
      >
        {label}
        <svg
          aria-hidden="true"
          viewBox="0 0 12 8"
          className={`h-2 w-3 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 1.5 6 6.5 11 1.5" />
        </svg>
      </button>

      {/* Siempre en el DOM, oculto con `hidden`: asi el panel no se monta y
          desmonta en cada hover, que rompia la transicion y hacia parpadear el
          foco al tabular. */}
      <div
        id={panelId}
        hidden={!open}
        className="absolute top-full left-0 z-30 min-w-[248px] rounded-md border border-line bg-paper p-2 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.18)]"
      >
        <ul>
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center rounded-sm px-3 text-ui text-ink-soft transition-colors hover:bg-paper-alt hover:text-ink-black focus-visible:outline-[3px] focus-visible:outline-offset-[-3px] focus-visible:outline-violet"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
