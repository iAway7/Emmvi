import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "roofing website design". Las cifras y fuentes citadas se comprobaron en la
 * fuente el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "A hailstorm moves through town on a Tuesday afternoon. By evening there is a brown stain spreading across a bedroom ceiling, and the homeowner is on the phone searching for a roofer near them. They open four sites. Two look the same, one has a form with eleven fields, and one tells them, in the first screen, that it covers their town, how to send a photo and when someone will call back. That roofer gets the inspection." },
  { kind: "p", text: "Roofing website design is mostly about that evening, and about the quieter visitor who is pricing a full replacement over a few weeks. This article covers what both check, the pages and forms to build, storm days, and what happens after the quote request arrives." },

  { kind: "h2", text: "Two visitors, one roofing site" },
  { kind: "p", text: [
    "Most of what makes any trade site work applies to roofing: say what you do and where, one clear action per page, a phone number you can tap, real reviews. The article on ",
    { text: "contractor website design", href: "/contractor-website-design/" },
    " covers those basics. Roofing adds a split that shapes every page.",
  ] },
  { kind: "h3", text: "The leak" },
  { kind: "p", text: "Something is wrong right now: a drip, missing shingles, a tree limb on the roof. This visitor is stressed, on a phone, often after work hours, and wants to know two things: can you come, and how do I reach you." },
  { kind: "h3", text: "The replacement" },
  { kind: "p", text: "An old roof, a house being sold, a homeowner who has been told the shingles are at the end of their life. This is a large purchase made slowly. They compare two or three roofers, read about materials and warranties, and come back to your site more than once before they ask for a quote." },
  { kind: "p", text: "The home page has to give each of them a path in one tap: \"Leak or storm damage?\" for the first, \"Get a replacement quote\" for the second. Each button leads to a different page with a different form." },

  { kind: "h2", text: "What homeowners check first" },
  { kind: "p", text: [
    "Roofing has a trust problem that the homeowner already knows about. After storms, the FTC warns people about contractors who show up with offers, and tells them to ",
    { text: "confirm a contractor's license and insurance and get a written contract", href: "https://consumer.ftc.gov/articles/how-avoid-scams-after-weather-emergencies-and-natural-disasters" },
    ". The same FTC page says that contract should include the contractor's name, address, phone number and license number, and warns against paying cash up front. A careful homeowner is going to look for all of that. Your site can make the check easy or make it slow.",
  ] },
  { kind: "list", items: [
    [{ text: "A local address and phone number", bold: true }, " in the header or footer of every page, not only a contact form. Someone who has heard about storm chasers wants to see that you will still be in town next year."],
    [{ text: "License and insurance details", bold: true }, " in plain text, where your state or city issues a license. If yours does not, say what insurance you carry and how to check it."],
    [{ text: "How you take payment", bold: true }, ", in one sentence. If you never ask for full payment before the work is done, say so. It answers the question the FTC has told them to ask."],
    [{ text: "The people who turn up", bold: true }, ", with first names and real photos of the crew and the trucks."],
    [{ text: "Reviews with towns and job types", bold: true }, ", such as \"Leak repair, Maple Grove\" or \"Full tear-off, Plymouth\". They read as real because they are specific."],
  ] },
  { kind: "aside", tone: "tip", text: "Ask someone outside the business to open your site on a phone and find your license number, your address and your payment terms. Time it. If it takes more than a minute, a cautious homeowner will give up and call the next roofer." },

  { kind: "h2", text: "Pages a roofing website needs" },
  { kind: "p", text: "A roofing site can stay small. Each page should answer one question a real customer asks, and end with the next step that fits that page." },
  { kind: "h3", text: "Leak and storm repair" },
  { kind: "p", text: "Short. The areas you cover, how fast you can usually get out, whether you do temporary tarping, and the call, text and photo options again. If you cannot promise a time, do not. \"We reply to every request the same day and book inspections in order\" is honest and still useful." },
  { kind: "h3", text: "Roof replacement" },
  { kind: "p", text: "This is where the planned buyer spends time. Explain what a replacement involves, from inspection to tear-off to cleanup, what moves the price (size, pitch, layers to remove, decking repairs, material), how long a typical job takes, and what the warranty covers. A simple timeline with five steps does more than a paragraph of adjectives." },
  { kind: "h3", text: "Materials" },
  { kind: "p", text: "One page per material you actually install: asphalt shingles, metal, tile, flat roofing. Say who each suits and how it compares on cost, in plain words. Leave out materials you rarely fit." },
  { kind: "h3", text: "Insurance claims" },
  { kind: "p", text: "Many storm jobs involve the homeowner's insurer, and people want to know how that works with you. Explain what you do (inspect, document damage with photos, give the homeowner a written estimate) and what is between them and their insurer. Rules on what a contractor may say or do around a claim differ from state to state, so check yours before writing this page, and keep it factual." },
  { kind: "h3", text: "Projects and service area" },
  { kind: "p", text: "Before and after photos from real jobs, each with the town and the work done, and a plain list of the towns you cover. A map alone is hard to read on a phone." },

  { kind: "h2", text: "A quote form that fits roofing" },
  { kind: "p", text: [
    "One generic contact form for every visitor is where many roofing sites lose work. The person with a leak will not fill in eleven fields, and the person pricing a replacement needs to tell you more than a name. The guide to the ",
    { text: "quote request form", href: "/quote-request-form/" },
    " goes into field-by-field detail. For roofing, two short forms work better than one long one.",
  ] },
  { kind: "h3", text: "Leak or storm damage" },
  { kind: "list", items: [
    "Name and mobile number.",
    "Address, so you can see the roof on a map before calling.",
    "What is happening, as a short list to tap: active leak, missing shingles, hail or wind damage, something fell on the roof, other.",
    "Is water coming inside? Yes, no, not sure.",
    "An optional photo, from inside or from the ground.",
  ] },
  { kind: "p", text: "Five fields, all answerable with a thumb. Ask homeowners not to climb up to take the photo. A picture of the ceiling stain or the shingles on the lawn is enough to decide who goes out first." },
  { kind: "h3", text: "Replacement quote request" },
  { kind: "list", items: [
    "Name, mobile number, email and address.",
    "Roof type now, if they know it.",
    "Rough timing: as soon as possible, in the next few months, just planning.",
    "Is there an insurance claim involved? Yes, no, not yet.",
    "Best time to call.",
  ] },
  { kind: "p", text: "The timing question matters more than it looks. \"Just planning\" tells you this person wants information and a follow-up over weeks. \"As soon as possible\" tells you to call today." },

  { kind: "h2", text: "When a storm hits" },
  { kind: "p", text: [
    "Roofing demand is uneven. The U.S. Bureau of Labor Statistics notes that ",
    { text: "roofers usually do not work during inclement weather and may work overtime in the busy summer months", href: "https://www.bls.gov/ooh/construction-and-extraction/roofers.htm" },
    ". Storms add to that: requests arrive in a rush, at the same time your crews are busiest. That is the day a website either holds on to people or loses them.",
  ] },
  { kind: "p", text: "Three things help, and none of them depends on design." },
  { kind: "list", ordered: true, items: [
    [{ text: "An instant reply to every request.", bold: true }, " Every form gets a text within a minute saying it arrived, who you are and when to expect a call. The reply does not inspect the roof. It stops the homeowner from filling in three more forms while they wait."],
    [{ text: "A text back for missed calls.", bold: true }, " On a storm day most calls go unanswered. A missed-call text back sends the caller a short message asking what happened and for a photo. The article on ",
      { text: "missed call text back", href: "/missed-call-text-back/" },
      " covers how it works and where it can go wrong."],
    [{ text: "An honest banner.", bold: true }, " A line at the top of the site, changed in a minute: \"Storm damage requests are being booked in order. Send a photo and we'll reply today.\" It sets expectations without promising a time you cannot keep."],
  ] },
  { kind: "aside", text: "\"Hi Dana, this is Northline Roofing. We got your request and your photo. We're booking inspections in order after today's storm, and a roofer will call you by 8am tomorrow. If water is coming in now, reply here and we'll tell you what to do tonight.\"" },

  { kind: "h2", text: "After the quote request comes in" },
  { kind: "p", text: "The website's job ends when the request arrives. Whether you win the roof depends on what happens next." },
  { kind: "list", items: [
    [{ text: "One list for every request:", bold: true }, " calls, texts and forms in the same place, with the address, the photos and where the customer came from. The article on ",
      { text: "roofing CRM", href: "/roofing-crm/" },
      " goes into what that list should hold and how storm weeks change it."],
    [{ text: "Quote follow-up:", bold: true }, " a replacement quote is a decision that takes weeks. Two or three short messages after the quote goes out, stopped as soon as the homeowner replies, keep you in the conversation. See ",
      { text: "quote follow-up", href: "/quote-follow-up/" },
      " for timing and wording."],
    [{ text: "A review request:", bold: true }, " sent the day the job is finished and the yard is clean, while the homeowner is still pleased."],
  ] },
  { kind: "p", text: "Illustration: a roofer who gets 30 quote requests in a normal month and 90 in the week after a hailstorm has 60 extra people waiting that week, most of them talking to other roofers too. Those numbers are invented for the example. Count your own after the next storm, and note how long each request waited for a first reply." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every roofing business. A company that only does planned replacements needs a different site from one that runs storm repairs across three counties. Start from the jobs you want more of and the response times you can really keep." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Should a roofing website show prices?" },
  { kind: "p", text: "Show what you can stand behind: an inspection fee if you charge one, and for replacements a typical range with what moves it up or down. A single number for every roof is a promise you will have to break." },
  { kind: "h3", text: "Do I need an instant roof quote tool?" },
  { kind: "p", text: "Tools that estimate a roof from satellite images can be a useful first step for replacement buyers, as long as the page says clearly that the figure is an estimate and the real price comes after an inspection. For leaks they add nothing: that visitor needs a call." },
  { kind: "h3", text: "How do I know if my current site works?" },
  { kind: "p", text: "Open it on your phone at night, fill in your own form with a photo and see what happens. Then call your number while the crews are on a roof. If the answer to both is silence until the next morning, that is the first thing to fix." },
  { kind: "p", text: [
    "If you would rather have the site and the system that answers it built and tested together, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const roofingWebsiteDesign: Post = {
  slug: "roofing-website-design",
  title: "Roofing Website Design: Built for Leaks and Storms",
  description: "Roofing website design for owners: what homeowners check before calling, the pages and forms to build, storm days, and what happens after the request.",
  lede: "A homeowner with a ceiling stain checks three roofers. Be the one that answers.",
  category: "Website Design",
  published: "2026-10-21",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/roofing-website-design.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
