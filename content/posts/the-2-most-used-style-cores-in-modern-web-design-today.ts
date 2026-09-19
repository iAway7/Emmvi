import type { Post } from "@/lib/posts";

/**
 * Recuperado del backup del WordPress anterior (agosto de 2026), convertido
 * desde el marcado Gutenberg original.
 *
 * Texto intacto. Lo unico reescrito son los enlaces internos, que apuntaban a
 * rutas viejas: van al destino actual en vez de encadenar una redireccion, y
 * los que llevaban a una pagina retirada se quedan en texto llano.
 */
const body: Post["body"] = [
  { kind: "p", text: "Web design trends are always shifting, but right now, two dominant styles are shaping how modern websites look and feel. Whether you're designing for a SaaS product, a creative portfolio, or an eCommerce brand, chances are you're either seeing—or using—one of these two approaches." },
  { kind: "p", text: [
    "These styles don’t just look good—they’re backed by solid UX principles and real-world performance. Here’s a breakdown of the two most commonly used \"core\" styles in",
    { text: "web design", href: "/services/website-design" },
    "today:",
    { text: "Clean Minimalism", bold: true },
    "and",
    { text: "Neo-Brutalism", bold: true },
    ".",
  ] },
  { kind: "h2", text: "1. Clean Minimalism: Timeless, Polished, and User-Friendly" },
  { kind: "p", text: "Clean Minimalism has been a go-to for years, but in 2025, it’s more refined than ever. This style is all about simplicity with purpose—stripping away distractions to focus on clarity, readability, and functionality." },
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
  { kind: "p", text: "Clean Minimalism creates an effortless browsing experience. It’s easy to navigate, looks professional across all industries, and feels modern without trying too hard. It also loads quickly and adapts well to mobile—making it a strong choice for performance and SEO." },
  { kind: "p", text: "This style is especially popular with startups, tech companies, agencies, and any brand that wants to come across as trustworthy, efficient, and sharp." },
  { kind: "h2", text: "2. Neo-Brutalism: Bold, Raw, and Unapologetically Digital" },
  { kind: "p", text: "Neo-Brutalism is the loud, experimental cousin of minimalism. It takes inspiration from classic Brutalist design but gives it a modern, web-first twist. Expect bold fonts, clashing colors, grid-breaking layouts, and a deliberate “unfinished” aesthetic." },
  { kind: "h3", text: "Core Features:" },
  { kind: "list", items: [
    "Monochrome or bold color blocking",
    "Thick borders and visible layout grids",
    "Raw HTML elements (like native buttons and links)",
    "Oversized typography with little concern for traditional spacing",
    "Minimal effects or polished animations—if any",
    "Purposefully unrefined, sometimes glitchy or anti-aesthetic",
  ] },
  { kind: "h3", text: "Why It Works:" },
  { kind: "p", text: "Neo-Brutalism captures attention immediately. It’s ideal for creative studios, tech disruptors, or brands that want to stand out and say, “We don’t play by the rules.” It feels authentic, bold, and distinctly digital—like the internet grew up but didn’t lose its edge." },
  { kind: "p", text: "It’s not for everyone, but when executed well, it can create a striking, memorable experience that cuts through the noise." },
  { kind: "h2", text: "Final Thoughts" },
  { kind: "p", text: [
    "These two styles represent opposite ends of the design spectrum—",
    { text: "Clean Minimalism", bold: true },
    "is about restraint and polish, while",
    { text: "Neo-Brutalism", bold: true },
    "is about breaking conventions and embracing imperfection. Both are powerful when used intentionally.",
  ] },
  { kind: "p", text: "So whether you’re redesigning your site or just browsing for inspiration, understanding these styles can help you make smarter, more strategic design decisions." },
  { kind: "p", text: "Which one fits your brand better?just one email away." },
  { kind: "p", text: [
    { text: "Need help picking up a style?", bold: true },
    { text: "Let’s chat", href: "/contact-us" },
    ". Whether you’re building a Clean Minimalist, or a Neo-Brutalist site we are here to help you.",
  ] },
];

export const the2MostUsed: Post = {
  slug: "the-2-most-used-style-cores-in-modern-web-design-today",
  title: "The 2 Most Used Style Cores in Modern Web Design Today (And Why They Work)",
  description: "Explore the 2 most popular style cores in modern web design—minimalism and brutalism—their impact on UX, branding, and how to implement them effectively.",
  lede: "Explore the 2 most popular style cores in modern web design—minimalism and brutalism—their impact on UX, branding, and how to implement them effectively.",
  // Fecha original de publicacion. No se toca: es parte de lo que se restaura.
  published: "2025-03-26",
  body,
};
