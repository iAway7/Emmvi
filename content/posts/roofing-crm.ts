import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (septiembre de 2026). Palabra clave:
 * "roofing crm". Las dos paginas de consejo al consumidor de la FTC citadas
 * se comprobaron en la fuente el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's the Tuesday after a hailstorm. You're on a roof on Maple Drive measuring damage, and your phone has buzzed eleven times since breakfast. Three missed calls, two quote requests from the website, a homeowner asking whether you got the photos she sent, and a text from last month's customer asking when the crew is coming back for the gutter." },
  { kind: "p", text: "Roofing has quiet weeks and weeks when everyone calls at once. This article covers what a roofing CRM should track, why roofing leads go missing, how to set up the pipelines, what to automate first and how to pick a system without paying for features you won't use." },

  { kind: "h2", text: "What a roofing CRM is for" },
  { kind: "p", text: "A CRM (customer relationship management system) keeps one record per customer and per property, with every call, form, text and photo attached, plus what has happened and what should happen next. For a roofer, the record also needs to hold what you found up there: the roof type and age, the photos from the inspection, the measurements and the notes on access." },
  { kind: "p", text: "The point is answering four questions at any moment, without scrolling through your phone:" },
  { kind: "list", items: [
    [{ text: "Who contacted us and hasn't heard back?", bold: true }, " Every missed call, voicemail, form and text still waiting for a person."],
    [{ text: "Which estimates are out and not yet decided?", bold: true }, " Priced, sent, and still without a yes or a no."],
    [{ text: "What's scheduled, and does the homeowner know?", bold: true }, " Inspections and installs with a confirmed date, not \"sometime next week, weather permitting\"."],
    [{ text: "Where did the signed jobs come from?", bold: true }, " Which ads, yard signs, referrals and directories turned into contracts, not just calls."],
  ] },
  { kind: "p", text: "If a system can't answer those four, you're paying a monthly fee for an address book." },

  { kind: "h2", text: "Why roofing leads get lost" },
  { kind: "h3", text: "Storms bring everyone at once" },
  { kind: "p", text: "After a storm, the calls don't arrive evenly. They arrive in a week, often while every crew is already booked. The homeowner with a leak over the bedroom calls whoever answers first. The one with a few missing shingles may wait, but only if someone has told them when you can come. Without a system, the busy week is exactly when calls go unanswered, because the people who would answer them are on roofs." },
  { kind: "h3", text: "Homeowners compare, and they're right to" },
  { kind: "p", text: [
    "Homeowners are told to shop around. The FTC's advice on ",
    { text: "avoiding home improvement scams", href: "https://consumer.ftc.gov/articles/how-avoid-home-improvement-scam" },
    " says \"Get multiple estimates\", and its page on ",
    { text: "scams after weather emergencies", href: "https://consumer.ftc.gov/articles/how-avoid-scams-after-weather-emergencies-and-natural-disasters" },
    " warns that unlicensed contractors \"often appear in recovery zones\". So your estimate sits next to two or three others, from a homeowner who is wary of everyone. The roofer who replies clearly, shows up when promised and follows up politely looks like the safe choice. The one who goes quiet after sending a price looks like the others.",
  ] },
  { kind: "h3", text: "The decision takes weeks" },
  { kind: "p", text: "A full replacement is a big purchase. The homeowner may be waiting on an insurance adjuster, a partner, a second quote or the next paycheck. That gap is where most estimates die: not because the customer said no, but because nobody asked again after the first week." },
  { kind: "h3", text: "One roof, many visits" },
  { kind: "p", text: "An inspection, an estimate, maybe an adjuster meeting, the install, then a gutter or flashing fix a year later. If each visit lives in a different notebook, the next person starts from nothing." },

  { kind: "h2", text: "The pipelines roofers need" },
  { kind: "p", text: "A pipeline is the list of stages a job moves through. Keep the stages close to how the work really happens. Too few and you can't see where jobs stall, too many and nobody updates them. Most roofing businesses need two." },
  { kind: "h3", text: "Repairs and service calls" },
  { kind: "list", ordered: true, items: [
    [{ text: "New request:", bold: true }, " a call, missed call, form or text has arrived. The clock is running."],
    [{ text: "Scheduled:", bold: true }, " a visit is booked and confirmed with the homeowner, with the address and the problem on the record."],
    [{ text: "Done:", bold: true }, " fixed and invoiced. Photos and notes go on the property record."],
  ] },
  { kind: "h3", text: "Replacements and larger quotes" },
  { kind: "list", ordered: true, items: [
    [{ text: "Quote request:", bold: true }, " a homeowner wants a price on a new roof, a section or a large repair, or you spotted the need on a service call."],
    [{ text: "Inspection booked:", bold: true }, " someone is going up to look and measure."],
    [{ text: "Estimate sent:", bold: true }, " the price is with the homeowner. This is the stage where jobs go quiet."],
    [{ text: "Waiting on insurance:", bold: true }, " optional, only if you do claim work. The claim belongs to the homeowner; you track the dates you depend on."],
    [{ text: "Signed:", bold: true }, " contract agreed, materials to order, a date to set."],
    [{ text: "Completed:", bold: true }, " the trigger for the thank you and the review request."],
  ] },
  { kind: "p", text: "Add a \"Lost\" outcome with a short reason: price, timing, went elsewhere, insurance denied, no reply. After one season, those reasons tell you more about your estimates than any dashboard." },
  { kind: "aside", tone: "tip", text: "Attach inspection photos to the property, not to a message thread. When the homeowner calls back three weeks later asking \"is it really that bad?\", you can send the same photos in a minute instead of looking for them in your camera roll." },
  { kind: "h3", text: "Record the source on day one" },
  { kind: "p", text: "Every new request should carry where it came from: a specific ad, a yard sign, a directory, a referral, a past customer. A separate tracking number per ad and a hidden field on the website form fill this in without anyone typing it. Where that isn't possible, make it a required field when the request is logged." },

  { kind: "h2", text: "What it should do without you" },
  { kind: "p", text: "A CRM that only stores information depends on someone opening it, and during storm week nobody does. The useful part is what happens on its own when a job enters or leaves a stage." },
  { kind: "list", items: [
    [{ text: "Missed call:", bold: true }, " a text within a minute saying you're on a roof, asking for the address and what's wrong, and when you'll call back. The details are in ", { text: "how missed call text back works", href: "/missed-call-text-back/" }, "."],
    [{ text: "New quote request:", bold: true }, " an instant reply that confirms you got it and offers inspection times, sent at 9pm as easily as at 9am. Why the first minutes matter is covered in ", { text: "speed to lead", href: "/speed-to-lead/" }, "."],
    [{ text: "Estimate sent:", bold: true }, " a short sequence of follow-ups, for example after two days, a week and two weeks, that stops the moment the homeowner replies. See ", { text: "how to follow up on a quote", href: "/quote-follow-up/" }, " for timing and wording."],
    [{ text: "Visit scheduled:", bold: true }, " a reminder the day before, and a note if weather moves the date."],
    [{ text: "Job completed:", bold: true }, " a thank you and a review request a day or two later, while the new roof is still the first thing they see. More in ", { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" }, "."],
  ] },
  { kind: "p", text: "The first follow-up after an estimate can be this plain:" },
  { kind: "aside", text: "Hi Linda, it's Mike from the roofing company. Just checking you got the estimate for the roof on Maple Drive. Happy to go through it or send the inspection photos again. If you've decided to go another way, a quick no is fine too." },
  { kind: "p", text: "Illustration: a roofer who sends 10 estimates a week and follows each one up three times needs 30 messages a week, every week, typed between jobs. The software doesn't write better messages than you. It sends them on the day they're due, which is the part that slips." },
  { kind: "h3", text: "What automation can't do" },
  { kind: "p", text: "An automatic text can't assess a roof, promise a price or tell a homeowner what insurance will cover. It buys you time and shows the homeowner you're organized. The inspection, the estimate and the conversation are still yours." },

  { kind: "h2", text: "Roofing software or a general CRM" },
  { kind: "p", text: "There are two broad options, and neither is right for everyone." },
  { kind: "h3", text: "Roofing-specific software" },
  { kind: "p", text: "Tools built for roofers usually include measurement reports, material ordering, crew scheduling, production tracking and job photos. If you run several crews and need that operational side, they can save a lot of work. The trade-off is that the sales side, meaning fast replies, follow-up and reviews, is sometimes thinner, and the price often grows per user." },
  { kind: "h3", text: "A general CRM set up for roofing" },
  { kind: "p", text: "A flexible CRM with texting, forms, pipelines and automation can do everything in the previous section. It won't measure a roof or order shingles, so it often sits next to the tools you already use for estimates and invoices. It suits businesses whose problem is losing leads, not running production." },
  { kind: "p", text: "Whichever you look at, check these before paying:" },
  { kind: "list", items: [
    "Can it text from your business number, and do replies land in the same thread?",
    "Can it trigger messages when a job changes stage, without a person pressing a button?",
    "Does it work properly on a phone, one-handed, on a roof?",
    "Can you export your contacts and history if you leave?",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. The right setup depends on how many crews you run, whether you do insurance work, the tools you already pay for and who will keep the system up to date." },

  { kind: "h2", text: "Get ready before storm season" },
  { kind: "p", text: "A CRM set up in the middle of a busy week gets abandoned. Set it up in a quiet month, in this order:" },
  { kind: "list", ordered: true, items: [
    [{ text: "Connect every way in:", bold: true }, " business phone, website form, ad forms and any directory that sends you leads, so nothing arrives outside the system."],
    [{ text: "Turn on the instant replies:", bold: true }, " missed call and new quote request first. They matter most when you're busiest."],
    [{ text: "Build the two pipelines:", bold: true }, " and move current open estimates into them so nothing starts life already lost."],
    [{ text: "Add the estimate follow-up:", bold: true }, " write the three messages in your own words."],
    [{ text: "Add the review request last:", bold: true }, " once jobs are flowing through to \"Completed\"."],
  ] },
  { kind: "p", text: "Then check it weekly: which requests waited longest for a reply, which estimates are past two weeks, and which sources brought signed jobs. Adjust one thing at a time." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Do I need a roofing CRM if I only run one crew?" },
  { kind: "p", text: "If you've ever lost track of an estimate or found a missed call too late, yes. A small operation often benefits most, because the person who would answer the phone is the same one on the roof." },
  { kind: "h3", text: "Can a CRM handle insurance claims?" },
  { kind: "p", text: "It can track the stage and the dates, and store photos and documents. It doesn't replace the homeowner's dealings with their insurer, and it shouldn't be used to promise what a policy covers." },
  { kind: "h3", text: "Will automatic texts annoy homeowners?" },
  { kind: "p", text: "Not if they're short, useful and stop when the person replies. Keep each one about the job, give an easy way to say no, and don't send more than three follow-ups on one estimate." },
  { kind: "h3", text: "How long does setup take?" },
  { kind: "p", text: "A first working version, with the instant replies and one pipeline, can run within days. Getting every stage, message and source right usually takes a few weeks of real use and small fixes." },
  { kind: "p", text: [
    "If you'd rather have this set up for you, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const roofingCrm: Post = {
  slug: "roofing-crm",
  title: "Roofing CRM: Storm Calls, Estimates and Reviews",
  description: "What a roofing CRM should track, from the storm-week call you missed to the estimate nobody chased, what to automate first and how to choose one.",
  lede: "Storm calls, open estimates and review requests, in one place your crew checks.",
  category: "CRM",
  published: "2026-09-30",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/roofing-crm.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
