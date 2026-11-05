import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "electrician lead follow up". La pagina del IRS sobre el credito federal
 * para cargadores (seccion 30C) se comprobo el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's 4:40pm and you're in a crawl space. In the last hour, three people have tried to reach you. One has half the house without power and a breaker that won't reset. One wants a price for a panel upgrade before they buy an electric car. One filled in your form asking about recessed lights in the kitchen. Your phone shows two missed calls and an email you won't read until 9pm." },
  { kind: "p", text: "By then, the first one has booked another electrician, and the other two have sent the same quote request to two more companies. None of this is about price or quality. It's about who answered, and who followed up afterwards. This article covers how an electrical business can follow up on each kind of lead without spending the evening on the phone." },

  { kind: "h2", text: "Three kinds of electrical leads" },
  { kind: "p", text: "Electrical work arrives in three shapes, and each needs a different speed of reply." },
  { kind: "list", items: [
    [{ text: "Urgent calls.", bold: true }, " No power, a burning smell, a tripping breaker, sparks from an outlet. The customer wants someone today and books whoever confirms first."],
    [{ text: "Small jobs.", bold: true }, " A new circuit, outdoor lights, a ceiling fan, a few outlets. Often priced from photos or a short visit, and decided within days."],
    [{ text: "Projects.", bold: true }, " Panel upgrades, EV charger installs, rewiring, a generator hookup, a renovation. These need a site visit and a written estimate, and the customer is usually comparing."],
  ] },
  { kind: "h3", text: "Let the customer sort it" },
  { kind: "p", text: "One question on your form or in your first text does most of the sorting: \"Is anything unsafe or not working right now?\" A yes goes to the urgent track. A no goes to the quote track. Add a request for a photo of the panel or the area, and you can often tell a small job from a project before anyone calls." },

  { kind: "h2", text: "Reply to urgent calls first" },
  { kind: "p", text: [
    "For an urgent call, follow-up is counted in minutes. The general case for replying fast is in ",
    { text: "speed to lead for installers", href: "/speed-to-lead/" },
    ". For electricians there is one extra job: safety. Your first reply should tell people what to do while they wait, as well as when you can come.",
  ] },
  { kind: "aside", text: "Hi Dana, it's Sam from Brightline Electric. If you smell burning or see smoke, leave the house and call 911. Otherwise, leave the tripped breaker off and don't keep resetting it. We can be there today between 2 and 4pm. Reply YES to book it." },
  { kind: "p", text: "Keep the safety line short and true. You are not diagnosing anything by text. You are making sure nobody keeps flipping a breaker that trips for a reason while they wait for you." },
  { kind: "h3", text: "Missed calls on the job" },
  { kind: "p", text: [
    "Most missed electrical leads are not ignored. They ring while you're in an attic or with your hands in a panel. An automatic text for every missed call, set up as in ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    ", means the caller hears from you within a minute and can say what they need. Then someone has to read the reply and act on it, so the text should promise a time you can keep, such as \"we'll call you back before 6pm\".",
  ] },

  { kind: "h2", text: "Estimates that need a visit" },
  { kind: "p", text: "Projects are where follow-up pays for itself, and where it most often stops after the first call. A clear path from quote request to visit removes most of the gaps." },
  { kind: "h3", text: "Book the visit in the first reply" },
  { kind: "p", text: "Offer two times in the first message rather than asking \"When suits you?\". Ask for a photo of the panel with the door open and a photo of where the charger, light or circuit should go. Ask whether whoever decides can be there. Every one of these answers saves a second trip or a second conversation." },
  { kind: "h3", text: "Confirm the day before" },
  { kind: "p", text: "A reminder the evening before, with your arrival window and a way to reschedule, cuts wasted trips. It also tells the customer you're organized, which matters when they let you into their basement." },
  { kind: "h3", text: "Agree the next date before you leave" },
  { kind: "p", text: "At the end of the visit, say when the estimate will arrive and when you'll go through it together. Write both dates into your CRM before you drive off. A follow-up the customer expects is a conversation. One they don't expect feels like a chase." },
  { kind: "aside", tone: "tip", text: "Put the promised estimate date in your CRM as a task while you're still on site. If the estimate isn't sent by then, the task tells you, not the customer." },

  { kind: "h2", text: "Following up on the estimate" },
  { kind: "p", text: [
    "Once the estimate is sent, follow up three or four times over two to three weeks, each time with a reason. The full sequence is in ",
    { text: "quote follow up for installers", href: "/quote-follow-up/" },
    ". For electrical estimates, these are the reasons that work:",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "The agreed walk-through.", bold: true }, " Call or text at the time you set. Go through the line items: the work, the materials, the permit and the inspection."],
    [{ text: "An answer to a question they will have.", bold: true }, " How long the power will be off, whether the walls will be opened, who books the inspection, what happens if the utility needs to be involved."],
    [{ text: "A direct question.", bold: true }, " After two or three weeks, ask whether they have decided, and accept the answer."],
  ] },
  { kind: "aside", text: "Hi Tom, it's Sam from Brightline Electric. A quick one on your panel upgrade estimate: the power is usually off for most of one day, and we book the inspection for you. Happy to go through anything else on Thursday as planned." },
  { kind: "h3", text: "When the answer is \"not yet\"" },
  { kind: "p", text: "Panel upgrades and chargers are often tied to something else: a car that hasn't arrived, a heat pump next spring, a kitchen remodel that slipped. Note the reason and the month in the customer's record, and set a reminder to get back in touch then. That is a useful message when it arrives, not a sales chase." },

  { kind: "h2", text: "EV charger and panel questions" },
  { kind: "p", text: "EV charger leads raise the same questions every time, and answering them well is most of the follow-up. Will my panel handle it? Do I need a permit? How long is the install? Is there a tax credit?" },
  { kind: "p", text: "The panel question is the one you can't answer by text. Say so, ask for the photo, and offer the visit. Guessing a panel's capacity from a description is how estimates turn into awkward phone calls later." },
  { kind: "h3", text: "Be careful with the tax credit" },
  { kind: "p", text: [
    "The tax credit question needs care, because the answer has changed. As of November 2026, the IRS page on the ",
    { text: "Alternative Fuel Vehicle Refueling Property Credit", href: "https://www.irs.gov/credits-deductions/alternative-fuel-vehicle-refueling-property-credit" },
    " describes the home credit for property placed in service from January 1, 2023 to June 30, 2026, and only in eligible low-income or non-urban census tracts. A charger installed now falls outside that window as the page describes it. Don't promise a credit in a follow-up message. Link the IRS page and suggest the customer checks with their tax adviser.",
  ] },
  { kind: "p", text: "Local utility rebates are a separate question and vary by area. If you know your utility's program, say so and link it. If you don't, say that too. Either answer is more useful than a vague \"there may be incentives\"." },
  { kind: "h3", text: "Write the answers once" },
  { kind: "p", text: "Keep a short set of saved replies for the questions that come up every week: permit, inspection, install time, panel photo, credit. Each one becomes a follow-up message in its own right, sent at the point the customer is likely to wonder about it." },

  { kind: "h2", text: "What to automate, and what not" },
  { kind: "p", text: [
    "Most of the follow-up above is the same every time, which is what makes it safe to automate. A ",
    { text: "CRM for electricians", href: "/crm-for-electricians/" },
    " can run it from the moment a quote request arrives until the customer replies.",
  ] },
  { kind: "list", items: [
    [{ text: "Automate:", bold: true }, " the first reply to forms, missed-call texts, visit confirmations and reminders, the estimate follow-up sequence, and the \"not yet\" reminder months later. Each should stop the moment the customer replies."],
    [{ text: "Keep human:", bold: true }, " anything about safety beyond the first standard line, diagnosing a fault, sizing a panel, explaining an estimate and handling doubts about price."],
  ] },
  { kind: "p", text: "Illustration: if you send 20 project estimates a month and each gets three follow-ups, that's 60 messages a month. Written by hand, most of them don't get sent. Written once and sent by the system, all of them do, and you still choose which conversations need a call." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. Rules on texting customers, permits and inspections differ by state and city, and the right setup depends on how many leads you get and who handles them." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How fast should an electrician reply to a lead?" },
  { kind: "p", text: "For urgent calls, within minutes, even if the first reply is automatic and only says when you'll call. For estimates, the same day. Speed matters most when the customer is contacting several companies at once." },
  { kind: "h3", text: "How many times should I follow up on an estimate?" },
  { kind: "p", text: "Three or four times over two to three weeks, each with a reason: the agreed walk-through, an answer to a common question, and a direct question about whether they have decided. Stop when they say no." },
  { kind: "h3", text: "Should follow-up be by text or by phone?" },
  { kind: "p", text: "Both. Text is easier to answer between jobs and leaves a record. A call is better for walking through an estimate or anything about safety. Ask the customer which they prefer and note it." },
  { kind: "h3", text: "Can I automate follow-up without sounding like a robot?" },
  { kind: "p", text: [
    "Yes, if each message is short, uses the customer's name and job, and stops when they reply. Write them the way you'd text a customer yourself. If you'd like this set up for your business, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const electricianLeadFollowUp: Post = {
  slug: "electrician-lead-follow-up",
  title: "Electrician Lead Follow Up: Calls, Estimates, Chargers",
  description: "How electricians can follow up on leads: minutes for urgent calls, a clear path from visit to signed estimate, and honest answers on EV chargers.",
  lede: "Urgent calls need minutes. Panel and charger estimates need a plan.",
  category: "Lead Generation",
  published: "2026-11-05",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/electrician-lead-follow-up.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
