import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "gohighlevel for contractors". Precios y funciones de HighLevel comprobados
 * en sus propias paginas el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "A homeowner fills in a solar quote request at 9pm. The next morning you are on a roof when an EV charger customer rings, and by lunch you have forgotten the battery quote you sent last week. Three different leaks, and the usual advice is to plug each one with a different app: one for texts, one for the pipeline, one for reviews." },
  { kind: "p", text: "GoHighLevel (the company now mostly calls itself HighLevel) is the tool many agencies and contractors use to put those pieces in one place. This article covers what it does for an installer, what it does not do, what it costs as of October 2026, and why the setup decides whether it helps or becomes one more login nobody opens." },
  { kind: "aside", text: "A note before we start: emmvi sets up HighLevel for clients. We have tried to write this the way we would explain it on a call, including the parts that put people off." },

  { kind: "h2", text: "What GoHighLevel actually is" },
  { kind: "p", text: "HighLevel is a sales and marketing platform. It was built for marketing agencies, which explains most of what follows: it is very flexible, it can run many businesses from one account, and it arrives almost empty, because the agency is expected to build what each client needs." },
  { kind: "p", text: "For a contractor, the useful parts sit in one place:" },
  { kind: "list", items: [
    [{ text: "A contact list and pipelines,", bold: true }, " so every quote request is a card that moves through stages you define, from \"New\" to \"Quote sent\" to \"Won\"."],
    [{ text: "One inbox for conversations,", bold: true }, " where texts, emails and website chat from the same customer appear in one thread."],
    [{ text: "Workflows,", bold: true }, " the automation part: when something happens (a form is sent, a call is missed, a card changes stage), the system sends a message, waits, checks, and sends the next one."],
    [{ text: "Forms, calendars and simple websites,", bold: true }, " so the quote request and the booking land straight in the same contact record."],
    [{ text: "Review requests,", bold: true }, " sent by text or email when a job is done."],
  ] },
  { kind: "p", text: "None of these is unique. Plenty of CRMs have pipelines and plenty of texting tools have templates. What HighLevel offers is having them talk to each other without stitching three subscriptions together." },

  { kind: "h2", text: "What it does for an installer" },
  { kind: "p", text: "The value is not in the feature list. It is in a few specific moments of an installer's week, where something used to depend on you remembering it." },
  { kind: "h3", text: "The 9pm quote request" },
  { kind: "p", text: "The form on your website creates a contact and a card in \"New\". A workflow texts the homeowner within the minute, confirms you have their details and asks the one question you need answered before you call. You see it in the morning with a reply already in the thread. The first answer went out while the person was still holding their phone." },
  { kind: "h3", text: "The missed call on a roof" },
  { kind: "p", text: [
    "If your business number runs through HighLevel, a missed call can trigger a text to the caller: \"Sorry we missed you, we're on a job. What can we help with?\" If they reply, the conversation is waiting when you climb down. We cover the wording and the limits in ",
    { text: "how missed call text back works", href: "/missed-call-text-back/" },
    ".",
  ] },
  { kind: "h3", text: "The quote nobody chased" },
  { kind: "p", text: [
    "When a card moves to \"Quote sent\", a workflow can schedule two or three follow-ups over the next couple of weeks and stop the moment the customer replies or the card moves on. Nobody has to keep a list. The timing and wording are covered in ",
    { text: "our guide to quote follow-up", href: "/quote-follow-up/" },
    ".",
  ] },
  { kind: "h3", text: "The job that never got a review" },
  { kind: "p", text: [
    "Marking a job as complete can send a review request. HighLevel's help article on ",
    { text: "sending review requests", href: "https://help.gohighlevel.com/support/solutions/articles/48001222668-how-to-send-review-requests" },
    " describes a \"Send Review Request\" workflow action by email or SMS (as of October 2026). The same rules about who you ask and what you offer still apply, and they are in ",
    { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" },
    ".",
  ] },

  { kind: "h2", text: "What it doesn't do" },
  { kind: "p", text: "This is the part that sales pages tend to skip, and it decides whether the tool fits you." },
  { kind: "list", items: [
    [{ text: "It is not field-service software.", bold: true }, " It is built around winning the job, not running it. If you need a dispatch board, technician job sheets, parts and stock, or job costing, you will still want job management software for that side, with the two connected or kept clearly separate."],
    [{ text: "It does not answer the customer for you in any meaningful way.", bold: true }, " Automatic texts buy you time and stop people drifting away. The real answer, the price and the site visit still come from someone who knows the work."],
    [{ text: "It does not make leads.", bold: true }, " It catches and follows up the requests you already get. If the phone is quiet, the problem is somewhere else."],
    [{ text: "It does not set itself up.", bold: true }, " This one gets its own section below."],
  ] },

  { kind: "h2", text: "What it costs, as of October 2026" },
  { kind: "p", text: [
    "HighLevel's ",
    { text: "pricing page", href: "https://www.gohighlevel.com/pricing" },
    " lists three public plans as of October 2026: Starter at $97 a month, Unlimited at $297 a month and Agency Pro at $497 a month, with a 14-day free trial on each. A single contractor running their own business would normally look at Starter; the higher plans are aimed at agencies running many client accounts.",
  ] },
  { kind: "h3", text: "The usage charges on top" },
  { kind: "p", text: [
    "Texts and calls are not included in the plan price. They are charged as you use them, from a wallet that tops itself up when the balance drops below a threshold. HighLevel's ",
    { text: "LC Phone pricing and billing guide", href: "https://help.gohighlevel.com/en/support/solutions/articles/48001223556" },
    " lists a US local number at $1.15 a month (as of October 2026), plus per-message and per-minute rates and the fees for registering your business for texting with US carriers (known as A2P 10DLC). Those registration steps take time, so plan for them before you rely on automatic texts.",
  ] },
  { kind: "p", text: "Illustration: a plan, one local number and your monthly texts and calls add up to the software cost. The setup is a separate cost, either your own time or someone else's, and for most contractors it is the bigger one in the first month." },

  { kind: "h2", text: "The blank account problem" },
  { kind: "p", text: "A new HighLevel account has no pipeline that matches your jobs, no workflows, no message wording and no form on your site. Everything in the earlier sections has to be built and tested. That is the most common reason contractors sign up, poke around for an afternoon and stop paying a few months later." },
  { kind: "h3", text: "What a working setup includes" },
  { kind: "list", ordered: true, items: [
    [{ text: "Your number and your forms connected,", bold: true }, " so every call, text and quote request lands in the same place."],
    [{ text: "A pipeline with your real stages,", bold: true }, " usually five or six, named the way you talk about jobs."],
    [{ text: "Three or four workflows,", bold: true }, " not thirty: first reply, missed call, quote follow-up and review request. Each one tested with a real phone before it goes live."],
    [{ text: "Wording that sounds like you,", bold: true }, " read out loud as if you were the homeowner."],
    [{ text: "One habit from your side:", bold: true }, " moving the card when something changes. Automations hang on stage changes, so a pipeline nobody updates sends nothing."],
  ] },
  { kind: "aside", tone: "tip", text: "Before paying anyone to build a setup, text and call your own business number from a different phone, and fill in your own quote request form. Write down what happens in the first ten minutes. That list is your brief." },
  { kind: "h3", text: "Doing it yourself or getting help" },
  { kind: "p", text: "You can build it yourself during the trial if you are comfortable with tools like this and can set aside a few evenings. HighLevel also has prebuilt templates (it calls them snapshots), sold by agencies and freelancers for different trades. A template saves building time, but it was written for someone else's business, so the stages and the messages still need to be changed to match yours." },

  { kind: "h2", text: "Is it right for your business?" },
  { kind: "p", text: "It tends to fit when quote requests arrive from several places (website, calls, ads, referrals), when jobs are worth enough that losing one to a slow reply hurts, and when there is someone who will keep the pipeline current. It tends not to fit when you get a handful of requests a month that you can answer by hand, or when what you really need is scheduling and invoicing for jobs you already have." },
  { kind: "p", text: [
    "If you are comparing it with other options, our ",
    { text: "guide to CRM for contractors", href: "/crm-for-contractors/" },
    " covers what to look for regardless of the brand.",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. Prices and features change, so check them on HighLevel's own pages before you sign up, and check what the software you already pay for can do first." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Is GoHighLevel a CRM?" },
  { kind: "p", text: "Yes, among other things. It has contacts, pipelines and a shared inbox, plus the automation, forms, calendars and review requests that a basic CRM usually lacks." },
  { kind: "h3", text: "Can I use my existing business phone number?" },
  { kind: "p", text: "Often you can move it into HighLevel, or keep it and forward calls to a HighLevel number. Moving a number takes some time and paperwork with your current provider, so check before you plan a switch date." },
  { kind: "h3", text: "Does it replace my job management software?" },
  { kind: "p", text: "Usually not. It is strongest before the job is won. Scheduling crews, job sheets and parts are better handled by software built for that." },
  { kind: "h3", text: "How long does setup take?" },
  { kind: "p", text: "The building itself can be done in days. Texting registration with US carriers and moving a phone number can take longer, and they are often what decides the start date." },
  { kind: "p", text: [
    "If you would rather have the setup built, tested and run for you, see ",
    { text: "how emmvi handles GoHighLevel automation", href: "/services/gohighlevel-automation/" },
    " or ",
    { text: "get in touch", href: "/contact-us/" },
    ".",
  ] },
];

export const gohighlevelForContractors: Post = {
  slug: "gohighlevel-for-contractors",
  title: "GoHighLevel for Contractors: What It Does and Costs",
  description: "What GoHighLevel does for contractors and installers, what it doesn't do, what it costs as of October 2026, and why the setup decides if it works.",
  lede: "One place for replies, follow-up and reviews. It arrives empty, and that matters.",
  category: "CRM",
  published: "2026-10-19",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/gohighlevel-for-contractors.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
