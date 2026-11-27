import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "tree service lead follow up". Las recomendaciones de NC State Extension y
 * la advertencia de ISA sobre la certificacion se comprobaron el dia de
 * publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's Sunday, 7pm. The wind dropped an hour ago and a homeowner is standing in the yard looking at a split oak leaning toward the garage. They search for tree service near them, call the first number, get voicemail, call the second, get voicemail again, and fill in the form on the third website. Whoever replies tonight with a clear next step usually gets the job. The other two find out on Tuesday, when they call back and hear it's already done." },
  { kind: "p", text: "Tree work is hard to follow up on for an ordinary reason: the people who could answer are in a bucket truck or up a tree with a saw running. This article sets out how a tree service can reply fast, quote without driving to every address, chase the estimates that go quiet and keep the customer for the next job." },

  { kind: "h2", text: "What tree service leads look like" },
  { kind: "p", text: "Most tree service leads fall into four groups. Each needs a different first reply, so it helps to recognize them from the first message." },
  { kind: "list", items: [
    [{ text: "The urgent call.", bold: true }, " A limb on the roof, a tree across the driveway, something leaning after a storm. The customer wants to know who can come and when, and will book the first company that gives a time."],
    [{ text: "The removal quote.", bold: true }, " A dead or unwanted tree, no emergency. The customer is collecting two or three prices and comparing them over a week or two."],
    [{ text: "The pruning or maintenance job.", bold: true }, " Thinning, crown lifting, clearing branches off the roof line. Smaller tickets, flexible timing, and often the start of a yearly relationship."],
    [{ text: "The property manager or HOA.", bold: true }, " Several trees, several properties, approvals from someone else. They decide slowly but send work for years if you're reliable."],
  ] },
  { kind: "p", text: "The mistake is treating all four the same way. The urgent call needs a time today. The removal quote needs a price and a reason to pick you. The HOA needs paperwork. A single \"thanks, we'll be in touch\" fits none of them." },

  { kind: "h2", text: "Reply in minutes, even from the tree" },
  { kind: "p", text: "Nobody on a climb is going to answer the phone, and nobody should. What can happen is that every call, form and message gets an automatic first reply that shows someone read it and asks for what you need next." },
  { kind: "h3", text: "Turn missed calls into a text" },
  { kind: "p", text: [
    "Most urgent tree leads come in by phone. A text sent automatically after each missed call, set up as described in ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    ", tells the caller you saw it and gives them something to do while they wait: send a photo. The message should promise a callback time the crew can actually keep, such as \"by 6pm\", because a promise of \"right away\" that turns into two hours is worse than no promise.",
  ] },
  { kind: "aside", text: "Hi Mark, it's Dana from Ridgeline Tree Care. Sorry we missed you, the crew is on a job. If a tree or limb is on a house or a power line, call 911 or your utility first. Otherwise, could you send a photo of the tree and what's under it? We'll call you back by 6pm today." },
  { kind: "h3", text: "Ask the questions that sort the lead" },
  { kind: "p", text: "The first reply, automatic or not, should ask three things: is anything damaged or blocked right now, roughly how big is the tree, and what's under or near it (a house, a fence, a pool, wires). Those answers tell whoever reads them whether this is a call to return tonight or a quote to send tomorrow." },

  { kind: "h2", text: "Quote from photos, visit when needed" },
  { kind: "p", text: "Driving out to every removal request is how a tree service loses its evenings. Photos settle a good share of quotes, and the ones they don't settle tell you which addresses need a look in person." },
  { kind: "aside", tone: "tip", text: "Ask for two photos, not one: the whole tree from far enough back to see the top, and what's under it. The first shows size and condition, the second shows access and risk, which is usually where the price comes from." },
  { kind: "h3", text: "Make the quote easy to compare" },
  { kind: "p", text: "Customers lay tree quotes side by side, and a single number with no breakdown loses to one that explains itself. Spell out:" },
  { kind: "list", items: [
    [{ text: "What's included:", bold: true }, " removal to ground level, stump grinding, hauling the wood and chips, or leaving the logs."],
    [{ text: "What's separate:", bold: true }, " a stump left in place is the most common surprise. Price it as its own line so the customer can choose."],
    [{ text: "How the work is done:", bold: true }, " climbing, crane or bucket, and whether anything needs protecting on the ground."],
    [{ text: "When you can do it,", bold: true }, " even as a rough week. A good price with no date loses to a fair price for Thursday."],
  ] },
  { kind: "h3", text: "Put the proof in the quote" },
  { kind: "p", text: [
    "Homeowners are told to check. NC State Extension's guide on ",
    { text: "how to hire a tree care professional", href: "https://content.ces.ncsu.edu/how-to-hire-a-tree-care-professional" },
    " advises asking for a certificate of insurance, asking about workers' compensation, calling the insurer to confirm the policy is current, and getting estimates from more than one arborist. A quote that already says what insurance you carry and how to verify it answers the question before it's asked.",
  ] },
  { kind: "p", text: [
    "If someone on the crew holds an ISA credential, say so and say who. Keep it accurate: ISA's own page on ",
    { text: "why hire an arborist", href: "https://wwv.isa-arbor.com/publicOutreach/whyHireCertifiedArborist/index" },
    " notes that certification cannot guarantee quality performance, so present it as training, not as a promise about the result.",
  ] },

  { kind: "h2", text: "Chase the quotes that go quiet" },
  { kind: "p", text: "Most removal quotes don't get a no. They get silence. The customer is waiting for the other two prices, talking to a neighbor about the shared fence, or simply busy. Silence is not a decision, and a tree service that reads it as one hands the job to whoever asked again." },
  { kind: "h3", text: "A short sequence with a reason each time" },
  { kind: "p", text: [
    "The general approach is in ",
    { text: "quote follow up for installers", href: "/quote-follow-up/" },
    ", and the wording for each message is in ",
    { text: "estimate follow up texts", href: "/estimate-follow-up-text/" },
    ". For tree work, three touches over about two weeks cover most of it:",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "Two days after the quote:", bold: true }, " check it arrived and offer to answer questions, especially about the stump or the cleanup."],
    [{ text: "About a week later:", bold: true }, " something useful, such as an opening on the schedule or a note that winter is a quieter time to take a tree down."],
    [{ text: "About two weeks later:", bold: true }, " a direct question. Still interested, or should the quote be closed? A clear no is better than an open maybe."],
  ] },
  { kind: "aside", text: "Hi Laura, it's Dana from Ridgeline. Just checking the quote for the maple came through. We have a crew free the week of the 9th if that suits. Happy to price the stump separately if you'd rather keep it." },
  { kind: "p", text: "The sequence should stop by itself the moment the customer replies, books or says no. Nothing puts a customer off faster than a cheerful reminder the day after they've signed." },

  { kind: "h2", text: "After a storm, sort before you call" },
  { kind: "p", text: "A storm turns a normal week of leads into a day's worth in an hour. That's when follow-up breaks, because the crew is out and the phone keeps ringing. It's also when homeowners are most wary: the NC State guide warns about door-to-door solicitors after storms and tells homeowners never to pay in advance." },
  { kind: "h3", text: "Triage the list, then work it" },
  { kind: "list", items: [
    [{ text: "First:", bold: true }, " anything on a house, a car or blocking access. Call these back the same day."],
    [{ text: "Second:", bold: true }, " leaning or hung-up trees that could fall. Give a visit window, even if it's two days out."],
    [{ text: "Third:", bold: true }, " cleanup of fallen limbs in the yard. Send a price from photos and a date."],
  ] },
  { kind: "p", text: "Every lead in the list should get a reply that says which group it's in and when to expect you. A customer told \"Wednesday morning\" will usually wait. A customer told nothing will call the next number." },
  { kind: "h3", text: "Don't sound like the door-knockers" },
  { kind: "p", text: "After a storm, pressure is a red flag to homeowners. Leave out \"today only\" prices and demands for deposits by text. Name the business, give a real callback time and send a written quote. Those details are what separates you from the truck that showed up uninvited." },

  { kind: "h2", text: "Keep the customer for the next job" },
  { kind: "p", text: [
    "Tree work repeats. The stump left in place, the other two trees the customer mentioned, pruning in a year or two, the neighbor who watched the crew all morning. A short message after the job, as set out in ",
    { text: "post-job follow up", href: "/post-job-follow-up/" },
    ", can ask for a review and offer the stump or the next pruning in the same text. A dated reminder in the CRM for the pruning visit means nobody has to remember it.",
  ] },
  { kind: "p", text: [
    "None of this needs special software, but it does need one place where every lead, quote and reminder lives. Most of it can be set up in a CRM with automations, such as the ",
    { text: "GoHighLevel setups emmvi builds", href: "/services/gohighlevel-automation/" },
    ", or done by hand with a shared inbox and a calendar if the volume is low.",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. How fast you can promise a callback, how many follow-ups make sense and which tools to use depend on your crew, your area and how many leads you get. Check insurance, licensing and safety rules where you work: they vary by state and country." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How fast should a tree service reply to a lead?" },
  { kind: "p", text: "Within minutes for the first reply, which can be automatic and ask for photos. A person should follow up the same day for anything urgent, and by the next working day for quotes, as long as the first message says when." },
  { kind: "h3", text: "Can I quote a tree removal from photos?" },
  { kind: "p", text: "Often, yes, if the photos show the whole tree and what's around it. Say which items the photos don't settle, and note that the price may change if access or the tree's condition turns out different on the day." },
  { kind: "h3", text: "How many times should I follow up on a tree quote?" },
  { kind: "p", text: "Two or three times over about two weeks, each with a reason: check it arrived, offer something useful, then ask directly. Stop as soon as the customer answers." },
  { kind: "h3", text: "Should I mention insurance in the quote?" },
  { kind: "p", text: [
    "Yes. Homeowners are advised to ask for it and verify it, so stating your coverage and how to check it saves a round of questions. If you'd like the replies, quotes and follow-ups set up for your tree service, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const treeServiceLeadFollow: Post = {
  slug: "tree-service-lead-follow-up",
  title: "Tree Service Lead Follow Up: Quotes, Storms, Stumps",
  description: "How a tree service can follow up on leads: a reply in minutes, quotes from photos, a short chase for quiet estimates and a plan for the day after a storm.",
  lede: "Removals, storm calls and pruning quotes. How to reply first and keep the job.",
  category: "Lead Generation",
  published: "2026-11-27",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/tree-service-lead-follow-up.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
