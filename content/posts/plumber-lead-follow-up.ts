import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "plumber lead follow up". La cifra de fugas de la EPA (WaterSense, Fix a
 * Leak Week) se comprobo el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's 7:15am and you're under a sink on your first job. Your phone buzzes twice. The first caller has water coming through the kitchen ceiling. The second wants a price to replace a 14-year-old water heater before it fails. By 9am a third person has filled in your form about a slow drain that keeps coming back." },
  { kind: "p", text: "The first caller will book whoever picks up. The other two will send the same quote request to two or three plumbers and go with the one who gets back to them properly. Losing those jobs rarely has anything to do with your workmanship. It comes down to who replied, and who followed up after the first conversation. This article covers how a plumbing business can follow up on each kind of lead without spending the evening on the phone." },

  { kind: "h2", text: "Three kinds of plumbing leads" },
  { kind: "p", text: "Plumbing work comes in three shapes, and each one needs a different speed and a different kind of follow-up." },
  { kind: "list", items: [
    [{ text: "Emergencies.", bold: true }, " A burst pipe, water through a ceiling, a backed-up sewer line, no water at all. The customer wants someone now and books the first plumber who confirms a time."],
    [{ text: "Service calls.", bold: true }, " A dripping faucet, a running toilet, a slow drain, a garbage disposal that hums. Usually booked within a day or two, often after the customer has called two numbers."],
    [{ text: "Replacements and projects.", bold: true }, " Water heaters, repipes, sewer line repairs, bathroom rough-ins, a water softener. These need a visit or at least photos, a written estimate, and the customer is almost always comparing."],
  ] },
  { kind: "h3", text: "One question does the sorting" },
  { kind: "p", text: "Ask \"Is water leaking or backing up right now?\" on your form and in your first text. A yes goes on the emergency track. A no goes on the quote track. Ask for a photo of the problem and, for water heaters, a photo of the label on the tank. That alone usually tells you whether it's a service call or a replacement before anyone picks up the phone." },

  { kind: "h2", text: "Reply to emergencies in minutes" },
  { kind: "p", text: [
    "For an emergency, follow-up is counted in minutes, not days. The general case for replying fast is in ",
    { text: "speed to lead for installers", href: "/speed-to-lead/" },
    ". For plumbers there is one thing to add: tell the customer how to limit the damage while they wait.",
  ] },
  { kind: "aside", text: "Hi Maria, it's Luis from Northside Plumbing. If water is still running, turn off the main shutoff valve, usually where the water line enters the house, and keep clear of any wet ceiling. We can be there by 10:30am. Reply YES to confirm." },
  { kind: "p", text: "Keep it short and only say what is true for almost every house. You are not diagnosing anything by text. You are making sure the customer stops the water and doesn't stand under a ceiling that's holding it." },
  { kind: "h3", text: "Missed calls under the sink" },
  { kind: "p", text: [
    "Most missed plumbing leads aren't ignored. They ring while your hands are wet or you're in a crawl space. An automatic text for every missed call, set up as described in ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    ", means the caller hears from you within a minute and can tell you what's wrong. Someone still has to read the reply and act on it, so the text should promise a time you can keep, such as \"we'll call you back by noon\", not \"right away\".",
  ] },

  { kind: "h2", text: "Book service calls on the first reply" },
  { kind: "p", text: "Service calls are lost in the gap between \"someone will call you\" and the actual call. Close that gap in the first message. Offer two time windows instead of asking when suits them, say whether there's a call-out fee, and ask for a photo." },
  { kind: "h3", text: "Confirm the day before" },
  { kind: "p", text: "A reminder the evening before, with the arrival window and a simple way to reschedule, saves wasted trips. It also tells the customer they're dealing with a business that keeps track of things, which matters when they're letting you into their home." },
  { kind: "h3", text: "Follow up after the fix" },
  { kind: "p", text: [
    "A short check a few days after a leak repair is useful in its own right: is the floor dry, has the drain stayed clear? Small leaks also add up. The EPA's ",
    { text: "WaterSense Fix a Leak Week page", href: "https://www.epa.gov/watersense/fix-leak-week" },
    " says an average household's leaks can waste more than 9,300 gallons of water a year. A plumber who asks about the dripping tap in the other bathroom is offering something the customer may want, not making a sales pitch.",
  ] },

  { kind: "h2", text: "Follow up on replacement estimates" },
  { kind: "p", text: [
    "Water heaters, repipes and sewer lines are where follow-up matters most, and where it most often stops after the estimate is sent. Plan three or four follow-ups over two to three weeks, each with a reason to get in touch. The full sequence is in ",
    { text: "quote follow up for installers", href: "/quote-follow-up/" },
    ". For plumbing estimates, these are the reasons that work:",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "The agreed walk-through.", bold: true }, " Call or text at the time you set when you left. Go through what's included: removal of the old unit, permit, venting or expansion tank, and clean-up."],
    [{ text: "An answer to the question they'll have.", bold: true }, " How long they'll be without hot water, whether walls or the yard will be opened, who handles the permit and inspection."],
    [{ text: "A direct question.", bold: true }, " After two or three weeks, ask whether they've decided, and accept the answer either way."],
  ] },
  { kind: "aside", text: "Hi Dan, it's Luis from Northside Plumbing. A quick note on your water heater estimate: the swap usually takes most of a morning, so you'd have hot water again by the afternoon. We pull the permit for you. Happy to go through the rest on Thursday as planned." },
  { kind: "aside", tone: "tip", text: "Before you leave a site visit, put the date you promised the estimate into your CRM as a task. If the estimate isn't sent by then, the task reminds you, not the customer." },
  { kind: "h3", text: "Tank or tankless questions" },
  { kind: "p", text: "Water heater leads ask the same things every time: tank or tankless, which size, gas or electric, how long it lasts. Write a short, honest answer to each once and send the right one at the moment the customer is likely to wonder. If the answer depends on their house, say so and offer to check it on the visit. Guessing a gas line or a breaker panel from a description is how estimates turn into awkward calls later." },
  { kind: "h3", text: "When the answer is \"not yet\"" },
  { kind: "p", text: "A lot of replacement estimates wait on something else: a tax refund, a bathroom remodel next spring, an old heater that's still working. Note the reason and the month in the customer's record and set a reminder to get in touch then. When it arrives it's a useful message, not a chase." },

  { kind: "h2", text: "What to automate, and what not" },
  { kind: "p", text: [
    "Most of the follow-up above is the same every time, which is what makes it safe to automate. A ",
    { text: "CRM for plumbers", href: "/crm-for-plumbers/" },
    " can run it from the moment a quote request arrives until the customer replies, and stop as soon as they do.",
  ] },
  { kind: "list", items: [
    [{ text: "Automate:", bold: true }, " the first reply to forms, missed-call texts, appointment confirmations and reminders, the after-fix check, the estimate follow-up sequence and the \"not yet\" reminder months later."],
    [{ text: "Keep human:", bold: true }, " diagnosing the problem, anything beyond the standard shutoff line in an emergency, sizing a water heater, explaining an estimate and handling doubts about price."],
  ] },
  { kind: "p", text: "Illustration: if you send 25 replacement estimates a month and each needs three follow-ups, that's 75 messages a month. Written by hand between jobs, most of them never get sent. Written once and sent by the system, all of them go out, and you still decide which conversations need a call." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. Rules on texting customers, permits and licensing differ by state and city, and the right setup depends on how many leads you get and who answers them." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How fast should a plumber reply to a lead?" },
  { kind: "p", text: "For emergencies, within minutes, even if the first reply is automatic and only confirms when you'll call. For service calls and estimates, the same day. Speed matters most when the customer is contacting several plumbers at once." },
  { kind: "h3", text: "How many times should I follow up on a plumbing estimate?" },
  { kind: "p", text: "Three or four times over two to three weeks, each with a reason: the agreed walk-through, an answer to a common question, then a direct question about whether they've decided. Stop when they say no." },
  { kind: "h3", text: "Should I follow up by text or by phone?" },
  { kind: "p", text: "Both. Text is easier for customers to answer during the day and leaves a written record. A call is better for walking through a bigger estimate. Ask which the customer prefers and note it in their record." },
  { kind: "h3", text: "Will automated follow-up sound robotic?" },
  { kind: "p", text: [
    "Not if each message is short, uses the customer's name and job, and stops when they reply. Write them the way you'd text a customer yourself. If you'd like this set up for your plumbing business, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const plumberLeadFollowUp: Post = {
  slug: "plumber-lead-follow-up",
  title: "Plumber Lead Follow Up: Leaks, Drains, Water Heaters",
  description: "How plumbers can follow up on leads: minutes for leaks and backups, booked service calls, and a clear sequence for water heater and repipe estimates.",
  lede: "Leaks need minutes. Water heater and repipe estimates need a plan.",
  category: "Lead Generation",
  published: "2026-11-06",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/plumber-lead-follow-up.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
