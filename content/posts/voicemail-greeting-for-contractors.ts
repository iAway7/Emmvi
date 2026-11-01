import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "voicemail greeting for contractors". Fuentes citadas: la pagina de ayuda
 * de Google sobre como se cobran los leads de Local Services Ads y la de
 * Twilio sobre el registro A2P 10DLC, comprobadas el 1 de noviembre de 2026.
 */
const body: Post["body"] = [
  { kind: "p", text: "Thursday, 2:40pm. You're in a loft fitting an inverter and the phone rings in your back pocket. You let it go. The caller hears a robotic voice read your number back to them, then a beep. They hang up without leaving anything and try the next installer on the list. You'll see a missed call from an unknown number tonight and you won't know it was a solar quote request." },
  { kind: "p", text: "For most contractors, voicemail picks up more calls than any person in the business does. It's the first thing a new customer hears when you're on a roof, under a sink or driving between jobs. This article covers what a good greeting says, scripts you can adapt, how long it should be, and why the greeting works best as the first half of a reply, not the whole of it." },

  { kind: "h2", text: "Why your voicemail matters" },
  { kind: "p", text: "A caller who reaches voicemail has three choices: leave a message, call back later, or call someone else. The third one costs them nothing. Your greeting is the only thing standing between that caller and the next result on their screen, so it has a narrow job: make leaving a message feel worth it, and tell them what happens next." },
  { kind: "p", text: "The default carrier greeting does neither. It doesn't confirm they've reached the right business, it doesn't say when they'll hear back, and it doesn't ask for anything useful. A caller who isn't sure they dialed the right number is the one most likely to hang up." },
  { kind: "h3", text: "If you run Local Services Ads" },
  { kind: "p", text: [
    "Paid calls make this sharper. Google's page on ",
    { text: "how Local Services leads work", href: "https://support.google.com/localservices/answer/7195435?hl=en" },
    " says, as of November 2026, that a call reaching your voicemail or an automated greeting during business hours counts as a connected call, and is charged if the caller stays on the line for more than 20 seconds. So a homeowner who listens to your greeting and leaves a message is a lead you've paid for. Whatever that greeting promises, someone has to deliver it. How the ads charge and rank you is covered in ",
    { text: "Local Services Ads for contractors", href: "/local-services-ads-for-contractors/" },
    ".",
  ] },

  { kind: "h2", text: "What a good greeting says" },
  { kind: "p", text: "A greeting that works for a contractor covers four things, in this order:" },
  { kind: "list", ordered: true, items: [
    [{ text: "Who they've reached.", bold: true }, " The business name in the first few words, so the caller knows they dialed the right number."],
    [{ text: "Why you didn't answer.", bold: true }, " One short reason that sounds like work, not like you're ignoring them: \"we're on a job right now\"."],
    [{ text: "What to leave.", bold: true }, " Name, address or town, and what the job is. This turns a vague message into something you can act on from the van."],
    [{ text: "When they'll hear back.", bold: true }, " A real time frame you can keep, such as \"within the hour\" or \"before 6pm today\". If you can't keep it, don't say it."],
  ] },
  { kind: "p", text: "That's it. Every extra sentence is a moment where the caller decides to hang up and try someone else." },
  { kind: "h3", text: "How long it should be" },
  { kind: "p", text: "Aim for something you can say comfortably in about 15 to 20 seconds. Read your script aloud with a timer before you record it. If it runs past 25 seconds, cut the least useful sentence, which is usually the one that explains what your business does. The caller already knows: that's why they called." },
  { kind: "h3", text: "Record it yourself" },
  { kind: "p", text: "Record in a quiet room, not in the van with the engine running. Speak a little slower than normal. Your own voice, or the voice of whoever answers the phone in the office, does more for trust than a polished studio recording." },

  { kind: "h2", text: "Greeting scripts you can adapt" },
  { kind: "p", text: "These are starting points, not finished copy. Swap in your business name, your trade and a callback time you can actually meet. The business names below are made up." },
  { kind: "h3", text: "During working hours" },
  { kind: "aside", text: "Hi, you've reached Brightline Solar. We're on an install right now, so we can't pick up. Leave your name, your town and what you're looking for, and we'll call you back within the hour. You'll also get a text from this number in a minute so you can reply there if that's easier." },
  { kind: "h3", text: "After hours" },
  { kind: "aside", text: "Thanks for calling Corner Plumbing. We're closed for the evening and back at 7:30am. Leave your name, address and what's going on, and we'll call you first thing. If water is leaking right now, turn off the main stop valve and say \"urgent\" in your message so we see it first." },
  { kind: "p", text: [
    "Only promise an emergency response if someone is actually on call. If nobody is, say when you'll be back and give the caller something useful to do in the meantime, like the stop valve line above. Covering nights properly is a separate decision, and the options are laid out in ",
    { text: "after-hours answering service", href: "/after-hours-answering-service/" },
    ".",
  ] },
  { kind: "h3", text: "Busy season" },
  { kind: "aside", text: "Hi, this is Northside Heating. It's our busy season and we're out on jobs, so we're returning calls in the order they come in, usually the same day. Leave your name, address and the make of your system if you know it, and we'll get back to you." },
  { kind: "p", text: "A busy-season greeting sets an honest expectation. It's better to say \"same day\" and call back at 4pm than to say \"within the hour\" and call back at 4pm." },

  { kind: "h2", text: "Pair the greeting with a text back" },
  { kind: "p", text: "Here's the limit of any greeting: plenty of callers won't leave a message, however good it is. They hang up and move on. A voicemail only helps with the callers who stay. The ones who don't are still sitting in your missed calls list, with no name and no idea what they wanted." },
  { kind: "p", text: [
    "A missed call text back covers that gap. When a call goes unanswered, your phone system sends a short text to the caller's number within a minute, whether they left a message or not. The caller can reply in writing while they're still looking for someone, and you can read it on a ladder without calling back. How that works and what the first text should say is in ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    ".",
  ] },
  { kind: "p", text: "The two work together. The greeting tells the caller a text is coming, so it doesn't look like spam when it arrives. The text gives the caller who didn't want to talk to a machine another way in. And when they reply, the conversation is already in writing, with their address and job in it." },
  { kind: "aside", text: "Hi, this is Brightline Solar. Sorry we missed your call, we're on an install. What can we help with? Reply here with your town and what you're after, and we'll get back to you within the hour." },
  { kind: "aside", tone: "tip", text: "Write the greeting and the text back together, on the same piece of paper. They should name the same business, promise the same callback time and ask for the same details. If the greeting says \"within the hour\" and the text says \"later today\", the caller trusts neither." },
  { kind: "h3", text: "Texting rules in the US" },
  { kind: "p", text: [
    "If the text back comes from a local 10-digit business number in the United States, the sender usually has to be registered. Twilio's ",
    { text: "A2P 10DLC documentation", href: "https://www.twilio.com/docs/messaging/compliance/a2p-10dlc" },
    " says that anyone sending SMS over a 10DLC number from an application to the US must register. Most business phone and CRM tools walk you through this, but it takes time to approve, so start it before you plan to switch the texts on. More on business numbers and texting in ",
    { text: "business texting for contractors", href: "/business-texting-for-contractors/" },
    ".",
  ] },

  { kind: "h2", text: "Setting it up on your phone" },
  { kind: "p", text: "Where you record the greeting depends on how calls reach you." },
  { kind: "list", items: [
    [{ text: "Personal mobile used for work.", bold: true }, " Record it in your phone's voicemail settings or by calling your carrier's voicemail line. It works, but one greeting has to cover both business callers and your family."],
    [{ text: "A business phone app or VoIP number.", bold: true }, " Most let you set separate greetings for working hours and after hours, and switch between them on a schedule. This is where the scripts above fit best."],
    [{ text: "A CRM with calling built in.", bold: true }, " The greeting, the missed call text and the contact record all live in one place, so a missed call creates a lead with the caller's number and any reply attached."],
  ] },
  { kind: "p", text: "Whichever you use, call your own number from another phone once a month and listen to what a customer hears. Greetings get forgotten. The one recorded in January still promising a spring offer in August tells the caller nobody is paying attention." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. The right setup depends on your call volume, who answers the phone and the tools you already pay for. Some contractors are better off with a person answering during working hours; others only need a clear greeting and a text back. Start with the lightest setup that gets every caller a reply." },

  { kind: "h2", text: "What a greeting can't fix" },
  { kind: "p", text: "A greeting is a promise, and it only works if the callback happens. If messages sit in voicemail until the end of the day, a better script won't change much. A few things decide whether the promise holds:" },
  { kind: "list", items: [
    [{ text: "Someone owns the callbacks.", bold: true }, " Decide who listens to messages and when: between jobs, at lunch, at a fixed time. \"Whoever sees it\" usually means nobody."],
    [{ text: "Messages become leads.", bold: true }, " A voicemail that's played once and deleted is gone. Put the name, number and job somewhere the whole business can see it."],
    [{ text: "The first reply is fast.", bold: true }, " Even a short text saying you'll call at 5pm keeps the caller from moving on. Why the first few minutes matter is covered in "
    , { text: "speed to lead", href: "/speed-to-lead/" }, "."],
  ] },
  { kind: "p", text: "Get those right and the greeting does what it should: holds the caller for a few seconds, gets the details you need, and hands over to a person who calls back when they said they would." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "What should a contractor's voicemail greeting say?" },
  { kind: "p", text: "Your business name, a short reason you can't answer, what details to leave (name, address, the job) and when they'll hear back. Keep it to about 15 to 20 seconds and only promise a callback time you can keep." },
  { kind: "h3", text: "Should I have a different greeting after hours?" },
  { kind: "p", text: "Yes, if your phone system allows it. An after-hours greeting should say when you're back and, if nobody is on call, give the caller something useful to do until then rather than promising an emergency response." },
  { kind: "h3", text: "Do customers still leave voicemails?" },
  { kind: "p", text: "Some do and many don't. That's why the greeting works best alongside a missed call text back, which reaches the caller whether they left a message or hung up." },
  { kind: "h3", text: "Can I set up the greeting and the text back together?" },
  { kind: "p", text: [
    "Most business phone apps and CRMs with calling handle both, along with logging the missed call as a lead. If you'd rather have it set up and run for you, you can ",
    { text: "get in touch", href: "/contact-us/" },
    ".",
  ] },
];

export const voicemailGreetingForContractors: Post = {
  slug: "voicemail-greeting-for-contractors",
  title: "Voicemail Greeting for Contractors: Scripts and Setup",
  description: "Voicemail greeting scripts for contractors: what to say, how long to keep it, and how to pair it with a text back so callers don't ring someone else.",
  lede: "Your voicemail answers more calls than you do. Make it say what happens next.",
  category: "Automation",
  published: "2026-11-01",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/voicemail-greeting-for-contractors.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
