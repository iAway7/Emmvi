import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (septiembre de 2026). Palabra clave:
 * "missed call text back". Las cifras citadas se comprobaron en la fuente el
 * dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It is 11:40 on a Tuesday. You are on a roof in a harness, bolting down rails for a solar array, and your phone buzzes in your pocket. You can't answer it. By the time you are back on the ladder an hour later, the number has no voicemail, and when you call back it goes straight to a recording. That caller rang the next installer on the list." },
  { kind: "p", text: "Missed call text back is the simplest fix for that moment. This article explains how it works, what the first text should say, what it can't do, and how to set it up so it doesn't create a new problem." },

  { kind: "h2", text: "What missed call text back does" },
  { kind: "p", text: "When a call to your business number goes unanswered, the system sends the caller a text message from that same number, usually within seconds. The caller gets a reply on the screen they are already holding, and the conversation moves to text, where you can answer between jobs instead of playing phone tag." },
  { kind: "p", text: "That is all it does. It doesn't answer the call, it doesn't quote, and it doesn't book the job on its own. It stops the call from ending in silence, and it gives the caller something easier to do than ringing the next number on the list." },
  { kind: "h3", text: "Why a text works better than voicemail" },
  { kind: "p", text: "Plenty of people who call a tradesperson don't leave a voicemail. They hang up and try someone else. A voicemail greeting asks them to wait for you. A text asks them to tell you what they need, right now, in a format they can reply to while they are doing something else. For the homeowner comparing three installers on a lunch break, that is a much smaller ask." },

  { kind: "h2", text: "Why speed matters more than the message" },
  { kind: "p", text: [
    "The best-known research on response time comes from ",
    { text: "\"The Short Life of Online Sales Leads\"", href: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads" },
    " in Harvard Business Review (Oldroyd, McElheran and Elkington, 2011). In a study of 1.25 million sales leads, firms that tried to contact a potential customer within an hour were ",
    { text: "nearly seven times as likely to qualify the lead", bold: true },
    " as those that tried even an hour later. The same article reports an audit of 2,241 US companies in which 23% never responded to a web enquiry at all.",
  ] },
  { kind: "p", text: "Two limits are worth stating plainly. That study looked at web leads across many industries, not phone calls to installers, and it is from 2011. It doesn't tell you how many jobs you will win with a text. What it does support is the direction: an enquiry cools fast, and the business that makes contact first has an advantage the others have to work to overcome." },
  { kind: "p", text: "A missed call is the same situation with less margin. The caller has already shown they want to talk to a person today. If they hear nothing, the next search result is one tap away." },

  { kind: "h2", text: "What the first text should say" },
  { kind: "p", text: "The first message does one job: it tells the caller a real business saw the call and gives them one easy next step. Keep it short, sign it with your business name, and ask one question." },
  { kind: "p", text: "A version that works for most installers:" },
  { kind: "aside", text: "\"Hi, this is Northside Solar. Sorry we missed your call, we're on a job. What can we help with? Reply here and we'll get back to you today.\"" },
  { kind: "h3", text: "Three rules for the wording" },
  { kind: "list", items: [
    [{ text: "Name the business in the first line.", bold: true }, " An unknown number texting \"Sorry I missed you\" looks like spam. Your trading name doesn't."],
    [{ text: "Ask one question, not a form.", bold: true }, " \"What can we help with?\" gets replies. A list of five questions about roof pitch and zip code gets ignored."],
    [{ text: "Only promise what someone will actually do.", bold: true }, " \"We'll get back to you today\" is fine if someone will. \"Someone will call you in 5 minutes\" is a promise the system can't keep when you are still on the roof."],
  ] },
  { kind: "h3", text: "Different hours, different text" },
  { kind: "p", text: "A call at 9pm is not the same as a call at 11am. Most systems let you switch the message by time of day. After hours, say so: \"We're closed for the evening. Reply with what you need and we'll pick it up first thing tomorrow.\" It sets an honest expectation and still captures the enquiry while the caller is thinking about it." },

  { kind: "h2", text: "What it can't do on its own" },
  { kind: "p", text: "A text back without anything behind it moves the problem, it doesn't remove it. If the caller replies \"Looking for a quote on a 7kW system\" and nobody reads that reply until Friday, you have lost the job more politely." },
  { kind: "p", text: "For the text back to be worth setting up, three things need to happen after it:" },
  { kind: "list", ordered: true, items: [
    [{ text: "Someone gets told.", bold: true }, " The reply should reach whoever handles enquiries as a notification on their phone, not sit in a web dashboard nobody opens on site."],
    [{ text: "The contact lands in one place.", bold: true }, " Name, number, what they asked for and where they came from, recorded once, so the enquiry doesn't live only in one person's texts."],
    [{ text: "There is a follow-up if they go quiet.", bold: true }, " If the caller never replies to the first text, one more message the next day is reasonable. Two or three unanswered texts is where you stop."],
  ] },
  { kind: "p", text: [
    "This is where a CRM earns its place: it's the thing that keeps the thread, the contact and the next step together. We covered that side in ",
    { text: "where enquiries get lost between the form and the sale", href: "/streamline-lead-capture-and-sales-with-a-smarter-crm/" },
    ".",
  ] },

  { kind: "h2", text: "How to set it up without surprises" },
  { kind: "h3", text: "Where the feature lives" },
  { kind: "p", text: [
    "Most phone systems and CRMs aimed at home-service businesses include it. In GoHighLevel, for example, it is a setting on the business profile: according to ",
    { text: "HighLevel's own help article", href: "https://help.gohighlevel.com/support/solutions/articles/48000982605-business-profile-settings" },
    " (as of September 2026), it \"will automatically send an SMS message to the caller\" when nobody answers, and the message can be customized and tested before you switch it on. If you already use GoHighLevel, ",
    { text: "this overview of how it fits the rest of your operation", href: "/unlocking-efficiency-how-gohighlevel-streamlines-your-business-operations/" },
    " is a useful companion.",
  ] },
  { kind: "p", text: "The catch with every tool is the same: it can only see calls that go through a number it controls. If your customers ring your personal mobile, the software never knows the call happened. Usually that means putting a business number on your website, your van and your Google profile, and forwarding it to your phone." },
  { kind: "h3", text: "Texting rules in the US" },
  { kind: "p", text: [
    "If you text US customers from a standard business phone number through software, carriers expect that number to be registered. Twilio, which sits underneath many of these tools, explains that ",
    { text: "anyone sending SMS over a 10-digit long code from an application to the US must register for A2P 10DLC", href: "https://www.twilio.com/docs/messaging/compliance/a2p-10dlc" },
    ", and that unregistered traffic pays extra carrier fees and gets filtered more. In practice: finish that registration before you rely on the text back, or some of your messages may never arrive. The UK and Europe have their own rules, so check with your provider rather than assuming the US process applies.",
  ] },
  { kind: "h3", text: "Test it like a customer" },
  { kind: "list", items: [
    "Call your business number from a phone the system has never seen, and let it ring out.",
    "Time how long the text takes to arrive, and read it as a stranger would.",
    "Reply to it, and check that the reply reaches the person who should see it.",
    "Repeat after hours, to check the evening message.",
  ] },
  { kind: "aside", text: "This is general guidance, not a recommendation for every business. If you answer nearly every call yourself, or your work comes mostly through referrals who already have your mobile, a text back may add little. Check what your current phone provider already offers before paying for anything new." },

  { kind: "h2", text: "A day with and without it" },
  { kind: "p", text: "Illustration, not data: an EV charger installer misses four calls on a busy Thursday. One is at 8:15 while they're driving, two land mid-install, and one comes in at 7:30pm." },
  { kind: "p", text: [
    { text: "Without a text back,", bold: true },
    " the installer sees four missed calls at the end of the day. Two numbers pick up when called back, one goes to voicemail, and one has already booked someone else. Nobody knows what any of the four wanted until the callback.",
  ] },
  { kind: "p", text: [
    { text: "With a text back,", bold: true },
    " all four callers got a message within a minute. Two replied: a quote request for a home charger and a question about an existing install. One was a spam call that never answered, which cost nothing. By the evening the installer knows which enquiry is worth a call first, and the last caller, who hasn't replied yet, gets one follow-up tomorrow.",
  ] },
  { kind: "p", text: [
    "Nothing in that second version needs the installer to be faster. It needs the business to answer while the installer can't, and then to keep chasing. That second part, following up when a quote goes quiet, is covered in ",
    { text: "turning leads into customers with follow-up and automation", href: "/turn-leads-into-loyal-customers-with-funnels-automations-digital-firepower-powered-by-gohighlevel/" },
    ".",
  ] },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Is missed call text back the same as an answering service?" },
  { kind: "p", text: "No. An answering service puts a person on the phone. A text back sends a written message and waits for a reply. It costs less and works around the clock, but it can't talk someone through a question in real time." },
  { kind: "h3", text: "Will customers find it annoying?" },
  { kind: "p", text: "A single, clearly signed text after they called you is a reply, not marketing. It becomes annoying when it is followed by a stream of automated messages nobody asked for. Keep it to the first text and one follow-up." },
  { kind: "h3", text: "Can I keep my existing mobile number?" },
  { kind: "p", text: "Sometimes. Some providers can port your number or work with call forwarding, and some can't. Ask before you commit, because the feature only works on calls that pass through the provider's number." },
  { kind: "h3", text: "What if the caller was a supplier or a spam call?" },
  { kind: "p", text: "They get the same text. Most systems let you exclude known numbers, such as suppliers or staff, and a spam caller simply won't reply. It's a small cost next to a missed enquiry." },
  { kind: "p", text: [
    "If you'd rather have the text back, the CRM and the follow-up set up and tested for you, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const missedCallTextBack: Post = {
  slug: "missed-call-text-back",
  title: "Missed Call Text Back: How It Works for Installers",
  description: "What missed call text back does, what the first text should say, and how to set it up so every unanswered call gets a reply while you're still on the job.",
  lede: "You can't answer from a roof. The caller shouldn't be left with silence either.",
  category: "Automation",
  published: "2026-09-23",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/missed-call-text-back.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
