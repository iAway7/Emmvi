/**
 * El recorrido de una solicitud en movil. La escena ancha (HomeIllustration
 * "journey") pone las cuatro tarjetas en fila y a 390px su texto no se lee,
 * asi que aqui van en columna, en HTML, con el mismo lenguaje: contorno de
 * tinta, sombra gris desplazada y pastillas de tiempo en lavanda y lima.
 *
 * Los colores son los de las escenas y viven solo aqui y en ellas.
 */
import type { Locale } from "@/lib/i18n";

type Step = {
  when: string;
  title: string;
  message: string;
  note: string;
  pill: string;
  reply: boolean;
};

const steps: Record<Locale, readonly Step[]> = {
  en: [
    {
      when: "21:47",
      title: "Request in",
      message: "Price for an EV charger?",
      note: "From your website",
      pill: "bg-[#dcdafe]",
      reply: false,
    },
    {
      when: "21:47 · 34 s",
      title: "Reply sent",
      message: "Survey call tomorrow, 9am?",
      note: "Sent automatically",
      pill: "bg-[#c9f7a8]",
      reply: true,
    },
    {
      when: "Day 2",
      title: "Quote follow-up",
      message: "Any questions on the quote?",
      note: "Sent automatically",
      pill: "bg-[#c9f7a8]",
      reply: false,
    },
    {
      when: "Day 9",
      title: "Review request",
      message: "Mind leaving us a review?",
      note: "Sent after the job",
      pill: "bg-[#c9f7a8]",
      reply: false,
    },
  ],
  es: [
    {
      when: "21:47",
      title: "Entra la solicitud",
      message: "¿Precio de un cargador de coche?",
      note: "Desde tu web",
      pill: "bg-[#dcdafe]",
      reply: false,
    },
    {
      when: "21:47 · 34 s",
      title: "Respuesta enviada",
      message: "¿Visita mañana a las 9?",
      note: "Enviada sola",
      pill: "bg-[#c9f7a8]",
      reply: true,
    },
    {
      when: "Día 2",
      title: "Seguimiento",
      message: "¿Alguna duda con el presupuesto?",
      note: "Enviado solo",
      pill: "bg-[#c9f7a8]",
      reply: false,
    },
    {
      when: "Día 9",
      title: "Petición de reseña",
      message: "¿Nos dejas una reseña?",
      note: "Tras acabar el trabajo",
      pill: "bg-[#c9f7a8]",
      reply: false,
    },
  ],
};

export function JourneySteps({
  locale = "en",
  className = "",
}: {
  locale?: Locale;
  className?: string;
}) {
  return (
    <ol className={`relative flex flex-col gap-6 ${className}`}>
      {/* El hilo que une las tarjetas: detras, a la altura de las pastillas. */}
      <span
        aria-hidden="true"
        className="absolute top-6 bottom-6 left-9 w-0.5 bg-ink"
      />
      {steps[locale].map((s) => (
        <li
          key={s.title}
          className="relative rounded-[20px] border-2 border-ink bg-paper p-5 shadow-[8px_8px_0_#e6e6ea]"
        >
          <span
            className={`inline-flex h-8 items-center rounded-full border-2 border-ink px-3 text-small font-bold text-ink ${s.pill}`}
          >
            {s.when}
          </span>
          <h3 className="mt-3 text-ink">{s.title}</h3>
          <p
            className={`mt-3 rounded-2xl border-2 border-ink px-4 py-3 text-copy ${
              s.reply ? "bg-violet text-white" : "bg-[#f1f1f3] text-ink"
            }`}
          >
            {s.message}
          </p>
          <p className="mt-3 text-small text-ink-soft">{s.note}</p>
        </li>
      ))}
    </ol>
  );
}
