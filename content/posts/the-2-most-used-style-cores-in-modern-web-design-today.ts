import type { Post } from "@/lib/posts";

/**
 * Recuperado del backup del WordPress anterior (agosto de 2026), convertido
 * desde el marcado Gutenberg original.
 *
 * Revisado el 2026-10-02: fuera el "in 2025", una frase rota del WordPress
 * ("better?just one email away") y las promesas de rendimiento y SEO que el
 * estilo por si solo no da. Se anade como elegir entre los dos.
 */
const body: Post["body"] = [
  { kind: "p", text: "Web design trends are always shifting, but right now, two dominant styles are shaping how modern websites look and feel. Whether you're designing for a SaaS product, a creative portfolio, or an eCommerce brand, chances are you're either seeing, or using, one of these two approaches." },
  { kind: "p", text: [
    "Neither is just a look. Each one makes a different trade between being easy to read and being hard to forget, and that trade matters more than the trend. Here’s a breakdown of the two most commonly used \"core\" styles in",
    { text: "web design", href: "/services/website-design" },
    "today:",
    { text: "Clean Minimalism", bold: true },
    "and",
    { text: "Neo-Brutalism", bold: true },
    ".",
  ] },
  { kind: "h2", text: "1. Clean Minimalism: Timeless, Polished, and User-Friendly" },
  { kind: "p", text: "Clean Minimalism has been the default for years, and it has not gone anywhere. The idea is simplicity with a purpose: take away what distracts so that what is left is easy to read and easy to use." },
  { kind: "h3", text: "Core Features:" },
  { kind: "list", items: [
    "Light or neutral backgrounds with generous whitespace",
    "Clear hierarchy and grid-based layouts",
    "Crisp, modern sans-serif fonts",
    "Minimal use of color, typically a primary and accent",
    "High-quality visuals with restrained styling",
    "Smooth animations and subtle hover effects",
  ] },
  { kind: "h3", text: "Why It Works:" },
  { kind: "p", text: "Clean Minimalism is easy to move through. There is less on each screen, so visitors find the button they came for, and it looks professional in almost any industry without trying too hard. Fewer elements also tend to mean a lighter page that adapts well to mobile. That helps speed, but it does not make a site fast or make it rank by itself: heavy images and scripts can slow a minimal page down as much as any other." },
  { kind: "p", text: "It is the usual choice for startups, tech companies, agencies, and any business that wants to come across as trustworthy and organised. The risk is the opposite of clutter: done lazily, it looks like every other template, and nothing on the page says who you are." },
  { kind: "h2", text: "2. Neo-Brutalism: Bold, Raw, and Unapologetically Digital" },
  { kind: "p", text: "Neo-Brutalism is the loud, experimental cousin of minimalism. It takes inspiration from classic Brutalist design but gives it a modern, web-first twist. Expect bold fonts, clashing colors, grid-breaking layouts, and a deliberate “unfinished” aesthetic." },
  { kind: "h3", text: "Core Features:" },
  { kind: "list", items: [
    "Monochrome or bold color blocking",
    "Thick borders and visible layout grids",
    "Raw HTML elements (like native buttons and links)",
    "Oversized typography with little concern for traditional spacing",
    "Minimal effects or polished animations, if any",
    "Purposefully unrefined, sometimes glitchy or anti-aesthetic",
  ] },
  { kind: "h3", text: "Why It Works:" },
  { kind: "p", text: "Neo-Brutalism gets noticed straight away. It suits creative studios, young tech products and brands whose whole point is to look different from the rest of their market. It feels direct and distinctly digital, a little like the early web with better typography." },
  { kind: "p", text: "It is not for everyone. Done well, it is memorable. Done badly, it is simply hard to use: clashing colours can fail contrast checks, oversized type can break on small screens, and an \"unfinished\" look can read as an unfinished business. Check the contrast and test it on a phone before you commit." },
  { kind: "h2", text: "How to Choose Between Them" },
  { kind: "p", text: "The question is less which style is better and more who has to use the site, and for what." },
  { kind: "list", items: [
    [
      { text: "Who is visiting", bold: true },
      ": a homeowner looking for a plumber, a patient booking a clinic or a buyer comparing suppliers wants to find the phone number and the quote form fast. That points to minimalism. An audience that expects to be surprised, such as people hiring a design studio, has more patience for brutalism.",
    ],
    [
      { text: "What the page has to do", bold: true },
      ": if the main job is a quote request or a booking, every element that does not help with that is a cost. Brutalism can still work, but the form and the button need to be the clearest thing on the screen.",
    ],
    [
      { text: "What your market looks like", bold: true },
      ": if every competitor is clean and white, a bolder style can help you stand out. If they are all loud, calm can do the same job.",
    ],
    [
      { text: "Who will maintain it", bold: true },
      ": minimal layouts are easier to keep consistent when someone adds a page later. Brutalist ones depend on deliberate choices that are easy to get wrong without a designer.",
    ],
  ] },
  { kind: "p", text: "You can also mix them: a minimal structure with one bold element, such as an oversized headline or a block of strong colour, gives the site some character without making it harder to use." },
  { kind: "h2", text: "Final Thoughts" },
  { kind: "p", text: [
    "These two styles sit at opposite ends of the design spectrum.",
    { text: "Clean Minimalism", bold: true },
    "is about restraint and polish, while",
    { text: "Neo-Brutalism", bold: true },
    "is about breaking conventions and embracing imperfection. Both work when they are chosen on purpose, for the people who will use the site, and not because they are in fashion.",
  ] },
  { kind: "p", text: "So whether you are redesigning your site or just looking for ideas, knowing what each style is good at, and what it costs, lets you decide on reasons rather than taste alone." },
  { kind: "p", text: [
    { text: "Not sure which one fits?", bold: true },
    { text: "Book a free call", href: "/contact-us" },
    "and we will look at your site and your market with you, whichever way you lean.",
  ] },
];

export const the2MostUsed: Post = {
  slug: "the-2-most-used-style-cores-in-modern-web-design-today",
  title: "The 2 Style Cores Modern Web Design Keeps Using",
  description: "Clean minimalism and neo-brutalism, the two style cores most modern websites use: what each one does well, what it costs, and how to choose.",
  lede: "Clean minimalism and neo-brutalism: what each one is for, and how to choose.",
  category: "Website Design",
  // Fecha original de publicacion. No se toca: es parte de lo que se restaura.
  published: "2025-03-26",
  updated: "2026-10-02",
  /** Destacada del WordPress. `alt` vacio a proposito: la imagen va dentro
   *  del enlace, pegada al titular que ya dice lo mismo, y describir una
   *  ilustracion generica ahi solo anade ruido a un lector de pantalla. */
  image: {
    src: "/blog/the-2-most-used-style-cores-in-modern-web-design-today.png",
    width: 1024,
    height: 1024,
    alt: "",
  },
  body,
};
