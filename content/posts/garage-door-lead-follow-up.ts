import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "garage door lead follow up". Las frases de seguridad de DASMA y la alerta
 * de estafas del BBB de Wisconsin (enero de 2025) se comprobaron el dia de
 * publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's Tuesday, 7:15am. A homeowner pulls the release cord, the door won't lift, and the car is stuck inside. They search \"garage door repair near me\", call the first two numbers, and leave a voicemail on one. That evening a different homeowner fills in your form asking for a price on a new insulated double door. Next week a landlord emails about a door that has started to shake and squeal." },
  { kind: "p", text: "All three are work your techs can do well. Whether you get them depends on something else: who answers first, whether the customer believes you're a real local company, and whether the new door quote gets a second message. This article sets out how a garage door company can follow up on each kind of lead, what to say, and which parts can run without anyone at a desk." },

  { kind: "h2", text: "Three kinds of garage door leads" },
  { kind: "p", text: "Garage door leads move at very different speeds. Knowing which one you're looking at decides how fast you reply and what the follow-up says." },
  { kind: "list", items: [
    [{ text: "Emergency repairs.", bold: true }, " Broken springs, snapped cables, a door off its track, an opener that has stopped. The car is trapped or the house is open. The customer books whoever confirms a visit first."],
    [{ text: "New doors and openers.", bold: true }, " Planned purchases, often during a remodel or before selling a house. The customer compares quotes, styles and prices, and decides over days or weeks."],
    [{ text: "Noisy or sticking doors.", bold: true }, " Not urgent yet, but the customer knows something is wrong. These are often the start of a longer relationship, and the easiest to lose to whoever answers first."],
  ] },
  { kind: "h3", text: "Sort them with two questions" },
  { kind: "p", text: "Ask \"Is the door stuck open, stuck closed, or still working?\" and \"Can you send a photo of the door and the springs above it?\" on your form and in your first text. The first answer tells you whether this is today's job. The photo tells you what parts to load on the van before anyone drives out." },

  { kind: "h2", text: "Reply while the door is stuck" },
  { kind: "p", text: [
    "A homeowner with a car trapped in the garage will not wait for a callback tomorrow. The general case for answering quickly is in ",
    { text: "speed to lead for installers", href: "/speed-to-lead/" },
    ", and it applies to garage doors without changes: when the problem is urgent, the first company that offers a time usually gets the job.",
  ] },
  { kind: "p", text: "The first reply doesn't have to come from a person. It has to arrive quickly, show that someone read the request, and give the customer a next step they can say yes to." },
  { kind: "aside", text: "Hi Laura, it's Sam from Northside Doors. Sorry about the door. We can have a tech there today between 1pm and 3pm, or tomorrow from 8am. Please don't try to lift it or touch the springs. Could you send a photo of the springs above the door so we bring the right parts?" },
  { kind: "p", text: [
    "The safety line isn't padding. The Door and Access Systems Manufacturers Association says in its ",
    { text: "safety tips", href: "https://www.dasma.com/safety-tips/" },
    " that spring systems are dangerous and should be repaired only by trained professionals, and that cables should be replaced only by a trained technician. Telling the customer to leave it alone protects them, and it keeps the job yours.",
  ] },
  { kind: "h3", text: "Missed calls from the ladder" },
  { kind: "p", text: [
    "Techs can't answer while they're winding a spring or holding a panel. A text sent automatically after every missed call, set up as described in ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    ", means the caller hears from your business within a minute and can say what happened. Someone still has to read the reply and act on it, so promise a callback time you can keep, such as \"by 11am\", not \"right away\".",
  ] },
  { kind: "h3", text: "Early mornings and evenings" },
  { kind: "p", text: "Doors tend to fail when people use them most: leaving for work and coming home. If nobody works the office at 7am or 7pm, the automatic reply should say when a person will pick it up and, for emergencies, offer the first available slots straight away." },

  { kind: "h2", text: "Prove you're a real local company" },
  { kind: "p", text: [
    "Garage door repair has a trust problem that most trades don't. In a ",
    { text: "January 2025 scam alert", href: "https://urbanmilwaukee.com/pressrelease/bbb-scam-alert-garage-door-repair-scams/" },
    ", the Wisconsin Better Business Bureau warned that garage door repair scammers take advantage of urgent situations, can appear at the top of internet searches, and often use generic names that aren't registered with the state. It advises homeowners to ask for a company's address when it answers the phone and to get a written estimate with the scope, materials and costs.",
  ] },
  { kind: "p", text: "A customer who has read that kind of warning will judge your first message on it. So give them, without being asked, the things a careful homeowner checks:" },
  { kind: "list", items: [
    [{ text: "Your real business name and a person's name", bold: true }, " in the first text, the same name that appears on your Google profile and your van."],
    [{ text: "Your address or service area", bold: true }, ", stated plainly, so the customer can compare it with what they found online."],
    [{ text: "A written estimate before work starts", bold: true }, ", sent by text or email, listing parts and labor. Say in the first message that one is coming."],
    [{ text: "The tech's name and a photo", bold: true }, " in the appointment confirmation, so the person at the door is the person they were told about."],
  ] },
  { kind: "p", text: [
    "None of this costs much, and all of it can be part of the automatic messages. The same consistency matters on your public listing: the name, address and hours in ",
    { text: "your Google Business Profile", href: "/google-business-profile-for-contractors/" },
    " should match what your texts say.",
  ] },

  { kind: "h2", text: "Follow up on new door quotes" },
  { kind: "p", text: "New doors and openers are where follow-up usually stops after one message. The customer isn't ignoring you. They're comparing styles, waiting for other quotes, or checking with whoever shares the budget." },
  { kind: "h3", text: "A sequence with a reason for each message" },
  { kind: "p", text: [
    "Plan three or four follow-ups over two to three weeks, each with something useful to say. The full method is in ",
    { text: "quote follow up for installers", href: "/quote-follow-up/" },
    ". For garage door quotes, these reasons work:",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "Day 1: what the price includes.", bold: true }, " Removal and disposal of the old door, new tracks or reused ones, the opener, and how long the job takes. These are the lines customers compare."],
    [{ text: "Day 4 or 5: a photo of a similar door you installed.", bold: true }, " Same style or color on a house like theirs, with the customer's permission. It answers \"what will it look like\" better than a brochure."],
    [{ text: "Day 10 to 14: a direct question.", bold: true }, " Ask whether they've decided, and accept the answer either way."],
  ] },
  { kind: "aside", text: "Hi Daniel, it's Sam from Northside Doors. Here's a door we fitted last month on Elm Street, the same model and color as your quote #1042. Happy to answer anything before you decide." },
  { kind: "p", text: "Keep the tone of each message the same as your best salesperson would use face to face. If the customer replies with a question, the sequence stops and a person answers." },
  { kind: "aside", tone: "tip", text: "Whoever measures for a new door should agree a time for a short follow-up call before leaving the driveway, and log it in the CRM as a task. The quote then never sits in an inbox with no next step." },

  { kind: "h2", text: "Turn repairs into yearly service" },
  { kind: "p", text: [
    "An emergency repair is often the first time a homeowner has thought about their garage door in years. DASMA's safety tips recommend ",
    { text: "an annual visit from a trained door systems technician", href: "https://www.dasma.com/safety-tips/" },
    " to keep a door working safely. That gives you an honest reason to ask for the next visit.",
  ] },
  { kind: "p", text: "A short message a few days after the repair can do three things: check the door is working, ask for a review while the fix is fresh, and offer to add the customer to a yearly tune-up reminder. Keep them separate if you prefer, but don't skip them." },
  { kind: "p", text: [
    "The review request matters more in this trade than most, because a homeowner looking for a trustworthy company reads reviews closely. The method for asking is in ",
    { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" },
    ".",
  ] },
  { kind: "p", text: "Illustration: if a company does 40 repairs a month and sends each customer one check-in text and one reminder a year later, that is 80 messages a month that nobody has to remember to send. How many become tune-ups depends on your prices and your customers." },

  { kind: "h2", text: "What to automate, and what not" },
  { kind: "p", text: "Automation handles the messages that should always go out and are easy to forget on a busy day. People handle anything that needs judgement." },
  { kind: "list", items: [
    [{ text: "Automate:", bold: true }, " the first reply to forms and missed calls, appointment confirmations with the tech's name, the written estimate going out, the quote follow-up sequence, the post-repair check-in, review requests, and the yearly reminder."],
    [{ text: "Keep human:", bold: true }, " pricing questions, safety concerns, complaints, any customer who replies with something unexpected, and the decision on whether a repair or a new door is the better option."],
  ] },
  { kind: "p", text: "Every automatic message should stop the moment the customer replies, and every reply should land in one place where someone sees it the same day. A CRM that shows each lead's stage (new, booked, quoted, won, lost) makes it obvious which ones are waiting on you." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every garage door company. Your volume, crew size, local licensing rules and the texting consent rules that apply where you work will change what makes sense. Check those before you switch on any automated messages." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How fast should a garage door company reply to a lead?" },
  { kind: "p", text: "For emergencies, within minutes, even if the first reply is automatic and only offers two time slots. For new door quotes, the same day. Speed matters most when the customer is calling several companies at once." },
  { kind: "h3", text: "How many times should I follow up on a new door quote?" },
  { kind: "p", text: "Three or four times over two to three weeks, each with a reason: what the price includes, a photo of a similar installed door, then a direct question about whether they've decided. Stop when they say no." },
  { kind: "h3", text: "Should the first reply include a price?" },
  { kind: "p", text: "For emergencies, a service call fee or a range you're confident in can help, as long as the written estimate follows before work starts. For new doors, wait until you've measured or seen photos, because a wrong number in the first message is hard to walk back." },
  { kind: "h3", text: "Will automated follow-up sound robotic?" },
  { kind: "p", text: [
    "Not if each message is short, uses the customer's name and their door, and stops when they reply. Write them the way your best tech would text a customer. If you'd like this set up for your garage door company, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const garageDoorLeadFollow: Post = {
  slug: "garage-door-lead-follow-up",
  title: "Garage Door Lead Follow Up: Broken Springs to New Doors",
  description: "How garage door companies can follow up on leads: minutes for broken springs, proof you're a real local company, and a quote sequence for new doors.",
  lede: "Broken springs need minutes. Trust needs proof. New door quotes need a chase.",
  category: "Lead Generation",
  published: "2026-11-20",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/garage-door-lead-follow-up.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
