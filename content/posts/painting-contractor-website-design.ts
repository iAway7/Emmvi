import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "painting contractor website design". Las cifras y fuentes citadas se
 * comprobaron en la fuente el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It is Sunday evening and a homeowner is standing on the porch looking at paint lifting off the railings. The living room needs doing too, and the house goes on the market in spring. They search for painters on their phone, open three sites and look at the photos first. One site shows porches like theirs, says which towns it covers, and asks for two photos in a short form. That painter gets the quote request." },
  { kind: "p", text: "Painting contractor website design is about that visitor: someone who cannot judge a painter by the paint alone and judges by the photos, the reviews and how quickly they hear back. This article covers what homeowners look for, the pages and forms worth building, and what has to happen after the request arrives." },

  { kind: "h2", text: "What painting customers check first" },
  { kind: "p", text: [
    "The basics of any trade site apply here: say what you paint and where, one clear action per page, a phone number you can tap, real reviews. The article on ",
    { text: "contractor website design", href: "/contractor-website-design/" },
    " covers those. Painting adds a few things a homeowner checks before anything else.",
  ] },
  { kind: "h3", text: "Work that looks like their house" },
  { kind: "p", text: "Most people cannot tell a good painter from a cheap one by reading. They can tell by looking. A visitor with a two-story clapboard exterior wants to see clapboard exteriors. A visitor with dark kitchen cabinets wants to see cabinets. Generic photos of a roller on a wall tell them nothing." },
  { kind: "h3", text: "How you treat a house that people live in" },
  { kind: "p", text: "Interior work means strangers in the home for days. Homeowners want to know who turns up, how furniture and floors are protected, whether the crew cleans up at the end of each day and how long rooms will be out of use. A short, plain section on this answers questions that otherwise turn into a phone call, or into choosing someone else." },
  { kind: "h3", text: "Lead-safe work on older homes" },
  { kind: "p", text: [
    "In the United States, the EPA's Renovation, Repair and Painting rule says that anyone paid to disturb paint in homes built before 1978 must be certified in lead-safe work practices, and the EPA ",
    { text: "recommends that homeowners hire a lead-safe certified contractor", href: "https://www.epa.gov/lead/renovation-repair-and-painting-program" },
    " for those projects. Owners of older houses do look for this. If your firm is certified, say so in plain text on the exterior and older-homes pages, with the certification number, not only as a badge image.",
  ] },

  { kind: "h2", text: "Show the work, room by room" },
  { kind: "p", text: "For a painting business, the gallery is not decoration. It is the main argument, and how it is organized decides whether a visitor finds a job like theirs or gives up after twenty random photos." },
  { kind: "list", items: [
    [{ text: "Group by job type:", bold: true }, " exteriors, interiors, kitchen cabinets, decks and fences, commercial if you do it. A homeowner should reach their kind of job in one tap."],
    [{ text: "Before and after pairs", bold: true }, " for prep-heavy work: peeling trim, water-stained ceilings, dated cabinets. The before photo shows you can handle the surface they are worried about."],
    [{ text: "A caption with the town and the job,", bold: true }, " such as \"Exterior repaint, Glen Ridge\" or \"Cabinets and trim, Westfield\". It reads as real and helps local search."],
    [{ text: "Your own photos only.", bold: true }, " Stock images of other people's work are easy to spot, and a homeowner who spots one starts doubting the rest."],
    [{ text: "Reviews next to the photos,", bold: true }, " ideally from the same kind of job. A review that mentions cleanup or covering furniture does more work than one that says \"great job\"."],
  ] },
  { kind: "aside", tone: "tip", text: "At the end of every job, take three photos from the same spots you shot before you started, in daylight, before the crew packs up. A gallery is built one job at a time, and the after photo is impossible to get once the customer has moved the furniture back." },

  { kind: "h2", text: "Pages a painting site needs" },
  { kind: "p", text: "A painting site can stay small. Each page should answer one question that customers really ask and end with a short form or a call button." },
  { kind: "h3", text: "Exterior painting" },
  { kind: "p", text: "The biggest and most seasonal decision. Explain your prep (washing, scraping, repairs, priming), what you need from the homeowner, how weather affects the schedule and what happens if it rains on a booked day. Older homes and lead-safe work belong here too." },
  { kind: "h3", text: "Interior painting" },
  { kind: "p", text: "Walls, ceilings, trim and doors. Cover how you protect the home, which rooms you can do while people live there, and how color choice works: do you bring samples, recommend a consultant, or paint what the customer has already picked?" },
  { kind: "h3", text: "Cabinets and specialty work" },
  { kind: "p", text: "Cabinet painting is a separate decision from a room repaint and is often compared with replacing the cabinets. Explain the process, how long the kitchen is out of use and how the finish holds up. If you do decks, fences, staining or wallpaper removal, give each its own short page only if you want more of that work." },
  { kind: "h3", text: "Service area and about" },
  { kind: "p", text: "A plain list of the towns you cover (a map alone is hard to read on a phone), your insurance in one sentence, the certification details above, and real photos of the people who will be in the house." },

  { kind: "h2", text: "A quote form that gets photos" },
  { kind: "p", text: [
    "A painting quote depends on things a contact form rarely asks: the size of the job, the state of the surfaces and how soon the customer needs it done. The guide to the ",
    { text: "quote request form", href: "/quote-request-form/" },
    " goes field by field. For painters, keep it short and ask for photos.",
  ] },
  { kind: "list", items: [
    "Name, mobile number, email and address.",
    "Type of job, as options to tap: exterior, interior, cabinets, deck or fence, other.",
    "For interiors, roughly how many rooms. For exteriors, the number of stories.",
    "Two or three photos of the areas to paint, optional but asked for clearly.",
    "Timing: as soon as possible, in the next few months, just planning.",
  ] },
  { kind: "p", text: "Photos let you sort requests before anyone drives out. Peeling paint on a three-story house and a fresh coat in two bedrooms are very different visits. With photos you can suggest a walkthrough time in the first reply, or give a rough range for small interior jobs, instead of calling back to ask the same five questions." },
  { kind: "p", text: "Put the same short form at the bottom of every service page, and keep the phone number visible on mobile. Some customers will always prefer to call, and that is fine as long as someone answers or calls back quickly." },

  { kind: "h2", text: "Replying before the next painter does" },
  { kind: "p", text: "Painting work is quoted in competition. Many homeowners ask two or three painters at once, and the first to reply often sets the date of the first walkthrough. Painters are on ladders and in other people's homes all day, so requests sit unanswered until the evening unless something answers them first." },
  { kind: "list", ordered: true, items: [
    [{ text: "An instant reply to every form.", bold: true }, " A text within a minute saying it arrived, who you are and two times you could come and look. It does not quote. It stops the homeowner from filling in the next painter's form while they wait."],
    [{ text: "A text back for missed calls.", bold: true }, " When you cannot pick up on a job, the caller gets a short message asking what they want painted and for a photo."],
    [{ text: "Follow-up after the estimate.", bold: true }, " A repaint is not urgent for most homeowners, and estimates go quiet. Two or three short messages over the following days, stopped as soon as the customer replies, keep you in the conversation."],
    [{ text: "A review request when the job closes,", bold: true }, " sent the day of the final walkthrough, with a link straight to your Google profile."],
  ] },
  { kind: "aside", text: "\"Hi Dana, thanks for your request about the porch and living room. This is Oakline Painting. If you can, reply with a photo of the railings. We could come and look Tuesday 5pm or Saturday 10am, which suits you better?\"" },
  { kind: "p", text: [
    "Those requests, calls, estimates and photos need to land in one list, tied to the address, so the next step is never in someone's head. The article on ",
    { text: "CRM for painting contractors", href: "/crm-for-painting-contractors/" },
    " covers what that list should hold, from the first walkthrough to the color codes you need for a touch-up two years later.",
  ] },
  { kind: "p", text: "Illustration: a painter who gets 30 quote requests a month, and replies to them the next evening, has 30 homeowners a month waiting a day for a first answer while other painters are free to reply. Those numbers are invented for the example. Count your own for one month, noting when each request arrived and when you first replied." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every painting business. A firm that only does commercial repaints needs a different site from one that does cabinets and porches, and the EPA rule is summarized here, not explained in full: check the EPA or your state program for what applies to you." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Should a painting contractor's website show prices?" },
  { kind: "p", text: "Show what you can stand behind. A single price per room ignores prep, ceilings and trim, and turns into a promise you have to break. A typical range for common jobs, with what moves it up or down, is honest and still answers the question." },
  { kind: "h3", text: "How many photos does the gallery need?" },
  { kind: "p", text: "Fewer than most people think, as long as they are your own and grouped by job type. Six good exteriors with captions do more than sixty unsorted phone shots. Add to it after every job." },
  { kind: "h3", text: "Do I need a separate page for cabinet painting?" },
  { kind: "p", text: "If you do it and want more of it, yes. Cabinet customers search for that job by name, are comparing painting with replacing, and need different information from someone repainting a bedroom." },
  { kind: "h3", text: "How do I know if my current site works?" },
  { kind: "p", text: "Open it on your phone on a weekend evening, fill in your own form with a photo and see what happens. If nothing comes back until Monday, that is the first thing to fix." },
  { kind: "p", text: [
    "If you would rather have the site and the system that answers it built and tested together, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const paintingContractorWebsiteDesign: Post = {
  slug: "painting-contractor-website-design",
  title: "Painting Contractor Website Design: Photos to Quotes",
  description: "Painting contractor website design for owners: what homeowners check, how to show your work, the pages to build, a quote form with photos, fast replies.",
  lede: "A homeowner with a peeling porch checks three painters' sites. Be the one that replies.",
  category: "Website Design",
  published: "2026-11-09",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/painting-contractor-website-design.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
