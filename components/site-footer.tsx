import Link from "next/link";

import { chrome } from "@/lib/chrome-copy";
import { localizePath, type Locale } from "@/lib/i18n";
import { Wordmark } from "./wordmark";

/**
 * El pie de todas las paginas, en los dos idiomas. Columnas y textos salen de
 * lib/chrome-copy.ts segun `locale`; en español no hay columna de servicios
 * porque esas paginas no estan traducidas (ver el comentario de ese archivo).
 *
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
function CookiePreferences({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="cky-banner-element inline-flex min-h-[44px] items-center text-left text-ui text-ink-soft transition-colors hover:text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet lg:min-h-8"
    >
      {label}
    </button>
  );
}

export function SiteFooter({
  locale = "en",
}: {
  locale?: Locale;
  /** Sin uso mientras el selector de idioma este retirado. Ver arriba. */
  path?: string;
} = {}) {
  const copy = chrome[locale];
  const { columns } = copy.footer;

  return (
    <footer className="border-t border-line pt-18 pb-14">
      <div className="mx-auto max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]">
        <div
          className={`grid gap-8 sm:grid-cols-2 lg:gap-12 ${
            columns.length === 3
              ? "lg:grid-cols-[2fr_1fr_1fr_1fr]"
              : "lg:grid-cols-[2fr_1fr_1fr]"
          }`}
        >
          <div>
            <Link
              href={localizePath("/", locale)}
              aria-label={copy.header.homeLabel}
              className="inline-flex rounded-sm text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
            >
              <Wordmark className="h-8 w-auto" />
            </Link>
            <p className="mt-5 max-w-[24em] text-body text-ink-soft">
              {copy.footer.tagline}
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-ui font-semibold text-ink">{col.title}</p>
              <ul className="mt-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="inline-flex min-h-[44px] items-center text-ui text-ink-soft transition-colors hover:text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet lg:min-h-8"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                {col.cookieButton ? (
                  <li>
                    <CookiePreferences label={copy.footer.cookies} />
                  </li>
                ) : null}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap justify-between gap-6 border-t border-line pt-8 text-small text-ink-soft">
          <p>{copy.footer.rights}</p>
          <p>{copy.footer.trademark}</p>
        </div>
      </div>
    </footer>
  );
}
