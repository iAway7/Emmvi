import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "solar lead follow up". La pagina del IRS sobre el Residential Clean Energy
 * Credit se comprobo el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "At 9pm, Marco fills in the form on your solar site. You reply in a minute and ask for a recent electricity bill so you can size a system. He says he'll dig it out. He doesn't. Three weeks later a neighbor tells you Marco went with another installer, the one who called him back about the bill on the Saturday." },
  { kind: "p", text: "Solar leads rarely go quiet at random. They stall at the same few points: waiting for a bill, waiting for a consultation, waiting on a proposal, waiting while the homeowner compares. This article walks through each of those points and what a follow-up should look like at each one, so that a lead only drops out when the homeowner decides, not because nobody asked." },

  { kind: "h2", text: "Where solar leads go quiet" },
  { kind: "p", text: "A solar sale has more steps than most home jobs, and each step needs something from the homeowner. Every time you are waiting on them, the lead can stall. The usual stops are:" },
  { kind: "list", ordered: true, items: [
    [{ text: "The first reply.", bold: true }, " The request came in, and either nobody answered quickly or the answer asked for nothing specific."],
    [{ text: "The utility bill.", bold: true }, " You need usage to size the system, and the homeowner has to find a PDF or a paper bill."],
    [{ text: "The consultation.", bold: true }, " A call or a home visit has to fit two calendars, sometimes with a partner present."],
    [{ text: "The proposal.", bold: true }, " The numbers are out and the homeowner is reading them, often next to other quotes."],
    [{ text: "The decision.", bold: true }, " Financing, a roof question or a partner's doubt sits between \"interested\" and \"signed\"."],
  ] },
  { kind: "p", text: [
    "The first stop is mostly a question of speed, covered in ",
    { text: "speed to lead for installers", href: "/speed-to-lead/" },
    ". The rest of this article is about the other four, where the work is less about seconds and more about not letting a week slip by without a message.",
  ] },
  { kind: "h3", text: "Give every stop an owner and a date" },
  { kind: "p", text: "The fix is the same at each point. When you are waiting on the homeowner, there is a date by which you will follow up, and someone (or an automation) responsible for doing it. If a lead sits in a stage with no next date, it is not being followed up. It is being hoped about." },

  { kind: "h2", text: "Follow up for the utility bill" },
  { kind: "p", text: "Asking for a bill is where many solar leads die, because it turns a quick form into homework. A few things make it easier to get:" },
  { kind: "list", items: [
    "Say why you need it in one line: to size the system to their real usage, not a guess.",
    "Offer more than one way to send it: a photo by text, a forwarded email, or an upload link.",
    "Say which part matters, such as the page with monthly usage in kWh, so they don't send six pages of terms.",
    "Offer a fallback. If they can't find it, a rough monthly amount and their provider's name is enough to start the conversation.",
  ] },
  { kind: "p", text: "Then follow up on a short schedule. If no bill arrives, a reminder the next day, another two or three days later, and then a phone call. People who ask for a solar quote at night often mean to send the bill and simply forget." },
  { kind: "aside", text: "Hi Marco, it's Sam from Bright Roof Solar. Just a reminder about the electricity bill for your quote. A photo of the page with your monthly usage is all we need, and you can reply to this text with it. If it's easier, tell us roughly what you pay a month and we'll start from that." },
  { kind: "h3", text: "When the bill arrives" },
  { kind: "p", text: "Confirm it the same day and say what happens next and when. \"Got it, thanks. We'll have a first design to you by Thursday\" turns a document into a commitment the homeowner can hold you to, and gives you a reason to be back in touch on Thursday." },

  { kind: "h2", text: "Getting the consultation booked" },
  { kind: "p", text: "The consultation, by phone, video or at the house, is where most solar sales are actually made. The follow-up job here is getting it on the calendar and making sure it happens." },
  { kind: "list", items: [
    [{ text: "Offer times, don't ask for them.", bold: true }, " \"Tuesday at 6pm or Saturday at 10am?\" gets an answer faster than \"When suits you?\". A booking link does the same job if it shows real availability."],
    [{ text: "Invite everyone who decides.", bold: true }, " If two people own the house, ask whether both can join. A proposal explained to one person is often retold badly to the other."],
    [{ text: "Send reminders.", bold: true }, " One the day before and one an hour or two before, with what to have ready: the bill, questions, access to the electrical panel for a home visit."],
    [{ text: "Follow up on no-shows the same day.", bold: true }, " A short, friendly message offering two new times. Most no-shows are a clash or a forgotten appointment, not a refusal."],
  ] },
  { kind: "aside", tone: "tip", text: "Before the consultation ends, agree the date you'll send the proposal and the date you'll talk it through. Write both in the CRM before you leave the driveway. A follow-up the homeowner agreed to doesn't feel like chasing." },

  { kind: "h2", text: "After the proposal goes out" },
  { kind: "p", text: [
    "Once the numbers are out, the follow-up starts looking like any other quote: a check-in, a nudge and a close, spread over about two weeks. The general version is in ",
    { text: "quote follow up for installers", href: "/quote-follow-up/" },
    ". Solar has a few twists worth planning for.",
  ] },
  { kind: "h3", text: "Expect specific questions" },
  { kind: "p", text: "Solar proposals raise the same questions again and again: payback, financing terms, what happens if the roof needs work, warranties, and what the utility pays for exported power. Your follow-ups should each answer one of these before it is asked. A message that says \"Some people ask how the warranty works on the inverter, here's the short version\" is useful. \"Any questions?\" puts the work back on the homeowner." },
  { kind: "h3", text: "Keep the proposal alive" },
  { kind: "p", text: "If your proposal has an expiry date, because equipment prices or financing rates change, say so in the first message and remind them before it passes. Only do this if the date is real. An invented deadline is easy to spot and costs you trust on the one point that matters most in solar: whether your numbers can be believed." },
  { kind: "h3", text: "Know when to stop" },
  { kind: "p", text: [
    "After the last follow-up, ask plainly whether they have decided, and accept the answer. If it is \"not now\" rather than \"no\", record the reason and the month they mentioned and move the lead to a slower track. That longer game is covered in ",
    { text: "lead nurturing for contractors", href: "/lead-nurturing-for-contractors/" },
    ".",
  ] },

  { kind: "h2", text: "Shared leads and comparison shoppers" },
  { kind: "p", text: "Many solar installers buy leads from marketplaces or lead sellers, and some of those leads are sold to several installers at once. Even homeowners who come straight to your site are often comparing two or three quotes. Follow-up for these leads is different in two ways." },
  { kind: "p", text: "First, speed matters more at the start, because the homeowner is about to hear from several companies in the same hour. Second, persistence matters more later, because many competitors call twice and give up. A clear, polite sequence that keeps going for a couple of weeks can leave you as the last installer still in touch." },
  { kind: "h3", text: "Don't compete on noise" },
  { kind: "p", text: "Five calls in a day doesn't stand out among other installers making five calls a day. A reply that answers the homeowner's question, a proposal that is easy to read, and a follow-up that refers to their house and their bill does. If they tell you they are comparing, ask what matters most to them in the comparison, and make your next message about that." },
  { kind: "h3", text: "Record where each lead came from" },
  { kind: "p", text: [
    "Bought leads, referrals and leads from your own website rarely behave the same way. Tag the source on every contact so you can later see which kind is worth the follow-up effort. A ",
    { text: "solar CRM", href: "/solar-crm/" },
    " set up with a source field and clear stages makes this a filter rather than a guess.",
  ] },

  { kind: "h2", text: "What changed with the tax credit" },
  { kind: "p", text: [
    "Many older solar follow-up templates lean on the federal tax credit for homeowners. That message is now out of date. The IRS page on the ",
    { text: "Residential Clean Energy Credit", href: "https://www.irs.gov/credits-deductions/residential-clean-energy-credit" },
    " says the credit is not available for property placed in service after December 31, 2025 (as checked in October 2026).",
  ] },
  { kind: "p", text: "In practice, check every saved message, proposal template and automated sequence for lines about \"30% back from the government\" or similar. A homeowner who reads that in 2026 and later learns it doesn't apply has a good reason to doubt the rest of your numbers. Where state, utility or local incentives exist, name the program and the date you checked it, because these change too." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. The right follow-up timing, channels and wording depend on your market, your sales process and the rules that apply to texting and calling customers where you work. Check incentives and messaging rules for your own area before you automate anything." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How many times should I follow up on a solar lead?" },
  { kind: "p", text: "There is no single number. A useful rule is one follow-up for each point where you are waiting on the homeowner, each with a date, and a clear final message at the end of the quote stage. Stop when they say no, and slow down when they say \"not yet\"." },
  { kind: "h3", text: "Should I call or text?" },
  { kind: "p", text: "Both, for different jobs. Texts work well for reminders and quick requests like the bill. Calls work better for talking a proposal through or handling a doubt. Whatever you use, get consent where the law requires it and make opting out easy." },
  { kind: "h3", text: "Which parts can be automated?" },
  { kind: "p", text: [
    "The first reply, bill reminders, consultation reminders and the quote follow-up sequence can run on their own and stop when the homeowner replies. The consultation itself and the answers to real questions still need a person. If you'd like that set up for your business, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const solarLeadFollowUp: Post = {
  slug: "solar-lead-follow-up",
  title: "Solar Lead Follow Up: From First Reply to Signed Job",
  description: "How solar installers can follow up at each point a lead stalls: the utility bill, the consultation, the proposal and homeowners comparing several quotes.",
  lede: "Solar leads stall at the same few points. Plan a follow-up for each one.",
  category: "Lead Generation",
  published: "2026-10-28",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/solar-lead-follow-up.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
