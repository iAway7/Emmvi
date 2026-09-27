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
    "Getting leads is the easy part. Turning them into paying customers is where most businesses lose them, and that part can be made automatic. This is how",
    { text: "emmvi.com", bold: true },
    "sets it up.",
  ] },
  { kind: "p", text: [
    "At",
    { text: "emmvi.com", bold: true },
    ", we help service-based businesses",
    { text: "convert leads into long-term customers", bold: true },
    "with a setup built on",
    { text: "GoHighLevel", bold: true },
    ". It combines",
    { text: "sales funnels", bold: true },
    ",",
    { text: "automations", bold: true },
    ",",
    { text: "email marketing", bold: true },
    ",",
    { text: "SEO", bold: true },
    ",",
    { text: "landing pages", bold: true },
    ", and a",
    { text: "professional website", bold: true },
    ", all connected so a lead does not depend on someone remembering to reply.",
  ] },
  { kind: "h2", text: "Funnels That Keep Selling" },
  { kind: "p", text: [
    "In",
    { text: "GoHighLevel", bold: true },
    ", we build",
    { text: "sales funnels", bold: true },
    "that guide your leads from the moment they discover you to the moment they say yes to the quote.",
  ] },
  { kind: "p", text: "These funnels:" },
  { kind: "list", items: [
    "Capture and qualify leads",
    "Nurture them with timely messages",
    "Close deals with less manual effort",
    "Set up follow-ups automatically, so no lead slips through the cracks",
  ] },
  { kind: "p", text: "Think of it as a salesperson that never takes a day off, and never forgets to call back." },
  { kind: "h2", text: "Automations for the Routine Work" },
  { kind: "p", text: "No more chasing leads or sending manual reminders. With GoHighLevel automations, we build workflows that:" },
  { kind: "list", items: [
    "Send follow-up emails and texts",
    "Trigger appointment reminders",
    "Re-engage cold leads",
    "Offer related services based on what a customer already bought",
  ] },
  { kind: "p", text: [
    "You stay focused on running your business. The system handles the follow-up. If you want the detail on one of these, read",
    { text: "how quote follow-up works", href: "/quote-follow-up" },
    ".",
  ] },
  { kind: "h2", text: "Email and SMS That Get Replies" },
  { kind: "p", text: [
    "Generic blasts rarely get a reply. We write",
    { text: "email", bold: true },
    "and",
    { text: "SMS", bold: true },
    "campaigns that read like a person wrote them, because people buy from people.",
  ] },
  { kind: "p", text: [
    "With GoHighLevel's automation, we segment your audience and send the",
    { text: "right message at the right time", bold: true },
    ", so a lead that went quiet hears from you again before they hire someone else.",
  ] },
  { kind: "h2", text: "Landing Pages Built to Convert" },
  { kind: "p", text: [
    "Yes,",
    { text: "we build websites that look good", bold: true, href: "/services/website-design" },
    ", but what matters more is that they",
    { text: "convert", bold: true },
    ". Every page we design is built to capture the lead, ask for the next step and get out of the visitor's way.",
  ] },
  { kind: "p", text: "Our landing pages are:" },
  { kind: "list", items: [
    "Fast-loading",
    "Mobile-friendly",
    "SEO-optimized",
    "Designed to push users to take the next step",
  ] },
  { kind: "p", text: "And because it is all built into GoHighLevel, you can see which pages bring in leads and which ones do not." },
  { kind: "h2", text: "SEO That Brings Organic Leads" },
  { kind: "p", text: [
    "A good website does little if no one can find it. We optimize your site and content for",
    { text: "Google visibility", bold: true },
    ", to help you",
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
  { kind: "p", text: "SEO takes months, not weeks, but the traffic it brings does not stop when an ad budget runs out." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. emmvi is an independent service provider and is not affiliated with, endorsed by or certified by GoHighLevel Inc. The setup described here suits a business that already gets enough quote requests to lose some. If you are not there yet, the funnel is not the first thing to fix." },

  { kind: "h2", text: "Why emmvi.com" },
  { kind: "p", text: [
    "We combine",
    { text: "design", bold: true },
    ",",
    { text: "tech", bold: true },
    ", and",
    { text: "marketing", bold: true },
    "to build a system that keeps working",
    "while you work",
    ".",
  ] },
  { kind: "list", items: [
    [
      "Built on ",
      { text: "GoHighLevel", bold: true, href: "/services/gohighlevel-automation" },
    ],
    "Funnels, sites and automations set up for you",
    "Support from real people who answer",
    "No promises we cannot keep",
  ] },
  { kind: "h3", text: "Ready to Stop Chasing Leads?" },
  { kind: "p", text: [
    "Whether you are just starting out or growing,",
    { text: "emmvi.com", bold: true },
    "builds the systems that turn a first quote request into a customer who comes back.",
  ] },
  { kind: "p", text: [
    { text: "Book a free call", href: "/contact-us" },
    "and we will look at where your leads are getting lost.",
  ] },
];

export const turnLeadsIntoLoyal: Post = {
  slug: "turn-leads-into-loyal-customers-with-funnels-automations-digital-firepower-powered-by-gohighlevel",
  title: "Turn Leads Into Repeat Customers with GoHighLevel",
  description: "How GoHighLevel funnels and automations, together with email, SMS, SEO and landing pages, turn leads into repeat customers without manual follow-up.",
  lede: "How funnels and automations turn a first quote request into a repeat customer.",
  category: "Automation",
  // Fecha original de publicacion. No se toca: es parte de lo que se restaura.
  published: "2025-04-23",
  updated: "2026-09-28",
  /** Destacada del WordPress. `alt` vacio a proposito: la imagen va dentro
   *  del enlace, pegada al titular que ya dice lo mismo, y describir una
   *  ilustracion generica ahi solo anade ruido a un lector de pantalla. */
  image: {
    src: "/blog/turn-leads-into-loyal-customers-with-funnels-automations-digital-firepower-powered-by-gohighlevel.png",
    width: 1400,
    height: 628,
    alt: "",
  },
  body,
};
