import type { Post } from "@/lib/posts";

/**
 * Recuperado del backup del WordPress anterior (agosto de 2026), convertido
 * desde el marcado Gutenberg original.
 *
 * Revisado el 2026-09-30: misma estructura y mismos puntos, sin el lenguaje de
 * consultora, y con las afirmaciones que no se podian defender cambiadas por
 * su mecanismo (los chatbots "a miles de consultas", la programacion de
 * publicaciones que Zapier no hace). La deteccion de sentimiento de HighLevel
 * se comprobo en su centro de ayuda.
 */
const body: Post["body"] = [
  { kind: "p", text: "AI has changed how a lot of small businesses handle the routine side of their work: answering the same questions, sending follow-ups, booking appointments, sorting leads. It brings opportunities and problems in about equal measure. Some owners worry it will replace people. In practice, used for the right jobs, it takes repetitive work off people so they can spend their time on the conversations that need a human." },
  { kind: "p", text: [
    "For a business that does not write code, the practical way in is through tools you may already pay for: a Customer Relationship Management (CRM) platform like",
    { text: "GoHighLevel", bold: true },
    "and an automation tool like",
    { text: "Zapier", bold: true },
    ". Both now ship AI features that sit inside ordinary workflows, so there is nothing to program. Below is what AI does well in an online business, how those two tools put it to work, and where it goes wrong.",
  ] },
  { kind: "h2", text: "The Benefits of AI for Online Businesses" },
  { kind: "list", items: [
    [
      { text: "Efficiency & Productivity", bold: true },
      "AI takes over repetitive tasks so your team spends less time on them. Email replies, lead nurturing and appointment scheduling can all run on their own, and they run the same way every time, which is often the bigger gain.",
    ],
    [
      { text: "Personalized Customer Experiences", bold: true },
      "AI can read what a customer has done (pages visited, forms filled, past messages) and adjust what they get next: a relevant recommendation, a campaign that fits their situation, an answer outside office hours. Whether that improves satisfaction or retention is something to measure in your own numbers, not assume.",
    ],
    [
      { text: "Better Decisions from Your Data", bold: true },
      "AI can go through more data than anyone has time to read and point out patterns: which leads tend to buy, which campaigns bring the wrong people, when demand picks up. It speeds up the question; the decision is still yours.",
    ],
    [
      { text: "Cost Savings", bold: true },
      "Automating data entry and first-line questions means fewer hours spent on them. An AI chatbot can answer many conversations at once, which a person cannot, but it only saves money if its answers are good enough that people do not have to redo them.",
    ],
    [
      { text: "Room to Grow", bold: true },
      "When volume goes up (more inquiries, more orders, more campaigns), automated steps handle the extra load without a new hire for each one. What does not scale on its own is the setup: every new workflow still needs someone to build and check it.",
    ],
  ], ordered: true },
  { kind: "h2", text: "How to Harness AI with GoHighLevel and Zapier" },
  { kind: "p", text: [
    "AI on its own is a capability. It becomes useful when it is wired into your",
    { text: "CRM and automation platforms", bold: true },
    ", where it can act on real leads and real customers. Here is how GoHighLevel and Zapier each do that.",
  ] },
  { kind: "h3", text: "1. AI-Driven CRM with GoHighLevel" },
  { kind: "p", text: "GoHighLevel is an all-in-one CRM that covers sales, marketing and customer service in one place. With its AI features, a business can:" },
  { kind: "list", items: [
    [
      { text: "Automate Lead Nurturing", bold: true },
      ": AI chat agents and automated follow-up sequences make sure a new lead hears back on time without someone remembering to do it.",
    ],
    [
      { text: "AI-Powered Messaging", bold: true },
      ": AI can draft or send replies based on what the customer has already said, so the message fits the conversation instead of being a generic template.",
    ],
    [
      { text: "Smart Scheduling", bold: true },
      ": Customers pick an open slot from your calendar themselves, which removes the back-and-forth emails, and the AI agent can offer that booking inside the conversation.",
    ],
    [
      { text: "Customer Sentiment Analysis", bold: true },
      ": HighLevel's ",
      { text: "AI Intent Detection workflow action", href: "https://help.gohighlevel.com/support/solutions/articles/155000005885-workflow-action-ai-intent-detection" },
      " reads a message and labels it positive, negative or neither, so an unhappy customer can be routed to a person before the problem grows. HighLevel lists it as a premium action, so check what it costs on your plan.",
    ],
  ] },
  { kind: "p", text: "Put together, these let a business answer faster and follow up more consistently, which is where most lost deals are lost in the first place." },
  { kind: "h3", text: "2. Workflow Automation with Zapier" },
  { kind: "p", text: [
    "Zapier connects ",
    { text: "thousands of apps", href: "https://zapier.com/apps" },
    " and automates the steps between them without code. With its AI steps, Zapier can:",
  ] },
  { kind: "list", items: [
    [
      { text: "Sync Data Across Platforms", bold: true },
      ": Update the CRM record automatically when a lead submits a form, so nothing is copied by hand and nothing is lost between tools.",
    ],
    [
      { text: "Automate Marketing Campaigns", bold: true },
      ": Start an email or SMS sequence when a customer does something specific, such as booking, buying or going quiet.",
    ],
    [
      { text: "Connect Chatbots to Your CRM", bold: true },
      ": Send what a chatbot learned into the CRM, so the follow-up that comes after it knows what was already said.",
    ],
    [
      { text: "Automate Social Media Posting", bold: true },
      ": Pass new posts to your social scheduling tool automatically. Zapier moves the content; any suggestion about the best time to post comes from the scheduling tool, not from Zapier.",
    ],
  ] },
  { kind: "p", text: "The value of Zapier here is that each tool keeps doing its own job and the handoffs between them stop depending on someone remembering." },
  { kind: "h2", text: "Potential Challenges and How to Overcome Them" },
  { kind: "p", text: "AI has real limits, and knowing them before you start saves most of the trouble." },
  { kind: "list", items: [
    [
      { text: "Lack of Human Touch", bold: true },
      ": Leaning on AI for everything makes conversations feel robotic. Solution: let AI handle the repetitive questions and keep complex or sensitive conversations with a person.",
    ],
    [
      { text: "Data Privacy Concerns", bold: true },
      ": AI features work on your customers' data, and that raises security and legal questions. Solution: check that your setup complies with the data protection laws where you and your customers are, and know which of your tools stores what.",
    ],
    [
      { text: "Implementation Complexity", bold: true },
      ": Some businesses try to automate everything at once and end up with workflows nobody understands. Solution: start with one simple automation, check it works, then add the next.",
    ],
  ], ordered: true },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. emmvi is an independent service provider and is not affiliated with, endorsed by or certified by GoHighLevel Inc. or Zapier. AI features change faster than articles do, so confirm what each tool does today on its own pricing page before deciding." },

  { kind: "h2", text: "Final Thoughts" },
  { kind: "p", text: [
    "AI is not a threat to an online business. It is a tool, and like any tool it helps when it is pointed at the right job. Used inside",
    { text: "GoHighLevel", bold: true },
    "for CRM work and",
    { text: "Zapier", bold: true },
    "for the connections between tools, it can take repetitive tasks off your team, make follow-ups fit the customer, and absorb more volume without a new hire for every step. It will not fix an offer nobody wants or a process nobody has defined.",
  ] },
  { kind: "p", text: [
    "If you want this set up for your business, ",
    { text: "book a free call", href: "/contact-us" },
    " and we will look at which parts are worth automating and which are not.",
  ] },
];

export const harnessingAiWithoutCode: Post = {
  slug: "harnessing-ai-without-code-how-crms-and-automation-tools-empower-online-businesses",
  title: "AI Without Code: What CRMs and Automation Do",
  description: "What AI inside a CRM and an automation tool actually does for an online business, how GoHighLevel and Zapier use it, and where it goes wrong.",
  lede: "What AI inside a CRM really does for a small business, without writing code.",
  category: "AI",
  // Fecha original de publicacion. No se toca: es parte de lo que se restaura.
  published: "2025-04-01",
  updated: "2026-09-30",
  /** Destacada del WordPress. `alt` vacio a proposito: la imagen va dentro
   *  del enlace, pegada al titular que ya dice lo mismo, y describir una
   *  ilustracion generica ahi solo anade ruido a un lector de pantalla. */
  image: {
    src: "/blog/harnessing-ai-without-code-how-crms-and-automation-tools-empower-online-businesses.jpg",
    width: 1000,
    height: 600,
    alt: "",
  },
  body,
};
