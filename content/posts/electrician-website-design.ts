import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "electrician website design". Las cifras y fuentes citadas se comprobaron
 * en la fuente el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It is 8:40pm and half a kitchen has gone dark. The breaker trips every time it is reset, there is a faint smell near one outlet, and the homeowner is searching for an electrician on their phone with a torch in the other hand. Three sites look much the same. One says, on the first screen, which towns it covers, what to do if something smells like it is burning, and that a text will come back in a minute. That electrician gets the call." },
  { kind: "p", text: "Electrician website design is about that visitor, and about the slower one pricing a panel upgrade or a car charger over a few weeks. This article covers what both look for, the pages and forms to build, what to show about licensing, and what happens after the quote request arrives." },

  { kind: "h2", text: "Three kinds of electrical visitor" },
  { kind: "p", text: [
    "The basics of any trade site apply here: say what you do and where, one clear action per page, a phone number you can tap, real reviews. The article on ",
    { text: "contractor website design", href: "/contractor-website-design/" },
    " covers those. Electrical work adds a split between visitors that shapes every page.",
  ] },
  { kind: "h3", text: "Something is wrong now" },
  { kind: "p", text: "No power to part of the house, a breaker that will not stay on, flickering lights, a dead outlet with scorch marks. This visitor is worried, on a phone and often outside working hours. They want to know if you can come and how to reach you, and some of them need to know whether it is safe to wait." },
  { kind: "h3", text: "A planned project" },
  { kind: "p", text: "A panel upgrade, a charger in the garage, a rewire before a renovation, a generator connection, more circuits for a new kitchen. These buyers compare two or three electricians, read about what the job involves and come back more than once before they ask for a price." },
  { kind: "h3", text: "A business or a builder" },
  { kind: "p", text: "Property managers, shop owners and general contractors look for different things: commercial experience, how you handle access and scheduling, and whether you can invoice the way they need. If you do not want this work, leave it off. If you do, give it its own page so it does not crowd the homeowner pages." },
  { kind: "p", text: "The home page should give each a path in one tap: \"Power problem now?\", \"Get a project quote\" and, if it applies, \"Commercial work\". Each leads to its own page and its own short form." },

  { kind: "h2", text: "Licensing and trust, shown plainly" },
  { kind: "p", text: [
    "Homeowners know that electrical work is not a job for anyone with a van. The U.S. Bureau of Labor Statistics states that ",
    { text: "most states require electricians to be licensed", href: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm" },
    ", with the details set by each state or locality. A careful customer will look for that license on your site, and the easier it is to find, the sooner they stop looking at other electricians.",
  ] },
  { kind: "list", items: [
    [{ text: "License number in plain text", bold: true }, ", in the footer of every page and on the about page, with the name of the board that issued it so anyone can check it. An image of a certificate is hard to read on a phone and impossible to search."],
    [{ text: "Insurance", bold: true }, ", in one sentence: what you carry and that you will send proof on request."],
    [{ text: "Permits and inspections", bold: true }, ": say that you pull the permits a job needs and arrange the inspection. Many homeowners do not know this step exists until a buyer's inspector asks about it years later."],
    [{ text: "A local address and the people who turn up", bold: true }, ", with first names and real photos of the crew, the vans and finished work."],
    [{ text: "Reviews that name the job and the town", bold: true }, ", such as \"Panel upgrade, Westfield\" or \"Charger install, Oak Park\". Specific reviews read as real."],
  ] },
  { kind: "aside", tone: "tip", text: "Ask someone outside the business to find your license number on your site using only their phone, and time it. If it takes longer than a minute, move it into the footer of every page." },

  { kind: "h2", text: "Pages an electrician site needs" },
  { kind: "p", text: "An electrician's site can stay small. Each page should answer one question customers really ask and end with the next step that fits it." },
  { kind: "h3", text: "Emergency and repair" },
  { kind: "p", text: "Short and calm. Start with safety: if there is smoke, sparks or a burning smell, tell people to leave the area and call emergency services first, then you. Then the towns you cover, your hours for urgent calls and the call, text and photo options. If you cannot promise a response time, do not. \"We reply to every request the same evening and book urgent visits first\" is honest and still useful." },
  { kind: "h3", text: "Panel upgrades" },
  { kind: "p", text: "Often the start of a larger project, and a question many homeowners cannot answer on their own. Explain the signs that lead people to ask (breakers tripping, a new appliance, a charger, a home sale), what the job involves from survey to inspection, what moves the price and how long the power is off on the day." },
  { kind: "h3", text: "EV chargers" },
  { kind: "p", text: "A planned purchase, usually tied to a car that is already ordered. Say what you need to know to quote (where the panel is, where the car parks, the charger model if they have one), whether the panel may need work first, and what happens with the permit. Keep brand names to the chargers you actually install." },
  { kind: "h3", text: "Rewiring and renovations" },
  { kind: "p", text: "Older houses and kitchen or basement projects. Say how you work alongside other trades, how you protect the house, and how you handle walls that need opening and closing." },
  { kind: "h3", text: "Work, service area and commercial" },
  { kind: "p", text: "Photos from real jobs with the town and the work done, a plain list of the towns you cover (a map alone is hard to read on a phone), and a commercial page if you take that work." },

  { kind: "h2", text: "Quote forms that fit electrical jobs" },
  { kind: "p", text: [
    "One long contact form for every visitor is where many electrical sites lose work. The person standing in a dark kitchen will not fill in twelve fields, and the person planning a charger needs to tell you more than a name. The guide to the ",
    { text: "quote request form", href: "/quote-request-form/" },
    " goes field by field. For electricians, two short forms work better than one long one.",
  ] },
  { kind: "h3", text: "Power problem now" },
  { kind: "list", items: [
    "Name and mobile number.",
    "Address.",
    "What is happening, as a short list to tap: no power to part of the house, breaker keeps tripping, flickering lights, outlet or switch problem, other.",
    "Any smell, heat or scorch marks? Yes, no, not sure.",
    "An optional photo of the panel or the problem.",
  ] },
  { kind: "p", text: "Five fields, all answerable with a thumb. The safety question matters: a \"yes\" should show the emergency advice again on the thank-you page and move the request to the top of your list." },
  { kind: "h3", text: "Project quote request" },
  { kind: "list", items: [
    "Name, mobile number, email and address.",
    "Type of project: panel upgrade, EV charger, rewiring, new circuits, generator, other.",
    "A photo of the panel with the door open, if they can take one safely.",
    "Rough timing: as soon as possible, in the next few months, just planning.",
    "Best time to call.",
  ] },
  { kind: "p", text: "A clear photo of the panel tells you a lot before you visit: its age, the space left and whether a charger quote is likely to include a panel upgrade. Ask for it; do not make it required." },

  { kind: "h2", text: "Evenings, weekends and missed calls" },
  { kind: "p", text: [
    "Electrical problems do not wait for office hours, and neither does the work. The BLS notes on the same page that ",
    { text: "electricians' work schedules may include evenings and weekends", href: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm" },
    ". So the phone rings while you are in an attic or behind a panel, and the website has to keep the customer until you can call back.",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "An instant reply to every form.", bold: true }, " A text within a minute saying it arrived, who you are and when to expect a call. It does not diagnose anything. It stops the homeowner from trying three more electricians while they wait."],
    [{ text: "A text back for missed calls.", bold: true }, " When you cannot pick up, the caller gets a short message asking what is happening and for a photo. The article on ",
      { text: "missed call text back", href: "/missed-call-text-back/" },
      " covers how it works and where it can go wrong."],
    [{ text: "Honest hours on the site.", bold: true }, " If you take urgent calls until 9pm and not after, say so, and say what happens to a request sent at midnight."],
  ] },
  { kind: "aside", text: "\"Hi Sam, this is Brightline Electric. We got your request about the breaker. If you notice smoke, sparks or a burning smell, leave the room and call 911 first. Otherwise, an electrician will call you before 8am. Reply here with a photo of the panel if you can.\"" },

  { kind: "h2", text: "After the quote request arrives" },
  { kind: "p", text: "The website's job ends when the request lands. Whether you win the job depends on what happens next." },
  { kind: "list", items: [
    [{ text: "One list for every request:", bold: true }, " calls, texts and forms in the same place, with the address, the panel photo and where the customer came from. The article on ",
      { text: "CRM for electricians", href: "/crm-for-electricians/" },
      " covers what that list should hold, from service calls to charger quotes waiting on a permit."],
    [{ text: "Quote follow-up:", bold: true }, " a panel upgrade or a rewire is a decision that takes days or weeks. Two or three short messages after the quote, stopped as soon as the customer replies, keep you in the conversation."],
    [{ text: "A review request:", bold: true }, " sent the day the job passes inspection, while the customer is still pleased that the lights stay on."],
  ] },
  { kind: "p", text: "Illustration: an electrician who gets 40 quote requests a month, a quarter of them after 6pm, has 10 people a month waiting overnight for a first reply, and some of them will call someone else in the morning. Those numbers are invented for the example. Count your own for one month, and note the time each request arrived and the time you first replied." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every electrical business. A contractor that only does new-build and commercial work needs a different site from one that runs emergency repairs at night. Start from the jobs you want more of and the response times you can really keep." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Should an electrician's website show prices?" },
  { kind: "p", text: "Show what you can stand behind: a call-out fee if you charge one, and for projects such as chargers a typical range with what moves it up or down. A single price for every panel upgrade is a promise you will have to break." },
  { kind: "h3", text: "Do I need a separate page for EV chargers?" },
  { kind: "p", text: "If you install them and want more of that work, yes. Charger buyers search for that job by name, need different information from someone with a tripping breaker, and often need a panel check too, which is worth explaining on that page." },
  { kind: "h3", text: "How do I know if my current site works?" },
  { kind: "p", text: "Open it on your phone in the evening, fill in your own form with a photo and see what happens. Then call your number while you are on a job. If the answer to both is silence until the next morning, that is the first thing to fix." },
  { kind: "p", text: [
    "If you would rather have the site and the system that answers it built and tested together, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const electricianWebsiteDesign: Post = {
  slug: "electrician-website-design",
  title: "Electrician Website Design: Pages, Forms, Trust",
  description: "Electrician website design for owners: what customers check before calling, the pages and quote forms to build, licensing, and after-hours replies.",
  lede: "A tripped breaker at 9pm sends a homeowner to three sites. Be the one that replies.",
  category: "Website Design",
  published: "2026-10-22",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/electrician-website-design.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
