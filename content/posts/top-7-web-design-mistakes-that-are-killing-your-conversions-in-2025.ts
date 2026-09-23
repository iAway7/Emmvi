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
  { kind: "p", text: [
    "Your website might look stunning, but is it",
    "actually",
    "converting visitors into leads or customers?",
  ] },
  { kind: "p", text: [
    "In 2025, successful web design is no longer just about aesthetics. It’s about strategy, usability, and performance. At",
    { text: "emmvi", bold: true },
    ", we see it all the time: beautiful websites that underperform because of simple, avoidable mistakes.",
  ] },
  { kind: "p", text: [
    "Let’s break down the",
    { text: "top 7 web design mistakes", bold: true },
    "that are silently killing your conversions (and how to fix them).",
  ] },
  { kind: "h2", text: "1. Slow Load Times" },
  { kind: "h3", text: "🚫 Problem:" },
  { kind: "p", text: "Visitors won’t wait. If your website takes more than 3 seconds to load, you’re losing traffic and trust, fast." },
  { kind: "h3", text: "✅ Fix:" },
  { kind: "list", items: [
    "Compress images (use next-gen formats like WebP).",
    "Leverage caching and a CDN.",
    "Minimize third-party scripts and bloat.",
  ] },
  { kind: "p", text: "🔧 Pro Tip: Use tools like Google PageSpeed Insights or GTmetrix to diagnose performance issues." },
  { kind: "h2", text: "2. Confusing Navigation" },
  { kind: "h3", text: "🚫 Problem:" },
  { kind: "p", text: "If users can’t find what they’re looking for in under 5 seconds, they’ll bounce." },
  { kind: "h3", text: "✅ Fix:" },
  { kind: "list", items: [
    "Keep menus simple and intuitive.",
    "Use clear CTAs (call-to-actions) above the fold.",
    "Maintain consistent structure across pages.",
  ] },
  { kind: "p", text: "📱 Mobile Tip: Ensure your mobile nav is just as clean, no more hidden or overcrowded hamburger menus." },
  { kind: "h2", text: "3. Weak or Vague CTAs" },
  { kind: "h3", text: "🚫 Problem:" },
  { kind: "p", text: "A generic “Submit” button just doesn’t cut it anymore. CTAs need to be specific, action-driven, and benefit-oriented." },
  { kind: "h3", text: "✅ Fix:" },
  { kind: "list", items: [
    "Replace “Learn More” with “Get Your Free Audit”",
    "Highlight urgency or value (“Start Saving Today”, “Claim Your Spot Now”)",
    "Place CTAs in multiple strategic locations",
  ] },
  { kind: "h2", text: "4. Not Mobile-Optimized" },
  { kind: "h3", text: "🚫 Problem:" },
  { kind: "p", text: "Over 60% of traffic comes from mobile in 2025, if your site’s not responsive, you're hemorrhaging conversions." },
  { kind: "h3", text: "✅ Fix:" },
  { kind: "list", items: [
    "Use mobile-first design practices.",
    "Test across multiple devices and screen sizes.",
    "Prioritize tap targets, thumb zones, and legible font sizes.",
  ] },
  { kind: "p", text: "🧪 Try: Google's Mobile-Friendly Test tool." },
  { kind: "h2", text: "5. Overcomplicated Design" },
  { kind: "h3", text: "🚫 Problem:" },
  { kind: "p", text: "Cluttered layouts, excessive animations, or a rainbow of fonts/colors overwhelm users and distract from your goal." },
  { kind: "h3", text: "✅ Fix:" },
  { kind: "list", items: [
    "Embrace whitespace.",
    "Stick to a cohesive color palette (2 to 3 main colors).",
    "Use consistent typography and visual hierarchy.",
  ] },
  { kind: "h2", text: "6. Lack of Trust Signals" },
  { kind: "h3", text: "🚫 Problem:" },
  { kind: "p", text: "If users don't trust you, they won’t convert, even if everything else is perfect." },
  { kind: "h3", text: "✅ Fix:" },
  { kind: "list", items: [
    "Add client testimonials, case studies, or Google reviews.",
    "Use secure HTTPS and trust badges (especially for ecommerce).",
    "Highlight guarantees, certifications, or affiliations.",
  ] },
  { kind: "p", text: "💬 Bonus: Videos of customer success stories build instant credibility." },
  { kind: "h2", text: "7. Ignoring Analytics & Heatmaps" },
  { kind: "h3", text: "🚫 Problem:" },
  { kind: "p", text: "Design based on assumptions = missed opportunities." },
  { kind: "h3", text: "✅ Fix:" },
  { kind: "list", items: [
    "Use Google Analytics + tools like Hotjar or Microsoft Clarity.",
    "Track bounce rates, user paths, and scroll depth.",
    "Run A/B tests to continuously improve performance.",
  ] },
  { kind: "h2", text: "🚀 Ready to Boost Your Conversions?" },
  { kind: "p", text: "Your website is often your first (and most powerful) sales tool. If it’s not converting, it’s costing you." },
  { kind: "p", text: [
    "At",
    { text: "emmvi", bold: true },
    ", we specialize in conversion-focused web design that doesn’t just look great. It works. Want a free audit of your current site?",
    { text: "Let’s talk", bold: true, href: "/contact-us" },
    ".",
  ] },
];

export const top7WebDesign: Post = {
  slug: "top-7-web-design-mistakes-that-are-killing-your-conversions-in-2025",
  title: "Top 7 Web Design Mistakes That Are Killing Your Conversions in 2025",
  description: "Discover the top 7 web design mistakes killing your conversions in 2025, and how to fix them to boost UX, speed, mobile performance, and sales.",
  lede: "Seven design mistakes that lose you enquiries, and the fix for each one.",
  category: "Website Design",
  // Fecha original de publicacion. No se toca: es parte de lo que se restaura.
  published: "2025-04-06",
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
