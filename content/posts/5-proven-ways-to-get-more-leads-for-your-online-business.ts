import type { Post } from "@/lib/posts";

/**
 * Recuperado del backup del WordPress anterior (agosto de 2026) y revisado en
 * septiembre de 2026 con la reescritura de `content/rewrites/`.
 *
 * "5 proven ways" es un titulo de los que prometen resultado. El cuerpo no
 * puede sostener "proven" con cifras que nadie ha medido, asi que lo sostiene
 * con mecanismo: cada punto explica por que funciona y donde falla.
 *
 * La reescritura sola se quedaba en la mitad de palabras del original y
 * perdia los cinco canales de captacion (contenido, anuncios, SEO, redes y
 * recomendaciones), que es lo que Google posiciono. Vuelven como segunda
 * mitad, escritos sin las promesas del original. El slug no se toca: es la
 * URL indexada.
 */
const body: Post["body"] = [
  { kind: "p", text: "There is a specific order to this that people get backwards. If a hundred people land on your site and one of them asks for a quote, doubling the traffic gets you one extra quote request and doubles the bill. Fixing why the other ninety-nine left gets you the same result for nothing, and then the traffic is worth buying." },
  { kind: "p", text: "So before the ads, these five. They are in the order we would do them. After them come the ways to bring in more people, because once the site works, traffic is what it needs." },

  { kind: "h2", text: "1. Answer the quote request immediately" },
  { kind: "p", text: "The single biggest leak in a small business is not the website, it is the hour after the form gets submitted. Someone filling in a contact form at nine in the evening is usually filling in two or three. Whoever answers first is in a different conversation from whoever answers on Tuesday." },
  { kind: "p", text: [
    "An automatic reply that goes out in under a minute is not a substitute for talking to them. It buys you the right to talk to them later, by confirming a real business received it. We cover the wording and the rules in ",
    { text: "our guide to speed to lead", href: "/speed-to-lead/" },
    ".",
  ] },
  { kind: "aside", tone: "important", label: "One limit", text: "An instant reply that pretends to be a human, and then nothing follows for three days, is worse than no reply. It has to be honest about what it is, and something real has to follow it." },

  { kind: "h2", text: "2. Say what you do and where" },
  { kind: "p", text: "A surprising number of service businesses never state their trade and their area in plain words on the page someone lands on. The visitor has to infer it from a gallery and a logo. Most will not bother." },
  { kind: "p", text: "Put the thing you do and the places you do it above the fold, in the words a customer would use rather than the words the industry uses. If you fit heat pumps in Kent, the page should say you fit heat pumps in Kent." },

  { kind: "h2", text: "3. Cut the form down" },
  { kind: "p", text: "Every field you add is a reason to close the tab. Ask for the minimum that lets you have a useful first conversation and get the rest on the phone. Name, a way to reach them, and what they need is usually enough." },
  { kind: "p", text: "Two fields that earn their place in a trade business: postcode, because it tells you immediately whether the job is yours, and a rough description, because it tells you whether to send a quote or book a visit." },

  { kind: "h2", text: "4. Show the work, not adjectives" },
  { kind: "p", text: "Nobody believes professional, reliable or quality-driven. They are what every competitor also says, so they carry no information. What is believable is specific: photographs of jobs you actually did, the name of the town, what the problem was, how long it took." },
  { kind: "p", text: [
    "The same goes for reviews. Three real ones with a first name and a location do more than a five-star badge with no source behind it. If you have few, ",
    { text: "asking for Google reviews", href: "/how-to-get-more-google-reviews/" },
    " at the right moment is a habit worth building.",
  ] },

  { kind: "h2", text: "5. Make the phone number a link" },
  { kind: "p", text: "Most people reading a trade website are on a phone, often with one hand free. If your number is text in an image, or a footer nobody scrolls to, you have added a step between wanting to call and calling. Put it in the header as a tappable link, on every page." },
  { kind: "p", text: "This is the smallest item on the list and frequently the one that moves the most, because it removes friction at the exact moment the visitor has decided." },

  { kind: "h2", text: "What these five do not do" },
  { kind: "p", text: "These five make the visitors you already get more likely to ask for a quote. They do not bring new visitors. If almost nobody is finding the site at all, this list will not change that, and the honest next step is one of the channels below rather than another round of tweaks." },
  { kind: "p", text: "The reason to do them first is that they are cheap, they are permanent, and they make everything you later spend on traffic go further." },

  { kind: "h2", text: "Then bring in more people" },
  { kind: "p", text: "There are five channels that most small businesses end up using. None of them is right for everyone, and each has a cost that is either money or time. Here is what each one involves and where it tends to disappoint." },

  { kind: "h3", text: "Content marketing and blogging" },
  { kind: "p", text: "Writing useful articles about the questions your customers ask brings in people who are searching for exactly that answer. A heating engineer who explains what a boiler service includes, or what a heat pump costs to run, is found by people who are already thinking about the job." },
  { kind: "list", items: [
    [{ text: "Start with real questions.", bold: true }, " The ones you answer on the phone every week are the best topics you have."],
    [{ text: "Offer something worth an email address.", bold: true }, " A checklist or a short guide in exchange for contact details works when it is genuinely useful, not when it is a brochure in disguise."],
    [{ text: "Write case studies.", bold: true }, " A job you did, the problem, the fix and the outcome in plain words is more convincing than any claim."],
  ] },
  { kind: "p", text: "The limit: content is slow. It can take months before an article is found, and it only works if you keep publishing. If you need quote requests this month, this is not the channel." },

  { kind: "h3", text: "Paid ads: search and social" },
  { kind: "p", text: [
    "Paid advertising is the fastest way to put your business in front of people. ",
    { text: "Google Ads", href: "/services/ppc/" },
    " shows you to people searching for your service right now, which is where the intent is strongest. Facebook, Instagram and LinkedIn let you target by location, age, interests or job title, which suits building awareness more than catching someone mid-search.",
  ] },
  { kind: "list", items: [
    [{ text: "Search ads", bold: true }, " work best for services people look for when they need them: a boiler repair, a solar quote, an EV charger fitted."],
    [{ text: "Social ads", bold: true }, " work better with a clear offer and a landing page that says one thing."],
    [{ text: "Retargeting", bold: true }, " shows ads to people who already visited your site. They know who you are, so the ad is a reminder rather than an introduction."],
  ] },
  { kind: "p", text: "The limit: traffic stops the day the budget does, and every click you pay for lands on your site. If the site does not convert, you are paying to show people the problem. That is why the five fixes above come first." },

  { kind: "h3", text: "Search engine optimisation" },
  { kind: "p", text: [
    { text: "SEO", href: "/services/seo/" },
    " is the work of making your site show up when people search, without paying for each visit. For a local service business most of it is unglamorous and specific.",
  ] },
  { kind: "list", items: [
    [{ text: "Keyword research.", bold: true }, " Find the words customers actually type, including the longer ones like \"heat pump installer near Canterbury\"."],
    [{ text: "On-page basics.", bold: true }, " A clear title and description on every page, headings that say what the page is about, a site that works on a phone and loads quickly."],
    [{ text: "Links from other sites.", bold: true }, " A mention from a supplier, a trade body or a local paper tells search engines other people vouch for you."],
  ] },
  { kind: "p", text: "The limit: nobody can promise a ranking, and anyone who does is guessing. Results build over months, and they can move when search engines change how they rank. What you earn does keep working without a monthly ad bill." },

  { kind: "h3", text: "Social media" },
  { kind: "p", text: "Social media is where people who already know you keep hearing from you. Photos of finished jobs, a short video of an install, a customer's comment: this is the kind of thing that gets shared and remembered when someone needs the service later." },
  { kind: "list", items: [
    [{ text: "Post regularly.", bold: true }, " Real jobs, real photos, and the occasional explanation of how something works."],
    [{ text: "Reply to people.", bold: true }, " A comment or a message answered the same day builds more trust than another post."],
    [{ text: "Use lead forms.", bold: true }, " Facebook and Instagram let people send their details without leaving the app, which suits someone scrolling on a phone."],
  ] },
  { kind: "p", text: "The limit: followers are not customers. Social is good for staying in mind and weak at producing quote requests on demand, and a lead form that arrives in an inbox nobody checks is a lead lost." },

  { kind: "h3", text: "Referrals and word of mouth" },
  { kind: "p", text: "People trust a recommendation from someone they know more than any advert. For installers and trades, this is often the channel that already brings in most of the work, and it is the one most businesses do nothing deliberate about." },
  { kind: "list", items: [
    [{ text: "Make referring easy.", bold: true }, " A simple thank you, a discount on the next service, or a small gift for a referral that becomes a job."],
    [{ text: "Ask for reviews.", bold: true }, " Reviews on Google are word of mouth that strangers can read. Ask when the job is finished and the customer is happy, not weeks later."],
    [{ text: "Partner locally.", bold: true }, " Suppliers, builders and trades that do the job before or after yours meet your customers first."],
  ] },
  { kind: "p", text: "The limit: referrals depend on the work being good and on the customer remembering your name. You cannot switch them on quickly, but you can stop leaving them to chance." },

  { kind: "h2", text: "Pick one or two to start" },
  { kind: "p", text: "Most businesses that bring in steady work use a mix of these, but nobody starts with all five. Fix the site first, then pick the channel that fits how your customers look for you: search ads or SEO if they search when they need you, referrals and reviews if they ask a neighbour, social if the work photographs well." },
  { kind: "p", text: "Give it a few months, see what actually brings in quote requests, and put more into that. Whatever you choose, the leads only count if someone answers them quickly and follows up the quote." },
];

export const a5ProvenWaysTo: Post = {
  slug: "5-proven-ways-to-get-more-leads-for-your-online-business",
  title: "5 Ways to Get More Leads Before Buying Traffic",
  description: "Five changes to the site you already have, then the five channels that bring in more people: content, ads, SEO, social and referrals, and the honest limit of each.",
  lede: "Most sites do not have a traffic problem. They have a conversion problem, and more traffic only makes it cost more.",
  category: "Lead Generation",
  // Fecha original de publicacion. No se toca: es parte de lo que se restaura.
  published: "2025-04-15",
  updated: "2026-09-28",
  /** Destacada del WordPress. `alt` vacio a proposito: la imagen va dentro
   *  del enlace, pegada al titular que ya dice lo mismo, y describir una
   *  ilustracion generica ahi solo anade ruido a un lector de pantalla. */
  image: {
    src: "/blog/5-proven-ways-to-get-more-leads-for-your-online-business.png",
    width: 1024,
    height: 683,
    alt: "",
  },
  body,
};
