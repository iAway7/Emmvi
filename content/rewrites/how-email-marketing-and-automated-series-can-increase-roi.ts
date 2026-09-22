import type { Post } from "@/lib/posts";

/**
 * El titulo original promete ROI. El cuerpo no lo sostiene con porcentajes
 * inventados —PRODUCT.md lo prohibe explicitamente— sino explicando como se
 * calcula el retorno de verdad y donde esta el numero que cada uno tiene que
 * medir en su propio negocio.
 */
export const emailRoi: Post = {
  slug: "how-email-marketing-and-automated-series-can-increase-roi",
  title: "How automated email series earn their keep",
  description:
    "The difference between broadcasts and series, the four sequences worth building, and how to work out the return without borrowing anyone else's numbers.",
  lede: "Email is the only channel where you own the list. That is the whole argument, and it is a better one than any open-rate benchmark.",
  category: "Email Marketing",
  published: "2026-09-19",
  body: [
    {
      kind: "p",
      text: "Ignore the industry statistics. You will find a figure claiming every pound spent on email returns thirty-something, and it is an average across retailers with hundreds of thousands of subscribers. It tells you nothing about a plumbing company with four hundred past customers.",
    },
    {
      kind: "p",
      text: "What is true regardless of the size of your list is simpler: an email address is the only marketing asset you keep. A platform can change its rules tomorrow and your reach disappears. A list you own does not.",
    },

    { kind: "h2", text: "Broadcasts and series are different things" },
    {
      kind: "p",
      text: "A broadcast is one message to everybody at once — a newsletter, an offer, an announcement. It goes out when you decide to send it, which in practice means when someone remembers.",
    },
    {
      kind: "p",
      text: "A series is triggered by something the customer did. They enquired, they got a quote, the job finished, they went quiet. The message goes out because of them, not because of your calendar, and it goes out whether or not anyone is thinking about marketing that week.",
    },
    {
      kind: "p",
      text: "Series are where the return is, for a boring reason: they run on the days you are too busy to do marketing, which are the days you most need marketing to be running.",
    },

    { kind: "h2", text: "The four worth building" },
    {
      kind: "list",
      ordered: true,
      items: [
        "The immediate reply. Someone enquires and gets a confirmation within a minute, saying what happens next and roughly when. It is the cheapest one and it reduces the number of people who go and enquire elsewhere while waiting.",
        "The quote follow-up. Two or three messages after a quote goes out, spaced over a fortnight, stopping the moment they reply. Most quotes that go cold go cold because nobody asked twice.",
        "The review request. A few days after the work is done, one message with the review link in it. Not a campaign — one message, asked once, at the moment they are most likely to say yes.",
        "The re-engagement. Past customers who have not heard from you in a year. A service reminder, a seasonal check, something genuinely useful. This is the one that turns a customer list into repeat work.",
      ],
    },
    {
      kind: "aside",
      text: "Every series needs an exit condition. A sequence that keeps chasing someone who already booked is not persistence, it is a reason to unsubscribe.",
    },

    { kind: "h2", text: "Working out your own return" },
    {
      kind: "p",
      text: "You do not need attribution software. For a small service business the sum fits on a napkin, and the only figures in it are yours.",
    },
    {
      kind: "list",
      items: [
        "What the tool costs you per month, plus whatever the setup cost.",
        "How many quotes you send in a month, and what proportion currently get no reply at all.",
        "What one average job is worth to you.",
      ],
    },
    {
      kind: "p",
      text: "If chasing every quote automatically recovers even one job a month that would otherwise have gone quiet, compare that job against the monthly cost. In most trades the answer is obvious in one direction, and if it is obvious in the other direction, you have saved yourself a subscription.",
    },

    { kind: "h2", text: "Where it goes wrong" },
    {
      kind: "p",
      text: "The failure is almost never the writing. It is that the series was built once, worked for a month, and then something upstream changed — a form field renamed, a trigger that no longer fires, a tag that stopped being applied. Nothing announces this. The emails simply stop and everyone assumes they are still going.",
    },
    {
      kind: "p",
      text: "Which is why the useful discipline is small: fewer sequences than you think you need, each one doing something you would notice was missing, and somebody opening the dashboard once a month to confirm the messages still went out.",
    },
  ],
};
