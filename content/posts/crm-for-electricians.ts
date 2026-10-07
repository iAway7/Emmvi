import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "crm for electricians". La pagina del Alternative Fuels Data Center (DOE)
 * citada se comprobo en la fuente el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's 8:40pm and you're finishing the paperwork from a panel swap. On your phone: a missed call from someone with half the kitchen outlets dead, a website form from Ana asking what a charger in her garage would cost, and a text from a builder you quoted three weeks ago asking whether the price still stands. Each one is a job. By the time you get to them tomorrow, at least one will have called someone else." },
  { kind: "p", text: "Electrical work mixes small urgent calls with bigger quoted jobs that wait on photos, permits and inspections. This article covers what a CRM for electricians should track, the pipelines that fit that mix, what to automate first and how to choose a system without paying for features you won't use." },

  { kind: "h2", text: "What an electrician CRM is for" },
  { kind: "p", text: "A CRM (customer relationship management system) keeps one record per customer and per property, with every call, form, text, photo and quote attached, plus what has happened and what should happen next. For an electrician, the property record matters as much as the person: the panel, its capacity, past work and anything you noticed on the last visit." },
  { kind: "p", text: "Day to day, it should answer four questions without you scrolling through your phone:" },
  { kind: "list", items: [
    [{ text: "Who contacted us and hasn't heard back?", bold: true }, " Every missed call, voicemail, form and text still waiting for a person."],
    [{ text: "Which quotes are out and undecided?", bold: true }, " Priced, sent, and still without a yes or a no."],
    [{ text: "Which jobs are waiting on someone else?", bold: true }, " A permit, an inspection, the utility, or the customer's photos."],
    [{ text: "Where did the paid jobs come from?", bold: true }, " Which ads, referrals, builders and directories turned into invoices, not just calls."],
  ] },
  { kind: "p", text: "If a system can't answer those, it's an address book with a monthly fee." },

  { kind: "h2", text: "Where electrical jobs slip away" },
  { kind: "h3", text: "Urgent calls go to whoever answers" },
  { kind: "p", text: [
    "A tripped breaker that won't reset or a room with no power is not a call people leave on voicemail and wait about. They try the next number on the list. When you're in a crawl space or on a ladder, the phone rings out, and the job goes to the electrician who picked up or texted back first. Why those first minutes matter is covered in ",
    { text: "speed to lead", href: "/speed-to-lead/" },
    ".",
  ] },
  { kind: "h3", text: "Quotes need information you don't have yet" },
  { kind: "p", text: [
    "An EV charger, a panel upgrade or a subpanel for a workshop can't be priced from \"how much for a charger?\". You need to know what the panel looks like, how far the run is and whether there is spare capacity. The Department of Energy's ",
    { text: "page on charging at home", href: "https://afdc.energy.gov/fuels/electricity-charging-home" },
    " says it plainly: \"Some homes might have insufficient electric capacity for Level 2 equipment.\" So the first reply has a second job. Besides confirming you got the request, it should ask for what you need to quote, usually a photo of the panel and where the charger will go. Without that, the request sits in your inbox until you have time to call, and the customer keeps shopping.",
  ] },
  { kind: "h3", text: "The job waits on other people" },
  { kind: "p", text: [
    "The same DOE page notes that \"Appropriate permits may be required\" for charging equipment, and in many areas a plan has to be approved before installation. Panel upgrades often add the utility to the list. Every step that waits on someone else is a step where the customer hears nothing, wonders what is happening, and sometimes cancels. A CRM can't speed up a permit office, but it can make sure the customer knows the job is waiting on one.",
  ] },
  { kind: "h2", text: "Pipelines that fit electrical work" },
  { kind: "p", text: "A pipeline is the list of stages a job moves through. Keep the stages close to how the work actually happens: too few and you can't see where jobs stall, too many and nobody updates them. Most electrical businesses need two." },
  { kind: "h3", text: "Service calls" },
  { kind: "list", ordered: true, items: [
    [{ text: "New request:", bold: true }, " a call, missed call, form or text has arrived. The clock is running."],
    [{ text: "Booked:", bold: true }, " a visit is scheduled and confirmed with the customer, with the address and the problem on the record."],
    [{ text: "Done:", bold: true }, " fixed and invoiced. Notes and photos go on the property."],
  ] },
  { kind: "h3", text: "Quoted installs" },
  { kind: "list", ordered: true, items: [
    [{ text: "Quote request:", bold: true }, " a charger, panel upgrade, rewire, lighting job or anything you price before doing."],
    [{ text: "Waiting on details:", bold: true }, " you've asked for photos or a site visit. This stage exists so requests don't stall silently."],
    [{ text: "Quote sent:", bold: true }, " the price is with the customer. This is where most jobs go quiet."],
    [{ text: "Permit and utility:", bold: true }, " optional, for jobs that need them. Track the dates you depend on."],
    [{ text: "Scheduled:", bold: true }, " a date is set and the customer has confirmed it."],
    [{ text: "Completed:", bold: true }, " inspected where needed, invoiced, and the trigger for the thank you and review request."],
  ] },
  { kind: "p", text: "Add a \"Lost\" outcome with a short reason: price, timing, went elsewhere, no reply, not possible on this panel. After a few months, those reasons tell you more about your quotes than any report." },
  { kind: "aside", tone: "tip", text: "Make the panel photo part of the property record, not just the message thread. When the same customer asks about a hot tub or a heat pump a year later, you already know what you're working with." },
  { kind: "h3", text: "Record the source when the request arrives" },
  { kind: "p", text: [
    "Every request should carry where it came from: a specific ad, a directory, a builder, a referral, a past customer. A tracking number per ad and a hidden field on the website form fill this in without anyone typing it. How to set that up is in ",
    { text: "lead source tracking", href: "/lead-source-tracking/" },
    ".",
  ] },

  { kind: "h2", text: "What to automate first" },
  { kind: "p", text: "A CRM that only stores information depends on someone opening it, and on a busy day nobody does. The useful part is what happens on its own when a request arrives or a job changes stage." },
  { kind: "list", items: [
    [{ text: "Missed call:", bold: true }, " a text within a minute saying you're on a job, asking what the problem is and the address, and when you'll call back. The details are in ", { text: "how missed call text back works", href: "/missed-call-text-back/" }, "."],
    [{ text: "New quote request:", bold: true }, " an instant reply that confirms you got it and asks for the photos you need to price it, at 9pm as easily as at 9am."],
    [{ text: "Quote sent:", bold: true }, " a short sequence of follow-ups, for example after two days, a week and two weeks, that stops as soon as the customer replies. Timing and wording are in ", { text: "how to follow up on a quote", href: "/quote-follow-up/" }, "."],
    [{ text: "Waiting on a permit:", bold: true }, " a short update to the customer when the stage changes, so silence doesn't read as being forgotten."],
    [{ text: "Job completed:", bold: true }, " a thank you and a review request a day later, while the new circuit or charger is still the newest thing in the house."],
  ] },
  { kind: "p", text: "The first reply to a charger request can be this plain:" },
  { kind: "aside", text: "Hi Ana, thanks for asking about a charger. To give you a price, could you reply with a photo of your electrical panel with the door open, and one of where you'd like the charger? We'll get back to you with a quote or a time to visit." },
  { kind: "p", text: "Illustration: an electrician who sends 8 quotes a week and follows each up three times needs 24 messages a week, typed between jobs, every week. The software doesn't write better messages than you do. It sends them on the day they're due, which is the part that slips." },
  { kind: "h3", text: "What automation can't do" },
  { kind: "p", text: "An automatic text can't judge whether a panel can take a charger, quote a price or tell anyone their wiring is safe. It buys you time. The assessment, the price and the work are still yours." },

  { kind: "h2", text: "Field software or a general CRM" },
  { kind: "p", text: "There are two broad options, and neither is right for every business." },
  { kind: "h3", text: "Field service software" },
  { kind: "p", text: "Tools built for trades usually cover dispatch, job sheets, price books, invoicing and technician apps. If you run several vans and the problem is organizing the work you've already won, they can save a lot of time. The trade-off is that the sales side, meaning fast replies, quote follow-up and reviews, is sometimes thinner, and prices often grow per user." },
  { kind: "h3", text: "A general CRM set up for electrical work" },
  { kind: "p", text: [
    "A flexible CRM with texting, forms, pipelines and automation can do everything in the previous section. It won't replace a price book or a job sheet, so it often sits next to the tools you already use for invoicing. It suits businesses whose problem is losing requests before they become jobs. If you also take on general contracting work, the wider view is in ",
    { text: "CRM for contractors", href: "/crm-for-contractors/" },
    ".",
  ] },
  { kind: "p", text: "Whichever you look at, check these before paying:" },
  { kind: "list", items: [
    "Can it text from your business number, with photos, and keep replies in the same thread?",
    "Can it send messages when a job changes stage, without someone pressing a button?",
    "Does it work properly on a phone, with one hand, from a basement?",
    "Can you export your contacts and history if you leave?",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. The right setup depends on how many people answer the phone, how much of your work is quoted, the tools you already pay for and who will keep the system up to date." },

  { kind: "h2", text: "Setting it up without stopping work" },
  { kind: "p", text: "A system set up in the middle of a busy week gets abandoned. Do it in this order:" },
  { kind: "list", ordered: true, items: [
    [{ text: "Connect every way in:", bold: true }, " business phone, website form, ad forms and directories, so nothing arrives outside the system."],
    [{ text: "Turn on the two instant replies:", bold: true }, " missed call and new quote request, including the photo ask."],
    [{ text: "Build the two pipelines:", bold: true }, " and move today's open quotes into them, so nothing starts life already lost."],
    [{ text: "Add the quote follow-up:", bold: true }, " three messages in your own words."],
    [{ text: "Add the review request last:", bold: true }, " once jobs are reaching \"Completed\"."],
  ] },
  { kind: "p", text: "Then look at it once a week: which requests waited longest for a reply, which quotes are older than two weeks, and which sources brought paid jobs." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Do I need a CRM if I work alone?" },
  { kind: "p", text: "If you've ever lost track of a quote or found a missed call too late, yes. A one-person business often benefits most, because the person who would answer the phone is the one holding the screwdriver." },
  { kind: "h3", text: "Can customers send photos by text into the CRM?" },
  { kind: "p", text: "Most CRMs with business texting accept picture messages and keep them in the conversation. Check it with a real photo during any trial, from both iPhone and Android, before relying on it for quotes." },
  { kind: "h3", text: "Will automatic texts annoy customers?" },
  { kind: "p", text: "Not if they're short, useful and stop when the person replies. Keep each one about the job, make it easy to say no, and don't send more than three follow-ups on one quote." },
  { kind: "h3", text: "How long does setup take?" },
  { kind: "p", text: "A first working version, with the instant replies and one pipeline, can run within days. Getting every stage and message right usually takes a few weeks of real use and small fixes." },
  { kind: "p", text: [
    "If you'd rather have this set up for you, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const crmForElectricians: Post = {
  slug: "crm-for-electricians",
  title: "CRM for Electricians: Service Calls, Chargers, Quotes",
  description: "What a CRM for electricians should track, from the missed call on a job to the charger quote waiting on a panel photo, and what to automate first.",
  lede: "Missed calls, charger quotes and permits, tracked in one place you'll check.",
  category: "CRM",
  published: "2026-10-07",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/crm-for-electricians.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
