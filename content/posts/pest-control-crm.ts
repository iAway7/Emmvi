import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "pest control crm". Sin cifras de terceros: no se cita ninguna.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's 8:40pm in July. A homeowner has just seen a wasp nest the size of a football under the deck, and their kids play out there tomorrow. They fill in the form on your website, then call two other companies. Your technician is still finishing a late route, the office closed at five, and the form lands in an inbox nobody opens until morning. By 8am the homeowner has a booking with someone else." },
  { kind: "p", text: "Pest control has two kinds of customer, and both are easy to lose. The urgent one wants an answer tonight. The recurring one, on a quarterly or monthly plan, is worth far more over the years but leaves quietly when nobody checks in. A CRM is the tool that keeps both in view. This article covers what a pest control CRM should track, where jobs slip, which pipeline stages fit, what to automate and how to choose one." },

  { kind: "h2", text: "What a pest control CRM tracks" },
  { kind: "p", text: "A CRM (customer relationship management system) keeps one record per customer and per property, with every call, form, text, email, photo and note attached, plus what happened last and what should happen next. Most pest control software also handles routing, chemical logs and invoicing. This article is about the front part: the request, the quote, the plan and the renewal, which is where work gets lost." },
  { kind: "p", text: "A useful test is whether you can answer these four questions from your phone in a minute:" },
  { kind: "list", items: [
    [{ text: "Who is waiting for a reply?", bold: true }, " Every form, call, voicemail and text that hasn't had an answer from a person yet."],
    [{ text: "Which inspections turned into a quote with no answer?", bold: true }, " Termite, rodent exclusion, bed bug treatments: priced, sent and still open."],
    [{ text: "Which plan customers are due, late or quiet?", bold: true }, " Quarterly services coming up, skipped visits, cards that failed, people who stopped replying."],
    [{ text: "Where do signed plans come from?", bold: true }, " Referrals, the website, ads, door hangers, a neighbor. Signed work, not just calls."],
  ] },
  { kind: "p", text: "If the system can't answer those, it's a contact list with a monthly fee." },

  { kind: "h2", text: "Where pest control jobs get lost" },
  { kind: "h3", text: "Urgent requests after hours" },
  { kind: "p", text: [
    "Wasps, mice in the kitchen, a bed bug discovery: these are requests where the customer is upset and wants someone now. They often contact several companies at once, and the first clear answer tends to win the visit. You don't need someone awake all night to cover this, but you do need a reply within minutes that says what happens next. How to set up that first answer is in ",
    { text: "speed to lead", href: "/speed-to-lead/" },
    ".",
  ] },
  { kind: "h3", text: "Calls during a treatment" },
  { kind: "p", text: [
    "A technician in a crawl space or wearing a respirator should not be answering the phone. A missed call that gets no response usually turns into a call to the next company on the search results. A short automatic text keeps the conversation open until someone can call back. The setup is in ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    ".",
  ] },
  { kind: "h3", text: "Inspection quotes nobody chases" },
  { kind: "p", text: [
    "Termite treatments and exclusion work are bigger decisions. The homeowner wants a second price, or to talk it over, or to wait for payday. Most of those quotes are not a no. They are a maybe that nobody asked about again. A short sequence of check-ins fixes most of it, and ",
    { text: "quote follow-up", href: "/quote-follow-up/" },
    " shows what to send and when.",
  ] },
  { kind: "h3", text: "Plan customers who drift away" },
  { kind: "p", text: "Recurring customers rarely call to cancel. They miss a visit because nobody confirmed it, then ignore the next reminder, then a door-to-door salesperson offers a lower price. Without a list of who skipped, who failed to pay and who hasn't replied, nobody calls them until the account is already gone." },

  { kind: "h2", text: "Pipeline stages that fit" },
  { kind: "p", text: "A pipeline is the list of stages a job moves through. Name each stage after something that happened, so anyone in the office can see where a job really is. For most pest control companies, two pipelines work better than one." },
  { kind: "h3", text: "One-off and inspection jobs" },
  { kind: "list", ordered: true, items: [
    [{ text: "New request:", bold: true }, " a form, call, text or referral has arrived. Nobody has spoken to them yet."],
    [{ text: "Inspection booked:", bold: true }, " a visit is in the calendar and confirmed with the customer."],
    [{ text: "Quote sent:", bold: true }, " the price is with the customer. This is where termite and exclusion jobs stall."],
    [{ text: "Won:", bold: true }, " accepted, treatment date set."],
    [{ text: "Completed:", bold: true }, " treatment done. The trigger for the follow-up visit, the review request and the offer of a plan."],
  ] },
  { kind: "h3", text: "Recurring plans" },
  { kind: "list", ordered: true, items: [
    [{ text: "Plan offered:", bold: true }, " after a one-off job or an inspection, a quarterly or monthly plan has been proposed."],
    [{ text: "Active:", bold: true }, " on a schedule, payments working."],
    [{ text: "At risk:", bold: true }, " a skipped visit, a failed payment or no reply to the last two reminders."],
    [{ text: "Renewal due:", bold: true }, " the agreement is up. Ask before they shop around."],
  ] },
  { kind: "p", text: "Add a \"Lost\" outcome with a short reason: price, timing, chose someone else, moved, no reply. After a few months those reasons tell you whether your prices, your speed or your follow-up is the weak point." },
  { kind: "aside", tone: "tip", text: "Make \"At risk\" a stage someone owns, not a feeling. A filter for \"skipped visit or failed payment in the last 30 days\" gives the office a short call list every Monday, before the customer has decided to leave." },

  { kind: "h2", text: "What to automate, and what not" },
  { kind: "p", text: "Automation is good at the small, repetitive messages that people forget when the season is busy. It is bad at anything that needs judgment. A reasonable split:" },
  { kind: "h3", text: "Worth automating" },
  { kind: "list", items: [
    [{ text: "The first reply.", bold: true }, " A text within a minute of any form, call or message, saying you got it and what happens next. It can't diagnose the problem, and it shouldn't pretend to."],
    [{ text: "Visit reminders.", bold: true }, " The day before, with preparation notes (pets inside, access to the garage) and a way to reschedule."],
    [{ text: "Quote follow-up.", bold: true }, " Three short check-ins over two or three weeks, stopping the moment the customer replies."],
    [{ text: "Plan offers after a one-off job.", bold: true }, " A message a few days after the treatment, asking how it went and explaining the recurring option."],
    [
      { text: "Review requests.", bold: true },
      " A text with your review link after a job is marked completed. More on timing and wording in ",
      { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" },
      ".",
    ],
  ] },
  { kind: "p", text: "This is what a first reply can look like for an evening wasp request:" },
  { kind: "aside", text: "Hi Laura, thanks for getting in touch about the wasp nest. We've got your request. We'll call you before 9am tomorrow to book a visit. Until then, keep children and pets away from the deck and don't try to remove the nest yourself." },
  { kind: "h3", text: "Keep a person on these" },
  { kind: "list", items: [
    [{ text: "Pricing and diagnosis.", bold: true }, " What the problem is and what it costs to fix needs someone who has seen the property or the photos."],
    [{ text: "Unhappy customers.", bold: true }, " Pests that came back after a treatment need a phone call, not a sequence."],
    [{ text: "At-risk plan customers.", bold: true }, " The system can flag them. A person should call."],
  ] },
  { kind: "p", text: "Illustration: if an office has 200 plan customers and checks the \"At risk\" filter every Monday, a typical list might be five to ten names. That is a half-hour job. The point is not the number, it's that the list exists before the customer has already signed with someone else." },

  { kind: "h2", text: "How to choose one" },
  { kind: "p", text: "Pest control has dedicated software built around routes, chemical records and recurring billing, and there are general CRMs that handle leads and follow-up well but know nothing about treatments. Some companies use one; some use both, connected. A few questions narrow it down:" },
  { kind: "list", ordered: true, items: [
    [{ text: "Does every channel land in one place?", bold: true }, " Forms, calls, texts, website chat and social messages, on one customer record."],
    [{ text: "Can it reply by text in under a minute, any time?", bold: true }, " Without someone pressing send."],
    [{ text: "Can it track recurring plans and flag the quiet ones?", bold: true }, " Skipped visits and failed payments should be visible, not buried in a billing report."],
    [{ text: "Does it record where each signed job came from?", bold: true }, " So you know which ads and referral sources are worth paying for."],
    [{ text: "Will your technicians and office actually use it?", bold: true }, " Test it on a phone, with gloves off, at the end of a long day."],
  ] },
  { kind: "p", text: "If your field software already handles routes and treatment records well, you don't have to replace it. The gap is often only the front end: the first reply, the quote follow-up and the plan check-ins. That part can sit in a separate system that passes won jobs across." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. Which software fits depends on your size, your services and the tools you already use. Rules on texting customers, consent and record-keeping for treatments vary by state and country, so check the ones that apply to you before you automate any message." },
  { kind: "p", text: [
    "If you'd rather have the replies, follow-up and plan reminders set up for you, you can ",
    { text: "tell us how your office works today", href: "/contact-us/" },
    ".",
  ] },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Do I need a CRM if I already use pest control software?" },
  { kind: "p", text: "Not always. If your current software answers new requests quickly, tracks quotes and flags quiet plan customers, it already does the CRM job. If requests sit in an inbox and quotes are chased from memory, that front part is missing, whatever the rest of the software does." },
  { kind: "h3", text: "What should an automatic reply say to an urgent request?" },
  { kind: "p", text: "That you received it, when a person will contact them, and one safe thing they can do in the meantime. It should not promise a price, a diagnosis or a time you can't keep." },
  { kind: "h3", text: "How many follow-ups should a quote get?" },
  { kind: "p", text: "Three short messages over two or three weeks is a reasonable start. Stop the sequence as soon as the customer replies, and hand the conversation to a person." },
  { kind: "h3", text: "How do I keep recurring customers from leaving?" },
  { kind: "p", text: "Confirm every visit the day before, check in after each service, and call anyone who skips a visit or misses a payment. Most cancellations are quiet. The CRM's job is to make them visible early." },
];

export const pestControlCrm: Post = {
  slug: "pest-control-crm",
  title: "Pest Control CRM: Urgent Calls, Quotes and Plans",
  description:
    "What a pest control CRM should track: urgent requests after hours, inspection quotes, recurring plans at risk, and what to automate or leave to a person.",
  lede: "Urgent requests, inspection quotes and quarterly plans, tracked so none slip.",
  category: "CRM",
  published: "2026-11-12",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/pest-control-crm.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
