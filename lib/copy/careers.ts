import type { Locale } from "@/lib/i18n";
import { CONTACT_EMAIL } from "@/lib/site";

/**
 * El texto de /careers y /es/careers. La plantilla es
 * components/pages/careers.tsx, que explica de donde sale cada seccion
 * (replica la estructura de attio.com/careers).
 *
 * Mismo criterio que lib/copy/home.ts: un tipo para los dos idiomas, y el
 * español mas corto que el ingles a proposito, no traducido palabra a
 * palabra.
 *
 * **Sin formulario.** Una candidatura va por correo al buzon que ya existe,
 * con el asunto puesto para que en la bandeja no se confunda con una
 * peticion de presupuesto: llegan al mismo sitio.
 */

export type ValueIconKind = "diamond" | "circle" | "hexagon" | "square";

export type CareersCopy = {
  meta: { title: string; description: string };
  /** Asunto del `mailto:` de la candidatura abierta. */
  applySubject: string;
  hero: { eyebrow: string; title: string; lede: string; cta: string; scene: string };
  builders: { title: string; lede: string; where: string };
  inside: { label: string; names: readonly string[] };
  values: {
    title: string;
    lede: string;
    items: readonly { icon: ValueIconKind; title: string; body: string }[];
  };
  positions: {
    title: string;
    lede: string;
    count: string;
    groups: readonly {
      name: string;
      roles: readonly { title: string; location: string }[];
    }[];
  };
  rightRole: { title: string; lede: string; cta: string; scene: string };
  updates: {
    title: string;
    lede: string;
    cards: readonly {
      icon: "in" | "doc";
      title: string;
      body: string;
      href: string;
      external: boolean;
    }[];
  };
};

const tools = ["GoHighLevel", "Zapier", "Klaviyo", "Stripe", "Cloudflare", "Figma"];

const en: CareersCopy = {
  meta: {
    title: "Careers",
    description:
      "emmvi builds the website that takes the quote request and the system that answers it. No open positions right now; open applications are welcome.",
  },
  applySubject: "Open application",
  hero: {
    eyebrow: "Careers",
    title: "Help small businesses stop losing jobs.",
    lede:
      "emmvi builds the website that takes the quote request and the system that answers it in under a minute. Join us to build it properly.",
    cta: "See open positions",
    scene:
      "This week's build board: a quote follow-up flow and a welcome email being built, a booking page in review, a site launch and review requests live. Below it: something broke? Whoever built it answers.",
  },
  builders: {
    title: "Join a team of builders.",
    lede: "We are looking for people who build properly, say what they cannot do, and answer when it breaks.",
    where:
      "Building from Valencia, Spain, and from Argentina, across two time zones that cover the working day in Europe and the Americas.",
  },
  inside: { label: "We build inside...", names: tools },
  values: {
    title: "Our values.",
    lede: "To build for businesses that live off the next quote request, we hold to four principles in everything we do, from what goes on a site to how we answer a message.",
    items: [
      {
        icon: "diamond",
        title: "Promise what you can deliver.",
        body: "If a line cannot be defended on a call, it does not go on the site, in a proposal or in an estimate.",
      },
      {
        icon: "circle",
        title: "Say the limit first.",
        body: "Every strong claim comes with how it works or where it stops. Saying what we do not do is what makes the rest believable.",
      },
      {
        icon: "hexagon",
        title: "Talk to whoever builds it.",
        body: "Design, build and automation happen in house. The person who built something is the one who answers when it breaks.",
      },
      {
        icon: "square",
        title: "The client owns everything.",
        body: "The site, the domain and the customer data belong to the client. We build so they could leave tomorrow.",
      },
    ],
  },
  positions: {
    title: "Open positions.",
    lede: "If you want to build the site and the system behind it for people who answer the phone from a roof, we would like to hear from you.",
    count: "No open positions right now.",
    groups: [
      {
        name: "Open Applications",
        roles: [{ title: "General Application", location: "Valencia, Argentina [Remote]" }],
      },
    ],
  },
  rightRole: {
    title: "Right role, right time.",
    lede: "There is nothing open today. Tell us what you do and where you are, and we will write when a role fits.",
    cta: "Send an open application",
    scene:
      "An empty list of open positions, and next to it the open application, which is always open.",
  },
  updates: {
    title: "Keep up to date.",
    lede: "See what we are building and writing.",
    cards: [
      {
        icon: "in",
        title: "LinkedIn",
        body: "Follow what the team is building.",
        href: "https://www.linkedin.com/company/emmvi/",
        external: true,
      },
      {
        icon: "doc",
        title: "Blog",
        body: "What we write about quote requests, CRMs and follow-up.",
        href: "/blog/",
        external: false,
      },
    ],
  },
};

const es: CareersCopy = {
  meta: {
    title: "Empleo",
    description:
      "emmvi construye la web que recibe la solicitud y el sistema que la responde. Ahora no hay puestos abiertos; las candidaturas abiertas son bienvenidas.",
  },
  applySubject: "Candidatura abierta",
  hero: {
    eyebrow: "Empleo",
    title: "Que ningún negocio pierda trabajos.",
    lede:
      "emmvi construye la web que recibe la solicitud y el sistema que la responde en menos de un minuto. Ven a construirlo bien.",
    cta: "Ver puestos abiertos",
    scene:
      "El tablero de esta semana: un flujo de seguimiento y un correo de bienvenida en obra, una página de reservas en revisión, una web lanzada y las peticiones de reseña listas. Debajo: ¿algo falló? Responde quien lo hizo.",
  },
  builders: {
    title: "Un equipo que construye.",
    lede: "Buscamos gente que construya bien, diga lo que no sabe hacer y responda cuando algo falla.",
    where:
      "Desde Valencia y desde Argentina, en dos zonas horarias que cubren la jornada de Europa y América.",
  },
  inside: { label: "Construimos dentro de...", names: tools },
  values: {
    title: "Nuestros valores.",
    lede: "Para negocios que viven de la próxima solicitud, cuatro principios en todo lo que hacemos, desde lo que va en una web hasta cómo contestamos un mensaje.",
    items: [
      {
        icon: "diamond",
        title: "Promete lo que puedas cumplir.",
        body: "Si una frase no se puede defender en una llamada, no va en la web, en una propuesta ni en un presupuesto.",
      },
      {
        icon: "circle",
        title: "Di el límite primero.",
        body: "Cada afirmación fuerte lleva cómo funciona o dónde para. Decir lo que no hacemos es lo que hace creíble el resto.",
      },
      {
        icon: "hexagon",
        title: "Habla con quien lo construye.",
        body: "Diseño, desarrollo y automatización se hacen en casa. Quien construyó algo es quien responde cuando falla.",
      },
      {
        icon: "square",
        title: "El cliente es dueño de todo.",
        body: "La web, el dominio y los datos son del cliente. Construimos para que pueda irse mañana.",
      },
    ],
  },
  positions: {
    title: "Puestos abiertos.",
    lede: "Si quieres construir la web y el sistema de detrás para gente que coge el teléfono desde un tejado, queremos conocerte.",
    count: "Ahora no hay puestos abiertos.",
    groups: [
      {
        name: "Candidaturas abiertas",
        roles: [{ title: "Candidatura general", location: "Valencia, Argentina [Remoto]" }],
      },
    ],
  },
  rightRole: {
    title: "El puesto justo, a tiempo.",
    lede: "Hoy no hay nada abierto. Cuéntanos qué haces y dónde estás, y te escribimos cuando encaje un puesto.",
    cta: "Enviar candidatura abierta",
    scene:
      "Una lista vacía de puestos abiertos y, al lado, la candidatura abierta, que siempre lo está.",
  },
  updates: {
    title: "Mantente al día.",
    lede: "Lo que construimos y escribimos.",
    cards: [
      {
        icon: "in",
        title: "LinkedIn",
        body: "Sigue lo que construye el equipo.",
        href: "https://www.linkedin.com/company/emmvi/",
        external: true,
      },
      {
        icon: "doc",
        title: "Blog (en inglés)",
        body: "Lo que escribimos sobre solicitudes, CRM y seguimiento.",
        href: "/blog/",
        external: false,
      },
    ],
  },
};

export const careersCopy: Record<Locale, CareersCopy> = { en, es };

/** El `mailto:` de la candidatura abierta, con el asunto en el idioma de la pagina. */
export function applyHref(locale: Locale): string {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(careersCopy[locale].applySubject)}`;
}
