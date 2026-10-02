import type { Post } from "@/lib/posts";

/**
 * Recuperado del backup del WordPress anterior (agosto de 2026), convertido
 * desde el marcado Gutenberg original.
 *
 * Revisado el 2026-10-02: ConvertKit pasa a Kit (cambio de nombre anunciado
 * por Kit en octubre de 2024), fuera las promesas de "ventas mientras
 * duermes", "results can be impressive" y "essential", y se anade el limite:
 * la automatizacion no arregla una oferta floja. Misma estructura.
 */
const body: Post["body"] = [
  { kind: "p", text: "If follow-up is the part of your business that slips when you get busy, email automation and funnel building are worth taking seriously. They are how the next email goes out on time whether or not anyone remembers to send it." },
  { kind: "p", text: "Both terms get used as marketing buzzwords, but the idea underneath is simple. Used correctly, they help you move a new lead toward becoming a customer without someone following up by hand at every step." },
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
  { kind: "p", text: "The advantage of email automation is that it keeps working outside office hours. You set it up once, and it keeps sending the right message when the trigger happens. It still needs checking: an automation nobody looks at keeps sending last year’s offer." },
  { kind: "h2", text: "What’s a Sales Funnel?" },
  { kind: "p", text: "A sales funnel is the path a potential customer takes from first hearing about you to buying. At each stage, the goal is to move them one step closer to a decision." },
  { kind: "p", text: "Here’s a simplified version of a sales funnel:" },
  { kind: "list", items: [
    [
      { text: "Top of Funnel (Awareness)", bold: true },
      ": This is where new leads find you, through blog posts, ads, social media, or SEO.",
    ],
    [
      { text: "Middle of Funnel (Consideration)", bold: true },
      ": Here you build trust with email sequences, case studies, or free lead magnets.",
    ],
    [
      { text: "Bottom of Funnel (Conversion)", bold: true },
      ": This is where you make the offer, send the quote, and ask for the sale.",
    ],
  ], ordered: true },
  { kind: "p", text: "Pairing this with automation means each stage sends its message when the lead reaches it, without anyone doing it by hand." },
  { kind: "h2", text: "Why They Work So Well Together" },
  { kind: "p", text: "When email automation is built into the funnel, each one covers the other’s weak spot: the funnel says what to send, and the automation makes sure it is sent. Here’s what that gives you:" },
  { kind: "h3", text: "1. You Build Trust Automatically" },
  { kind: "p", text: "Automated email sequences answer the questions a lead would otherwise have to ask, one email at a time, so they know more about your product or service by the time they talk to you." },
  { kind: "h3", text: "2. You Respond to Interest Instantly" },
  { kind: "p", text: [
    "When someone downloads your guide, signs up for a webinar or sends a quote request, your emails can follow up within seconds, ",
    { text: "keeping them engaged while interest is high", href: "/how-email-marketing-helps-maximize-customer-engagement" },
    ".",
  ] },
  { kind: "h3", text: "3. Fewer Leads Go Cold" },
  { kind: "p", text: [
    "Most leads don’t decide on the first contact. Instead of letting them go quiet, automation keeps the conversation going and brings some of them back later. For a business that sends quotes, this is the step that matters most; we cover it in",
    { text: "how quote follow-up works", href: "/quote-follow-up" },
    ".",
  ] },
  { kind: "h3", text: "4. You Free Up Time" },
  { kind: "p", text: "Whether you’re handling ten leads or ten thousand, the automated part of the funnel runs the same way. That leaves you the time for what automation can’t do, like the sales call, the job itself, or improving what you sell." },
  { kind: "h2", text: "Tools to Help You Get Started" },
  { kind: "p", text: "You don’t need to be a developer to build a working funnel. There are plenty of tools built for non-technical users:" },
  { kind: "list", items: [
    [
      { text: "Email Marketing", bold: true },
      ": Mailchimp, Kit (formerly ConvertKit), Klaviyo, ActiveCampaign",
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
  { kind: "p", text: "Each tool has its strengths, so choose based on what you sell, who you sell to, and what you already pay for." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. emmvi is an independent service provider and is not affiliated with, endorsed by or certified by GoHighLevel Inc. Naming a tool here is not an endorsement: check what your current email or CRM software already sends before paying for another one." },

  { kind: "h2", text: "Final Thoughts" },
  { kind: "p", text: "Email automation and sales funnels are among the most useful things a small business can set up. Done right, they make your follow-up consistent, whatever the week looks like, and give leads and customers a clearer experience. They will not fix an offer people don’t want; they make sure a good one is not lost to silence." },
  { kind: "p", text: "Start small, test what works, and refine over time. One sequence that runs reliably is worth more than five that nobody checks." },
  { kind: "p", text: [
    "Want help building your funnel or setting up your email automation?",
    { text: "Book a free call", href: "/contact-us" },
    "and we will look at where your leads are going quiet.",
  ] },
];

export const emailAutomationAndFunnel: Post = {
  slug: "email-automation-and-funnel-building-the-secret-to-driving-more-sales",
  title: "Email Automation and Funnels That Do the Selling",
  description: "How a sales funnel works, which emails do the selling at each stage, and what to set up first so the follow-up runs without anyone remembering.",
  lede: "How a sales funnel works, and which emails keep the follow-up going.",
  category: "Email Marketing",
  // Fecha original de publicacion. No se toca: es parte de lo que se restaura.
  published: "2025-02-28",
  updated: "2026-10-02",
  /** Destacada del WordPress. `alt` vacio a proposito: la imagen va dentro
   *  del enlace, pegada al titular que ya dice lo mismo, y describir una
   *  ilustracion generica ahi solo anade ruido a un lector de pantalla. */
  image: {
    src: "/blog/email-automation-and-funnel-building-the-secret-to-driving-more-sales.webp",
    width: 1000,
    height: 1000,
    alt: "",
  },
  body,
};
