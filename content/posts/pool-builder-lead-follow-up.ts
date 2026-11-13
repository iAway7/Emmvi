import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "pool builder lead follow up". Sin cifras de terceros: no hay ninguna que se
 * pudiera comprobar en una fuente primaria el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It's a Sunday night in February, 9:15pm. A couple have spent the weekend at a friend's house with a pool and decided this is the summer they stop talking about it. They fill in a quote request on two pool builders' websites and a third one they found on a map. One of those builders texts back before they've put the laptop away. The other two call on Tuesday, and get voicemail." },
  { kind: "p", text: "A pool is one of the biggest things a homeowner will buy for their house, and they rarely buy it fast. Between the first request and the day the excavator arrives there's a consult, a design, a quote, financing, a permit and a lot of thinking. This article covers how a pool builder can follow up at each of those stages without anyone keeping the whole list in their head." },

  { kind: "h2", text: "Why pool leads take so long" },
  { kind: "p", text: "Most pool leads don't say no. They say \"we're still thinking\", and then they go quiet for weeks. Knowing why they go quiet tells you what the next message should be." },
  { kind: "list", items: [
    [{ text: "They're comparing builders.", bold: true }, " A homeowner spending this much usually gets more than one design. The builder who shows up first and explains clearly often sets the standard the others are judged against."],
    [{ text: "The money takes time.", bold: true }, " Many buyers need a loan or a home equity line. That's weeks of paperwork that has nothing to do with you, and they won't sign until it's done."],
    [{ text: "The design keeps changing.", bold: true }, " A spa, a ledge, a bigger deck, then a smaller one. Each revision is a new quote and a new chance to drift."],
    [{ text: "The season sets the deadline.", bold: true }, " Someone who wants to swim by July has a real cut-off. Someone who says \"maybe next year\" is still a lead, just a slower one."],
  ] },
  { kind: "p", text: "None of these is a reason to stop following up. Each is a reason for a different message at a different time." },

  { kind: "h2", text: "Reply before the next builder does" },
  { kind: "p", text: [
    "The first reply is the one message the homeowner is actually waiting for. Pool requests come in at night and at weekends, when people are at home looking at their back yard. An automatic text sent within a minute of the form arriving confirms the request, says who you are and offers a time for a consult. Why those first minutes matter, and how to set it up without anyone on call, is covered in ",
    { text: "speed to lead for installers", href: "/speed-to-lead/" },
    ".",
  ] },
  { kind: "aside", text: "Hi Megan, it's Chris from Bluewater Pools. Thanks for the request for an in-ground pool. We can come and look at the yard Thursday at 5pm or Saturday at 10am. Which works best? If you have a photo of the back yard, send it here and we'll take a first look before we come." },
  { kind: "p", text: "It repeats what they asked for, so it reads like a person and not an autoresponder. It offers two real times instead of \"when are you free?\", which turns a back-and-forth into one reply. And it asks for a photo, which starts the conversation before anyone has driven anywhere." },
  { kind: "h3", text: "Calls from the job site" },
  { kind: "p", text: [
    "The person who sells pools is often standing next to one being built. A call that rings out during a concrete pour and gets returned at six has had all afternoon to call someone else. A ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    " sends a short message straight away, so the caller knows they were heard and can reply by text until someone can call properly.",
  ] },

  { kind: "h2", text: "Make the consult worth the drive" },
  { kind: "p", text: "For a pool, the consult is where most of the selling happens. It's also an hour or two of someone's time plus the drive, so it's worth making sure it happens and that it's with the right people." },
  { kind: "list", items: [
    [{ text: "Let them pick the slot.", bold: true }, " A booking link that shows your real calendar avoids three messages to agree on a time."],
    [{ text: "Confirm and remind.", bold: true }, " A confirmation straight away and a reminder the day before, with the address and the name of who's coming. A consult nobody remembered is a wasted afternoon."],
    [{ text: "Ask what changes the price.", bold: true }, " Rough yard size, access for machinery, slope, and whether they want a spa, a deck or a fence too. Most of this can be asked in the confirmation message."],
    [{ text: "Ask who decides.", bold: true }, " If two people are paying for the pool, both should be at the consult. Presenting a design twice is slower than asking once."],
  ] },
  { kind: "h3", text: "Write down their deadline" },
  { kind: "p", text: "At the consult, note the date they want to swim by and anything they mentioned about money or financing. Those two details make every later message about their plan, not about your sales target." },

  { kind: "h2", text: "Follow up on the design and quote" },
  { kind: "p", text: [
    "This is where most pool sales are won or lost. The design and quote go out, the homeowner says they'll look at it, and then nothing happens. A short sequence, decided in advance and sent by the system, means nobody has to remember who was due a message this week. The general version for any trade is in ",
    { text: "quote follow up for installers", href: "/quote-follow-up/" },
    "; this is how it fits a pool build.",
  ] },
  { kind: "list", ordered: true, items: [
    [{ text: "Same day:", bold: true }, " send the design and quote with a short note on what's included and what isn't. \"Pool, coping, equipment and 600 sq ft of deck included, fencing priced separately\" answers half the questions before they're asked."],
    [{ text: "Two or three days later:", bold: true }, " ask if they have questions and offer a short call to walk through the design together."],
    [{ text: "About a week later:", bold: true }, " ask where they are with financing, and whether anything in the design should change. A revision is better news than silence."],
    [{ text: "Two to three weeks later:", bold: true }, " connect it to their deadline. If they want to swim by July, say what the permit and build time mean for when they need to decide."],
    [{ text: "Four to six weeks later:", bold: true }, " a last, easy question: still planning the pool this year, or should you check back in the fall?"],
  ] },
  { kind: "aside", text: "Hi Megan, it's Chris from Bluewater Pools. Any questions on the design for the pool and deck? You mentioned swimming by July: with permits in your area, we'd need to start the paperwork by mid-March to make that. Happy to go through it on a call this week." },
  { kind: "p", text: "Stop the sequence as soon as the homeowner replies. A reply means a person takes over. An automatic \"just checking in\" sent after they've said yes looks careless, and on a purchase this size, careless is expensive." },
  { kind: "aside", tone: "tip", text: "Every time the design changes, send the new quote as a new version with what changed listed at the top. \"Spa removed, deck reduced to 400 sq ft\" saves a homeowner from comparing two PDFs line by line, and keeps the follow-up attached to the latest price." },
  { kind: "p", text: "Illustration: if you send 20 pool quotes over a spring and only chase the ones you remember, the rest depend on the homeowner calling you. With a sequence, all 20 get the same five messages, whether it was a quiet week or the week three pools were being dug. How many you win is yours to measure. A schedule doesn't guarantee it." },

  { kind: "h2", text: "Keep in touch while they decide" },
  { kind: "p", text: "Some pool decisions take a season or more. The homeowner who said \"maybe next year\" in May may be ready in January, when builders start filling their calendars. The question is whether you're the one they think of." },
  { kind: "list", items: [
    [{ text: "Late fall:", bold: true }, " a note to last season's open quotes saying when you start booking builds for next summer."],
    [{ text: "Winter:", bold: true }, " a short check-in on quotes that went quiet, with any changes to your price or your schedule."],
    [{ text: "Early spring:", bold: true }, " a reminder of what permit and build times mean for swimming by summer."],
  ] },
  { kind: "p", text: [
    "The quote that went quiet last year is often the easiest sale this year. They already met you, already saw a design and still have the same back yard. How to bring old leads back without sounding desperate is covered in ",
    { text: "reactivating old leads", href: "/reactivate-old-leads/" },
    ".",
  ] },
  { kind: "h3", text: "After the pool is in" },
  { kind: "p", text: "A finished pool is a source of reviews, referrals and service work. Ask for a review once the customer has swum in it, not on handover day. Send an opening and closing reminder each season if you offer service. The neighbors will ask who built it, and a happy customer with your number saved is the easiest referral there is." },

  { kind: "h2", text: "What to automate, and what not" },
  { kind: "p", text: "Automation is good at the messages that should always go out and are easy to forget: the first reply, consult reminders, quote follow-ups, seasonal notes and review requests. It's bad at anything that needs judgment: a change to the design, a question about price, a worried customer halfway through the build. Those need a person, and the system should hand over the moment the homeowner writes back." },
  { kind: "list", items: [
    [{ text: "Automate:", bold: true }, " the instant reply, booking links, consult reminders, the quote sequence, seasonal check-ins and review requests."],
    [{ text: "Keep personal:", bold: true }, " the consult, presenting the design, talking through price and financing, and any reply to a complaint."],
    [{ text: "Check before you send:", bold: true }, " that each message names the customer and the project, and that it stops when they reply."],
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every pool builder. The right timing depends on your area, your season and the kind of pools you build. Rules on business texting, consent and the hours you can send messages vary by country and state, and so do permit times, so check the ones that apply to you before you switch any sequence on." },
  { kind: "p", text: [
    "If you'd rather have the replies, reminders and quote follow-up set up and running for you, you can ",
    { text: "tell us about your business", href: "/contact-us/" },
    ".",
  ] },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How fast should a pool builder reply to a lead?" },
  { kind: "p", text: "As soon as the request arrives. An automatic text within a minute confirms you have it and offers a consult time. A person can call later the same day, but the homeowner already knows they've been heard." },
  { kind: "h3", text: "How long should I keep following up on a pool quote?" },
  { kind: "p", text: "Five or so messages over about six weeks is a reasonable start. After that, move the quote to seasonal check-ins instead of closing it for good. Pool decisions often slip a season without being lost." },
  { kind: "h3", text: "Should I bring up financing in follow-up messages?" },
  { kind: "p", text: "Ask about it, don't push it. A simple question about where they are with financing tells you whether the delay is money, the design or another builder, and each of those needs a different next step." },
  { kind: "h3", text: "Text or email for pool follow-up?" },
  { kind: "p", text: "Text for short, time-sensitive messages like consult times and reminders. Email for the design, the quote and anything with drawings or line items. A short text pointing to the email often gets it opened sooner." },
];

export const poolBuilderLeadFollow: Post = {
  slug: "pool-builder-lead-follow-up",
  title: "Pool Builder Lead Follow Up: From First Call to Dig Day",
  description:
    "How a pool builder can follow up on every lead: the first reply, the backyard consult, the design and quote, and the long wait before a homeowner signs.",
  lede: "Pools take months to sell. Follow-up that keeps you in the running all season.",
  category: "Lead Generation",
  published: "2026-11-13",
  image: { src: "/blog/pool-builder-lead-follow-up.png", width: 1600, height: 900, alt: "" },
  body,
};
