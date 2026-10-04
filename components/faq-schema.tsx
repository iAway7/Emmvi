import { localizePath, type Locale } from "@/lib/i18n";
import { homeCopy } from "@/lib/copy/home";
import { SITE_URL } from "@/lib/site";

/**
 * JSON-LD de las preguntas frecuentes de la home.
 *
 * **No es para los resultados enriquecidos de Google.** Conviene decirlo antes
 * de que alguien lo espere: desde 2023 Google reserva el carrusel de FAQ a
 * sitios de administracion y salud, y para el resto no pinta nada. Si el
 * objetivo fuera ese, esto no valdria la pena.
 *
 * Es para las maquinas que leen la pagina y sintetizan una respuesta. Las seis
 * respuestas del acordeon son justo lo que alguien le pregunta a un modelo
 * —"¿sirve para una empresa pequena?", "¿de quien son los datos?"— y sin
 * marcado tienen que deducirlas de un `<details>`, que es un componente de
 * interfaz y no una estructura de datos. Con esto, el par pregunta/respuesta
 * va declarado.
 *
 * **Sale de `lib/copy/home.ts`, la misma copia que pinta el acordeon**, asi
 * que no hay dos versiones de cada respuesta ni una que se corrija sin la
 * otra. Y como ese fichero esta por idioma, cada home declara sus preguntas en
 * el suyo: la de /es/ las declara en espanol, que es lo que hay en pantalla.
 *
 * Se ata a la organizacion por `@id` —igual que hace `ArticleSchema`— para que
 * los tres marcados del sitio formen un grafo y no tres islas.
 *
 * **Sirve para cualquier pagina con preguntas, no solo para la home.** Sin
 * `items` declara las de `lib/copy/home.ts`, que es para lo que se escribio;
 * con `items` y `path` declara las de quien lo llame. Es lo que usa
 * /services/gohighlevel-automation, cuyo FAQ es lo mas parecido a lo que
 * alguien le pregunta a un modelo antes de contratar esto ("ya lo pago y
 * apenas lo uso", "mi cuenta es un lio").
 */
export function FaqSchema({
  locale,
  items,
  path = "/",
}: {
  locale: Locale;
  items?: readonly { q: string; a: string }[];
  /** La ruta canonica sin idioma ni barra final, como la toma `pageMetadata`. */
  path?: string;
}) {
  const preguntas = items ?? homeCopy[locale].faq.items;
  // Cada idioma vive en su URL, y el `@id` tiene que distinguirlos o el
  // segundo se lee como una redefinicion del primero. La URL la arma
  // `localizePath`, que es la que ya decide el prefijo y la barra final en las
  // canonicas: construirla a mano aqui era una segunda version de esa regla.
  const url = `${SITE_URL}${localizePath(`${path}#faq`, locale)}`;

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": url,
    inLanguage: locale,
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntity: preguntas.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // Mismo escapado que los otros dos marcados: las respuestas son texto
      // editable, y un "<" suelto cerraria la etiqueta.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqPage).replace(/</g, "\\u003c"),
      }}
    />
  );
}
