import { chrome } from "@/lib/chrome-copy";
import {
  isTranslated,
  localeName,
  localizePath,
  type Locale,
} from "@/lib/i18n";

/**
 * **Retirado de momento.** Nadie lo monta: se quito de la cabecera, el menu
 * movil y el pie hasta que el español tenga mas paginas. Se conserva entero
 * para volver a ponerlo con un import; los props `locale` y `path` siguen
 * llegando a SiteHeader y SiteFooter.
 *
 * El selector de idioma: un solo enlace al otro idioma, con el nombre del
 * idioma escrito en ese idioma ("Español" desde el ingles, "English" desde el
 * español). Sin banderas: una bandera es un pais, no un idioma, y ninguna de
 * las dos cabe aqui —el español no es de España y el ingles no es del Reino
 * Unido.
 *
 * **Lleva a la pagina equivalente, no a la home.** Quien esta leyendo el aviso
 * legal en ingles y cambia de idioma quiere el aviso legal en español, no
 * volver a empezar. Solo cuando la pagina no tiene traduccion (`translatedPaths`
 * en lib/i18n.ts) se va a la home del otro idioma, y entonces el enlace lo
 * dice en su `title` y en su texto accesible.
 *
 * `hrefLang` y `lang` en el enlace: lo primero le dice al navegador en que
 * idioma esta el destino; lo segundo, al lector de pantalla con que voz leer
 * la palabra "Español" en una pagina en ingles.
 *
 * Es un <a> y no <Link> a proposito: cambiar de idioma cambia de layout raiz,
 * y eso en el App Router es una carga completa de todas formas. Con un
 * enlace normal no hay prefetch de una pagina que no se puede montar en el
 * mismo arbol.
 */
export function LanguageSwitcher({
  locale,
  path,
  className = "",
}: {
  locale: Locale;
  /**
   * Ruta canonica en ingles de la pagina actual ("/contact-us"), si la
   * pagina la conoce. Sin ella el selector lleva a la home del otro idioma.
   */
  path?: string;
  className?: string;
}) {
  const other: Locale = locale === "en" ? "es" : "en";
  const translated = path !== undefined && isTranslated(path);
  const href = translated ? localizePath(path, other) : localizePath("/", other);
  const copy = chrome[locale].switcher;

  return (
    <a
      href={href}
      hrefLang={other}
      lang={other}
      rel="alternate"
      title={translated ? undefined : copy.homeOnly}
      aria-label={
        translated ? localeName[other] : `${localeName[other]}. ${copy.homeOnly}`
      }
      className={`inline-flex min-h-[44px] items-center gap-1.5 text-ui text-ink-soft transition-colors hover:text-ink-black focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet ${className}`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="10" cy="10" r="7.5" />
        <path d="M2.5 10h15M10 2.5c2.2 2.3 3.3 4.8 3.3 7.5s-1.1 5.2-3.3 7.5c-2.2-2.3-3.3-4.8-3.3-7.5S7.8 4.8 10 2.5Z" />
      </svg>
      {localeName[other]}
    </a>
  );
}
