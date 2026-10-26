import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "how to ask for referrals" (contratistas). La pagina de la FTC citada se
 * comprobo en la fuente el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "Maria's solar panels went live last month. She was pleased with the install, told you so on the day, and paid on time. Two weeks later her neighbor Tom starts looking at solar. He asks Maria who did hers, she can't find your number, and Tom books the first company that answers his search at 9pm." },
  { kind: "p", text: "Most installers and home-service businesses get some work from word of mouth without trying. Very few ask for it on purpose, at the right moment, in a way that makes it easy for the customer to pass your name on. This article covers when to ask for referrals, what to say, whether to offer a reward, and how to know the referrals are actually arriving." },

  { kind: "h2", text: "Why referrals stop at \"thanks\"" },
  { kind: "p", text: "A happy customer is willing to recommend you. That is not the same as recommending you. Between the two sit a few small obstacles, and each one is enough to stop a referral that would otherwise have happened." },
  { kind: "list", items: [
    [{ text: "Nobody asked.", bold: true }, " The technician felt awkward, the office was busy, and the job closed with an invoice and nothing else."],
    [{ text: "The customer can't find you.", bold: true }, " Your number is on a paper invoice in a drawer, and the name on the van was something they half remember."],
    [{ text: "The friend has nothing to act on.", bold: true }, " \"Call the solar people I used\" is not a contact. A link or a number they can forward is."],
    [{ text: "The referral arrives and nobody answers.", bold: true }, " Tom calls once, gets voicemail on a roof day, and moves on. A referred lead is still a lead and still goes cold."],
  ] },
  { kind: "p", text: "None of these needs a referral program with points and tiers. They need one well-timed message, a contact that is easy to share, and a fast reply when the referred person gets in touch." },

  { kind: "h2", text: "When to ask for a referral" },
  { kind: "p", text: "The best moment is when the customer has just seen the result and is still pleased with it. For most jobs that is the day the work is finished or within the following two weeks. After a month, the job is a memory and the ask feels like a sales message." },
  { kind: "h3", text: "On the day, in person" },
  { kind: "p", text: "The person who did the work is the one the customer trusts most. A single sentence at handover is enough: \"If anyone you know is thinking about the same, we'd be glad to help them. I'll send you our details so they're easy to pass on.\" That sentence also sets up the text that follows, so it doesn't arrive out of nowhere." },
  { kind: "h3", text: "Ask after the review, not with it" },
  { kind: "p", text: [
    "Many businesses already send a review request after a job. Asking for a review and a referral in the same message gives the customer two tasks, and usually they do neither. Send the review request first, then the referral ask a week or two later. The article on ",
    { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" },
    " covers the timing and wording of the review request itself.",
  ] },
  { kind: "h3", text: "Moments that come later" },
  { kind: "p", text: "Some jobs give you a second good moment. A solar customer who sees their first full month of generation, an HVAC customer whose system came through the first cold week without a problem, a renovation customer who has just had friends round to see the new kitchen. If your system records those dates, a short message at that point is natural. If it doesn't, the post-job ask is enough." },

  { kind: "h2", text: "What to say" },
  { kind: "p", text: "A referral ask works best when it is short, personal and gives the customer something to forward. It should not read like an advert, and it should not ask for anything the customer has to think about." },
  { kind: "list", items: [
    [{ text: "Their first name", bold: true }, " and the job, so it is clearly about them and not a mass message."],
    [{ text: "A plain thank you", bold: true }, ", without superlatives about your own service."],
    [{ text: "The ask itself", bold: true }, ", in one sentence: if anyone they know needs the same, you'd be glad to help."],
    [{ text: "Something easy to share", bold: true }, ": a link to your quote request page or a contact card they can forward in one tap."],
    [{ text: "Your business name", bold: true }, " and a way to opt out of texts."],
  ] },
  { kind: "aside", text: "Hi Maria, it's Bright Roof Solar. Thanks again for having us out. If a friend or neighbor is thinking about solar, here's a link they can use to request a quote: [link]. Just tell them to mention your name. Reply STOP to opt out." },
  { kind: "p", text: "Note what the message doesn't do. It doesn't ask Maria to make introductions, fill in a form with her friends' details or post anything on social media. Collecting other people's phone numbers from your customer is awkward for them, and contacting someone who never asked to hear from you is a different matter from replying to someone who got in touch." },
  { kind: "h3", text: "Make the shared link do the work" },
  { kind: "p", text: "The link you send should open a page where the friend can request a quote in under a minute, with a field for who referred them. If it opens your home page and leaves them to find the form, some will stop there. A dedicated link per customer is better still, because the referral is recorded without anyone having to ask." },
  { kind: "h3", text: "One reminder at most" },
  { kind: "p", text: "If there's no reply, you can send one more short message later on, for example when the season for that work comes round. After that, stop. A customer who gets a referral ask every month starts to feel like a marketing list, and that costs you the goodwill you were asking them to share." },
  { kind: "aside", tone: "tip", text: "Answer referred quote requests the same way you answer any other: within minutes, by a person or an instant reply that says what happens next. A friend of a happy customer arrives warm, and a slow reply cools them down just as fast as anyone else." },

  { kind: "h2", text: "Rewards and where the rules bite" },
  { kind: "p", text: "You don't need a reward to get referrals. Many customers recommend a business simply because the job went well and the ask was easy. A reward can help, as long as it is simple and you can deliver it without paperwork." },
  { kind: "list", items: [
    "A thank-you card or a small gift card when a referred person books a job.",
    "A credit on the customer's next service visit, which suits HVAC, plumbing and maintenance work.",
    "A discount for the referred friend, so the reward goes to the person making the decision.",
  ] },
  { kind: "p", text: "Pay the reward when the referred job is booked or completed, not when a name is passed on. Otherwise you end up paying for contacts who never needed the work." },
  { kind: "h3", text: "Keep referral rewards away from reviews" },
  { kind: "p", text: [
    "Do not tie a reward to leaving a review. In the US, the FTC's rule on consumer reviews and testimonials, in force since October 21, 2024, bars offering incentives for reviews that come with an express or implied condition that the review be positive (see the ",
    { text: "FTC's questions and answers on the rule", href: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" },
    "). Review platforms have their own policies on top of that. Keeping the review request and the referral reward in separate messages avoids any confusion about what the reward is for.",
  ] },
  { kind: "p", text: "Referral fees can also be restricted in some licensed trades and in some states or countries. If you plan to pay cash for referrals, check the rules where you work before you announce it." },

  { kind: "h2", text: "Track where referrals come from" },
  { kind: "p", text: [
    "If you can't see which jobs came from referrals, you can't tell whether asking is working or who your best advocates are. The minimum is a \"Referred by\" field on every new lead, filled in by the form or by whoever takes the call. The article on ",
    { text: "lead source tracking", href: "/lead-source-tracking/" },
    " explains how to set up sources so they are recorded the same way every time.",
  ] },
  { kind: "h3", text: "What to look at each month" },
  { kind: "list", items: [
    "How many quote requests came in as referrals, and from which customers.",
    "How many of those were answered the same day and how many booked.",
    "Which customers have referred more than once, so you can thank them properly.",
    "Whether rewards that were promised have actually been paid.",
  ] },
  { kind: "p", text: "Illustration: if your records show twelve referred quote requests in a quarter and three of them came from the same customer, that customer deserves a personal thank you, and the type of job they had may be the one your other customers are most willing to talk about." },
  { kind: "h3", text: "Don't forget past customers" },
  { kind: "p", text: [
    "Customers from a year or two ago can still refer, but a cold referral ask out of nowhere rarely lands. Get back in touch for a real reason first, such as a service reminder or a check that everything is working. The article on how to ",
    { text: "reactivate old leads", href: "/reactivate-old-leads/" },
    " covers how to restart a conversation that has gone quiet.",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. Some trades get most of their work from referrals already and need nothing more than a tidy follow-up. Rules on texting, reviews and referral payments vary by country and state. Check what the software you already pay for can do before adding a separate referral tool." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Is it pushy to ask customers for referrals?" },
  { kind: "p", text: "Not if you ask once, at the right moment, and make it easy to say nothing. Most customers who were happy with the work are glad to help. What feels pushy is repeated asks, forms that want their friends' details, or an ask sent before the job is finished." },
  { kind: "h3", text: "Should I ask by text or email?" },
  { kind: "p", text: [
    "Text is usually better, because the customer can forward the link straight from their phone. Make sure you have consent to text and include an opt-out. The article on ",
    { text: "business texting for contractors", href: "/business-texting-for-contractors/" },
    " explains consent and number registration in plain terms.",
  ] },
  { kind: "h3", text: "Can the referral ask be automated?" },
  { kind: "p", text: "Yes. When a job is marked complete, a CRM can schedule the thank-you, the review request and the referral ask on set days, and stop the sequence if the customer replies or raises a problem. The in-person sentence at handover still works best coming from the person who did the job." },
  { kind: "h3", text: "What if the customer had a problem with the job?" },
  { kind: "p", text: "Don't ask until it is resolved. Your system should hold back the referral ask on any job with an open complaint or callback. Asking an unhappy customer to recommend you is worse than not asking at all." },
  { kind: "p", text: [
    "If you'd like the post-job messages, the shareable quote link and the referral tracking set up for you, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const askForReferrals: Post = {
  slug: "ask-for-referrals",
  title: "How to Ask for Referrals as a Contractor",
  description: "When to ask customers for referrals, what to say in the text, whether to offer a reward, and how to track referred quote requests in an installer's CRM.",
  lede: "Happy customers will recommend you. Most just need a reason and a link to share.",
  category: "Lead Generation",
  published: "2026-10-26",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/ask-for-referrals.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
