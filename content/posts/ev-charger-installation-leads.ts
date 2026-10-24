import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "ev charger installation leads". La pagina del Department of Energy citada
 * se comprobo en la fuente el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It is 8:40pm on a Tuesday. A lead lands in your inbox from a marketplace you pay for: \"Level 2 charger, detached garage, car arrives next month.\" You are finishing an install across town and see it at 10pm. By then two other electricians have already texted the same homeowner, because the marketplace sold the request to all three of you. One of them asked for a panel photo at 8:42. That is the one who gets the survey." },
  { kind: "p", text: "EV charger installation leads are not hard to find. Dealers, referral networks, marketplaces and your own website all produce them. What decides how many become installs is what happens in the first few minutes and the following week. This article covers where charger leads come from, how shared and exclusive leads differ, and the reply, photo and follow-up that turn a request into a booked job." },

  { kind: "h2", text: "Where charger leads come from" },
  { kind: "p", text: "Most charger work reaches an electrician through one of five routes. Each one behaves differently, so it helps to know which you rely on before you spend money on more." },
  { kind: "h3", text: "Car dealers" },
  { kind: "p", text: "The buyer has just ordered the car and the salesperson is asked about home charging. A dealer who hands out your card or number becomes a steady source, but only while they trust you to turn up. Answer their customers quickly and tell the dealer when the job is done, and the referrals keep coming." },
  { kind: "h3", text: "Installer networks and charger makers" },
  { kind: "p", text: "Some charger manufacturers and installation companies run networks that pass jobs to approved electricians, often with a fixed scope and price set by the network. The work is real, but the margin and the customer relationship are not entirely yours. Read the terms on who owns the customer after the install before you sign up." },
  { kind: "h3", text: "Lead marketplaces" },
  { kind: "p", text: "Home-service marketplaces sell requests per lead or by subscription. They are quick to start and easy to stop. The catch is that many sell the same request to several businesses at once, which turns the job into a race." },
  { kind: "h3", text: "Your own website and search" },
  { kind: "p", text: [
    "A homeowner who searches, finds your site and asks you for a quote has chosen you, at least for now. These are usually the cheapest leads over time and the ones you control. The article on ",
    { text: "EV charger installer websites", href: "/ev-charger-installer-website/" },
    " covers the pages and the form that produce them.",
  ] },
  { kind: "h3", text: "Past customers and neighbors" },
  { kind: "p", text: "Someone who had a panel upgrade or a rewire from you two years ago may now be buying an electric car. A short message to past electrical customers costs nothing and reaches people who already know your work." },

  { kind: "h2", text: "Shared leads versus your own" },
  { kind: "p", text: "Before buying charger leads, find out one thing: is each request sold to you alone, or to several businesses? The answer changes how you need to work." },
  { kind: "list", items: [
    [{ text: "Shared leads", bold: true }, " go to several installers at the same moment. The homeowner hears from all of them. Unless you reply within minutes, you are paying for a request someone else has already answered."],
    [{ text: "Exclusive leads", bold: true }, " go to you only, usually at a higher price per lead. You still need to be quick, because the buyer may also be filling in forms elsewhere, but you are not racing a seller's other customers."],
    [{ text: "Your own leads", bold: true }, " from your site, a dealer or a past customer have no price per lead. They do need the same fast reply, because the buyer is very likely asking more than one business."],
  ] },
  { kind: "p", text: "Illustration: if a marketplace charges you for ten shared charger leads in a month and you reply to most of them the next morning, the price you are really paying per installed charger is the cost of all ten divided by the one or two you win. Replying in minutes does not change the price per lead. It changes how many of them you actually get to quote." },
  { kind: "p", text: [
    "Whatever mix you use, record the source on every request. After a couple of months you can see which channel produces installs and which only produces invoices. The guide to ",
    { text: "lead source tracking", href: "/lead-source-tracking/" },
    " shows how to do it without a spreadsheet nobody fills in.",
  ] },

  { kind: "h2", text: "The first ten minutes" },
  { kind: "p", text: [
    "Charger buyers usually have a deadline: the car is coming either way. That makes them quick to decide and quick to move on. The article on ",
    { text: "speed to lead", href: "/speed-to-lead/" },
    " explains why the first useful reply carries so much weight. For charger work, three things make that reply possible when you are on a ladder or in a crawl space.",
  ] },
  { kind: "h3", text: "Every source lands in one place" },
  { kind: "p", text: "Marketplace emails, dealer texts, website forms and missed calls should all end up in the same list, with the source attached. If leads arrive in four apps, the slowest app sets your response time." },
  { kind: "h3", text: "An instant text that asks for something" },
  { kind: "p", text: "The first message should go out within a minute, from your business number, without anyone typing it. It should not be a generic \"thanks, we will be in touch\". It should thank them by name, ask for the one thing you need to price the job, and say when a person will follow up." },
  { kind: "aside", text: "Hi Morgan, thanks for your charger request. To price it, could you reply with a photo of your electrical panel with the door open? Alex will call you tomorrow before 10am. Riverside Electric" },
  { kind: "h3", text: "A missed call that does not go cold" },
  { kind: "p", text: "Some buyers phone instead. If you cannot answer, a text back within a minute asking what they need, and offering a call time, keeps the request alive until you are off the roof." },

  { kind: "h2", text: "Getting the panel photo" },
  { kind: "p", text: [
    "The U.S. Department of Energy's Alternative Fuels Data Center notes that ",
    { text: "electricians can tell homeowners whether their home has adequate electrical capacity", href: "https://afdc.energy.gov/fuels/electricity-charging-home" },
    " for charging, and that faster home charging uses 240 V Level 2 equipment. That capacity question is behind most charger quotes, and a clear photo of the panel answers a good part of it before you drive anywhere.",
  ] },
  { kind: "list", items: [
    "Ask for the panel photo with the door open, so the main breaker and spare spaces are visible.",
    "Ask for a second photo of where the car will park, so you can judge the run.",
    "Make it easy to send by text from a phone camera, not as an email attachment.",
    "If the photo is not enough, say so and offer a site survey with two time options.",
  ] },
  { kind: "aside", tone: "tip", text: "If a buyer has not sent the photo by the next morning, ask once more by name: \"Could you send the panel photo when you are home tonight?\" A specific, named request is easier to act on than a general reminder." },
  { kind: "p", text: [
    "The same Department of Energy page says ",
    { text: "permits may be required from local building and permitting authorities", href: "https://afdc.energy.gov/fuels/electricity-charging-home" },
    ". Mention early whether you handle the permit and inspection. A buyer with a delivery date wants to know if the permit is the slow part.",
  ] },

  { kind: "h2", text: "Quote and follow-up" },
  { kind: "p", text: "A quote sent and never chased is a quote someone else wins. Charger quotes are small compared with solar or a remodel, so buyers often decide within days, and they rarely tell the installers they did not choose." },
  { kind: "h3", text: "Send the quote while they still care" },
  { kind: "p", text: "With the panel photo in hand, many simple installs can be priced the same day. Say what is included, what could change the price (panel work, a longer run, a trench) and the earliest date you can install." },
  { kind: "h3", text: "Three follow-ups, then stop" },
  { kind: "list", ordered: true, items: [
    [{ text: "Two days after the quote", bold: true }, ": a short check-in asking if they have questions."],
    [{ text: "Before the car arrives", bold: true }, ": your earliest install date, and a reminder that permits take time."],
    [{ text: "A week later", bold: true }, ": a last message saying you will close the quote unless they want to go ahead."],
  ] },
  { kind: "p", text: [
    "These go out on their own and stop the moment the buyer replies. The guide to ",
    { text: "quote follow-up", href: "/quote-follow-up/" },
    " has full message examples and timing.",
  ] },
  { kind: "h3", text: "After the install" },
  { kind: "p", text: "Ask for a review that mentions the charger, and tell the dealer who referred the job that it is done. Both make the next lead easier to win." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. Lead marketplaces and installer networks differ in price, exclusivity and terms, and permit and licensing rules vary by state and city. Check the terms and the local rules before you commit to any of them." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Are paid EV charger leads worth it?" },
  { kind: "p", text: "They can be, if you can reply within minutes and follow up every quote. If leads sit until the next day, shared leads in particular are mostly paid introductions to jobs someone else wins. Track the source for a couple of months before deciding." },
  { kind: "h3", text: "How fast should I reply to a charger lead?" },
  { kind: "p", text: "The first reply should go out within a minute, automatically, and ask for the panel photo. A person should follow up the same day, or the next morning for evening requests, at the time the first message promised." },
  { kind: "h3", text: "Should I quote without a site visit?" },
  { kind: "p", text: "For a simple install with a clear panel photo and a short run, many electricians quote from photos and confirm on the day. When the panel is full, the run is long or the photo is unclear, offer a survey instead of guessing." },
  { kind: "h3", text: "How do I get more charger leads from dealers?" },
  { kind: "p", text: "Answer every customer they send quickly, and tell the dealer when the job is done. A dealer's salespeople refer the installer they never hear complaints about." },
  { kind: "p", text: [
    "If you would rather have the reply, the photo request and the follow-up set up and tested for you, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const evChargerInstallationLeads: Post = {
  slug: "ev-charger-installation-leads",
  title: "EV Charger Installation Leads: Where They Come From",
  description: "Where EV charger installation leads come from, how shared and exclusive leads differ, and the reply, panel photo and follow-up that turn them into jobs.",
  lede: "Charger leads are easy to buy. Winning them depends on who replies first.",
  category: "Lead Generation",
  published: "2026-10-24",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/ev-charger-installation-leads.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
