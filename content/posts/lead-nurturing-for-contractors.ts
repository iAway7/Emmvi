import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "lead nurturing for contractors". La guia de CAN-SPAM de la FTC se
 * comprobo el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "At 9pm on a Tuesday, Dana fills in your solar form. You reply in a minute, she answers the next morning, and it turns out she likes the idea but wants to wait until her tax refund lands in spring. Nothing is wrong with the lead. It just isn't ready. Six months later she books with whoever happened to be in touch with her that week." },
  { kind: "p", text: "That gap, between a quote request that is real and a customer who is ready to book, is where a lot of installers and home-service businesses lose work without noticing. This article covers what lead nurturing means for a contractor, how to sort leads by when they will be ready, what to send and how often, and the point where a person needs to take over again." },

  { kind: "h2", text: "What lead nurturing means here" },
  { kind: "p", text: "For a contractor, lead nurturing is staying usefully in touch with someone who asked about a job but isn't ready to book it yet, so that when they are ready, you are the obvious call. It is not a newsletter to everyone who ever filled in a form, and it is not a discount every fortnight." },
  { kind: "p", text: "It also sits in a specific place next to the other follow-up a business should already be doing:" },
  { kind: "list", items: [
    [{ text: "The first reply", bold: true }, " happens in minutes, while the person is still looking. That is covered in ", { text: "speed to lead for installers", href: "/speed-to-lead/" }, "."],
    [{ text: "Quote follow-up", bold: true }, " is a short sequence, about two weeks, after a price has gone out. See ", { text: "quote follow up", href: "/quote-follow-up/" }, "."],
    [{ text: "Nurturing", bold: true }, " covers the leads who said \"not yet\" at any point, with or without a quote, and runs for months at a slow pace."],
    [{ text: "Reactivation", bold: true }, " is the clean-up of leads nobody nurtured, done in batches long after they went cold. That has its own plan in ", { text: "reactivate old leads", href: "/reactivate-old-leads/" }, "."],
  ] },
  { kind: "p", text: "If nurturing works, the reactivation list stays short, because fewer leads ever fall off the radar." },
  { kind: "h3", text: "Why installers see more of these leads" },
  { kind: "p", text: "Big home jobs are slow decisions. A heat pump, a full bathroom or a set of solar panels involves money, a partner's opinion, sometimes financing or a grant, and often a season. Someone asking about an EV charger may not have the car yet. Treating every one of them as \"lost\" after two weeks throws away the ones who were simply early." },

  { kind: "h2", text: "Sort leads by when they'll be ready" },
  { kind: "p", text: "The single most useful thing to record is not how \"hot\" a lead feels but when they expect to decide. Ask it directly in the first conversation: \"When are you hoping to have this done?\" Most people will tell you, and the answer decides what happens next." },
  { kind: "list", items: [
    [{ text: "This month.", bold: true }, " Not a nurture lead. Book the site visit or send the quote, and run your normal follow-up."],
    [{ text: "In one to three months.", bold: true }, " A light touch every few weeks, with the date they gave you as the anchor."],
    [{ text: "Next season or next year.", bold: true }, " A message close to that date, and very little before it."],
    [{ text: "No idea.", bold: true }, " The slowest track: an occasional useful message and an easy way to say \"I'm ready\" or \"I'm out\"."],
  ] },
  { kind: "p", text: "In a CRM this is a field or a tag on the contact, such as \"Ready: spring\" or \"Ready: unknown\", plus a stage in the pipeline that makes it obvious the lead is parked on purpose rather than forgotten. If your pipeline only has \"New\", \"Quoted\", \"Won\" and \"Lost\", add a \"Not yet\" stage." },
  { kind: "p", text: [
    "The stages that suit installers are laid out in ",
    { text: "contractor sales pipeline", href: "/contractor-sales-pipeline/" },
    ". A parked lead needs a reason and a date written next to it, or it becomes a lost lead with extra steps.",
  ] },
  { kind: "h3", text: "Record the reason, not just the date" },
  { kind: "p", text: "\"Waiting for tax refund\", \"selling the house first\", \"wants to see the roof survey\" and \"partner not convinced\" each call for a different message. A short note at the time takes seconds and saves you writing a generic check-in later that ignores what the customer already told you." },

  { kind: "h2", text: "What to send, and how often" },
  { kind: "p", text: "A nurture message earns its place if the customer would be glad to get it even if they never book. Reminders of the price you quoted, answers to the question they hesitated on, or news that actually changes their decision all pass that test. \"Just checking in!\" does not." },
  { kind: "h3", text: "A simple sequence for a \"next spring\" solar lead" },
  { kind: "list", ordered: true, items: [
    [{ text: "Right after the conversation:", bold: true }, " a short summary of what you discussed, the rough price range, and that you will be back in touch in the new year. Ask if anything would change their timing."],
    [{ text: "About six weeks later:", bold: true }, " one useful thing tied to their hesitation, such as how financing usually works for a system that size or what a site survey involves. No pressure, no offer."],
    [{ text: "A few weeks before their date:", bold: true }, " a direct question. Are they still planning the install for spring, and would they like to book a site visit before the busy months?"],
  ] },
  { kind: "p", text: "That is three messages over several months, each about Dana's job. After the third, the lead either replies, moves to a slower track, or gets one final message that makes it easy to close the file." },
  { kind: "aside", text: "Hi Dana, it's Sam from Bright Roof Solar. Back in October you mentioned waiting until spring for the panels on your house. Is that still the plan? If so, we're booking site visits for March now and can hold a morning for you. Reply STOP if you'd rather we didn't text." },
  { kind: "h3", text: "What to leave out" },
  { kind: "list", items: [
    "Fake urgency. \"Prices go up Friday\" is only acceptable if prices really do go up Friday.",
    "Generic content blasted to every lead. A plumbing tip sent to someone waiting on a heat pump quote tells them nobody is paying attention.",
    "Messages more often than every few weeks. Slow decisions don't need weekly reminders, and frequent messages are what get people to opt out.",
    "Promises you can't check. If you mention a grant, a tax credit or an incentive, name the source and the date you checked it, because these change.",
  ] },

  { kind: "h2", text: "Email, text or a phone call" },
  { kind: "p", text: "Each channel does a different job in a nurture sequence. Text gets read, which makes it right for the short, direct question near the decision date, and wrong for anything long. Email can carry the summary of a quote, a photo of a similar install or a short explanation, and nobody minds it sitting in their inbox for a week. A phone call is for the moment a lead replies with a real question or says they're ready." },
  { kind: "p", text: [
    "Both channels have rules. For marketing email in the US, the ",
    { text: "FTC's CAN-SPAM compliance guide", href: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" },
    " says each message must include a valid physical postal address and a clear way to opt out, and that opt-outs must be honored within 10 business days (as checked in October 2026). Texting has stricter consent rules, so check how each contact agreed to hear from you before a nurture text goes out.",
  ] },
  { kind: "aside", tone: "tip", text: "Write the next touch date into the CRM before you hang up or close the thread, while the customer's words are still fresh. A nurture plan that depends on remembering to look at a list later is the plan that quietly stops in the first busy week." },

  { kind: "h2", text: "Hand the lead back to a person" },
  { kind: "p", text: "Automation is good at the slow part: sending the right message on the right date, stopping when someone replies, and moving the contact to a new stage. It is not good at the moment the customer engages. The minute a nurtured lead replies with anything other than \"stop\", the sequence should pause and a person should answer." },
  { kind: "list", items: [
    [{ text: "Any reply stops the sequence.", bold: true }, " Nothing undoes trust faster than an automated \"just checking in\" arriving after the customer asked a real question."],
    [{ text: "Replies create a task, not just a notification.", bold: true }, " Someone owns the answer, with a time limit, the same as a new quote request."],
    [{ text: "\"Ready now\" goes straight to booking.", bold: true }, " A link to pick a site visit slot, or a call the same day."],
    [{ text: "\"Not interested\" closes the file politely.", bold: true }, " Mark the reason, remove them from every sequence, and thank them."],
  ] },
  { kind: "p", text: "Illustration: say a business parks 40 leads in a \"Not yet\" stage over a quarter, each with a date and a reason. Six months later, the useful question is not a conversion rate but a simple check: how many of the 40 got every planned message, how many replied, and how many replies were answered the same day. Those three counts show whether the system is running, which is the part you can control." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business and not legal advice. Sales cycles, consent rules and what customers find helpful vary by trade and by country. Start with a small group of leads, read the replies, and adjust before you put every contact into a sequence." },

  { kind: "h2", text: "Set it up once, then leave it" },
  { kind: "p", text: "Nurturing only works if it runs on weeks when nobody has time to think about it, which is most weeks in peak season. The setup is modest: a \"Not yet\" stage, a readiness field, a reason field, two or three message templates per track, and a rule that any reply stops the sequence and creates a task." },
  { kind: "p", text: [
    "Most CRMs can do this. In GoHighLevel, the pipeline, the fields, the email and text sequences and the reply handling sit in one place, which is how ",
    { text: "emmvi sets it up for installers", href: "/services/gohighlevel-automation/" },
    ". Whatever you use, the test is the same: one opt-out stops everything, and every parked lead has a date on it.",
  ] },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How long should I nurture a lead?" },
  { kind: "p", text: "Until their own date passes and they haven't replied to the message close to it, or until they say no. For most home jobs that means a few months, sometimes a year. A lead with no date and no replies after three or four messages can get one closing message and move to a once-a-year list or out of the system." },
  { kind: "h3", text: "Is lead nurturing the same as quote follow-up?" },
  { kind: "p", text: "No. Quote follow-up is short and starts the day the price goes out. Nurturing is slow and starts when someone tells you they aren't ready yet, whether or not they have a quote. Many leads go through both: a two-week quote follow-up, then a \"not until spring\" answer, then nurturing until spring." },
  { kind: "h3", text: "Can the whole thing be automated?" },
  { kind: "p", text: [
    "The sending, timing and stopping can. The first conversation that sets the date and the reason, and the answer when someone replies, still need a person. If you want help setting it up that way, ",
    { text: "get in touch with emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const leadNurturingForContractors: Post = {
  slug: "lead-nurturing-for-contractors",
  title: "Lead Nurturing for Contractors: Leads Not Ready Yet",
  description: "How contractors can stay in touch with leads who aren't ready to book: sort by timing, what to send and how often, and when a person takes over again.",
  lede: "Many quote requests are real but early. Stay in touch until they're ready to book.",
  category: "Lead Generation",
  published: "2026-10-27",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/lead-nurturing-for-contractors.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
