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
    "Getting leads is easy. Turning them into paying customers? That’s where the real magic happens—and",
    { text: "emmvi.com", bold: true },
    "is here to make that magic automatic.",
  ] },
  { kind: "p", text: [
    "At",
    { text: "emmvi.com", bold: true },
    ", we help service-based businesses like yours",
    { text: "convert leads into long-term customers", bold: true },
    "using a powerhouse digital strategy built on",
    { text: "GoHighLevel", bold: true },
    ". Our approach combines",
    { text: "conversion-driven funnels", bold: true },
    ",",
    { text: "smart automations", bold: true },
    ",",
    { text: "email marketing", bold: true },
    ",",
    { text: "SEO", bold: true },
    ",",
    { text: "high-performing landing pages", bold: true },
    ", and a",
    { text: "slick, professional website", bold: true },
    "—all working together to grow your business on autopilot.",
  ] },
  { kind: "h2", text: "🔁 Funnel Systems That Sell (Even While You Sleep)" },
  { kind: "p", text: [
    "Using the power of",
    { text: "GoHighLevel", bold: true },
    ", we build custom",
    { text: "sales funnels", bold: true },
    "that guide your leads through a journey—from the moment they discover you to the moment they hit “buy.”",
  ] },
  { kind: "p", text: "These funnels:" },
  { kind: "list", items: [
    "Capture and qualify leads",
    "Nurture them with timely messaging",
    "Close deals faster, with less manual effort",
    "Set up follow-ups automatically (so no lead slips through the cracks)",
  ] },
  { kind: "p", text: "Think of it like a digital salesperson that never takes a day off." },
  { kind: "h2", text: "⚙️ Automations That Handle the Grind" },
  { kind: "p", text: "No more chasing leads or sending manual reminders. With GoHighLevel automations, we create intelligent workflows that:" },
  { kind: "list", items: [
    "Send follow-up emails and texts",
    "Trigger appointment reminders",
    "Re-engage cold leads",
    "Upsell or cross-sell based on user behavior",
  ] },
  { kind: "p", text: "You stay focused on running your business—we handle the back-end hustle." },
  { kind: "h2", text: "📧 Email & SMS Marketing That Actually Gets Responses" },
  { kind: "p", text: [
    "Generic blasts don’t work anymore. We craft personalized",
    { text: "email", bold: true },
    "and",
    { text: "SMS", bold: true },
    "campaigns that feel human, not robotic—because relationships sell.",
  ] },
  { kind: "p", text: [
    "With GoHighLevel’s automation engine, we segment your audience and deliver the",
    { text: "right message at the right time", bold: true },
    ", turning cold leads into hot buyers.",
  ] },
  { kind: "h2", text: "🖥️ Landing Pages & Websites That Convert (Not Just Look Pretty)" },
  { kind: "p", text: [
    "Yes,",
    { text: "we build beautiful websites", bold: true, href: "/services/website-design" },
    "—but more importantly, they",
    { text: "convert", bold: true },
    ". Every page we design is optimized to capture leads, drive action, and guide users through your funnel with zero friction.",
  ] },
  { kind: "p", text: "Our landing pages are:" },
  { kind: "list", items: [
    "Fast-loading",
    "Mobile-friendly",
    "SEO-optimized",
    "Designed to push users to take the next step",
  ] },
  { kind: "p", text: "And because it’s all built into GoHighLevel, you can easily track every click, scroll, and conversion." },
  { kind: "h2", text: "🔍 SEO That Drives Organic Leads 24/7" },
  { kind: "p", text: [
    "What good is a gorgeous website if no one can find it? Our team optimizes your site and content for",
    { text: "Google visibility", bold: true },
    ", helping you",
    { text: "rank for the keywords your customers are actually searching for", href: "/services/seo" },
    ".",
  ] },
  { kind: "p", text: "We target:" },
  { kind: "list", items: [
    "Local SEO (for service businesses)",
    "Niche keywords",
    "Long-tail queries",
    "Competitor analysis",
  ] },
  { kind: "p", text: "More traffic. Better leads. Less ad spend." },
  { kind: "h2", text: "💥 Why Choose emmvi.com?" },
  { kind: "p", text: [
    "We’re not just designers. We’re strategists. We combine",
    { text: "design", bold: true },
    ",",
    { text: "tech", bold: true },
    ", and",
    { text: "marketing psychology", bold: true },
    "to build a system that works",
    "while you work",
    ".",
  ] },
  { kind: "p", text: [
    "✅ Powered by",
    { text: "GoHighLevel", bold: true },
    "✅ Done-for-you funnels, sites & automations✅ Support from real humans who care about your growth✅ No fluff. Just results.",
  ] },
  { kind: "h3", text: "Ready to Stop Chasing Leads and Start Closing Them?" },
  { kind: "p", text: [
    "Whether you're just starting out or scaling up,",
    { text: "emmvi.com", bold: true },
    "builds the systems that turn browsers into buyers. Let’s automate your growth and build a customer-generating machine together.",
  ] },
  { kind: "p", text: [
    "👉",
    { text: "Book a Free Strategy Call", href: "/contact-us" },
    "and let’s make your business work harder (so you don’t have to).",
  ] },
];

export const turnLeadsIntoLoyal: Post = {
  slug: "turn-leads-into-loyal-customers-with-funnels-automations-digital-firepower-powered-by-gohighlevel",
  title: "Turn Leads Into Loyal Customers with: Funnels, Automations & Digital Firepower Powered by GoHighLevel",
  description: "Convert leads into loyal customers with powerful GoHighLevel funnels and smart automations—integrating email, SEO, landing pages, and workflows for scalable business growth.",
  lede: "Convert leads into loyal customers with powerful GoHighLevel funnels and smart automations—integrating email, SEO, landing pages, and workflows for scalable business growth.",
  // Fecha original de publicacion. No se toca: es parte de lo que se restaura.
  published: "2025-04-23",
  body,
};
