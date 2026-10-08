import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "business texting for contractors". Las citas de CTIA y de The Campaign
 * Registry se comprobaron en la fuente el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's 9pm and a homeowner has just texted the number on your van: \"Hi, do you do solar? Can someone come and look at the roof this week?\" The text lands on your personal phone, next to the family group chat. You see it at 6am, reply from the kitchen, and by then they've also texted two other installers whose numbers were on the same search page." },
  { kind: "p", text: "Some customers will always text rather than call, especially after hours. The question for a contractor isn't whether to text, but how to do it from the business instead of from one person's pocket, and how to stay on the right side of the rules while you do it. This article covers the setup, what to send, consent and opt-outs, and registering your number if you text customers in the US." },

  { kind: "h2", text: "Why texting from your own phone breaks" },
  { kind: "p", text: "Most contractors start texting customers from their own mobile, and for a while it works. The problems show up as soon as there is more than one person or more than a handful of jobs." },
  { kind: "list", items: [
    [{ text: "Nobody else can see the conversation.", bold: true }, " If the customer texted you the gate code and you're off sick, the crew doesn't have it. If you sell the business or hire an office manager, years of customer history live on a phone that leaves with you."],
    [{ text: "Texts get answered when you remember.", bold: true }, " A text read on a roof is easy to forget by the time you're back in the van. Nothing reminds you that Ana is still waiting."],
    [{ text: "Nothing connects to the job.", bold: true }, " The photos of the fuse box, the agreed start date and the quote number sit in a thread, not on the customer record. Finding them later means scrolling."],
  ] },
  { kind: "p", text: "None of this means texting is the problem. It means the texts need to belong to the business, the way the phone line and the email address already do." },

  { kind: "h2", text: "One business number, one shared inbox" },
  { kind: "p", text: "Business texting for contractors usually comes down to two things: a number that belongs to the company, and an inbox where everyone who needs to can read and answer it." },
  { kind: "h3", text: "Text-enable the number people already have" },
  { kind: "p", text: "If customers already call your landline or your main business number, some texting providers can enable texting on that same number, so you don't print a second number on the van. Where that isn't possible, a new local number is the usual fallback. Ask your provider which of the two they support before you change anything printed." },
  { kind: "h3", text: "Put every conversation in one place" },
  { kind: "p", text: "The inbox should show every customer thread, who answered last, and whether a reply is still owed. In a CRM, each thread also sits on the customer record, next to their address, their quote and their job history. When the office answers a text at 9am, the installer on site can see the reply without a phone call." },
  { kind: "h3", text: "Decide who answers what" },
  { kind: "p", text: "A shared inbox only helps if someone owns it. A simple rule works for most small offices: whoever is in the office answers new enquiries and booking questions, and the installer assigned to the job answers anything technical about it. Write the rule down, because \"someone will get it\" is how texts sit for a day." },

  { kind: "h2", text: "What contractors should text" },
  { kind: "p", text: "Text is good for short, practical messages that a customer can answer with one thumb. It is poor for anything long, anything that needs a signature, and anything with a price that needs explaining." },
  { kind: "h3", text: "Good uses" },
  { kind: "list", items: [
    [{ text: "The first reply to a new enquiry.", bold: true }, " A quick, specific answer that says who you are and what happens next. If a call is missed, the same idea applies, which is covered in ",
      { text: "how missed call text back works for installers", href: "/missed-call-text-back/" }, "."],
    [{ text: "Photo requests.", bold: true }, " \"Can you send a photo of your electrical panel and the spot for the charger?\" saves a site visit on simple jobs and makes the visit shorter on the rest."],
    [{ text: "Booking and reminders.", bold: true }, " Confirming a visit and reminding the customer the day before. There are worked examples in ",
      { text: "appointment reminder texts for installers", href: "/appointment-reminder-text/" }, "."],
    [{ text: "Quote follow-up.", bold: true }, " A short check-in two or three days after the quote goes out, with one easy question. The full schedule is in ",
      { text: "quote follow up for installers", href: "/quote-follow-up/" }, "."],
    [{ text: "Review requests.", bold: true }, " A message after the job is finished and paid, with a direct link. See ",
      { text: "how to get more Google reviews as an installer", href: "/how-to-get-more-google-reviews/" }, "."],
  ] },
  { kind: "h3", text: "What to keep out of text" },
  { kind: "list", items: [
    "Full quotes and contracts. Send them as a PDF or a link by email, and use the text to say they've been sent.",
    "Bad news about price or delays. Call first, then confirm by text so there is a written record.",
    "Card numbers or bank details. Send a payment link from your invoicing tool instead of asking for numbers in a thread.",
    "Promotions to people who never asked for them. That's a different kind of message with stricter rules, covered below.",
  ] },
  { kind: "aside", text: "\"Hi Ana, it's Northside Solar. Thanks for your message. Could you send a photo of the roof from the street? Someone can come Thursday at 10:00 or Friday at 14:00, which suits you?\"" },

  { kind: "h2", text: "Consent and opt-outs, in plain terms" },
  { kind: "p", text: [
    "In the US, the wireless industry's own guidance on business texting is CTIA's ",
    { text: "Messaging Principles and Best Practices", href: "https://api.ctia.org/wp-content/uploads/2023/05/230523-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf" },
    " (May 2023 edition). Carriers and texting providers build their rules on it, so it's worth knowing the outline even if you never read the whole document.",
  ] },
  { kind: "h3", text: "Three kinds of message" },
  { kind: "list", items: [
    [{ text: "Conversational.", bold: true }, " The customer texts you first and you reply. CTIA's guidance says that when the customer starts the conversation and the business simply responds, \"no additional permission is expected\"."],
    [{ text: "Informational.", bold: true }, " Reminders, booking confirmations and job updates. Per CTIA, the customer needs to agree to receive texts for that purpose when they give you their number, so your booking form or quote request form should say you'll text about the job."],
    [{ text: "Promotional.", bold: true }, " Anything that sells: a seasonal offer, a discount, a \"book your service now\" message. This needs the clearest consent of the three, collected for that purpose."],
  ] },
  { kind: "h3", text: "Honoring STOP" },
  { kind: "p", text: "CTIA's guidance says customers should be able to opt out at any time, that a reply such as STOP, cancel or \"please opt me out\" should be acted on, and that the business should send one final confirmation and then no further messages. Most business texting tools handle STOP automatically. The part they can't handle is the person: if a customer phones and says \"stop texting me\", someone has to mark it on their record." },
  { kind: "aside", tone: "important", text: "This is general guidance, not legal advice and not a recommendation for every business. Texting rules differ by country, and in the US there are federal and state laws on top of carrier rules. If you plan to send promotional texts, check the requirements with your texting provider and, where it matters, a lawyer." },

  { kind: "h2", text: "Registering your number in the US" },
  { kind: "p", text: [
    "If you send texts from software to US customers over an ordinary 10-digit number, carriers expect that number to be registered for business messaging, known as A2P 10DLC. Registration runs through The Campaign Registry, which describes itself as the backbone of the 10DLC ecosystem. A contractor doesn't sign up there directly: according to ",
    { text: "The Campaign Registry's own site", href: "https://www.campaignregistry.com/" },
    ", \"direct registration with TCR is not available for Brands\". Your texting provider submits it for you.",
  ] },
  { kind: "h3", text: "What the provider will ask for" },
  { kind: "list", items: [
    [{ text: "The business identity.", bold: true }, " Legal name, address and tax ID. These need to match your official records, so use the name on your tax documents, not the trading name on the van if it differs."],
    [{ text: "The use case.", bold: true }, " What you'll send: customer care, appointment reminders, marketing, or a mix. Describe it honestly and specifically."],
    [{ text: "Sample messages.", bold: true }, " Two or three real examples, with your business name in them. The first-reply message above is the kind of thing that fits."],
    [{ text: "How customers opt in.", bold: true }, " Usually a line on your website forms that says you'll text about their request, plus how to opt out."],
  ] },
  { kind: "aside", tone: "tip", text: "Start registration before you need it. Approval can take time, and until it goes through, texts from software can be filtered or blocked. Set up the number, submit the registration, and write your messages while you wait." },
  { kind: "p", text: "Outside the US the process is different and often simpler for small senders, but the principles carry over: send from a business number, text people who expect to hear from you, and stop when they ask." },

  { kind: "h2", text: "Setting it up without stopping work" },
  { kind: "p", text: "A contractor can usually get business texting running in stages, without a big switchover day." },
  { kind: "list", ordered: true, items: [
    [{ text: "Pick where texts will live.", bold: true }, " If you already use a CRM or job software, check whether it includes two-way texting before buying a separate tool. One inbox is the point."],
    [{ text: "Text-enable the number and register it.", bold: true }, " Start the US registration on day one, since it takes the longest."],
    [{ text: "Update your forms.", bold: true }, " Add a short consent line to the quote request form and the booking form."],
    [{ text: "Write five messages.", bold: true }, " First reply, photo request, booking confirmation, day-before reminder and quote check-in. Read them out loud; if they sound like a brochure, rewrite them."],
    [{ text: "Move customers over gradually.", bold: true }, " Reply to old threads from your personal phone with one message giving the business number, and answer everything new from the shared inbox."],
  ] },
  { kind: "p", text: [
    "Once the texts sit in a CRM, the useful automation follows naturally: the first reply goes out in under a minute, reminders send themselves, and quotes get chased without anyone remembering. In GoHighLevel that is one inbox, one pipeline and the workflows between them, which is ",
    { text: "how emmvi sets it up for installers", href: "/services/gohighlevel-automation/" },
    ". The same structure works in other tools.",
  ] },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Can I keep texting customers from my own mobile?" },
  { kind: "p", text: "You can, and for a one-person business with a few jobs a month it may be fine. The trouble starts when someone else needs to see the conversation, or when you want reminders and follow-ups to go out automatically. Personal phones can't do either well." },
  { kind: "h3", text: "Do I need permission to reply to a customer who texted me?" },
  { kind: "p", text: "Under CTIA's guidance, replying to a customer who started the conversation is conversational messaging and doesn't need extra permission. Sending them reminders or offers later is a different purpose, which is why your forms should say what you'll text about." },
  { kind: "h3", text: "Is business texting the same as mass texting?" },
  { kind: "p", text: "No. Business texting for contractors is mostly one-to-one: a customer, a job, a thread. Mass texting is sending the same message to a list, which is promotional in most cases and carries stricter consent rules. Many contractors never need it." },
  { kind: "h3", text: "Will registration change my number?" },
  { kind: "p", text: "No. Registration attaches your business and your use case to the number you already text from. It doesn't give you a new number." },
  { kind: "p", text: [
    "If you'd rather have the number, the shared inbox and the first messages set up and tested for you, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const businessTextingForContractors: Post = {
  slug: "business-texting-for-contractors",
  title: "Business Texting for Contractors: Setup and Rules",
  description: "How contractors can text customers from a business number: a shared inbox, what to send and not send, consent and STOP, and US 10DLC registration.",
  lede: "Customers already text you. The texts should belong to the business, not a phone.",
  category: "Automation",
  published: "2026-10-08",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/business-texting-for-contractors.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
