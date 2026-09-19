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
  { kind: "p", text: "If you've ever dreamed of making sales while sipping your morning coffee—or better yet, while you’re fast asleep—then it's time to take email automation and funnel building seriously." },
  { kind: "p", text: "These two strategies aren’t just marketing buzzwords. When used correctly, they can help you turn cold leads into loyal customers—without needing to manually follow up at every step." },
  { kind: "p", text: "Let’s break it down." },
  { kind: "h2", text: "What Is Email Automation?" },
  { kind: "p", text: [
    "Email automation is the process of sending emails to your audience based on specific triggers or actions they take. It allows you to",
    { text: "stay connected with leads and customers", href: "/services/email-marketing" },
    "without having to manually hit “send” every time.",
  ] },
  { kind: "p", text: "Common examples include:" },
  { kind: "list", items: [
    "Welcome emails after someone signs up to your list",
    "Abandoned cart reminders",
    "Post-purchase follow-ups",
    "Win-back campaigns for inactive customers",
  ] },
  { kind: "p", text: "The beauty of email automation is that it works around the clock. You set it up once, and it continues to deliver value (and sales) on autopilot." },
  { kind: "h2", text: "What’s a Sales Funnel?" },
  { kind: "p", text: "A sales funnel is the structured path a potential customer takes—from discovering your brand to making a purchase. At each stage, the goal is to move the prospect one step closer to conversion." },
  { kind: "p", text: "Here’s a simplified version of a sales funnel:" },
  { kind: "list", items: [
    [
      { text: "Top of Funnel (Awareness)", bold: true },
      "– This is where you attract new leads through blog posts, ads, social media, or SEO.",
    ],
    [
      { text: "Middle of Funnel (Consideration)", bold: true },
      "– Here you build trust with email sequences, case studies, or free lead magnets.",
    ],
    [
      { text: "Bottom of Funnel (Conversion)", bold: true },
      "– This is where you present offers, close sales, and ask for the purchase.",
    ],
  ], ordered: true },
  { kind: "p", text: "Pairing this with automation means you’re delivering the right message at the right time—without doing it manually." },
  { kind: "h2", text: "Why They Work So Well Together" },
  { kind: "p", text: "When email automation is built into your funnel strategy, the results can be impressive. Here’s why this combo is so effective:" },
  { kind: "h3", text: "1. You Build Trust Automatically" },
  { kind: "p", text: "Automated email sequences help educate and nurture your leads, gradually building confidence in your product or service." },
  { kind: "h3", text: "2. You Respond to Interest Instantly" },
  { kind: "p", text: [
    "When someone downloads your guide or signs up for a webinar, your emails can follow up within seconds—",
    { text: "keeping them engaged while interest is high", href: "/how-email-marketing-helps-maximize-customer-engagement" },
    ".",
  ] },
  { kind: "h3", text: "3. You Maximize Every Lead" },
  { kind: "p", text: "Instead of letting leads go cold, automation keeps the conversation going—bringing more people back into the funnel even if they don’t convert right away." },
  { kind: "h3", text: "4. You Free Up Time" },
  { kind: "p", text: "Whether you’re handling ten leads or ten thousand, your automated funnel is always running. This frees you up to focus on higher-impact activities like improving your product or growing your business." },
  { kind: "h2", text: "Tools to Help You Get Started" },
  { kind: "p", text: "You don’t need to be a developer or a tech wizard to build a solid funnel. There are plenty of user-friendly tools available:" },
  { kind: "list", items: [
    [
      { text: "Email Marketing", bold: true },
      ": Mailchimp, ConvertKit, Klaviyo, ActiveCampaign",
    ],
    [
      { text: "Funnel Builders", bold: true },
      ": ClickFunnels, Leadpages, GoHighLevel",
    ],
    [
      { text: "CRM & Automation Platforms", bold: true },
      ": HubSpot, Keap, Zoho, GoHighLevel",
    ],
  ] },
  { kind: "p", text: "Each tool has its strengths, so choose based on your needs and your audience." },
  { kind: "h2", text: "Final Thoughts" },
  { kind: "p", text: "Email automation and sales funnels aren’t just useful—they’re essential for modern marketing. Done right, they help you create consistent, scalable growth while delivering a better experience for your leads and customers." },
  { kind: "p", text: "Start small, test what works, and refine over time. Before long, you’ll have a system in place that’s working for your business 24/7." },
  { kind: "p", text: [
    "Want help building your funnel or setting up your email automation?",
    { text: "Get in touch—we’d be happy to help you build something that converts", href: "/contact-us" },
    ".",
  ] },
];

export const emailAutomationAndFunnel: Post = {
  slug: "email-automation-and-funnel-building-the-secret-to-driving-more-sales",
  title: "Email Automation and Funnel Building: The Secret to Driving More Sales (While You Sleep)",
  description: "Unlock more sales with email automation and funnel building—learn proven sequences, segmentation, and conversion-focused strategies to boost revenue and growth.",
  lede: "Unlock more sales with email automation and funnel building—learn proven sequences, segmentation, and conversion-focused strategies to boost revenue and growth.",
  // Fecha original de publicacion. No se toca: es parte de lo que se restaura.
  published: "2025-02-28",
  body,
};
