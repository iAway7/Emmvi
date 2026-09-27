import type { Post } from "@/lib/posts";

/**
 * Recuperado del backup del WordPress anterior (agosto de 2026) y sustituido
 * el 27 de septiembre de 2026 por la reescritura de content/rewrites/.
 *
 * El original daba cifras sin fuente ("Over 60% of traffic comes from mobile
 * in 2025", "more than 3 seconds", "under 5 seconds"), que PRODUCT.md
 * prohibe, y estaba escrito con emojis y en lenguaje de consultora. Este
 * cuerpo mantiene los siete errores sin inventar numeros. El titulo visible
 * pierde el "in 2025"; el slug lo conserva porque es la URL que Google conoce.
 * Slug, fecha de publicacion, imagen y categoria no se tocan.
 */
const body: Post["body"] = [
  { kind: "p", text: "Design arguments usually turn into taste arguments, which nobody wins. These seven are not matters of taste. Each one is a specific reason a visitor who wanted to contact you did not, and each one has a fix that takes hours rather than a redesign." },

  { kind: "h2", text: "1. Slow on a phone" },
  { kind: "p", text: "Not slow on your laptop on office broadband. Slow on a four-year-old phone, on mobile data, on a street. That is where trade websites get opened. The usual culprits are uncompressed photographs straight off a camera, a carousel nobody asked for, and five tracking scripts." },
  { kind: "p", text: "Test it on your own phone with wifi turned off. If you find yourself waiting, so did every visitor you lost." },

  { kind: "h2", text: "2. Unclear what you do" },
  { kind: "p", text: "Homepages often open with a mood, a wide photograph and a slogan about excellence, and state the actual trade somewhere further down. The visitor has to work for the one piece of information they came for. Say the trade and the area in the first line." },

  { kind: "h2", text: "3. A phone number you cannot tap" },
  { kind: "p", text: "If the number is baked into an image, or lives only in the footer, you have put a step between deciding to call and calling. It belongs in the header, as a real link, on every page." },

  { kind: "h2", text: "4. A form that asks too much" },
  { kind: "p", text: "Company name, budget range, how did you hear about us, preferred contact method. Every one of those is a small reason to stop. Collect what you need to have a first conversation and get the rest during it." },

  { kind: "h2", text: "5. Silence after the form" },
  { kind: "p", text: "This is the one nobody counts as a design problem, and it costs more than the other six together. The visitor submits, sees a thank-you line, and then hears nothing until someone gets round to the inbox. Meanwhile they have sent the same quote request to two competitors." },
  { kind: "p", text: [
    "How fast the first reply goes out has a name in sales, ",
    { text: "speed to lead", href: "/speed-to-lead" },
    ", and it is the cheapest of the seven to fix.",
  ] },
  { kind: "aside", tone: "important", label: "The half that decides", text: "The page is the easy half. The half that decides whether the quote request becomes a job is what happens in the hour afterwards, and that is not a design decision. It is a system you either have or do not." },

  { kind: "h2", text: "6. Generic proof" },
  { kind: "p", text: "Stock photographs of people in hard hats who are not your team. Logos of companies you did not work for. Testimonials with no name attached. A visitor cannot verify any of it, and the ones who notice trust you less than if you had shown nothing." },
  { kind: "p", text: "Three real photographs of your own jobs, with the town named, beat any of it." },

  { kind: "h2", text: "7. Pages that end nowhere" },
  { kind: "p", text: "A visitor reaches the bottom of a service page and there is nothing to do. No contact form, no number, no next page. They go back to the search results, which is where your competitors are." },
  { kind: "p", text: "Every page should end with the same obvious action. It does not have to be clever. It has to be there." },

  { kind: "h2", text: "The order to fix them in" },
  { kind: "p", text: "Five, one and three, in that order. What happens after the form is sent, then speed, then the tappable number. They are the cheapest and they move the most. The rest can wait for the next round." },
];

export const top7WebDesign: Post = {
  slug: "top-7-web-design-mistakes-that-are-killing-your-conversions-in-2025",
  title: "7 Web Design Mistakes That Cost You Quote Requests",
  description: "Seven specific things that make visitors leave a service business website without getting in touch, and what to do about each one.",
  lede: "Seven design mistakes that lose you quote requests, and the fix for each one.",
  category: "Website Design",
  // Fecha original de publicacion. No se toca: es parte de lo que se restaura.
  published: "2025-04-06",
  updated: "2026-09-27",
  /** Destacada del WordPress. `alt` vacio a proposito: la imagen va dentro
   *  del enlace, pegada al titular que ya dice lo mismo, y describir una
   *  ilustracion generica ahi solo anade ruido a un lector de pantalla. */
  image: {
    src: "/blog/top-7-web-design-mistakes-that-are-killing-your-conversions-in-2025.webp",
    width: 1024,
    height: 1024,
    alt: "",
  },
  body,
};
