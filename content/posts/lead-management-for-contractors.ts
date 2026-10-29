import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "lead management for contractors". Sin cifras ni precios de terceros.
 */
const body: Post["body"] = [
  { kind: "p", text: "Monday morning. There's a voicemail from Saturday about a heat pump, two web forms from Sunday night, a Facebook message asking if you do EV chargers, and a text your installer forwarded from a neighbor of last week's job. Each one is a possible job. Each one lives in a different app. By Wednesday, at least one of them has been forgotten, and nobody can say which." },
  { kind: "p", text: "That is the problem lead management solves. Not getting more leads, but making sure the ones you already get are answered, owned and either won or closed out on purpose. This article covers how to set that up for an installer or home-service business, with or without new software." },

  { kind: "h2", text: "What lead management covers" },
  { kind: "p", text: "For a contractor, lead management is everything between \"someone asked about a job\" and \"we either booked it or decided it's not ours\". In practice it comes down to four questions you should be able to answer for every lead at any moment:" },
  { kind: "list", ordered: true, items: [
    [{ text: "Where is it?", bold: true }, " One list, not a phone, an inbox and a notebook."],
    [{ text: "Who owns it?", bold: true }, " One named person, not \"the office\"."],
    [{ text: "What happens next?", bold: true }, " A specific step: call back, book a visit, send the quote."],
    [{ text: "When?", bold: true }, " A date, so a lead that nobody touches shows up as late."],
  ] },
  { kind: "p", text: [
    "If you can answer all four, you are managing leads. If you can't, the leads are managing you. The later part of the journey, from quote to signed job, is covered in ",
    { text: "a contractor sales pipeline", href: "/contractor-sales-pipeline/" },
    ". This article is about the front end: getting every quote request into one place and keeping it moving until it becomes a quote or a clear no.",
  ] },

  { kind: "h2", text: "Every channel into one list" },
  { kind: "p", text: "Most installers get leads from more places than they think. Before changing anything, write down every way a customer can reach you. A typical list looks like this:" },
  { kind: "list", items: [
    "The quote request form on your website.",
    "Phone calls to the main number, including the ones you miss while on a roof or under a sink.",
    "Texts to that number or to someone's mobile.",
    "Messages through your Google Business Profile, Facebook or Instagram.",
    "Lead platforms and directories you pay for.",
    "Emails to a general inbox, and referrals passed on by customers, suppliers or your own crew.",
  ] },
  { kind: "p", text: "The goal is that each of these ends up as a record in the same list, with the person's name, how to reach them, what they asked about and where the request came from. Some channels can feed the list automatically: web forms, lead platforms and most messaging channels can be connected to a CRM. Others need a habit: a referral mentioned on site only gets in if someone types it in the same day." },
  { kind: "h3", text: "Missed calls count as leads" },
  { kind: "p", text: [
    "A missed call with no voicemail is easy to treat as nothing. It's often a homeowner who tried you first and is now trying the next number. A text sent automatically after a missed call turns it into a conversation and a record in your list. The details are in ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    ".",
  ] },
  { kind: "h3", text: "Record the source when the lead arrives" },
  { kind: "p", text: [
    "\"Where did you hear about us?\" is easiest to answer on day one and nearly impossible to reconstruct months later. Capture it on the form, from the tracking number, or by asking on the first call. That is what later tells you which of your paid channels are worth the money, as explained in ",
    { text: "lead source tracking", href: "/lead-source-tracking/" },
    ".",
  ] },

  { kind: "h2", text: "One owner and a first reply" },
  { kind: "p", text: "A lead that belongs to everyone belongs to no one. When three people can see a new request, each assumes another has called back. Give every lead a single owner the moment it lands. In a small office that might always be the same person; with several estimators it could be by area, by job type or in turns." },
  { kind: "p", text: "The owner's first job is the first reply. A homeowner who asks for a solar quote at 9pm is usually asking more than one company, and the first useful answer tends to start the conversation. That doesn't mean a salesperson on call all night. It means an automatic reply that confirms the request, says when a person will be in touch, and asks one or two questions you'd need anyway." },
  { kind: "aside", text: "Hi Dana, thanks for your quote request for an EV charger. Sam from our team will call you tomorrow before 11am. To get the quote right, could you reply with a photo of your electrical panel and roughly where you'd like the charger?" },
  { kind: "p", text: [
    "The reply is automatic; the promise in it (\"before 11am\") is one a person has to keep. If your team can't keep it, change the promise, not the automation. More on why the first minutes matter is in ",
    { text: "speed to lead", href: "/speed-to-lead/" },
    ".",
  ] },

  { kind: "h2", text: "A next step and a date on every lead" },
  { kind: "p", text: "This is the part most contractors skip, and the one that makes the biggest practical difference. Every open lead should have a next step and a due date written next to it. Not \"follow up\" but \"call to book survey, Thursday\" or \"text for photos of the boiler, tomorrow\"." },
  { kind: "p", text: "With dates in place, the list sorts itself. Overdue leads rise to the top. Leads waiting on the customer show when you'll nudge them. A lead with no date stands out as one nobody has thought about, which is exactly the lead that goes cold." },
  { kind: "h3", text: "Use statuses that describe facts" },
  { kind: "p", text: "Alongside the date, give each lead a short status that says what has actually happened: New, Contacted, Waiting on customer, Visit booked, Quote sent. Avoid statuses that describe a feeling, like \"Hot\" or \"Probably\". Two people can agree on whether a visit is booked; they rarely agree on how hot a lead is." },
  { kind: "h3", text: "Close out leads on purpose" },
  { kind: "p", text: "Not every lead is a job. Some are outside your area, some want work you don't do, some are spam, and some go silent after every reasonable attempt. Close those out with a one-word reason instead of leaving them open. An open list full of dead leads hides the live ones, and the reasons tell you something: a run of \"outside area\" leads from one ad, for example, says that ad is reaching the wrong places." },
  { kind: "aside", tone: "tip", text: "Agree on what \"tried everything\" means before anyone needs it. For example: a reply on day one, two follow-ups over the next week, and a final message saying you'll close the request unless they reply. After that, close it with the reason \"No reply\" and stop." },

  { kind: "h2", text: "The ten-minute daily lead check" },
  { kind: "p", text: "Software doesn't manage leads; people looking at it every day do. A short check, at the same time each day, keeps the list honest. It works best first thing in the morning, before the crews head out, or at the end of the day when the office is quiet. Go through it in this order:" },
  { kind: "list", ordered: true, items: [
    "New leads since yesterday: does each one have an owner, a status and a next step?",
    "Overdue steps: call, text or reschedule each one, and update the date.",
    "Waiting on customer: is a nudge due today?",
    "Leads with no date: give them one or close them with a reason.",
  ] },
  { kind: "p", text: "Ten minutes is a realistic target when the list is in one place and every lead has a date. If the check takes an hour, that usually means leads are still arriving in several places or most of them have no next step yet. Fix those first." },
  { kind: "h3", text: "Once a month, look at the totals" },
  { kind: "p", text: "Count how many leads came in, how many became quotes, and the most common reasons for closing the rest, broken down by source. You don't need a dashboard for this; a filtered view of the list is enough. The point is to notice patterns, such as one channel sending mostly jobs you don't do." },

  { kind: "h2", text: "Choosing lead management software" },
  { kind: "p", text: "You can run all of the above in a shared spreadsheet for a while, and some small businesses do. It stops working when leads arrive faster than someone can type them in, or when you want replies and reminders to happen without a person remembering. That's when a CRM earns its place. Whatever you look at, check that it can:" },
  { kind: "list", items: [
    "Pull in leads from your web form, phone number, messaging channels and the lead platforms you pay for, without retyping.",
    "Send an automatic first reply by text and email, and stop follow-ups when the customer replies.",
    "Assign each lead to one owner and notify them on their phone.",
    "Hold a next step and a due date on every lead, with an overdue view.",
    "Record the lead source and a reason when a lead is closed.",
    "Work comfortably on a phone, because that's where your team will use it.",
  ] },
  { kind: "p", text: [
    "Job management software built for field service can cover part of this, and an all-in-one CRM such as GoHighLevel can cover most of it once configured. The setup matters more than the brand: the same tool can be a tidy lead list or a second inbox nobody opens. If you'd rather have it configured for you, that's what ",
    { text: "GoHighLevel automation", href: "/services/gohighlevel-automation/" },
    " at emmvi covers.",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. A one-van operation with a handful of leads a week may do fine with a disciplined spreadsheet and a missed-call text. Pick the lightest setup that answers the four questions for every lead." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Is lead management the same as a CRM?" },
  { kind: "p", text: "No. Lead management is the process: one list, one owner, a next step and a date for every lead. A CRM is a tool that makes that process easier to keep up. A CRM without the process is just another place leads get lost." },
  { kind: "h3", text: "Who should own leads in a small contractor business?" },
  { kind: "p", text: "Whoever can reply during working hours and keep promises about callbacks. That's often the office manager rather than the owner, who is on site. What matters is that each lead has one named person, and that everyone knows who it is." },
  { kind: "h3", text: "How long should a lead stay open?" },
  { kind: "p", text: "Until it becomes a quote, or until you've followed your agreed attempts and closed it with a reason. Leads waiting on the customer, such as a homeowner saving for next spring, can stay open with a date months away. That's still managed, as long as the date is there." },
  { kind: "h3", text: "Can lead management be automated?" },
  { kind: "p", text: [
    "Much of the routine can: capturing leads from each channel, the first reply, reminders to the owner and follow-ups that stop when the customer answers. Deciding whether a job is a fit, and the conversations that win it, still need a person. If you'd like that set up for your business, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const leadManagementForContractors: Post = {
  slug: "lead-management-for-contractors",
  title: "Lead Management for Contractors: One List, No Lost Jobs",
  description: "How contractors and installers can manage leads: every channel into one list, one owner per lead, a next step with a date, and a ten-minute daily check.",
  lede: "Every lead in one list, with an owner, a next step and a date.",
  category: "CRM",
  published: "2026-10-29",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/lead-management-for-contractors.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
