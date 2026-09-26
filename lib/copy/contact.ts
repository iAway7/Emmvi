import type { Locale } from "@/lib/i18n";

/**
 * El texto de /contact-us y /es/contact-us. La plantilla es
 * components/pages/contact.tsx. Mismo criterio que lib/copy/home.ts: un tipo
 * para los dos idiomas, y el porque de cada texto en la plantilla.
 *
 * Sin tiempos de respuesta: lo que se puede defender es que lo lee alguien,
 * no en cuanto contesta. La reserva de Calendly es la via rapida de verdad.
 */

export type ContactCopy = {
  meta: { title: string; description: string };
  hero: { title: string; lede: string };
  book: { title: string; body: string; cta: string };
  or: string;
  afterwards: {
    title: string;
    steps: readonly { n: string; title: string; body: string }[];
  };
  notes: {
    title: string;
    items: readonly { title: string; body: string }[];
  };
};

const en: ContactCopy = {
  meta: {
    title: "Contact",
    description:
      "Tell us what you are trying to fix and get an honest read on it, or book a thirty-minute call. A person reads every enquiry and a person answers it.",
  },
  hero: {
    title: "Talk to us",
    lede:
      "Tell us what you are trying to fix. You will get an honest read on it: what we would change, what we would leave alone, and whether you need us at all.",
  },
  book: {
    title: "Book the call",
    body:
      "Thirty minutes. We look at what happens to an enquiry on your site today and tell you what we would change. It is the fastest way in, and it lands straight on the calendar.",
    cta: "Schedule a 30-minute call",
  },
  or: "or",
  afterwards: {
    title: "What happens after you send it",
    steps: [
      {
        n: "01",
        title: "A person reads it",
        body: "Not a queue and not a bot. We read the message and look at your site before answering.",
      },
      {
        n: "02",
        title: "You get an honest read",
        body: "What we would change, what we would leave alone, and whether you need us at all. Sometimes the answer is that you do not.",
      },
      {
        n: "03",
        title: "A call if it makes sense",
        body: "Thirty minutes to go through it properly. No slide deck, and nothing to decide on the call itself.",
      },
    ],
  },
  notes: {
    title: "Worth knowing before we talk",
    items: [
      {
        title: "We do not do ads, SEO or social",
        body: "We build the site and the systems behind it: forms, CRM, instant replies, quote follow-ups, review requests and reporting. If what you need is someone running a monthly ad budget, say so and we will point you elsewhere instead of taking the work.",
      },
      {
        title: "Prices are not on the site",
        body: "What it costs depends on what the site has to do and how much of the follow-up you want automated. We put a number on it after the call, once we know which of the two it is.",
      },
      {
        title: "You own everything we build",
        body: "The site, the domain and the customer data are yours. If you leave, you take them with you and we help you move.",
      },
    ],
  },
};

const es: ContactCopy = {
  meta: {
    title: "Contacto",
    description:
      "Cuéntanos qué intentas arreglar y te daremos una opinión sincera, o reserva una llamada de treinta minutos. Cada mensaje lo lee una persona y lo contesta una persona.",
  },
  hero: {
    title: "Habla con nosotros",
    lede:
      "Cuéntanos qué intentas arreglar. Te daremos una opinión sincera: qué cambiaríamos, qué dejaríamos como está y si de verdad nos necesitas.",
  },
  book: {
    title: "Reserva la llamada",
    body:
      "Treinta minutos. Miramos qué pasa hoy con una solicitud en tu web y te decimos qué cambiaríamos. Es la vía más rápida y cae directamente en el calendario.",
    cta: "Reservar una llamada de 30 minutos",
  },
  or: "o",
  afterwards: {
    title: "Qué pasa después de enviarlo",
    steps: [
      {
        n: "01",
        title: "Lo lee una persona",
        body: "Ni una cola ni un bot. Leemos el mensaje y miramos tu web antes de contestar.",
      },
      {
        n: "02",
        title: "Recibes una opinión sincera",
        body: "Qué cambiaríamos, qué dejaríamos como está y si nos necesitas. A veces la respuesta es que no.",
      },
      {
        n: "03",
        title: "Una llamada si tiene sentido",
        body: "Treinta minutos para verlo con calma. Sin presentaciones y sin nada que decidir en la propia llamada.",
      },
    ],
  },
  notes: {
    title: "Conviene saberlo antes de hablar",
    items: [
      {
        title: "No hacemos anuncios, SEO ni redes",
        body: "Construimos la web y los sistemas que van detrás: formularios, CRM, respuestas inmediatas, seguimiento de presupuestos, peticiones de reseña e informes. Si lo que necesitas es alguien que gestione un presupuesto mensual de anuncios, dilo y te indicaremos a quién acudir en vez de quedarnos el trabajo.",
      },
      {
        title: "Los precios no están en la web",
        body: "Lo que cuesta depende de lo que tenga que hacer la web y de cuánto seguimiento quieras automatizar. Ponemos una cifra después de la llamada, cuando sepamos cuál de las dos cosas es.",
      },
      {
        title: "Todo lo que construimos es tuyo",
        body: "La web, el dominio y los datos de tus clientes son tuyos. Si te vas, te los llevas y te ayudamos con la mudanza.",
      },
    ],
  },
};

export const contactCopy: Record<Locale, ContactCopy> = { en, es };
