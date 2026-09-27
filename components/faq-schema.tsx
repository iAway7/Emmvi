import type { Locale } from "@/lib/i18n";
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
 */
export function FaqSchema({ locale }: { locale: Locale }) {
  const t = homeCopy[locale];
  // La home inglesa vive en la raiz y la espanola en /es/. Dos URLs distintas,
  // dos bloques de preguntas distintos: el `@id` tiene que distinguirlos o el
  // segundo se lee como una redefinicion del primero.
  const base = locale === "en" ? SITE_URL : `${SITE_URL}/es`;

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${base}/#faq`,
    inLanguage: locale,
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntity: t.faq.items.map((f) => ({
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
