import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "crm for painting contractors". Las paginas del programa RRP de la EPA
 * citadas se comprobaron en la fuente el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's Thursday, 9:10pm. A homeowner has spent the evening staring at a peeling front porch and a living room they never liked the color of. They fill in the estimate form on your website: exterior trim, porch floor, maybe the living room too. You're asleep. By the time you see it at 7am, they've also asked two other painters, and one of them has already replied with three possible times for a walkthrough." },
  { kind: "p", text: "Painting is a business of many estimates and long decisions. A customer may take two weeks to choose a color and another two to say yes. Exterior work waits for the weather. The same house may call you again in five years. This article covers what a CRM for painting contractors should actually do, how to set up the pipelines, what to automate first and how to choose one without paying for features you won't use." },

  { kind: "h2", text: "What a painting CRM is for" },
  { kind: "p", text: "A CRM (customer relationship management system) is one record for every customer and every call, form or text, with what has happened and what should happen next. For a painter, that record should also hold what you learned at the house: which rooms, which surfaces, the colors and finishes used, and anything that changes the price, like a two-story gable or a ceiling with water stains." },
  { kind: "p", text: "Whatever the software, it should answer four questions at any moment, without scrolling through your phone:" },
  { kind: "list", items: [
    [{ text: "Who asked for an estimate and hasn't heard back?", bold: true }, " Every form, missed call and text still waiting for a person."],
    [{ text: "Which estimates are still open?", bold: true }, " Walked, priced, sent, and not yet a yes or a no."],
    [{ text: "What's on the schedule, and what moves if it rains?", bold: true }, " Exterior jobs need a plan B, and the customer needs to hear about it."],
    [{ text: "Where did the paid work come from?", bold: true }, " Which ads, directories, yard signs and referrals turned into jobs, not just form fills."],
  ] },
  { kind: "p", text: "If a system can't answer those four, it's a contact list with a monthly fee." },

  { kind: "h2", text: "Where painting work slips away" },
  { kind: "h3", text: "Estimate requests arrive after hours" },
  { kind: "p", text: "People think about painting when they're at home looking at their walls: evenings and weekends. That's exactly when you're not at your desk. A request that waits until morning is now competing with whoever answered first. The fix is not working at night. It's an automatic reply that confirms the request, asks the one or two questions you need, and offers walkthrough times." },
  { kind: "h3", text: "The estimate goes out and nobody chases it" },
  { kind: "p", text: [
    "Most painting estimates don't get an instant answer. The customer wants to talk to their partner, compare prices or pick colors first. Then the week fills up with jobs, and nobody asks again. A quote with no answer is rarely a firm no, which is why ",
    { text: "a simple quote follow-up schedule", href: "/quote-follow-up/" },
    " matters more than the price on it.",
  ] },
  { kind: "h3", text: "Weather moves the calendar" },
  { kind: "p", text: "A rained-out exterior day means calls to every customer affected, a new date for each, and a gap to fill with interior work. Done by hand from the van, someone always hears last, usually the customer who took the day off to let you in." },
  { kind: "h3", text: "Past customers are forgotten" },
  { kind: "p", text: "A house you painted is a house that will need painting again, plus the rooms you didn't do the first time. Without a record and a reminder, that customer searches online when the time comes and finds someone else." },

  { kind: "h2", text: "Set up two pipelines" },
  { kind: "p", text: "A pipeline is the list of stages a job moves through. Keep each one close to how the work really happens. Too few stages and you can't see where things stall, too many and nobody updates them. Most painting businesses need two: one for estimates and one for scheduled jobs." },
  { kind: "h3", text: "Estimates" },
  { kind: "list", ordered: true, items: [
    [{ text: "Estimate request:", bold: true }, " a form, call or text has arrived. The clock is running."],
    [{ text: "Walkthrough booked:", bold: true }, " a time is confirmed, with the address and the scope on the record."],
    [{ text: "Estimate sent:", bold: true }, " the price is with the customer. This is the stage where most jobs go quiet."],
    [{ text: "Accepted:", bold: true }, " colors to confirm and, if you take one, a deposit."],
  ] },
  { kind: "h3", text: "Jobs" },
  { kind: "list", ordered: true, items: [
    [{ text: "Scheduled:", bold: true }, " a start date agreed, with a weather-dependent flag on exterior work."],
    [{ text: "In progress:", bold: true }, " the crew is on site. Changes to scope get noted here, not in a text thread."],
    [{ text: "Completed:", bold: true }, " walked with the customer and invoiced. The trigger for the thank you and the review request."],
  ] },
  { kind: "p", text: "Add a \"Lost\" outcome with a short reason: price, timing, went elsewhere, no reply. After a few months, those reasons tell you more about your estimates than any report." },
  { kind: "h3", text: "Record the source from the first contact" },
  { kind: "p", text: [
    "Every new request should carry where it came from: a particular ad, a directory, a yard sign, a referral, a returning customer. A hidden field on the website form and a separate number per ad fill this in without anyone typing it. The setup is in ",
    { text: "how to track where jobs come from", href: "/lead-source-tracking/" },
    ".",
  ] },

  { kind: "h2", text: "Keep the job details on the address" },
  { kind: "p", text: "Painting has a detail most trades don't: the exact color. When a customer calls three years later about a scuffed hallway or the room you didn't do, the first question is always \"what did we use?\". If the answer lives on a paper estimate in a truck, it's gone." },
  { kind: "aside", tone: "tip", text: "Save the color name, code, brand and sheen against the address and the room, the day the job closes. It takes two minutes, and it turns every touch-up call into a quick yes instead of a guess." },
  { kind: "p", text: "The same record can hold photos from the walkthrough, access notes (gate code, dog, where to park) and the year the house was built. That last one matters for more than curiosity." },
  { kind: "h3", text: "Flag older homes before the walkthrough" },
  { kind: "p", text: [
    "The EPA's ",
    { text: "Renovation, Repair and Painting program", href: "https://www.epa.gov/lead/renovation-repair-and-painting-program" },
    " applies to paid work that disturbs painted surfaces in homes built before 1978. According to the EPA's ",
    { text: "RRP rules page", href: "https://www.epa.gov/lead/lead-renovation-repair-and-painting-program-rules" },
    ", firms doing that work must be EPA or state certified and use lead-safe work practices. A \"year built\" question on your estimate form, stored in the CRM, means you know before you arrive whether those rules apply, and can plan and price the job accordingly. Some states run their own program, so check which applies where you work.",
  ] },

  { kind: "h2", text: "What it should do on its own" },
  { kind: "p", text: "A CRM that only stores information depends on someone opening it, and in the middle of a three-day exterior job nobody does. The useful part is what happens when a job enters or leaves a stage." },
  { kind: "list", items: [
    [{ text: "New request:", bold: true }, " a text and email within a minute that confirms you received it, asks for photos of the area and offers two or three walkthrough times."],
    [{ text: "Missed call:", bold: true }, " a text back asking what they'd like painted and when suits them for a call. The details are in ", { text: "how missed call text back works", href: "/missed-call-text-back/" }, "."],
    [{ text: "Estimate sent:", bold: true }, " follow-ups at roughly two, five and ten days, each one short and ending with one easy question. They stop as soon as the customer replies."],
    [{ text: "Job scheduled:", bold: true }, " a reminder the day before, and a ready-to-send message for rain delays that you trigger with one tap."],
    [{ text: "Job completed:", bold: true }, " a thank you and a review request a day or two later, once the customer has seen it in daylight."],
    [{ text: "Past customer:", bold: true }, " a check-in a few years later about the rooms or the exterior you didn't do."],
  ] },
  { kind: "p", text: "A first reply to an evening estimate request can be as short as this:" },
  { kind: "aside", text: "Hi Laura, thanks for your request for the porch and trim. This is Maple Street Painting. Could you send two or three photos of the areas? We can come and look Saturday 10am or Monday 4pm, which suits you better?" },
  { kind: "p", text: [
    "The review step is worth getting right, because painting customers judge you on photos and reviews more than almost anything else. The timing and wording are in ",
    { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" },
    ".",
  ] },
  { kind: "h3", text: "What stays with a person" },
  { kind: "p", text: "The walkthrough, the price, color advice and any conversation about a problem on the job. Automation is for the reply nobody had time to send, not for replacing the person who knows how many coats that wall needs." },

  { kind: "h2", text: "How to choose one" },
  { kind: "p", text: "Most search results for this topic are lists of ten tools written by the vendors themselves. Instead of comparing feature lists, test the three places where your business loses work:" },
  { kind: "list", ordered: true, items: [
    [{ text: "Send yourself an estimate request at 9pm.", bold: true }, " Does a reply go out on its own, by text, within a minute?"],
    [{ text: "Move an estimate to \"sent\" and wait.", bold: true }, " Do the follow-ups start, and do they stop when you reply as the customer?"],
    [{ text: "Look up a past job by address.", bold: true }, " Can you find the colors, photos and notes in under a minute, on your phone?"],
  ] },
  { kind: "p", text: "Also check who owns the data. You should be able to export your customers, jobs and notes at any time. If you already estimate in specialist painting software, check that the CRM connects to it rather than asking you to price jobs twice." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every painting business. The right setup depends on your volume, your crew and the tools you already use, and the EPA lead rules are summarized here, not explained in full: check the EPA or your state program for what applies to you." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Do painting contractors really need a CRM?" },
  { kind: "p", text: "Not if every request gets a fast answer, every estimate is chased and every past customer's colors are on file. Once any of those stops being true, a CRM is the simplest way to make it true again. It doesn't create work, it stops you losing the work that already asked for a price." },
  { kind: "h3", text: "Is a CRM the same as estimating software?" },
  { kind: "p", text: "No. Estimating software calculates the price: surfaces, square footage, coats, labor. A CRM manages what happens around it: the request, the reply, the follow-up and the repeat work. Some tools do both, many do one better than the other." },
  { kind: "h3", text: "What should I automate first?" },
  { kind: "p", text: "The reply to new estimate requests and missed calls, then the follow-up on sent estimates. Those two are where most painting work is lost, and neither can be done by hand from a ladder." },
  { kind: "h3", text: "How long does setup take?" },
  { kind: "p", text: [
    "A first useful version, with the estimate pipeline and an instant reply, can run within days. Getting every stage and message right usually takes a few weeks of real use. If you'd rather have it set up for you, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const crmForPaintingContractors: Post = {
  slug: "crm-for-painting-contractors",
  title: "CRM for Painting Contractors: Estimates to Repaints",
  description: "What a CRM for painting contractors should track: the 9pm estimate request, the quote nobody chased, the colors on file, and what to automate first.",
  lede: "Estimate requests, open quotes and past colors, all in one place you check.",
  category: "CRM",
  published: "2026-11-08",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/crm-for-painting-contractors.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
