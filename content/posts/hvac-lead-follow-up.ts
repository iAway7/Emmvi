import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "hvac lead follow up". La pagina del IRS sobre el Energy Efficient Home
 * Improvement Credit se comprobo el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's 7am on the first cold Monday of the year. Overnight, eleven people filled in your form or left a voicemail. Four have no heat, three want a quote on a new furnace, two are asking about heat pumps, and two just want a tune-up before winter. By 9am, the four with no heat have called somebody else. The heat pump questions sit in the inbox until Thursday." },
  { kind: "p", text: "HVAC leads are not all the same, and following them up the same way loses both kinds. A homeowner with a dead furnace needs an answer in minutes. A homeowner weighing a new system needs a reply today and then steady, useful follow-up for weeks. This article separates the two and covers a third source most shops forget: the leads your own technicians find in the field." },

  { kind: "h2", text: "Two kinds of HVAC leads" },
  { kind: "p", text: "Before you set up any follow-up, sort what comes in into two groups. They need different speeds, different messages and often different people." },
  { kind: "list", items: [
    [{ text: "Service and repair calls.", bold: true }, " No heat, no cooling, a strange noise, water under the unit. The homeowner wants someone to come out, and they will book whoever confirms first."],
    [{ text: "Replacement and install requests.", bold: true }, " A new furnace, a heat pump, a full system. The homeowner expects a visit, a quote and time to think. They are often comparing two or three companies."],
  ] },
  { kind: "p", text: "Tune-ups and maintenance plans sit in between. They are not urgent, but they are where many replacement jobs start, so they deserve a proper reply rather than a slot in the queue." },
  { kind: "h3", text: "Ask one question up front" },
  { kind: "p", text: "The easiest way to sort leads is to let the homeowner do it. A form or a first text that asks \"Is your system working right now?\" tells you straight away which track the lead belongs on. Keep the rest of the form short. Address, phone and that one question are enough to act on." },

  { kind: "h2", text: "Follow up on service calls fast" },
  { kind: "p", text: [
    "For a repair call, follow-up is measured in minutes, not days. The homeowner is cold or hot and calling down a list. The general case for replying fast is in ",
    { text: "speed to lead for installers", href: "/speed-to-lead/" },
    ". For HVAC service calls, three things matter most.",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "An instant reply that says what happens next.", bold: true }, " Not \"Thanks for your message\", but when you will call and what you need from them."],
    [{ text: "A real person within the hour.", bold: true }, " The automatic reply buys you time. It does not book the job. Someone has to call or offer a slot."],
    [{ text: "A follow-up if they go quiet.", bold: true }, " If they don't answer your call, send one text with two time options. If they have already booked elsewhere, they will usually say so, and you can stop."],
  ] },
  { kind: "aside", text: "Hi Linda, it's Joe from Northside Heating. Sorry you're without heat. We can be there today between 1 and 3pm, or tomorrow from 8am. Reply 1 for today or 2 for tomorrow, or call us on this number." },
  { kind: "h3", text: "After hours and on the roof" },
  { kind: "p", text: "Most missed HVAC leads are not ignored. They come in while the tech is in an attic, on a roof or driving between jobs. An automatic text back for every missed call, and an automatic reply for every form, means the homeowner hears from you even when nobody can pick up. It only works if someone then follows through, so the reply should promise a time you can keep." },

  { kind: "h2", text: "Follow up on replacement quotes" },
  { kind: "p", text: [
    "Replacement leads are slower and worth more. The follow-up job is to keep a sensible conversation going from the first request to a signed quote. The general sequence is in ",
    { text: "quote follow up for installers", href: "/quote-follow-up/" },
    ". For HVAC replacements, a few points need extra care.",
  ] },
  { kind: "h3", text: "Book the visit while they are interested" },
  { kind: "p", text: "Offer two times for the home visit in the first reply. Ask whether everyone who decides can be there. A quote explained to one partner and retold to the other loses detail, usually the parts that justify the price." },
  { kind: "h3", text: "Send the quote with a date to talk" },
  { kind: "p", text: "Before you leave the house, agree when the quote will arrive and when you will go through it together. Then the follow-up is a call they expect, not a chase. If you send several options, such as a repair, a standard system and a higher-efficiency one, say plainly which one you would choose for their house and why." },
  { kind: "h3", text: "Answer the questions they will ask" },
  { kind: "p", text: "Replacement quotes raise the same questions every time: financing, how long the install takes, what happens to the old unit, the warranty, and whether a heat pump makes sense in their climate. Each follow-up message can answer one of these. That keeps you useful without asking \"Any questions?\" three times." },
  { kind: "aside", text: "Hi Mark, it's Joe from Northside Heating. A few people have asked how long a furnace swap takes, so here's the short version: most are done in one day, and you'll have heat that night. Happy to go through your quote on Thursday as planned." },
  { kind: "h3", text: "Close the loop" },
  { kind: "p", text: "After two or three weeks, ask directly whether they have decided, and accept the answer. If it is \"not this year\", note the reason and the month they mentioned, and set a reminder for then. A homeowner who patched an old furnace in November is a likely replacement the following autumn." },

  { kind: "h2", text: "Leads your technicians find" },
  { kind: "p", text: "Some of the best replacement leads never touch your website. A tech on a repair or a tune-up notices a cracked heat exchanger, a 20-year-old system or a unit that keeps failing, and tells the homeowner it might be time to replace it. Then the tech drives to the next job, and nobody follows up." },
  { kind: "p", text: "These leads are warm. The homeowner has already met someone from your company and heard the problem from them. What they lack is a next step. A simple process fixes this:" },
  { kind: "list", items: [
    "The tech marks the job with \"Replacement opportunity\" and a short note before leaving, from their phone.",
    "That creates a lead in the sales pipeline, with the system's age and the problem found.",
    "The homeowner gets a message the same day saying someone will be in touch about options, and when.",
    "Someone from sales calls within two working days, and the normal quote follow-up takes over from there.",
  ] },
  { kind: "aside", tone: "tip", text: "Make the tech's part one tap and one sentence. If flagging a replacement means filling in a form back at the office, it won't happen on a busy day, and busy days are when most of these leads appear." },
  { kind: "p", text: [
    "Keeping repair jobs, replacement quotes and tech-found leads in separate pipeline stages makes this visible. How to set those stages up is covered in ",
    { text: "HVAC CRM for installers", href: "/hvac-crm/" },
    ".",
  ] },

  { kind: "h2", text: "When the season turns" },
  { kind: "p", text: "HVAC demand swings with the weather. The first hot week and the first cold week bring a rush of service calls, and the follow-up that works in a quiet month falls apart when there are fifty new leads a day." },
  { kind: "h3", text: "Before the rush" },
  { kind: "p", text: [
    "Check your automatic replies, missed-call texts and booking times before the season starts, not during it. Use the quiet weeks to contact past customers about tune-ups, which fills the calendar early and finds failing systems before they break. ",
    { text: "HVAC maintenance reminders", href: "/hvac-maintenance-reminders/" },
    " covers how to schedule those.",
  ] },
  { kind: "h3", text: "During the rush" },
  { kind: "p", text: "Be honest about wait times. A reply that says \"We're fully booked today, the first slot is Wednesday morning\" lets the homeowner decide. A reply that promises a call back and never delivers is worse than no reply. And keep replacement leads moving even when service calls take every truck: a quote that waits three weeks for a follow-up is usually lost." },

  { kind: "h2", text: "Check your old message templates" },
  { kind: "p", text: [
    "Many HVAC follow-up templates, including some written in the last two years, mention a federal tax credit of up to $2,000 for heat pumps. That line needs checking. The IRS page on the ",
    { text: "Energy Efficient Home Improvement Credit", href: "https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit" },
    " says the credit is allowed for qualifying property placed in service \"before December 31, 2025\" (as checked in November 2026).",
  ] },
  { kind: "p", text: "Go through your saved texts, email sequences and quote templates for anything about federal credits on heat pumps or furnaces. A homeowner who is told about a credit that no longer applies has a reason to doubt the rest of the quote. Where utility rebates or state programs exist, name the program and the date you checked it, because these change too." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. The right timing, channels and wording depend on your market, your team and the rules on texting and calling customers where you work. Check incentives and messaging rules for your own area before you automate anything." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How fast should I follow up on an HVAC service call?" },
  { kind: "p", text: "As fast as you can do it properly. An automatic reply can go out in under a minute, day or night. A person should call or offer a time as soon as possible after that, because a homeowner without heat or cooling usually books the first company that confirms a visit." },
  { kind: "h3", text: "How many times should I follow up on a replacement quote?" },
  { kind: "p", text: "Plan three or four messages over two to three weeks, each with a reason: the agreed call, an answer to a common question, and a final message asking whether they have decided. Stop when they say no. Slow down when they say \"not yet\"." },
  { kind: "h3", text: "Which parts can be automated?" },
  { kind: "p", text: [
    "The first reply, missed-call texts, visit reminders, the quote follow-up sequence and the reminder for \"not this year\" leads can all run on their own and stop when the homeowner replies. Diagnosing a system, talking through a quote and handling doubts still need a person. If you'd like that set up for your business, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const hvacLeadFollowUp: Post = {
  slug: "hvac-lead-follow-up",
  title: "HVAC Lead Follow Up: Service Calls and Replacements",
  description: "How HVAC companies can follow up on leads: minutes for no-heat service calls, weeks for replacement quotes, plus the leads your technicians find.",
  lede: "Service calls need minutes. Replacement quotes need weeks. Plan for both.",
  category: "Lead Generation",
  published: "2026-11-02",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/hvac-lead-follow-up.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
