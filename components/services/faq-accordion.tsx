/**
 * Acordeón del FAQ de /services/email-marketing (Figma 165:2015).
 *
 * Sobre <details> nativo, como el FAQ de la home: abre sin JS, el teclado ya
 * funciona y no hay estado que sincronizar.
 *
 * OJO con el contenido: el Figma solo trae **una** respuesta escrita, la de la
 * pregunta que dibuja abierta. Las otras siete son preguntas sin respuesta en
 * el archivo, y aquí no se inventan: escribir de qué se compone el servicio es
 * una afirmación de negocio, no una decisión de maquetación.
 *
 * **Las que no tienen respuesta no se pintan.** Durante un tiempo salieron con
 * un "Answer pending. The Figma only writes out the first one." en cursiva, que
 * es una nota de trabajo publicada: seis de las siete preguntas de /services/ppc
 * se leían así. Ahora el componente las filtra, y la pregunta sigue en el array
 * de cada página haciendo de lista de pendientes para quien escriba la
 * respuesta. Un FAQ con dos preguntas contestadas es un FAQ; uno con una
 * contestada y seis disculpas, no.
 */

export type FaqItem = { q: string; a?: string };

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const answered = items.filter((item) => item.a);
  if (answered.length === 0) return null;

  return (
    <div>
      {answered.map((item, i) => (
        <details
          key={item.q}
          open={i === 0}
          className="group border-b border-line open:mb-2 open:rounded-md open:border open:border-line open:bg-paper"
        >
          <summary className="flex min-h-[72px] cursor-pointer list-none items-center justify-between gap-6 px-8 text-ui font-medium text-ink group-open:pt-6 group-open:text-violet-ink focus-visible:outline-[3px] focus-visible:-outline-offset-2 focus-visible:outline-violet [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden="true"
              className="shrink-0 text-[1.25rem] leading-none font-normal text-ink-soft group-open:text-violet-ink"
            >
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">&minus;</span>
            </span>
          </summary>

          <p className="px-8 pt-3 pb-6 text-copy text-pretty text-ink-soft">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
