import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "estimate follow up call script". Tercer hermano de estimate-follow-up-text
 * y estimate-follow-up-email: la llamada del dia 3, el buzon de voz y las
 * cuatro respuestas habituales. Las horas de llamada y el "si te piden que no
 * llames, para" se comprobaron el dia de publicacion en las FAQ de la FTC.
 */
const body: Post["body"] = [
  { kind: "p", text: "You sent the estimate for the heat pump on Monday. The email was opened, the text got a thumbs up, and since then nothing. It's Thursday, you're between jobs in the van, and the honest answer to \"should I call them?\" is yes. The problem is what to say in the first ten seconds, so the call doesn't sound like a sales pitch or an apology." },
  { kind: "p", text: [
    "This is the phone half of your follow-up. The written messages are in ",
    { text: "estimate follow up text", href: "/estimate-follow-up-text/" },
    " and ",
    { text: "estimate follow up email", href: "/estimate-follow-up-email/" },
    ". Below is a short call script, a voicemail that gets called back, and what to say to the four answers you'll hear most. Read it once, then put it in your own words: a script read aloud sounds like one.",
  ] },

  { kind: "h2", text: "When a call beats a text or email" },
  { kind: "p", text: "Texts and emails are easier to send and easier to ignore. A call is the opposite. It takes more of your time and the customer's, so use it where it earns that time: bigger jobs, estimates with options the customer has to choose between, and anyone who said at the visit that they'd rather talk." },
  { kind: "p", text: "A call also finds out things a message never will. The tone of \"we're still thinking\" tells you whether that means next week or never. A pause after you mention the price tells you more than a polite email does. And questions the customer felt awkward writing down come out in conversation." },
  { kind: "h3", text: "Where the call fits in the sequence" },
  { kind: "list", items: [
    [{ text: "Day 0", bold: true }, ": the estimate goes by email, with a short text saying it's on its way."],
    [{ text: "Day 2 or 3", bold: true }, ": the call. If it goes to voicemail, a text right after it."],
    [{ text: "Day 7", bold: true }, ": a one-question text or email."],
    [{ text: "Day 14", bold: true }, ": the close-out message, in writing."],
  ] },
  { kind: "p", text: "One call, maybe two. The rest of the sequence stays in writing, because a customer who doesn't pick up the phone may still answer a text at 10pm." },

  { kind: "h2", text: "Before you dial" },
  { kind: "p", text: "Thirty seconds of preparation is what makes the call sound like you remember the job, because you do. Open the estimate and the notes from the visit before you call, not while the phone is ringing." },
  { kind: "list", items: [
    [{ text: "The job in their words", bold: true }, ": \"the heat pump for the back bedroom\", not \"your HVAC quote\"."],
    [{ text: "One detail from the visit", bold: true }, ": the dog, the attic hatch, the question they asked about noise."],
    [{ text: "The options on the estimate", bold: true }, " and the difference between them in one sentence."],
    [{ text: "Your next install dates", bold: true }, ", so you can answer \"when could you do it?\" without guessing."],
    [{ text: "What you want from the call", bold: true }, ": a decision, a booked walkthrough, or just knowing where it stands. One goal, not three."],
  ] },
  { kind: "h3", text: "Pick a sensible time" },
  { kind: "p", text: [
    "Call when the customer told you they're free, or when they called you in the first place. The FTC's ",
    { text: "Do Not Call FAQs", href: "https://consumer.ftc.gov/articles/national-do-not-call-registry-faqs" },
    " say telemarketers can't call before 8 a.m. or after 9 p.m. in the customer's local time. A follow-up on an estimate someone asked for is not a cold sales call, but those hours are a reasonable outer limit for any business call to a home, and most people are easier to reach well inside them.",
  ] },

  { kind: "h2", text: "The day 3 call script" },
  { kind: "p", text: "The script has four parts: who you are, why you're calling, one easy question, and a clear next step. It should take under a minute if the customer has nothing to ask." },
  { kind: "aside", text: "Hi Laura, it's Dan from Brightline Heating, I came out on Friday to look at the back bedroom. Is now an OK time for two minutes? I'm calling about the estimate I sent on Monday. Did it come through all right, and did anything in it raise a question? (Pause, and let them answer.) Great. The main difference between the two options is that the second one heats and cools the landing as well. If it helps, I can hold a slot on the 9th while you decide. Would that be useful, or would you rather I check back next week?" },
  { kind: "p", text: "A few details do the work here. Asking if it's a good time gives the customer an easy exit, and people who don't take it are actually listening. \"Did it come through all right\" is a real question: estimates do end up in spam, and it is a neutral way into the conversation. The pause matters most. Count to three before you fill the silence." },
  { kind: "h3", text: "What to leave out" },
  { kind: "list", items: [
    [{ text: "\"Just checking in\"", bold: true }, ". It tells the customer you have no reason to call."],
    [{ text: "\"Have you made a decision?\"", bold: true }, ". It puts them on the spot, and the easy answer is \"not yet\"."],
    [{ text: "An unprompted discount", bold: true }, ". If you drop the price before they mention it, you've answered an objection they didn't have."],
    [{ text: "Invented urgency", bold: true }, ". If a price really changes on a date, say why. Otherwise don't mention deadlines."],
  ] },

  { kind: "h2", text: "When it goes to voicemail" },
  { kind: "p", text: "Most follow-up calls to a mobile go to voicemail, especially from a number the customer hasn't saved. Leave a message, keep it under twenty seconds, and say your number slowly, twice." },
  { kind: "aside", text: "Hi Laura, it's Dan from Brightline Heating, about the heat pump estimate for the back bedroom. No rush at all, I just wanted to check it arrived and see if you had any questions. I'll send you a text as well. My number is 555 0142, that's 555 0142. Thanks." },
  { kind: "p", text: "Then send the text straight away, so the customer can answer in writing if that's easier for them:" },
  { kind: "aside", text: "Hi Laura, Dan from Brightline Heating here. Just left you a voicemail about the heat pump estimate. Happy to answer anything by text if that's easier. If you've decided not to go ahead, no problem, just let me know." },
  { kind: "aside", tone: "tip", text: "Call from the same number your texts and estimates come from. A customer who sees a missed call from an unknown mobile won't connect it to the estimate. One business number, saved in their phone as your business name, gets picked up and called back." },
  { kind: "p", text: "Don't call again the next day. If there's no reply to the voicemail and the text, the next step is the day 7 message in writing, not a second voicemail." },

  { kind: "h2", text: "Handling the four common answers" },
  { kind: "p", text: "Most follow-up calls end with one of four answers. None of them is a failure, because each one tells you what to do next." },
  { kind: "h3", text: "\"We're still thinking about it\"" },
  { kind: "p", text: "Ask what they're weighing up, then ask when to check back and write the date down. \"Is it the price, the timing, or something in the estimate?\" is a fair question. Agree a specific day: \"I'll give you a call on Tuesday afternoon, does that work?\" Vague callbacks are how estimates get forgotten on both sides." },
  { kind: "h3", text: "\"It's more than we expected\"" },
  { kind: "p", text: "Don't defend the number and don't cut it. Ask what they had in mind, then offer a different scope: a smaller system, fewer rooms, a phased job, or the option without the extras. If another quote is cheaper, ask what it includes. Customers often compare a full estimate with a partial one without knowing it." },
  { kind: "h3", text: "\"We're getting other quotes\"" },
  { kind: "p", text: "That's normal and it's fine to say so. Offer to help them compare: \"When you have them, I'm happy to go through what each one includes, so you're comparing like with like.\" Then ask when they expect to decide, and follow up after that date, not before." },
  { kind: "h3", text: "\"We've gone with someone else\"" },
  { kind: "p", text: "Thank them, and ask one question if they're open to it: was it price, timing, or something else? Don't argue with the decision. Write the reason down next to the estimate. Over a few months those notes tell you more about your pricing and your process than any guess will." },

  { kind: "h2", text: "When to stop calling" },
  { kind: "p", text: [
    "One call, two at most, then stay in writing. If the customer asks you not to call, stop and note it on their record. The same FTC page is clear that once someone asks a business not to call, it has to stop. Move the estimate to the right stage in your ",
    { text: "sales pipeline", href: "/contractor-sales-pipeline/" },
    ", with the reason, so nobody else on the job calls them again by mistake.",
  ] },
  { kind: "h3", text: "Let the system remember, not you" },
  { kind: "p", text: [
    "The hard part of follow-up calls is not the script. It is remembering to make them between site visits. A CRM can create the call task on day 3 when an estimate is marked as sent, cancel it if the customer replies first, and send the voicemail text when you log a missed call. The call itself is still made by a person. If you'd rather have that set up for you, that is what our ",
    { text: "CRM and automation setup", href: "/services/gohighlevel-automation/" },
    " covers.",
  ] },
  { kind: "p", text: "Illustration: a business that sends 20 estimates a month and calls each one once on day 3 makes 20 follow-up calls a month, about one per working day. At two or three minutes each, that is under an hour a month on the phone, plus the time it takes to remember. The task list handles the remembering." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. A call on day 3 suits a solar, heat pump or roofing estimate, but it is too slow for an emergency repair and may be too much for a small job. Rules on business calls vary by country and state, and calls that promote other services are treated differently from a follow-up on an estimate the customer asked for." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How soon should I call after sending an estimate?" },
  { kind: "p", text: "Two or three days after it was sent, if there's been no reply. That gives the customer time to read it, and it's soon enough that they still remember the visit." },
  { kind: "h3", text: "How many times should I call about an estimate?" },
  { kind: "p", text: "Once, or twice if you agreed a callback date. After that, follow up in writing. A customer who doesn't pick up may still answer a text or an email." },
  { kind: "h3", text: "Should I leave a voicemail?" },
  { kind: "p", text: "Yes, a short one with your name, the job and your number said twice, followed by a text so the customer can answer in writing." },
  { kind: "h3", text: "Should I read the script word for word?" },
  { kind: "p", text: [
    "No. Use it as a checklist: who you are, why you're calling, one question, one next step. Say it the way you'd say it on site. If you'd like the call tasks, texts and pipeline running for you, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const estimateFollowUpCall: Post = {
  slug: "estimate-follow-up-call-script",
  title: "Estimate Follow Up Call Script for Installers",
  description: "An estimate follow up call script for installers: what to say on day 3, a voicemail that gets called back, and how to answer the four replies you'll hear.",
  lede: "What to say when you call about an estimate, and what to do when nobody picks up.",
  category: "Automation",
  published: "2026-11-24",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/estimate-follow-up-call-script.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
