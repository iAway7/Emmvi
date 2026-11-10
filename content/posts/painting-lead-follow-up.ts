import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "painting lead follow up". La pagina de consumidores del programa RRP de la
 * EPA citada se comprobo en la fuente el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's Sunday, 8:40pm. A homeowner has just finished moving furniture back after a family visit and decided the hallway and two bedrooms can't wait another year. They fill in the estimate form on two painters' websites and go to bed. The first painter to reply with a time for a walkthrough usually gets the walkthrough. The rest of the job is decided over the next few weeks, by who stays in touch without becoming a nuisance." },
  { kind: "p", text: "Painting leads are slow to close in a way that emergency trades are not. Nobody needs a bedroom painted by noon. They need to see a price, talk it over at home, pick colors, and fit the work around their own calendar. This article covers how a painting business can follow up on each stage: the first reply, the walkthrough, the estimate, and the wait before the start date." },

  { kind: "h2", text: "Why painting leads go quiet" },
  { kind: "p", text: "A painting lead rarely says no. It goes quiet. Knowing why it goes quiet tells you what the next message should say." },
  { kind: "list", items: [
    [{ text: "They asked several painters.", bold: true }, " Most people ask two or three for prices. The one who replies first and books a time sets the standard the others are compared to."],
    [{ text: "They're waiting on someone else.", bold: true }, " A partner, a landlord, a board for a condo, a tenant moving out. The estimate sits until that person looks at it."],
    [{ text: "Colors are holding them up.", bold: true }, " Many interior jobs stall not on price but on a decision about gray or white. They don't want to say yes until they've chosen."],
    [{ text: "The season isn't right yet.", bold: true }, " Exterior work gets priced in winter and decided in spring. The lead is real, just early."],
  ] },
  { kind: "p", text: "None of these is a reason to stop following up. Each one is a reason for a different message." },

  { kind: "h2", text: "Reply before the next painter does" },
  { kind: "p", text: [
    "The first message matters most because it's the only one the customer is actively waiting for. Evening and weekend requests are normal in painting, since people notice their walls when they're home. An automatic text sent within a minute of the form arriving confirms the request, says who you are and asks for a time. Why minutes matter, and how to set it up without a person on call, is covered in ",
    { text: "speed to lead for installers", href: "/speed-to-lead/" },
    ".",
  ] },
  { kind: "aside", text: "Hi Karen, it's Sam from Fairway Painting. Thanks for the request for the hallway and two bedrooms. We can come by for a quick walkthrough Tuesday at 5:30pm or Wednesday at 9am. Which works? If it's easier, send a couple of photos of the rooms and we'll start there." },
  { kind: "p", text: "Two details make that message work. It names what they asked for, so it doesn't read like a robot. And it gives two specific times instead of asking when they're free, which turns a back-and-forth into one reply." },
  { kind: "h3", text: "Missed calls need the same reply" },
  { kind: "p", text: [
    "Calls come in while you're on a ladder. A call that goes to voicemail and gets a call back at 6pm has had all afternoon to ring someone else. A ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    " sends a short message straight away, so the caller knows they were heard and can answer by text while you finish the coat.",
  ] },

  { kind: "h2", text: "Book the walkthrough on first reply" },
  { kind: "p", text: "The goal of the first reply is a booked walkthrough, not a conversation. Whatever system sends it should let the customer pick a time from your real calendar, then confirm the booking and send a reminder the day before. A walkthrough nobody remembers is a wasted drive." },
  { kind: "h3", text: "Ask what changes the estimate" },
  { kind: "p", text: "Use the booking confirmation to ask the two or three things you'd otherwise find out on site. Ceiling height, whether furniture will be moved, and whether the trim and doors are included all change the price. Asking now means a better estimate on the day, and sometimes an estimate from photos without a visit." },
  { kind: "h3", text: "Ask when the house was built" },
  { kind: "p", text: [
    "For older homes, the year the house was built is part of the scope, not small talk. Under the EPA's Renovation, Repair and Painting program, paid work that disturbs paint in most homes built before 1978 has to follow lead-safe practices, and the ",
    { text: "EPA's page for homeowners", href: "https://www.epa.gov/lead/renovation-repair-and-painting-rrp-program-consumers" },
    " tells them to ask to see the contractor's certification. Knowing the year early lets you plan the prep and mention your certification in the estimate instead of being asked for it later.",
  ] },

  { kind: "h2", text: "Follow up on the estimate" },
  { kind: "p", text: [
    "This is where most painting jobs are won or lost. The estimate goes out, the customer says thanks, and then nothing. A short sequence, decided in advance and sent by the system, means nobody has to remember. The general version is in ",
    { text: "quote follow up for installers", href: "/quote-follow-up/" },
    "; here is how it fits painting.",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "Same day:", bold: true }, " send the estimate with a short note that says what's included and what isn't. \"Walls and ceilings, two coats, trim not included\" heads off most of the questions."],
    [{ text: "Two or three days later:", bold: true }, " ask if they have questions, and offer help with colors. This is the message that unblocks the stalled ones."],
    [{ text: "About a week later:", bold: true }, " say what the calendar looks like. A real gap in your schedule is useful information, not pressure."],
    [{ text: "Two to three weeks later:", bold: true }, " a last, easy question: are they still planning the work, or should you close the estimate for now?"],
  ] },
  { kind: "aside", text: "Hi Karen, it's Sam from Fairway Painting. Any questions on the estimate for the hallway and bedrooms? If colors are the hold-up, we can bring sample boards on a short visit, or send photos of the same color in a room like yours." },
  { kind: "p", text: "Stop the sequence the moment the customer replies. A reply means a person takes over. Nothing reads worse than an automatic \"just checking in\" after they've already said yes." },
  { kind: "h3", text: "Mind the timing of exterior estimates" },
  { kind: "p", text: "An exterior estimate sent in November may not be decided until March. Rather than four messages in two weeks, send the first two, then schedule one for when the weather turns. A note in early spring that says when you're booking exteriors is more useful to the customer than a reminder in December." },
  { kind: "aside", tone: "tip", text: "When you send an estimate, write the main reason the customer gave for wanting the work in the CRM record. \"Selling in spring\" or \"new baby in March\" turns a generic follow-up into one that's about their plan." },
  { kind: "p", text: "Illustration: if you send 20 painting estimates a month and only follow up on the ones you happen to remember, the rest close only if the customer chases you. With a sequence, every one of the 20 gets the same four messages, whether it was a busy week or not. The win rate is yours to measure, not something a schedule guarantees." },

  { kind: "h2", text: "Keep accepted jobs warm" },
  { kind: "p", text: "A yes isn't the end of follow-up. Painting jobs are often booked weeks ahead, and a customer who hears nothing between the yes and the start date starts to wonder if they're still on the calendar." },
  { kind: "list", items: [
    [{ text: "Confirm the booking", bold: true }, " with the date, the rooms and what they need to do: move small items, take down pictures, keep pets in another room."],
    [{ text: "Confirm colors in writing", bold: true }, " a week before, with the names and finishes. A wrong color is expensive to fix and easy to prevent."],
    [{ text: "Warn early about weather", bold: true }, " for exterior work. A message the day before that says the forecast is being watched, and what happens if it rains, saves a frustrated morning."],
  ] },
  { kind: "p", text: [
    "After the job, the same system can send the thank you, the review request and a note for next time. A few weeks later is a natural moment to ask about the rooms you didn't paint. The steps are in ",
    { text: "post-job follow-up", href: "/post-job-follow-up/" },
    ".",
  ] },

  { kind: "h2", text: "What to automate, and what not" },
  { kind: "p", text: "Automation is good at sending the right message at the right time, every time. It is bad at judgment. A useful split for a painting business:" },
  { kind: "list", items: [
    [{ text: "Automate:", bold: true }, " the first reply to forms and missed calls, walkthrough booking and reminders, the estimate follow-up sequence, booking and color confirmations, and the review request after the job."],
    [{ text: "Keep personal:", bold: true }, " the walkthrough itself, any conversation about price, scope changes, complaints, and the reply to any customer who writes back with a real question."],
  ] },
  { kind: "p", text: [
    "All of this needs one place where every lead lives and where you can see which estimates are waiting. For painters, the setup is in ",
    { text: "CRM for painting contractors", href: "/crm-for-painting-contractors/" },
    ". The software matters less than having one list that every message comes from and every reply goes back to.",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. Rules on texting customers and on lead-safe work differ by state and by the age of the home, and the right setup depends on how many estimates you send and who answers the replies." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How many times should a painter follow up on an estimate?" },
  { kind: "p", text: "A sequence of three or four messages over two to three weeks works for most interior jobs, and stops as soon as the customer replies. Exterior estimates sent out of season can wait longer between messages, with one timed for when you start booking outdoor work." },
  { kind: "h3", text: "Should the follow-up be a text or an email?" },
  { kind: "p", text: "Use the channel the customer used, and send the estimate itself where it's easy to find again, usually email with a link. Short questions work better by text. Only text people who gave you their number for that purpose, and give them a way to stop." },
  { kind: "h3", text: "Isn't following up pushy?" },
  { kind: "p", text: "Not if each message is useful. A message that offers help with colors, shares a gap in your calendar or asks whether to close the estimate gives the customer something. A message that only says \"just checking in\" doesn't, and that's the one that feels pushy." },
  { kind: "h3", text: "What if the customer chose another painter?" },
  { kind: "p", text: "Ask why, briefly, and mark the estimate as lost with the reason. Thank them and leave the door open. Price, timing or no reply are all useful to know, and a polite last message is sometimes what brings them back next time." },
  { kind: "p", text: [
    "If you'd rather have this set up and running than build it yourself, ",
    { text: "tell us how your estimates work today", href: "/contact-us/" },
    ".",
  ] },
];

export const paintingLeadFollowUp: Post = {
  slug: "painting-lead-follow-up",
  title: "Painting Lead Follow Up: Estimates, Colors, Start Dates",
  description: "How painting contractors can follow up on leads: a reply in minutes, booked walkthroughs, estimate follow-up that helps with colors, and warm start dates.",
  lede: "Painting customers take weeks to decide. Stay in touch without becoming a nuisance.",
  category: "Lead Generation",
  published: "2026-11-10",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/painting-lead-follow-up.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
