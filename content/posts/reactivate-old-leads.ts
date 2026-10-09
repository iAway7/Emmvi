import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "reactivate old leads". La norma citada (47 CFR 64.1200) se comprobo en el
 * eCFR el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "In March, Tom asked for a solar quote. You went out, measured the roof, sent a price and a start date, and chased it twice. He said he needed to think about it, then went quiet. Seven months later Tom is still in your phone, in your quoting software and probably in a spreadsheet somewhere, next to a hundred people just like him." },
  { kind: "p", text: "Most installers and home-service businesses are sitting on a list like that. This article covers who on it is worth contacting again, what you need to check before the first message goes out, what to say, and how to handle the replies so the effort turns into booked site visits rather than awkward conversations." },

  { kind: "h2", text: "Who counts as an old lead" },
  { kind: "p", text: "An old lead is anyone who asked about a job, got some kind of answer, and never booked. It is not the same as a quote you sent last week. Those belong to your normal follow-up, which should run for a couple of weeks and then stop. Reactivation starts months later, after that sequence has ended and the person has dropped off your radar." },
  { kind: "p", text: "Most businesses find their old leads spread across several places:" },
  { kind: "list", items: [
    [{ text: "Quotes that were never accepted.", bold: true }, " The price went out, nobody said yes or no, and the follow-up stopped."],
    [{ text: "Enquiries that never got a site visit.", bold: true }, " Someone filled in the form on a busy week, you replied late, and the conversation never got going."],
    [{ text: "\"Not right now\" answers.", bold: true }, " The customer said they wanted to wait until after winter, after a house move or after a bonus. That date may have passed."],
    [{ text: "Past customers.", bold: true }, " Not cold leads exactly, but people who already trust you and may need a service visit, a battery added to their solar, or a second charger."],
  ] },
  { kind: "p", text: "Each group needs a slightly different message, which is why the first job is sorting, not writing." },
  { kind: "h3", text: "Why they went quiet" },
  { kind: "p", text: "Few of these people made a firm decision against you. The timing was wrong, the budget wasn't there yet, or the decision was waiting on someone else in the house. Some of those reasons have expired. A lead that was \"not this year\" in March is a different conversation in October, and nobody else is likely to remind them that you already measured their roof." },

  { kind: "h2", text: "Clean the list before you send" },
  { kind: "p", text: "Sending one message to everyone you have ever spoken to is the fastest way to annoy people and get your number flagged. Spend an hour on the list first." },
  { kind: "list", ordered: true, items: [
    [{ text: "Pull everything into one place.", bold: true }, " Export contacts from your quoting tool, your email, your website form and your phone. Merge duplicates so Tom gets one message, not three."],
    [{ text: "Remove anyone who said no or asked you to stop.", bold: true }, " This is not optional. If someone opted out, they stay out."],
    [{ text: "Remove the jobs you lost on purpose.", bold: true }, " If you walked away because the roof was unsuitable or the customer was difficult, don't invite them back."],
    [{ text: "Tag each contact with what they asked for and when.", bold: true }, " \"Solar quote, March\" or \"EV charger, no site visit, May\" is enough. You need it to write a message that makes sense."],
    [{ text: "Check who already booked with you since.", bold: true }, " Nothing undoes trust faster than asking a current customer whether they're still interested."],
  ] },
  { kind: "p", text: [
    "If you don't know where half these leads came from, that's worth fixing for the future too. There is more on that in ",
    { text: "lead source tracking for home-service businesses", href: "/lead-source-tracking/" },
    ".",
  ] },
  { kind: "aside", tone: "tip", text: "Start with a small batch, such as twenty contacts from the same month, rather than the whole list. You'll see how people respond, catch any mistakes in the message, and keep the replies to a number you can answer the same day." },

  { kind: "h2", text: "Check consent before texting" },
  { kind: "p", text: "Text is usually the channel that gets read, which is also why it is the one with the most rules. In the US, the FCC's rule on telephone solicitation covers text messages as well as calls, and it draws a line between messages that answer a customer and messages that promote something." },
  { kind: "p", text: [
    "Under ",
    { text: "47 CFR 64.1200, as published on the eCFR", href: "https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200" },
    ", calls to mobile numbers that include an advertisement or constitute telemarketing, made with an automatic dialing system or a prerecorded voice, require the \"prior express written consent\" of the person called. The same section says a request to stop can be made by \"any reasonable method\" and must be honored within a reasonable time not exceeding ten business days (as checked in October 2026).",
  ] },
  { kind: "p", text: "In practice, for an installer that means three things:" },
  { kind: "list", items: [
    "Look at how each person contacted you and what your form said when they did. Someone who ticked a box agreeing to receive texts is in a different position from someone who phoned once.",
    "A message about a job they asked for is closer to a reply. A blast about a seasonal discount is closer to marketing. Keep reactivation messages about the job they enquired about.",
    "Every message should make it easy to stop, and anyone who says stop, in any wording, comes off the list straight away.",
  ] },
  { kind: "p", text: [
    "Texting from software in the US also needs your number registered for business messaging. That process, and why it takes a while, is covered in ",
    { text: "business texting for contractors", href: "/business-texting-for-contractors/" },
    ". For contacts where consent is unclear, email or a phone call is the safer channel.",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not legal advice and not a recommendation for every business. Consent rules differ by country and, in the US, by state. If you plan to message a large list, or you aren't sure what your forms collected, check with someone qualified before sending." },

  { kind: "h2", text: "What to send an old lead" },
  { kind: "p", text: "The best reactivation messages are short, specific and easy to answer. They remind the person who you are and what they asked about, then ask one question. No discount, no pressure, no paragraph about your company." },
  { kind: "h3", text: "For an unaccepted quote" },
  { kind: "aside", text: "\"Hi Tom, it's Northside Solar. We quoted for panels on your roof back in March. Is that still something you're thinking about? If it is, we can update the quote. If not, no problem at all.\"" },
  { kind: "h3", text: "For an enquiry that never got a visit" },
  { kind: "aside", text: "\"Hi Mia, Northside Electrical here. You asked about an EV charger in April and we didn't manage to get out to you. Sorry about that. Would you still like someone to take a look? Reply with a day that suits.\"" },
  { kind: "h3", text: "For a past customer" },
  { kind: "aside", text: "\"Hi Leo, it's Northside Heating. We fitted your heat pump last autumn, so it's about time for its first service. Would you like us to book you in? Reply STOP if you'd rather not hear from us.\"" },
  { kind: "p", text: "Notice what each one does: it names the job and the month, admits what went wrong if something did, and gives the person a simple yes or no. The past-customer message includes a way to opt out because it is closer to a promotional message. If in doubt, include one." },
  { kind: "h3", text: "What to leave out" },
  { kind: "list", items: [
    "Prices from the old quote. Material costs and incentives may have changed, and quoting a stale number creates a problem later.",
    "Deadlines that aren't real. \"This week only\" on a message to someone you haven't spoken to in seven months reads as spam.",
    "More than two messages. One message, and one follow-up a week later if there is no reply, is plenty. After that, the contact goes back to resting.",
  ] },

  { kind: "h2", text: "Answer replies the same day" },
  { kind: "p", text: "A reactivation message is only worth sending if someone is ready for the replies. A person who writes back \"yes, can you send a new quote?\" on a Tuesday evening is as warm as any new enquiry, and the same rules apply: the faster they hear back, the less likely they are to ask someone else." },
  { kind: "p", text: [
    "That is why the batch size matters. Illustration: if you send to 200 people and one in ten replies, that is 20 conversations, each one wanting a site visit or a revised price, arriving in the same few days. If you're on a roof all week, that's more than you can answer. Twenty contacts at a time keeps it manageable. The reasoning on why reply time matters is in ",
    { text: "speed to lead", href: "/speed-to-lead/" },
    ".",
  ] },
  { kind: "h3", text: "Sort the replies as they come in" },
  { kind: "list", items: [
    [{ text: "\"Yes\" or a question:", bold: true }, " move them straight back into your pipeline as a live lead, and book the visit or send the revised quote."],
    [{ text: "\"Not yet\":", bold: true }, " ask when would be a better time, note the month, and set a reminder for then."],
    [{ text: "\"We went with someone else\" or \"no\":", bold: true }, " thank them, mark them as lost with the reason, and stop."],
    [{ text: "\"Stop\" or anything like it:", bold: true }, " remove them immediately and make sure no other sequence picks them up."],
  ] },

  { kind: "h2", text: "Stop leads going cold again" },
  { kind: "p", text: "Reactivation fixes the backlog once. The longer-term fix is making sure fewer leads end up on that list in the first place. Most of them got there for one of three reasons: the first reply was slow, the quote wasn't chased, or a \"not now\" was never followed up." },
  { kind: "list", items: [
    [{ text: "Answer every new enquiry quickly,", bold: true }, " even if the first reply only confirms it arrived and says when you'll call."],
    [{ text: "Run a short follow-up on every quote,", bold: true }, " with a clear end. The schedule in ", { text: "quote follow up for installers", href: "/quote-follow-up/" }, " is a reasonable starting point."],
    [{ text: "Treat \"not now\" as a date,", bold: true }, " not a dead end. If someone says \"after the summer\", set the reminder for September while you're still talking to them."],
  ] },
  { kind: "p", text: "All of that is easier when every contact, quote and message sits in one CRM with a pipeline, so you can filter for \"quoted more than six months ago, never booked\" instead of scrolling through your phone. Automation can send the first message to each small batch and move contacts between stages when they reply. A person still has to read the replies and decide what each one needs." },
  { kind: "p", text: [
    "In GoHighLevel, the list, the pipeline, the messages and the opt-out handling can all live in one place, which is how ",
    { text: "emmvi sets it up for installers", href: "/services/gohighlevel-automation/" },
    ". The same approach works in other CRMs, as long as an opt-out in one place stops every message everywhere.",
  ] },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How old is too old to contact a lead?" },
  { kind: "p", text: "There is no fixed limit, but the further back you go, the more likely the person has already had the work done or has forgotten you. Leads from the last twelve to eighteen months are usually the most useful. Older ones are worth a try only if your records clearly show what they asked for." },
  { kind: "h3", text: "Should I offer a discount to win them back?" },
  { kind: "p", text: "Usually not in the first message. Most old leads went quiet because of timing, not price, and leading with a discount teaches people to wait. If price was the stated reason they declined, a revised quote is fine once they reply." },
  { kind: "h3", text: "Text or email for old leads?" },
  { kind: "p", text: "Text tends to get read, but it carries more consent rules. Use text where your records show the person agreed to it or contacted you that way about this job. Use email or a call where that's unclear." },
  { kind: "h3", text: "Can this be fully automated?" },
  { kind: "p", text: "The sending and the sorting can be. The conversations can't, and shouldn't be. Someone who replies after seven months wants an answer from a person who knows the job, ideally the same day." },
  { kind: "p", text: [
    "If you'd like your old leads cleaned up, sorted and contacted properly, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const reactivateOldLeads: Post = {
  slug: "reactivate-old-leads",
  title: "Reactivate Old Leads: A Plan for Installers",
  description: "How to reactivate old leads: who to contact, how to check consent first, what to text, and how to handle replies so old quotes turn back into booked jobs.",
  lede: "Most quotes that went quiet months ago were never a firm no.",
  category: "Lead Generation",
  published: "2026-10-09",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/reactivate-old-leads.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
