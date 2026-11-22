import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "estimate follow up text". Formato de plantillas, hermano de quote-follow-up.
 * El cambio de reglas de la FCC sobre revocacion de consentimiento (septiembre
 * de 2026) se comprobo el dia de publicacion en el resumen de Troutman Pepper.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's Tuesday afternoon. You priced a heat pump swap on Friday, emailed the PDF on Saturday morning and haven't heard a word. The customer hasn't said no. They may not have opened the email, they may be waiting on a second quote, or they may have a question they feel silly asking. A short text today will tell you which, and it takes less time to send than this paragraph took to read." },
  { kind: "p", text: [
    "This article is the practical half of ",
    { text: "quote follow up for installers", href: "/quote-follow-up/" },
    ": the actual texts. Four messages, when to send each one, what to change for your trade, and the rules that stop them from turning into spam. Copy them, then rewrite them in the way you speak to customers.",
  ] },

  { kind: "h2", text: "Why a text, not another email" },
  { kind: "p", text: "The estimate itself usually goes by email, because it is a document the customer will want to keep, forward to a partner and compare. The follow-up is different. It is a short question, and a short question fits a text better than an email that lands between a bank statement and a newsletter." },
  { kind: "p", text: "A text also asks for very little. The customer can answer with one word, a photo or \"call me\", from the car park at work. An email asks them to sit down and write something, which is exactly the step that gets put off until the job goes to someone else." },
  { kind: "h3", text: "What every estimate text needs" },
  { kind: "list", items: [
    [{ text: "Your name and the business name", bold: true }, ", because the customer has your number saved as \"solar guy\" or not at all."],
    [{ text: "The job, in their words", bold: true }, ": \"the panels for the garage roof\", not \"your recent enquiry\"."],
    [{ text: "One question or one next step", bold: true }, ", never three. The easier the reply, the more likely you get one."],
    [{ text: "A way out", bold: true }, ", so a customer who has decided against it can say so without feeling rude."],
  ] },
  { kind: "p", text: [
    "If you haven't set up texting from a business number yet, the setup and the registration rules are covered in ",
    { text: "business texting for contractors", href: "/business-texting-for-contractors/" },
    ".",
  ] },

  { kind: "h2", text: "The text that goes with the estimate" },
  { kind: "p", text: "The first text is sent the moment the estimate goes out, not days later. Its job is simple: make sure the customer knows the estimate exists and where to find it. Plenty of estimates sit unread in a promotions folder for a week." },
  { kind: "aside", text: "Hi Laura, it's Dan from Brightline Solar. I've just emailed the estimate for the 12 panels on the south roof. It's from dan@brightlinesolar.com in case it lands in spam. Any questions, reply here." },
  { kind: "p", text: "Notice what isn't there: no price, no \"limited time\", no request for a decision. The price is in the document, where it has context. In the text, a bare number invites a bare comparison with a cheaper quote that covers less." },
  { kind: "h3", text: "Adjust it for the job" },
  { kind: "list", items: [
    [{ text: "Small, urgent jobs", bold: true }, " (a boiler repair, a broken garage door): offer a time in the same text. \"I can do Thursday morning if that works.\""],
    [{ text: "Large, slow decisions", bold: true }, " (solar, a kitchen, a new roof): mention the one thing they asked about at the visit, so they know you listened."],
    [{ text: "Estimates with options", bold: true }, ": say how many there are. \"There are two options, the second one includes the battery.\""],
  ] },

  { kind: "h2", text: "Day 2: the check-in text" },
  { kind: "p", text: "Two or three days later, if there's no reply, send a check-in. This one assumes nothing has gone wrong. Most silences at this stage are about time, not price." },
  { kind: "aside", text: "Hi Laura, Dan again. Did the estimate come through OK? Happy to go over any line on a quick call, or answer by text if that's easier." },
  { kind: "p", text: "Offering both a call and a text matters. Some customers want to talk it through, others would rather not speak to a salesperson at all. Let them pick." },
  { kind: "aside", tone: "tip", text: "Send follow-ups from the same number that sent the first text, at a time you'd be happy to receive one yourself: weekday daytime or early evening. A text at 7am on a Sunday gets the reply it deserves." },

  { kind: "h2", text: "Day 7: the question text" },
  { kind: "p", text: "A week in, a third \"just checking in\" won't help. This text asks a direct question that is easy to answer, and gives the customer a reason to tell you what is actually holding them up." },
  { kind: "aside", text: "Hi Laura, quick question on the solar estimate: is it the price, the timing, or are you still comparing quotes? Any of those is fine, it just helps me know whether to adjust anything." },
  { kind: "p", text: "The answers are useful even when they are bad news. \"Comparing\" tells you to explain what your estimate includes that a cheaper one might not. \"Timing\" tells you to ask when to come back. \"Price\" opens a conversation about a smaller system, a different product or a phased job, without you cutting your margin first." },
  { kind: "h3", text: "Add something useful, if you have it" },
  { kind: "p", text: "If there is a genuine piece of information that helps the decision, this is where it goes: a photo of a similar install you did nearby, your install calendar for next month, or the answer to a question the customer asked at the visit. Don't invent urgency. A deadline that isn't real is easy to spot and hard to recover from." },

  { kind: "h2", text: "Day 14: the closing text" },
  { kind: "p", text: "The last text in the sequence closes the loop politely. It says you'll stop chasing, and it leaves the door open." },
  { kind: "aside", text: "Hi Laura, I'll close this estimate on my side so I stop messaging you. If you want to go ahead later, or the plans change, just reply to this text and I'll pick it up from there. Thanks for having us out." },
  { kind: "p", text: "This message often gets more replies than the ones before it. It takes the pressure off, and a customer who had been meaning to answer for two weeks finally has a simple reason to. Some will say \"we went with someone else\", which is worth knowing. Ask who and why if they seem happy to say, and record it." },
  { kind: "h3", text: "What happens after day 14" },
  { kind: "p", text: [
    "Move the estimate to a \"Lost\" or \"Not now\" stage in your ",
    { text: "sales pipeline", href: "/contractor-sales-pipeline/" },
    ", with the reason. Customers who said \"not now\" are the best list you have for a gentle message in three or six months, as described in ",
    { text: "how to reactivate old leads", href: "/reactivate-old-leads/" },
    ". Customers who said no, or asked you to stop, stay off it.",
  ] },
  { kind: "p", text: "Illustration: a business that sends 20 estimates a month and uses all four texts sends at most 80 follow-up texts a month, fewer because the sequence stops when someone replies. That is a few minutes a day by hand, or none if the texts are scheduled automatically when an estimate is marked as sent." },

  { kind: "h2", text: "Rules that keep texts welcome" },
  { kind: "p", text: "A follow-up sequence is only worth having if customers don't mind receiving it. A few rules keep it that way." },
  { kind: "list", items: [
    [{ text: "Stop the moment they reply.", bold: true }, " Automated follow-ups that keep going after a customer has answered are the fastest way to look careless. Any reply should pause the sequence and hand it to a person."],
    [{ text: "Stop when they say stop.", bold: true }, " \"Stop\", \"no thanks\" or \"we went with someone else\" ends the sequence for good."],
    [{ text: "Only text people who gave you their number for this.", bold: true }, " A customer who asked for an estimate expects to hear about it. A number scraped from somewhere else does not."],
    [{ text: "Keep the sequence short.", bold: true }, " Four texts over two weeks is plenty for most jobs. If none of them got a reply, a fifth won't either."],
  ] },
  { kind: "p", text: [
    "The rules on texting consent also change. In the US, the FCC revised its rules on how people revoke consent to calls and texts in September 2026, including which opt-out methods a business can designate and how quickly opt-outs must be processed (no more than 10 business days, according to ",
    { text: "this summary from Troutman Pepper", href: "https://www.troutman.com/insights/fcc-revises-tcpa-revocation-of-consent-rules-that-were-set-to-go-into-effect-in-january/" },
    "). Most estimate follow-ups are a reply to someone who asked for a price, but if your texts start promoting other services, the stricter marketing rules apply.",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. Timings that suit a solar installer may be too slow for an emergency plumber, and texting and consent rules differ by country and by US state. If you're unsure whether your messages count as marketing, check with someone who knows the rules where you work." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How soon should I text after sending an estimate?" },
  { kind: "p", text: "Straight away, with a short note that the estimate has been sent and where to find it. The first real follow-up comes two or three days later if there's no reply." },
  { kind: "h3", text: "Should the price go in the text?" },
  { kind: "p", text: "Usually not. The price belongs in the estimate, next to what it includes. A number on its own in a text is easy to compare with a cheaper quote for less work." },
  { kind: "h3", text: "Can these texts be sent automatically?" },
  { kind: "p", text: "Yes, if the sequence starts when the estimate is marked as sent and stops as soon as the customer replies. The replies themselves should always reach a person who can answer them the same day." },
  { kind: "h3", text: "What if they reply with a question at 9pm?" },
  { kind: "p", text: [
    "An automatic acknowledgement can tell them you've seen it and when you'll answer. The answer itself should come from someone who knows the job, first thing the next morning. If you'd like the sequence, the pipeline and the replies set up for you, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const estimateFollowUpText: Post = {
  slug: "estimate-follow-up-text",
  title: "Estimate Follow Up Text: Templates for Installers",
  description: "Four estimate follow up texts for installers and contractors: what to send with the estimate, on day 2, day 7 and day 14, and when the sequence stops.",
  lede: "Four short texts that get an answer on an estimate, and when to send each one.",
  category: "Automation",
  published: "2026-11-22",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/estimate-follow-up-text.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
