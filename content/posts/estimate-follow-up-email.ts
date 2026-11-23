import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "estimate follow up email". Hermano de estimate-follow-up-text: misma
 * secuencia de dos semanas, pero en email, con asuntos y entregabilidad. Las
 * pautas de remitente de Gmail se comprobaron el dia de publicacion en la
 * pagina de ayuda de Google.
 */
const body: Post["body"] = [
  { kind: "p", text: "You walked the roof on Thursday, priced the job on Friday night and emailed the estimate on Saturday. It's now Wednesday. The email hasn't bounced and nobody has written back. You don't know if the customer read it, forwarded it to their partner, or never saw it because it went to the promotions tab with the furniture sales." },
  { kind: "p", text: [
    "This article is the email half of your follow-up. The texts are in ",
    { text: "estimate follow up text", href: "/estimate-follow-up-text/" },
    ". Here are four emails, when to send each one, what to put in the subject line, and how to make sure they arrive at all. Copy the structure, then rewrite the words the way you talk to customers.",
  ] },

  { kind: "h2", text: "When email beats a text" },
  { kind: "p", text: "A text is the faster way to get a one-word answer. Email does a different job. It carries things a customer will want to keep, reread and show someone else: the estimate itself, the options side by side, photos of the roof, the warranty terms, the finance quote. Decisions on bigger jobs are often made by two people at a kitchen table, and email is what gets printed or forwarded to the second one." },
  { kind: "p", text: "So the two work together. The estimate and the detailed follow-ups go by email. A short text tells the customer the email exists and asks the quick questions. If you only use one channel, you are relying on the customer to check the one you picked." },
  { kind: "h3", text: "What every estimate email needs" },
  { kind: "list", items: [
    [{ text: "A subject line with the job in it", bold: true }, ": \"Your estimate for the south roof panels\", not \"Estimate #1042\" or \"Following up\"."],
    [{ text: "Your name and a direct number", bold: true }, " in the body, not only in a signature image that some mail apps hide."],
    [{ text: "One clear next step", bold: true }, ": reply, book a call, or approve online. Not all three."],
    [{ text: "A short body", bold: true }, ". The estimate holds the detail. The email says what it is, what to look at first, and how to answer."],
  ] },

  { kind: "h2", text: "The email that carries the estimate" },
  { kind: "p", text: "The first email is the estimate itself. Most contractors send it with a blank body or a single line, which wastes the one email the customer is certain to open. Use it to point at what matters." },
  { kind: "aside", text: "Subject: Your estimate for the 12 panels on the south roof. Hi Laura, the estimate from Thursday's visit is attached. Page 1 has the two options side by side: the second one adds the battery you asked about. Page 3 lists what's included, so you can compare it line by line with other quotes. If anything is unclear, reply here or call me on 555 0142. Dan, Brightline Solar" },
  { kind: "p", text: "That email does three things a blank one doesn't. It reminds the customer of the visit, it tells them where to look first, and it quietly invites a line-by-line comparison, which favors the estimate that lists what it includes. No price in the body: the number belongs on the page where its scope is written next to it." },
  { kind: "h3", text: "Link, attachment or both" },
  { kind: "p", text: "If your estimating tool creates an online estimate the customer can approve, put the link in the email and attach the PDF as well. Some customers want to click approve, others want a file to save, and some company mail filters strip links they don't recognize. Both together cover all three." },

  { kind: "h2", text: "Day 3: the walkthrough email" },
  { kind: "p", text: "If there's no reply after two or three days, the second email offers help with the estimate rather than asking for a decision. Silence at this stage is usually about time. The customer means to read it properly and hasn't yet." },
  { kind: "aside", text: "Subject: Re: Your estimate for the 12 panels on the south roof. Hi Laura, in case it's useful, I can walk you through the estimate in ten minutes by phone, or answer questions by email if that suits you better. Most people ask about the difference between the two options, so here it is in one line: option 2 stores what you generate during the day for use in the evening. Dan" },
  { kind: "p", text: "Two details matter. Reply in the same thread, so the estimate is one scroll away and the customer doesn't have to search for it. And answer the question most customers ask before they ask it. You know what it is: you hear it at every visit." },
  { kind: "aside", tone: "tip", text: "Send every follow-up as a reply to the original estimate email, with \"Re:\" in the subject. A new thread with a new subject looks like marketing, and the customer has to go and find the estimate again before they can answer." },

  { kind: "h2", text: "Day 7: the one-question email" },
  { kind: "p", text: "A week in, a third \"just checking in\" adds nothing. This email asks one direct question that is easy to answer, and makes every honest answer acceptable." },
  { kind: "aside", text: "Subject: Re: Your estimate for the 12 panels on the south roof. Hi Laura, one quick question so I know what's useful: is it the price, the timing, or are you still comparing quotes? Any answer is fine. If it's the price, there's a smaller system that covers most of your daytime use, and I'm happy to price it. Dan" },
  { kind: "p", text: "Each answer tells you what to do next. \"Comparing\" means you explain what your estimate includes that others might leave out. \"Timing\" means you ask when to come back and write it down. \"Price\" means you offer a smaller scope or a phased job, without dropping your rate first." },
  { kind: "h3", text: "Add something only if it's real" },
  { kind: "p", text: "If you have something that genuinely helps the decision, add it here: photos of a similar job nearby, your install dates for next month, or the answer to something they asked at the visit. Don't invent a deadline. If the price really does change on a date, say why (a supplier price change, a quote validity date printed on the estimate). Otherwise leave urgency out." },

  { kind: "h2", text: "Day 14: the close-out email" },
  { kind: "p", text: "The last email in the sequence says you'll stop following up and leaves the door open. It is short and it is polite, because the customer may come back in three months and you want them to remember you that way." },
  { kind: "aside", text: "Subject: Re: Your estimate for the 12 panels on the south roof. Hi Laura, I'll close this estimate on my side so I stop filling your inbox. If you'd like to go ahead later, or the plans change, just reply to this email and I'll pick it up from here. Thanks again for having us out. Dan" },
  { kind: "p", text: "This one often gets the reply the others didn't, because it asks for nothing. Some replies will be \"we went with someone else\". That is still useful: if they're happy to say who or why, write it down next to the estimate." },
  { kind: "h3", text: "Where the estimate goes next" },
  { kind: "p", text: [
    "Move it to \"Lost\" or \"Not now\" in your ",
    { text: "sales pipeline", href: "/contractor-sales-pipeline/" },
    ", with the reason. \"Not now\" estimates are the list for a single, gentle email in a few months, as covered in ",
    { text: "how to reactivate old leads", href: "/reactivate-old-leads/" },
    ". People who said no or asked you to stop stay off it.",
  ] },
  { kind: "p", text: "Illustration: a business that sends 25 estimates a month and uses all four emails sends at most 75 follow-up emails a month after the estimates themselves, and fewer in practice, because the sequence stops when someone replies. By hand that is a few minutes a day. Scheduled from the moment an estimate is marked as sent, it is none." },

  { kind: "h2", text: "Make sure the emails arrive" },
  { kind: "p", text: "A follow-up sequence is useless if it lands in spam. Estimates sent from a free webmail address, or from an estimating tool sending \"on behalf of\" your domain without authentication, are the usual culprits." },
  { kind: "p", text: [
    "Google's ",
    { text: "email sender guidelines", href: "https://support.google.com/a/answer/81126" },
    " say every sender to personal Gmail accounts must set up SPF or DKIM authentication for their sending domain, and keep the spam rate reported in Google's Postmaster Tools below 0.3%. Bulk senders (more than 5,000 messages a day) also need DMARC and one-click unsubscribe on marketing messages. An installer's estimate emails are nowhere near that volume, but the basic authentication applies to everyone.",
  ] },
  { kind: "list", items: [
    [{ text: "Send from your own domain", bold: true }, " (dan@brightlinesolar.com), not a free address. It looks like a business and it can be authenticated."],
    [{ text: "Authenticate the tools that send for you", bold: true }, ". If your CRM or estimating software sends from your domain, add the records it gives you so the emails pass SPF and DKIM."],
    [{ text: "Stop the sequence on any reply", bold: true }, ". An automatic email that arrives after the customer has answered is how follow-ups get marked as spam."],
    [{ text: "Keep it to four emails", bold: true }, ". If none got an answer, a fifth won't either, and it is the one most likely to be reported."],
  ] },
  { kind: "p", text: [
    "If you're not sure your setup passes, the person who manages your domain or your ",
    { text: "CRM setup", href: "/services/gohighlevel-automation/" },
    " can check it in an afternoon. It is a one-time job.",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. A two-week sequence suits a solar or roofing estimate but is too slow for an emergency repair, and email rules differ by country and by the type of message. Estimate follow-ups are replies to people who asked for a price; once an email starts promoting other services, marketing rules apply." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How long should I wait to follow up on an estimate by email?" },
  { kind: "p", text: "Two or three days after sending it, if there's been no reply. Then around day 7 and day 14. Pair the first email with a short text so the customer knows to look for it." },
  { kind: "h3", text: "What subject line should a follow-up email use?" },
  { kind: "p", text: "Reply in the original thread so the subject stays \"Re: Your estimate for...\" with the job named. It keeps the estimate attached to the conversation and doesn't look like a newsletter." },
  { kind: "h3", text: "Should I resend the estimate in every email?" },
  { kind: "p", text: "No. Replying in the same thread keeps it one scroll away. Resend it only if the customer says they can't find it, or if you've changed it." },
  { kind: "h3", text: "Can these emails be sent automatically?" },
  { kind: "p", text: [
    "Yes, if the sequence starts when the estimate is marked as sent and stops the moment the customer replies, with that reply going straight to a person. If you'd like the emails, the texts and the pipeline set up for you, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const estimateFollowUpEmail: Post = {
  slug: "estimate-follow-up-email",
  title: "Estimate Follow Up Email: Templates for Installers",
  description: "Four estimate follow up emails for installers: what to send with the estimate, on day 3, day 7 and day 14, plus subject lines and how to stay out of spam.",
  lede: "Four emails that get an answer on an estimate, and how to make sure they arrive.",
  category: "Automation",
  published: "2026-11-23",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/estimate-follow-up-email.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
