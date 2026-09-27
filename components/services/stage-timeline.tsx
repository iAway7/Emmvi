"use client";

import { useId, useRef, useState } from "react";

/**
 * Las cinco etapas del catalogo de GoHighLevel, como recorrido.
 *
 * No son cinco categorias sueltas: son el orden en que pasa una consulta
 * —capturar, nutrir, cerrar, fidelizar, reactivar— y el catalogo de HighLevel
 * las nombra asi. Por eso van en una linea con nodos y no en cinco tarjetas
 * apiladas: la forma dice lo mismo que el contenido, que es ademas el tema de
 * toda la pagina (una consulta que entra a las 21:47 y acaba en resena).
 *
 * Es un patron de pestanas de verdad, con los mismos roles que `PackageTabs`:
 * flechas para moverse, Home/End a los extremos y el panel atado por
 * `aria-controls`. La diferencia es la orientacion y que el panel va debajo.
 *
 * **Todas las etapas se renderizan siempre**, y las que no estan activas se
 * ocultan con `hidden`. Asi el buscador ve las cincuenta y dos funciones sin
 * pulsar nada, que es justo lo que esta seccion quiere demostrar.
 *
 * En movil la tira de nodos se desplaza en horizontal dentro de su propio
 * contenedor. Cinco etiquetas no caben a 375px, y abreviarlas dejaria
 * "Evangelize" en algo que no dice nada.
 */

export type Stage = {
  stage: string;
  /** `ours` marca lo que emmvi monta; el resto se pinta apagado. */
  items: { name: string; ours?: boolean }[];
};

export function StageTimeline({
  stages,
  label,
}: {
  stages: Stage[];
  /** Nombra la tira de pestanas para un lector de pantalla. */
  label: string;
}) {
  const [active, setActive] = useState(0);
  const id = useId();
  const tira = useRef<HTMLDivElement>(null);

  function onKeyDown(e: React.KeyboardEvent) {
    const last = stages.length - 1;
    const next =
      e.key === "ArrowRight" || e.key === "ArrowDown"
        ? active === last
          ? 0
          : active + 1
        : e.key === "ArrowLeft" || e.key === "ArrowUp"
          ? active === 0
            ? last
            : active - 1
          : e.key === "Home"
            ? 0
            : e.key === "End"
              ? last
              : -1;
    if (next < 0) return;
    e.preventDefault();
    setActive(next);
    const boton = document.getElementById(`${id}-tab-${next}`);
    boton?.focus();
    // Con la tira desplazada en movil, el nodo al que se salta puede quedar
    // fuera. `nearest` no tira de la pagina entera, solo del carril.
    boton?.scrollIntoView({ block: "nearest", inline: "nearest" });
  }

  return (
    <div>
      {/* El carril.

          La linea continua es el `border-b` de esta tira, y el tramo activo es
          el `border-b-2` de su boton, que la tapa. **No hay nada posicionado en
          absoluto**: la version anterior dibujaba un tramo por nodo con
          `absolute` y `w-full`, y como los botones son `flex-1` ese `w-full`
          media el boton entero — el subrayado se salia por la derecha y las
          lineas cruzaban por encima de las etiquetas.

          Los circulos van sobre la linea y no encima de ella, asi que la
          secuencia la cuentan los numeros. Es menos literal que unir los nodos,
          pero no se rompe a ningun ancho. */}
      <div
        ref={tira}
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className="hidden border-b border-line lg:flex"
      >
        {stages.map((s, i) => {
          const esActiva = i === active;
          return (
            <button
              key={s.stage}
              id={`${id}-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={esActiva}
              aria-controls={`${id}-panel-${i}`}
              tabIndex={esActiva ? 0 : -1}
              onClick={() => setActive(i)}
              className={`group -mb-px flex shrink-0 snap-start items-center gap-2.5 border-b-2 px-1 py-3 text-left transition-colors focus-visible:outline-[3px] focus-visible:-outline-offset-2 focus-visible:outline-violet lg:flex-1 lg:shrink lg:justify-start ${
                esActiva ? "border-violet" : "border-transparent"
              }`}
            >
              <span
                aria-hidden="true"
                className={`grid size-[26px] shrink-0 place-items-center rounded-full border font-mono text-small font-bold transition-colors ${
                  esActiva
                    ? "border-violet bg-violet text-white"
                    : "border-line bg-paper text-ink-soft group-hover:border-ink-soft"
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`text-ui font-bold whitespace-nowrap transition-colors ${
                  esActiva ? "text-ink" : "text-ink-soft group-hover:text-ink"
                }`}
              >
                {s.stage}
              </span>
            </button>
          );
        })}
      </div>

      {/* Los cinco paneles existen siempre; se oculta el que no toca. Con
          renderizado condicional, el buscador solo veria una etapa.

          **El contenido no se duplica entre movil y escritorio**: las dos
          formas comparten `active`, asi que la etapa visible es la misma y solo
          cambia el mando —pestanas arriba en escritorio, cabecera desplegable
          en cada una en movil. Duplicar el arbol habria metido 104 elementos en
          la pagina y contenido repetido para el buscador. */}
      {stages.map((s, i) => (
        <div key={s.stage} className="lg:contents">
          {/* Movil: cabecera de acordeon. En escritorio manda el tablist y esto
              desaparece, por eso los roles de pestana viven alli y aqui va un
              boton de expandir normal: uno de los dos esta siempre en
              `display:none`, asi que un lector de pantalla solo encuentra el
              que toca. */}
          <button
            type="button"
            aria-expanded={i === active}
            aria-controls={`${id}-panel-${i}`}
            onClick={() => setActive(i)}
            className={`flex w-full items-center gap-2.5 border-b py-3.5 text-left focus-visible:outline-[3px] focus-visible:-outline-offset-2 focus-visible:outline-violet lg:hidden ${
              i === active ? "border-violet" : "border-line"
            }`}
          >
            <span
              aria-hidden="true"
              className={`grid size-[26px] shrink-0 place-items-center rounded-full border font-mono text-small font-bold ${
                i === active
                  ? "border-violet bg-violet text-white"
                  : "border-line bg-paper text-ink-soft"
              }`}
            >
              {i + 1}
            </span>
            <span
              className={`flex-1 text-ui font-bold ${
                i === active ? "text-ink" : "text-ink-soft"
              }`}
            >
              {s.stage}
            </span>
            <span
              aria-hidden="true"
              className={`text-ui text-ink-soft transition-transform ${
                i === active ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>

        <div
          id={`${id}-panel-${i}`}
          role="tabpanel"
          aria-label={`${s.stage} features`}
          hidden={i !== active}
          className="mt-4 mb-2 lg:mt-6 lg:mb-0"
        >
          {/* Las que montamos llevan marca y las demas van apagadas. El hueco
              del tick se reserva igualmente en las apagadas, para que todos los
              nombres arranquen en la misma vertical.

              `ink-soft` y no un gris mas claro: apagadas, no ilegibles (5.74:1
              sobre papel). Y la marca no es solo color, lleva texto para el
              lector de pantalla: sin el, las 52 suenan iguales y el argumento
              de la seccion se pierde. */}
          <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {s.items.map((item) => (
              <li
                key={item.name}
                className={`flex gap-2.5 text-copy text-pretty ${
                  item.ours ? "font-medium text-ink" : "text-ink-soft"
                }`}
              >
                {item.ours ? (
                  <span className="shrink-0 text-violet">
                    <span className="sr-only">We set this up: </span>
                    <span aria-hidden="true">&#10003;</span>
                  </span>
                ) : (
                  <span aria-hidden="true" className="shrink-0 opacity-0">
                    &#10003;
                  </span>
                )}
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        </div>
      ))}
    </div>
  );
}
