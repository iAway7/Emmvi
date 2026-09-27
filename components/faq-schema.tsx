import { faqs } from "@/lib/faq";
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
 * Sale de `lib/faq.ts`, la misma lista que pinta el acordeon: una sola copia
 * de cada respuesta.
 *
 * Se ata a la organizacion por `@id` —igual que hace `ArticleSchema`— para que
 * los tres marcados del sitio formen un grafo y no tres islas.
 */
export function FaqSchema() {
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntity: faqs.map((f) => ({
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
