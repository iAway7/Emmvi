import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "flooring lead follow up". Las dos columnas de Floor Covering News se
 * comprobaron el dia de publicacion; no se cita ninguna cifra.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's Thursday, 9pm. A couple has just pulled up the hallway rug and found the old laminate lifting at the seams. They want new floors in the hall, kitchen and living room before family arrives for the holidays. They fill in a quote request on three flooring websites and go to bed. The first company to reply in the morning with a time to measure is the one that walks through the door. The other two may never hear back at all, because the couple already has a date." },
  { kind: "p", text: "Flooring follow-up is harder than it looks because the sale has more steps than most trades: a request, often a showroom visit, samples taken home, a measure, a quote, and then a long, quiet wait while the customer compares. Each step is a place where the lead can go cold. This article sets out how a flooring business can reply first, book the measure, chase the samples and quotes that go quiet, and get the review once the floor is down." },

  { kind: "h2", text: "What flooring leads look like" },
  { kind: "p", text: "Most flooring leads fall into a few groups, and each needs a different next step. Recognizing them from the first message saves a lot of back and forth." },
  { kind: "list", items: [
    [{ text: "The online quote request.", bold: true }, " A form or a message with rooms and a rough idea of the material. They want to know roughly what it costs and when you can come."],
    [{ text: "The showroom visitor.", bold: true }, " They walked in, looked at a wall of samples and left with three of them. They're interested, but nothing is booked."],
    [{ text: "The deadline job.", bold: true }, " A move-in date, a rental between tenants, a sale, the holidays. Timing matters more than price."],
    [{ text: "The repair or water damage job.", bold: true }, " A leak, a swollen board, a section that needs replacing. Often urgent, sometimes with an insurer involved."],
    [{ text: "The builder or property manager.", bold: true }, " Repeat work over several units. Slower to decide, but steady if you're reliable."],
  ] },
  { kind: "p", text: "A generic \"thanks, we'll be in touch\" fits none of these. The quote request wants a measure date, the showroom visitor wants a reason to come back, and the deadline job wants to know if you can make the date at all." },

  { kind: "h2", text: "Answer the quote request first" },
  { kind: "p", text: [
    "Flooring customers often contact more than one company at once, so the first useful reply has an advantage. The general case for replying fast is in ",
    { text: "speed to lead", href: "/speed-to-lead/" },
    ". For flooring, the first reply doesn't need a price. It needs to show someone read the request and ask for what you need to quote it.",
  ] },
  { kind: "h3", text: "An automatic first reply that asks the right things" },
  { kind: "p", text: "A reply sent within a minute of the form, by text and email, can ask four questions: which rooms, roughly how many square feet if they know, what's on the floor now, and whether there's a date they're working to. Those answers tell whoever reads them in the morning whether this is a quick measure or a bigger job, and whether the deadline is realistic." },
  { kind: "aside", text: "Hi Priya, it's Sam from Oakline Floors. Thanks for the request for the hall, kitchen and living room. To get you an accurate price we'll need to measure. Could you tell us what's on the floor now and whether you have a date in mind? We'll text you two measure times tomorrow morning." },
  { kind: "h3", text: "Missed calls count too" },
  { kind: "p", text: "Installers are on their knees with a saw running for most of the day. A call nobody answers should still get a text within a minute, saying the crew is on a job and when someone will call back. Promise a time you can keep. \"By 5pm\" is better than \"right away\" if right away turns into tomorrow." },

  { kind: "h2", text: "Book the measure, not just the call" },
  { kind: "p", text: "In flooring, the measure is where the sale usually gets real. Until someone has been in the house, the customer is comparing guesses. Once you've measured, checked the subfloor and talked through the options, you're the company that knows the job." },
  { kind: "p", text: "So the goal of the first conversation is a booked measure with a date and a time window, not a friendly chat. Offer two specific slots rather than asking \"when suits you?\", which tends to start a thread that never ends." },
  { kind: "aside", tone: "tip", text: "Ask the customer to send two photos before the measure: one of each room from the doorway, and one close up of the floor where it meets a doorway or stairs. You'll arrive knowing about the threshold, the stairs or the old tile, and the visit is shorter." },
  { kind: "h3", text: "Remind them the day before" },
  { kind: "p", text: [
    "A measure that's forgotten costs a drive and a slot. A text the day before and an hour before, set up as described in ",
    { text: "appointment reminder texts", href: "/appointment-reminder-text/" },
    ", gives the customer a chance to move it instead of not being home. It also reminds them to clear a path to the rooms you need to see.",
  ] },

  { kind: "h2", text: "Follow up on samples and quotes" },
  { kind: "p", text: "Most flooring leads don't end in a no. They end in silence. The samples sit on the kitchen counter, the quote sits in an inbox, and the customer is waiting for another price, a partner's opinion or a payday. Silence is not a decision. The company that asks again, with a reason, is often the one that gets the answer." },
  { kind: "h3", text: "Samples are a lead, not a goodbye" },
  { kind: "p", text: "A showroom visitor who leaves with samples should get a short message a couple of days later: which samples they took, a question about how they look in the room, and an offer to book a measure. Log the samples against the customer in the CRM so whoever sends the message knows what they took." },
  { kind: "aside", text: "Hi Tom, it's Sam from Oakline. How are the oak and the grey LVP samples looking in the living room? If one is a clear winner we can measure next week and get you a firm price. We have Tuesday or Thursday morning free." },
  { kind: "h3", text: "A short sequence after the quote" },
  { kind: "p", text: [
    "Trade writers in flooring have been saying this for years. A January 2025 Floor Covering News column by Jim Augustus Armstrong, ",
    { text: "Harnessing the power of strategic follow-up", href: "https://www.fcnews.net/2025/01/harnessing-the-power-of-strategic-follow-up/" },
    ", recommends mixing email, phone and text, and lays out a 30-day schedule run from a CRM. You don't need that many touches to start. For most flooring quotes, three over about two weeks cover it:",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "Two days after the quote:", bold: true }, " check it arrived and offer to walk through it, especially the prep and removal lines."],
    [{ text: "About a week later:", bold: true }, " something useful. An install date that's still open, a note on lead times for the material they chose, or a second option at a different price."],
    [{ text: "About two weeks later:", bold: true }, " a direct question. Still going ahead, or should the quote be closed? A clear no frees the slot."],
  ] },
  { kind: "p", text: [
    "Wording for each of those messages is in ",
    { text: "estimate follow up texts", href: "/estimate-follow-up-text/" },
    ". Whatever the wording, the sequence should stop by itself when the customer replies, books or says no.",
  ] },

  { kind: "h2", text: "Make the quote easy to compare" },
  { kind: "p", text: "Flooring customers lay quotes side by side, and a single price per square foot is easy to undercut on paper. A quote that explains itself is harder to beat with a cheaper number that leaves things out. Spell out:" },
  { kind: "list", items: [
    [{ text: "Material and labor,", bold: true }, " as separate lines, with the product name so the customer can see it's the one they chose."],
    [{ text: "Removal and disposal", bold: true }, " of the old floor, and what happens if there's more than one layer underneath."],
    [{ text: "Subfloor prep,", bold: true }, " leveling or repairs, and how you'll handle it if you find damage once the old floor is up."],
    [{ text: "Trims, transitions and stairs,", bold: true }, " which are the usual surprise on the final bill."],
    [{ text: "Furniture and appliances:", bold: true }, " whether you move them, and whether that's included."],
    [{ text: "A start date,", bold: true }, " even as a rough week. A fair price with a date often wins over a lower price with no date."],
  ] },
  { kind: "p", text: "This also makes the follow-up easier. \"Did you have any questions about the subfloor line?\" is a better second message than \"just checking in\"." },

  { kind: "h2", text: "After the install, ask for the review" },
  { kind: "p", text: [
    "The best time to ask for a review is the day the floor is finished, when the customer is standing on it. A short text with a direct link, sent automatically when the job is marked complete, does more than a request three weeks later. The details are in ",
    { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" },
    ".",
  ] },
  { kind: "p", text: "Flooring also leads to more flooring. The bedrooms they didn't do this time, the stairs, the rental property they mentioned. Note it in the CRM with a date, so a message goes out in a few months without anyone having to remember." },
  { kind: "p", text: [
    "None of this needs special software, but it does need one place where every request, sample, measure, quote and reminder lives. Most of it can be set up in a CRM with automations, such as the ",
    { text: "GoHighLevel setups emmvi builds", href: "/services/gohighlevel-automation/" },
    ", or handled with a shared inbox and a calendar if you get only a few leads a week.",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. How fast you can reply, how many follow-ups make sense and which tools to use depend on your crew, your area and how many leads you get. Check the rules on texting customers where you work: consent requirements vary by state and country." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How fast should a flooring company reply to a lead?" },
  { kind: "p", text: "Within minutes for the first reply, which can be automatic and ask about rooms, the current floor and any deadline. A person should follow up by the next working morning with measure times, as long as the first reply says when." },
  { kind: "h3", text: "Should I give a price before the measure?" },
  { kind: "p", text: "A rough range can help if the customer asks, but say clearly that it depends on the measure and the subfloor. The firm price comes after you've seen the rooms." },
  { kind: "h3", text: "How many times should I follow up on a flooring quote?" },
  { kind: "p", text: "Two or three times over about two weeks, each with a reason: check it arrived, offer something useful, then ask directly. Stop as soon as the customer answers." },
  { kind: "h3", text: "What should I do with showroom visitors who take samples?" },
  { kind: "p", text: [
    "Record which samples they took and send a message a couple of days later asking how they look and offering a measure. If you'd like the replies, reminders and follow-ups set up for your flooring business, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const flooringLeadFollowUp: Post = {
  slug: "flooring-lead-follow-up",
  title: "Flooring Lead Follow Up: Samples, Measures, Quotes",
  description: "How a flooring business can follow up on leads: a reply in minutes, a booked measure, a chase for samples and quotes, and a review after the install.",
  lede: "Quote requests, showroom samples and measures. How to reply first and win the job.",
  category: "Lead Generation",
  published: "2026-11-28",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/flooring-lead-follow-up.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
