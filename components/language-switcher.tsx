import { chrome } from "@/lib/chrome-copy";
import {
  isTranslated,
  localeName,
  localizePath,
  locales,
  type Locale,
} from "@/lib/i18n";

/**
 * El conmutador de idioma: "EN | ES", dos letras y nada mas (decision del
 * usuario, 2026-10-03). El idioma actual va en tinta y no es enlace; el otro
 * va apagado y lleva a la pagina equivalente. Sin banderas y sin nombres
 * largos: en la cabecera no hay sitio, y dos letras las entiende todo el
 * mundo.
 *
 * **Lleva a la pagina equivalente, no a la home.** Quien esta leyendo el aviso
 * legal en ingles y cambia de idioma quiere el aviso legal en español. Solo
 * cuando la pagina no tiene traduccion (`translatedPaths` en lib/i18n.ts) se
 * va a la home del otro idioma, y entonces el enlace lo dice en su `title` y
 * en su texto accesible.
 *
 * Es un <a> y no <Link> a proposito: cambiar de idioma cambia de layout raiz,
 * y eso en el App Router es una carga completa de todas formas.
 *
 * Es un <nav> con nombre propio: un lector de pantalla lo anuncia como
 * "Idioma" y lee "EN, pagina actual" y "ES, Español". El `lang` de cada letra
 * evita que se pronuncien con la voz del idioma equivocado.
 */
export function LanguageSwitcher({
  locale,
  path,
  className = "",
}: {
  locale: Locale;
  /**
   * Ruta canonica en ingles de la pagina actual ("/contact-us"), si la
   * pagina la conoce. Sin ella el otro idioma lleva a su home.
   */
  path?: string;
  className?: string;
}) {
  const translated = path !== undefined && isTranslated(path);
  const copy = chrome[locale].switcher;

  return (
    <nav
      aria-label={copy.label}
      className={`inline-flex items-center rounded-sm border border-line p-0.5 text-small font-semibold tracking-[0.04em] ${className}`}
    >
      {locales.map((code) => {
        const current = code === locale;
        const cls =
          "inline-flex h-7 min-w-8 items-center justify-center rounded-[6px] px-1.5 uppercase transition-colors focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet";
        if (current) {
          return (
            <span
              key={code}
              lang={code}
              aria-current="page"
              className={`${cls} bg-ink text-paper`}
            >
              {code}
            </span>
          );
        }
        const href = translated
          ? localizePath(path, code)
          : localizePath("/", code);
        return (
          <a
            key={code}
            href={href}
            hrefLang={code}
            lang={code}
            rel="alternate"
            title={translated ? localeName[code] : copy.homeOnly}
            aria-label={
              translated
                ? localeName[code]
                : `${localeName[code]}. ${copy.homeOnly}`
            }
            className={`${cls} text-ink-soft hover:text-ink-black`}
          >
            {code}
          </a>
        );
      })}
    </nav>
  );
}
