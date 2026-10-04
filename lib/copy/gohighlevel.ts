import type { Locale } from "@/lib/i18n";

/**
 * El texto de /services/gohighlevel-automation y su version en /es/. La
 * plantilla que lo pinta es components/pages/gohighlevel.tsx.
 *
 * El ingles es el que tenia la pagina antes de partirla en plantilla y
 * diccionario (2026-10-03), literal. El español va mas corto a proposito,
 * como el resto de /es/: titulares de cuatro a seis palabras y parrafos
 * recortados, no traduccion literal. GoHighLevel, los nombres de sus
 * funciones, Kickserv, Stripe, Airtable, Zapier y Make, Mark, Marbella y las
 * cifras del recorrido (21:47, 34 segundos) son los mismos en los dos.
 *
 * Las dos cifras del catalogo (52 funciones, 15 que montamos) no se escriben:
 * se cuentan en la plantilla a partir de `catalogue` y entran en los parrafos
 * por `intro(counts)`. Por eso esos dos textos son funciones y no cadenas.
 */

export type Counts = { ours: number; total: number; rest: number };

export type GohighlevelCopy = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    cta: string;
    ctaSecondary: string;
    /** Lo que oye un lector de pantalla de la escena del demo. */
    label: string;
  };
  /** El recorrido de una sola consulta, la banda violeta. */
  journey: readonly { label: string; figure: string; body: string }[];
  licence: {
    eyebrow: string;
    title: string;
    lede: string;
    label: string;
    /** Lo que pasa hoy. Los cuatro primeros van en el mismo orden que el
     *  recorrido; el quinto no es un momento, es lo que quedo de intentarlo. */
    symptoms: readonly string[];
  };
  changes: {
    eyebrow: string;
    title: string;
    intro: (counts: Counts) => string;
    items: readonly { title: string; body: string }[];
  };
  catalogue: {
    logoAlt: string;
    eyebrow: string;
    title: string;
    intro: (counts: Counts) => string;
    /** Nombra la tira de pestanas para un lector de pantalla. */
    timelineLabel: string;
    /** Las cinco etapas del catalogo, en el orden de `catalogue`. */
    stages: readonly string[];
  };
  build: {
    eyebrow: string;
    title: string;
    lede: string;
    lead: readonly { n: string; title: string; body: string }[];
    rest: readonly { n: string; title: string; body: string }[];
  };
  order: {
    title: string;
    lede: string;
    items: readonly { n: string; title: string; body: string }[];
  };
  flow: {
    eyebrow: string;
    title: string;
    lede: string;
    body: string;
    /** Los bloques del flujo en palabras; el ultimo va en chip oscuro. */
    blocks: readonly string[];
    end: string;
    label: string;
  };
  connect: {
    eyebrow: string;
    title: string;
    lede: string;
    label: string;
    items: readonly { name: string; body: string }[];
  };
  how: {
    eyebrow: string;
    steps: readonly { n: string; title: string; body: string }[];
    cta: string;
    note: string;
  };
  refusals: {
    title: string;
    lede: string;
    items: readonly { title: string; body: string }[];
  };
  testimonial: { quote: string; name: string; org: string };
  /**
   * El caso de InstallPros, **sin rellenar**.
   *
   * Lo unico real aqui es quien es el cliente y a que se dedica. Todo lo
   * demas —el problema, lo que se monto, lo que cambio y la captura— llega del
   * usuario, asi que va como hueco marcado `TODO` y se ve en pantalla. Un
   * caso de estudio con cifras inventadas es exactamente lo que esta pagina
   * dice que no hace tres secciones mas arriba.
   *
   * La captura tendra que traer su propio `alt` cuando entre: describir lo que
   * ensena el panel, no "captura del panel".
   */
  caseStudy: {
    eyebrow: string;
    title: string;
    /** El texto del hueco, hasta que haya imagen. */
    shot: string;
    /** El problema, lo que montamos y lo que cambio. */
    blocks: readonly { label: string; body: string }[];
  };
  faq: {
    eyebrow: string;
    items: readonly { q: string; a: string }[];
  };
  contact: {
    title: string;
    lede: string;
    /** Que pasa en la media hora: tres pasos, numerados. */
    steps: readonly { title: string; body: string }[];
    cta: string;
    /** La frase que presenta el formulario como segunda via. */
    or: string;
  };
  trademark: string;
};

/**
 * El catalogo de GoHighLevel, en su propia taxonomia y con sus nombres de
 * producto. **Copiado de gohighlevel.com**, no de memoria: las pestanas
 * Capture y Nurture se verificaron contra el sitio vivo palabra por palabra y
 * las otras tres salen de capturas del mismo sitio.
 *
 * `ours` marca las quince que emmvi monta. Es lo que respalda el "52 / 15" de
 * la banda oscura: sin esta lista los dos numeros son una afirmacion que hay
 * que creerse, y con ella se cuentan.
 *
 * La seccion estuvo publicada y se perdio al portar el diseno del recorrido.
 * Vuelve en tarjetas por etapa en vez de cinco columnas de texto, que es lo
 * que pidio el usuario y ademas se escanea mejor.
 *
 * Es una afirmacion sobre el producto de otro, asi que envejece sola: si
 * HighLevel cambia su catalogo, esto miente.
 *
 * Los nombres de las funciones no se traducen: son los del producto. Los
 * nombres de las etapas si, y van en `catalogue.stages` de cada idioma en
 * este mismo orden.
 */
export const catalogue: readonly { name: string; ours?: boolean }[][] = [
  // Capture
  [
    { name: "CRM", ours: true },
    { name: "Voice AI", ours: true },
    { name: "Forms, Surveys & Quizzes", ours: true },
    { name: "Websites, Funnels & Landing Pages", ours: true },
    { name: "Webinar Funnels", ours: true },
    { name: "Chat Widget / Conversation AI", ours: true },
    { name: "Call Tracking", ours: true },
    { name: "Inbound SMS & Social DMs", ours: true },
    { name: "Social Planner" },
    { name: "Missed Call Text-Back", ours: true },
    { name: "AI Biz Card Scanner", ours: true },
    { name: "QR Codes", ours: true },
    { name: "Prospecting Tool", ours: true },
    { name: "Ad Manager" },
  ],
  // Nurture
  [
    { name: "Conversation AI", ours: true },
    { name: "Consolidated conversation stream", ours: true },
    { name: "Sales Pipelines", ours: true },
    { name: "Workflows & Automations", ours: true },
    { name: "Calendars", ours: true },
    { name: "Text Snippets", ours: true },
    { name: "Appointment Reminders", ours: true },
    { name: "Ringless Voicemail", ours: true },
    { name: "Mobile App" },
    { name: "Automated Outbound Call Connect", ours: true },
  ],
  // Close
  [
    { name: "Lead Scoring", ours: true },
    { name: "Estimates & Proposals", ours: true },
    { name: "Invoicing", ours: true },
    { name: "Payment Integrations", ours: true },
    { name: "Paid Calendars", ours: true },
    { name: "Order Forms / Upsells / Downsells", ours: true },
    { name: "Membership Offers / Courses", ours: true },
    { name: "One-click Upsell Funnels", ours: true },
    { name: "Text-2-Pay", ours: true },
    { name: "Tap-2-Pay", ours: true },
    { name: "Gift Cards" },
    { name: "Loyalty Programs" },
  ],
  // Evangelize
  [
    { name: "Reputation Management", ours: true },
    { name: "Automated Review Requests", ours: true },
    { name: "AI Review Reply", ours: true },
    { name: "Affiliate Manager" },
    { name: "Website Review Widgets", ours: true },
    { name: "Video Review Capture", ours: true },
    { name: "Video Review Widgets", ours: true },
    { name: "Social Planner Auto-Review Posts", ours: true },
    { name: "Communities" },
  ],
  // Reactivate
  [
    { name: "Broadcast Campaigns", ours: true },
    { name: "Smart Lists / Segmentation", ours: true },
    { name: "Automated Birthday Campaigns", ours: true },
    { name: "Automated Seasonal Campaigns", ours: true },
    { name: "Database Reactivation Templates" },
    { name: "Newsletter Automation", ours: true },
    { name: "Content AI", ours: true },
  ],
];

const en: GohighlevelCopy = {
  meta: {
    title: "GoHighLevel Automation Setup and Workflows",
    description:
      "We build what runs inside your GoHighLevel account: lead routing, instant replies, quote follow-ups, review requests and reporting. Every workflow tested before launch, and the account stays yours.",
  },
  hero: {
    eyebrow: "GoHighLevel automation",
    title: "Your GoHighLevel, answering in under a minute",
    lede: "You are already paying for the software. We build the part that actually replies, chases and books, then hand it back to you running.",
    cta: "Get your account looked at",
    ctaSecondary: "See what we build",
    label:
      "A quote request for a full clean in Marbella arrives at 21:47 and is answered 34 seconds later with two times to choose from; the opportunity moves from New lead to Replied, answered while you were out.",
  },
  journey: [
    {
      label: "It arrives",
      figure: "21:47",
      body: "A quote request, on a Tuesday night, after everyone has gone home.",
    },
    {
      label: "It is answered",
      figure: "34s",
      body: "By text and email, with their name on it and two times to choose from.",
    },
    {
      label: "It is chased",
      figure: "+1 day",
      body: "If the quote goes quiet, it gets followed up without anyone remembering to.",
    },
    {
      label: "It is closed",
      figure: "Done",
      body: "The job gets marked complete and the review request goes out on its own.",
    },
  ],
  licence: {
    eyebrow: "The licence is not the system",
    title: "You pay for it either way.",
    lede: "GoHighLevel bills every month whether or not anything runs inside it.",
    label:
      "A GoHighLevel account with its conversations, pipelines and calendars empty, no workflows running and reputation not set up, next to the monthly licence, marked paid.",
    symptoms: [
      "The quote request that came in at 21:47 sat in an inbox until somebody opened it the next morning.",
      "The quote you sent on Thursday was never followed up, because Friday happened.",
      "Half a day went on messages agreeing a time that a booking link would have settled.",
      "The customer was happy and nobody ever asked them for a review.",
      "Workflows someone built years ago that nobody dares to touch.",
    ],
  },
  changes: {
    eyebrow: "What changes once it runs",
    title: "Not a new tool.",
    intro: ({ ours, total, rest }) =>
      `It is the one you already pay for, finally doing the work. We set up ${ours} of the ${total} features it comes with. The ${rest} we leave alone belong to somebody else’s business model.`,
    items: [
      {
        title: "Nobody waits until morning",
        body: "Every quote request gets a real reply with the person's name on it, at whatever hour it lands, from whichever form or inbox it came through.",
      },
      {
        title: "Quotes get chased for you",
        body: "A quote that goes quiet is followed up on a schedule you set, twice, and then left alone. No note on your desk, no guilt about it.",
      },
      {
        title: "The diary fills itself",
        body: "People pick a slot that is genuinely free and get reminded before it, so the back and forth stops and so do the no-shows you were absorbing.",
      },
      {
        title: "Reviews arrive because someone asked",
        body: "The request goes out when the job is marked done and the customer still remembers it, not three weeks later when you find the time.",
      },
    ],
  },
  catalogue: {
    logoAlt: "GoHighLevel",
    eyebrow: "What the licence includes",
    title: "We set up the ticked ones.",
    intro: ({ ours, total, rest }) =>
      `GoHighLevel’s own feature list, in their own words. We set up ${ours} of the ${total}. The ${rest} without a tick are gift cards, affiliate programmes and the like: real features, for a different kind of business.`,
    timelineLabel: "GoHighLevel feature stages",
    stages: ["Capture", "Nurture", "Close", "Evangelize", "Reactivate"],
  },
  build: {
    eyebrow: "What we build inside it",
    title: "Not all of it on day one.",
    lede: "We start with whatever is losing you work right now.",
    lead: [
      {
        n: "01",
        title: "Nothing arrives and gets lost",
        body: "Forms, calls, texts and social messages all land in one place, tagged with where they came from and assigned to whoever should answer.",
      },
      {
        n: "02",
        title: "Every one gets an answer",
        body: "A reply that reads like you wrote it goes out within the minute, and the conversation carries on in the same thread when you pick it up.",
      },
    ],
    rest: [
      {
        n: "03",
        title: "Quotes that follow themselves up",
        body: "Sent, chased, and marked won or lost without anyone tracking it by hand.",
      },
      {
        n: "04",
        title: "Bookings without the back and forth",
        body: "Real availability, confirmations, and a reminder before the slot.",
      },
      {
        n: "05",
        title: "Reviews asked for on time",
        body: "Triggered by the job being finished, not by you finding a spare hour.",
      },
      {
        n: "06",
        title: "One screen that tells the truth",
        body: "Where quote requests came from, how many turned into work, what is still open, and whether this month is going better than the last one. Which ads and sources bring jobs that close, not just form fills.",
      },
    ],
  },
  order: {
    title: "Knowing what to build.",
    lede: "That is half the job. The other half is setting it up so it keeps running after we leave. This is the order we work in.",
    items: [
      {
        n: "01",
        title: "Look at what is already there",
        body: "Your account, your forms, your calendar, and whatever you are paying for twice.",
      },
      {
        n: "02",
        title: "Set the account up properly",
        body: "Numbers, domains, sending reputation and permissions, done once and done right.",
      },
      {
        n: "03",
        title: "Build the workflows",
        body: "The replies, the chases, the reminders and the review requests, in your words.",
      },
      {
        n: "04",
        title: "Bring your data across",
        // La deduplicacion no estaba y es de lo que mas duele en un CRM heredado:
        // el mismo cliente tres veces con tres telefonos. Va aqui y no en una
        // seccion propia porque es parte de traer los datos, no un servicio.
        body: "Contacts, history and pipelines out of the spreadsheet and into one place, with the same customer merged into one record instead of arriving three times.",
      },
      {
        n: "05",
        title: "Connect what it cannot reach",
        body: "Your job software, your payments, your sheets, through whatever bridge fits.",
      },
      {
        n: "06",
        title: "Build the website that feeds it",
        body: "If the site is the reason quote requests are thin, we fix that too.",
      },
      {
        n: "07",
        title: "Test it with a real quote request",
        body: "We send one through ourselves and watch what happens, end to end.",
      },
      {
        n: "08",
        title: "Hand it over",
        body: "Your login, your account, and a walkthrough of what changes what.",
      },
      {
        n: "09",
        title: "Change it as the business changes",
        body: "New service, new season, new number. It is a system, not a monument.",
      },
    ],
  },
  flow: {
    eyebrow: "Here is one of them",
    title: "Four blocks on a canvas.",
    lede: "And the difference between a quote that gets chased and one that does not.",
    body: "The quote moves to sent, the customer goes quiet, a text goes out the next day, and if they are still quiet it stops. That is the whole thing, and it runs whether or not you think about it.",
    blocks: ["Opportunity changed", "Send SMS", "Wait 1 day"],
    end: "End",
    label:
      "A GoHighLevel workflow: when a quote is sent, a text asks whether it came through, it waits a day, and a second text offers help; if the customer replies it stops on its own.",
  },
  connect: {
    eyebrow: "And what it is connected to",
    title: "Or it is just another window.",
    lede: "It has to talk to the things you already use.",
    label:
      "GoHighLevel in the middle, connected to your website for requests, Kickserv for jobs and schedule, Stripe for payments, Airtable for your records, and Zapier and Make for everything else.",
    items: [
      {
        name: "Your website",
        body: "Forms and chat post straight in, so nothing is retyped.",
      },
      {
        name: "Kickserv",
        body: "Jobs and customers stay in step with the pipeline.",
      },
      {
        name: "Stripe",
        body: "Payments and invoices, chased the same way quotes are.",
      },
      {
        name: "Airtable",
        body: "For whatever you track that no CRM has a field for.",
      },
      {
        name: "Zapier and Make",
        body: "The bridge for anything on this list we have not met yet.",
      },
    ],
  },
  how: {
    eyebrow: "How it works",
    steps: [
      {
        n: "1",
        title: "We look at the account",
        body: "Half an hour, screen shared, no charge.",
      },
      {
        n: "2",
        title: "We build it",
        body: "A fixed scope and a fixed price, agreed first.",
      },
      {
        n: "3",
        title: "We test it, then it runs",
        body: "A real quote request goes through before you sign off.",
      },
    ],
    cta: "Book a thirty-minute call",
    note: "If there is nothing worth building, we will tell you on the call and you will have lost half an hour.",
  },
  refusals: {
    title: "What we don’t do",
    lede: "Worth reading before the call, so nobody wastes half an hour.",
    items: [
      {
        title: "We don't sell hours",
        body: "You get a scope and a price. If it takes us longer than we thought, that is our problem.",
      },
      {
        title: "We don't hold your account hostage",
        body: "The licence is in your name and the logins are yours. If you leave, everything keeps running.",
      },
      {
        title: "We don't promise a revenue number",
        body: "Anyone who does is guessing. We will tell you what we are building and what it is meant to stop.",
      },
      {
        title: "We don't change what you haven't approved",
        body: "We map what is connected first and show you what we would change. Nothing moves until you say yes.",
      },
    ],
  },
  // El texto real de Adriana. El archivo de diseno traia una frase reescrita
  // que ella no dijo; esta es la misma cita que usan la home y
  // /services/email-marketing.
  testimonial: {
    quote:
      "I was drowning in manual work and reached out to Nico for help with automations. He set up email flows, follow-ups, and little systems I didn’t even know I needed. Everything feels more organized now.",
    name: "Adriana Patania",
    org: "Local gym",
  },
  caseStudy: {
    eyebrow: "Case study",
    title: "InstallPros, an installations company",
    shot: "TODO: anonymised dashboard screenshot",
    blocks: [
      {
        label: "The problem",
        body: "TODO: what was being lost before, and where it was going.",
      },
      {
        label: "What we built",
        body: "TODO: the workflows and connections that went in.",
      },
      {
        label: "What changed",
        body: "TODO: what the account does now that it did not do before. No percentages.",
      },
    ],
  },
  /**
   * La primera es la del archivo con la respuesta cambiada: alli decia "We are
   * a certified admin and automation partner" y no lo somos. Decir que no, y
   * ofrecer lo que si se puede ensenar, es lo que pasa el filtro de PRODUCT.md
   * —y es lo que mas separa a emmvi del resto de resultados de esta busqueda,
   * que viven del sello.
   */
  faq: {
    eyebrow: "Questions",
    items: [
      {
        q: "Are you a certified GoHighLevel partner?",
        a: "No. HighLevel runs its own certification programme and we have not taken it. What we can show you is an account we built, the workflows running inside it and a client who will talk to you. Ask for that from us, and from anyone else you are considering.",
      },
      {
        q: "I already pay for it and barely use it.",
        a: "That is the usual starting point. The licence stays where it is and we build inside the account you already have.",
      },
      {
        q: "My account is already a mess. Do we start over?",
        a: "Rarely. We map which workflows, tags and fields are actually doing something, remove what is duplicated or broken, and keep the rest. You see the list before anything is deleted.",
      },
      {
        q: "Will my texts get blocked?",
        a: "In the US, business texting needs A2P 10DLC registration, or carriers start filtering your messages. We prepare and submit it with you. Approval depends on the carriers and can take from a few days to a few weeks.",
      },
      {
        q: "Who owns the data?",
        a: "You do, and the account is in your name. We work in it with the access you give us and you can take it away.",
      },
      {
        q: "Can you move me from another CRM?",
        a: "Usually, yes. Contacts and history come across first, then we rebuild the parts that were doing real work.",
      },
      {
        q: "How long does it take?",
        a: "Weeks, not months, for the first workflows. We would rather have two things running than ten half built.",
      },
    ],
  },
  contact: {
    title: "Show us the account",
    lede: "Half an hour on a call, screen shared. You will leave knowing what is worth building and what is not, whether or not you hire us.",
    steps: [
      {
        title: "We look at the account as it is",
        body: "Pipelines, workflows, what fires and what has been switched off.",
      },
      {
        title: "We follow one lead through it",
        body: "From the form to the first reply, and where it stops.",
      },
      {
        title: "We tell you what we would build",
        body: "And what we would leave alone. No slide deck.",
      },
    ],
    cta: "Book the 30 minutes",
    or: "Or write to us and we will reply by email.",
  },
  trademark:
    "GoHighLevel is a trademark of GoHighLevel Inc. emmvi is an independent service provider and is not affiliated with, endorsed by or certified by GoHighLevel Inc.",
};

/**
 * Español (2026-10-03). Mas corto que el ingles a proposito; tuteo, España
 * neutro. Los nombres de las etapas del catalogo son los que ya usa el
 * comentario de components/services/stage-timeline.tsx. "Agendar", nunca
 * "reservar", en el boton de la llamada.
 */
const es: GohighlevelCopy = {
  meta: {
    title: "Automatización de GoHighLevel",
    description:
      "Montamos lo que corre dentro de tu cuenta de GoHighLevel: reparto de leads, respuestas al instante, seguimiento de presupuestos, reseñas e informes. Todo probado antes de salir, y la cuenta sigue siendo tuya.",
  },
  hero: {
    eyebrow: "Automatización de GoHighLevel",
    title: "Tu GoHighLevel, respondiendo en un minuto",
    lede: "Ya pagas el software. Montamos la parte que responde, hace seguimiento y agenda, y te la devolvemos funcionando.",
    cta: "Que miremos tu cuenta",
    ctaSecondary: "Ver qué montamos",
    label:
      "Una solicitud de limpieza completa en Marbella entra a las 21:47 y se responde 34 segundos después con dos horas a elegir; la oportunidad pasa de Nuevo a Respondida, contestada mientras no estabas.",
  },
  journey: [
    {
      label: "Entra",
      figure: "21:47",
      body: "Una solicitud de presupuesto, un martes por la noche, con todos ya en casa.",
    },
    {
      label: "Se responde",
      figure: "34s",
      body: "Por WhatsApp y email, con su nombre y dos horas a elegir.",
    },
    {
      label: "Se persigue",
      figure: "+1 día",
      body: "Si el presupuesto se enfría, recibe seguimiento sin que nadie se acuerde.",
    },
    {
      label: "Se cierra",
      figure: "Hecho",
      body: "El trabajo se marca terminado y la petición de reseña sale sola.",
    },
  ],
  licence: {
    eyebrow: "La licencia no es el sistema",
    title: "La pagas de todos modos.",
    lede: "GoHighLevel cobra cada mes, corra algo dentro o no.",
    label:
      "Una cuenta de GoHighLevel con conversaciones, pipelines y calendarios vacíos, sin workflows en marcha y la reputación sin montar, junto a la cuota mensual, marcada como pagada.",
    symptoms: [
      "La solicitud de las 21:47 se quedó en la bandeja hasta que alguien la abrió a la mañana siguiente.",
      "El presupuesto que enviaste el jueves nunca tuvo seguimiento, porque llegó el viernes.",
      "Media jornada en mensajes para cuadrar una hora que un enlace de agenda habría resuelto.",
      "El cliente quedó contento y nadie le pidió una reseña.",
      "Workflows que montó alguien hace años y que nadie se atreve a tocar.",
    ],
  },
  changes: {
    eyebrow: "Lo que cambia cuando funciona",
    title: "No es una herramienta nueva.",
    intro: ({ ours, total, rest }) =>
      `Es la que ya pagas, por fin haciendo el trabajo. Montamos ${ours} de las ${total} funciones que trae. Las ${rest} que dejamos son de otro modelo de negocio.`,
    items: [
      {
        title: "Nadie espera a mañana",
        body: "Cada solicitud recibe una respuesta real con el nombre de la persona, a la hora que llegue y venga del formulario o la bandeja que venga.",
      },
      {
        title: "Los presupuestos se persiguen solos",
        body: "Un presupuesto que se enfría recibe seguimiento según el calendario que fijes, dos veces, y luego se deja en paz. Sin notas en la mesa ni mala conciencia.",
      },
      {
        title: "La agenda se llena sola",
        body: "La gente elige un hueco libre de verdad y recibe un recordatorio antes, así que se acaban las idas y venidas y los plantones que asumías.",
      },
      {
        title: "Las reseñas llegan porque se piden",
        body: "La petición sale cuando el trabajo se marca hecho y el cliente aún lo recuerda, no tres semanas después, cuando sacas un rato.",
      },
    ],
  },
  catalogue: {
    logoAlt: "GoHighLevel",
    eyebrow: "Lo que incluye la licencia",
    title: "Montamos las que llevan tic.",
    intro: ({ ours, total, rest }) =>
      `La lista de funciones de GoHighLevel, con sus nombres. Montamos ${ours} de las ${total}. Las ${rest} sin tic son tarjetas regalo, programas de afiliados y similares: funciones reales, para otro tipo de negocio.`,
    timelineLabel: "Etapas de las funciones de GoHighLevel",
    stages: ["Captar", "Nutrir", "Cerrar", "Fidelizar", "Reactivar"],
  },
  build: {
    eyebrow: "Lo que montamos dentro",
    title: "No todo el primer día.",
    lede: "Empezamos por lo que te hace perder trabajo ahora mismo.",
    lead: [
      {
        n: "01",
        title: "Nada llega y se pierde",
        body: "Formularios, llamadas, SMS y mensajes de redes caen en un solo sitio, etiquetados con su origen y asignados a quien deba responder.",
      },
      {
        n: "02",
        title: "Todas reciben respuesta",
        body: "En menos de un minuto sale una respuesta que parece escrita por ti, y la conversación sigue en el mismo hilo cuando la retomas.",
      },
    ],
    rest: [
      {
        n: "03",
        title: "Presupuestos que se siguen solos",
        body: "Enviado, perseguido y marcado ganado o perdido sin que nadie lo lleve a mano.",
      },
      {
        n: "04",
        title: "Citas sin idas y venidas",
        body: "Disponibilidad real, confirmaciones y un recordatorio antes de la hora.",
      },
      {
        n: "05",
        title: "Reseñas pedidas a tiempo",
        body: "Las dispara el trabajo terminado, no que te sobre una hora.",
      },
      {
        n: "06",
        title: "Una pantalla que dice la verdad",
        body: "De dónde vienen las solicitudes, cuántas acaban en trabajo, qué sigue abierto y si este mes va mejor que el anterior. Qué anuncios y canales traen trabajos cerrados, no solo formularios.",
      },
    ],
  },
  order: {
    title: "Saber qué montar.",
    lede: "Es la mitad del trabajo. La otra mitad es dejarlo montado para que siga funcionando cuando nos vayamos. Este es el orden.",
    items: [
      {
        n: "01",
        title: "Mirar lo que ya hay",
        body: "Tu cuenta, tus formularios, tu calendario y lo que estés pagando dos veces.",
      },
      {
        n: "02",
        title: "Configurar bien la cuenta",
        body: "Números, dominios, reputación de envío y permisos, una vez y bien.",
      },
      {
        n: "03",
        title: "Montar los workflows",
        body: "Las respuestas, los seguimientos, los recordatorios y las peticiones de reseña, con tus palabras.",
      },
      {
        n: "04",
        title: "Traer tus datos",
        body: "Contactos, historial y pipelines fuera de la hoja de cálculo y en un solo sitio, con cada cliente en una ficha en vez de tres.",
      },
      {
        n: "05",
        title: "Conectar lo que no alcanza",
        body: "Tu software de trabajos, tus pagos, tus hojas, por el puente que encaje.",
      },
      {
        n: "06",
        title: "Montar la web que lo alimenta",
        body: "Si llegan pocas solicitudes por culpa de la web, también lo arreglamos.",
      },
      {
        n: "07",
        title: "Probarlo con una solicitud real",
        body: "Enviamos una nosotros y miramos qué pasa, de principio a fin.",
      },
      {
        n: "08",
        title: "Entregarlo",
        body: "Tu acceso, tu cuenta y un repaso de qué cambia qué.",
      },
      {
        n: "09",
        title: "Cambiarlo con el negocio",
        body: "Servicio nuevo, temporada nueva, número nuevo. Es un sistema, no un monumento.",
      },
    ],
  },
  flow: {
    eyebrow: "Aquí va uno",
    title: "Cuatro bloques en un lienzo.",
    lede: "Y la diferencia entre un presupuesto con seguimiento y uno sin él.",
    body: "El presupuesto pasa a enviado, el cliente calla, al día siguiente sale un WhatsApp y, si sigue callado, para. Eso es todo, y corre aunque no pienses en ello.",
    blocks: ["Cambia la oportunidad", "Enviar WhatsApp", "Esperar 1 día"],
    end: "Fin",
    label:
      "Un workflow de GoHighLevel: al enviar un presupuesto, un WhatsApp pregunta si llegó bien, espera un día y un segundo mensaje ofrece ayuda; si el cliente responde, se detiene solo.",
  },
  connect: {
    eyebrow: "Y con qué se conecta",
    title: "O es otra ventana más.",
    lede: "Tiene que hablar con lo que ya usas.",
    label:
      "GoHighLevel en el centro, conectado a tu web para las solicitudes, Kickserv para trabajos y agenda, Stripe para pagos, Airtable para tus datos, y Zapier y Make para todo lo demás.",
    items: [
      {
        name: "Tu web",
        body: "Formularios y chat entran directos, sin reescribir nada.",
      },
      {
        name: "Kickserv",
        body: "Trabajos y clientes van a la par con el pipeline.",
      },
      {
        name: "Stripe",
        body: "Pagos y facturas, perseguidos como los presupuestos.",
      },
      {
        name: "Airtable",
        body: "Para lo que anotas y ningún CRM tiene campo.",
      },
      {
        name: "Zapier y Make",
        body: "El puente para lo que aún no conozcamos.",
      },
    ],
  },
  how: {
    eyebrow: "Cómo funciona",
    steps: [
      {
        n: "1",
        title: "Miramos la cuenta",
        body: "Media hora, pantalla compartida, sin coste.",
      },
      {
        n: "2",
        title: "Lo montamos",
        body: "Alcance y precio cerrados, acordados antes.",
      },
      {
        n: "3",
        title: "Lo probamos y arranca",
        body: "Pasa una solicitud real antes de que des el visto bueno.",
      },
    ],
    cta: "Agendar una llamada",
    note: "Si no hay nada que merezca montarse, te lo diremos en la llamada y habrás perdido media hora.",
  },
  refusals: {
    title: "Lo que no hacemos",
    lede: "Léelo antes de la llamada, para que nadie pierda media hora.",
    items: [
      {
        title: "No vendemos horas",
        body: "Recibes un alcance y un precio. Si tardamos más de lo previsto, es problema nuestro.",
      },
      {
        title: "No secuestramos tu cuenta",
        body: "La licencia va a tu nombre y los accesos son tuyos. Si te vas, todo sigue funcionando.",
      },
      {
        title: "No prometemos una cifra de ingresos",
        body: "Quien lo hace, adivina. Te diremos qué montamos y qué debe evitar.",
      },
      {
        title: "No cambiamos nada que no hayas aprobado",
        body: "Primero vemos qué está conectado con qué y te enseñamos lo que cambiaríamos. No se toca nada hasta que digas que sí.",
      },
    ],
  },
  // La misma traduccion de la cita de Adriana que usa la home en español,
  // recortada donde la recorta la version inglesa de esta pagina.
  testimonial: {
    quote:
      "Me ahogaba en trabajo manual y le pedí ayuda a Nico con las automatizaciones. Montó flujos de correo, seguimientos y pequeños sistemas que ni sabía que necesitaba. Ahora todo está más ordenado.",
    name: "Adriana Patania",
    org: "Gimnasio local",
  },
  caseStudy: {
    eyebrow: "Un caso",
    title: "InstallPros, empresa de instalaciones",
    shot: "TODO: captura del panel, anonimizada",
    blocks: [
      {
        label: "El problema",
        body: "TODO: qué se estaba perdiendo antes y por dónde se iba.",
      },
      {
        label: "Lo que montamos",
        body: "TODO: los workflows y las conexiones que entraron.",
      },
      {
        label: "Lo que cambió",
        body: "TODO: qué hace la cuenta ahora que antes no hacía. Sin porcentajes.",
      },
    ],
  },
  faq: {
    eyebrow: "Preguntas",
    items: [
      {
        q: "¿Sois partner certificado de GoHighLevel?",
        a: "No. HighLevel tiene su propio programa de certificación y no lo hemos hecho. Lo que podemos enseñarte es una cuenta que montamos, los workflows que corren dentro y un cliente que hablará contigo. Pídenoslo a nosotros, y a cualquier otro que estés valorando.",
      },
      {
        q: "Ya lo pago y apenas lo uso.",
        a: "Es el punto de partida habitual. La licencia se queda donde está y montamos dentro de la cuenta que ya tienes.",
      },
      {
        q: "Mi cuenta ya es un lío. ¿Hay que empezar de cero?",
        a: "Casi nunca. Vemos qué workflows, etiquetas y campos hacen algo de verdad, quitamos lo duplicado o roto y mantenemos el resto. Ves la lista antes de que se borre nada.",
      },
      {
        q: "¿Funciona con WhatsApp?",
        a: "Sí, con la API oficial de WhatsApp Business. Hay que verificar la empresa con Meta, y los mensajes enviados pasadas 24 horas desde la última respuesta del cliente necesitan plantillas aprobadas. Te guiamos en las dos cosas.",
      },
      {
        q: "¿De quién son los datos?",
        a: "Tuyos, y la cuenta va a tu nombre. Trabajamos con el acceso que nos das y puedes retirarlo.",
      },
      {
        q: "¿Podéis migrarme desde otro CRM?",
        a: "Normalmente sí. Primero pasan contactos e historial, luego rehacemos lo que de verdad trabajaba.",
      },
      {
        q: "¿Cuánto tarda?",
        a: "Semanas, no meses, para los primeros workflows. Preferimos dos cosas funcionando que diez a medias.",
      },
    ],
  },
  contact: {
    title: "Enséñanos la cuenta",
    lede: "Media hora de llamada, pantalla compartida. Saldrás sabiendo qué merece montarse y qué no, nos contrates o no.",
    steps: [
      {
        title: "Miramos la cuenta tal como está",
        body: "Pipelines, workflows, qué se dispara y qué está apagado.",
      },
      {
        title: "Seguimos un lead de principio a fin",
        body: "Del formulario a la primera respuesta, y dónde se para.",
      },
      {
        title: "Te decimos qué montaríamos",
        body: "Y qué dejaríamos como está. Sin presentaciones.",
      },
    ],
    cta: "Agendar los 30 minutos",
    or: "O escríbenos y te contestamos por correo.",
  },
  trademark:
    "GoHighLevel es una marca de GoHighLevel Inc. emmvi es un proveedor independiente y no está afiliado, respaldado ni certificado por GoHighLevel Inc.",
};

export const gohighlevelCopy: Record<Locale, GohighlevelCopy> = { en, es };
