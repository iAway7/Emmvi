import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "handyman lead follow up". El umbral de licencia de la CSLB de California
 * ($1,000 en mano de obra y materiales) se comprobo el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's Thursday, 9pm. A homeowner finally writes down the list that has been on the fridge since summer: a dripping tap, two doors that won't latch, a TV to mount and a fence board that blew off. They send it through your form, then send the same list to two other handymen they found on Google. By Saturday one of you will have the job, and it will usually be whoever answered with a time and a rough idea of the cost." },
  { kind: "p", text: "Handyman work is a stream of small jobs, which makes follow-up both more important and easier to forget. Each lead is worth less than a new roof, so nobody chases it, and a busy week means the form fills up with lists that never get a reply. This article sets out how a handyman business can reply, quote and follow up without spending the evening on the phone." },

  { kind: "h2", text: "What handyman leads look like" },
  { kind: "p", text: "Most handyman leads fall into three groups, and each needs a slightly different reply." },
  { kind: "list", items: [
    [{ text: "The list.", bold: true }, " Several small jobs in one house. The customer wants one person to do all of it in a single visit and is comparing who can come soonest and roughly what it costs."],
    [{ text: "The one urgent thing.", bold: true }, " A leaking pipe under the sink, a door that won't lock, a gutter hanging off. The customer books whoever confirms a visit first."],
    [{ text: "The repeat client.", bold: true }, " Landlords, property managers and real estate agents who send work every few weeks. They care less about price and more about whether you reply and turn up when you say."],
  ] },
  { kind: "p", text: "The third group is where a handyman business makes steady money, and it is also the group that leaves quietly when replies get slow. Losing one homeowner's list is a bad week. Losing a property manager is a bad year." },

  { kind: "h2", text: "Reply first, price second" },
  { kind: "p", text: [
    "The first reply should arrive within minutes, even if it doesn't contain a price yet. The general case for this is in ",
    { text: "speed to lead for installers", href: "/speed-to-lead/" },
    ", and it applies to handyman work without changes: a customer who sent the same list to three people tends to book the first one who gives them a next step.",
  ] },
  { kind: "p", text: "That first reply can be automatic. It has to show that someone read the request, ask for what you need to price it, and say when a person will be back in touch." },
  { kind: "aside", text: "Hi Emma, it's Rob from Hillside Handyman. Thanks for the list. Could you send a photo of each item, especially the fence and the wall where the TV goes? I'll reply with a price and two visit times by 10am tomorrow." },
  { kind: "h3", text: "Missed calls from the top of a ladder" },
  { kind: "p", text: [
    "A handyman with a drill in one hand doesn't answer the phone. A text sent automatically after every missed call, set up as described in ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    ", tells the caller you saw it and asks what they need. Someone still has to read the reply, so the message should promise a callback time you can keep, such as \"by 5pm\", not \"right away\".",
  ] },

  { kind: "h2", text: "Quote the list, not the trip" },
  { kind: "p", text: "Driving out to look at every list is how a week disappears. Photos solve most of it. A clear photo of a dripping tap or a loose board is usually enough to give a price, and the ones that aren't clear tell you which item needs a look in person." },
  { kind: "h3", text: "Make the price easy to compare" },
  { kind: "p", text: "Customers comparing three handymen line up the quotes side by side. Make yours the easiest one to read:" },
  { kind: "list", items: [
    [{ text: "One line per job", bold: true }, ", so the customer can drop the TV mount and keep the rest without asking for a new quote."],
    [{ text: "Your minimum charge or visit fee", bold: true }, ", stated up front. A customer who finds out about it on the invoice won't call again."],
    [{ text: "What's included and what isn't", bold: true }, ": materials, disposal, and whether you bring the parts or the customer buys them."],
    [{ text: "How long the visit takes", bold: true }, ", so they know whether to take the morning off."],
  ] },
  { kind: "h3", text: "Know where your license stops" },
  { kind: "p", text: [
    "Small jobs are not always unlicensed jobs. In California, for example, the Contractors State License Board ",
    { text: "says a license is required", href: "https://www.cslb.ca.gov/Consumers/Hire_A_Contractor/What_Kind_Of_Contractor.aspx" },
    " for contracts valued at $1,000 or more in combined labor and materials, and for work that needs a building permit. Other states and countries set different limits. If a list adds up past the limit where you work, or one item needs a permit or a licensed electrician or plumber, the quote should say so plainly instead of quietly splitting the job.",
  ] },

  { kind: "h2", text: "Follow up when you're booked out" },
  { kind: "p", text: "Busy handymen are often booked two or three weeks ahead. That's good news, but it creates a gap where leads go cold. The customer accepted a quote, nothing happens for ten days, and by the time you text to confirm they've asked someone else." },
  { kind: "h3", text: "A short sequence for quotes and waits" },
  { kind: "p", text: [
    "Two kinds of follow-up cover most of it. One chases quotes that haven't been answered, as set out in ",
    { text: "quote follow up for installers", href: "/quote-follow-up/" },
    ". The other keeps a booked customer informed while they wait.",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "Day 2 after the quote: a check.", bold: true }, " Ask if anything on the list needs changing, and offer the next two open dates."],
    [{ text: "Day 6 or 7: something useful.", bold: true }, " A photo of a similar job you finished, or a note that you can add an item they mentioned in passing."],
    [{ text: "Day 12 to 14: a direct question.", bold: true }, " Ask whether they'd like to book or whether it's sorted. Accept either answer."],
  ] },
  { kind: "p", text: "For booked jobs, a confirmation the day it's booked, a reminder two days before, and a text on the morning with an arrival window are usually enough. Each one gives the customer a chance to reply if their plans have changed." },
  { kind: "aside", text: "Hi Emma, Rob from Hillside Handyman. Just confirming Tuesday the 3rd, between 9am and 11am, for the tap, the two doors and the fence board. Reply here if anything has changed." },
  { kind: "aside", tone: "tip", text: "Keep a short list of customers who said they're flexible on dates. When a job cancels, text them first. A gap in the diary gets filled, and the customer gets their list done early." },

  { kind: "h2", text: "Keep the customer for the next list" },
  { kind: "p", text: "A homeowner who had a good visit will have another list in a few months. Whether they send it to you depends on whether they can find your number and whether they remember your name." },
  { kind: "list", items: [
    [{ text: "A check-in a few days after the job", bold: true }, ", asking whether everything is still working. It catches a door that has started sticking again before it becomes a bad review."],
    [{ text: "A review request in the same thread", bold: true }, ", sent while the job is fresh. The method is in ", { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" }, "."],
    [{ text: "A seasonal reminder", bold: true }, ", such as gutters in autumn or a deck check in spring, to customers who said yes to hearing from you."],
  ] },
  { kind: "p", text: "For landlords and property managers, the follow-up is different: they want a fast reply, a clear invoice with the property address on it, and photos of the finished work they can forward to the owner. Make those part of every job for them and they have no reason to try anyone else." },
  { kind: "p", text: "Illustration: a handyman who finishes 25 visits a month and sends each customer one check-in and one seasonal reminder sends 50 messages a month that nobody has to remember. How many become new lists depends on your area and your prices." },

  { kind: "h2", text: "What to automate, and what not" },
  { kind: "p", text: "Automation should take the messages that always go out and are easy to forget. People should keep anything that needs judgement." },
  { kind: "list", items: [
    [{ text: "Automate:", bold: true }, " the first reply to forms and missed calls, the request for photos, quote follow-ups, booking confirmations and reminders, the post-job check-in, review requests and seasonal reminders."],
    [{ text: "Keep human:", bold: true }, " the price itself, anything that might need a license or permit, complaints, and any reply that says something unexpected."],
  ] },
  { kind: "p", text: "Every automatic message should stop the moment the customer replies, and every reply should land in one place you check the same day. A simple pipeline in a CRM, with stages such as new, quoted, booked and done, shows at a glance which lists are waiting on you." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every handyman business. Your volume, the licensing rules where you work and the texting consent rules that apply to your customers will change what makes sense. Check those before switching on any automated messages." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How fast should a handyman reply to a lead?" },
  { kind: "p", text: "Within minutes for the first reply, even if it's automatic and only asks for photos. The price can follow the same day or the next morning, as long as the first message says when." },
  { kind: "h3", text: "Should I quote from photos?" },
  { kind: "p", text: "For most small jobs, yes. Quote what the photos show clearly, say which items need a look in person, and note that the price may change if the job turns out different on the day." },
  { kind: "h3", text: "How many times should I follow up on a quote?" },
  { kind: "p", text: "Two or three times over about two weeks, each with a reason: a check on the list, something useful, then a direct question. Stop when the customer says no." },
  { kind: "h3", text: "Will automated texts put off older customers?" },
  { kind: "p", text: [
    "Not if they're short, use the customer's name and their job, and stop when they reply. Write them the way you'd text a customer yourself. If you'd like this set up for your handyman business, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const handymanLeadFollowUp: Post = {
  slug: "handyman-lead-follow-up",
  title: "Handyman Lead Follow Up: From the List to the Next Visit",
  description: "How a handyman business can follow up on leads: a reply in minutes, quotes from photos, a short sequence while booked out, and a reason to call again.",
  lede: "Small jobs, long lists, busy weeks. How to reply, quote and keep the next one.",
  category: "Lead Generation",
  published: "2026-11-21",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/handyman-lead-follow-up.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
