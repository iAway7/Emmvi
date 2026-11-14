import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "cleaning business crm". Sin cifras de terceros: no se cita ninguna.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's Sunday, 9:12pm. A tenant moving out on Friday needs the apartment cleaned before the final inspection, or the deposit is at risk. She fills in the form on three cleaning company websites and goes to bed. The first company to reply with a clear next step on Monday morning usually gets the job. If your form lands in an inbox that someone checks around lunchtime, it won't be you." },
  { kind: "p", text: "A cleaning business lives on two kinds of work. One-off jobs (move-out, deep cleans, post-construction) arrive fast and are decided fast. Recurring clients, weekly, every two weeks or monthly, are the steady part of the calendar, and they rarely leave with a phone call. They just stop rebooking. A CRM is the tool that keeps both in view. This article covers what a cleaning business CRM should track, where work slips, which stages fit, what to automate and how to choose one." },

  { kind: "h2", text: "What a cleaning business CRM tracks" },
  { kind: "p", text: "A CRM (customer relationship management system) keeps one record per client and per address, with every call, form, text, email and note attached, plus what happened last and what should happen next. Many cleaning apps also handle scheduling, staff assignments and invoicing. This article is about the front part: the quote request, the price, the first booking and the rebooking, which is where work gets lost." },
  { kind: "p", text: "A simple test is whether you can answer these four questions from your phone in a minute:" },
  { kind: "list", items: [
    [{ text: "Who is waiting for a reply?", bold: true }, " Every form, call, voicemail and message that hasn't had an answer from a person yet."],
    [{ text: "Which quotes are out with no answer?", bold: true }, " Deep cleans, move-outs and office contracts: priced, sent and still open."],
    [{ text: "Which recurring clients have gone quiet?", bold: true }, " Skipped visits, no rebooking, a card that failed, no reply to the last reminder."],
    [{ text: "Where do booked clients come from?", bold: true }, " Referrals, the website, ads, a local directory, a neighbor. Booked work, not just messages."],
  ] },
  { kind: "p", text: "If the system can't answer those, it's an address book with a monthly fee." },

  { kind: "h2", text: "Where cleaning jobs get lost" },
  { kind: "h3", text: "Quote requests in the evening" },
  { kind: "p", text: [
    "Most people look for a cleaner after work or at the weekend, which is exactly when nobody is in the office. A move-out client with a deadline contacts several companies and books whoever answers first with something useful. You don't need someone awake at night, but you do need a reply within minutes that says what happens next. How to set up that first answer is in ",
    { text: "speed to lead", href: "/speed-to-lead/" },
    ".",
  ] },
  { kind: "h3", text: "Calls while the crew is working" },
  { kind: "p", text: "Owners of smaller cleaning businesses are often on a job themselves, gloves on, vacuum running. A call that goes to voicemail is usually followed by a call to the next company on the list. An automatic text after a missed call keeps the conversation open until someone can ring back." },
  { kind: "h3", text: "Quotes nobody chases" },
  { kind: "p", text: [
    "Office contracts and large deep cleans need a decision from someone else: a landlord, a partner, a facilities manager. The quote goes out, the client says they'll check, and nothing happens. Most of those aren't a no. They're a maybe nobody asked about again. A short sequence of check-ins fixes most of it, and ",
    { text: "quote follow-up", href: "/quote-follow-up/" },
    " shows what to send and when.",
  ] },
  { kind: "h3", text: "Recurring clients who drift" },
  { kind: "p", text: "A client on a two-week schedule cancels one visit because of a holiday. Nobody rebooks it. A month later they've found someone cheaper, or decided to clean themselves. Without a list of who skipped, who didn't rebook and who stopped replying, nobody notices until the slot has been empty for weeks." },

  { kind: "h2", text: "Pipeline stages that fit" },
  { kind: "p", text: "A pipeline is the list of stages a job moves through. Name each stage after something that happened, so anyone can see where a client really is. Most cleaning businesses do better with two short pipelines than one long one." },
  { kind: "h3", text: "New clients and one-off jobs" },
  { kind: "list", ordered: true, items: [
    [{ text: "New request:", bold: true }, " a form, call, text or referral has arrived. Nobody has spoken to them yet."],
    [{ text: "Quote sent:", bold: true }, " the price is with the client, from photos, a call or a walkthrough. This is where office and deep-clean jobs stall."],
    [{ text: "Booked:", bold: true }, " date, time and access confirmed (keys, door code, pets, parking)."],
    [{ text: "Completed:", bold: true }, " the clean is done. The trigger for the check-in, the review request and the offer of a regular schedule."],
  ] },
  { kind: "h3", text: "Recurring clients" },
  { kind: "list", ordered: true, items: [
    [{ text: "Active:", bold: true }, " on a schedule, visits happening, payments working."],
    [{ text: "Skipped:", bold: true }, " one visit cancelled or missed. Rebook it now, not next month."],
    [{ text: "At risk:", bold: true }, " two skips in a row, a failed payment, a complaint, or no reply to the last two messages."],
    [{ text: "Paused or lost:", bold: true }, " with a short reason: price, moved, quality, doing it themselves."],
  ] },
  { kind: "p", text: "After a few months, those lost reasons show whether the weak point is your prices, your follow-up or the work itself. That's more useful than a guess." },
  { kind: "aside", tone: "tip", text: "Whenever a recurring client cancels a visit, have the system ask in the same message when they'd like the next one. \"No problem, we've cancelled Thursday. Shall we keep the 28th as usual?\" turns a skip into a rebooking before it becomes a gap." },

  { kind: "h2", text: "What to automate, and what not" },
  { kind: "p", text: "Automation is good at the small, repetitive messages people forget on a busy week. It's bad at anything that needs judgment. A reasonable split:" },
  { kind: "h3", text: "Worth automating" },
  { kind: "list", items: [
    [{ text: "The first reply.", bold: true }, " A text within a minute of any form, call or message, saying you got it and when they'll hear about the price. It can't quote a job it hasn't seen, and it shouldn't pretend to."],
    [
      { text: "Visit reminders.", bold: true },
      " The day before, with access details and an easy way to reschedule. Wording ideas are in ",
      { text: "appointment reminder texts", href: "/appointment-reminder-text/" },
      ".",
    ],
    [{ text: "Quote follow-up.", bold: true }, " Three short check-ins over two weeks, stopping the moment the client replies."],
    [{ text: "Schedule offers after a one-off clean.", bold: true }, " A message a few days later, asking how it went and offering a regular slot."],
    [
      { text: "Review requests.", bold: true },
      " A text with your review link once a clean is marked completed. More on timing and wording in ",
      { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" },
      ".",
    ],
  ] },
  { kind: "p", text: "This is what a first reply can look like for the Sunday evening move-out request:" },
  { kind: "aside", text: "Hi Dana, thanks for your request for a move-out clean on Friday. We've got it. We'll send you a price by 10am tomorrow. If you can reply with a few photos of the kitchen and bathroom, we can make it exact." },
  { kind: "h3", text: "Keep a person on these" },
  { kind: "list", items: [
    [{ text: "Pricing.", bold: true }, " Square footage, condition and extras change the price. Someone who has seen photos or the property should set it."],
    [{ text: "Complaints.", bold: true }, " A missed room or a broken vase needs a call the same day, not a sequence."],
    [{ text: "At-risk regulars.", bold: true }, " The system can flag them. A person should call."],
  ] },
  { kind: "p", text: "Illustration: if a business has 80 recurring clients and checks the \"Skipped\" and \"At risk\" stages every Monday, the list might be a handful of names. That's a short morning task. The value isn't the number, it's that the list exists while the client can still be kept." },

  { kind: "h2", text: "How to choose one" },
  { kind: "p", text: "There is cleaning software built around scheduling, staff and invoicing, and there are general CRMs that handle leads and follow-up well but know nothing about cleaning routes. Some businesses use one; some use both, connected. A few questions narrow it down:" },
  { kind: "list", ordered: true, items: [
    [{ text: "Does every channel land in one place?", bold: true }, " Forms, calls, texts, website chat and social messages, on one client record."],
    [{ text: "Can it reply by text in under a minute, any time?", bold: true }, " Without someone pressing send."],
    [{ text: "Can it show recurring clients who skipped or didn't rebook?", bold: true }, " As a list you can act on, not a report you have to build."],
    [{ text: "Does it record where each booked client came from?", bold: true }, " So you know which ads and referral sources are worth paying for."],
    [{ text: "Will you and your cleaners actually use it?", bold: true }, " Try it on a phone, between two jobs, before you commit."],
  ] },
  { kind: "p", text: "If your scheduling app already works well, you don't have to replace it. The gap is often only the front end: the first reply, the quote follow-up and the rebooking messages. That part can sit in a separate system that passes booked jobs across." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. Which software fits depends on your size, your services and the tools you already use. Rules on texting clients and on consent vary by state and country, so check the ones that apply to you before you automate any message." },
  { kind: "p", text: [
    "If you'd rather have the replies, follow-up and rebooking set up for you, you can ",
    { text: "tell us how bookings work today", href: "/contact-us/" },
    ".",
  ] },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Do I need a CRM if I already use cleaning scheduling software?" },
  { kind: "p", text: "Not always. If your current software replies to new requests quickly, tracks open quotes and shows which regulars have gone quiet, it already does the CRM job. If requests sit in an inbox and quotes are chased from memory, that front part is missing." },
  { kind: "h3", text: "Should the automatic reply include a price?" },
  { kind: "p", text: "Usually not. It should confirm you got the request, say when the price will arrive and ask for anything you need to set it, like photos or square footage. A wrong price sent in a hurry causes more trouble than a short wait." },
  { kind: "h3", text: "How many follow-ups should a cleaning quote get?" },
  { kind: "p", text: "Three short messages over about two weeks is a reasonable start. Stop as soon as the client replies, and hand the conversation to a person." },
  { kind: "h3", text: "How do I keep recurring clients from leaving?" },
  { kind: "p", text: "Rebook every skipped visit straight away, check in after the first few cleans, and call anyone who skips twice or misses a payment. Most cancellations are quiet. The CRM's job is to make them visible early." },
];

export const cleaningBusinessCrm: Post = {
  slug: "cleaning-business-crm",
  title: "Cleaning Business CRM: Quotes, Regulars and Rebooking",
  description:
    "What a cleaning business CRM should track: evening quote requests, unanswered quotes, regulars who stop rebooking, and what to automate or keep personal.",
  lede: "Quote requests, open quotes and regular clients, tracked so none slip away.",
  category: "CRM",
  published: "2026-11-14",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/cleaning-business-crm.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
