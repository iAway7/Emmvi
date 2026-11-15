import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "pool service crm". Sin cifras de terceros: no se cita ninguna.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's Saturday, 6:40pm. A homeowner has guests coming on Wednesday and the pool has turned green. She calls two pool companies. Both are out on the route, so both calls go to voicemail. She leaves one message, sends a form to a third company and books whoever gets back to her first with a time. That decision is usually made before Monday morning." },
  { kind: "p", text: "A pool service business runs on two kinds of work. The route is steady: weekly or every-two-weeks visits, chemicals, baskets, filters. Around it come the one-off jobs: green pool cleanups, pump and heater repairs, equipment upgrades, and in colder states the spring openings and fall closings. The route keeps the calendar full. The one-off jobs are where most new customers come from, and where most of them get lost. This article covers what a pool service CRM should track, where work slips, which stages fit, what to automate and how to choose one." },

  { kind: "h2", text: "What a pool service CRM tracks" },
  { kind: "p", text: "A CRM (customer relationship management system) keeps one record per customer and per pool, with every call, form, text, email and note attached, plus what happened last and what should happen next. Most pool service software also handles routes, chemical readings and invoicing. This article is about the front part: the new request, the repair quote, the first visit and the customer who quietly stops, because that's where the money leaks." },
  { kind: "p", text: "A simple test is whether you can answer these four questions from your phone, standing next to a pool, in under a minute:" },
  { kind: "list", items: [
    [{ text: "Who is waiting for a reply?", bold: true }, " Every call, voicemail, form and text that hasn't had an answer from a person yet."],
    [{ text: "Which repair quotes are still open?", bold: true }, " Pumps, heaters, filters, automation: priced, sent and not yet accepted or declined."],
    [{ text: "Which route customers have gone quiet?", bold: true }, " Skipped visits, a failed card, a complaint about cloudy water, no reply to the last message."],
    [{ text: "Where do new route customers come from?", bold: true }, " Referrals, the website, ads, a neighbor who saw the truck. Signed customers, not just calls."],
  ] },
  { kind: "p", text: "If the system can't answer those, it's a contact list with a monthly fee." },

  { kind: "h2", text: "Where pool jobs get lost" },
  { kind: "h3", text: "Calls on the route" },
  { kind: "p", text: [
    "A technician with a brush in one hand and a test kit in the other doesn't answer the phone, and shouldn't. But the caller doesn't know that. To them it rang out, so they call the next company. An automatic text sent the moment a call is missed keeps the conversation open until someone can ring back. How that works, and what it can't do, is in ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    ".",
  ] },
  { kind: "h3", text: "Green pool requests at the weekend" },
  { kind: "p", text: "Green pool cleanups are urgent by nature: a party, a house sale, a rental guest arriving. These requests come in evenings and weekends, when the office is closed. You don't need someone on call, but you do need a reply within minutes that says what happens next and asks for a photo of the water. That photo also helps you price the job before anyone drives out." },
  { kind: "h3", text: "Repair quotes nobody chases" },
  { kind: "p", text: [
    "The technician notices a noisy pump on Tuesday and mentions it. The office sends a price on Thursday. The customer says they'll think about it, and nothing happens until the pump fails in July and they call whoever answers. Most of those quotes aren't a no. They're a maybe nobody asked about again. Three short check-ins usually settle them, and ",
    { text: "quote follow-up", href: "/quote-follow-up/" },
    " covers what to send and when.",
  ] },
  { kind: "h3", text: "Openings and closings that are never booked" },
  { kind: "p", text: [
    "In colder states, last year's opening customers are next year's easiest work, if someone contacts them before they search again. Without a list of who opened with you last spring, that outreach depends on memory. The same list is useful in the fall for closings. Messages to past customers are covered in more detail in ",
    { text: "reactivating old leads", href: "/reactivate-old-leads/" },
    ".",
  ] },

  { kind: "h2", text: "Pipeline stages that fit" },
  { kind: "p", text: "A pipeline is the list of stages a job moves through. Name each stage after something that happened, so anyone looking can tell where a customer really is. Most pool businesses do better with two short pipelines than one long one." },
  { kind: "h3", text: "New customers, repairs and one-off jobs" },
  { kind: "list", ordered: true, items: [
    [{ text: "New request:", bold: true }, " a call, form, text or referral has arrived. Nobody has spoken to them yet."],
    [{ text: "Quote sent:", bold: true }, " the price for the cleanup, repair or route is with the customer. This is where repairs stall."],
    [{ text: "Scheduled:", bold: true }, " date confirmed, with gate code, dog, equipment location and anything else the technician needs."],
    [{ text: "Completed:", bold: true }, " the job is done. The trigger for the check-in, the review request and the offer of a regular route visit."],
  ] },
  { kind: "h3", text: "Route customers" },
  { kind: "list", ordered: true, items: [
    [{ text: "Active:", bold: true }, " on the route, visits happening, payments working."],
    [{ text: "Needs attention:", bold: true }, " a complaint, a failed payment, a skipped visit or a repair recommended and not answered."],
    [{ text: "At risk:", bold: true }, " two of those in a row, or no reply to the last two messages."],
    [{ text: "Paused or lost:", bold: true }, " with a short reason: price, moved, closed for the season, doing it themselves, went to a competitor."],
  ] },
  { kind: "p", text: "After a season, those lost reasons tell you whether the weak spot is price, communication or the water itself. That's more useful than a hunch." },
  { kind: "aside", tone: "tip", text: "Have the technician log a repair recommendation on the spot, from the phone, with a photo. The CRM can then create the quote task for the office and start the follow-up, instead of the note living in someone's head until Thursday." },

  { kind: "h2", text: "What to automate, and what not" },
  { kind: "p", text: "Automation is good at the small, repetitive messages people forget in a busy week. It's bad at anything that needs judgment. A reasonable split:" },
  { kind: "h3", text: "Worth automating" },
  { kind: "list", items: [
    [{ text: "The first reply.", bold: true }, " A text within a minute of any missed call, form or message, saying you got it and when you'll be in touch. It can't price a green pool it hasn't seen, and it shouldn't try."],
    [{ text: "Visit notices.", bold: true }, " A short text the day before a first visit or a repair, with a reminder to unlock the gate or keep the dog inside."],
    [{ text: "Repair quote follow-up.", bold: true }, " Three check-ins over two weeks, stopping the moment the customer replies."],
    [{ text: "Season messages.", bold: true }, " Opening and closing reminders to last year's customers, sent before the rush, with a simple way to pick a date."],
    [
      { text: "Review requests.", bold: true },
      " A text with your review link when a cleanup or repair is marked completed. Timing and wording are in ",
      { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" },
      ".",
    ],
  ] },
  { kind: "p", text: "This is what the first reply to the Saturday evening voicemail could look like:" },
  { kind: "aside", text: "Hi Laura, sorry we missed your call, we're out on the route. We can help with the green pool. Could you reply with a photo of the water and the equipment pad? We'll call you by 9am Monday with a price and the first available time." },
  { kind: "h3", text: "Keep a person on these" },
  { kind: "list", items: [
    [{ text: "Pricing.", bold: true }, " Pool size, condition and equipment change the price. Someone who has seen the photos should set it."],
    [{ text: "Water and safety problems.", bold: true }, " Anything about chemicals, electrical equipment or a customer who feels unwell needs a call, not a sequence."],
    [{ text: "Unhappy route customers.", bold: true }, " The system can flag them. A person should call them the same day."],
  ] },
  { kind: "p", text: "Illustration: if a business has 120 route customers and checks the \"Needs attention\" stage every Monday morning, the list may only be a few names. That's a short task. The value isn't the size of the list, it's that it exists while those customers can still be kept." },

  { kind: "h2", text: "How to choose one" },
  { kind: "p", text: "There is pool service software built around routes, chemical logs and invoicing, and there are general CRMs that are strong on replies and follow-up but know nothing about routes. Some businesses use one, some connect both. A few questions narrow it down:" },
  { kind: "list", ordered: true, items: [
    [{ text: "Does every channel land in one place?", bold: true }, " Calls, forms, texts, website chat and social messages, on one customer record."],
    [{ text: "Can it text back a missed call in under a minute?", bold: true }, " Including evenings and weekends, without anyone pressing send."],
    [{ text: "Can technicians log a repair from the pool?", bold: true }, " On a phone, with a photo, in a few taps."],
    [{ text: "Can it show route customers who need attention?", bold: true }, " As a list you can act on, not a report you have to build."],
    [{ text: "Does it record where each new customer came from?", bold: true }, " So you know which ads and referral sources pay for themselves."],
  ] },
  { kind: "p", text: "If your route software already works well, you don't have to replace it. The gap is often only the front end: the first reply, the repair follow-up and the season messages. That part can live in a separate system that passes signed customers across." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. Which software fits depends on your size, your services and the tools you already use. Rules on texting customers and on consent vary by state and country, so check the ones that apply to you before you automate any message." },
  { kind: "p", text: [
    "If you'd rather have the replies, follow-up and season messages set up for you, you can ",
    { text: "tell us how requests reach you today", href: "/contact-us/" },
    ".",
  ] },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Do I need a CRM if I already use pool route software?" },
  { kind: "p", text: "Not always. If your route software answers new requests quickly, tracks open repair quotes and shows which customers have gone quiet, it already does the CRM job. If calls go to voicemail and quotes are chased from memory, that front part is missing." },
  { kind: "h3", text: "Should the automatic reply include a price?" },
  { kind: "p", text: "Usually not. It should confirm you got the request, say when the price will arrive and ask for what you need to set it, such as a photo of the water and the equipment. A wrong price sent in a hurry causes more trouble than a short wait." },
  { kind: "h3", text: "How many times should I follow up a repair quote?" },
  { kind: "p", text: "Three short messages over about two weeks is a reasonable start. Stop as soon as the customer replies, and hand the conversation to a person." },
  { kind: "h3", text: "When should I send opening reminders?" },
  { kind: "p", text: "Before your local rush, not during it. A few weeks before you expect the first calls is a sensible starting point. Adjust it each year to when requests actually started arriving the year before, which the CRM will show you." },
];

export const poolServiceCrm: Post = {
  slug: "pool-service-crm",
  title: "Pool Service CRM: Route Calls, Repairs and Openings",
  description:
    "What a pool service CRM should track: missed calls on the route, green pool requests, repair quotes nobody chases, and season openings worth booking.",
  lede: "Missed calls, repair quotes and route customers, tracked so none slip.",
  category: "CRM",
  published: "2026-11-15",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/pool-service-crm.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
