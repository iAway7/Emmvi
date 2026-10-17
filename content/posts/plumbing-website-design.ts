import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "plumbing website design". Las cifras y fuentes citadas se comprobaron en la
 * fuente el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It is 9pm on a Tuesday. Water is coming out from under the kitchen sink and the homeowner has turned off the valve, or thinks they have. They search for a plumber near them, open three sites and give each one about ten seconds. The first has a slider of stock photos and a phone number in small print at the bottom. The second has a contact form that asks for a preferred date. The third says, at the top, what to do right now and how to reach someone tonight. That is the one that gets the job." },
  { kind: "p", text: "Plumbing website design is mostly about that moment, plus the quieter one when someone is planning a new water heater or a bathroom repipe and has time to compare. This article covers what each of those visitors needs, which pages to build, what the forms should ask, and what has to happen when the phone rings and nobody can answer." },

  { kind: "h2", text: "Why plumbing sites are different" },
  { kind: "p", text: [
    "Most of what makes any trade website work applies here too: say what you do and where, one clear action per page, a phone number you can tap, real reviews. The article on ",
    { text: "contractor website design", href: "/contractor-website-design/" },
    " covers those basics. Plumbing adds two things that change the design.",
  ] },
  { kind: "p", text: [
    "The first is urgency. A good share of plumbing work starts with something going wrong, and the person on the page is often stressed, on a phone and standing in water. The second is timing. The U.S. Bureau of Labor Statistics notes that ",
    { text: "plumbers are often on call for emergencies, so evening and weekend work is common", href: "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm" },
    ". Your website has to work at those hours too, including the hours when you are under a house and cannot pick up.",
  ] },
  { kind: "p", text: "Then there is the planned buyer: a water heater replacement, a repipe, a remodel rough-in, a sewer line quote. This person reads, compares two or three plumbers and decides over days. The site has to give each visitor a clear path in one tap, so the urgent one does not have to read and the planned one does not feel rushed." },

  { kind: "h2", text: "What a homeowner needs in 10 seconds" },
  { kind: "p", text: "The top of the home page, on a phone, should answer four questions before any scrolling." },
  { kind: "list", ordered: true, items: [
    [{ text: "Do you cover my area?", bold: true }, " Name the towns or the county in plain text, not only on a map."],
    [{ text: "Can someone come soon?", bold: true }, " Only say \"same day\" or \"24/7\" if you can keep it. If you cover emergencies until 10pm, say until 10pm."],
    [{ text: "How do I reach you now?", bold: true }, " A large, tappable call button, and a text option for people who cannot talk where they are."],
    [{ text: "Are you licensed?", bold: true }, " The BLS notes that most states and some localities require plumbers to be licensed. Put your license number in the header or footer so a careful buyer does not have to ask."],
  ] },
  { kind: "p", text: "Underneath, two buttons do most of the work: \"Urgent leak or no water?\" for the visitor who needs help now, and \"Book a non-urgent job\" or \"Get a quote\" for everyone else. Each one leads to a different page with a different form." },
  { kind: "h3", text: "A short note on what to do first" },
  { kind: "p", text: "A few lines telling the visitor where the main shut-off valve usually is, and to turn off the water heater if it is leaking, is not a giveaway. It keeps the damage smaller, it shows you know the job, and the visitor remembers who helped before anyone arrived." },
  { kind: "aside", tone: "tip", text: "Read your own home page on a phone, with one hand, standing up. If you cannot find the call button and your service area in the first screen, a homeowner with a leak will not either." },

  { kind: "h2", text: "Pages a plumbing website needs" },
  { kind: "p", text: "A plumbing site can stay small. Each page should answer one question a real customer asks, and each should end with the right next step for that page." },
  { kind: "h3", text: "Emergency and repair page" },
  { kind: "p", text: "Short. The hours you really cover, the areas, whether there is a call-out or after-hours fee and roughly what it is, and the call and text options again. If you do not do emergency work, say so plainly. It saves a stressed homeowner a wasted call and saves you a bad review." },
  { kind: "h3", text: "Water heaters" },
  { kind: "p", text: "Often the biggest planned job a residential plumber quotes. Explain tank versus tankless in plain words, what moves the price (fuel type, location, venting, permits where they apply), how long the swap usually takes, and what the homeowner should have ready: a photo of the current unit and its label." },
  { kind: "h3", text: "Drains, sewer and repipes" },
  { kind: "p", text: "Separate pages for the jobs people search for by name. Say what an inspection involves, when a camera is used, and how you quote. Keep the language plain: \"we run a camera down the line so you can see the problem before you pay for the fix\" says more than a list of equipment." },
  { kind: "h3", text: "Leaks and water bills" },
  { kind: "p", text: [
    "Some leaks are not emergencies, just slow and expensive. The EPA's WaterSense program estimates that ",
    { text: "the average household's leaks can account for more than 9,300 gallons of water wasted every year", href: "https://www.epa.gov/watersense/fix-leak-week" },
    ". A short page on running toilets, dripping faucets and the signs of a hidden leak catches the homeowner who searches after a high water bill, before it turns into a ceiling stain.",
  ] },
  { kind: "h3", text: "About, reviews and service area" },
  { kind: "p", text: [
    "A real about page with the people who will turn up, license and insurance details, and reviews with first names and towns. One line per job (\"Water heater swap, Garland, same afternoon\") is worth more than a gallery of stock photos of shiny pipes. Reviews come from asking every time, at the right moment, and the guide on ",
    { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" },
    " sets out a routine that does not rely on anyone remembering.",
  ] },

  { kind: "h2", text: "Forms that ask for a photo" },
  { kind: "p", text: "One generic contact form for every visitor is where many plumbing sites lose work. The urgent visitor will not fill in eight fields, and the planned buyer needs to tell you more than a name and a phone number." },
  { kind: "h3", text: "Urgent request" },
  { kind: "list", items: [
    "Name and mobile number.",
    "Address or ZIP code.",
    "What is happening, as a short list to tap: leak, no hot water, blocked drain, no water, other.",
    "Is the water turned off? Yes, no, not sure.",
    "An optional photo.",
  ] },
  { kind: "p", text: "Five fields, all answerable with a thumb. The photo is the one that helps most: a picture of the joint under the sink or the label on the water heater tells your plumber what to load in the van." },
  { kind: "h3", text: "Quote request" },
  { kind: "list", items: [
    "Name, mobile number, email and address.",
    "The job, from a list: water heater, repipe, sewer line, fixture install, remodel, other.",
    "Rough timing: this week, this month, just planning.",
    "Photos of the current setup, if they have them.",
    "Best time to call.",
  ] },
  { kind: "p", text: "The timing question matters more than it looks. \"Just planning\" tells you this person wants information and a follow-up, not a call in five minutes. \"This week\" tells you to call today." },

  { kind: "h2", text: "Calls you cannot pick up" },
  { kind: "p", text: "Most plumbing work still comes by phone, and most plumbers cannot answer while they are working. A beautiful website that ends in a voicemail box at 9pm has done half the job." },
  { kind: "p", text: [
    "The simplest fix is a missed-call text back: when a call goes unanswered, the caller gets a text within a minute saying who you are and asking what the problem is. Many people would rather reply to a text than leave a voicemail. The article on ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    " covers how it works, what to say and where it can go wrong. A first message can be as short as this:",
  ] },
  { kind: "aside", text: "\"Hi, this is Harbor Lane Plumbing. Sorry we missed your call, we're on a job. What's going on? If it's a leak, a photo helps, and we'll get back to you in a few minutes.\"" },
  { kind: "p", text: "The text does not fix the leak, and it should not promise a time you cannot keep. What it does is stop the caller from moving on to the next plumber in the list while you finish what you are doing." },

  { kind: "h2", text: "After the request comes in" },
  { kind: "p", text: "The website's job ends when the request arrives. Whether you win the work depends on what happens next, and that part is not design." },
  { kind: "list", items: [
    [{ text: "Instant reply:", bold: true }, " every form and every missed call gets an automatic text in under a minute, confirming it arrived and saying what happens next."],
    [{ text: "One place for every request:", bold: true }, " calls, texts and forms land in the same list, with the address, the photo and where the customer came from. The article on ",
      { text: "CRM for plumbers", href: "/crm-for-plumbers/" },
      " goes into what that list should hold."],
    [{ text: "Quote follow-up:", bold: true }, " a water heater quote sent on Monday and never chased is a quote someone else wins. Two or three short messages over the following week, stopped as soon as the customer replies, are usually enough. See ",
      { text: "quote follow-up", href: "/quote-follow-up/" },
      " for timing and wording."],
    [{ text: "A review request:", bold: true }, " sent the day the job is finished, while the customer still remembers the dry floor."],
  ] },
  { kind: "p", text: "Illustration: a plumber who gets 40 website and phone requests a month, a quarter of them after 6pm, has 10 requests a month arriving when nobody is at a desk. Those numbers are invented for the example. Count your own for a month, and note how long each one waited for a first reply." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every plumbing business. A one-van operation that only does planned work needs a different site from a company that runs emergency calls overnight. Start from the jobs you want more of and the hours you can really cover." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Should I show prices on my plumbing website?" },
  { kind: "p", text: "Show what you can stand behind: a call-out or diagnostic fee, after-hours rates and fixed-price jobs if you have them. For water heaters and repipes, a range with what moves it up or down is more honest than a single number." },
  { kind: "h3", text: "Do I need online booking?" },
  { kind: "p", text: "For routine work such as drain cleaning or a fixture install it can help, as long as the slots shown are real. For emergencies, a phone call or a text is faster. For bigger jobs, a quote request followed by a call usually works better." },
  { kind: "h3", text: "Is a separate emergency page worth it?" },
  { kind: "p", text: "Yes, if you really offer emergency work, because it is what people search for and it lets you keep that page short. If you do not, say so on the home page so nobody wastes a call at midnight." },
  { kind: "h3", text: "How do I know if my current site works?" },
  { kind: "p", text: "Open it on your phone at night, fill in your own form and see what happens. Then call your number from another phone while the team is on a job. If the answer to both is silence until the next morning, that is the first thing to fix." },
  { kind: "p", text: [
    "If you would rather have the site and the system that answers it built and tested together, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const plumbingWebsiteDesign: Post = {
  slug: "plumbing-website-design",
  title: "Plumbing Website Design: Built for Urgent Calls",
  description: "Plumbing website design for owners: what a homeowner with a leak needs first, the pages and forms to build, missed calls, and what happens after.",
  lede: "A homeowner with a leak gives your site ten seconds. Make them count.",
  category: "Website Design",
  published: "2026-10-17",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/plumbing-website-design.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
