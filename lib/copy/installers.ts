/**
 * El texto de /installers, la pagina para instaladores. La plantilla que lo
 * pinta es components/pages/installers.tsx.
 *
 * Solo en ingles: es la pagina de destino del outreach en frio, que sale en
 * ingles a clientes del Reino Unido y de EE. UU. Si algun dia se traduce, se
 * añade un objeto `es` del mismo tipo y la ruta a `translatedPaths` en
 * lib/i18n.ts, como hizo la home.
 *
 * Viene del borrador "emmvi Installers.html" (2026-09-28). Lo que cambio al
 * portarlo:
 *
 * - **Los testimonios son los reales de la home**, no los tres huecos
 *   punteados del borrador. Se presentan como lo que son: clientes de web y
 *   automatizacion en otros sectores, no instaladores (PRODUCT.md, principio 4).
 * - **Los logos son la cinta de clientes** de la home, que ya son los diez con
 *   permiso que el borrador dejaba como "Client logos, with permission (10)".
 * - **La foto de quien atiende la llamada no existe.** En su lugar va la
 *   escena del calendario de la home, que cuenta lo mismo: que pasa en esos
 *   30 minutos.
 */

export type InstallersCopy = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    cta: string;
    note: string;
    /** El panel "lo que ve tu cliente". */
    panel: {
      caption: string;
      time: string;
      requestLabel: string;
      request: string;
      sent: string;
      replyLabel: string;
      reply: string;
      disclaimer: string;
      /** Lo que oye un lector de pantalla del panel entero. */
      label: string;
    };
  };
  paths: { lead: string; clinics: string; agencies: string };
  noAds: {
    eyebrow: string;
    title: string;
    lede: string;
    rows: readonly { title: string; body: string }[];
  };
  how: {
    eyebrow: string;
    title: string;
    lede: string;
    steps: readonly {
      when: string;
      title: string;
      body: string;
      /** Si hay burbuja, el cuerpo va debajo de ella como nota. */
      bubble?: string;
    }[];
    /** La tarjeta de estado pegajosa (components/quote-timeline.tsx). */
    card: { label: string; done: string; now: string; step: string; of: string };
  };
  setup: {
    eyebrow: string;
    title: string;
    items: readonly { icon: SetupIcon; title: string; body: string }[];
    note: string;
  };
  clients: { eyebrow: string; title: string; lede: string };
  process: {
    eyebrow: string;
    title: string;
    steps: readonly { title: string; body: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: readonly { q: string; a: string }[];
  };
  book: { title: string; lede: string; cta: string; or: string; scene: string };
};

export type SetupIcon = "form" | "reply" | "followup" | "list" | "review" | "report";

export const installersCopy: InstallersCopy = {
  meta: {
    title: "For installers",
    description:
      "Every quote request answered in under a minute. Every quote chased. The website and the data stay yours.",
  },
  hero: {
    eyebrow: "For solar, EV charger and home installers",
    title: "Answer every quote request first.",
    lede:
      "When someone fills in your form at 9pm, they get a reply in under a minute, in your words. Then every quote gets chased, so the job doesn't go to whoever picked up.",
    cta: "Book a 30-minute call",
    note: "We don't sell ads. We build the website and the follow-up behind it.",
    panel: {
      caption: "What your customer sees",
      time: "Tue 21:47",
      requestLabel: "Quote request · your website",
      request: "Hi, after a price for an EV charger. Semi-detached, parking on the drive.",
      sent: "21:47 · reply sent",
      replyLabel: "Text from your business",
      reply:
        "Thanks Mark, it's Dan. I'm on a job till late but I've got your request. Can I ring you tomorrow at 9 to ask a couple of things about the drive?",
      disclaimer:
        "Example. You write the real messages with us and approve each one before it goes live.",
      label:
        "Example of what your customer receives: a quote request sent at 21:47 and a text reply from your business a moment later.",
    },
  },
  paths: {
    lead: "Not an installer?",
    clinics: "We also work with clinics",
    agencies: "And with agencies",
  },
  noAds: {
    eyebrow: "Before you read on",
    title: "We don't sell you ads.",
    lede:
      "You already get quote requests. You lose some of them because you're on a roof when they come in. That's the part we fix.",
    rows: [
      {
        title: "No monthly ad budget",
        body: "We don't run your Google or Facebook ads, and we won't ask you to start.",
      },
      {
        title: "No software to learn on your own",
        body: "We set it up, show you the two screens you need, and fix it if something breaks.",
      },
      {
        title: "No replies that sound like a robot",
        body: "Every message is written in your words. Nothing goes out that you haven't read.",
      },
      {
        title: "No promised percentages",
        body: "We promise the reply and the follow-up, because the system does those. Winning the job is still yours.",
      },
    ],
  },
  how: {
    eyebrow: "What happens, step by step",
    title: "One quote request, start to finish.",
    lede:
      "The times are an example. How long it waits before each follow-up is agreed with you.",
    steps: [
      {
        when: "21:47",
        title: "The request comes in",
        body: "From your website form. It asks what the job is, the postcode and the property, so you're not ringing back to ask.",
      },
      {
        when: "21:47",
        title: "The customer gets a reply",
        bubble: "Thanks Mark, it's Dan. I've got your request. Can I ring you tomorrow at 9?",
        body: "By text and email, from your business name.",
      },
      {
        when: "21:48",
        title: "You get it on your phone",
        body: "Name, number, job and postcode in one notification. Read it on the sofa or leave it till morning.",
      },
      {
        when: "Wed",
        title: "It's on your list of jobs",
        body: "Every request in one place, with who's dealing with it. Not split between Gmail, WhatsApp and missed calls.",
      },
      {
        when: "Day 3",
        title: "The quote gets chased",
        bubble:
          "Hi Mark, just checking the quote came through OK. Any questions, reply here and I'll get back to you.",
        body: "If they've already replied, it doesn't send.",
      },
      {
        when: "Day 10",
        title: "Once more, then it stops",
        body: "A second follow-up. After that nobody gets chased forever, and you get a note to ring them if you want to.",
      },
      {
        when: "Job done",
        title: "The review gets asked for",
        body: "When you mark the job finished, the customer gets a link to leave a review. You don't have to remember.",
      },
    ],
    card: {
      label: "Mark's quote request",
      done: "Job done. Review requested.",
      now: "Now",
      step: "Step",
      of: "of",
    },
  },
  setup: {
    eyebrow: "The list, without jargon",
    title: "What we set up.",
    items: [
      {
        icon: "form",
        title: "A website with a proper quote form",
        body: "New, or your current one fixed. The form asks what you need to price the job.",
      },
      {
        icon: "reply",
        title: "The reply in under a minute",
        body: "Text and email, day or night, in your words.",
      },
      {
        icon: "followup",
        title: "Quote follow-ups",
        body: "Two, on the days you choose, then it stops.",
      },
      {
        icon: "list",
        title: "One list of every job",
        body: "Website, phone and WhatsApp requests in the same place, each with an owner.",
      },
      {
        icon: "review",
        title: "Review requests",
        body: "Sent when a job is marked finished.",
      },
      {
        icon: "report",
        title: "Your month on one screen",
        body: "What came in, what you quoted, what you won.",
      },
    ],
    note:
      "Built with GoHighLevel, and connected to what you already use where it has a way in. If yours doesn't, we say so on the call.",
  },
  clients: {
    eyebrow: "Clients",
    title: "Who we've built for.",
    lede:
      "Our clients so far aren't installers. These are their words about web and automation work in their own sectors.",
  },
  process: {
    eyebrow: "Process",
    title: "How working together goes.",
    steps: [
      {
        title: "A 30-minute call",
        body: "With a person. We look at what happens to a quote request today and tell you if we'd change anything.",
      },
      {
        title: "A written quote",
        body: "What we'll build and what it costs. Nothing starts until you've agreed it.",
      },
      {
        title: "Build and test",
        body: "We send a request through on your own phone and check every message before it goes live.",
      },
      {
        title: "It runs",
        body: "You get a walkthrough. We're on WhatsApp or email when something needs changing.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Asked before the call.",
    items: [
      {
        q: "How much does it cost?",
        a: "It depends on what you already have, so we don't put a number here. After the call you get a written quote. Nothing starts until you've agreed it.",
      },
      {
        q: "I already have a website. Do I need a new one?",
        a: "Not always. Sometimes the site is fine and the problem is what happens after someone fills in the form. We'll tell you which one it is on the call.",
      },
      {
        q: "Will my customers know it's automatic?",
        a: "The first reply is instant, so some will guess. It's written the way you'd write it and it says you'll ring them, which is what they want to hear. Nothing pretends to be a conversation.",
      },
      {
        q: "Will it work with what I already use?",
        a: "Usually. If yours doesn't connect, we'll say so before you pay anything.",
      },
      {
        q: "How much of my time does it take?",
        a: "Some at the start: how you quote, who handles what, and reading the messages before they go live. After that, very little.",
      },
      {
        q: "What if it doesn't bring in more work?",
        a: "We won't promise you a percentage. We promise every quote request gets answered in under a minute and every quote gets chased, because the system does that part. What happens on the call after that is still your job.",
      },
      {
        q: "Where are you, and when can I reach you?",
        a: "Valencia and Argentina, so European and American working hours. We work in English with clients in the UK and the US.",
      },
    ],
  },
  book: {
    title: "Talk to a person first.",
    lede:
      "Thirty minutes. We look at what happens to a quote request on your site today and tell you plainly whether we'd change it, and whether you need us at all.",
    cta: "Book a 30-minute call",
    or: "Or reply to the email we sent you.",
    scene:
      "A booking calendar with 10:30 selected, next to what happens in the 30 minutes: we look at your site, follow one request through, and tell you what we would change.",
  },
};
