import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (septiembre de 2026). Palabra clave:
 * "crm for plumbers". La pagina de Fix a Leak Week de la EPA y la de CRM para
 * fontaneros de Jobber citadas se comprobaron en la fuente el dia de
 * publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's 7:42 on a Monday morning and you're under a kitchen sink with both hands busy. The phone rings: a burst pipe on Oak Avenue. By the time you've dried your hands, it's stopped. There's also a quote request from the website for a new water heater, a landlord asking when you can look at a running toilet in one of their flats, and a customer from last week wondering where their invoice is." },
  { kind: "p", text: "None of that is unusual. Plumbing is a phone business with a lot of small jobs, a few big ones and emergencies at any hour. This article covers what a CRM for plumbers should actually do, how to set up the pipelines, what to automate first and how to choose one without paying for features you won't use." },

  { kind: "h2", text: "What a plumbing CRM is for" },
  { kind: "p", text: "A CRM (customer relationship management system) is one record for every customer and every call, form or text, with what has happened and what should happen next. For a plumber, the record should also hold the address and what you found there: the age of the water heater, the shut-off valve behind the washing machine, the drain that keeps backing up." },
  { kind: "p", text: "The software is not the point. The point is answering four questions at any moment, without scrolling through your phone:" },
  { kind: "list", items: [
    [{ text: "Who called and hasn't heard back?", bold: true }, " Every missed call, voicemail, form and text still waiting for a person."],
    [{ text: "Which quotes are still open?", bold: true }, " The water heater, the repipe, the bathroom refit. Priced, sent, and not yet a yes or a no."],
    [{ text: "What's booked, and is the customer expecting us?", bold: true }, " Confirmed times, not a vague \"sometime Thursday\"."],
    [{ text: "Where did the paid work come from?", bold: true }, " Which ads, directories, referrals and landlords turned into invoices, not just calls."],
  ] },
  { kind: "p", text: "If a system can't answer those four, it's a contact list with a monthly fee." },

  { kind: "h2", text: "Why plumbing work slips through" },
  { kind: "h3", text: "The phone rings when your hands are full" },
  { kind: "p", text: "Most plumbing work starts with a call, and most calls arrive while you're on another job. A missed call leaves no name, no address and no description of the problem, just a number. If nobody calls back in the next few minutes, a customer with water on the floor rings the next plumber on the list. That's why a missed call needs to become a record with a reply, not a red number on your screen." },
  { kind: "h3", text: "Small jobs hide the big ones" },
  { kind: "p", text: [
    "Leak calls are common. The EPA's ",
    { text: "Fix a Leak Week page", href: "https://www.epa.gov/watersense/fix-leak-week" },
    " says \"nine percent of homes have leaks that waste 50 gallons or more per day\", and lists worn toilet flappers, dripping faucets and leaking valves among the usual causes. Those jobs are quick and they fill the day. The problem is that a quote for a new water heater or a full repipe gets buried among them. It's the bigger job, it takes the customer longer to decide, and nobody remembers to ask again.",
  ] },
  { kind: "h3", text: "One customer, several addresses" },
  { kind: "p", text: "A landlord or property manager may send you work at ten different properties. A homeowner may call about their own house and then their mother's. If your records are organized only by name, you lose track of what you did where, and the next visit starts from zero." },

  { kind: "h2", text: "How to set up the pipelines" },
  { kind: "p", text: "A pipeline is the list of stages a job moves through. Keep each one close to how the work really happens. Too few stages and you can't see where things stall, too many and nobody updates them. Most plumbing businesses need two." },
  { kind: "h3", text: "Service calls and repairs" },
  { kind: "list", ordered: true, items: [
    [{ text: "New request:", bold: true }, " a call, missed call, form or text has arrived. The clock is running."],
    [{ text: "Booked:", bold: true }, " a time slot is confirmed with the customer, and the address and problem are on the record."],
    [{ text: "Done:", bold: true }, " the work is finished and invoiced. Notes on what you found go on the address."],
  ] },
  { kind: "h3", text: "Quoted work" },
  { kind: "list", ordered: true, items: [
    [{ text: "Quote request:", bold: true }, " a customer wants a price on a water heater, a repipe, a bathroom or a sewer line, or you spotted the need on a repair visit."],
    [{ text: "Site visit booked:", bold: true }, " someone is going to look before pricing it."],
    [{ text: "Quote sent:", bold: true }, " the price is with the customer. This is the stage where most jobs go quiet."],
    [{ text: "Accepted:", bold: true }, " a date to agree and, if you take one, a deposit."],
    [{ text: "Completed:", bold: true }, " the trigger for the thank you and the review request."],
  ] },
  { kind: "p", text: "Add a \"Lost\" outcome with a short reason: price, timing, went elsewhere, no reply. After a few months, those reasons say more about your quotes than any report." },
  { kind: "aside", tone: "tip", text: "Store the job against the address, not only the person. When a landlord calls about \"the flat on Elm Street\", you want the last visit, the water heater's age and the access notes for that property on one screen." },
  { kind: "h3", text: "Record the source from the first call" },
  { kind: "p", text: "Every new request should carry where it came from: a particular ad, a directory, a referral, a landlord, a returning customer. A separate tracking number per ad and a hidden field on your website form fill this in without anyone typing it. Where that isn't possible, make it a required field." },

  { kind: "h2", text: "What it should do without you" },
  { kind: "p", text: "A CRM that only stores information depends on someone opening it, and on a busy day nobody does. The useful part is what happens on its own when a job enters or leaves a stage." },
  { kind: "list", items: [
    [{ text: "Missed call:", bold: true }, " a text within a minute saying you're on a job, asking for the address and the problem, and when you'll call back. The details are in ", { text: "how missed call text back works for installers", href: "/missed-call-text-back/" }, "."],
    [{ text: "New form or text:", bold: true }, " the same instant reply, so the customer knows a person has it."],
    [{ text: "Booked:", bold: true }, " a confirmation straight away and a reminder the day before, so you don't arrive at a locked house."],
    [{ text: "Quote sent:", bold: true }, " a short follow-up sequence that stops as soon as the customer replies. Timing and wording are in ", { text: "our guide to quote follow up", href: "/quote-follow-up/" }, "."],
    [{ text: "Completed:", bold: true }, " a thank you and a review request a day later. See ", { text: "how to get more Google reviews as an installer", href: "/how-to-get-more-google-reviews/" }, " for what to say and what Google doesn't allow."],
  ] },
  { kind: "p", text: "Illustration: if you send eight quotes a week and each deserves three follow-ups, that's 24 messages a week to remember by hand, on top of the jobs themselves. Those are the messages that stop getting sent in the busy weeks, which are exactly the weeks with the most quotes open." },
  { kind: "h3", text: "What still needs a person" },
  { kind: "p", text: "Automation sends messages on time. It doesn't decide that the burst pipe goes before the dripping tap, and it doesn't explain to a customer why a tankless heater costs more than a tank. Someone still has to read the replies the same day and move jobs to the right stage. If the stages are wrong, every automatic message will be wrong too." },

  { kind: "h2", text: "Field software or a general CRM" },
  { kind: "p", text: "There are two broad routes, and neither is right for everyone." },
  { kind: "h3", text: "Field service software" },
  { kind: "p", text: [
    "Tools built for trades combine the customer record with scheduling, dispatch and invoicing. Jobber, for example, says its plumbing CRM keeps \"recurring maintenance agreements, client information, past service details, notes, and attachments\" in one place, according to ",
    { text: "its plumber CRM page", href: "https://www.getjobber.com/industries/plumber-crm/" },
    " (as of September 2026). The advantage is that the job, the schedule and the invoice live together. The part to check carefully is the sales side: how fast a missed call or a new form gets an answer, and how well an open quote is chased.",
  ] },
  { kind: "h3", text: "A general CRM set up for plumbing" },
  { kind: "p", text: "A general CRM with strong automation can be shaped to the pipelines above and connected to your phone number, website forms and calendar. The advantage is flexibility and better messaging. The limit is that someone has to set it up properly, and invoicing may stay in another tool, which means the two need to talk to each other." },
  { kind: "h3", text: "Questions to ask before choosing" },
  { kind: "list", items: [
    "Can a missed call, a website form and a text all create a record automatically?",
    "Can a stage change send a text and an email without anyone pressing a button?",
    "Can one customer have several addresses, each with its own job history?",
    "Can I see which lead source produced paid jobs, not just calls?",
    "Does it work properly on a phone, with wet hands, in a crawl space?",
    "If I leave, can I export my customers, addresses and history?",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. If you work alone and your current tool already books and invoices well, check what its messaging and follow-up settings can do before adding a second system. Two tools that nobody keeps in step are worse than one used properly." },

  { kind: "h2", text: "Set it up without stopping work" },
  { kind: "p", text: "Most CRM projects fail on setup, not on the software. You don't need a quiet month, but you do need to do it in order." },
  { kind: "list", items: [
    [{ text: "Write the stages on paper first.", bold: true }, " Agree them with whoever answers the phone before touching any settings."],
    [{ text: "Import what's live.", bold: true }, " Open requests, open quotes and your regular customers with their addresses. Old contacts with no history can wait."],
    [{ text: "Turn on the missed call reply first.", bold: true }, " It's the step where speed matters most and the hardest one to do by hand from under a sink."],
    [{ text: "Add quote follow-up next,", bold: true }, " then booking reminders, then review requests. One at a time, checked for a week each."],
    [{ text: "Look at the board every week.", bold: true }, " Ten minutes on quotes and requests that haven't moved catches most problems before the customer does."],
  ] },
  { kind: "p", text: [
    "If you also do heating work, the maintenance side is covered in ",
    { text: "what an HVAC business needs from a CRM", href: "/hvac-crm/" },
    ". The pipelines are the same idea with a service calendar on top.",
  ] },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Do plumbers really need a CRM?" },
  { kind: "p", text: "Not if every call is answered, every quote is chased and every customer's history is in your head. Once any of those stops being true, a CRM is the cheapest way to make it true again. It doesn't create work, it stops you losing the work that already called you." },
  { kind: "h3", text: "Is a plumbing CRM the same as field service software?" },
  { kind: "p", text: "Not quite. Field service software is built around scheduling, dispatch and invoicing. A CRM is built around requests, quotes and follow-up. Some tools do both well, many do one better than the other, so test the part you struggle with most." },
  { kind: "h3", text: "What should I automate first?" },
  { kind: "p", text: "The reply to missed calls and new requests. It's where speed matters most for emergency work, and it's the one thing you can't do by hand while you're on a job." },
  { kind: "h3", text: "How long does setup take?" },
  { kind: "p", text: "The first useful version, with one pipeline and an instant reply, can run within days. Getting every stage, message and source right usually takes a few weeks of real use and small corrections." },
  { kind: "p", text: [
    "If you'd rather have this set up for you, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const crmForPlumbers: Post = {
  slug: "crm-for-plumbers",
  title: "CRM for Plumbers: Calls, Quotes and Repeat Work",
  description: "What a CRM for plumbers should track, from the missed call on a job to the water heater quote nobody chased, what to automate first and how to choose one.",
  lede: "Missed calls, open quotes and repeat addresses, all in one place you actually check.",
  category: "CRM",
  published: "2026-09-28",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/crm-for-plumbers.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
