import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "cleaning business lead follow up". La guia de Consumers' Checkbook para
 * contratar limpieza (tres o mas presupuestos, seguro de responsabilidad
 * civil y de accidentes laborales, alcance por escrito) se comprobo el dia de
 * publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's Sunday, 9:15pm. Someone moving out on Friday fills in your form: \"Need a move-out clean for a two-bed apartment, deposit depends on it.\" On Monday morning a mother of three asks what a weekly clean would cost. At lunchtime the manager of a small dental office rings about evening cleaning, while your team is mid-job with a vacuum running, and gets voicemail." },
  { kind: "p", text: "Each of those is a real job, and none of them depends on how well your team cleans. They depend on what happens in the next few hours and days: who replies first, whether the estimate gets a second message, and whether anyone answers the questions the customer was told to ask. This article sets out how a cleaning business can follow up on each kind of lead, what to say, and which parts can run on their own." },

  { kind: "h2", text: "Three kinds of cleaning leads" },
  { kind: "p", text: "Cleaning leads fall into three groups. Each needs a different speed and a different follow-up, so it helps to know which one you're looking at before anyone replies." },
  { kind: "list", items: [
    [{ text: "One-off jobs with a date.", bold: true }, " Move-out, move-in, post-renovation, a deep clean before guests arrive. The date is fixed, so the customer books whoever confirms a slot first."],
    [{ text: "Recurring homes.", bold: true }, " Weekly or fortnightly cleaning. The customer is choosing someone to have in their home for months, so they compare more and decide more slowly."],
    [{ text: "Commercial contracts.", bold: true }, " Offices, clinics, shops. A walk-through, a written scope, and often more than one person who has to say yes."],
  ] },
  { kind: "h3", text: "Sort them with two questions" },
  { kind: "p", text: "Ask \"What kind of clean, and by when?\" and \"How big is the place?\" on your form and in your first text. The answers decide the track before anyone calls back: confirm a slot, book an estimate visit, or arrange a walk-through. Asking for a few photos of the kitchen and bathrooms also helps you quote a one-off job without a visit." },

  { kind: "h2", text: "Reply before they call the next one" },
  { kind: "p", text: [
    "The person with a move-out on Friday is not going to wait until Tuesday for a reply. The general case for answering quickly is in ",
    { text: "speed to lead for installers", href: "/speed-to-lead/" },
    ", and it applies to cleaning without changes: when a date is fixed, the first company that offers a slot usually gets the job.",
  ] },
  { kind: "p", text: "The first reply doesn't have to come from a person. It has to arrive quickly, show that someone read the request, and give the customer a next step they can say yes to." },
  { kind: "aside", text: "Hi Jess, it's Ana from Fresh Start Cleaning. Thanks for the details. For a two-bed move-out we can do Thursday from 9am or Friday from 8am. Could you send a couple of photos of the kitchen and bathroom so we can confirm the price?" },
  { kind: "p", text: "Offer two slots instead of asking when suits them, and don't promise a price before you know the size and state of the place. A price you have to raise on the day does more damage than a reply that arrives an hour later." },
  { kind: "h3", text: "Missed calls during a job" },
  { kind: "p", text: [
    "Cleaners can't answer the phone with gloves on or a vacuum running. A text sent automatically after every missed call, set up as described in ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    ", means the caller hears from the business within a minute and can say what they need. Someone still has to read the reply and act on it, so promise a callback time you can keep, such as \"by 2pm today\", not \"right away\".",
  ] },
  { kind: "h3", text: "Requests in the evening" },
  { kind: "p", text: "Most people look for a cleaner when they're at home and looking at the mess, which means evenings and weekends. If nobody works the office then, the automatic reply should say when a person will pick it up and, for one-off jobs, offer the first available slots straight away." },

  { kind: "h2", text: "Follow up on the estimate" },
  { kind: "p", text: "Recurring and commercial estimates are where follow-up usually stops after one email. The customer isn't ignoring you. They're waiting for other estimates, checking with a partner or a manager, or deciding whether they can afford it every week." },
  { kind: "p", text: [
    "That waiting is what consumer advice tells them to do. Consumers' Checkbook's guide on ",
    { text: "how to find a good housecleaning service", href: "https://www.checkbook.org/chicago-area/housecleaners/articles/How-to-Find-a-Good-Housecleaning-Service-2756" },
    " reports that differences of $50 per visit for weekly cleaning are common and tells readers to get three or more estimates. So a homeowner who goes quiet after your estimate is usually comparing, not refusing.",
  ] },
  { kind: "h3", text: "A sequence with a reason for each message" },
  { kind: "p", text: [
    "Plan three or four follow-ups over two to three weeks, each with something useful to say. The full method is in ",
    { text: "quote follow up for installers", href: "/quote-follow-up/" },
    ". For cleaning estimates, these reasons work:",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "Day 1: the scope.", bold: true }, " A short message going through what the price covers: which rooms, which tasks, how often, and what is extra (inside the oven, inside the fridge, windows)."],
    [{ text: "Day 4 or 5: the questions they were told to ask.", bold: true }, " Proof of insurance and the written scope. More on this below."],
    [{ text: "Day 10 to 14: a direct question.", bold: true }, " Ask whether they've decided, and accept the answer either way."],
  ] },
  { kind: "p", text: "For commercial estimates, stretch the gaps and add one step: ask who else needs to see the proposal and offer to send them a one-page summary. A quote that only the office manager has read is not going to be approved." },
  { kind: "aside", tone: "tip", text: "Whoever does the estimate visit should agree a time for a short follow-up call before leaving, and log it in the CRM as a task. The estimate then never sits in an inbox with no next step." },

  { kind: "h2", text: "Send what they were told to ask for" },
  { kind: "p", text: [
    "The same Checkbook guide tells readers to ask any cleaning company for proof that it carries both general liability and workers' compensation insurance. It also says that a company advertising itself as bonded is not, on its own, protection for the customer, and suggests asking companies to inspect the home and put the work and the price in writing to avoid disputes. Those are the questions a careful customer is about to ask you. A follow-up that answers them before they're asked is useful, not pushy.",
  ] },
  { kind: "aside", text: "Hi Laura, it's Ana from Fresh Start. Attached are our certificates for general liability and workers' compensation insurance, and the written scope for your weekly clean, room by room. If anything on it doesn't match what we discussed, tell me and I'll correct it." },
  { kind: "p", text: "Keep the certificates and a scope template ready in your CRM, so sending them takes one click. If you don't carry workers' compensation insurance, don't hide it in a follow-up: say what cover you do have, because the customer will find out when they ask." },
  { kind: "h3", text: "Don't discount to close" },
  { kind: "p", text: "When an estimate goes quiet, a price cut is the obvious move. For recurring cleaning it's an expensive one: a discount to win the first month usually becomes the price for the whole relationship. Clear answers about cover and scope give the customer a reason to choose you that doesn't cost you every week." },

  { kind: "h2", text: "Turn a first clean into a regular" },
  { kind: "p", text: "Many recurring clients start with a single deep clean, and many one-off customers would book again if someone asked at the right moment. That moment is the day after the first clean, while the house still looks the way it did when your team left." },
  { kind: "list", ordered: true, items: [
    [{ text: "The next day: a check.", bold: true }, " Ask if everything was as expected and whether anything was missed. Fix complaints before anything else."],
    [{ text: "Two or three days later: the offer.", bold: true }, " If they were happy, offer a weekly or fortnightly slot, with the day and time you can actually keep."],
    [{ text: "After a good reply: the review request.", bold: true }, " Only ask once you know the customer was happy, and make it one tap."],
  ] },
  { kind: "p", text: "Illustration: if a business does 30 one-off cleans a month and sends these three messages after each one, that's 90 short messages a month. Written once and triggered when a job is marked complete, nobody has to remember any of them." },

  { kind: "h2", text: "What to automate, and what not" },
  { kind: "p", text: [
    "Everything above can be a set of rules rather than a list someone has to remember. A ",
    { text: "cleaning business CRM", href: "/cleaning-business-crm/" },
    " can run it from the moment a quote request arrives until the customer replies, and stop as soon as they do.",
  ] },
  { kind: "list", items: [
    [{ text: "Automate:", bold: true }, " the first reply to forms and missed calls, slot offers for one-off jobs, estimate visit confirmations and reminders, the estimate sequence, the post-clean check, the recurring offer and the review request."],
    [{ text: "Keep human:", bold: true }, " pricing a job from photos or a visit, the scope conversation, commercial proposals, anything about damage or a breakage, and any complaint."],
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every cleaning business. Insurance requirements and rules on texting customers differ by state, and the right setup depends on how many leads you get and who answers them." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How fast should a cleaning business reply to a lead?" },
  { kind: "p", text: "For one-off jobs with a date, within minutes, even if the first reply is automatic and only offers two slots. For recurring and commercial estimates, the same day. Speed matters most when the customer is contacting several companies at once." },
  { kind: "h3", text: "How many times should I follow up on a cleaning estimate?" },
  { kind: "p", text: "Three or four times over two to three weeks, each with a reason: the scope, proof of insurance and the written scope, then a direct question about whether they've decided. Stop when they say no." },
  { kind: "h3", text: "Should I put a price in the first reply?" },
  { kind: "p", text: "Only if you can keep it. A range for a standard home is fine if your form asks for size and the kind of clean. For deep, move-out and commercial jobs, ask for photos or book a visit first." },
  { kind: "h3", text: "Will automated follow-up sound robotic?" },
  { kind: "p", text: [
    "Not if each message is short, uses the customer's name and their job, and stops when they reply. Write them the way your best team lead would text a customer. If you'd like this set up for your cleaning business, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const cleaningBusinessLeadFollow: Post = {
  slug: "cleaning-business-lead-follow-up",
  title: "Cleaning Business Lead Follow Up: Estimates to Regulars",
  description: "How cleaning businesses can follow up on leads: minutes for move-out jobs, a steady sequence for estimates, and first cleans turned into regular clients.",
  lede: "Dated jobs need minutes. Estimates need answers. First cleans need a second ask.",
  category: "Lead Generation",
  published: "2026-11-17",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/cleaning-business-lead-follow-up.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
