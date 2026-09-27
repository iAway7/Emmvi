import type { Post } from "@/lib/posts";

/**
 * Recuperado del backup del WordPress anterior (agosto de 2026) y sustituido
 * el 27 de septiembre de 2026 por la reescritura de content/rewrites/.
 *
 * El original prometia "boost conversions" y "save hours every week" sin
 * nada que lo sostuviera, y estaba escrito en el lenguaje de consultora que
 * PRODUCT.md lista como anti-referencia. Este cuerpo explica que hace cada
 * herramienta, cuando hacen falta las dos y que se rompe, sin una sola cifra
 * de ahorro ni de conversion. Slug, fecha de publicacion, imagen y categoria
 * no se tocan.
 */
const body: Post["body"] = [
  { kind: "p", text: "If you run a small service business, you probably already pay for more software than you use. A form on the website. A calendar. A quoting tool. A spreadsheet that somebody updates. An inbox. Each one works. The trouble is that none of them knows what the others are doing, so the joining-up happens in someone's head, usually at the end of a long day." },
  { kind: "p", text: "That is the gap GoHighLevel and Zapier are meant to close. They do it in different ways, and knowing which does what saves you from paying for both when one would do." },

  { kind: "h2", text: "What GoHighLevel is" },
  { kind: "p", text: "GoHighLevel is a CRM with messaging attached. It holds your contacts, it can send email and SMS, it has pipelines you can drag a job through, it books appointments, and it lets you build automations inside itself: when a form comes in, send this text, wait two days, and if nobody replied, send another." },
  { kind: "p", text: "The important word is inside. A lot of what people reach for Zapier to do, GoHighLevel already does natively, and doing it natively is more reliable because there is no second service in the chain that can fail quietly." },

  { kind: "h2", text: "What Zapier is" },
  { kind: "p", text: "Zapier is glue. It watches one app for something happening and makes another app do something in response. It holds no data of its own and has no opinion about your business. That is its strength and its limit." },
  { kind: "p", text: "You need it when a tool you depend on is not one your CRM speaks to. Trade-specific job software, an accounting package, a supplier portal, an old spreadsheet nobody wants to retire. Zapier reaches the things nothing else reaches." },
  { kind: "aside", tone: "tip", text: "A rule that saves money: build it natively if the CRM can, and reach for Zapier only when it cannot. Every hop you add is another thing that can break at three in the afternoon without telling you." },

  { kind: "h2", text: "Four connections to build first" },
  { kind: "p", text: "You do not need thirty automations. In a small service business, four of them carry most of the value, and they are the four that stop work from being lost." },
  { kind: "list", ordered: true, items: [
    [
      { text: "Quote request to instant reply.", bold: true },
      " The website form creates the contact and fires a text message straight away, before anyone has looked at it. The person who asked knows they have reached a real business rather than a void. This is ",
      { text: "speed to lead", href: "/speed-to-lead" },
      ", and it is the cheapest of the four to set up.",
    ],
    [
      { text: "Quote request to the right person.", bold: true },
      " The contact lands in the pipeline with the job type, the postcode and the source already filled in, so nobody has to open the email to find out what it is.",
    ],
    [
      { text: "Quote to follow-up.", bold: true },
      " When a quote goes out, a short sequence starts. Two or three messages, spaced out, that stop the moment the customer replies. This is the one that pays for everything else, and there is more on it in ",
      { text: "how to follow up on a quote", href: "/quote-follow-up" },
      ".",
    ],
    [
      { text: "Job done to review request.", bold: true },
      " A few days after completion, one message asking for a review, with the link already in it. Reviews are the closest thing to free marketing a local business has, and most businesses never get round to asking. ",
      { text: "Getting more Google reviews", href: "/how-to-get-more-google-reviews" },
      " covers the wording.",
    ],
  ] },
  { kind: "p", text: "Where Zapier earns its place is on the edges of those four: sending a won job to the accounting package, copying new contacts to a spreadsheet the office still uses, or pulling leads from an ads platform the CRM has no direct connection to." },

  { kind: "h2", text: "What breaks" },
  { kind: "p", text: "Automations fail in ways that are hard to notice, which is the real risk. Nothing throws an error at you. The follow-up simply stops going out, and you find out six weeks later when you wonder why the pipeline looks thin." },
  { kind: "list", items: [
    "A form field gets renamed on the website and the automation that reads it starts passing an empty value.",
    "A message sequence has no exit condition, so a customer who already said yes keeps getting chased.",
    "Two automations fire on the same event and the customer gets everything twice.",
    "A trial expires on a connected app and the chain breaks at the one link nobody is watching.",
  ] },
  { kind: "p", text: "The fix is not cleverer automation. It is fewer of them, each one doing something you would notice was missing, plus somebody checking once a month that the messages still go out. Setting it up is half the job; keeping an eye on it afterwards is the other half." },

  { kind: "h2", text: "The honest summary" },
  { kind: "p", text: "This is plumbing. It does not generate demand, it does not make your work better, and it will not turn a business that nobody is calling into a busy one. What it does is stop you losing the jobs you had already won: the quote nobody chased, the quote request that came in on a Saturday, the customer who would have left a review if someone had asked." },
  { kind: "p", text: [
    "That is usually the cheapest place to start, because the people are already asking. If you would rather not build it yourself, emmvi sets up ",
    { text: "GoHighLevel and the connections around it", href: "/services/gohighlevel-automation" },
    ", and you can ",
    { text: "get in touch", href: "/contact-us" },
    " to talk it through.",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. emmvi is an independent service provider and is not affiliated with, endorsed by or certified by GoHighLevel Inc. or Zapier. Connecting two platforms only pays off once the work between them is repetitive enough to be worth automating." },
];

export const streamlineScaleSucceedUsing: Post = {
  slug: "streamline-scale-succeed-using-zapier-and-gohighlevel-to-grow-your-business",
  title: "Zapier and GoHighLevel: Connecting the Tools You Pay For",
  description: "What GoHighLevel and Zapier each do, when a small service business needs both, the four connections worth building first, and what breaks.",
  lede: "Most small businesses do not have a tools problem. They have a problem with tools that do not talk to each other, and a person in the middle retyping things.",
  category: "Automation",
  // Fecha original de publicacion. No se toca: es parte de lo que se restaura.
  published: "2025-05-06",
  updated: "2026-09-27",
  /** Destacada del WordPress. `alt` vacio a proposito: la imagen va dentro
   *  del enlace, pegada al titular que ya dice lo mismo, y describir una
   *  ilustracion generica ahi solo anade ruido a un lector de pantalla. */
  image: {
    src: "/blog/streamline-scale-succeed-using-zapier-and-gohighlevel-to-grow-your-business.webp",
    width: 2400,
    height: 1260,
    alt: "",
  },
  body,
};
