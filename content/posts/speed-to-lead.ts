import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (septiembre de 2026). Palabra clave:
 * "speed to lead". El articulo de Harvard Business Review y la pagina de A2P
 * 10DLC de Twilio citados se comprobaron en la fuente el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's 9:04 on a Thursday night. A homeowner has just filled in the form on your website asking for a price on solar panels. She filled in two other installers' forms in the same ten minutes, because that's how people shop for a big job now. The first business to reply with something useful gets the conversation. The other two get a polite \"we've already booked someone\" on Monday, if they get anything at all." },
  { kind: "p", text: "That gap between the enquiry arriving and your first real reply has a name in sales: speed to lead. This article explains what it means for an installer or home-service business, what the research does and doesn't show, where the first hour usually gets lost, and how to close the gap without sitting by the phone all evening." },

  { kind: "h2", text: "What speed to lead means" },
  { kind: "p", text: "Speed to lead is the time between someone asking you for something (a form, a call, a text, a message from a directory) and your business making real contact with them. Contact the customer can see and reply to, not an email sitting in a shared inbox." },
  { kind: "p", text: "For most installers it's never measured, so nobody knows the number. Ask around the office and you'll hear \"we get back to people the same day\". Then look at the timestamps and find that the form sent on Thursday night got its reply on Friday afternoon, after the site visit ran long." },
  { kind: "h3", text: "Why it matters more for installers" },
  { kind: "p", text: "A homeowner asking for a solar quote, a new boiler or an EV charger rarely asks just one company. They're comparing, and they're doing it while the idea is fresh. The first reply doesn't win the job on its own, but it decides who gets to ask the questions, book the visit and set the price everyone else is measured against." },

  { kind: "h2", text: "What the research says, and doesn't" },
  { kind: "p", text: [
    "The study most often quoted on this is ",
    { text: "\"The Short Life of Online Sales Leads\"", href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads" },
    " in Harvard Business Review (Oldroyd, McElheran and Elkington, 2011). The authors looked at 1.25 million sales leads received by 42 US companies. Firms that tried to contact a potential customer within an hour were ",
    { text: "nearly seven times as likely to qualify the lead", bold: true },
    " (have a meaningful conversation with a decision maker) as firms that tried even an hour later, and more than 60 times as likely as those that waited 24 hours or longer.",
  ] },
  { kind: "p", text: "The same article reports an audit of 2,241 US companies that were sent a test web lead. 37% responded within an hour, 24% took more than a day, and 23% never responded at all. Among those that did reply within 30 days, the average response time was 42 hours." },
  { kind: "h3", text: "The limits worth knowing" },
  { kind: "p", text: "The data is from 2011, it covers web leads across many industries rather than installers specifically, and \"qualify the lead\" means getting a conversation, not winning a job. It doesn't tell you how many extra jobs a faster reply will bring you, and nobody who's honest can. What it does support is the direction: interest cools quickly, and a business that replies in minutes is working with a warmer enquiry than one that replies tomorrow." },

  { kind: "h2", text: "Where installers lose the first hour" },
  { kind: "p", text: "Slow replies are rarely laziness. They come from how the work is organised. The same few patterns show up in almost every installer and home-service business:" },
  { kind: "list", items: [
    [{ text: "The enquiry lands where nobody is looking.", bold: true }, " Website forms go to an info@ address that gets checked once a day. Directory leads arrive in an app nobody has on their phone."],
    [{ text: "The person who should reply is on a job.", bold: true }, " On a roof, in a loft or under a sink, with both hands busy. By the time they check their phone, three more things have come in."],
    [{ text: "Evenings and weekends.", bold: true }, " Homeowners research big purchases after work. An enquiry at 9pm on a Friday can easily wait until Monday morning, which is roughly 60 hours."],
    [{ text: "Nobody owns it.", bold: true }, " Everyone assumes someone else has replied. The office thinks the owner rang back, the owner thinks the office did."],
    [{ text: "Missed calls with no voicemail.", bold: true }, " The caller hangs up and rings the next number. Unless someone checks the call log, the enquiry never existed."],
  ] },
  { kind: "p", text: [
    "The last one is common enough that it has its own fix, covered in ",
    { text: "how missed call text back works for installers", href: "/missed-call-text-back/" },
    ".",
  ] },

  { kind: "h2", text: "What a fast first reply looks like" },
  { kind: "p", text: "You can't be on the phone to every enquiry within five minutes. You can make sure every enquiry gets an honest, useful reply within a minute, and a person within a time you've actually committed to." },
  { kind: "h3", text: "The automatic reply" },
  { kind: "p", text: "When a form comes in, the system sends a text (and an email, if you have the address) straight away. It should name your business, confirm what they asked for, and give one clear next step. Something like:" },
  { kind: "aside", text: "\"Hi Sarah, this is Northside Solar. Thanks for your enquiry about solar panels. We're out on jobs this evening. Can we call you tomorrow at 9, or would another time suit better? Just reply here.\"" },
  { kind: "p", text: "That message does three things. It proves a real business received the enquiry, it sets an expectation you can keep, and it invites a reply on the channel the customer is already holding. If she replies \"9 works\", the conversation is already under way before any competitor has seen their inbox." },
  { kind: "h3", text: "Rules for the wording" },
  { kind: "list", items: [
    [{ text: "Name the business in the first line.", bold: true }, " A text from an unknown number that doesn't say who it is looks like spam."],
    [{ text: "Repeat what they asked for.", bold: true }, " \"Your enquiry about solar panels\" shows the message isn't a blanket reply to everyone."],
    [{ text: "Ask one question.", bold: true }, " A time to call, or the one detail you really need. Not a form in text form."],
    [{ text: "Only promise what will happen.", bold: true }, " \"We'll call you tomorrow at 9\" is fine if someone will. \"An expert will call you in 5 minutes\" is not, when your expert is up a ladder."],
  ] },
  { kind: "h3", text: "The person behind it" },
  { kind: "p", text: "The automatic reply buys time; it doesn't replace a person. Whoever handles enquiries should get a notification on their phone the moment a reply comes back, and there should be a clear rule for how quickly a human follows up: within two working hours, say, or first thing the next morning for anything that arrives after hours. Write the rule down. A standard nobody has agreed to is a wish." },

  { kind: "h2", text: "How to set it up" },
  { kind: "p", text: "Most CRMs aimed at small service businesses can do this. The setup matters more than the brand of software." },
  { kind: "list", ordered: true, items: [
    [{ text: "Send every source to one place.", bold: true }, " Website forms, missed calls, texts, directory leads and social messages should all create a contact in the same system, with the source recorded. If one channel still lands in a personal inbox, that's where the slow replies will hide."],
    [{ text: "Write the first reply for each source.", bold: true }, " A form enquiry, a missed call and a directory lead need slightly different wording. Keep each one short."],
    [{ text: "Split office hours and after hours.", bold: true }, " Say honestly when someone will be in touch. A reply at 9pm that promises a call \"shortly\" and then goes quiet until Monday does more harm than no reply."],
    [{ text: "Alert a named person.", bold: true }, " Not a shared inbox. A push notification or text to whoever is on enquiries that day, with the customer's reply in it."],
    [{ text: "Add a follow-up for silence.", bold: true }, " If the customer doesn't reply to the first message, one more the next day is reasonable. After that, stop."],
  ] },
  { kind: "p", text: [
    "In the US, business texts sent from a regular 10-digit number go through carrier registration. Twilio's ",
    { text: "A2P 10DLC documentation", href: "https://www.twilio.com/docs/messaging/compliance/a2p-10dlc" },
    " says that anyone sending SMS over a 10-digit long code number from an application to the US must register (as of September 2026). Most CRMs that include texting walk you through it, but it can take days, so start before you need it. Only text people who contacted you or agreed to hear from you, and honour STOP replies.",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. If you get two enquiries a week and answer them all yourself within the hour, you may not need any of this. It earns its place when enquiries arrive while everyone is on site, or out of hours." },
  { kind: "p", text: [
    "Once the first reply is handled, the next leak is usually the quote that goes out and never gets chased. That part is in ",
    { text: "our guide to quote follow up", href: "/quote-follow-up/" },
    ".",
  ] },

  { kind: "h2", text: "How to measure your own speed" },
  { kind: "p", text: "You don't need a dashboard to start. Take the last 20 enquiries and write down two times for each: when it arrived and when the customer first heard from a person. Then look at the spread, not the average. The average hides the Friday night form that waited until Monday." },
  { kind: "p", text: "Illustration: if 14 of those 20 got a reply within an hour and 6 waited overnight or longer, the question isn't whether you're fast on a good day. It's what happened to those 6 and whether any of them went with someone else." },
  { kind: "p", text: [
    "Once everything runs through a CRM, the same numbers come from the timestamps automatically: time to first reply, time to first human contact, and which sources wait longest. That's the part of ",
    { text: "what a solar installer needs from a CRM", href: "/solar-crm/" },
    " that pays for itself soonest, and it works the same for ",
    { text: "an HVAC business", href: "/hvac-crm/" },
    " or any other trade.",
  ] },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "What is a good speed to lead time?" },
  { kind: "p", text: "For the first reply, under a minute is realistic with automation. For a person to be in touch, within an hour during working hours is a good target, based on the HBR research. Out of hours, what matters is saying honestly when you'll call and then doing it." },
  { kind: "h3", text: "Isn't an automatic reply impersonal?" },
  { kind: "p", text: "Only if it pretends to be something it isn't. A short message that names your business, repeats what the customer asked for and says when a person will be in touch reads as organised, not robotic. Customers mind silence much more than a clear holding message." },
  { kind: "h3", text: "Does replying first mean I win the job?" },
  { kind: "p", text: "No. Price, reviews, the site visit and the quote still decide it. Replying first means you're in the conversation while the customer is still keen, instead of trying to get into it after they've spoken to someone else." },
  { kind: "h3", text: "Do I need a CRM for this?" },
  { kind: "p", text: "You need something that catches every enquiry in one place and sends the first reply without you. Some phone systems and form tools can do part of it. A CRM does all of it and keeps the history, which is why most businesses end up there." },
  { kind: "p", text: [
    "If you'd rather have the instant reply and the follow-up built for you, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const speedToLead: Post = {
  slug: "speed-to-lead",
  title: "Speed to Lead: How Installers Reply Before Anyone Else",
  description: "What speed to lead means for installers, what the research does and doesn't show, where the first hour gets lost and how to reply in under a minute.",
  lede: "Homeowners ask three installers at once. The first useful reply gets the conversation.",
  category: "Automation",
  published: "2026-09-27",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/speed-to-lead.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
