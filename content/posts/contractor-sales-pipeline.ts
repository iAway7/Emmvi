import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "contractor sales pipeline". Sin cifras externas: el unico numero es una
 * ilustracion marcada como tal.
 */
const body: Post["body"] = [
  { kind: "p", text: "Ask most installers how many quotes they have open and the answer is a guess. Some are in the quoting tool, some in a notebook in the van, a few in the texts on one phone. The work is good, the prices are fair, and jobs still slip away because nobody can see, at a glance, which customers are waiting on a reply and which ones you are waiting on." },
  { kind: "p", text: "A sales pipeline fixes that by putting every job you might win in one row of columns, from the first quote request to signed or lost. This article covers the stages that fit an installer or home-service business, what should move a job from one stage to the next, where jobs usually get stuck, and what is worth automating." },

  { kind: "h2", text: "What a sales pipeline is for" },
  { kind: "p", text: "A pipeline is a list of open jobs sorted by how far along they are. That's all. It is not a forecast, a report for investors or a piece of software you have to learn. Its job is to answer three questions every morning:" },
  { kind: "list", items: [
    "Who asked for something and hasn't heard back yet?",
    "Which quotes are out, and how long have they been out?",
    "Which jobs are waiting on me, and which are waiting on the customer?",
  ] },
  { kind: "p", text: "If you can answer those in under a minute, the pipeline works, whether it lives in a CRM, a spreadsheet or a whiteboard in the office. If you have to scroll through your phone to answer them, jobs are falling through, and you only find out when a customer tells you they went with someone else." },
  { kind: "h3", text: "Why installers need one more than most" },
  { kind: "p", text: "A solar, heat pump or EV charger job has several steps before anyone signs: the first contact, a site visit or a remote survey, a quote, often a revised quote, sometimes a finance check or a wait for a grant. Each step is a place where the job can stall. A plumber fixing a leak today barely needs a pipeline. An installer quoting a job worth weeks of work does." },

  { kind: "h2", text: "Stages that fit an installer" },
  { kind: "p", text: "Generic sales software often ships with stages like \"Prospecting\" and \"Negotiation\" that don't match how a home-service job actually moves. Name the stages after things that happen in your business. For most installers, six or seven are enough:" },
  { kind: "list", ordered: true, items: [
    [{ text: "New quote request.", bold: true }, " Someone filled in the form, called or messaged. Nobody has spoken to them properly yet."],
    [{ text: "Contacted.", bold: true }, " You've replied, asked the basic questions and know whether the job is a fit."],
    [{ text: "Visit booked.", bold: true }, " A site visit or survey has a date. For jobs quoted from photos, this can be \"Photos received\"."],
    [{ text: "Quote sent.", bold: true }, " The price is with the customer. This is where most jobs wait the longest."],
    [{ text: "Decision pending.", bold: true }, " The customer has replied and is checking finance, a partner's opinion or a grant. Optional, but useful for big jobs."],
    [{ text: "Won.", bold: true }, " Signed, deposit paid or a start date agreed. Whichever you use, be consistent."],
    [{ text: "Lost.", bold: true }, " With one word for the reason: price, timing, went elsewhere, no reply, not a fit."],
  ] },
  { kind: "aside", tone: "tip", text: "Name every stage after something that has already happened, like \"Visit booked\" or \"Quote sent\", never after something you hope for, like \"Hot lead\" or \"Likely to close\". Facts are easy to agree on. Feelings make the pipeline look healthier than it is." },
  { kind: "h3", text: "Keep it short" },
  { kind: "p", text: "Every extra stage is one more thing someone has to update. If a stage never changes what you do next, merge it with its neighbor. A pipeline with fifteen columns usually ends up with half of them empty and the other half out of date." },

  { kind: "h2", text: "What moves a job forward" },
  { kind: "p", text: "A pipeline is only useful if a job's position is true. The simplest way to keep it true is to agree on exactly what event moves a card from one column to the next, and to write it down where everyone can see it." },
  { kind: "list", items: [
    [{ text: "New to Contacted:", bold: true }, " a real conversation, by phone or message, where you learned what the customer wants. An automatic \"we got your request\" text doesn't count."],
    [{ text: "Contacted to Visit booked:", bold: true }, " a date and time the customer has confirmed."],
    [{ text: "Visit booked to Quote sent:", bold: true }, " the quote has left your system and you know it arrived (an email that bounced is not a quote sent)."],
    [{ text: "Quote sent to Won or Lost:", bold: true }, " a clear yes, a clear no, or the end of your follow-up with no reply."],
  ] },
  { kind: "p", text: "Think of a Tuesday. A solar quote request lands at 9pm while you're eating. Your website sends an instant reply saying it arrived and when you'll call, and the card appears in New. Wednesday at 8am you ring, the roof sounds suitable, and the card moves to Contacted. You book a visit for Friday and it moves again. Anyone in the business, looking at the board, knows exactly where that job stands without asking you." },
  { kind: "p", text: [
    "The first move is the one that matters most. A quote request that sits in New overnight is the one most likely to go to whoever answered first. The reasoning, and what a fast first reply looks like, is in ",
    { text: "speed to lead", href: "/speed-to-lead/" },
    ".",
  ] },

  { kind: "h2", text: "Where jobs get stuck" },
  { kind: "p", text: "Once the pipeline is honest, the problem areas show up on their own. In most home-service businesses they are the same three." },
  { kind: "h3", text: "A pile in Quote sent" },
  { kind: "p", text: "This is the most common one. You did the visit, wrote the quote, sent it, and then got busy on a roof for two weeks. The customer had questions and nobody asked them. The fix is a short follow-up on every quote with a clear end, so a job never sits in Quote sent for longer than your follow-up runs." },
  { kind: "p", text: [
    "A schedule that works for most installers is in ",
    { text: "quote follow up for installers", href: "/quote-follow-up/" },
    ": three messages over about two weeks, the last one making it easy to say no. When the sequence ends without a reply, the card moves to Lost with \"no reply\", rather than staying open forever.",
  ] },
  { kind: "h3", text: "New requests nobody owns" },
  { kind: "p", text: "When everyone can see the New column, everyone assumes someone else will call. Give that column one owner per day. If you work alone, the owner is you, and the rule is that New is empty before you leave the van in the morning." },
  { kind: "h3", text: "Lost with no reason" },
  { kind: "p", text: "A Lost column without reasons tells you nothing. With them, a few months of data says whether you're losing on price, on timing or on silence. Those are three different problems, and only one of them is fixed by better follow-up." },

  { kind: "h2", text: "What to automate in the pipeline" },
  { kind: "p", text: "Most of the value of a pipeline comes from the moments a job changes stage. That's also where automation is useful, because a stage change is a clear signal that something should happen next." },
  { kind: "list", items: [
    [{ text: "When a request arrives:", bold: true }, " create the card in New, send the customer a reply in under a minute, and notify whoever owns New that day."],
    [{ text: "When a visit is booked:", bold: true }, " send a confirmation and a reminder the day before. More on that in ", { text: "appointment reminder text", href: "/appointment-reminder-text/" }, "."],
    [{ text: "When a quote is sent:", bold: true }, " start the follow-up sequence, and stop it the moment the customer replies or the card moves."],
    [{ text: "When a job is won:", bold: true }, " stop every sales message, and after the work is finished, send a review request."],
    [{ text: "When a job is lost:", bold: true }, " stop everything, and if the reason was timing, set a reminder for the month they mentioned."],
  ] },
  { kind: "p", text: "What automation can't do is decide. It can't tell whether a roof is suitable, judge whether a revised price makes sense, or have the conversation a hesitant customer needs. Those stay with a person. The pipeline just makes sure the person knows who is waiting." },
  { kind: "p", text: [
    "Most CRMs built for small service businesses include a pipeline view and stage-based automation. What to look for in one is covered in ",
    { text: "CRM for contractors", href: "/crm-for-contractors/" },
    ". In GoHighLevel, the pipeline, the instant reply and the follow-up can sit in one place, which is how ",
    { text: "emmvi sets it up for installers", href: "/services/gohighlevel-automation/" },
    ".",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. The right stages and automations depend on your jobs, your team and the tools you already use. A spreadsheet that everyone actually updates beats a CRM that nobody opens." },

  { kind: "h2", text: "Reading the pipeline each week" },
  { kind: "p", text: "Ten minutes once a week is enough. You're not building a report. You're looking for jobs that need a person." },
  { kind: "list", items: [
    "Anything in New for more than a few hours: call today.",
    "Anything in Quote sent past the end of your follow-up: decide whether it's lost or needs a phone call.",
    "Anything in Visit booked with a date in the past: either the quote is late or the card wasn't moved.",
    "The Lost reasons from the last month: is one reason growing?",
  ] },
  { kind: "p", text: "Illustration: if you send 40 quotes in a quarter and 25 of them end up in Lost, the reasons column tells you where to look. If most of the 25 say \"no reply\", the follow-up isn't reaching people. If most say \"price\", follow-up is working and the issue is elsewhere. Neither number is a benchmark. They're yours, and that's the point." },
  { kind: "p", text: [
    "Add the lead source to each card as well, and the same weekly look tells you which channels bring jobs you win, not just enquiries. That side is covered in ",
    { text: "lead source tracking", href: "/lead-source-tracking/" },
    ".",
  ] },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Do I need a CRM for a sales pipeline?" },
  { kind: "p", text: "No. A spreadsheet or a board with columns works if every job goes on it and someone updates it daily. A CRM helps once you want the stage changes to send messages, start follow-ups or notify someone automatically, because a spreadsheet can't do that on its own." },
  { kind: "h3", text: "How many stages should a contractor pipeline have?" },
  { kind: "p", text: "Between five and seven covers most home-service businesses. Fewer and you can't tell a new request from a sent quote. More and the stages stop being updated." },
  { kind: "h3", text: "Who should update the pipeline?" },
  { kind: "p", text: "Whoever caused the change, at the time it happened. The person who booked the visit moves the card to Visit booked. Where you can, let the system do it: a quote sent from your CRM can move the card itself." },
  { kind: "h3", text: "When should a quote count as lost?" },
  { kind: "p", text: "When the customer says no, or when your follow-up ends without a reply. Leaving silent quotes open makes the pipeline look bigger than it is and hides the jobs that still have a chance." },
  { kind: "p", text: [
    "If you'd like a pipeline set up around how your jobs really run, with the replies and follow-ups attached, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const contractorSalesPipeline: Post = {
  slug: "contractor-sales-pipeline",
  title: "Contractor Sales Pipeline: Stages That Fit Installers",
  description: "How to set up a contractor sales pipeline: the stages that fit installers, what moves a job forward, where quotes get stuck and what to automate.",
  lede: "Every open job in one view, from quote request to signed or lost.",
  category: "CRM",
  published: "2026-10-10",
  image: { src: "/blog/contractor-sales-pipeline.png", width: 1600, height: 900, alt: "" },
  body,
};
