import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "remodeling lead follow up". La guia del DPOR de Virginia y la pagina de la
 * FTC sobre la Cooling-Off Rule se comprobaron el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's Sunday, 9:40pm. Priya has spent the evening looking at kitchen photos, and she fills in your quote request form: full kitchen, old cabinets out, an island if the floor allows it, budget \"not sure yet\". She fills in two other remodelers' forms in the same ten minutes. On Monday you are on site until five, and by the time you call her back on Tuesday, one of the others has already booked a visit for Wednesday." },
  { kind: "p", text: "Remodeling follow-up is longer than in most trades. A repair is a call and a visit. A kitchen or a bathroom is a first reply, a site visit, a design conversation, an estimate, a wait that can last weeks, a signature and then a few nervous days before work starts. Each step has a moment where the homeowner can drift to someone else. This article covers what to send at each one." },

  { kind: "h2", text: "Why remodeling leads go quiet" },
  { kind: "p", text: "Most remodeling leads are not lost to a better price. They are lost in the gaps between steps, when nothing is scheduled and nobody owns the next move." },
  { kind: "list", items: [
    [{ text: "Requests arrive when you're off.", bold: true }, " Homeowners plan renovations in the evening and at weekends. You reply on a weekday, after site work."],
    [{ text: "Homeowners are told to compare.", bold: true }, " Virginia's contractor licensing board, in its ", { text: "consumer guide to hiring a contractor", href: "https://www.dpor.virginia.gov/Consumers/Guide_Contractor" }, ", tells homeowners to \"Get written estimates from at least three contractors.\" Your estimate is one of several, by design."],
    [{ text: "The decision takes a long time.", bold: true }, " Financing, a partner who wasn't at the visit, a holiday, a second opinion. A quiet month is normal, not a no."],
    [{ text: "Nobody owns the next step.", bold: true }, " After the site visit, everyone assumes the other side will get in touch."],
  ] },
  { kind: "p", text: "The fix is not more effort on every lead. It is deciding in advance what happens after each step, and letting a system send the parts that don't need you." },

  { kind: "h2", text: "The first reply, within minutes" },
  { kind: "p", text: [
    "A homeowner who has just filled in three forms will usually talk to whoever answers first and sounds organized. The general case for replying in minutes is in ",
    { text: "speed to lead for installers", href: "/speed-to-lead/" },
    ". For remodelers, the first message has a specific job: get a site visit on the calendar, and set expectations about what happens there.",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "Name yourself and the project.", bold: true }, " \"Your kitchen request\" shows the message was written for her, not sent to a list."],
    [{ text: "Offer two visit times.", bold: true }, " A choice she can answer with one word gets a reply. \"Let us know when suits you\" usually doesn't."],
    [{ text: "Say how long the visit takes.", bold: true }, " Homeowners want to know whether to take time off work."],
  ] },
  { kind: "aside", text: "Hi Priya, it's Tom from Oakline Remodeling. Thanks for your kitchen request. We can come and measure Wednesday at 5pm or Saturday at 10am, about an hour. Reply 1 or 2, or call this number if neither works." },
  { kind: "p", text: "An automatic reply can send this the minute the form arrives, at 9:40pm on a Sunday, with times taken from your real calendar. It only works if those times are real and someone turns up." },

  { kind: "h2", text: "Before and after the site visit" },
  { kind: "p", text: "The site visit is where most remodeling jobs are won or lost, and two short messages around it do a lot of the work." },
  { kind: "h3", text: "The day before: confirm and prepare" },
  { kind: "p", text: "A reminder the day before cuts the chance of arriving to an empty house. Use it to ask for the things that make the visit useful: who will be there, a rough budget range, and photos of anything they've saved as inspiration. A homeowner who has thought about budget before you arrive makes the estimate conversation shorter and more honest." },
  { kind: "aside", text: "Hi Priya, a reminder that Tom will be at your place tomorrow at 5pm for the kitchen. If you have photos of kitchens you like, send them here. And if a second person is part of the decision, it helps if they can be there too." },
  { kind: "h3", text: "The same evening: a short recap" },
  { kind: "p", text: "After the visit, send a recap while the conversation is fresh: what you understood she wants, what you still need from her, and the date the estimate will arrive. That date is a promise. Pick one you can keep, and if it slips, say so before it passes, not after." },
  { kind: "aside", tone: "tip", text: "Write the estimate date into the recap message, then put it in your CRM as a task with the same date. If the date is only in the message, the follow-up depends on someone remembering it." },

  { kind: "h2", text: "Following up on the estimate" },
  { kind: "p", text: [
    "Once the estimate is sent, the general pattern from ",
    { text: "quote follow-up", href: "/quote-follow-up/" },
    " applies: check it arrived, answer questions, then ask for a decision without pressure. Remodeling adds two things to that pattern.",
  ] },
  { kind: "h3", text: "Offer to walk through it" },
  { kind: "p", text: "A remodeling estimate is long: allowances, exclusions, phases, payment schedule. A homeowner comparing three of them is often comparing different scopes without knowing it. Two or three days after sending, offer a fifteen-minute call to go through it line by line. It answers questions she hasn't asked yet, and it lets you explain what the cheaper estimate may leave out without criticizing anyone." },
  { kind: "h3", text: "Ask what the decision is waiting on" },
  { kind: "p", text: "After a week or two, the most useful question is not \"Are you ready to go ahead?\". It is \"What is the decision waiting on?\". The answer tells you what to do next: financing means a later check-in, a partner means a second meeting, a price concern means a conversation about scope. Record the answer, not just the date of the message." },
  { kind: "aside", text: "Hi Priya, Tom from Oakline again. No rush on the kitchen. Is the decision waiting on anything we can help with, like the cabinet options or the payment schedule? Happy to adjust the scope if the budget needs it." },

  { kind: "h2", text: "When the answer is \"not yet\"" },
  { kind: "p", text: "Many remodeling leads are real but early. The homeowner wants the bathroom done after the summer, or once a bonus arrives, or after selling the car. These are not lost leads, and treating them as lost means giving them to whoever calls in September." },
  { kind: "list", items: [
    [{ text: "Agree a date.", bold: true }, " \"Shall I check back at the start of September?\" turns a vague maybe into a task with a date."],
    [{ text: "Send useful things in between.", bold: true }, " A note when material lead times change, or when your calendar for spring starts filling. Not a newsletter every week."],
    [{ text: "Keep the estimate current.", bold: true }, " If prices have moved since the estimate, say so before she finds out at signing."],
  ] },
  { kind: "p", text: [
    "The longer version of this, for leads months away, is in ",
    { text: "lead nurturing for contractors", href: "/lead-nurturing-for-contractors/" },
    ". For setting up the pipeline stages that make these dates visible, see ",
    { text: "remodeling CRM", href: "/remodeling-crm/" },
    ".",
  ] },

  { kind: "h2", text: "After the signature" },
  { kind: "p", text: [
    "Follow-up doesn't end at the contract. In the US, the FTC's ",
    { text: "Cooling-Off Rule", href: "https://consumer.ftc.gov/articles/buyers-remorse-ftcs-cooling-rule-may-help" },
    " gives buyers three days to cancel certain sales made at their home, until midnight of the third business day, and some states give more. Whether it applies to a given contract depends on how and where it was signed, so check with your own adviser. Either way, the days after signing are when a homeowner is most likely to have doubts.",
  ] },
  { kind: "p", text: "A short message the day after signing helps: thank them, confirm what happens next (deposit, final measurements, ordering, start date) and name the person they can call. It doesn't change anyone's rights, and it shouldn't try to. It replaces silence, which is what makes people nervous, with a plan." },
  { kind: "aside", text: "Hi Priya, thanks for choosing Oakline for the kitchen. Next step: final measurements on the 14th, then we order the cabinets. Start date is set for the week of December 2. Any questions, this number reaches me directly. Tom" },

  { kind: "h2", text: "What to automate, and what not" },
  { kind: "p", text: "Most of the messages above are the same every time, with names and dates swapped. Those are the ones a CRM can send on its own: the first reply, the visit reminder, the estimate check-in and the reminder to call a \"not yet\" lead on the agreed date. Each one is triggered by something you already do, like booking a visit or moving a lead to \"Estimate sent\"." },
  { kind: "p", text: "Some parts still need a person. The recap after the site visit should be written by the person who was there. The walk-through call is a conversation. And any reply from the homeowner should stop the automatic sequence and go to someone who answers it, the same day if possible." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. A remodeler who takes on a few large projects a year may do all of this by hand from a calendar. Timings and wording should fit your jobs and your customers, and anything about contracts or cancellation rights should be checked for your state." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How long should I keep following up on a remodeling estimate?" },
  { kind: "p", text: "Until the homeowner says yes, says no, or gives you a date to check back. Two or three messages in the first two weeks, then one on the agreed date, is a pattern most homeowners accept. Stop when they ask you to." },
  { kind: "h3", text: "Text or email?" },
  { kind: "p", text: "Use the channel the homeowner used to contact you. Text suits short questions and confirmations; send the estimate itself by email so it's easy to find and forward to a partner." },
  { kind: "h3", text: "What if the homeowner goes completely silent?" },
  { kind: "p", text: "Send one final, polite message saying you'll close the file and they can get back in touch any time. It often gets a reply, and if it doesn't, the lead moves to a slower check-in list instead of disappearing." },
  { kind: "h3", text: "Can this run while I'm on site?" },
  { kind: "p", text: [
    "Yes, that is the point of automating the routine messages: they go out at 9:40pm on a Sunday and while you are on site. If you'd like it set up for your business, you can ",
    { text: "get in touch", href: "/contact-us/" },
    ".",
  ] },
];

export const remodelingLeadFollowUp: Post = {
  slug: "remodeling-lead-follow-up",
  title: "Remodeling Lead Follow Up: Request to Signed Contract",
  description: "How remodelers can follow up on leads: a reply in minutes, site visits that happen, estimates explained, and check-ins through long decisions.",
  lede: "Each step of a remodel has a gap where the homeowner drifts. Close each one.",
  category: "Lead Generation",
  published: "2026-11-04",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/remodeling-lead-follow-up.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
