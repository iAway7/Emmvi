import {
  ChipIcon,
  FigmaIcon,
  PowerIcon,
  SearchIcon,
  WrenchIcon,
} from "./icons";

/**
 * "Navigating the Web Design Journey": cinco semanas sobre un raíl central,
 * con las burbujas alternando lado y la etiqueta de semana enfrente.
 *
 * Del Figma (165:831): raíl en x=699 con el tramo violeta de los primeros
 * 186px, nodos de 32px cada 598px, burbujas de 411px con halo de 350 y disco
 * interior de 270, y el chip "Meeting with Client" solo en las semanas 1, 2 y 5.
 *
 * En móvil el raíl se va a la izquierda y las burbujas se apilan: un círculo de
 * 350px no cabe en 375px de viewport.
 */

const weeks = [
  {
    week: "Week 1",
    title: "Research & Planning",
    body: "Research and assess competitors’ websites to identify strengths and areas for differentiation.",
    meeting: true,
    Icon: SearchIcon,
    side: "left" as const,
  },
  {
    week: "Week 2",
    title: "Design & Structure",
    body: "Develop wireframes and design mockups for visual and structural planning.",
    meeting: true,
    Icon: FigmaIcon,
    side: "right" as const,
  },
  {
    week: "Week 3",
    title: "Content Assembly",
    body: "Use the page builder to assemble the website’s layout and integrate required functionalities.",
    meeting: false,
    Icon: ChipIcon,
    side: "left" as const,
  },
  {
    week: "Week 4",
    title: "Testing & Optimization",
    body: "Thoroughly test and optimize the site for performance and user experience.",
    meeting: false,
    Icon: WrenchIcon,
    side: "right" as const,
  },
  {
    week: "Week 5",
    title: "Launch & Promotion",
    body: "Deploy the website and implement promotion strategies for a successful launch.",
    meeting: true,
    Icon: PowerIcon,
    side: "left" as const,
  },
];

export function Journey() {
  return (
    <ol className="relative mt-14 list-none min-[900px]:mt-20">
      {/* Raíl. Va de centro a centro de nodo, por eso el inset de 16px. */}
      <span
        aria-hidden="true"
        className="absolute top-4 bottom-4 left-4 w-px bg-line min-[900px]:left-1/2"
      />
      {/* Linea de progreso. Sigue al scroll donde el navegador lo soporta; si
          no, se queda en el tramo fijo de 186px del Figma. Ver globals.css. */}
      <span
        aria-hidden="true"
        className="journey__progress absolute top-4 left-4 w-px bg-violet min-[900px]:left-1/2"
      />

      {weeks.map(({ week, title, body, meeting, Icon, side }, i) => (
        <li
          key={week}
          className={`relative pl-14 min-[900px]:grid min-[900px]:grid-cols-2 min-[900px]:items-start min-[900px]:gap-x-32 min-[900px]:pl-0 ${
            i === 0 ? "" : "mt-16 min-[900px]:mt-24"
          }`}
        >
          <span
            aria-hidden="true"
            className={`journey__node absolute top-0 left-4 size-8 -translate-x-1/2 rounded-full border-[1.5px] bg-paper min-[900px]:left-1/2 ${
              i === 0 ? "border-violet" : "border-line"
            }`}
          />

          {/* Etiqueta de semana: siempre enfrente de la burbuja. */}
          <p
            className={`journey__week text-small font-bold tracking-[0.06em] uppercase min-[900px]:row-start-1 ${
              i === 0 ? "text-violet" : "text-ink-black"
            } ${
              side === "left"
                ? "min-[900px]:col-start-2 min-[900px]:justify-self-start"
                : "min-[900px]:col-start-1 min-[900px]:justify-self-end"
            }`}
          >
            {week}
          </p>

          <div
            className={`mt-6 min-[900px]:row-start-1 min-[900px]:mt-0 min-[900px]:flex min-[900px]:flex-col min-[900px]:items-center ${
              side === "left"
                ? "min-[900px]:col-start-1"
                : "min-[900px]:col-start-2"
            }`}
          >
            {/* Halo 350 y disco interior 270: el padding es (350-270)/2/350. */}
            <div className="grid aspect-square w-full max-w-[350px] place-items-center rounded-full bg-[#f8f7ff] p-[11.43%]">
              <div className="grid size-full place-items-center rounded-full bg-[#f0edff] px-6 text-center">
                <div>
                  <Icon className="mx-auto size-8 text-ink" />
                  <h3 className="mt-4 text-ink">{title}</h3>
                </div>
              </div>
            </div>

            <p className="mt-6 max-w-[411px] text-copy text-pretty text-ink-soft min-[900px]:text-center">
              {body}
            </p>

            {meeting ? (
              <p className="mt-5 inline-flex rounded-sm bg-[#f2f2f4] px-4 py-2 text-small font-bold text-ink">
                Meeting with Client
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
