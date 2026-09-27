import type { Locale } from "@/lib/i18n";

/**
 * Cinta de herramientas: los nombres en chapas, corriendo hacia la izquierda.
 *
 * Reusa la maquinaria de `.marquee` en globals.css, la misma de la cinta de
 * clientes: carril duplicado para que la vuelta no se vea, pausa en hover y en
 * focus-within —WCAG 2.2.2 pide poder parar lo que se mueve solo— y caida a
 * una reticula quieta con `prefers-reduced-motion: reduce`.
 *
 * **Nombres, no logos**, y es lo que hace que esto sea barato de mantener:
 * añadir una herramienta es una linea de texto, no un SVG que buscar, recortar
 * y ajustar opticamente. Ademas evita el problema de los logos ajenos: un
 * nombre dice "trabajamos con esto" y un logotipo insinua una relacion
 * comercial que puede no existir.
 *
 * La duracion sube con el numero de chapas para que la velocidad aparente no
 * cambie: con lista larga y duracion fija, la cinta se dispara.
 */
const groupLabel: Record<Locale, string> = {
  en: "Tools we work with",
  es: "Herramientas con las que trabajamos",
};

function Pills({ tools, duplicate = false }: { tools: string[]; duplicate?: boolean }) {
  return (
    <ul
      className="marquee__list"
      // La segunda copia existe solo para tapar la vuelta. Para un lector de
      // pantalla no esta: si no, lee la lista entera dos veces.
      aria-hidden={duplicate || undefined}
    >
      {tools.map((t) => (
        <li key={t} className="shrink-0">
          <span className="block rounded-full border border-current/25 px-5 py-2.5 font-mono text-small whitespace-nowrap">
            {t}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ToolMarquee({
  tools,
  locale = "en",
}: {
  tools: string[];
  locale?: Locale;
}) {
  // ~2.2s por chapa: mantiene la velocidad aparente al crecer la lista.
  const duracion = Math.max(30, Math.round(tools.length * 2.2));

  return (
    <div
      className="marquee"
      role="group"
      aria-label={groupLabel[locale]}
      style={{ "--marquee-duration": `${duracion}s` } as React.CSSProperties}
    >
      <div className="marquee__track">
        <Pills tools={tools} />
        <Pills tools={tools} duplicate />
      </div>
    </div>
  );
}
