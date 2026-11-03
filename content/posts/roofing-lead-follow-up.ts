import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "roofing lead follow up". La pagina "Home Repair Scams" de la FTC se
 * comprobo el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's Tuesday, 8pm, and a hailstorm went through town two hours ago. Your form has nine new requests, your voicemail has six more, and you are still on a ladder at the last job of the day. One homeowner has water coming through a bedroom ceiling. Three want someone to look at the shingles before they call their insurer. The rest are not sure there is any damage at all." },
  { kind: "p", text: "By Thursday, most of them have had a roofer on their roof. The question is whether it was you. Roofing follow-up is not one message. It is a short chain: a fast first reply, an inspection that actually happens, a quote that gets explained, and a steady check-in while the homeowner waits on an adjuster or a second opinion. This article walks through each link." },

  { kind: "h2", text: "Why roofing leads go cold" },
  { kind: "p", text: "Roofing leads are rarely ignored on purpose. They get lost in the gaps of a roofer's day, and those gaps are predictable." },
  { kind: "list", items: [
    [{ text: "Nobody can answer from a roof.", bold: true }, " Calls come in while the crew is working, and a missed call with no reply looks the same to the homeowner as a company that doesn't care."],
    [{ text: "Storms arrive all at once.", bold: true }, " A week's worth of requests lands in one evening, and the ones at the bottom of the list wait days."],
    [{ text: "Inspections get booked, then forgotten.", bold: true }, " A time agreed on the phone and never confirmed in writing is easy for either side to miss."],
    [{ text: "Quotes wait on other people.", bold: true }, " Insurance adjusters, a spouse who was not home, a second and third estimate. Without a next step, the quote just sits."],
  ] },
  { kind: "p", text: "None of these is fixed by working harder. They are fixed by deciding, ahead of time, what happens to every lead at each stage, and letting a system do the parts that don't need a roofer." },

  { kind: "h2", text: "Reply before the next roofer does" },
  { kind: "p", text: [
    "The first reply decides whether you get the inspection. A homeowner with a leak, or a fresh dent in the gutter, is usually contacting several companies at once. The general case for replying in minutes is in ",
    { text: "speed to lead for installers", href: "/speed-to-lead/" },
    ". For roofers, the first message should do three things.",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "Say who you are.", bold: true }, " Your name and your company's name, so the homeowner knows this is the roofer they contacted, not a stranger who found their number."],
    [{ text: "Offer a time.", bold: true }, " Two inspection slots they can answer with one word. \"We'll be in touch\" gives them nothing to reply to."],
    [{ text: "Ask the one question that sorts the lead.", bold: true }, " \"Is water getting inside right now?\" separates an emergency tarp job from a routine inspection."],
  ] },
  { kind: "aside", text: "Hi Dana, it's Mike from Ridgeline Roofing. Thanks for your request about the hail. Is any water getting inside right now? If not, we can inspect Thursday at 10am or Friday at 2pm. Reply 1 or 2, or call this number." },
  { kind: "h3", text: "Missed calls from the roof" },
  { kind: "p", text: [
    "A text sent automatically to every missed call means the homeowner hears from you even when your phone is in your truck. It should promise a call back at a time you can keep, and someone has to make that call. How to set one up is covered in ",
    { text: "missed-call text back", href: "/missed-call-text-back/" },
    ".",
  ] },
  { kind: "h3", text: "Leaks go to the front" },
  { kind: "p", text: "If the answer to the sorting question is yes, that lead skips the queue. A homeowner with water on the floor will take whoever can tarp it today. If you can't get there, say so plainly and offer the earliest real time. An honest \"tomorrow at 8am\" keeps more jobs than a promise you break." },

  { kind: "h2", text: "From inspection to quote" },
  { kind: "p", text: "Once an inspection is booked, the follow-up job is to make sure it happens and that the homeowner leaves it knowing what comes next." },
  { kind: "h3", text: "Confirm the visit twice" },
  { kind: "p", text: "Send a confirmation when the inspection is booked and a reminder the day before, with the time window and a way to reschedule. If you need access to the attic or the side gate, ask in the reminder. A wasted trip is the most expensive follow-up there is." },
  { kind: "h3", text: "Send photos the same day" },
  { kind: "p", text: "Homeowners can't see their own roof. A few photos of what you found, sent the same evening with one line on each, do more than any sales message. They show the work is real, they give the homeowner something to show their partner and their insurer, and they make your quote easier to understand when it arrives." },
  { kind: "aside", tone: "tip", text: "Before you leave the house, agree when the quote will arrive and when you will go through it together. Then your follow-up call is one they expect, not a chase." },
  { kind: "h3", text: "Explain the quote, don't just send it" },
  { kind: "p", text: [
    "A roof quote has line items most homeowners have never seen: tear-off, decking, underlayment, flashing, ventilation. A short call or a two-minute video walking through it answers the questions they would otherwise ask the next roofer. After that, the follow-up sequence for the quote itself is the same as in any trade, and it is set out in ",
    { text: "quote follow up for installers", href: "/quote-follow-up/" },
    ".",
  ] },

  { kind: "h2", text: "Storm leads and insurance claims" },
  { kind: "p", text: "After a storm, a roofing quote often can't be signed until the insurer has looked at the claim. That wait can run for weeks, and it is where most storm leads are lost. The homeowner is not saying no. They are waiting, and the roofer who keeps a useful conversation going during the wait is usually the one still there at the end." },
  { kind: "h3", text: "Track the claim as its own stage" },
  { kind: "p", text: [
    "Give insurance jobs their own stage in your pipeline, such as \"Waiting on adjuster\", with the adjuster's visit date if the homeowner has one. Then a check-in can go out the day after that visit, asking how it went and whether they need your photos or measurements. Setting up roofing-specific stages is covered in ",
    { text: "roofing CRM", href: "/roofing-crm/" },
    ".",
  ] },
  { kind: "aside", text: "Hi Dana, it's Mike from Ridgeline Roofing. Did the adjuster make it out yesterday? If they need our inspection photos or measurements, reply here and we'll send them over today." },
  { kind: "h3", text: "Expect to be compared" },
  { kind: "p", text: [
    "Homeowners are told to shop around after a storm, and they should. The FTC's consumer page on ",
    { text: "home repair scams", href: "https://consumer.ftc.gov/features/pass-it-on/home-repair-scams" },
    " (checked November 2026) warns that scammers may find people after a flood, windstorm or other natural disaster and pressure them to act quickly. It advises getting three written estimates and signing a written contract before any work starts.",
  ] },
  { kind: "p", text: "That shapes how your follow-up should sound. Every message should name your company, so it never looks like a stranger at the door. None should push for a decision today. And your quote should be written, specific and easy to compare, because it will be laid next to two others on the kitchen table." },

  { kind: "h2", text: "Follow up without pushing" },
  { kind: "p", text: "Roofers have a reputation problem after storms, and a follow-up sequence that feels like pressure confirms it. A good one gives the homeowner a reason to hear from you each time." },
  { kind: "list", items: [
    [{ text: "Day of the quote:", bold: true }, " the quote, the photos and the time you agreed to talk."],
    [{ text: "Two or three days later:", bold: true }, " the call you agreed on, or a short message answering a question homeowners often ask, such as how long the job takes or what happens if it rains mid-install."],
    [{ text: "About a week later:", bold: true }, " a check on where things stand, including the claim if there is one."],
    [{ text: "Two to three weeks later:", bold: true }, " a direct question: have they decided? Accept the answer."],
  ] },
  { kind: "p", text: "Each message should stop as soon as the homeowner replies, so nobody gets an automatic nudge the day after they said yes. If the answer is \"not this year\", ask when to check back and set a reminder for that month. A homeowner who patched a roof in November may be ready to replace it in spring." },
  { kind: "h3", text: "Keep the door open after a no" },
  { kind: "p", text: "Some homeowners choose another roofer. Thank them and ask, once, whether price, timing or something else decided it. The answers tell you more about your quotes than any report. Then leave them alone, apart from a reminder to check the roof after the next big storm, if they agreed to hear from you." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. The right timing, channels and wording depend on your market, your crew and the rules on texting and calling customers where you work. Check the messaging rules and any local rules on post-storm contracting in your area before you automate anything." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How fast should I follow up on a roofing lead?" },
  { kind: "p", text: "An automatic reply can go out in under a minute, day or night, with your name and two inspection times. A person should follow up as soon as they are off the roof. Leads with water coming inside should be called first." },
  { kind: "h3", text: "How long should I keep following up on a storm lead?" },
  { kind: "p", text: "As long as the claim is open and the homeowner is still talking to you. Tie your check-ins to real events, like the adjuster's visit or the insurer's decision, rather than a fixed number of messages. Once they say no, stop." },
  { kind: "h3", text: "Which parts can be automated?" },
  { kind: "p", text: [
    "The first reply, missed-call texts, inspection confirmations and reminders, the quote follow-up sequence and the \"check back in spring\" reminder can all run on their own and stop when the homeowner replies. Inspecting the roof, explaining the quote and talking through the claim still need a roofer. If you'd like that set up for your business, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const roofingLeadFollowUp: Post = {
  slug: "roofing-lead-follow-up",
  title: "Roofing Lead Follow Up: From Storm to Signed Job",
  description: "How roofers can follow up on leads: a reply in minutes, inspections that happen, quotes explained, and steady check-ins while the insurance claim runs.",
  lede: "Reply first, inspect fast, then stay useful while the claim runs.",
  category: "Lead Generation",
  published: "2026-11-03",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/roofing-lead-follow-up.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
