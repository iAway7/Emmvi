import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "remodeling crm". La pagina de la FTC citada se comprobo en la fuente el
 * dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's 9pm on a Sunday. A couple has spent the evening looking at kitchen photos, and one of them fills in the form on your website: \"Thinking about redoing the kitchen next spring, roughly 12 by 14, would love a ballpark.\" You see it Monday at lunch, between a tile delivery and a call from the plumber. By Wednesday you've meant to reply three times." },
  { kind: "p", text: "Remodeling has the longest gap of any trade between the first message and the signed contract. That gap is where jobs disappear. This article covers what a remodeling CRM should track, where remodeling leads go quiet, how to set up the pipeline, what to automate and how to choose a system." },

  { kind: "h2", text: "What a remodeling CRM is for" },
  { kind: "p", text: "A CRM (customer relationship management system) keeps one record per customer and per project, with every call, form, text, email, photo and note attached, plus what happened last and what should happen next. For a remodeler, that record also has to hold the things a project collects over months: measurements, photos of the existing room, the design ideas the customer sent, the selections they made and the version of the estimate they are looking at." },
  { kind: "p", text: "The test is whether you can answer these questions in a minute, from your phone, without asking anyone:" },
  { kind: "list", items: [
    [{ text: "Who is waiting for a reply?", bold: true }, " Every form, call, voicemail and text that hasn't had an answer from a person."],
    [{ text: "Which estimates are out?", bold: true }, " Priced, sent, and still without a yes or a no, with the date each went out."],
    [{ text: "What did we promise, and when?", bold: true }, " Site visits, design meetings, revised numbers, a call back after the customer talks to their bank."],
    [{ text: "Where do signed projects come from?", bold: true }, " Referrals, past customers, the website, ads, a home show. Signed contracts, not just calls."],
  ] },
  { kind: "p", text: "If the system can't answer those, it's a contact list with a monthly fee." },

  { kind: "h2", text: "Where remodeling jobs go quiet" },
  { kind: "h3", text: "The first reply comes too late" },
  { kind: "p", text: [
    "Remodeling requests often arrive in the evening and at weekends, when homeowners have time to think about the house. The reply arrives on a weekday, after site work. By then the homeowner may have filled in two other forms. Why the first minutes matter, and how to cover them, is in ",
    { text: "speed to lead", href: "/speed-to-lead/" },
    ".",
  ] },
  { kind: "h3", text: "Homeowners compare, and they're told to" },
  { kind: "p", text: [
    "The FTC's advice on ",
    { text: "avoiding home improvement scams", href: "https://consumer.ftc.gov/articles/how-avoid-home-improvement-scam" },
    " tells homeowners a written estimate should cover the work, materials, completion date and price, and adds: \"Don't automatically choose the lowest bidder.\" So your estimate sits next to others, read by someone checking who seems reliable. The remodeler who replies clearly and keeps every promise about dates usually looks like the safer choice. It doesn't win every job, but going quiet after sending a number rarely helps.",
  ] },
  { kind: "h3", text: "The decision takes weeks or months" },
  { kind: "p", text: "A kitchen or a bathroom is a big purchase. The customer may be waiting on financing, a second estimate, a partner who travels, or simply the end of the school year. Most lost estimates are not a no. They are a maybe that nobody asked about again." },
  { kind: "h3", text: "Details live in too many places" },
  { kind: "p", text: "The measurements are in a notebook, the photos in your camera roll, the tile choice in a text thread and the revised price in an email. When the customer calls back six weeks later, you spend ten minutes finding where you left off, or you guess." },

  { kind: "h2", text: "Pipeline stages for remodelers" },
  { kind: "p", text: [
    "A pipeline is the list of stages a project moves through. Name each stage after something that happened, not something you hope for, so anyone can tell where a job really is. A fuller walk-through is in ",
    { text: "contractor sales pipeline", href: "/contractor-sales-pipeline/" },
    ". For most remodelers, these stages are enough:",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "New request:", bold: true }, " a form, call, text or referral has arrived. Nobody has spoken to them yet."],
    [{ text: "Visit booked:", bold: true }, " a site visit or design meeting is in the calendar and confirmed with the homeowner."],
    [{ text: "Estimate sent:", bold: true }, " the number is with the customer. This is the stage where projects stall."],
    [{ text: "Revising:", bold: true }, " the customer asked for changes, a cheaper option or a different scope. Record what changed and when the new version is due."],
    [{ text: "Signed:", bold: true }, " contract agreed, deposit terms set, a start window to confirm."],
    [{ text: "In progress:", bold: true }, " the job is running. Keep updates and photos on the same record."],
    [{ text: "Completed:", bold: true }, " final walkthrough done. The trigger for the thank you and the review request."],
  ] },
  { kind: "p", text: "Add a \"Lost\" outcome with a short reason: price, timing, financing, chose someone else, no reply. After a year, those reasons tell you whether your estimates, your speed or your follow-up is the weak point." },
  { kind: "aside", tone: "tip", text: "Make the date the estimate went out a field on the record, not something you remember. A filter for \"estimate sent more than 14 days ago, no reply\" turns into your Monday call list in seconds." },
  { kind: "h3", text: "Keep small jobs separate" },
  { kind: "p", text: "If you also take repairs and handyman work, give them a shorter pipeline of their own: request, scheduled, done. Mixing a two-hour door repair with a six-week kitchen makes both lists harder to read." },

  { kind: "h2", text: "What to automate, and what not" },
  { kind: "p", text: "A CRM that only stores information depends on someone opening it at the end of a long day. The useful part is what happens on its own when a project enters or leaves a stage." },
  { kind: "list", items: [
    [{ text: "New request:", bold: true }, " an instant reply by text and email confirming you got it, asking two or three questions (which room, rough timing, photos if they have them) and offering times for a visit."],
    [{ text: "Missed call:", bold: true }, " a text within a minute saying you're on a job site and when you'll call back. How that works is in ", { text: "missed call text back", href: "/missed-call-text-back/" }, "."],
    [{ text: "Visit booked:", bold: true }, " a reminder the day before with the time and who is coming."],
    [{ text: "Estimate sent:", bold: true }, " a short follow-up sequence, for example after three days, ten days and three weeks, that stops the moment the customer replies. Wording and timing are covered in ", { text: "quote follow up", href: "/quote-follow-up/" }, "."],
    [{ text: "Completed:", bold: true }, " a thank you and a review request a few days after the walkthrough. More in ", { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" }, "."],
  ] },
  { kind: "p", text: "The first follow-up on a kitchen estimate can be this plain:" },
  { kind: "aside", text: "Hi Claire, it's Dan from the remodeling company. Just checking the kitchen estimate reached you. If anything in it isn't clear, or you'd like a version with a different countertop, reply here and I'll sort it. If you've decided to wait or go another way, that's fine too." },
  { kind: "p", text: "Remodeling follow-ups can be spaced further apart than a repair quote, because the decision is slower. Three messages over three or four weeks is a reasonable start. After that, a project that's still undecided can move to a slower list with a check-in every few months, so a \"next spring\" kitchen doesn't get forgotten until next spring." },
  { kind: "p", text: "Illustration: a remodeler who sends eight estimates a week and follows each up three times needs 24 messages a week, each on the right day, typed between site visits. The software doesn't write better messages than you do. It sends them on the day they're due, which is the part that slips." },
  { kind: "h3", text: "What stays with a person" },
  { kind: "p", text: "An automatic message can't walk a room, price a structural change or tell a customer what fits their budget. It can't negotiate a revised scope either. Automation buys time and shows the customer you're organized. The visit, the estimate and the conversation are still yours." },

  { kind: "h2", text: "Remodeling software or a general CRM" },
  { kind: "p", text: "There are two broad routes, and neither is right for everyone." },
  { kind: "h3", text: "Software built for remodelers" },
  { kind: "p", text: "Tools made for remodeling and construction often include estimating, selections, change orders, scheduling, budgets and a customer portal. If you run several projects at once with crews and subcontractors, that operational side can save real time. The sales side, meaning fast replies, follow-up and review requests, is sometimes thinner, and pricing often grows with each user." },
  { kind: "h3", text: "A general CRM set up for remodeling" },
  { kind: "p", text: [
    "A flexible CRM with texting, forms, pipelines and automation can do everything in the previous section. It won't manage selections or a project budget, so it often sits next to the estimating and accounting tools you already use. It suits businesses whose problem is losing leads and estimates, not running production. GoHighLevel is one option of this kind, and what emmvi sets up with it is described on the ",
    { text: "GoHighLevel automation page", href: "/services/gohighlevel-automation/" },
    ".",
  ] },
  { kind: "p", text: "Whichever you look at, check these before paying:" },
  { kind: "list", items: [
    "Can it text from your business number, with replies in the same thread as emails and notes?",
    "Can it send messages automatically when a project changes stage?",
    "Can you attach photos and files to the project, not just to a message?",
    "Does it work properly on a phone, in a house with dust on your hands?",
    "Can you export your contacts and history if you leave?",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. The right setup depends on how many projects you run at once, whether you work with subcontractors, the tools you already pay for and who will keep the system up to date." },

  { kind: "h2", text: "Setting it up in the right order" },
  { kind: "p", text: "A CRM that tries to do everything on day one usually gets abandoned by week three. This order works for most remodelers:" },
  { kind: "list", ordered: true, items: [
    [{ text: "Connect every way in:", bold: true }, " business phone, website form, ad forms and any directory that sends you leads, so nothing arrives outside the system."],
    [{ text: "Turn on the instant replies:", bold: true }, " new request and missed call first. They cover evenings, weekends and site work."],
    [{ text: "Move open estimates in:", bold: true }, " every estimate sent in the last two or three months goes into \"Estimate sent\" with its date, so the follow-up starts from where things really are."],
    [{ text: "Write the follow-ups:", bold: true }, " three messages in your own words, about the project, with an easy way to say no."],
    [{ text: "Add the review request:", bold: true }, " once projects are reaching \"Completed\"."],
  ] },
  { kind: "p", text: "Then look at it once a week: which requests waited longest for a reply, which estimates are past two weeks without an answer, and which sources brought signed projects. Change one thing at a time." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Is a CRM worth it for a small remodeling business?" },
  { kind: "p", text: "If you've ever found an old form you never answered or an estimate you forgot to chase, yes. Smaller businesses often gain the most, because the person who would reply is the same one running the job." },
  { kind: "h3", text: "Can a CRM handle change orders and selections?" },
  { kind: "p", text: "A general CRM can store the documents and track the dates, but it isn't built to price change orders or manage selections. If that's your main pain, look at remodeling-specific software, or use both side by side." },
  { kind: "h3", text: "How many times should I follow up on a remodeling estimate?" },
  { kind: "p", text: "Three times over three or four weeks is a sensible start, then a check-in every few months if the customer said they're not ready yet. Stop as soon as they reply, yes or no." },
  { kind: "h3", text: "How long does setup take?" },
  { kind: "p", text: "A first working version, with instant replies and one pipeline, can run within days. Getting stages, messages and sources right usually takes a few weeks of real use and small fixes." },
  { kind: "p", text: [
    "If you'd rather have this set up for you, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const remodelingCrm: Post = {
  slug: "remodeling-crm",
  title: "Remodeling CRM: From First Request to Signed Job",
  description: "What a remodeling CRM should track, where kitchen and bath estimates go quiet, which pipeline stages fit, what to automate and how to choose one.",
  lede: "Requests, site visits and estimates that take weeks, in one place you check.",
  category: "CRM",
  published: "2026-10-11",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/remodeling-crm.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
