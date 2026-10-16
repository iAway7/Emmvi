import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "hvac website design". Las cifras y fuentes citadas se comprobaron en la
 * fuente el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It is 7am in January and the furnace has stopped. The homeowner is standing in a cold kitchen with a phone in one hand, searching for heating repair near them. Three months later, a different homeowner is sitting on the sofa on a Sunday evening, reading about heat pumps because the old AC barely survived the summer. Both of them land on the same HVAC website. One wants a person on the phone in the next ten minutes. The other wants to compare three written quotes over the next three weeks." },
  { kind: "p", text: "HVAC website design has to serve both, and most HVAC sites serve neither particularly well. This article covers how to split the site for urgent and planned work, what a cautious homeowner checks before calling, which pages you need, what the forms should ask, and what has to happen when nobody can pick up the phone." },

  { kind: "h2", text: "Two visitors, two different sites" },
  { kind: "p", text: "Most home-service businesses get one kind of visitor. HVAC gets two, and they want opposite things from the page." },
  { kind: "h3", text: "The urgent visitor" },
  { kind: "p", text: "No heat, no cooling, a strange noise, water under the unit. This person does not read. They look for three things: do you cover my area, can someone come today, and how do I reach you right now. The page they need is short, with a tappable phone number at the top, a line on same-day availability that you can actually keep, and a fallback for when the line is busy." },
  { kind: "h3", text: "The planned buyer" },
  { kind: "p", text: "Replacing a system, adding a heat pump, getting a quote for a new build. This person reads everything, compares several companies and is in no hurry. They want proof you know what you are doing, a clear idea of how the quote works, and a form they can fill in at 10pm without being called five minutes later." },
  { kind: "p", text: [
    "The general rules for any installer site still apply (say what you do and where, one clear action per page, a phone number you can tap), and the article on ",
    { text: "contractor website design", href: "/contractor-website-design/" },
    " covers them. What changes for HVAC is that the home page has to send each of these two people to the right place in one tap: \"Need a repair today?\" and \"Planning a replacement?\" as two separate, obvious paths.",
  ] },

  { kind: "h2", text: "What homeowners check before calling" },
  { kind: "p", text: [
    "ENERGY STAR publishes ",
    { text: "10 Tips for Hiring a Heating and Cooling Contractor", href: "https://www.energystar.gov/saveathome/heating-cooling/10-tips-hiring" },
    ". Among them: find out the license and insurance requirements for contractors in your state, ask contractors for customer references and call them, expect the contractor to spend real time inspecting your current system and home, get written and itemized estimates, and sign a written proposal before work starts.",
  ] },
  { kind: "p", text: "That list is a brief for your website, because a careful buyer is going to work through it. The site should answer each point before the visitor has to ask." },
  { kind: "list", items: [
    [{ text: "License and insurance:", bold: true }, " the license numbers you hold and the fact that you are insured, in the footer and on the about page."],
    [{ text: "Technician certification:", bold: true }, " the EPA says technicians who maintain, service, repair or dispose of equipment that could release ozone-depleting refrigerants must be certified under ", { text: "Section 608", href: "https://www.epa.gov/section608/section-608-technician-certification-0" }, ". If your technicians are certified, a plain line saying so answers a question some buyers will have."],
    [{ text: "References and reviews:", bold: true }, " real customers with first names and towns, and a link to where the reviews were left."],
    [{ text: "How you quote:", bold: true }, " that you visit, look at the existing system and the house, size the equipment to the home, and send a written, itemized quote. Only write it if that is how you work."],
  ] },
  { kind: "aside", tone: "tip", text: "Put a short \"How our quotes work\" section on every replacement page: visit, measurements, written itemized quote, no pressure to decide on the day. It answers the buyer's checklist in four lines and it filters out people looking for a price over the phone." },

  { kind: "h2", text: "Pages an HVAC website needs" },
  { kind: "p", text: "An HVAC site can stay small. Each page should answer one question a real customer asks." },
  { kind: "h3", text: "Home page" },
  { kind: "p", text: "One sentence on what you do and where (\"Heating and air conditioning repair, replacement and maintenance across north Dallas\"), the two paths for urgent and planned work, real reviews, your licenses, and the phone number at the top." },
  { kind: "h3", text: "Repair page" },
  { kind: "p", text: "Short. Areas covered, hours, what a call-out involves, whether you charge a diagnostic fee and how much, and the phone number again. Add a few lines on what the homeowner can safely check first (the thermostat, the breaker, the filter). It earns trust and saves your technicians wasted trips." },
  { kind: "h3", text: "One page per system" },
  { kind: "p", text: "Furnaces, central AC, heat pumps, ductless mini-splits and boilers are separate decisions. A page each lets you explain what the job involves, how long it takes, what moves the price and what the homeowner should have ready, such as the model of the current system and any rooms that never feel comfortable." },
  { kind: "h3", text: "Maintenance plans" },
  { kind: "p", text: "If you sell service agreements, give them their own page: what a visit includes, how often, what it costs and how to cancel. This is the page that turns a one-off repair into a customer you see twice a year." },
  { kind: "h3", text: "Reviews and projects" },
  { kind: "p", text: [
    "One line per job (\"Heat pump replacing an oil boiler, Plano, two days\") is worth more than a gallery of stock photos. Reviews come from asking at the right moment, every time. The article on ",
    { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" },
    " sets out a routine that does not depend on someone remembering.",
  ] },

  { kind: "h2", text: "Forms for repairs and replacements" },
  { kind: "p", text: "One generic contact form for both kinds of visitor is where most HVAC sites lose work. The urgent visitor does not want to describe their system in a text box, and the planned buyer is put off by a form that looks like a dispatch request." },
  { kind: "h3", text: "Repair request" },
  { kind: "list", items: [
    "Name and mobile number.",
    "Address or ZIP code.",
    "What is wrong: no heat, no cooling, noise, leak, other.",
    "Is anyone vulnerable at home (very young, elderly, unwell)? Optional, but it helps you prioritize honestly.",
  ] },
  { kind: "h3", text: "Replacement quote request" },
  { kind: "list", items: [
    "Name, mobile number and email.",
    "Address or ZIP code.",
    "What they are thinking about: furnace, AC, heat pump, mini-split, not sure.",
    "Age of the current system, as a range.",
    "When they would like it done: as soon as possible, in the next few months, just researching.",
  ] },
  { kind: "p", text: "Everything else (photos of the unit, the model plate, the electricity bill) can come later, by text, once a person has replied. Under each submit button, say exactly what happens next and when, and only promise what the system behind the form will deliver at any hour." },

  { kind: "h2", text: "When the phone is not answered" },
  { kind: "p", text: "Here is the uncomfortable part of HVAC website design. The site can be perfect and still lose the job, because the most valuable visitors call instead of filling in a form, and the people who answer the phone are on a roof, in an attic or under a house." },
  { kind: "p", text: "A missed call on a cold morning is not a lost lead for long. It is a lead that calls the next company on the list. The fix is not a better website, it is what the business does in the minute after the call goes unanswered." },
  { kind: "p", text: [
    "A missed-call text back sends the caller a message straight away, so they know they were heard and have a way to reply without calling again. The article on ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    " covers how it works and its limits. A first text can be as simple as this:",
  ] },
  { kind: "aside", text: "\"Hi, this is North Ridge Heating & Air. Sorry we missed your call, the team is on a job. Is this about a repair today or a quote? Reply here and we'll call you back within the hour.\"" },
  { kind: "p", text: "Two rules make it work. The promise in the text has to be kept (if \"within the hour\" is not realistic on a Saturday, say what is). And the reply has to land somewhere a person will see it, not in a separate inbox nobody checks." },

  { kind: "h2", text: "What happens after the request" },
  { kind: "p", text: "Whether the request arrives by form or by text, the same three things should happen without anyone having to remember them:" },
  { kind: "list", ordered: true, items: [
    [{ text: "The customer gets a reply straight away,", bold: true }, " confirming the request and saying when a person will be in touch."],
    [{ text: "Whoever is on duty is alerted,", bold: true }, " with the name, the address and whether it is a repair or a quote, so urgent jobs are not buried under research requests."],
    [{ text: "The request is logged in a CRM,", bold: true }, " with its source, so the visit, the written quote and the follow-up are tracked and nothing waits in someone's phone."],
  ] },
  { kind: "p", text: [
    "Replacement quotes are where the follow-up matters most. ENERGY STAR tells buyers to compare written bids, so your quote is sitting next to two others. A short, polite check-in a few days later is often what decides it. The article on ",
    { text: "HVAC CRM", href: "/hvac-crm/" },
    " covers the pipeline stages for repairs, replacements and maintenance plans.",
  ] },
  { kind: "p", text: "Illustration: if a site gets 40 requests a month and a quarter of them arrive when nobody can answer, that is 10 people a month deciding whether to wait for you or call someone else. The number is invented; count your own from the call log and the form inbox." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. A commercial HVAC contractor working on tenders, or a company that gets most of its work from builders and property managers, needs a different site from a residential company that gets calls from search. Start from where your work actually comes from." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Should an HVAC website show prices?" },
  { kind: "p", text: "Show what you can stand behind: your diagnostic or call-out fee, and maintenance plan prices. Replacement prices depend on the house and the system, so a range with what moves it up or down is more honest than a single number." },
  { kind: "h3", text: "Do I need online booking?" },
  { kind: "p", text: "For maintenance visits and non-urgent repairs it can help, as long as the slots shown are real. For replacements, a quote request followed by a call usually works better, because the visit needs some preparation on both sides." },
  { kind: "h3", text: "Is a separate emergency page worth it?" },
  { kind: "p", text: "Yes, if you really offer same-day or out-of-hours repairs. Keep it short and only promise the hours you cover. If you do not offer emergency work, say so plainly so nobody wastes a call." },
  { kind: "h3", text: "How do I know if my current site works?" },
  { kind: "p", text: "Count the requests it sends each month, check how long each one waited for a first reply, and call your own number from another phone while the team is out. Then fill in your own form at night and see what happens." },
  { kind: "p", text: [
    "If you would rather have the site and the system that answers it built and tested together, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const hvacWebsiteDesign: Post = {
  slug: "hvac-website-design",
  title: "HVAC Website Design: Repairs, Quotes and Calls",
  description: "HVAC website design for contractors: separate paths for repairs and replacements, what buyers check, the pages and forms you need, and missed calls.",
  lede: "One visitor needs heat today, the other is comparing quotes. Serve both.",
  category: "Website Design",
  published: "2026-10-16",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/hvac-website-design.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
