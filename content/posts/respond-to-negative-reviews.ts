import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "how to respond to negative reviews" (enfoque contratistas). Fuentes:
 * ayuda de Google Business Profile y guia de la FTC, comprobadas el
 * 2026-10-20. Sin cifras externas.
 */
const body: Post["body"] = [
  { kind: "p", text: "A one-star review lands on a Sunday evening. The customer says nobody called them back about a leaking flashing after a solar install, and that the company \"took the money and disappeared\". You remember the job differently. Your first instinct is to reply straight away and set the record straight." },
  { kind: "p", text: "Don't, not yet. The person who wrote the review has mostly made up their mind. The people who will read your reply are the next homeowners comparing three installers on their phone, and they are judging how you handle a problem, not who was right. Below: what to check first, how to structure the reply, example wording, and when to report instead." },

  { kind: "h2", text: "Before you write anything" },
  { kind: "p", text: "Most bad replies are written in the first ten minutes. A few checks first make the reply shorter, calmer and more accurate." },
  { kind: "list", ordered: true, items: [
    [{ text: "Find the job.", bold: true }, " Look up the customer in your CRM, job software or texts. Check the dates, the quote, the messages and who was on site. A reply that gets a detail wrong makes everything else look careless."],
    [{ text: "Separate the facts from the tone.", bold: true }, " \"Nobody called me back\" is something you can check. \"Worst company ever\" isn't. Reply to the first kind."],
    [{ text: "Decide whether it's real.", bold: true }, " If there is no record of the customer, or the review describes a job you don't do, it may be fake or meant for another business. That changes what you do next (see the section on reporting below)."],
    [{ text: "Fix what can be fixed.", bold: true }, " If the flashing really is leaking, the most useful thing you can do is book the visit. The reply can then say so truthfully."],
  ] },
  { kind: "aside", tone: "tip", text: "Write the reply, then leave it for an hour before posting. Read it again as if you were a homeowner choosing an installer. If any line sounds like you're winning an argument, cut it." },
  { kind: "p", text: [
    "Speed still matters, just not the first ten minutes. Google's own ",
    { text: "tips for replying to reviews", href: "https://support.google.com/business/answer/3474122?hl=en" },
    " suggest replying promptly, and a negative review that sits unanswered for a month tells readers nobody is watching. Same day or next day is a good target for most businesses.",
  ] },

  { kind: "h2", text: "A reply in four parts" },
  { kind: "p", text: "A good reply to a negative review is short. Google's tips page says to keep replies short and simple, to be professional and polite, and to move complicated issues offline by asking the reviewer to call or email. In practice that gives four parts:" },
  { kind: "list", ordered: true, items: [
    [{ text: "Thank them and use their name.", bold: true }, " It shows a person read the review, not a script."],
    [{ text: "Acknowledge the specific problem.", bold: true }, " Name it in one line: the missed call back, the late start, the mess left in the garden. Don't restate the whole review."],
    [{ text: "Own what was yours.", bold: true }, " If you got something wrong, say so plainly. If part of the complaint was outside your control (the utility's connection date, a supplier delay), say what you can and can't do, without blaming the customer. Google's tips page makes the same point: admit mistakes, but don't accept responsibility for things outside your control."],
    [{ text: "Offer a next step with a real name.", bold: true }, " A person, a direct number or email, and what happens when they get in touch. \"Please contact us\" with no name reads as a brush-off."],
  ] },
  { kind: "p", text: "That's four or five sentences. The rest of the detail belongs in the phone call, not in public." },

  { kind: "h2", text: "Example replies for installers" },
  { kind: "p", text: "These are starting points, not templates to paste unchanged. Google advises against posting the same generic reply to everyone, and readers notice when every reply is identical. Change the details to match the job." },
  { kind: "h3", text: "\"Nobody called me back\"" },
  { kind: "p", text: "This is one of the most common complaints in home services, and it is usually true: the call came in while someone was on a roof or under a sink, and it was never returned." },
  { kind: "aside", text: "\"Hi Linda, thank you for telling us. You called about the leak after your solar install and didn't hear back, and that's on us. I've booked Dave to come out Tuesday morning to check the flashing at no charge. If Tuesday doesn't work, call me directly on [number]. Mark, operations\"" },
  { kind: "h3", text: "\"The quote was too expensive\"" },
  { kind: "aside", text: "\"Hi Paul, thanks for the feedback. Our quote for the heat pump included the new cylinder and the electrical upgrade the survey showed you'd need, which is why it was higher than a unit-only price. We're happy to go through it line by line if that helps. Call me on [number]. Sarah\"" },
  { kind: "p", text: "Explain what the price included once, without arguing that the customer is wrong to find it high. Some readers will be thinking the same thing, and a clear reason helps them more than a defensive one." },
  { kind: "h3", text: "A review you can't find" },
  { kind: "aside", text: "\"Hi Chris, we take every review seriously, but we can't find a job or a call under this name. If we've worked for you, please call me on [number] so we can look into it properly. Ana\"" },
  { kind: "p", text: "Keep this one neutral. Don't accuse the reviewer of lying in public, even if you suspect it. If the review looks fake, report it as well (see below)." },

  { kind: "h2", text: "What not to do" },
  { kind: "p", text: "Some mistakes just make you look bad. Others can break Google's policies or US law." },
  { kind: "h3", text: "Things that only hurt you" },
  { kind: "list", items: [
    "Arguing the details in public, or replying more than once to the same review.",
    "Sharing anything private about the customer: their address, what they paid, what they said on the phone. Google's tips page is explicit about protecting the reviewer's private information.",
    "Using the reply to advertise (\"Book now for 10% off!\"). Google's tips say replies shouldn't be promotional.",
  ] },
  { kind: "h3", text: "Things US rules ban" },
  { kind: "p", text: [
    "The FTC's rule on consumer reviews, in force since October 21, 2024, bans some ways of suppressing reviews. According to the FTC's ",
    { text: "questions and answers on the rule", href: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" },
    ", a business can't use an unfounded legal threat, intimidation or knowingly false accusations to stop a review or get one removed. Threatening to sue over an honest one-star review, or posting that the reviewer is lying when you know they aren't, falls into that territory.",
  ] },
  { kind: "p", text: [
    "Separately, the ",
    { text: "Consumer Review Fairness Act", href: "https://www.ftc.gov/business-guidance/resources/consumer-review-fairness-act-what-businesses-need-know" },
    " makes it illegal to put clauses in your customer contracts or terms that bar people from reviewing you or charge them for doing so. If an old contract template has a \"no negative reviews\" line, the FTC recommends removing it, even if you never planned to use it.",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not legal advice and not a recommendation for every business. Rules differ outside the US, and a review that makes serious or defamatory claims is a matter for a lawyer, not a reply. The examples above are a starting point to adapt, not wording that suits every situation." },

  { kind: "h2", text: "When to report a review" },
  { kind: "p", text: [
    "Google doesn't remove reviews because they're negative. Its help page on ",
    { text: "reporting inappropriate reviews", href: "https://support.google.com/business/answer/4596773?hl=en" },
    " says not to report a review just because you disagree with it, and that Google doesn't step into disputes between businesses and customers. A review has to break Google's content policies, for example spam, profanity or a review that isn't about a real experience with your business.",
  ] },
  { kind: "p", text: "You report from your Business Profile: open the reviews, choose the report option next to the review and pick a reason. Google says evaluation typically takes several days, you can check the status in its Reviews Management Tool, and if the review stays up you can appeal once." },
  { kind: "h3", text: "The reviewer can change their mind" },
  { kind: "p", text: [
    "According to Google's help page on ",
    { text: "reading and replying to reviews", href: "https://support.google.com/business/answer/3474050?hl=en" },
    ", the reviewer is notified when you reply, and they can edit their review afterwards. If you fixed the problem, it's fine to ask, once and politely, whether they'd consider updating it. Don't make the fix conditional on them doing so.",
  ] },

  { kind: "h2", text: "Stop the next one early" },
  { kind: "p", text: "Most negative reviews in home services start as a problem the customer couldn't get anyone to hear. The review is the last channel they tried, not the first. A few habits catch more of those problems while they're still a phone call." },
  { kind: "list", items: [
    [{ text: "Answer every call and message.", bold: true }, " A missed call that gets an automatic text within a minute (\"Sorry we missed you, we're on a job, what can we help with?\") gives an unhappy customer somewhere to go. How that works is in ", { text: "missed call text back", href: "/missed-call-text-back/" }, "."],
    [{ text: "Give the customer a direct line in your review request.", bold: true }, " Ask every customer for a review, and include a line like \"if anything isn't right, reply here and we'll sort it\". It isn't a filter: everyone gets the same link. The full approach is in ", { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" }, "."],
    [{ text: "Get alerted to new reviews.", bold: true }, " Make sure a named person is notified when a review comes in, whether through your Business Profile settings or a CRM that shows reviews next to the customer's record. The aim is that a one-star review is seen the day it's posted, by someone who can look up the job."],
    [{ text: "Write down your reply rule.", bold: true }, " Who replies, how fast, and who calls the customer. If the answer is \"whoever sees it\", the answer in practice is nobody."],
  ] },
  { kind: "p", text: [
    "Good reviews matter here too. A profile with a steady flow of recent reviews puts one bad one in context, which is a better outcome than any reply. If you want the review requests, the alerts and the first replies to customers set up around how your jobs run, ",
    { text: "emmvi can set that up", href: "/services/gohighlevel-automation/" },
    ".",
  ] },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Should I reply to every negative review?" },
  { kind: "p", text: "Reply to every genuine one, once. Silence reads as not caring. The exception is a review that's clearly abusive or fake: report it, and if you reply at all, keep it to a neutral line asking them to get in touch." },
  { kind: "h3", text: "How fast should I reply to a bad review?" },
  { kind: "p", text: "Within a day or two is a sensible target. Fast enough that readers see you're paying attention, slow enough that you've checked the job and calmed down first." },
  { kind: "h3", text: "Can I ask Google to remove a negative review?" },
  { kind: "p", text: "Only if it breaks Google's content policies, for example spam, profanity or a review that isn't about a real experience. Google doesn't remove reviews because the business disagrees with them." },
  { kind: "h3", text: "Can I offer a refund if they delete the review?" },
  { kind: "p", text: "Fix the problem because it's a problem, not in exchange for a deleted review. Tying a refund to deleting a review turns the fix into a trade, and it's worth reading Google's review policies before offering anything in exchange for a changed review. If you fix it, you can ask once whether they'd update the review, and leave it there." },
  { kind: "p", text: [
    "If one-star reviews keep starting with \"nobody called me back\", that's a reply problem more than a review problem, and you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    " about it.",
  ] },
];

export const respondToNegativeReviews: Post = {
  slug: "respond-to-negative-reviews",
  title: "How to Respond to Negative Reviews as a Contractor",
  description: "How to respond to negative reviews as a contractor: what to check first, a four-part reply, example wording, what US rules ban and when to report a review.",
  lede: "Your reply is for the next homeowner reading, not the person who left the review.",
  category: "Lead Generation",
  published: "2026-10-20",
  image: { src: "/blog/respond-to-negative-reviews.png", width: 1600, height: 900, alt: "" },
  body,
};
