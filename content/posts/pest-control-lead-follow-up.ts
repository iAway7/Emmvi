import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "pest control lead follow up". La guia de la EPA para elegir empresa de
 * control de plagas (varios presupuestos, sin prisas, licencia, referencias)
 * se comprobo el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's Saturday, 8:40pm. A homeowner has just found droppings behind the stove and fills in your form: \"Mice in the kitchen, can someone come Monday?\" On Sunday morning someone else sends photos of winged insects on a windowsill and asks if they're termites. On Monday at 10am, while your technician is in a crawl space, a third person rings about wasps over the back door and gets voicemail." },
  { kind: "p", text: "All three are real jobs. None of them is lost because of your treatment. They're lost in the hours and days after the first contact: the form nobody answered until Tuesday, the termite quote sent once and never mentioned again, the missed call that went to the next company on the list. This article sets out how a pest control business can follow up on each kind of lead, what to say, and which parts can run on their own." },

  { kind: "h2", text: "Three kinds of pest control leads" },
  { kind: "p", text: "Pest control leads fall into three groups, and each needs a different speed and a different follow-up." },
  { kind: "list", items: [
    [{ text: "Urgent problems.", bold: true }, " Wasps by a door, rodents in the kitchen, bed bugs, a nest near where children play. The customer wants a visit this week and usually books the first company that confirms a time."],
    [{ text: "Inspections and quotes.", bold: true }, " Termites, wildlife exclusion, crawl space work, anything that needs someone to look before a price. The customer is spending more and is almost always comparing."],
    [{ text: "Recurring plans.", bold: true }, " Quarterly general pest, mosquito season, rodent monitoring. Often sold after a one-off visit, or lost because nobody offered it."],
  ] },
  { kind: "h3", text: "Sort them with one question" },
  { kind: "p", text: "Ask \"What are you seeing, and where?\" on your form and in your first text, and ask for a photo. A photo of droppings, wings or a nest tells your team more than a paragraph, and it decides the track before anyone calls back: book a visit, book an inspection, or answer a quick question." },

  { kind: "h2", text: "Reply to urgent calls in minutes" },
  { kind: "p", text: [
    "Someone with mice in the kitchen is not going to wait two days for a reply. The general case for answering quickly is in ",
    { text: "speed to lead for installers", href: "/speed-to-lead/" },
    ", and it applies here without changes: the first reply decides who gets the visit far more often than price does.",
  ] },
  { kind: "p", text: "The first reply doesn't have to come from a person. It has to arrive quickly, show that someone read the request, and give a next step the customer can say yes to." },
  { kind: "aside", text: "Hi Karen, it's Mike from Brightside Pest Control. Thanks for the photo. We can come Monday between 9 and 11am or between 2 and 4pm. Which suits you better? Until then, keep food in sealed containers and don't touch droppings with bare hands." },
  { kind: "p", text: "Offer two windows instead of asking when suits them, and keep any advice to things that are safe in almost every home. You are not diagnosing anything by text, and you should never suggest a product or treatment the customer applies on their own." },
  { kind: "h3", text: "Missed calls during a treatment" },
  { kind: "p", text: [
    "Technicians can't answer the phone in an attic or while they're wearing a respirator. A text sent automatically after every missed call, set up as described in ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    ", means the caller hears from the business within a minute and can say what the problem is. Someone still has to read the reply and act on it, so promise a callback time you can keep, such as \"by 1pm today\", not \"right away\".",
  ] },
  { kind: "h3", text: "Requests after hours" },
  { kind: "p", text: "Pests are found in the evening and at weekends, when people are home. If your office closes at 5pm, the automatic reply should say when a person will pick it up and offer the first available windows, so the customer can book before they've finished searching for other companies." },

  { kind: "h2", text: "Follow up on inspection quotes" },
  { kind: "p", text: "Termite and exclusion quotes are where most of the money is, and where follow-up usually stops after one email. The customer isn't ignoring you. They're waiting for two other quotes, checking with a partner, or reading about termite treatments at midnight." },
  { kind: "p", text: [
    "That waiting is what official advice tells them to do. The EPA's ",
    { text: "tips for selecting a pest control service", href: "https://www.epa.gov/safepestcontrol/tips-selecting-pest-control-service" },
    " say most problems can wait a few days, suggest getting several estimates, and warn against companies that offer a special price if treatment is done immediately. So pressure works against you. A steady, useful follow-up works with how the customer has been told to decide.",
  ] },
  { kind: "h3", text: "A sequence that respects the decision" },
  { kind: "p", text: [
    "Plan three or four follow-ups over two to three weeks, each with a reason to get in touch. The full method is in ",
    { text: "quote follow up for installers", href: "/quote-follow-up/" },
    ". For pest control quotes, these reasons work:",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "Day 1: the walk-through.", bold: true }, " A short message or call to go through what the quote covers: the treatment area, any warranty, re-inspections and what the customer has to do before the visit."],
    [{ text: "Day 4 or 5: the questions they were told to ask.", bold: true }, " Licensing, who will do the work, which products are used. More on this below."],
    [{ text: "Day 10 to 14: a direct question.", bold: true }, " Ask whether they've decided, and accept the answer either way."],
  ] },
  { kind: "aside", text: "Hi Tom, it's Mike from Brightside. A note on your termite quote: the treatment is done by a licensed applicator, and we can send you the product labels before you decide. Happy to go through the warranty on Thursday as we agreed." },
  { kind: "aside", tone: "tip", text: "Before your inspector leaves a property, they should agree a time for the walk-through call and log it in the CRM as a task. The quote then never sits in an inbox with no next step." },
  { kind: "h3", text: "When the answer is \"not yet\"" },
  { kind: "p", text: "Some quotes wait on something real: a house sale, a renovation, the end of winter. Note the reason and the month in the customer's record and set a reminder to get in touch then. When it arrives, it's a useful message, not a chase." },

  { kind: "h2", text: "Answer the questions buyers ask" },
  { kind: "p", text: "The same EPA page lists questions homeowners should put to any pest control company: whether the technician is a certified or licensed applicator, whether you'll provide your license and copies of the labels for the products used, and whether you can give references. A customer who has read it will ask. Most companies wait to be asked." },
  { kind: "p", text: "Turn those answers into follow-up messages you write once and send when they're useful:" },
  { kind: "list", items: [
    [{ text: "License and applicator.", bold: true }, " Who will treat the home and what certification they hold, in one sentence."],
    [{ text: "Product labels.", bold: true }, " An offer to send them, and what the customer should do before and after treatment."],
    [{ text: "References and reviews.", bold: true }, " A link to your reviews, or the offer of a customer nearby who has agreed to take a call."],
  ] },
  { kind: "p", text: "None of this is a sales trick. It's the information the customer needs to decide, sent before they have to chase you for it." },

  { kind: "h2", text: "Turn one-off jobs into plans" },
  { kind: "p", text: "A wasp nest or a mouse problem is often the start of a longer relationship, but only if someone asks. The follow-up after a one-off job has three parts." },
  { kind: "list", ordered: true, items: [
    [{ text: "A check a few days later.", bold: true }, " Has activity stopped? If not, book the return visit the job included."],
    [{ text: "A review request once the problem is solved.", bold: true }, " Not on the day of treatment, when activity may still be visible. Send it once the customer has confirmed the problem has stopped."],
    [{ text: "A plan offer that fits what they had.", bold: true }, " Rodents in autumn or ants in spring are good reasons to mention a quarterly plan. One message, with what the plan covers and the price, then leave it."],
  ] },
  { kind: "p", text: "Illustration: if you do 40 one-off jobs a month and each gets a check, a review request and a plan offer, that's 120 messages a month. Written by hand between visits, most never go out. Written once and sent by the system, all of them do, and your team only handles the replies." },

  { kind: "h2", text: "What to automate, and what not" },
  { kind: "p", text: [
    "Most of this follow-up is the same every time, which is what makes it safe to automate. A ",
    { text: "pest control CRM", href: "/pest-control-crm/" },
    " can run it from the moment a quote request arrives until the customer replies, and stop as soon as they do.",
  ] },
  { kind: "list", items: [
    [{ text: "Automate:", bold: true }, " the first reply to forms and missed calls, appointment confirmations and reminders, the quote sequence, the post-job check, the review request and the \"not yet\" reminder months later."],
    [{ text: "Keep human:", bold: true }, " identifying the pest from photos, safety advice beyond the basics, the treatment plan, the quote walk-through and any conversation about price or a complaint."],
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. Pesticide licensing and rules on texting customers differ by state, and the right setup depends on how many leads you get and who answers them." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How fast should a pest control company reply to a lead?" },
  { kind: "p", text: "For urgent problems, within minutes, even if the first reply is automatic and only offers two visit windows. For inspections and quotes, the same day. Speed matters most when the customer is contacting several companies at once." },
  { kind: "h3", text: "How many times should I follow up on a termite quote?" },
  { kind: "p", text: "Three or four times over two to three weeks, each with a reason: the walk-through, the answers to licensing and product questions, then a direct question about whether they've decided. Stop when they say no." },
  { kind: "h3", text: "Should I offer a discount to close faster?" },
  { kind: "p", text: "Be careful. EPA guidance warns homeowners about companies that offer a special price for immediate treatment, so a deadline discount can make you look like the company they were told to avoid. Clear answers and a steady follow-up are safer." },
  { kind: "h3", text: "Will automated follow-up sound robotic?" },
  { kind: "p", text: [
    "Not if each message is short, uses the customer's name and their problem, and stops when they reply. Write them the way your best technician would text a customer. If you'd like this set up for your pest control business, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const pestControlLeadFollow: Post = {
  slug: "pest-control-lead-follow-up",
  title: "Pest Control Lead Follow Up: Urgent Calls and Quotes",
  description: "How pest control companies can follow up on leads: minutes for urgent calls, a calm sequence for termite quotes, and one-off jobs turned into plans.",
  lede: "Urgent calls need minutes. Termite quotes need patience and answers.",
  category: "Lead Generation",
  published: "2026-11-16",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/pest-control-lead-follow-up.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
