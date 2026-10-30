import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "post-job follow-up". Unica fuente citada: la politica de contenido de
 * Google sobre resenas, comprobada el 30 de octubre de 2026.
 */
const body: Post["body"] = [
  { kind: "p", text: "Thursday, 4:40pm. The heat pump is running, the customer has signed the completion sheet, and the van is already heading to tomorrow's job. The invoice goes out that evening. Then nothing. Three weeks later the customer notices the outdoor unit is louder than they expected, isn't sure who to ask, and mentions it to a neighbor instead of to you." },
  { kind: "p", text: "Most installers are careful about follow-up before the job, when there's a quote to win. After the job, follow-up tends to stop at the invoice. This article sets out a simple post-job follow-up sequence for installers and home-service businesses: what to send, when, who sends it, and what to leave out." },

  { kind: "h2", text: "Why follow-up stops at the invoice" },
  { kind: "p", text: "It isn't laziness. Once a job is done, the crew is on the next one and the office is chasing new quote requests and payments. Nobody owns the finished customer. Any follow-up that happens depends on someone remembering, and on a busy week nobody does." },
  { kind: "p", text: "That gap costs you in ways that are hard to see. A small problem that a quick check-in would have caught becomes a callback or a complaint. A happy customer who would have left a review never gets asked. A boiler or solar system that needs a service in a year is serviced by whoever reaches the customer first." },
  { kind: "p", text: "The fix is to treat the finished job as a stage with its own steps, just like the quote. A short sequence, written once, that runs for every completed job:" },
  { kind: "list", ordered: true, items: [
    [{ text: "Completion message,", bold: true }, " the same day."],
    [{ text: "Check-in,", bold: true }, " two or three days later."],
    [{ text: "Review request,", bold: true }, " once the check-in comes back fine."],
    [{ text: "Longer follow-up,", bold: true }, " tied to warranty or service dates."],
  ] },

  { kind: "h2", text: "The completion message, same day" },
  { kind: "p", text: "Send a short text or email on the day the job finishes. Its job is to confirm what was done and to give the customer one place to go if something isn't right. It is not a sales message and not a review request." },
  { kind: "h3", text: "What it should include" },
  { kind: "list", items: [
    "What was installed or fixed, in one line, in the customer's words rather than part numbers.",
    "Anything they need to do or watch: a setting on the thermostat, an app to download, a smell or noise that is normal for the first few days.",
    "Who to contact if something seems wrong, and how. One number or one reply channel that someone actually checks.",
    "Where the paperwork is: the warranty, the certificate, the invoice.",
  ] },
  { kind: "aside", text: "Hi Maria, thanks for having us today. Your new heat pump is installed and running. A soft hum from the outdoor unit is normal for the first week. Your warranty and invoice are attached. If anything doesn't seem right, reply to this text and Sam will get back to you the same day." },
  { kind: "p", text: "Keep it separate from payment chasing where you can. A completion message that ends in \"please pay within 7 days\" reads like a bill, and the useful part gets skimmed." },

  { kind: "h2", text: "A check-in two days later" },
  { kind: "p", text: "Two or three days after the job, send one question: is everything working as expected? The timing matters. Soon enough that the customer still remembers the install clearly, late enough that they've used the system and noticed anything odd." },
  { kind: "p", text: "Make the question easy to answer. \"Reply YES if all is good, or tell us what's not right\" gets more replies than an open-ended \"let us know if you have any questions\". Every reply goes to a named person, not a shared inbox that three people assume someone else is reading." },
  { kind: "h3", text: "When the answer is a problem" },
  { kind: "p", text: "This is the point of the check-in. A customer who says \"the app won't connect\" or \"there's a drip under the tank\" on day three is giving you the chance to fix it before it turns into a one-star review or a dispute about the final payment. Call them the same day, book the visit, and note it on the job. Pause the rest of the sequence until it's resolved: nobody should get a review request while their complaint is still open." },
  { kind: "h3", text: "When there's no answer" },
  { kind: "p", text: "Silence usually means things are fine. Don't chase it with a second and third check-in. Note \"no reply\" and let the sequence move on. A customer with a real problem tends to reply to the completion message or call." },

  { kind: "h2", text: "The review request, once" },
  { kind: "p", text: [
    "Once the check-in comes back positive, or a few days pass with no complaint, ask for a review. One message, with a direct link, sent by a person's name. The detail on wording, timing and links is in ",
    { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" },
    ".",
  ] },
  { kind: "p", text: [
    "One rule shapes how this step can work. Google's ",
    { text: "contributed content policy", href: "https://support.google.com/contributionpolicy/answer/7400114" },
    " says businesses must not discourage negative reviews or selectively solicit positive ones, and must not offer incentives such as discounts or free services in exchange for a review. So the review request goes to every customer who finished the sequence, not only the ones who replied with a smiley face. Pausing it for a customer with an open complaint is about fixing the problem first; it is not a filter on who gets asked.",
  ] },
  { kind: "h3", text: "Referrals can wait" },
  { kind: "p", text: [
    "It is tempting to ask for a review and a referral in the same message. Two asks in one text usually means neither gets done. Leave the referral for a later touch, or for the next time you speak in person. ",
    { text: "How to ask for referrals", href: "/ask-for-referrals/" },
    " covers when and how.",
  ] },

  { kind: "h2", text: "The longer follow-up" },
  { kind: "p", text: "After the first week, the job doesn't need regular messages. It needs the right message at the right date. Most installs come with natural dates attached:" },
  { kind: "list", items: [
    "A first service for a boiler, heat pump or air conditioner.",
    "A system check on a solar installation or a battery.",
    "The end of a workmanship warranty, when a quick inspection makes sense.",
    "A season when the same customer may need something else: a gutter clean before winter, an EV charger once they buy the car.",
  ] },
  { kind: "p", text: [
    "Put the date on the job record when you close it, and let the reminder go out on its own. A service reminder sent a year after the install is far easier to act on than one you remember to send eighteen months later. For HVAC specifically, ",
    { text: "HVAC maintenance reminders", href: "/hvac-maintenance-reminders/" },
    " walks through a full reminder sequence.",
  ] },
  { kind: "aside", tone: "tip", text: "Set the service or warranty date before you mark a job as complete, not afterwards. If the date field is empty, the job isn't finished in the system. That one rule is what makes the longer follow-up happen without anyone remembering it." },

  { kind: "h2", text: "Who sends it and how it runs" },
  { kind: "p", text: "A sequence that relies on someone remembering will break on the first busy week. The practical version runs from your job or CRM record: marking a job complete starts the sequence, and each step is sent at its set time unless someone pauses it." },
  { kind: "h3", text: "Automate the sending, not the judgment" },
  { kind: "p", text: [
    "The completion message, the check-in, the review request and the service reminder can all be sent automatically from a CRM or a texting tool. What shouldn't be automated is the response. A reply that says something is wrong needs a person, the same day. That's why every message should come from a business number that a named person monitors; ",
    { text: "business texting for contractors", href: "/business-texting-for-contractors/" },
    " covers how to set that up without using personal phones.",
  ] },
  { kind: "h3", text: "Keep it in the customer's record" },
  { kind: "p", text: "Every message sent and every reply received should sit on the same customer record as the quote and the job. When that customer calls in two years about a new roof or a battery, whoever answers can see what was installed, whether there was a problem, and whether it was fixed." },
  { kind: "p", text: [
    "Tools like ",
    { text: "GoHighLevel", href: "/services/gohighlevel-automation/" },
    " or a job-management CRM with built-in texting can run this kind of sequence. The tool matters less than the trigger: one clear event (job marked complete) that starts the same steps for every customer.",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. A small operation finishing a few jobs a week may do fine with saved message templates and a calendar reminder per job. Use the lightest setup that sends every step for every customer." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How soon after a job should I follow up?" },
  { kind: "p", text: "Send the completion message the same day and the check-in two or three days later. That gives the customer time to use what you installed while the job is still fresh in their mind." },
  { kind: "h3", text: "Should the follow-up be a call or a text?" },
  { kind: "p", text: "A text or email for the routine steps, because the customer can answer when it suits them. A call when the check-in reveals a problem, or for large jobs where a personal call is part of the service you sell." },
  { kind: "h3", text: "Can I only ask happy customers for a review?" },
  { kind: "p", text: "No. Google's policy does not allow selectively soliciting positive reviews. Ask every customer who completes the sequence. Fixing an open complaint before asking is reasonable; skipping customers you think might be unhappy is not." },
  { kind: "h3", text: "How many follow-up messages are too many?" },
  { kind: "p", text: "In the first fortnight, three is plenty: completion, check-in, review request. After that, only messages tied to a real date, like a service or a warranty check. If a message has no reason behind it, don't send it." },
  { kind: "h3", text: "Can someone set this up for me?" },
  { kind: "p", text: [
    "Yes. Setting up post-job sequences inside a CRM is part of what emmvi does for installers. If you'd like to talk it through, ",
    { text: "get in touch", href: "/contact-us/" },
    ".",
  ] },
];

export const postJobFollowUp: Post = {
  slug: "post-job-follow-up",
  title: "Post-Job Follow-Up: What to Send After the Install",
  description: "A post-job follow-up sequence for installers: a same-day completion text, a check-in, one review request and service reminders tied to real dates.",
  lede: "Four messages after the job, sent for every customer, without anyone remembering.",
  category: "Automation",
  published: "2026-10-30",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/post-job-follow-up.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
