"use client";

import Image from "next/image";

import { homeCopy } from "@/lib/copy/home";
import type { Locale } from "@/lib/i18n";
import { useEffect, useRef, useState } from "react";

/**
 * "Real-Life Experiences": tres tarjetas en fila con los puntos debajo, como
 * el Figma (Frame 1432 + Group 12).
 *
 * Los tres testimonios del Figma en esta pantalla son de relleno (David P.,
 * Jessica R., Sarah T., con caras de stock). Aquí van los tres reales, los
 * mismos que la home. El diseño es el del Figma; lo que se afirma es
 * verificable.
 *
 * Las fotos las entrega el usuario en `public/testimonials/`. Los tres las
 * tienen; el avatar de iniciales se queda como estado por defecto para
 * cualquier testimonio que se añada sin ella.
 *
 * Los puntos solo aparecen por debajo de 900px, que es donde el carril
 * realmente se desplaza: en escritorio las tres caben a la vez.
 */

/**
 * Las tres citas reales, las de la home (lib/copy/home.ts): una sola copia en
 * los dos idiomas. Aqui van recortadas a la primera parte, que es lo que
 * cabia en la tarjeta del Figma.
 */
function quotes(locale: Locale) {
  return homeCopy[locale].testimonials.items.map((t) => ({
    quote: t.quote.split(/(?<=\.)\s/).slice(0, 3).join(" "),
    name: t.name,
    role: t.org,
    initials: t.initials,
    photo: t.photo,
  }));
}

export function Testimonials({ locale = "en" }: { locale?: Locale }) {
  const testimonials = quotes(locale);
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  /** El punto activo lo decide la posición real del carril, no un contador:
   *  así sigue al dedo cuando el usuario arrastra en vez de pulsar. */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      const mid = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft + card.clientWidth / 2 - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActive(best);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  function goTo(i: number) {
    const card = trackRef.current?.children[i] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }

  return (
    <div>
      <ul
        ref={trackRef}
        className="-mx-6 flex snap-x snap-mandatory list-none gap-6 overflow-x-auto scroll-smooth px-6 pb-2 [scrollbar-width:none] min-[900px]:mx-0 min-[900px]:grid min-[900px]:grid-cols-3 min-[900px]:overflow-visible min-[900px]:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t) => (
          <li
            key={t.name}
            className="w-[86%] shrink-0 snap-center min-[900px]:w-auto"
          >
            <figure className="flex h-full flex-col rounded-md bg-[image:var(--lavender)] p-8">
              <blockquote className="flex-1 text-copy text-pretty text-ink-soft">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                {t.photo ? (
                  <Image
                    src={t.photo}
                    alt=""
                    width={40}
                    height={40}
                    loading="lazy"
                    className="size-10 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-violet text-small font-bold text-paper"
                  >
                    {t.initials}
                  </span>
                )}
                <span className="text-small leading-5">
                  <span className="block font-bold text-ink">{t.name}</span>
                  <span className="block text-ink-soft">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-center gap-2 min-[900px]:hidden">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            onClick={() => goTo(i)}
            aria-label={locale === "es" ? `Ver el testimonio de ${t.name}` : `Show ${t.name}’s testimonial`}
            aria-current={i === active ? "true" : undefined}
            className="inline-grid size-11 place-items-center rounded-sm focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
          >
            <span
              className={`block size-2 rounded-full transition-colors ${
                i === active ? "bg-violet" : "bg-line"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
