import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "ev charger installer website". Las cifras y fuentes citadas se comprobaron
 * en la fuente el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It is 9:15pm. Jordan has just put down a deposit on an electric car that arrives in three weeks, and the dealer said something about a home charger. Jordan searches on the sofa, opens four installer sites and fills in the form on two of them. One sends a text back within a minute asking for a photo of the panel. The other replies two days later, by which time a site survey is already booked with the first." },
  { kind: "p", text: "An EV charger installer website has a narrow job: turn that evening search into a quote request with enough detail to price, and make sure someone answers it while the buyer is still deciding. This article covers who visits, the pages and form to build, how to show you are qualified, and what has to happen after the request arrives." },

  { kind: "h2", text: "Who visits a charger installer site" },
  { kind: "p", text: [
    "The general rules of any trade site still apply: say what you do and where on the first screen, one clear action per page, a phone number you can tap, real reviews. The article on ",
    { text: "electrician website design", href: "/electrician-website-design/" },
    " covers those for electrical work in general. Charger buyers are a specific group, and three things set them apart.",
  ] },
  { kind: "h3", text: "They have a date" },
  { kind: "p", text: "Most people looking for a home charger have already bought or ordered the car. The delivery date is their deadline, and they know it. That makes them quicker to decide than someone pricing a kitchen rewire, and quicker to move on if an installer goes quiet." },
  { kind: "h3", text: "They do not know what they need" },
  { kind: "p", text: [
    "Many first-time owners have never heard of Level 2 charging or wondered whether their panel has room for it. The U.S. Department of Energy's Alternative Fuels Data Center says ",
    { text: "most EV drivers charge overnight at home", href: "https://afdc.energy.gov/fuels/electricity-charging-home" },
    ", that faster home charging uses 240 V equipment, and that an electrician can tell homeowners whether the house has enough electrical capacity. The buyer arrives with a car and a question, not a specification.",
  ] },
  { kind: "h3", text: "Some are not homeowners at all" },
  { kind: "p", text: "Property managers, small businesses adding workplace charging and builders fitting chargers to new homes all search for the same words. If you want that work, give it its own page. If you do not, say so plainly so those requests do not fill your inbox." },

  { kind: "h2", text: "Pages that answer the real questions" },
  { kind: "p", text: "A charger installer site can be small. Each page should answer one question that buyers actually ask, and end with the quote request." },
  { kind: "h3", text: "Home charger installation" },
  { kind: "p", text: "The main page. Explain the job from first message to first charge: the photos you ask for, whether a site survey is needed, how long the install takes on the day, and when the power is off. Say which charger brands you install and whether the customer can supply their own. Keep the explanation of Level 1 and Level 2 to two sentences; the buyer wants to know what happens at their house, not a lesson in standards." },
  { kind: "h3", text: "Panel checks and upgrades" },
  { kind: "p", text: "The question behind most hesitation is \"will my panel cope?\". Say how you find out (a panel photo first, a survey if the photo is not enough), what the possible outcomes are (fine as it is, needs a new circuit, needs an upgrade or a load management device), and that the quote will say which one applies before any work starts. This is where a careful buyer decides you know what you are doing." },
  { kind: "h3", text: "Pricing and what moves it" },
  { kind: "p", text: "You do not have to publish a fixed price, and a single number for every install is a promise you will break. You can list what moves the price: the distance from the panel to where the car parks, indoor or outdoor mounting, whether a trench or wall run is needed, panel work, and the permit. A buyer who understands why the price varies is more likely to send the photos you need." },
  { kind: "h3", text: "Permits and inspection" },
  { kind: "p", text: [
    "The same Department of Energy page notes that ",
    { text: "permits may be required from local building authorities", href: "https://afdc.energy.gov/fuels/electricity-charging-home" },
    ". Say on your site whether you pull the permit and book the inspection, and roughly how that adds to the timeline. Buyers with a delivery date need to know if the permit, not the install, is the slow part.",
  ] },
  { kind: "h3", text: "Commercial and multi-unit" },
  { kind: "p", text: "Only if you do this work. Describe the kinds of sites (small offices, apartment parking, fleet vans), how you handle surveys and access, and who to contact. Keep it separate so it does not crowd the homeowner path." },

  { kind: "h2", text: "A quote form that gets you a price" },
  { kind: "p", text: [
    "The usual contact form (name, email, message) gets you a message that says \"How much for a charger?\" and nothing you can price. A short form built around the job gets you a quote you can send the next morning. The guide to the ",
    { text: "quote request form", href: "/quote-request-form/" },
    " goes field by field; for chargers, these are the ones that matter.",
  ] },
  { kind: "list", items: [
    [{ text: "Name, mobile number and town or zip code", bold: true }, ". The number is what lets you reply by text, which is how most buyers prefer to hear back in the evening."],
    [{ text: "When the car arrives", bold: true }, ", as a simple choice: already here, within a month, later. It tells you who to call first."],
    [{ text: "Where the panel is and where the car parks", bold: true }, ", with options such as garage, basement, outside wall, driveway, street."],
    [{ text: "A photo of the panel", bold: true }, ", with the door open, plus an optional one of the parking spot. Make the upload work from a phone camera."],
    [{ text: "Charger model, if they have one", bold: true }, ", with \"not yet, recommend one\" as an answer."],
  ] },
  { kind: "p", text: "Five or six fields is enough. Anything else you need, such as the distance between panel and parking spot, can come in the reply. Test the whole form on your own phone, photo included, before it goes live." },
  { kind: "aside", tone: "tip", text: "Ask for the panel photo in the form and again in the first reply. Many people skip the upload on the form, then send the photo straight away when a text asks for it by name." },

  { kind: "h2", text: "Showing you are qualified" },
  { kind: "p", text: "A charger is a permanent connection to the house's electrical system, and buyers know it. They look for signs that the person turning up is an electrician and not a handyman with a drill." },
  { kind: "list", items: [
    [{ text: "License number in plain text", bold: true }, " in the footer of every page, with the board that issued it, so anyone can check it from a phone."],
    [{ text: "Insurance in one sentence", bold: true }, ": what you carry and that you send proof on request."],
    [{ text: "Manufacturer training or approved installer status", bold: true }, ", but only if you actually have it. Name the program in text; do not use the manufacturer's logo unless the program allows it."],
    [{ text: "Photos from real installs", bold: true }, ", with the town and the setup: \"Garage, 30 ft run, Elmhurst\" says more than a stock image of a car plugged into a wall."],
    [{ text: "Reviews that mention chargers", bold: true }, ". Ask charger customers specifically, so the reviews on that page are about the work the visitor wants."],
  ] },

  { kind: "h2", text: "What happens after the request" },
  { kind: "p", text: "A good site produces requests. Whether they become installs depends on what happens in the next few minutes and the next few days, and that part is not on the website at all." },
  { kind: "h3", text: "The first reply" },
  { kind: "p", text: [
    "Jordan sent requests to two installers. The one who answered first got the survey. That is not a statistic, it is what a buyer with a deadline does. The article on ",
    { text: "speed to lead", href: "/speed-to-lead/" },
    " explains how to set up an instant reply that is honest about what happens next. For chargers, the first text should thank them, ask for anything missing, and say when the quote will come.",
  ] },
  { kind: "aside", text: "Hi Jordan, thanks for your charger request. Could you reply with a photo of your panel with the door open? We will send your quote by Friday. Sam, Northside Electric" },
  { kind: "h3", text: "The quote and the follow-up" },
  { kind: "p", text: [
    "Charger quotes are often accepted or lost within a week, because the car is coming either way. A quote that is sent and never chased is a quote that someone else wins. Set a short sequence: a check-in two days after the quote, a reminder of your earliest install date before the car arrives, and a last message after that. The guide to ",
    { text: "quote follow-up", href: "/quote-follow-up/" },
    " has the messages and the timing.",
  ] },
  { kind: "h3", text: "Knowing where the work comes from" },
  { kind: "p", text: "Charger requests come from your site, from dealers and from referrals. Record the source on every request, so when one channel goes quiet you notice it in weeks, not months." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. Permit rules, licensing and the incentives available for chargers vary by state and city and change over time, so check the rules where you work before you put any of them on your site." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Do I need a separate website for EV chargers?" },
  { kind: "p", text: "Usually not. If you are an electrician who also installs chargers, a dedicated charger page on your main site, with its own form, is enough. A separate site only makes sense if chargers are most of your work and you want a different name for them." },
  { kind: "h3", text: "Should I show prices on my site?" },
  { kind: "p", text: "Show what you can stand behind: a typical range for a simple install, and the list of things that move it. Do not show a single fixed price unless you will honor it for every house." },
  { kind: "h3", text: "Should I mention tax credits or rebates?" },
  { kind: "p", text: "Only with a source and a date, and only if you will keep the page up to date. Programs open, close and change, and an out-of-date incentive on your site becomes a complaint during the job. A link to the official program page is safer than your own summary." },
  { kind: "h3", text: "How can I tell if my current site works?" },
  { kind: "p", text: "In the evening, on your phone, request a quote from your own site with a panel photo. Note how long the reply takes and what it says. If nothing happens until the next working day, start there." },
  { kind: "p", text: [
    "If you would rather have the site and the system that answers it built and tested together, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const evChargerInstallerWebsite: Post = {
  slug: "ev-charger-installer-website",
  title: "EV Charger Installer Website: Pages, Forms, Replies",
  description: "What an EV charger installer website needs: the pages buyers look for, a quote form that gets a panel photo, proof you are qualified, and fast replies.",
  lede: "The car arrives in three weeks. The installer who replies tonight books the survey.",
  category: "Website Design",
  published: "2026-10-23",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/ev-charger-installer-website.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
