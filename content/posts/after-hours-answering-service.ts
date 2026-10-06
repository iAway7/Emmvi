import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "after hours answering service". La unica fuente citada se comprobo en la
 * pagina oficial el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It is 10:15 on a Sunday night. A homeowner is standing in a kitchen with a towel wrapped around a pipe under the sink, and they are ringing the first three plumbers on their screen. Two of them go to voicemail. One answers, or at least something answers, and that is the company that gets the job, the review and probably the next boiler service too." },
  { kind: "p", text: "Most plumbing and HVAC owners know this happens. The harder question is what to do about it without spending every evening on the phone or paying for a service that answers calls you never wanted to take. This article walks through the options, from a simple text back to a live answering service, and how to decide which calls deserve which." },

  { kind: "h2", text: "What happens to a call at 10pm" },
  { kind: "p", text: "A call outside working hours lands in one of three places: a personal phone that someone may or may not hear, a voicemail box, or nowhere at all. Each one has the same weakness. The caller gets no sign that a real business saw the call, so they keep dialling until someone gives them that sign." },
  { kind: "p", text: "Not every one of those callers is an emergency. In a normal week, the evening calls to a plumbing or HVAC business are a mix of three kinds:" },
  { kind: "list", items: [
    [{ text: "Real emergencies.", bold: true }, " Water coming through a ceiling, no heat in a cold snap, a gas smell. These need a person tonight, or a clear instruction about who to call instead."],
    [{ text: "Urgent but not tonight.", bold: true }, " A dripping tap, an AC unit that is struggling, a water heater making noises. The caller wants to know someone will come soon, not at midnight."],
    [{ text: "Quote requests.", bold: true }, " A new bathroom, a heat pump, a full repipe. The homeowner is planning, often in the evening because that is when they have time. Nobody needs to drive anywhere."],
  ] },
  { kind: "p", text: "The mistake is to treat all three the same. Sending every call to an on-call phone burns out whoever carries it. Sending every call to voicemail loses the emergencies and slows down the quote requests. The first step is deciding which is which." },

  { kind: "h2", text: "Sort calls before you pick a tool" },
  { kind: "p", text: "Before comparing answering services, write down your own rules. It takes half an hour and it decides almost everything else." },
  { kind: "h3", text: "Decide what counts as an emergency" },
  { kind: "p", text: "Make a short list in plain words: active leak, no heat below a certain outdoor temperature, no hot water for a household with a baby, sewage backing up. Then make the opposite list: things you will not attend at night, whatever the caller says. A dripping outside tap. A thermostat question. A quote." },
  { kind: "p", text: "Anything that involves a gas smell or danger to someone's safety does not belong on either list. That caller should be told to leave the house and contact the gas utility or emergency services, and your night setup should say so in the first sentence they hear or read." },
  { kind: "h3", text: "Decide who is on call, and what they charge" },
  { kind: "p", text: "If you offer emergency callouts, someone has to be reachable and willing to drive. Name that person for each night of the week, agree the callout fee, and decide whether the fee is quoted on the phone. If nobody is on call on a given night, the honest answer to an emergency caller is \"we can't attend tonight\", said quickly, so they can find someone who can." },
  { kind: "h3", text: "Decide what the morning looks like" },
  { kind: "p", text: "Every call that is not attended tonight becomes a task for tomorrow. Decide who reads the overnight list, by what time, and who calls back. Without that, an answering service only moves the pile from the phone to an inbox." },

  { kind: "h2", text: "Four ways to cover the phone at night" },
  { kind: "p", text: "Once the rules exist, the tool is mostly a question of budget and how many emergency calls you actually get. These are the four common setups, from cheapest to most involved." },
  { kind: "h3", text: "1. Voicemail with a clear greeting" },
  { kind: "p", text: "The minimum. The greeting says you are closed, gives the emergency instruction, and asks for a name and address. It costs nothing, but many callers hang up without leaving a message, and a message left at 10pm is not read until morning." },
  { kind: "h3", text: "2. Missed call text back" },
  { kind: "p", text: [
    "When a call goes unanswered, the caller gets a text from your business number within seconds, with a night version of the message. Quote requests and non-urgent calls usually move to text without any trouble, and you read them first thing. We explained the mechanics in ",
    { text: "missed call text back for installers", href: "/missed-call-text-back/" },
    ". On its own it does not help a real emergency, unless the text tells the caller what to do or who to ring.",
  ] },
  { kind: "h3", text: "3. Forward to an on-call phone" },
  { kind: "p", text: "Calls after a set time ring the mobile of whoever is on call. It works for small rotas, but that person also gets the thermostat questions and the 11pm quote requests. A simple fix is to put a short menu in front: press one for an emergency, otherwise leave a message or wait for the text." },
  { kind: "h3", text: "4. A live answering service" },
  { kind: "p", text: "A third party answers in your business name, follows a script you give them, and passes emergencies to the on-call phone. Everything else is taken as a message. This is the only option where a human talks to the caller at night without that human being you. It also costs the most, and the quality depends entirely on the script and on how the messages reach you." },
  { kind: "p", text: "Some services now use AI voice agents instead of, or alongside, people. The same questions apply: what does it say to a gas smell, can it tell an emergency from a quote, and where does the message end up. Ask for a recording or a test call before signing anything." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. If you get one emergency call a month, a text back and a clear voicemail greeting may be enough. If you sell emergency callouts as a service, a live answer usually earns its cost. Check prices and contract terms on each provider's own page, because they change." },

  { kind: "h2", text: "What the night message should say" },
  { kind: "p", text: "Whichever setup you choose, the caller should hear or read the same four things: who they reached, that you are closed now, what to do if it is an emergency, and when they will hear back. A text version for the after-hours text back:" },
  { kind: "aside", text: "\"Hi, this is Riverside Plumbing. We're closed for the night. If water is coming through a ceiling, reply URGENT and our on-call plumber will see it. If you smell gas, leave the house and call your gas company. For anything else, tell us what you need and we'll reply by 8am.\"" },
  { kind: "h3", text: "Promise only what someone will do" },
  { kind: "p", text: "\"We'll reply by 8am\" is a good line only if somebody reads the messages before 8am. \"Our on-call plumber will see it\" is only true if the URGENT reply actually reaches that phone as a notification. Test it yourself on a Sunday night: call your own number from another phone, reply URGENT, and see what happens." },
  { kind: "h3", text: "Match your Google hours to reality" },
  { kind: "p", text: [
    "Your Google Business Profile shows people whether you are open before they ring. Google lets you set separate hours for specific services: its help page on ",
    { text: "special hours", href: "https://support.google.com/business/answer/6303076?hl=en" },
    " says that a business with services on different times can set \"More hours\" instead (as of October 2026). If you really take emergency calls at night, say so there. If you don't, don't list 24 hours just to appear in the evening results: the callers you disappoint are the ones most likely to leave a review.",
  ] },

  { kind: "h2", text: "What happens at 7am" },
  { kind: "p", text: "The overnight calls are only worth catching if the morning turns them into jobs. This is the part most setups skip." },
  { kind: "list", ordered: true, items: [
    [{ text: "Everything lands in one list.", bold: true }, " Voicemails, text replies and answering service messages should end up attached to a contact in the same place, not split between an email inbox, a phone and a supplier portal."],
    [{ text: "One person owns the list.", bold: true }, " Name them. If the list belongs to everyone, the call from the woman with the struggling water heater gets made at 3pm, after she booked someone else."],
    [{ text: "Quote requests get a real reply first.", bold: true }, " The homeowner planning a new bathroom at 10pm is comparing companies. A proper reply in the morning, with a time for a site visit, puts you ahead of the ones still to call back."],
    [{ text: "Unanswered contacts get one follow-up.", bold: true }, " If someone never replied to the night text, one message the next afternoon is fair. After that, stop."],
  ] },
  { kind: "p", text: [
    "A CRM is what keeps that list honest: each call becomes a contact with a next step, and you can see the ones still waiting. We covered what a plumbing business needs from one in ",
    { text: "CRM for plumbers", href: "/crm-for-plumbers/" },
    ", and the heating and cooling version in ",
    { text: "HVAC CRM", href: "/hvac-crm/" },
    ".",
  ] },
  { kind: "aside", tone: "tip", text: "Tag every call that arrives outside working hours. After a couple of months you will know how many there are, how many were real emergencies and how many became paid jobs, which is the only fair way to decide whether a live answering service is worth paying for." },
  { kind: "p", text: "Illustration: if the tag shows twelve after-hours calls a month and only one was a real emergency, a text back plus a clear morning routine covers eleven of them, and the question becomes whether that one call justifies a monthly fee. Your own numbers will be different, and that is the point of counting them." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Do I need an after hours answering service if I don't do emergency work?" },
  { kind: "p", text: "Usually not. If you never attend at night, the evening calls are quote requests and non-urgent jobs. A missed call text back with a night message, plus someone reading the replies each morning, handles those. Make sure the message tells emergency callers clearly that you can't attend, so they move on fast." },
  { kind: "h3", text: "Will an answering service book jobs into my calendar?" },
  { kind: "p", text: [
    "Some can, if you give them access and clear rules about which slots to offer. Many owners prefer that the service takes the details and their own team confirms the time, because a booking made without the right questions wastes a morning. If you let customers book directly, ",
    { text: "appointment reminder texts", href: "/appointment-reminder-text/" },
    " keep those visits from becoming no-shows.",
  ] },
  { kind: "h3", text: "Is it fine to text someone back after they called me at night?" },
  { kind: "p", text: "Replying by text to someone who just called your business number is a normal part of answering that call. Sending them marketing messages later is a different thing with its own consent rules, which vary by country and state. Keep the night text about their call, and check the rules where you work before adding anything promotional." },
  { kind: "h3", text: "How fast should the morning callback be?" },
  { kind: "p", text: "As early as you can make it a habit. A homeowner who called three companies last night may book whichever one rings first. Pick a time your team can really keep, say it in the night message, and treat it as a promise." },
  { kind: "p", text: [
    "If you would rather have the night message, the overnight list and the morning follow-up set up and running for you, ",
    { text: "tell us how your calls come in", href: "/contact-us/" },
    ".",
  ] },
];

export const afterHoursAnsweringService: Post = {
  slug: "after-hours-answering-service",
  title: "After Hours Answering Service for Plumbers and HVAC",
  description: "After hours answering service for plumbers and HVAC: how to sort night calls, the four ways to cover the phone, what to say and the 7am follow-up.",
  lede: "Decide which night calls are emergencies before you pay anyone to answer.",
  category: "Automation",
  published: "2026-10-06",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/after-hours-answering-service.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
