import Image from "next/image";

import { homeCopy } from "@/lib/copy/home";
import type { Locale } from "@/lib/i18n";

/**
 * "What Our Clients Say" de /services/email-marketing: tres tarjetas sobre el
 * panel oscuro (Figma 165:1967).
 *
 * Los tres testimonios del Figma en esta pantalla vuelven a ser de relleno
 * (Sarah D., Michael S., Sandra P., con caras de stock). Aquí van los tres
 * reales, los mismos que la home y que /services/website-design. El de Adriana
 * es además el que menos se estira aquí: habla literalmente de flujos de correo.
 *
 * Sobre oscuro el violeta de marca se queda corto en texto chico, así que el
 * rol usa --color-violet-light, que es la variante que el proyecto ya tiene
 * medida para esto.
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
    photo: t.photo ?? "",
  }));
}

export function DarkTestimonials({ locale = "en" }: { locale?: Locale }) {
  const testimonials = quotes(locale);
  return (
    <ul className="grid list-none gap-6 min-[900px]:grid-cols-3 min-[900px]:gap-12">
      {testimonials.map((t) => (
        <li key={t.name}>
          <figure className="flex h-full flex-col rounded-md border border-[#2c2c33] bg-[#222226] p-8">
            <p
              aria-hidden="true"
              className="text-stat text-violet-light"
            >
              &ldquo;
            </p>
            <blockquote className="mt-4 flex-1 text-copy text-pretty text-white/80">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <Image
                src={t.photo}
                alt=""
                width={40}
                height={40}
                loading="lazy"
                className="size-10 shrink-0 rounded-full object-cover"
              />
              <span className="text-small leading-5">
                <span className="block font-bold text-white">{t.name}</span>
                <span className="block text-violet-light">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
