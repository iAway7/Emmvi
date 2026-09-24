/**
 * El FAQ del sitio. Uno solo, para las seis páginas que lo usan.
 *
 * Antes había tres: la home y /services/gohighlevel-automation repetían el
 * mismo marcado palabra por palabra, y las otras cuatro páginas usaban una
 * variante que al abrirse se convertía en una tarjeta con borde y fondo. El
 * estilo que queda es el de la home: solo una línea inferior, la pregunta
 * abierta en violeta y el signo a la derecha.
 *
 * Sobre <details> nativo: abre sin JS, el teclado ya funciona y no hay estado
 * que sincronizar.
 *
 * **Las preguntas sin respuesta no se pintan.** Esto no es maquetación, es una
 * decisión de contenido y conviene no deshacerla por descuido. Varias páginas
 * de servicio heredaron del Figma preguntas que el archivo nunca respondió, y
 * durante un tiempo salieron publicadas con un "Answer pending. The Figma only
 * writes out the first one." en cursiva: seis de las siete de /services/ppc se
 * leían así. La pregunta sigue en el array de cada página haciendo de lista de
 * pendientes para quien escriba la respuesta, pero no llega al visitante. Un
 * FAQ con dos preguntas contestadas es un FAQ; uno con una contestada y seis
 * disculpas, no.
 */

export type FaqItem = {
  q: string;
  a?: string;
  /** Cuál abre de entrada. Sin esto abre la primera que tenga respuesta. */
  open?: boolean;
};

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const answered = items.filter((item) => item.a);
  if (answered.length === 0) return null;

  return (
    <div>
      {answered.map((item, i) => (
        <details
          key={item.q}
          open={item.open ?? i === 0}
          className="group border-b border-line py-6"
        >
          <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-6 text-h4 font-semibold text-ink group-open:text-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet [&::-webkit-details-marker]:hidden">
            {item.q}
            {/* `&minus;` y no un guion: es el signo que hace pareja con el `+`
                y se alinea con él ópticamente. */}
            <span
              aria-hidden="true"
              className="shrink-0 text-ui font-normal text-ink-black group-open:text-violet"
            >
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">&minus;</span>
            </span>
          </summary>

          <p className="mt-4 text-body text-pretty text-ink-soft">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
