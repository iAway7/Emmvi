"use client";

import Image from "next/image";
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

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  /** Sin foto todavía: cae en las iniciales. */
  photo?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Gustavo and Nico do great work. I’ve been really happy with multiple websites they’ve built for me. They have a great eye for design and a strong focus on user experience, making sure everything not only looks good but is easy to navigate.",
    name: "Jared White",
    role: "JBZ Beats",
    initials: "JW",
    photo: "/testimonials/jared-white.png",
  },
  {
    quote:
      "I was drowning in manual work and reached out to Nico for help with automations. He set up email flows, follow-ups, and little systems I didn’t even know I needed. Everything feels more organized now.",
    name: "Adriana Patania",
    role: "Local gym",
    initials: "AP",
    photo: "/testimonials/adriana-patania-1.png",
  },
  {
    quote:
      "Gus helped me redesign my website and honestly, it turned out way better than I imagined. It looks clean, it loads fast, and it works great on phones too. He really listened to what I needed.",
    name: "Alicia Ryz",
    role: "Ecommerce store",
    initials: "AR",
    photo: "/testimonials/alicia-ryz.png",
  },
];

export function Testimonials() {
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
            <figure className="flex h-full flex-col rounded-md border border-line bg-paper-panel p-8">
              <blockquote className="flex-1 text-[1rem] leading-[26px] text-pretty text-ink-soft">
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
                    className="grid size-10 shrink-0 place-items-center rounded-full bg-[#f0edff] text-small font-bold text-violet-ink"
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
            aria-label={`Show ${t.name}’s testimonial`}
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
