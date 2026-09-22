import Image from "next/image";

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

const testimonials = [
  {
    quote:
      "Gustavo and Nico do great work. I’ve been really happy with multiple websites they’ve built for me. They have a great eye for design and a strong focus on user experience, making sure everything not only looks good but is easy to navigate.",
    name: "Jared White",
    role: "JBZ Beats",
    photo: "/testimonials/jared-white.png",
  },
  {
    quote:
      "I was drowning in manual work and reached out to Nico for help with automations. He set up email flows, follow-ups, and little systems I didn’t even know I needed. Everything feels more organized now.",
    name: "Adriana Patania",
    role: "Local gym",
    photo: "/testimonials/adriana-patania-1.png",
  },
  {
    quote:
      "Gus helped me redesign my website and honestly, it turned out way better than I imagined. It looks clean, it loads fast, and it works great on phones too. He really listened to what I needed.",
    name: "Alicia Ryz",
    role: "Ecommerce store",
    photo: "/testimonials/alicia-ryz.png",
  },
];

export function DarkTestimonials() {
  return (
    <ul className="grid list-none gap-6 min-[900px]:grid-cols-3 min-[900px]:gap-12">
      {testimonials.map((t) => (
        <li key={t.name}>
          <figure className="flex h-full flex-col rounded-md border border-[#2c2c33] bg-[#222226] p-8">
            <p
              aria-hidden="true"
              className="text-[2rem] leading-none font-extrabold text-violet-light"
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
