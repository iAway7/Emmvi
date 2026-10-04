"use client";

import { useEffect, useRef, useState } from "react";

import type { InstallersCopy } from "@/lib/copy/installers";

/**
 * El recorrido de una solicitud en /installers, como el rastreo de un
 * paquete. Viene del borrador "emmvi Installers.html" (2026-09-28).
 *
 * Dos columnas: a la izquierda una tarjeta pegajosa con el estado ("Mark's
 * quote request", paso N de 7 y una barra por paso); a la derecha los pasos
 * con su nodo. El paso activo lo decide el scroll: es el ultimo cuyo borde
 * superior ha cruzado el 60 % de la ventana. Los anteriores quedan hechos
 * (nodo relleno con tick, guiones en violeta), el activo lleva el punto, la
 * chapa "Now" y un pulso, y los siguientes van en gris.
 *
 * **Sin JavaScript se ve completo.** El estado inicial es el ultimo paso, asi
 * que en el HTML del servidor todo esta hecho; al hidratar, el primer calculo
 * de scroll lo pone donde toca. Es la misma regla que las escenas de la home:
 * si la animacion no corre, no falta nada.
 *
 * **Con reduced motion** el pulso se apaga (globals.css) y los cambios de
 * color siguen, que son informacion y no adorno.
 *
 * Contraste sobre --night: el violeta de marca se usa solo en relleno y trazo,
 * nunca en texto chico. Las horas y la chapa van en violet-light o blanco.
 */

type Steps = InstallersCopy["how"]["steps"];

export function QuoteTimeline({
  steps,
  card,
}: {
  steps: Steps;
  card: InstallersCopy["how"]["card"];
}) {
  const last = steps.length - 1;
  const listRef = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(last);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const list = listRef.current;
        if (!list) return;
        const line = window.innerHeight * 0.6;
        let next = 0;
        list.querySelectorAll<HTMLElement>("[data-step]").forEach((row, i) => {
          if (row.getBoundingClientRect().top < line) next = i;
        });
        setActive(next);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const finished = active === last;
  const statusTitle = finished ? card.done : steps[active].title;

  return (
    <div className="mt-10 flex flex-wrap items-stretch gap-8 md:mt-14 lg:gap-16">
      {/* La tarjeta de estado. Pegajosa bajo la cabecera. */}
      <div className="w-full min-w-0 md:max-w-[360px] md:flex-[1_1_260px]">
        <div
          role="status"
          aria-live="polite"
          className="rounded-[24px] border border-white/10 bg-white/5 p-6 md:sticky md:top-[92px]"
        >
          <div className="flex justify-between gap-3 text-small font-semibold text-white/60">
            <span>{card.label}</span>
            <span className="font-mono">{steps[active].when}</span>
          </div>
          <p className="mt-3 min-h-[2.5em] text-h4 text-balance text-white">{statusTitle}</p>
          <div aria-hidden="true" className="mt-4 flex gap-1">
            {steps.map((step, i) => (
              <span
                key={step.title}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  i > active ? "bg-white/15" : "bg-violet"
                }`}
              />
            ))}
          </div>
          <p className="mt-2.5 text-small text-white/60">
            {card.step} {active + 1} {card.of} {steps.length}
          </p>
        </div>
      </div>

      <ol ref={listRef} className="m-0 min-w-0 max-w-[760px] flex-[999_1_460px] list-none p-0">
        {steps.map((step, i) => {
          const isLast = i === last;
          const done = i < active || (finished && isLast);
          const now = i === active && !done;
          const next = i > active;
          const text = next ? "text-white/50" : "text-white";
          const body = next ? "text-white/50" : "text-white/80";

          return (
            <li
              key={step.title}
              data-step={i}
              className="grid grid-cols-[minmax(52px,72px)_24px_minmax(0,1fr)] gap-x-3 md:gap-x-5"
            >
              <span
                className={`pt-1 text-right font-mono text-small font-semibold transition-colors duration-300 ${
                  next ? "text-white/50" : "text-violet-light"
                }`}
              >
                {step.when}
              </span>

              {/* El nodo y, debajo, los guiones con su relleno violeta. */}
              <span aria-hidden="true" className="relative">
                {now ? (
                  <span className="absolute top-0 left-0 size-6">
                    <span className="tl-pulse absolute inset-0 rounded-full bg-violet" />
                  </span>
                ) : null}
                <span
                  className={`relative z-[1] block size-6 rounded-full border-2 transition-colors duration-300 ${
                    next ? "border-white/25" : "border-violet"
                  } ${done ? "bg-violet" : "bg-ink-deep"}`}
                >
                  <span
                    className={`absolute top-1.5 left-1.5 size-2 rounded-full bg-violet transition-opacity duration-300 ${
                      now ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`absolute top-1 left-1 transition-opacity duration-300 ${
                      done ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <path d="M2.5 6.2l2.3 2.3 4.7-5" />
                  </svg>
                </span>
                {!isLast ? (
                  <span className="absolute top-[30px] bottom-1.5 left-[11px] w-0.5 bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.28)_0_5px,transparent_5px_10px)]">
                    <span
                      className="block w-0.5 bg-violet transition-[height] duration-500 ease-out"
                      style={{ height: i < active ? "100%" : "0%" }}
                    />
                  </span>
                ) : null}
              </span>

              <div className={`min-w-0 ${isLast ? "pb-0" : "pb-8 md:pb-11"}`}>
                <div className="mb-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
                  <h4 className={`transition-colors duration-300 ${text}`}>{step.title}</h4>
                  {now ? (
                    <span className="rounded-full bg-violet px-2 py-1 text-small leading-none font-semibold text-white">
                      {card.now}
                    </span>
                  ) : null}
                </div>
                {step.bubble ? (
                  <>
                    <p
                      className={`mt-1 max-w-[440px] rounded-2xl rounded-bl-[4px] px-4 py-3 text-copy text-white transition-colors duration-500 ${
                        next ? "bg-white/10" : "bg-violet"
                      }`}
                    >
                      {step.bubble}
                    </p>
                    <p className={`mt-2.5 text-copy text-pretty transition-colors duration-300 ${body}`}>
                      {step.body}
                    </p>
                  </>
                ) : (
                  <p className={`text-copy text-pretty transition-colors duration-300 ${body}`}>
                    {step.body}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
