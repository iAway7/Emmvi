import type { Post } from "@/lib/posts";

/**
 * De los ocho articulos heredados, el que mas cerca esta de lo que Emmvi vende
 * hoy: GoHighLevel y Zapier son dos de las herramientas que la home nombra.
 *
 * Por eso mismo es el que mas facil seria estropear. No lleva ni una cifra de
 * ahorro ni un porcentaje de conversion, por la regla de PRODUCT.md: lo que no
 * se puede defender en una llamada no se publica.
 */
export const zapierGohighlevel: Post = {
  slug: "streamline-scale-succeed-using-zapier-and-gohighlevel-to-grow-your-business",
  title: "Zapier and GoHighLevel: connecting the tools you already pay for",
  description:
    "What each tool actually does, when you need both, and the four connections worth building first. Plumbing, not magic.",
  lede: "Most small businesses do not have a tools problem. They have a tools-that-do-not-talk-to-each-other problem, and a person in the middle retyping things.",
  published: "2026-09-19",
  body: [
    {
      kind: "p",
      text: "If you run a small service business, you probably already pay for more software than you use. A form on the website. A calendar. A quoting tool. A spreadsheet that somebody updates. An inbox. Each one works. The trouble is that none of them knows what the others are doing, so the joining-up happens in someone's head, usually at the end of a long day.",
    },
    {
      kind: "p",
      text: "That is the gap GoHighLevel and Zapier are meant to close. They do it in different ways, and knowing which does what saves you from paying for both when one would do.",
    },

    { kind: "h2", text: "What GoHighLevel actually is" },
    {
      kind: "p",
      text: "GoHighLevel is a CRM with messaging attached. It holds your contacts, it can send email and SMS, it has pipelines you can drag a job through, it books appointments, and it lets you build automations inside itself — when a form comes in, send this text, wait two days, if nobody replied, send another.",
    },
    {
      kind: "p",
      text: "The important word is inside. A lot of what people reach for Zapier to do, GoHighLevel already does natively, and doing it natively is more reliable because there is no second service in the chain that can fail quietly.",
    },

    { kind: "h2", text: "What Zapier actually is" },
    {
      kind: "p",
      text: "Zapier is glue. It watches one app for something happening and makes another app do something in response. It holds no data of its own and has no opinion about your business. That is its strength and its limit.",
    },
    {
      kind: "p",
      text: "You need it when a tool you depend on is not one your CRM speaks to. Trade-specific job software, an accounting package, a supplier portal, an old spreadsheet nobody wants to retire. Zapier reaches the things nothing else reaches.",
    },
    {
      kind: "aside",
      text: "A rule that saves money: build it natively if the CRM can, and reach for Zapier only when it cannot. Every hop you add is another thing that can break at three in the afternoon without telling you.",
    },

    { kind: "h2", text: "The four connections worth building first" },
    {
      kind: "p",
      text: "You do not need thirty automations. In a small service business, four of them carry almost all the value, and they are the four that stop work from being lost.",
    },
    {
      kind: "list",
      ordered: true,
      items: [
        "Enquiry to instant reply. The website form creates the contact and fires a text message straight away, before anyone has looked at it. The person who enquired knows they have reached a real business rather than a void.",
        "Enquiry to the right person. The contact lands in the pipeline with the job type, the postcode and the source already filled in, so nobody has to open the email to find out what it is.",
        "Quote to follow-up. When a quote goes out, a short sequence starts. Two or three messages, spaced out, that stop the moment the customer replies. This is the one that pays for everything else.",
        "Job done to review request. A few days after completion, one message asking for a review, with the link already in it. Reviews are the closest thing to free marketing a local business has, and almost nobody asks.",
      ],
    },

    { kind: "h2", text: "What breaks" },
    {
      kind: "p",
      text: "Automations fail in ways that are hard to notice, which is the real risk. Nothing throws an error at you. The follow-up simply stops going out, and you find out six weeks later when you wonder why the pipeline looks thin.",
    },
    {
      kind: "list",
      items: [
        "A form field gets renamed on the website and the automation that reads it starts passing an empty value.",
        "A message sequence has no exit condition, so a customer who already said yes keeps getting chased.",
        "Two automations fire on the same event and the customer gets everything twice.",
        "A trial expires on a connected app and the chain breaks at the one link nobody is watching.",
      ],
    },
    {
      kind: "p",
      text: "The fix is not cleverer automation. It is fewer of them, each one doing something you would notice was missing, plus somebody checking once a month that the messages still go out.",
    },

    { kind: "h2", text: "The honest summary" },
    {
      kind: "p",
      text: "This is plumbing. It does not generate demand, it does not make your work better, and it will not turn a business that nobody is calling into a busy one. What it does is stop you losing the jobs you had already won — the quote nobody chased, the enquiry that came in on a Saturday, the customer who would have left a review if someone had asked.",
    },
    {
      kind: "p",
      text: "For most small businesses that is a bigger number than any marketing campaign, and it is the one you can fix in a fortnight.",
    },
  ],
};
