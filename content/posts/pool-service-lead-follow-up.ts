import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "pool service lead follow up". Los rangos de cloro libre y pH de la guia de
 * piscinas de los CDC y la frase de Pool Safely sobre rejillas de desague se
 * comprobaron el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's Saturday, 6:40pm. A homeowner back from two weeks away fills in your form: \"Pool has gone green, party next Saturday, can you help?\" On Monday morning someone who just bought a house with a pool asks what weekly service costs. At lunchtime a customer rings about a pump making a grinding noise, while your tech is on a route with wet hands, and gets voicemail." },
  { kind: "p", text: "Each of those is real work, and none of them depends on how well your techs balance water. They depend on what happens in the next few hours and days: who replies first, whether the quote gets a second message, and whether the first visit turns into a spot on the route. This article sets out how a pool service company can follow up on each kind of lead, what to say, and which parts can run on their own." },

  { kind: "h2", text: "Four kinds of pool service leads" },
  { kind: "p", text: "Pool leads don't all move at the same speed. Knowing which kind you're looking at decides how fast to reply and what the follow-up should say." },
  { kind: "list", items: [
    [{ text: "Green pool cleanups.", bold: true }, " Urgent, often with a date attached (a party, a house sale, guests). The customer books whoever confirms a visit first."],
    [{ text: "Weekly route service.", bold: true }, " New homeowners, people leaving another company, people tired of doing it themselves. They compare more and decide more slowly, because you'll be in their backyard every week."],
    [{ text: "Repairs.", bold: true }, " Pumps, filters, heaters, leaks. The pool may be unusable until it's fixed, so speed matters, but so does a clear price."],
    [{ text: "Openings and closings.", bold: true }, " Seasonal and bunched into a few weeks. The company with a slot on the calendar wins."],
  ] },
  { kind: "h3", text: "Sort them with two questions" },
  { kind: "p", text: "Ask \"What do you need, and by when?\" and \"Can you send a photo of the pool and the equipment pad?\" on your form and in your first text. A photo of green water tells you how many visits a cleanup will take. A photo of the pump label tells you which part you might need before anyone drives out." },

  { kind: "h2", text: "Reply before they call the next one" },
  { kind: "p", text: [
    "The homeowner with a green pool and a party next Saturday will not wait until Tuesday. The general case for answering quickly is in ",
    { text: "speed to lead for installers", href: "/speed-to-lead/" },
    ", and it applies to pool service without changes: when there is a date, the first company that offers a visit usually gets the job.",
  ] },
  { kind: "p", text: "The first reply doesn't have to come from a person. It has to arrive quickly, show that someone read the request, and give the customer a next step they can say yes to." },
  { kind: "aside", text: "Hi Mark, it's Dana from Clearwater Pools. Thanks for the details. We can come out Tuesday from 8am or Wednesday from 1pm to start the cleanup. Could you send a photo of the pool and one of the pump and filter so we can tell you how many visits it's likely to take?" },
  { kind: "p", text: "Offer two slots instead of asking when suits them. And don't promise the pool will be swimmable by Saturday before you've seen it: a green pool can take more than one visit, and a promise you break on Friday costs you the customer and the review." },
  { kind: "h3", text: "Missed calls on the route" },
  { kind: "p", text: [
    "Techs can't answer the phone while brushing a pool or with their hands in a skimmer. A text sent automatically after every missed call, set up as described in ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    ", means the caller hears from the business within a minute and can say what they need. Someone still has to read the reply and act on it, so promise a callback time you can keep, such as \"by 3pm today\", not \"right away\".",
  ] },
  { kind: "h3", text: "Weekend and evening requests" },
  { kind: "p", text: "People notice a problem with the pool when they're at home looking at it, which means evenings and weekends. If nobody works the office then, the automatic reply should say when a person will pick it up and, for cleanups and openings, offer the first available slots straight away." },

  { kind: "h2", text: "Follow up on the quote" },
  { kind: "p", text: "Weekly service and larger repairs are where follow-up usually stops after one message. The customer isn't ignoring you. They're waiting for other quotes, checking with a partner, or deciding whether weekly service is worth it compared with doing it themselves." },
  { kind: "h3", text: "A sequence with a reason for each message" },
  { kind: "p", text: [
    "Plan three or four follow-ups over two to three weeks, each with something useful to say. The full method is in ",
    { text: "quote follow up for installers", href: "/quote-follow-up/" },
    ". For pool service quotes, these reasons work:",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "Day 1: what the price covers.", bold: true }, " Skimming, brushing, vacuuming, emptying baskets, testing and adding chemicals, checking the equipment. Say clearly whether chemicals are included or billed on top, because that's the first thing people compare."],
    [{ text: "Day 4 or 5: what they'll see after each visit.", bold: true }, " Show an example of the visit report. More on this below."],
    [{ text: "Day 10 to 14: a direct question.", bold: true }, " Ask whether they've decided, and accept the answer either way."],
  ] },
  { kind: "p", text: "For repairs, keep the gaps shorter: a pool that can't run is a problem every day. If the quote is for a pump or heater, the second message can set out the options (repair or replace, and what each one involves) so the customer can decide without another call." },
  { kind: "aside", tone: "tip", text: "Whoever gives a quote on site should agree a time for a short follow-up call before leaving, and log it in the CRM as a task. The quote then never sits in an inbox with no next step." },

  { kind: "h2", text: "Show what each visit checks" },
  { kind: "p", text: "A customer choosing a weekly service is really asking one thing: will I know that the work was done? A short report after each visit answers it. It also gives your follow-up something concrete to show." },
  { kind: "p", text: [
    "The CDC's general guidance on ",
    { text: "keeping a pool safe and healthy", href: "https://www.cdc.gov/healthy-swimming/safety/what-you-can-do-to-stay-healthy-in-swimming-pools.html" },
    " gives a typical range of 1 to 4 ppm for free chlorine and a pH range of 7.0 to 7.8, and tells readers to follow the manufacturer's instructions for their product. A visit report that records the readings your tech took, next to the range you aim for, lets the customer see the water was tested without having to take your word for it.",
  ] },
  { kind: "aside", text: "Hi Priya, here's an example of the report you'd get after each visit: the chlorine and pH readings, what we added, a photo of the pool, and anything we noticed on the equipment. If you'd like weekly service to start on Thursdays, reply and we'll confirm the slot." },
  { kind: "h3", text: "Mention safety only where it's true" },
  { kind: "p", text: [
    "Pool Safely, the CPSC's campaign, states that ",
    { text: "all public pools and spas must have drain grates or covers", href: "https://www.poolsafely.gov/parents/safety-tips/" },
    ", and tells swimmers never to enter a pool with a loose, broken or missing drain cover. Most residential customers aren't covered by that rule, so don't present it as one. But if your techs note the state of the drain covers on every visit, say so in the follow-up. It's a specific, checkable thing a careful customer will care about.",
  ] },
  { kind: "h3", text: "Don't discount to close" },
  { kind: "p", text: "When a weekly service quote goes quiet, a price cut is the obvious move. It's an expensive one: a discount to win the first month usually becomes the price for every week after that. A clear scope and a visible report give the customer a reason to choose you that doesn't cost you on every visit." },

  { kind: "h2", text: "Turn a one-off job into a route" },
  { kind: "p", text: "Many weekly customers start with a cleanup, an opening or a repair. The moment to ask about regular service is just after that job, while the pool is clear and the customer remembers what it looked like before." },
  { kind: "list", ordered: true, items: [
    [{ text: "The next day: a check.", bold: true }, " Ask if the water still looks right and whether the equipment is running as it should. Fix problems before anything else."],
    [{ text: "Two or three days later: the offer.", bold: true }, " If they were happy, offer weekly service on a day your route already passes their street."],
    [{ text: "After a good reply: the review request.", bold: true }, " Only ask once you know the customer was happy, and make it one tap."],
  ] },
  { kind: "p", text: [
    "For closings, add one more message: a reminder in late winter offering an opening slot before the calendar fills. The same idea is behind ",
    { text: "pool builder lead follow up", href: "/pool-builder-lead-follow-up/" },
    ", where the job is longer but the customer still needs a reason to come back to you.",
  ] },
  { kind: "p", text: "Illustration: if a company does 20 cleanups and openings a month and sends these three messages after each one, that's 60 short messages a month. Written once and triggered when a job is marked complete, nobody has to remember any of them." },

  { kind: "h2", text: "What to automate, and what not" },
  { kind: "p", text: [
    "Everything above can be a set of rules rather than a list someone has to remember. A ",
    { text: "pool service CRM", href: "/pool-service-crm/" },
    " can run it from the moment a quote request arrives until the customer replies, and stop as soon as they do.",
  ] },
  { kind: "list", items: [
    [{ text: "Automate:", bold: true }, " the first reply to forms and missed calls, slot offers for cleanups and openings, visit confirmations and reminders, the quote sequence, the post-job check, the weekly service offer, the seasonal reminder and the review request."],
    [{ text: "Keep human:", bold: true }, " pricing a cleanup from photos, diagnosing equipment, repair or replace decisions, anything about damage or a leak, and any complaint."],
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every pool service company. Licensing, chemical handling rules and rules on texting customers differ by state, and the right setup depends on how many leads you get and who answers them." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How fast should a pool service company reply to a lead?" },
  { kind: "p", text: "For green pools and repairs, within minutes, even if the first reply is automatic and only offers two slots. For weekly service quotes, the same day. Speed matters most when the customer is contacting several companies at once." },
  { kind: "h3", text: "How many times should I follow up on a pool service quote?" },
  { kind: "p", text: "Three or four times over two to three weeks, each with a reason: what the price covers, an example visit report, then a direct question about whether they've decided. Stop when they say no." },
  { kind: "h3", text: "Should I include chemicals in the weekly price?" },
  { kind: "p", text: "That's a pricing decision for your business, not a follow-up one. What matters for follow-up is that the quote says clearly which way you do it, so the customer isn't comparing your price with chemicals against someone else's without." },
  { kind: "h3", text: "Will automated follow-up sound robotic?" },
  { kind: "p", text: [
    "Not if each message is short, uses the customer's name and their pool, and stops when they reply. Write them the way your best tech would text a customer. If you'd like this set up for your pool service company, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const poolServiceLeadFollow: Post = {
  slug: "pool-service-lead-follow-up",
  title: "Pool Service Lead Follow Up: Green Pools to Weekly Routes",
  description: "How pool service companies can follow up on leads: minutes for green pools and repairs, a clear quote sequence, and one-off jobs turned into weekly routes.",
  lede: "Green pools need minutes. Quotes need proof. One-off jobs need a second ask.",
  category: "Lead Generation",
  published: "2026-11-19",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/pool-service-lead-follow-up.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
