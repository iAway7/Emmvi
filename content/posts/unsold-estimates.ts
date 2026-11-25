import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "unsold estimates". Profundiza la serie de estimate-follow-up-text, -email
 * y -call-script: no el seguimiento de un presupuesto vivo, sino la pila de
 * presupuestos que nunca tuvieron ni si ni no. Los requisitos de CAN-SPAM
 * (baja en 10 dias habiles, direccion postal) se comprobaron el dia de
 * publicacion en la guia de la FTC.
 */
const body: Post["body"] = [
  { kind: "p", text: "Every installer has a pile of them. The solar quote from September that got a \"looks great, let me talk to my wife\". The EV charger estimate that was opened twice and never answered. The bathroom remodel where the customer said they'd decide after the holidays, and nobody wrote down which holidays. None of these is a lost job yet. None of them is a won job either. They sit in a folder, an inbox or a notebook, and every week they get a little colder." },
  { kind: "p", text: [
    "This article is about that pile. Following up on a single fresh estimate is covered in ",
    { text: "quote follow-up", href: "/quote-follow-up/" },
    " and the text, email and call guides that sit next to it. Here the question is different: you have twenty or forty estimates that went quiet weeks or months ago. How do you find them, decide which ones are worth a message, get an answer on each, and stop the pile from building again?",
  ] },

  { kind: "h2", text: "What counts as an unsold estimate" },
  { kind: "p", text: "An unsold estimate is one the customer received and never answered with a yes or a no. That is the whole definition, and it matters because it excludes two things people often lump in." },
  { kind: "list", items: [
    [{ text: "Not a lost job.", bold: true }, " If the customer told you they went with someone else, or decided not to do the work, the estimate is lost. Record it as lost, with the reason, and stop following up."],
    [{ text: "Not a live quote.", bold: true }, " An estimate sent on Monday is still inside its normal follow-up sequence. It only joins the unsold pile once that sequence has finished without an answer."],
  ] },
  { kind: "p", text: "A practical line: once an estimate is past the last step of your follow-up (often day 14) with no reply, it's unsold. From there it needs a different kind of attention, slower and less frequent, but not none." },
  { kind: "h3", text: "Why they pile up" },
  { kind: "p", text: "Rarely because anyone decided to give up on them. More often the follow-up lived in one person's head, the busy season arrived, and new quote requests pushed old estimates off the list. A quote sent from the van at 6pm, with a promise to \"check back next week\", depends entirely on someone remembering next week." },

  { kind: "h2", text: "Pull the list in one place" },
  { kind: "p", text: "You can't work a pile you can't see. The first job is getting every unsold estimate into one list, whatever tool it ends up in. A spreadsheet is fine to start. A CRM is better, because the next steps can run from it." },
  { kind: "p", text: "Go through wherever estimates live today: the estimating tool, sent email, your texts, the paper pad in the truck. For each one, write down:" },
  { kind: "list", items: [
    [{ text: "Customer first name and how to reach them", bold: true }, " (phone, email, and which one they actually answered before)."],
    [{ text: "The job in their words", bold: true }, ": \"8 kW solar on the south roof\", not \"Quote #1042\"."],
    [{ text: "Amount", bold: true }, ", roughly. You need it to sort, not to the cent."],
    [{ text: "Date sent", bold: true }, " and date of the last contact from either side."],
    [{ text: "What they last said", bold: true }, ", if anything: \"waiting on the tax refund\", \"comparing two quotes\", \"after the kitchen is done\"."],
  ] },
  { kind: "p", text: [
    "That last column is the most useful one. It usually tells you what to say. If your estimates already sit in a ",
    { text: "sales pipeline", href: "/contractor-sales-pipeline/" },
    ", this step is a filter: everything in \"Quote sent\" older than your last follow-up step.",
  ] },

  { kind: "h2", text: "Sort before you send anything" },
  { kind: "p", text: "Sending the same message to the whole pile is the fastest way to waste it. Spend twenty minutes sorting first. Three questions are enough." },
  { kind: "h3", text: "How old is it?" },
  { kind: "list", items: [
    [{ text: "2 to 8 weeks", bold: true }, ": the customer still remembers you and the visit. A personal message works."],
    [{ text: "2 to 6 months", bold: true }, ": they may have done the job elsewhere, or the reason for waiting may have passed. Ask a direct question."],
    [{ text: "Over 6 months", bold: true }, ": prices and your schedule have probably changed. Treat it closer to a new lead and offer to re-quote rather than chase the old number."],
  ] },
  { kind: "h3", text: "How big is it?" },
  { kind: "p", text: "Bigger jobs earn a phone call. Smaller ones get a text or email. A battery and solar estimate is worth five minutes of your time on the phone. A single outlet move is worth one clear text." },
  { kind: "h3", text: "Did they give a reason?" },
  { kind: "p", text: "A customer who said \"after the holidays\" or \"once the HOA approves it\" told you when to come back. Those go first, timed to the reason. A customer who never said anything gets a simple question that's easy to answer." },
  { kind: "p", text: "Illustration: a pile of 30 unsold estimates might sort into 8 that get a call, 15 that get a text, and 7 that are over six months old and get a re-quote offer. That's an afternoon of work, spread over a week, not a campaign." },

  { kind: "h2", text: "What to send an unsold estimate" },
  { kind: "p", text: "The goal of the message is an answer, not a sale. A clear no is useful: it closes the estimate and tells you something. Make the message short, name the job, and ask one question the customer can answer in a word." },
  { kind: "h3", text: "For a recent estimate (2 to 8 weeks)" },
  { kind: "aside", text: "Hi Mark, it's Dana from Brightline Solar. Checking in on the estimate for the panels on the south roof. Are you still thinking about it, or did you decide to go another way? Either answer is fine, it just helps me plan the install calendar." },
  { kind: "h3", text: "For an older estimate (2 to 6 months)" },
  { kind: "aside", text: "Hi Priya, Dana from Brightline Solar here. Back in August you were looking at a home charger for the garage. Is that still on your list? If it is, I can check the price is still right and send a couple of install dates." },
  { kind: "h3", text: "When they gave a reason" },
  { kind: "p", text: "Use the reason. \"You mentioned waiting until the tax refund came in\" shows you listened, and it gives the customer an easy way to say where things are. Don't pretend the reason was yours to resolve: if it was the HOA, ask whether they heard back, nothing more." },
  { kind: "h3", text: "What not to send" },
  { kind: "list", items: [
    "A discount nobody asked for. It teaches customers that waiting lowers the price, and it changes the conversation from \"is this still on?\" to haggling.",
    "Fake urgency (\"prices go up Friday\") unless it's true and you can show why.",
    "Three messages in a week. One message, then a second one a week or two later if there's no answer, then stop.",
  ] },
  { kind: "p", text: [
    "If you send these by email in bulk, check the rules first. The FTC's ",
    { text: "CAN-SPAM compliance guide", href: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" },
    " says commercial email must include a valid physical postal address and a way to opt out, and that opt-out requests must be honored within 10 business days. A personal note about an estimate the customer asked for may count as transactional, but the guide says that category is read narrowly, so the simple choice is to include both anyway.",
  ] },
  { kind: "aside", tone: "tip", text: "Send from the same number or email address the estimate came from. A message from a number the customer has never seen looks like spam, and the reply lands in an inbox nobody is watching." },

  { kind: "h2", text: "Record why the job was lost" },
  { kind: "p", text: "Some customers will answer \"we went with someone else\" or \"we're not doing it this year\". Thank them, mark the estimate as lost, and write down the reason in a few words. This is the step most businesses skip, and it's the one that pays off later." },
  { kind: "p", text: "Keep the reasons to a short fixed list so you can count them:" },
  { kind: "list", items: [
    "Price",
    "Went with another installer",
    "Timing (not now, maybe later)",
    "Financing fell through",
    "Project cancelled",
    "No answer after the last attempt",
  ] },
  { kind: "p", text: [
    "After a few months the list tells you something. If most losses are \"price\", the estimate may need clearer options. If most are \"no answer\", the problem is follow-up, not price. Pair it with ",
    { text: "lead source tracking", href: "/lead-source-tracking/" },
    " and you can also see which channels bring customers who actually decide.",
  ] },
  { kind: "p", text: "\"Timing\" losses deserve a date. A customer who said \"next spring\" should get one message next spring, set as a reminder today. That's often the cheapest job you'll win all year." },

  { kind: "h2", text: "Stop the pile from growing" },
  { kind: "p", text: "Clearing the pile once feels good. It comes back unless the follow-up stops depending on memory. Three changes do most of the work." },
  { kind: "list", ordered: true, items: [
    [{ text: "Every estimate gets a status the day it's sent.", bold: true }, " \"Quote sent\" with a date, in one place everyone can see."],
    [{ text: "The follow-up sequence starts automatically.", bold: true }, " A text and an email on set days, with a call task for the bigger jobs. If the customer replies, the sequence stops."],
    [{ text: "Anything past the last step lands in an \"unsold\" view.", bold: true }, " Review it once a month, using the sorting above, so it never gets to forty again."],
  ] },
  { kind: "p", text: [
    "This is the kind of setup we build in ",
    { text: "GoHighLevel", href: "/services/gohighlevel-automation/" },
    ": the pipeline, the sequence, and the monthly unsold view, with the messages written in your words. Any decent CRM can do the same if you set it up with the same three rules.",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. How often to follow up, which channel to use and when to stop depend on your jobs, your customers and the rules where you work. Automation sends what you tell it to: it won't fix an estimate that's unclear or a price that's wrong." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How long should I follow up on an unsold estimate?" },
  { kind: "p", text: "Run your normal sequence (for example, day 2, day 7, day 14), then one or two slower messages over the following months. If there's still no answer after that, mark it lost with \"no answer\" and stop." },
  { kind: "h3", text: "Should I offer a discount to close old estimates?" },
  { kind: "p", text: "Usually not as the first step. Ask where things stand first. If the customer says price is the issue, you can then decide whether a smaller option or a different scope makes sense, which is a better conversation than a blanket discount." },
  { kind: "h3", text: "Is it worth re-quoting an estimate that's a year old?" },
  { kind: "p", text: "If the customer still wants the work, yes, but treat it as a new quote. Materials, incentives and your schedule have likely changed, and honoring an old number you can't stand behind causes more trouble than it saves." },
  { kind: "h3", text: "Can this be automated without sounding like a robot?" },
  { kind: "p", text: [
    "The timing and the reminders can be. The messages should be written by you, use the customer's first name and the job in plain words, and come from your normal number. If you'd like it set up for you, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const unsoldEstimates: Post = {
  slug: "unsold-estimates",
  title: "Unsold Estimates: How Installers Win Them Back",
  description: "What to do with unsold estimates: find the ones that went quiet, sort them by age and size, send one honest message, and record why the rest were lost.",
  lede: "The estimates that never got a yes or a no, and how to get an answer on each one.",
  category: "Automation",
  published: "2026-11-25",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/unsold-estimates.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
