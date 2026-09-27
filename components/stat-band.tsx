import type { Locale } from "@/lib/i18n";

/**
 * Banda de cifras. Todas en fila, como pidio el usuario.
 *
 * **Cada numero de aqui tiene que ser contable.** Es la regla de PRODUCT.md —
 * ninguna cifra sin medir — y en esta banda pesa el doble: una cifra redonda e
 * inventada es exactamente de lo que vive la competencia de "GoHighLevel
 * expert", y lo que separa a emmvi de ella es no hacerlo. Si alguna deja de
 * poder demostrarse, se quita; no se redondea hacia arriba.
 *
 * Tampoco entra nada que revele el tamano del equipo. "2 paises" si; "2
 * personas" no. Ver PRODUCT.md.
 *
 * En movil van de dos en dos: cinco columnas a 375px dejan el numero a 12px y
 * la etiqueta partida en tres lineas.
 */
export type Stat = {
  /** La cifra. Corta: se lee de un vistazo o no se lee. */
  value: string;
  /** Que cuenta, en mayusculas y monoespaciada como en la referencia. */
  label: Record<Locale, string>;
};

export function StatBand({
  stats,
  locale = "en",
  tone = "light",
}: {
  stats: Stat[];
  locale?: Locale;
  tone?: "light" | "dark";
}) {
  const numero = tone === "dark" ? "text-white" : "text-ink";
  const etiqueta = tone === "dark" ? "text-white/60" : "text-ink-soft";
  const linea = tone === "dark" ? "border-white/15" : "border-line";

  return (
    <dl
      className={`grid grid-cols-2 gap-x-8 gap-y-10 border-t pt-8 min-[900px]:grid-flow-col min-[900px]:auto-cols-fr min-[900px]:gap-x-10 ${linea}`}
    >
      {stats.map((s) => (
        <div key={s.label.en}>
          <dt className="sr-only">{s.label[locale]}</dt>
          <dd className="m-0">
            <span className={`block text-stat ${numero}`}>{s.value}</span>
            <span
              aria-hidden="true"
              className={`mt-3 block font-mono text-small tracking-[0.06em] uppercase ${etiqueta}`}
            >
              {s.label[locale]}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
