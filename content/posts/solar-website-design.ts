import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "solar website design". Las cifras y fuentes citadas se comprobaron en la
 * fuente el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It is 9pm and a homeowner has just opened their summer electricity bill. They search for solar installers near them, open four sites in four tabs, and give each one about a minute. One site has a hero photo of a sunset, a headline about a cleaner future and a form that wants their roof pitch. Another says which towns it covers, shows its license number, has reviews from people nearby and asks for a name, a phone number, a ZIP code and a rough monthly bill. Only one of those gets a quote request tonight." },
  { kind: "p", text: "Solar website design has a specific problem that general contractor sites do not: the buyer is cautious, the job is expensive, and the homeowner has usually been told to compare several companies before signing anything. This article covers what a solar installer's site needs to show, what the quote form should ask, which claims to keep off the page, and what has to happen after someone submits." },

  { kind: "h2", text: "What a solar website has to do" },
  { kind: "p", text: "A solar site has two jobs, in this order. First, it has to make a careful homeowner comfortable enough to ask. Second, it has to make asking easy on a phone. Design that helps with either job stays. Design that does neither (sliders, stock sunsets, animated counters) is decoration, and on a phone it is usually decoration that slows the page down." },
  { kind: "p", text: [
    "The general rules for an installer site still apply: say what you install and where, keep one clear action, and make the phone number tappable. The article on ",
    { text: "contractor website design", href: "/contractor-website-design/" },
    " covers those. What changes with solar is the level of doubt the visitor arrives with, and that shapes almost every page.",
  ] },

  { kind: "h2", text: "What homeowners check before asking" },
  { kind: "p", text: [
    "The US Federal Trade Commission's consumer guide, ",
    { text: "Solar Power for Your Home", href: "https://consumer.ftc.gov/articles/solar-power-your-home" },
    ", tells homeowners to compare detailed bids from several companies, check that the installer holds the licenses their state, county or city requires, search the company name with \"complaints\" or \"reviews\", and walk away from anyone who pressures them for a quick decision.",
  ] },
  { kind: "p", text: "That is a useful brief for a website, because it lists exactly what a careful buyer is going to look for. A good solar site answers those checks before the visitor has to go and find them somewhere else." },
  { kind: "h3", text: "Make the checks easy to pass" },
  { kind: "list", items: [
    [{ text: "License and registration:", bold: true }, " the license numbers you actually hold, in the footer and on the about page, so nobody has to email to ask."],
    [{ text: "Reviews from real customers:", bold: true }, " with first names and towns, and a link to where they were left. A wall of five-star quotes with no source reads as invented."],
    [{ text: "What a quote includes:", bold: true }, " system size, expected output, equipment, total installed cost and warranties, written down. If your quotes already cover those, say so on the site."],
    [{ text: "No pressure:", bold: true }, " a line such as \"Take the quote away and compare it. We'll answer questions, not chase you daily.\" Only write it if it is true."],
  ] },
  { kind: "p", text: "None of this is clever. It is the site doing, in advance, the homework the homeowner was told to do anyway." },

  { kind: "h2", text: "Pages a solar installer site needs" },
  { kind: "p", text: "Most solar sites can be small. What matters is that each page answers one question a buyer actually has." },
  { kind: "h3", text: "Home page" },
  { kind: "p", text: "One sentence on what you install and where (\"Solar panels, batteries and EV chargers across Maricopa County\"), a few real project photos, reviews, your licenses, and the quote button near the top and again at the bottom." },
  { kind: "h3", text: "One page per product" },
  { kind: "p", text: "Panels, battery storage, EV chargers and panel upgrades are different decisions with different questions. A page for each lets you answer them properly: what the job involves, how long it takes, what the homeowner needs to have ready, and what moves the price." },
  { kind: "h3", text: "How it works" },
  { kind: "p", text: "Solar has more steps than most home jobs: a first call, a site survey, a design, a written quote, permits, the install, inspection and the utility connection. A plain list of those steps, with who does what, removes a lot of the fear. Avoid promising a timeline you do not control, such as the utility's approval." },
  { kind: "h3", text: "Projects and reviews" },
  { kind: "p", text: [
    "One line per job beats a gallery: \"10 panels and a battery, Mesa, installed in two days.\" Reviews carry more weight than anything you write about yourself, and collecting them is mostly a matter of asking at the right moment. See ",
    { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" },
    " for a routine that does not depend on remembering.",
  ] },
  { kind: "h3", text: "FAQ" },
  { kind: "p", text: "Collect the questions your team answers on every first call (financing, roof age, HOA approval, net metering, what happens in a power cut) and answer them on one page. It saves time on calls and it is the content homeowners are searching for anyway." },

  { kind: "h2", text: "A quote form that fits solar" },
  { kind: "p", text: "Solar installers are tempted to ask for everything up front, because a good design needs a lot of information. But a stranger at 9pm is not going to find their utility account number or measure their roof. The first form should ask only what you need to call back with something useful." },
  { kind: "list", items: [
    "Name and mobile number (email optional).",
    "Address or ZIP code, so you can check the area and look at the roof on a satellite map before calling.",
    "Rough monthly electricity bill, as a range.",
    "What they are interested in: panels, battery, EV charger, not sure.",
    "One optional box: \"Anything we should know?\"",
  ] },
  { kind: "p", text: "Bill uploads, roof photos, shading and meter details belong in the next step, by text or on the survey, once the homeowner has heard from a person and decided you are worth the effort." },
  { kind: "aside", tone: "tip", text: "Under the submit button, say exactly what happens next and when: \"We'll text you to confirm, and call within the hour during working hours.\" Then make sure the system behind the form keeps that promise every time, including evenings." },
  { kind: "h3", text: "Calculators: useful, with limits" },
  { kind: "p", text: "A savings calculator can help a visitor decide whether to ask at all. It can also become the most dangerous thing on the site if it shows a precise saving based on two inputs. If you use one, show a range, list the assumptions next to it (rates, usage, roof direction), and say plainly that the real figure comes from the survey and the written quote." },

  { kind: "h2", text: "Savings claims you can defend" },
  { kind: "p", text: "Solar websites age badly. Incentives change, utility rates change, net metering rules change, and the page written two years ago keeps saying the same thing. A homeowner who later finds that a headline number on your site was out of date stops trusting the rest of it." },
  { kind: "p", text: [
    "The clearest current example is the federal tax credit for homeowners. The IRS page on the ",
    { text: "Residential Clean Energy Credit", href: "https://www.irs.gov/credits-deductions/residential-clean-energy-credit" },
    " says the 30% credit applies to qualified property installed from 2022 through December 31, 2025, and is not available for property placed in service after that date. Any solar site still telling homeowners they will get 30% back from the federal government should be checked against that page and against your tax adviser, because leases, third-party ownership and state programs follow their own rules.",
  ] },
  { kind: "h3", text: "A simple rule for every number" },
  { kind: "list", items: [
    "If a number depends on the house, show it as a range or leave it to the quote.",
    "If it depends on a law or a program, link the official source and put the date you checked it next to it.",
    "If you cannot say where it came from, take it off the page.",
  ] },
  { kind: "p", text: "Illustration: a site that says \"save up to $2,000 a year\" invites the question \"which house?\" A site that says \"your quote shows expected output and cost, so you can work out the saving with your own bill\" invites a quote request." },

  { kind: "h2", text: "What happens after the form" },
  { kind: "p", text: "This is the part most solar website design leaves out, and it decides whether the site was worth paying for. The FTC tells homeowners to get several bids, so your quote request is probably one of three or four sent the same evening. The installer who replies first, clearly, gets the first conversation and usually the survey." },
  { kind: "p", text: [
    "The article on ",
    { text: "speed to lead", href: "/speed-to-lead/" },
    " goes into why the first reply matters. In practice, the form should hand every request to a system that does three things at once:",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "Texts the homeowner straight away,", bold: true }, " confirming the request and saying when a person will call."],
    [{ text: "Alerts whoever is on duty,", bold: true }, " with the name, the address and the monthly bill, so they can look at the roof before calling."],
    [{ text: "Logs the request in a CRM,", bold: true }, " so the survey, the quote and the follow-up are tracked in one place and nobody is left waiting."],
  ] },
  { kind: "p", text: "The first text can be short:" },
  { kind: "aside", text: "\"Hi Priya, thanks for your solar quote request with Desert Ridge Solar. We've got your address and bill range, and someone will call you tomorrow before 10am. If another time suits you better, reply here.\"" },
  { kind: "p", text: [
    "From there, a solar sale takes weeks, not days, and most of the work is in tracking surveys, designs, quotes and finance approvals without dropping any of them. The article on ",
    { text: "solar CRM", href: "/solar-crm/" },
    " covers the pipeline stages that fit that cycle.",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. A commercial solar installer bidding on tenders, or one that sells mostly through referrals or door-to-door, needs a different site from a residential installer who gets quote requests from search. Start from where your work actually comes from." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Should a solar website show prices?" },
  { kind: "p", text: "Exact prices are rarely possible, because roof, usage and equipment change the total. A typical range for a common system size, with what moves it up or down, helps visitors decide whether to ask and filters out requests that were never going to go ahead." },
  { kind: "h3", text: "Do I need a savings calculator?" },
  { kind: "p", text: "No. It can help if it shows ranges and its assumptions. A calculator that shows one confident number from two inputs creates expectations the real quote then has to correct." },
  { kind: "h3", text: "How long should the quote form be?" },
  { kind: "p", text: "Short enough to finish on a phone in under a minute: name, mobile number, address or ZIP, a bill range and what they are interested in. Everything else can be collected after the first reply." },
  { kind: "h3", text: "How do I know if my current site works?" },
  { kind: "p", text: "Count the quote requests it sends each month, check how long each one waited for a first reply, and fill in your own form on your phone at night. Then read every number on the site and ask where it came from." },
  { kind: "p", text: [
    "If you would rather have the site and the system that answers it built and tested together, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const solarWebsiteDesign: Post = {
  slug: "solar-website-design",
  title: "Solar Website Design: What Homeowners Check First",
  description: "Solar website design for installers: what cautious homeowners check, the pages and quote form you need, claims to keep off the page, and the reply after.",
  lede: "Homeowners compare several installers. Your site should pass their checks first.",
  category: "Website Design",
  published: "2026-10-15",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/solar-website-design.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
