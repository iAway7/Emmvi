import type { Post } from "@/lib/posts";

/**
 * "5 proven ways" es un titulo de los que prometen resultado. El cuerpo no
 * puede sostener "proven" con cifras que nadie ha medido, asi que lo sostiene
 * con mecanismo: cada una de las cinco explica por que funciona y donde falla.
 * El slug se queda como esta porque es la URL indexada; el titulo visible no
 * promete lo que no se puede defender.
 */
export const moreLeads: Post = {
  slug: "5-proven-ways-to-get-more-leads-for-your-online-business",
  title: "Five ways to get more leads out of the website you already have",
  description:
    "Before spending on ads, five changes to the site you already own — and the honest limit of each one.",
  lede: "Most sites do not have a traffic problem. They have a conversion problem, and buying more traffic makes it more expensive rather than fixing it.",
  category: "Lead Generation",
  published: "2026-09-19",
  body: [
    {
      kind: "p",
      text: "There is a specific order to this that people get backwards. If a hundred people land on your site and one of them enquires, doubling the traffic gets you one extra enquiry and doubles the bill. Fixing why the other ninety-nine left gets you the same result for nothing, and then the traffic is worth buying.",
    },
    {
      kind: "p",
      text: "So before the ads, these five. They are in the order we would do them.",
    },

    { kind: "h2", text: "1. Answer the enquiry immediately" },
    {
      kind: "p",
      text: "The single biggest leak in a small business is not the website, it is the hour after the form gets submitted. Someone filling in a contact form at nine in the evening is usually filling in two or three. Whoever answers first is in a different conversation from whoever answers on Tuesday.",
    },
    {
      kind: "p",
      text: "An automatic reply that goes out in under a minute is not a substitute for talking to them. It buys you the right to talk to them later, by confirming a real business received it.",
    },
    {
      kind: "aside",
      text: "The limit: an instant reply that pretends to be a human, and then nothing follows for three days, is worse than no reply. It has to be honest about what it is, and something real has to follow it.",
    },

    { kind: "h2", text: "2. Say what you do and where you do it" },
    {
      kind: "p",
      text: "A surprising number of service businesses never state their trade and their area in plain words on the page someone lands on. The visitor has to infer it from a gallery and a logo. Most will not bother.",
    },
    {
      kind: "p",
      text: "Put the thing you do and the places you do it above the fold, in the words a customer would use rather than the words the industry uses. If you fit heat pumps in Kent, the page should say you fit heat pumps in Kent.",
    },

    { kind: "h2", text: "3. Cut the form down" },
    {
      kind: "p",
      text: "Every field you add is a reason to close the tab. Ask for the minimum that lets you have a useful first conversation and get the rest on the phone. Name, a way to reach them, and what they need is usually enough.",
    },
    {
      kind: "p",
      text: "Two fields that earn their place in a trade business: postcode, because it tells you immediately whether the job is yours, and a rough description, because it tells you whether to send a quote or book a visit.",
    },

    { kind: "h2", text: "4. Show the work, not the adjectives" },
    {
      kind: "p",
      text: "Nobody believes professional, reliable or quality-driven. They are what every competitor also says, so they carry no information. What is believable is specific: photographs of jobs you actually did, the name of the town, what the problem was, how long it took.",
    },
    {
      kind: "p",
      text: "The same goes for reviews. Three real ones with a first name and a location do more than a five-star badge with no source behind it.",
    },

    { kind: "h2", text: "5. Make the phone number a link" },
    {
      kind: "p",
      text: "Most people reading a trade website are on a phone, often with one hand free. If your number is text in an image, or a footer nobody scrolls to, you have added a step between wanting to call and calling. Put it in the header as a tappable link, on every page.",
    },
    {
      kind: "p",
      text: "This is the smallest item on the list and frequently the one that moves the most, because it removes friction at the exact moment the visitor has decided.",
    },

    { kind: "h2", text: "What none of this does" },
    {
      kind: "p",
      text: "These five make the visitors you already get more likely to become enquiries. They do not bring new visitors. If almost nobody is finding the site at all, this list will not change that, and the honest next step is search or advertising rather than another round of tweaks.",
    },
    {
      kind: "p",
      text: "The reason to do them first is that they are cheap, they are permanent, and they make every pound you later spend on traffic go further.",
    },
  ],
};
