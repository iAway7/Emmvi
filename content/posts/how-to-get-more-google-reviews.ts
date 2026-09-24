import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (septiembre de 2026). Palabra clave:
 * "how to get more google reviews". Las politicas de Google y de la FTC y la
 * funcion de HighLevel citadas se comprobaron en la fuente el dia de
 * publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's 4pm on a Thursday. You've just finished a heat pump install for Sam: the unit is running, the old boiler is on the van, and Sam has said \"brilliant, thank you\" twice on the doorstep. You drive to the next job. Sam never leaves a review, not because anything went wrong, but because nobody asked at a moment when it was easy to do." },
  { kind: "p", text: "That is how most installers end up with twelve reviews after five years of good work. This article covers why satisfied customers stay quiet, what Google allows you to do about it, when and how to ask, and how to make the asking happen after every job without you remembering it." },

  { kind: "h2", text: "Why happy customers don't leave reviews" },
  { kind: "p", text: "Unhappy customers look for a place to complain. Happy customers get on with their day. A good install is, from the customer's side, a problem that has gone away, and people don't write about problems that have gone away unless something prompts them." },
  { kind: "p", text: "The usual reasons a satisfied customer never reviews you are ordinary:" },
  { kind: "list", items: [
    [{ text: "Nobody asked.", bold: true }, " Most installers mean to ask and forget, or feel awkward about it at the door."],
    [{ text: "They didn't know where.", bold: true }, " \"Leave us a review on Google\" means searching for your business, finding the right listing and hunting for the button. Each step loses people."],
    [{ text: "The moment passed.", bold: true }, " A week later, the new boiler is just the boiler. The goodwill is still there, but the reason to act on it has gone."],
  ] },
  { kind: "p", text: "All three have the same fix: a direct link, sent soon after the job, in a short message from the business the customer just dealt with. The work doesn't need to be better. The request needs to exist and be easy." },

  { kind: "h2", text: "What Google allows, and what it bans" },
  { kind: "p", text: "Before setting anything up, it helps to know where the lines are, because some common tactics break Google's rules and can cost you the reviews you already have." },
  { kind: "h3", text: "Allowed: asking every customer" },
  { kind: "p", text: [
    "Google's own ",
    { text: "tips to get more reviews", href: "https://support.google.com/business/answer/3474122?hl=en" },
    " encourage businesses to remind customers to leave reviews, using a link or a QR code. You can get both from your Business Profile by selecting Read reviews and then Get more reviews, according to Google's help page on ",
    { text: "creating a review link or QR code", href: "https://support.google.com/business/answer/16816815?hl=en" },
    " (as of September 2026). The same page notes that the QR code can only be generated from a computer browser, not from a phone.",
  ] },
  { kind: "h3", text: "Banned: incentives and cherry-picking" },
  { kind: "p", text: [
    "Google's ",
    { text: "policy on prohibited and restricted content", href: "https://support.google.com/contributionpolicy/answer/7400114?hl=en" },
    " says businesses must not offer payment, discounts or free goods or services in exchange for reviews. It also says they must not ",
    { text: "\"selectively solicit positive reviews from customers\"", bold: true },
    ". That rules out the classic trick of asking \"were you happy?\" first and only sending the Google link to people who say yes.",
  ] },
  { kind: "p", text: [
    "In the US, the FTC's rule on consumer reviews and testimonials took effect on October 21, 2024. Its ",
    { text: "questions and answers page", href: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" },
    " says you can't suggest a review must be positive to get a promised incentive, and notes that asking only happy customers could still break the wider FTC Act. The practical rule is simple: ask everyone, reward nobody, and don't tell people what to write.",
  ] },
  { kind: "aside", text: "This is not legal advice. If you operate outside the US, or run anything like a referral scheme, check the rules that apply where you work." },

  { kind: "h2", text: "When to ask for a review" },
  { kind: "p", text: "The best time is shortly after the customer has seen the result, while they still remember your name and the person who came to the house. For most home-service jobs, that means the same day." },
  { kind: "list", items: [
    [{ text: "Quick jobs (a repair, a service, an EV charger):", bold: true }, " a text a couple of hours after you leave. They have had time to check everything works, and they're still thinking about it."],
    [{ text: "Bigger installs (solar, heat pumps, renovations):", bold: true }, " ask once the customer has seen it working, which may be after the handover or the first day of use, not while the scaffolding is still up."],
    [{ text: "Anything with a problem outstanding:", bold: true }, " fix it first. Asking for a review while a snag is open is asking for a complaint in public."],
  ] },
  { kind: "p", text: "One reminder, a few days later, is reasonable if there's no response. After that, stop. A customer who ignores two polite messages has made a choice, and a third message turns goodwill into irritation." },
  { kind: "h3", text: "Ask in person too" },
  { kind: "p", text: "The text does the work, but a sentence at the door helps it land: \"We'll send you a link later, a short review really helps other homeowners find us.\" When the message arrives, it's expected, and it comes from someone they just shook hands with." },

  { kind: "h2", text: "What the review request should say" },
  { kind: "p", text: "Keep it short enough to read in one glance on a phone. Use the customer's first name, name the job, sign it with your business name, and put the link on its own line. Don't ask for five stars and don't suggest what to write." },
  { kind: "h3", text: "The first request (same day)" },
  { kind: "aside", text: "\"Hi Sam, it's Northside Heating. Thanks for having us today for the heat pump install. If you have a minute, we'd be grateful for an honest review: [link]. And if anything isn't right, reply here and we'll sort it.\"" },
  { kind: "h3", text: "The reminder (three to five days later)" },
  { kind: "aside", text: "\"Hi Sam, Northside Heating again. Hope the heat pump is running well. If you get a moment, here's the review link: [link]. Thanks either way.\"" },
  { kind: "p", text: "The line \"if anything isn't right, reply here\" is not a filter. Everyone gets the review link in the same message. It simply gives an unhappy customer a faster way to reach you than a one-star review, which is better for both of you." },
  { kind: "h3", text: "Text, email or card?" },
  { kind: "p", text: "Use the channel the customer already used with you. For most homeowners that is text: the link opens on the same phone they'll use to write the review. A printed QR code on the invoice or the handover pack is a good backup, and it's why Google offers one." },

  { kind: "h2", text: "Automating review requests" },
  { kind: "p", text: "Everything above is easy to agree with and hard to do by hand. Illustration: if you finish 40 jobs a month, that's 40 first requests and up to 40 reminders, each timed to a job that ended at a different hour. By the second busy week, the asking stops." },
  { kind: "p", text: "Automation ties the request to something you already do. When a job is marked complete in your CRM or job software, the system waits the time you chose, sends the first message, and sends one reminder if there's no reply. You write the wording once and check it; after that it runs on every job, not only the ones you remember." },
  { kind: "p", text: [
    "In HighLevel, for example, a workflow can include a \"Send Review Request\" action by SMS, email or WhatsApp, and each request shows as queued, sent, delivered or failed, according to ",
    { text: "HighLevel's help article on sending review requests", href: "https://help.gohighlevel.com/support/solutions/articles/48001222668-how-to-send-review-requests" },
    " (as of September 2026). Many job management tools have something similar. It's the same idea as ",
    { text: "chasing quotes automatically", href: "/quote-follow-up/" },
    ": a stage change starts the messages, and a reply stops them.",
  ] },
  { kind: "h3", text: "What still needs a person" },
  { kind: "list", items: [
    [{ text: "Marking the job complete.", bold: true }, " If nobody updates the job, nothing is sent. The trigger is only as reliable as the habit behind it."],
    [{ text: "Handling the replies.", bold: true }, " Some customers will reply to the text with a question or a problem instead of reviewing. Someone who knows the job needs to answer."],
    [{ text: "Checking the wording.", bold: true }, " Read every template as if you were the customer. If it sounds like a form letter, rewrite it."],
  ] },
  { kind: "aside", text: "This is general guidance, not a recommendation for every business. If you finish a handful of jobs a month, a saved text on your phone and a reminder in your calendar may be enough. Check what the software you already pay for can do before adding another tool." },

  { kind: "h2", text: "Replying to reviews, good and bad" },
  { kind: "p", text: "Google's tips page also encourages businesses to reply to reviews. Replies are read by the next homeowner deciding whether to call you, so they matter more than the reviewer." },
  { kind: "list", items: [
    [{ text: "Good reviews:", bold: true }, " a short thank you that mentions the job. \"Thanks Sam, glad the heat pump is keeping the house warm.\" No need for more."],
    [{ text: "Bad reviews:", bold: true }, " reply calmly, once, in public, and offer to sort it out in private with a name and a number. Don't argue the details. Readers judge the reply more than the complaint."],
    [{ text: "Reviews you don't recognize:", bold: true }, " if a review looks fake or breaks Google's policies, you can report it from your Business Profile, as Google's help page on ", { text: "reporting inappropriate reviews", href: "https://support.google.com/business/answer/4596773?hl=en" }, " explains. Review evaluation can take several days. Don't reply to it as if it were real."],
  ] },
  { kind: "p", text: [
    "Reviews also do their job only if the rest of the journey holds up. A homeowner who reads your reviews and then calls, gets no answer and hears nothing back is lost anyway. That part is covered in ",
    { text: "how missed call text back works for installers", href: "/missed-call-text-back/" },
    " and in ",
    { text: "where enquiries get lost between the form and the sale", href: "/streamline-lead-capture-and-sales-with-a-smarter-crm/" },
    ".",
  ] },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Can I offer a discount for a Google review?" },
  { kind: "p", text: "No. Google's policy bans payment, discounts and free goods or services in exchange for reviews, whatever the review says. Reviews posted because of an incentive count as a breach of that policy." },
  { kind: "h3", text: "Can I ask only the customers I know were happy?" },
  { kind: "p", text: "Google's policy says businesses must not selectively solicit positive reviews, and the FTC has said the practice could break US law. Send the same request to every customer after every job." },
  { kind: "h3", text: "How many times should I ask?" },
  { kind: "p", text: "Once, plus one reminder a few days later. If there's no response after that, leave it." },
  { kind: "h3", text: "Should staff ask customers for reviews on site?" },
  { kind: "p", text: "Mentioning that a link is coming is fine. Google's policy says businesses shouldn't require or pressure customers to leave a review while on the premises, so don't hand over a phone and wait." },
  { kind: "p", text: [
    "If you'd like review requests tied to your job pipeline and running after every job, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const howToGetMore: Post = {
  slug: "how-to-get-more-google-reviews",
  title: "How to Get More Google Reviews as an Installer",
  description: "When to ask for a Google review, what the text should say, what Google and the FTC ban, and how to send a request after every job automatically.",
  lede: "Happy customers rarely leave reviews on their own. They leave one when asked well.",
  category: "Lead Generation",
  published: "2026-09-24",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/how-to-get-more-google-reviews.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
