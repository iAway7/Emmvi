import type { FaqItem } from "@/components/faq-accordion";
import type { Locale } from "@/lib/i18n";

/**
 * El texto de /full-stack-development-services y su version en español. La
 * plantilla que lo pinta es components/pages/full-stack.tsx.
 *
 * El ingles es el recuperado del WordPress, literal. El español (2026-10-03)
 * va mas corto a proposito, como el resto de /es/: titulares de cuatro a seis
 * palabras y parrafos recortados, no traduccion literal. Las cuatro quejas de
 * "Sound familiar?" se adaptan, no se traducen palabra por palabra, porque
 * funcionan por sonar a cliente real.
 *
 * El texto que va dentro de las dos escenas no esta aqui sino en
 * components/services/full-stack-illustrations.tsx, porque cada frase tiene
 * que medir igual o menos que la inglesa.
 */

export type FullStackCopy = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    cta: string;
    secondary: string;
    /** Lo que oye un lector de pantalla de la escena del portal. */
    scene: string;
  };
  familiar: { title: string; quotes: readonly string[]; close: string };
  patchwork: {
    title: string;
    /** Lo que oye un lector de pantalla de la escena del parche. */
    scene: string;
    before: { title: string; items: readonly string[] };
    after: { title: string; items: readonly string[] };
  };
  why: {
    title: string;
    pillars: readonly { n: string; title: string; body: string; illo: string; alt: string }[];
  };
  faq: { title: string; lede: string; items: FaqItem[] };
  build: { title: string; lede: string };
};

/** Las tres ilustraciones ya estaban en el repo: son las mismas que usa la
 *  home, y en el WordPress se llamaban design.svg, coding.svg y Rocket2.svg. */
const illos = {
  design: "/illustrations/design.svg",
  coding: "/illustrations/coding.svg",
  launch: "/illustrations/launch.svg",
};

const en: FullStackCopy = {
  meta: {
    title: "Full-Stack Development",
    description:
      "Client portals, internal dashboards and SaaS MVPs built to fit your workflow, so the tools stop being held together by hand.",
  },
  hero: {
    eyebrow: "Development",
    title: "Stop duct-taping. Start scaling.",
    lede:
      "From client portals to internal dashboards and SaaS MVPs: we design, build and launch full-stack apps that fit the way you already work.",
    cta: "Book a discovery call",
    secondary: "Tell us what you need",
    scene:
      "A custom client portal for an example business, listing this week's jobs with their payment status, connected to Stripe, Airtable and HubSpot, with the code behind it and a note that it is deployed and yours to keep.",
  },
  /** Las cuatro frases del original, tal cual. Son quejas reales de cliente y
   *  funcionan porque son concretas. */
  familiar: {
    title: "Sound familiar?",
    quotes: [
      "We use 5 different tools that don’t talk to each other.",
      "I wish there was a custom dashboard for my team.",
      "We’re growing, but our backend is duct-taped together.",
      "We spend hours copying info between platforms.",
    ],
    close: "If that sounds like your week, you are exactly who this is for.",
  },
  patchwork: {
    title: "Replace the patchwork with one system",
    scene:
      "Now: a spreadsheet, email, forms, invoices and a CRM held together with tape. After: one system holding all five, in one place with one owner.",
    before: {
      title: "Now",
      items: [
        "Information lost between tools",
        "Hours spent copying between platforms",
        "A backend held together by hand",
      ],
    },
    after: {
      title: "After",
      items: [
        "Direct API connections between what you already use",
        "Everything in one place, with one owner",
        "A system that holds when the volume goes up",
      ],
    },
  },
  why: {
    title: "Why work with us",
    pillars: [
      {
        n: "01",
        title: "Custom built, so there are no workarounds",
        body: "We scope the exact thing you need and build it to fit. No bloated SaaS you grow out of, and no monthly licence for features you never use.",
        illo: illos.design,
        alt: "A browser window showing a finished interface.",
      },
      {
        n: "02",
        title: "Full-stack, so it is one team front to back",
        body: "Frontend, backend, database and deployment. Nobody hands off to a second supplier halfway through, and nobody is waiting on anyone else to finish.",
        illo: illos.coding,
        alt: "A laptop with a connection running out to a separate node.",
      },
      {
        n: "03",
        title: "Short sprints, so you see it early",
        body: "We work in short cycles with something to look at at the end of each one. Many apps launch in four to six weeks.",
        illo: illos.launch,
        alt: "A rocket in flight.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    lede: "Anything not answered here is worth a call. Thirty minutes, and nothing to decide on the call itself.",
    items: [
      {
        q: "What tech stack do you use?",
        a: "Typically React, Next.js, Node.js, PostgreSQL and Firebase, plus whatever APIs your existing tools expose. We adapt to what you already run rather than making you move to our favourites.",
      },
      {
        q: "Can you connect it to the tools we already use?",
        a: "That is usually most of the work. Stripe, Airtable, HubSpot, Zapier and anything else with an API. If a tool you depend on has no API, we say so before you commit rather than after.",
      },
      {
        q: "How much does it cost?",
        a: "It depends on what the thing has to do, and we put a number on it after the discovery call rather than before. What the call establishes is scope: which problem you are solving, what has to exist for it to be useful, and what can wait for a second phase. You get the figure in writing, with the phases separated, and you decide then.",
      },
      {
        q: "Do you offer support after launch?",
        a: "Yes. Monthly maintenance or feature work on retainer, or nothing at all if you would rather take it in-house. The code is yours either way.",
      },
      {
        q: "What if we need new features later?",
        a: "You book a further phase or a retainer. We build so that adding to it later is ordinary work rather than a rebuild, which is the main reason to have it custom in the first place.",
      },
    ],
  },
  build: {
    title: "Ready to build something real?",
    lede: "Tell us what you are trying to replace and what it has to do. We will tell you what we would build, what we would leave alone, and whether it is worth paying us for.",
  },
};

const es: FullStackCopy = {
  meta: {
    title: "Desarrollo full-stack",
    description:
      "Portales de cliente, paneles internos y MVP de SaaS hechos a tu medida, para que las herramientas dejen de sostenerse a mano.",
  },
  hero: {
    eyebrow: "Desarrollo",
    title: "Deja los parches. Empieza a escalar.",
    lede:
      "Portales de cliente, paneles internos y MVP de SaaS: diseñamos, construimos y lanzamos apps que encajan con cómo ya trabajas.",
    cta: "Agendar una llamada",
    secondary: "Cuéntanos qué necesitas",
    scene:
      "Un portal de cliente a medida para un negocio de ejemplo: las obras de la semana con su estado de pago, conectado a Stripe, Airtable y HubSpot, con el código detrás y una nota de que está desplegado y es tuyo.",
  },
  familiar: {
    title: "¿Te suena?",
    quotes: [
      "Usamos cinco herramientas que no se hablan entre sí.",
      "Ojalá tuviéramos un panel a medida para el equipo.",
      "Crecemos, pero el backend va con parches.",
      "Perdemos horas copiando datos entre plataformas.",
    ],
    close: "Si esa es tu semana, esto es para ti.",
  },
  patchwork: {
    title: "Sustituye el parche por un sistema",
    scene:
      "Hoy: una hoja de cálculo, el correo, formularios, facturas y un CRM pegados con cinta. Después: un solo sistema con los cinco, en un sitio y con un dueño.",
    before: {
      title: "Hoy",
      items: [
        "Información perdida entre herramientas",
        "Horas copiando datos entre plataformas",
        "Un backend sostenido a mano",
      ],
    },
    after: {
      title: "Después",
      items: [
        "Conexiones por API entre lo que ya usas",
        "Todo en un sitio, con un responsable",
        "Un sistema que aguanta cuando crece el volumen",
      ],
    },
  },
  why: {
    title: "Por qué trabajar con nosotros",
    pillars: [
      {
        n: "01",
        title: "A medida, sin apaños",
        body: "Definimos justo lo que necesitas y lo construimos a esa medida. Sin un SaaS que se te queda pequeño ni licencias por funciones que no usas.",
        illo: illos.design,
        alt: "Una ventana de navegador con una interfaz terminada.",
      },
      {
        n: "02",
        title: "Un solo equipo, de punta a punta",
        body: "Frontend, backend, base de datos y despliegue. Nadie lo pasa a un segundo proveedor a mitad de camino ni espera a que otro termine.",
        illo: illos.coding,
        alt: "Un portátil con una conexión que sale hacia un nodo aparte.",
      },
      {
        n: "03",
        title: "Sprints cortos, lo ves pronto",
        body: "Trabajamos en ciclos cortos con algo que mirar al final de cada uno. Muchas apps salen en cuatro a seis semanas.",
        illo: illos.launch,
        alt: "Un cohete en vuelo.",
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    lede: "Lo que no esté aquí lo vemos en una llamada. Treinta minutos y nada que decidir en ella.",
    items: [
      {
        q: "¿Qué tecnologías usáis?",
        a: "Normalmente React, Next.js, Node.js, PostgreSQL y Firebase, más las API de lo que ya uses. Nos adaptamos a lo que tienes en vez de moverte a nuestras favoritas.",
      },
      {
        q: "¿Lo conectáis con lo que ya usamos?",
        a: "Suele ser la mayor parte del trabajo. Stripe, Airtable, HubSpot, Zapier y cualquier cosa con API. Si una herramienta de la que dependes no tiene, te lo decimos antes de que te comprometas, no después.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Depende de lo que tenga que hacer, y ponemos la cifra después de la llamada, no antes. En la llamada se fija el alcance: qué problema resuelves, qué tiene que existir para que sea útil y qué puede esperar a una segunda fase. Recibes el número por escrito, con las fases separadas, y decides entonces.",
      },
      {
        q: "¿Hay soporte después del lanzamiento?",
        a: "Sí. Mantenimiento mensual o nuevas funciones por iguala, o nada si prefieres llevarlo dentro. El código es tuyo en cualquier caso.",
      },
      {
        q: "¿Y si luego necesitamos más funciones?",
        a: "Contratas otra fase o una iguala. Construimos para que ampliarlo sea trabajo normal, no rehacerlo, que es la razón principal de tenerlo a medida.",
      },
    ],
  },
  build: {
    title: "¿Construimos algo de verdad?",
    lede: "Cuéntanos qué quieres sustituir y qué tiene que hacer. Te diremos qué construiríamos, qué dejaríamos como está y si merece la pena pagarnos.",
  },
};

export const fullStackCopy: Record<Locale, FullStackCopy> = { en, es };
