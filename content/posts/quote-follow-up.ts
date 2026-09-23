import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (septiembre de 2026). Palabra clave:
 * "quote follow up". Las funciones de producto citadas se comprobaron en la
 * pagina del fabricante el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "On Monday you spent an hour on a roof measuring for a heat pump, and on Tuesday night you sent the quote: Quote #1042, a clear price, a start date in three weeks. It's now the following Wednesday. No reply, no questions, no \"we went with someone else\". The quote is still sitting in your sent folder, and you're not sure whether chasing it would look pushy." },
  { kind: "p", text: "Most installers have a pile of quotes like that. This article covers why they go quiet, when to follow up, what to say each time, and how to set it up so the chasing happens without you remembering to do it." },

  { kind: "h2", text: "Why quotes go quiet" },
  { kind: "p", text: "A quote that gets no answer is rarely a firm no. People who have said no usually say so, or at least stop opening your emails. Silence tends to mean one of a handful of ordinary things:" },
  { kind: "list", items: [
    [{ text: "They haven't decided yet.", bold: true }, " A solar system or a new boiler is a big purchase. They're waiting on a second quote, a partner's opinion or the next pay cheque."],
    [{ text: "They have a question they haven't asked.", bold: true }, " \"Does the price include the scaffolding?\" is the kind of thing that stalls a decision for a week because nobody wanted to phone about it."],
    [{ text: "It got buried.", bold: true }, " Your quote landed on a busy evening, between school emails and delivery notifications, and was never opened properly."],
    [{ text: "Someone else answered first.", bold: true }, " Sometimes the job has gone. You still want to know, so you can stop chasing and update your records."],
  ] },
  { kind: "p", text: "Three of those four are still winnable, and all four are answered by the same thing: a short, polite message that makes it easy to reply. The quote doesn't need to be better. It needs to be remembered." },
  { kind: "h3", text: "Why installers don't chase" },
  { kind: "p", text: "It isn't laziness. You're on site all day, quotes go out late at night, and by the time a follow-up would be due you've done six other jobs. There is also a real worry about sounding desperate. That worry is fair, and it's why the wording and the timing below matter more than the number of messages." },

  { kind: "h2", text: "When to follow up on a quote" },
  { kind: "p", text: "There is no single right schedule, but a simple one beats none. The tools installers already use give a sense of what is normal." },
  { kind: "p", text: [
    "Jobber's help center explains that its quote follow-ups can send clients \"up to two reminders\" on quotes still awaiting a response, sent the same way the quote went out (email or text) and at the same time of day as the original, on its Connect plan and up, according to ",
    { text: "Jobber's Automations article", href: "https://help.getjobber.com/hc/en-us/articles/24244124296471-Automations" },
    " (as of September 2026). Quotient, a quoting tool, sets its default first follow-up for when a quote is \"not accepted after 3 days OR if unopened after 12 hours\" and a second after 14 days, per ",
    { text: "its own help page on following up quotes", href: "https://www.quotientapp.com/help/following-up-quotes" },
    " (as of September 2026). Those are vendor defaults, not research, but they point the same way: two or three touches over roughly two weeks.",
  ] },
  { kind: "h3", text: "A schedule that works for most installers" },
  { kind: "list", ordered: true, items: [
    [{ text: "Day 0, when the quote goes out:", bold: true }, " a short note that says the quote is attached, what it includes, and who to ask if anything is unclear."],
    [{ text: "Day 2 or 3:", bold: true }, " a check-in that offers to answer questions. This is the one that catches the scaffolding question."],
    [{ text: "Day 7:", bold: true }, " a gentle nudge with one useful piece of information, such as the next available start date."],
    [{ text: "Day 14:", bold: true }, " a closing message that makes it easy to say no. After this one, you stop."],
  ] },
  { kind: "p", text: "Adjust it to the job. A same-week boiler repair needs a faster rhythm than a full renovation, where people often take a month to decide. What matters is that the schedule exists and runs every time, not only when you happen to remember." },

  { kind: "h2", text: "What each follow-up should say" },
  { kind: "p", text: "Every message should be short enough to read on a phone in one glance, signed with your business name, and end with one easy question. Nobody should need to open the quote again to understand what you're asking." },
  { kind: "h3", text: "The check-in (day 2 or 3)" },
  { kind: "aside", text: "\"Hi Sam, it's Northside Heating. Just checking the quote for the heat pump came through okay. Happy to answer anything about it, including what's in the price. Any questions so far?\"" },
  { kind: "h3", text: "The nudge (day 7)" },
  { kind: "aside", text: "\"Hi Sam, Northside Heating again. We still have a start slot on the 14th if you'd like to go ahead with Quote #1042. Would that date work for you?\"" },
  { kind: "h3", text: "The close (day 14)" },
  { kind: "aside", text: "\"Hi Sam, last message from us about the heat pump quote. If you've gone another way, no problem at all, a quick 'no thanks' helps us keep our diary straight. If you'd still like it, just reply and we'll pick it up.\"" },
  { kind: "p", text: "The last message is the one people are most nervous about sending, and it often gets the most replies. Giving someone permission to say no removes the awkwardness that kept them silent. Either answer is useful: a yes is a job, and a no is a quote you can stop thinking about." },
  { kind: "h3", text: "What to leave out" },
  { kind: "list", items: [
    "Discounts you didn't plan to give. Dropping the price in a follow-up teaches customers to wait.",
    "Pressure that isn't true. \"Price only valid until Friday\" is fine if it is. If it isn't, don't write it.",
    "Long paragraphs. If a message needs scrolling, it won't get read on a phone.",
  ] },

  { kind: "h2", text: "Where automation helps, and where it doesn't" },
  { kind: "p", text: "The schedule above is easy to agree with and hard to keep up by hand. Illustration: if you send 30 quotes a month and each gets three follow-ups, that is 90 messages to time, write and send, on top of the work itself. That's why most chasing stops after the first week." },
  { kind: "p", text: "Automation handles the part that depends on memory. When a quote is marked as sent, the system starts the sequence; when the customer replies or accepts, it stops. You write the messages once and check them, and the system sends each one on the right day." },
  { kind: "h3", text: "The parts that still need a person" },
  { kind: "list", items: [
    [{ text: "Answering the reply.", bold: true }, " An automated message can start a conversation. When Sam writes back \"does it include the cylinder?\", someone who knows the job has to answer, ideally the same day."],
    [{ text: "Stopping the sequence.", bold: true }, " If Sam calls you instead of replying by text, the system may not know. Whoever takes the call needs to mark the quote as won or lost, or Sam gets a reminder about a job you already booked."],
    [{ text: "Judgment on big jobs.", bold: true }, " For a large renovation quote, a phone call at day 7 often does more than a text. Automation can remind you to make that call; it can't make it."],
  ] },
  { kind: "p", text: [
    "The first reply to a new enquiry is a different problem from chasing a quote, and it has its own fix. If calls are going unanswered while you're on a job, that's covered in ",
    { text: "how missed call text back works for installers", href: "/missed-call-text-back/" },
    ".",
  ] },
  { kind: "aside", text: "This is general guidance, not a recommendation for every business. If you only send a few quotes a month, a reminder in your calendar may be all you need. Check whether the quoting or job software you already pay for includes follow-ups before adding another tool." },

  { kind: "h2", text: "Track every quote in one pipeline" },
  { kind: "p", text: "Follow-up only works if you can see which quotes are open. For most installers that means a simple pipeline with a handful of stages: New enquiry, Site visit, Quote sent, Won, Lost. Every quote sits in exactly one stage, and anything in \"Quote sent\" for more than a few days is visibly waiting on you or on the customer." },
  { kind: "p", text: [
    "That pipeline lives in a CRM, which is also where the contact, the quote and the message history stay together, so nobody has to scroll through one person's texts to find out what was promised. There is more on that side in ",
    { text: "where enquiries get lost between the form and the sale", href: "/streamline-lead-capture-and-sales-with-a-smarter-crm/" },
    ".",
  ] },
  { kind: "h3", text: "Record why you lost" },
  { kind: "p", text: "When a quote moves to Lost, add one word for the reason: price, timing, went with someone else, no reply. After a few months, that column tells you more than a gut feeling. If most losses say \"no reply\", your follow-up needs work. If most say \"price\", the follow-up is doing its job and the conversation is somewhere else." },
  { kind: "p", text: [
    "In GoHighLevel, the pipeline, the stage change and the follow-up sequence can all sit in the same place, which is how ",
    { text: "Emmvi sets it up for installers", href: "/services/gohighlevel-automation/" },
    ". The same structure works in other CRMs; what matters is that the stage change starts and stops the messages.",
  ] },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How long should I wait before following up on a quote?" },
  { kind: "p", text: "Two or three days for the first follow-up is a reasonable default for most home-service quotes. It's long enough for them to read it and short enough that the site visit is still fresh in their mind. Faster jobs can go sooner." },
  { kind: "h3", text: "How many times should I follow up?" },
  { kind: "p", text: "Three messages over about two weeks, with the last one making it easy to say no, is a sensible limit. Past that, you risk annoying someone who has already decided, and the reply rate rarely justifies it." },
  { kind: "h3", text: "Text or email?" },
  { kind: "p", text: "Use the channel the customer used with you. If they texted you the enquiry, text the follow-up. Many people read texts within minutes and leave emails for later. If you text US customers from software, make sure your number is registered with your provider for business messaging first." },
  { kind: "h3", text: "Won't automated follow-ups feel robotic?" },
  { kind: "p", text: "Only if they read like a template. Use the customer's first name, mention the actual job, sign with your business name, and write the way you would speak on site. Most customers can't tell, and don't mind, whether you pressed send yourself." },
  { kind: "p", text: [
    "If you'd rather have the pipeline and the follow-up sequence set up and tested for you, you can ",
    { text: "talk to Emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const quoteFollowUp: Post = {
  slug: "quote-follow-up",
  title: "Quote Follow Up: How Installers Stop Losing Quotes",
  description: "When to follow up on a quote, what to say at day 3, 7 and 14, and how to automate the chasing so quotes stop going quiet while you're busy on site.",
  lede: "Most quotes aren't rejected. They're forgotten, and nobody chases them.",
  category: "Automation",
  published: "2026-09-23",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/quote-follow-up.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
