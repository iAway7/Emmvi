import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "local services ads for contractors". Fuentes citadas: tres paginas de
 * ayuda de Google sobre Local Services Ads (como funcionan, como funcionan
 * los leads y el ranking), comprobadas el 31 de octubre de 2026.
 */
const body: Post["body"] = [
  { kind: "p", text: "Tuesday, 11:15am. Your phone buzzes while you're on a roof with both hands busy. It's a call from your Local Services ad: a homeowner whose furnace stopped working last night. You can't pick up. They hold for half a minute, give up, and call the next profile on the list. By the time you're back on the ground, they've booked someone else, and you've paid for the call anyway." },
  { kind: "p", text: "Local Services Ads can be a steady source of work for contractors and installers, because they sit at the top of Google for searches like \"HVAC repair near me\". But they reward something most ad guides skip: what happens after the phone rings. This article covers how the ads work, what Google charges for, why answering affects where you show, and how to set up your side so no lead goes unanswered." },

  { kind: "h2", text: "How Local Services Ads work" },
  { kind: "p", text: [
    "You set up a profile, choose the services you offer and the areas you cover, and set a budget. When someone searches for one of those services in your area, your profile can show at the top of the results. According to ",
    { text: "Google's own overview", href: "https://support.google.com/localservices/answer/6224841?hl=en" },
    ", you pay for leads related to your business, not for clicks or views, and the program is only open to certain service categories, which include HVAC, plumbing, electricians, roofing, landscaping and others. Google has an eligibility checker for your category and area.",
  ] },
  { kind: "p", text: "A lead reaches you in one of three ways:" },
  { kind: "list", items: [
    [{ text: "A phone call", bold: true }, " through the number on your ad."],
    [{ text: "A message", bold: true }, " sent through the ad, which you reply to from the Local Services dashboard or app."],
    [{ text: "A booking request,", bold: true }, " where the customer picks a time directly (available in the United States and Canada, and not for health care categories)."],
  ] },
  { kind: "p", text: "From that point the lead is yours to convert. Google's part ends when the customer contacts you. Everything after that, the reply, the visit, the quote and the follow-up, is on you." },

  { kind: "h2", text: "What Google charges you for" },
  { kind: "p", text: [
    "This is the part that changes how you should think about answering the phone. Google's page on ",
    { text: "how leads work", href: "https://support.google.com/localservices/answer/7195435?hl=en" },
    " says, as of October 2026:",
  ] },
  { kind: "list", items: [
    [{ text: "Answered calls", bold: true }, " are charged when they're valid leads based on the conversation."],
    [{ text: "Missed calls", bold: true }, " are charged if the customer stays on the line for more than 20 seconds during your business hours."],
    [{ text: "Messages", bold: true }, " are valid leads, and are typically priced lower than a phone lead."],
    [{ text: "Booking requests", bold: true }, " count as valid leads in the United States and Canada."],
  ] },
  { kind: "p", text: "Read the second line again. A missed call during your hours can cost the same as an answered one. If you're on a ladder, driving or with a customer, the ad still did its job and you still pay for it. The only question is whether anybody gets back to that person before a competitor does." },
  { kind: "h3", text: "Invalid leads and credits" },
  { kind: "p", text: "The same page says Google keeps assessing lead quality for 30 days and credits leads it judges poor quality, duplicate or invalid back to your balance automatically. Credits aren't available for health care categories, tax specialists or advertisers in Europe, the Middle East and Africa. A wrong number or spam call may come back as a credit. A real homeowner you didn't call back won't, because that was a valid lead." },

  { kind: "h2", text: "Why answering fast affects ranking" },
  { kind: "p", text: [
    "Where your profile shows is not just a matter of budget. Google's page on ",
    { text: "ad rankings", href: "https://support.google.com/localservices/answer/7527305?hl=en" },
    " lists three groups of factors:",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "Your bid,", bold: true }, " the most you're willing to pay for a lead (you may pay less)."],
    [{ text: "How likely your ad is to lead to a contact,", bold: true }, " which includes your responsiveness to customer inquiries. Google states plainly that missed calls may hurt your responsiveness."],
    [{ text: "Profile quality,", bold: true }, " which includes your rating, number of reviews, average response time, photos and completed verification checks."],
  ] },
  { kind: "p", text: "So slow replies cost you twice. Once on the lead you paid for and didn't convert, and again on the leads you never see because your profile ranks lower. Google doesn't publish how much each factor weighs, so nobody can tell you that answering faster moves you up a set number of places. What Google does say is that responsiveness and response time are part of the decision." },
  { kind: "h3", text: "Reviews feed the same score" },
  { kind: "p", text: [
    "Rating and number of reviews sit in the same profile quality group. Asking every finished customer for a review is part of running these ads well, not a separate marketing task. The wording and timing are covered in ",
    { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" },
    ".",
  ] },

  { kind: "h2", text: "Answering every call and message" },
  { kind: "p", text: "Most contractors don't miss leads because they don't care. They miss them because the person who answers the phone is also the person doing the work. The fix is a setup where every lead gets a reply, even when nobody is free." },
  { kind: "h3", text: "Missed calls get a text back" },
  { kind: "p", text: [
    "When a call isn't answered, an automatic text goes to the caller within a minute, saying who you are and that someone will call back shortly. The caller now has a reply on their phone instead of a voicemail tone, and a reason to wait. How this works and what to say is covered in ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    ".",
  ] },
  { kind: "aside", text: "Hi, this is Northside Heating. Sorry we missed your call, we're on a job right now. What's going on with the furnace? Reply here and Dan will call you back within the hour." },
  { kind: "p", text: "One limit: this works when the call comes from a mobile number that can receive texts. A landline caller won't see it, which is one more reason to call back quickly rather than rely on the text alone." },
  { kind: "h3", text: "Messages get a first reply fast" },
  { kind: "p", text: "Message leads come in at all hours, often in the evening when homeowners finally sit down. A short first reply that confirms you got the request and asks one useful question (address, photo of the unit, preferred day) keeps the conversation going until someone can quote properly. If your phone system and CRM can't receive these messages directly, at least turn on notifications in the Local Services app so they don't sit unread overnight." },
  { kind: "h3", text: "Someone owns the callback" },
  { kind: "p", text: [
    "The automatic text buys time; it doesn't book the job. Every missed call and message needs a named person who calls back, and a rule for when (within the hour during business hours is a common choice). The reasoning behind replying first is in ",
    { text: "speed to lead", href: "/speed-to-lead/" },
    ".",
  ] },
  { kind: "aside", tone: "tip", text: "Set your business hours in the ad to the hours someone can actually answer. Missed calls are charged during business hours, so listing 7am to 9pm when the phone is only covered until 5pm means paying for evening calls nobody picks up." },

  { kind: "h2", text: "Track ad leads to booked jobs" },
  { kind: "p", text: "The Local Services dashboard shows leads and what you were charged. It doesn't show which of those leads became paid jobs, or how much they were worth. Without that, you can't tell whether the ads are paying for themselves." },
  { kind: "p", text: [
    "The simplest fix is to log every ad lead in the same place as every other lead, tagged with its source, and move it through the same stages: new, contacted, quote sent, won or lost. ",
    { text: "Lead source tracking", href: "/lead-source-tracking/" },
    " explains how to set that up so the source follows the lead to the invoice.",
  ] },
  { kind: "p", text: "Illustration: if a month of ads costs $900 and three of the leads become jobs, each job cost $300 to win. Whether that's good depends on what those jobs are worth to you, which only you know. Without tracking, you only know the $900." },
  { kind: "h3", text: "Quotes sent from ad leads need chasing too" },
  { kind: "p", text: "A lead you answered, visited and quoted can still be lost if the quote sits unanswered. Ad leads are often comparing two or three contractors at once, so the one who follows up politely after a few days is often the one still in the conversation." },

  { kind: "h2", text: "Are the ads right for you?" },
  { kind: "p", text: "Local Services Ads suit businesses in an eligible category that can answer the phone or reply within minutes for most of the working day, and that want calls more than form fills. They're harder to make work if the phone often goes unanswered for hours, because you pay for those calls and your ranking suffers for them." },
  { kind: "p", text: "Before you raise the budget, check the basics: are missed calls getting a text back, is every message answered the same day, and can you see which ad leads became jobs? Fixing those usually matters more than bidding higher." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. Local Services Ads availability, pricing and rules vary by category and country, and Google changes them. Check the current help pages for your area before you set a budget, and use the lightest setup that gets every lead a reply." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Do I pay for missed calls from Local Services Ads?" },
  { kind: "p", text: "According to Google, yes, if the caller stays on the line for more than 20 seconds during your business hours. Shorter missed calls and calls outside your hours are not charged under that rule." },
  { kind: "h3", text: "Does replying faster improve my ranking?" },
  { kind: "p", text: "Google lists responsiveness and average response time among the ranking factors and says missed calls may hurt responsiveness. It doesn't publish how much each factor counts, so treat faster replies as one input, alongside reviews, bid and profile quality." },
  { kind: "h3", text: "Can I dispute a bad lead?" },
  { kind: "p", text: "Google now reviews leads automatically and credits ones it judges poor quality, duplicate or invalid, over a 30-day window. It's worth checking the charge status on your leads page so you know what was credited." },
  { kind: "h3", text: "Should I connect the ads to my CRM?" },
  { kind: "p", text: [
    "It helps, because it puts ad leads in the same pipeline as every other lead and lets missed calls and messages trigger the same replies. If you'd rather have that set up and run for you, you can ",
    { text: "get in touch", href: "/contact-us/" },
    ".",
  ] },
];

export const localServicesAdsFor: Post = {
  slug: "local-services-ads-for-contractors",
  title: "Local Services Ads for Contractors: Answer Every Lead",
  description: "How Local Services Ads work for contractors, what Google charges for, why missed calls hurt your ranking, and how to make sure every lead gets a reply.",
  lede: "You pay for the lead either way. What you earn depends on who answers it.",
  category: "Lead Generation",
  published: "2026-10-31",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/local-services-ads-for-contractors.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
