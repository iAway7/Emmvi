import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "landscaping lead follow up". Sin cifras de terceros: no hay ninguna que se
 * pudiera comprobar en una fuente primaria el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's a Thursday in early spring, 7:50pm. A homeowner has spent the evening looking at a muddy back yard and decided this is the year for a patio, new planting and someone to cut the grass every week. They fill in the request form on three landscapers' websites and go back to the sofa. By Saturday, one of those landscapers has walked the yard. The other two are still meaning to call back." },
  { kind: "p", text: "Landscaping follow-up has a shape most trades don't. Requests arrive in a rush when the weather turns, the bigger jobs take weeks to decide, and the best customers are the ones who come back every season. This article covers how a landscaping business can follow up at each stage: the first reply, the site visit, the estimate, and the months between one season and the next." },

  { kind: "h2", text: "Why landscaping leads go quiet" },
  { kind: "p", text: "A landscaping lead rarely says no. It stops answering. The reason it stops tells you what the next message should say." },
  { kind: "list", items: [
    [{ text: "They asked several companies.", bold: true }, " Most homeowners get two or three prices. The first one to book a visit becomes the price the others get compared to."],
    [{ text: "The spring rush buried them.", bold: true }, " Your inbox fills up at the same time as your schedule. A request that arrives on a busy Monday can sit until Friday without anyone deciding to ignore it."],
    [{ text: "The project is bigger than the budget.", bold: true }, " A design for a full back yard can come back higher than they hoped. They go quiet because they don't know how to ask for less."],
    [{ text: "The timing moved.", bold: true }, " A patio priced in March might be planned for after a summer holiday. The lead is real, just later than you thought."],
  ] },
  { kind: "p", text: "None of these is a reason to stop following up. Each one is a reason for a different message." },

  { kind: "h2", text: "Answer the request the same evening" },
  { kind: "p", text: [
    "The first reply is the only message the customer is actively waiting for. Landscaping requests often come in at night and on weekends, because that's when people are home looking at their yard. An automatic text sent within a minute of the form arriving confirms the request, says who you are and offers a time. Why the first minutes matter, and how to set it up without anyone on call, is covered in ",
    { text: "speed to lead for installers", href: "/speed-to-lead/" },
    ".",
  ] },
  { kind: "aside", text: "Hi Dana, it's Luis from Greenline Landscaping. Thanks for the request for the patio and planting. We can walk the yard Saturday at 10am or Monday at 5pm. Which works best? If it helps, send a couple of photos of the back yard and we'll take a first look before we come." },
  { kind: "p", text: "Two details do the work there. It repeats what they asked for, so it reads like a person and not a form. And it offers two real times instead of asking when they're free, which turns a back-and-forth into a single reply." },
  { kind: "h3", text: "Calls from the mower need a reply too" },
  { kind: "p", text: [
    "Nobody hears the phone over a mower or a plate compactor. A call that goes to voicemail and gets a call back at the end of the day has had hours to ring someone else. A ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    " sends a short message straight away, so the caller knows they were heard and can reply by text while the crew finishes the job.",
  ] },

  { kind: "h2", text: "Turn the first reply into a visit" },
  { kind: "p", text: "For anything bigger than a one-off mow, the goal of the first reply is a booked site visit. Whatever sends the reply should let the customer pick a slot from your real calendar, then confirm the booking and send a reminder the day before. A visit the customer forgot about is a wasted drive across town." },
  { kind: "h3", text: "Ask what changes the price" },
  { kind: "p", text: "Use the booking confirmation to ask the questions you'd otherwise answer on site. Rough size of the area, access for machinery, whether there's a slope, and whether they want ongoing maintenance as well as the build all change the estimate. Some small jobs, like a hedge trim or a spring cleanup, can be priced from photos without a visit at all." },
  { kind: "h3", text: "Split design work from upkeep" },
  { kind: "p", text: "A request for a new patio and a request for weekly mowing are different sales. The first is a project with a single estimate and a long decision. The second is a recurring service that can often be agreed on the first call. Tag them differently when they arrive, so each one gets the follow-up that fits it instead of the same generic sequence." },

  { kind: "h2", text: "Follow up on the estimate" },
  { kind: "p", text: [
    "This is where most landscaping projects are won or lost. The estimate goes out, the customer says thanks, and then nothing. A short sequence, decided in advance and sent by the system, means no one has to remember who was due a message. The general version is in ",
    { text: "quote follow up for installers", href: "/quote-follow-up/" },
    "; here is how it fits landscaping.",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "Same day:", bold: true }, " send the estimate with a short note on what's included and what isn't. \"Patio, base and drainage included, plants priced separately\" answers most questions before they're asked."],
    [{ text: "Two or three days later:", bold: true }, " ask whether they have questions, and offer to walk through the plan on a short call."],
    [{ text: "About a week later:", bold: true }, " if the price may be the problem, offer a smaller first phase. Patio this spring, planting in the fall, is still a job."],
    [{ text: "Two to three weeks later:", bold: true }, " a last, easy question: are they still planning the work, or should you close the estimate for now?"],
  ] },
  { kind: "aside", text: "Hi Dana, it's Luis from Greenline Landscaping. Any questions on the estimate for the patio and planting? If the full plan is more than you wanted to spend this year, we can split it: patio first, planting in the fall." },
  { kind: "p", text: "Stop the sequence as soon as the customer replies. A reply means a person takes over. An automatic \"just checking in\" after they've already said yes is the fastest way to look careless." },
  { kind: "aside", tone: "tip", text: "When you send an estimate, write down the date the customer wants the work done by, even if it's vague. \"Before the graduation party in June\" gives every follow-up a reason that's about their plan, not your pipeline." },
  { kind: "p", text: "Illustration: if you send 30 estimates in a busy spring month and only chase the ones you remember, the rest close only if the customer chases you. With a sequence, all 30 get the same four messages, whether it was a quiet week or the busiest one of the year. How many you win is yours to measure. A schedule doesn't guarantee it." },

  { kind: "h2", text: "Follow up by season" },
  { kind: "p", text: "Landscaping is the trade where the calendar does half the selling. Most other trades follow up on one job. A landscaper can follow up on the next season, every year, with customers who already know the work." },
  { kind: "list", items: [
    [{ text: "Late winter:", bold: true }, " a note to last year's customers saying when you're booking spring cleanups and maintenance. Early bookings fill the calendar before the rush."],
    [{ text: "Early summer:", bold: true }, " a check-in with project customers about how the new planting is doing, and whether irrigation needs adjusting."],
    [{ text: "Early fall:", bold: true }, " leaf cleanup, aeration and fall planting, sent to everyone on maintenance and to the estimates that didn't go ahead in spring."],
    [{ text: "End of season:", bold: true }, " a thank you, a review request for finished projects, and a question about next year's plans."],
  ] },
  { kind: "p", text: [
    "These messages only work if each customer's record says what they bought, when and at which property. That is what a CRM is for, and what a landscaping one should track is covered in ",
    { text: "CRM for landscaping companies", href: "/landscaping-crm/" },
    ".",
  ] },
  { kind: "h3", text: "Don't let the old estimates die" },
  { kind: "p", text: "The estimate that went quiet in April is often the easiest sale in September. The customer already met you, already saw a price and still has the same back yard. A single message in early fall asking whether the project is still on their list costs nothing and reaches someone who was ready to buy once." },

  { kind: "h2", text: "What to automate, and what not" },
  { kind: "p", text: "Automation is good at the messages that should always go out and are easy to forget: the first reply, the visit reminder, the estimate follow-ups, the seasonal notes. It is bad at anything that needs judgment: a customer who is unhappy, a design change, a question about a price. Those need a person, and the system should hand them over as soon as the customer writes back." },
  { kind: "list", items: [
    [{ text: "Automate:", bold: true }, " the instant reply, booking links, visit reminders, the estimate sequence, review requests and seasonal reminders."],
    [{ text: "Keep personal:", bold: true }, " walking the site, presenting a design, negotiating scope, and any reply to a complaint."],
    [{ text: "Check before you send:", bold: true }, " that each message names the customer, the property and the job, and that it stops when they reply."],
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every landscaping business. The right timing depends on your area, your seasons and the kind of work you sell. Rules on business texting, consent and the hours you can send messages vary by country and state, so check the ones that apply to you before you switch any sequence on." },
  { kind: "p", text: [
    "If you'd rather have the replies, reminders and estimate follow-up set up and running for you, you can ",
    { text: "tell us about your business", href: "/contact-us/" },
    ".",
  ] },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How fast should I reply to a landscaping lead?" },
  { kind: "p", text: "As fast as the request arrives. An automatic text within a minute confirms you received it and offers a visit time. A person can follow up later in the day, but the customer already knows they've been heard." },
  { kind: "h3", text: "How many times should I follow up on an estimate?" },
  { kind: "p", text: "Three or four messages over two to three weeks is a reasonable start: same day, a few days later, about a week later and a final question. After that, move the estimate to a seasonal reminder instead of deleting it." },
  { kind: "h3", text: "Should I follow up by text or by email?" },
  { kind: "p", text: "Text for short, time-sensitive messages like visit times and reminders. Email for the estimate itself, plans and anything with photos or line items. Many customers reply faster to a text, so use it to point to the email." },
  { kind: "h3", text: "What about leads that come in during winter?" },
  { kind: "p", text: "Reply the same way, then follow up on the season, not the calendar week. A winter estimate for spring work is better served by one message when you start booking than by four messages in January." },
];

export const landscapingLeadFollowUp: Post = {
  slug: "landscaping-lead-follow-up",
  title: "Landscaping Lead Follow Up: Estimates and Seasons",
  description:
    "How a landscaping business can follow up on every lead: the first reply, the site visit, the estimate sequence and seasonal messages that bring work back.",
  lede: "From the first reply to next spring: follow-up that fits how landscaping sells.",
  category: "Lead Generation",
  published: "2026-11-11",
  image: { src: "/blog/landscaping-lead-follow-up.png", width: 1600, height: 900, alt: "" },
  body,
};
