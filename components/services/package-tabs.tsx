"use client";

import { useId, useState } from "react";

/**
 * "What is included in our SEO package?" del Figma (165:2461–2479 + el panel de
 * la derecha): lista numerada a la izquierda, contenido a la derecha.
 *
 * Es un patrón de pestañas, así que va con roles de pestaña de verdad: flechas
 * para moverse, Home/End a los extremos y el panel asociado por `aria-controls`.
 * Con un `<details>` por ítem no habría panel único a la derecha, que es lo que
 * dibuja el Figma.
 *
 * OJO: el Figma solo escribe el cuerpo de la primera. Las otras tres son título
 * sin contenido y van marcadas, no inventadas.
 *
 * El numeral es texto vivo, no el SVG de 32 px que trae el archivo: ese es el
 * glifo de Roboto vectorizado, y la tipografía del proyecto es DM Sans. Como
 * imagen tampoco heredaría el color ni lo leería nadie. Va al tamaño del
 * original (dígitos de ~17 px, que en DM Sans 800 son 24 px de cuerpo).
 */

export type PackageTab = { title: string; heading?: string; body?: string };

export function PackageTabs({ tabs }: { tabs: PackageTab[] }) {
  const [active, setActive] = useState(0);
  const id = useId();

  function onKeyDown(e: React.KeyboardEvent) {
    const last = tabs.length - 1;
    const next =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? active === last
          ? 0
          : active + 1
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? active === 0
            ? last
            : active - 1
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : -1;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  }

  const current = tabs[active];

  return (
    <div className="grid gap-10 min-[900px]:grid-cols-[408px_minmax(0,1fr)] min-[900px]:items-start min-[900px]:gap-16">
      <div
        role="tablist"
        aria-label="What the SEO package includes"
        aria-orientation="vertical"
        onKeyDown={onKeyDown}
        className="grid gap-6"
      >
        {tabs.map((t, i) => (
          <button
            key={t.title}
            id={`${id}-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`${id}-panel`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`flex min-h-[88px] items-center gap-6 rounded-md border bg-paper px-8 text-left transition-colors focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet ${
              i === active
                ? "border-ink-black shadow-[0_6px_18px_rgba(0,0,0,0.06)]"
                : "border-line hover:border-ink-soft"
            }`}
          >
            <span className="text-h3 leading-none font-extrabold text-ink">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={`text-ui font-bold ${
                i === active ? "text-violet" : "text-ink"
              }`}
            >
              {t.title}
            </span>
          </button>
        ))}
      </div>

      <div id={`${id}-panel`} role="tabpanel" tabIndex={0} className="focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet">
        <h3 className="text-h2 text-balance text-ink">
          {current.heading ?? current.title}
        </h3>
        {/* Sin cuerpo escrito no se pinta nada, en vez del "Copy pending" en
            cursiva que salía antes: era una nota de trabajo a la vista del
            visitante. La pestaña sigue existiendo con su título. */}
        {current.body ? (
          <p className="mt-6 max-w-[46em] text-copy text-pretty text-ink-soft">
            {current.body}
          </p>
        ) : null}
      </div>
    </div>
  );
}
