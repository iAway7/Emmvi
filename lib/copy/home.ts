import type { Locale } from "@/lib/i18n";

/**
 * El texto de la home, en los dos idiomas. La plantilla que lo pinta es
 * components/pages/home.tsx; app/(en)/page.tsx y app/(es)/es/page.tsx solo
 * eligen idioma.
 *
 * Los dos objetos comparten tipo a proposito: si en ingles se añade una
 * seccion, el español deja de compilar hasta que la tenga. Es la forma de que
 * las dos versiones no se separen sin que nadie lo note.
 *
 * Lo que dice cada texto y por que esta explicado en la plantilla, junto a la
 * seccion que lo usa. Aqui van solo las palabras.
 *
 * **Las citas de los testimonios estan traducidas** en la version española.
 * Son reales y las escribieron en ingles; lo que se traduce es lo que dicen,
 * con nombre y empresa intactos. Si se prefiere dejarlas en el original, se
 * cambian aqui y nada mas.
 */

export type Testimonial = {
  title: string;
  quote: string;
  name: string;
  org: string;
  /** Sin foto: cae en las iniciales. */
  photo?: string;
  initials: string;
};

export type HomeCopy = {
  meta: { title: string; description: string };
  hero: {
    title: string;
    lede: string;
    cta: string;
    seeMore: string;
    scene: string;
  };
  lost: { title: string; body: string; scene: string };
  services: { title: string; lede: string; scene: string };
  board: { title: string; body: string; scene: string };
  work: { title: string; body: string; scene: string };
  about: { title: string; body: string; timezones: string };
  who: {
    title: string;
    rows: readonly { title: string; body: string }[];
    note: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    items: readonly Testimonial[];
  };
  call: {
    /** El titular en tres trozos: lo de en medio no se parte de linea. */
    before: string;
    nowrap: string;
    after: string;
    lede: string;
    cta: string;
    or: string;
    scene: string;
  };
  faq: {
    title: string;
    items: readonly { q: string; a: string; open?: boolean }[];
  };
  contact: { title: string; lede: string };
};

const en: HomeCopy = {
  meta: {
    // Absoluto porque ya dice "emmvi": la plantilla lo dejaria repetido.
    title: "emmvi · Every quote request answered in under a minute",
    description:
      "We build the website that takes the request and the system behind it: the instant reply, the quote follow-up and the review request.",
  },
  hero: {
    title: "Every quote request answered in under a minute",
    lede:
      "We build the website that takes the request, and the system that replies, chases the quote and asks for the review.",
    cta: "Book a 30-minute call",
    seeMore: "See what happens to a request",
    scene:
      "A quote request for an EV charger sent from a website at 21:47, answered by text 34 seconds later, with the quote follow-up and the review request queued next.",
  },
  lost: {
    title: "Where the work gets lost",
    body:
      "Not on the job. In the hours after the request comes in, while you are on a roof and the phone is in your pocket.",
    scene:
      "An unread WhatsApp, two missed calls, fourteen unread emails, a voicemail from a new number and a notebook page that says call Sarah back.",
  },
  services: {
    title: "What happens to a request",
    lede: "From the form to the review, without anyone having to remember.",
    scene:
      "A request comes in at 21:47, the reply goes out 34 seconds later, the quote is followed up on day 2 and a review is requested on day 9.",
  },
  board: {
    title: "Every request in one place",
    body:
      "Web, calls, WhatsApp and email land on one board, each with an owner and a date. No more notebook.",
    scene:
      "A board with columns New, Quoted, Won and Review asked, with a card per job, fed by WhatsApp, calls, email and the website form.",
  },
  work: {
    title: "Built properly, and yours",
    body:
      "Design, build and hosting, looked after by us. The site, the domain and the customer data belong to you. If you leave, you take them with you.",
    scene:
      "The home page of jbzbeats.com, a site we built, in a browser window, next to a card saying the client owns the website, the domain and the customer data.",
  },
  about: {
    title: "Meet emmvi",
    body:
      "emmvi builds websites and the systems that run behind them, from Valencia and from Argentina. Design, build and automation all happen in house, so you talk to the people doing the work and nothing is handed to a supplier you have never met.",
    timezones:
      "Working across both time zones covers most of the working day for clients in Europe and the Americas.",
  },
  who: {
    title: "Who we work with",
    rows: [
      {
        title: "Installation and home service businesses",
        body:
          "Solar, EV chargers, security, heating and cooling. This is the one we have gone deepest on.",
      },
      {
        title: "Clinics and private practices",
        body:
          "Bookings, reminders and quote follow-up, with the extra care that health data needs.",
      },
      {
        title: "Agencies who need a build partner",
        body:
          "We build under your name. You keep the client relationship, we do the work and stay out of the way.",
      },
    ],
    note:
      "If you are not on this list, say so on the call. We will tell you honestly whether we are the right people for it.",
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What our clients say",
    items: [
      {
        title: "Finally getting leads",
        quote:
          "Gustavo and Nico do great work. I've been really happy with multiple websites they've built for me. They have a great eye for design and a strong focus on user experience, making sure everything not only looks good but is easy to navigate. They're talented, reliable, and easy to work with.",
        name: "Jared White",
        org: "JBZ Beats",
        photo: "/testimonials/jared-white.png",
        initials: "JW",
      },
      {
        title: "Automation that works",
        quote:
          "I was drowning in manual work and reached out to Nico for help with automations. He set up email flows, follow-ups, and little systems I didn't even know I needed. Everything feels more organized now. Super grateful, this was a game-changer for me.",
        name: "Adriana Patania",
        org: "Local gym",
        photo: "/testimonials/adriana-patania-1.png",
        initials: "AP",
      },
      {
        title: "Smooth website redesign",
        quote:
          "Gus helped me redesign my website and honestly, it turned out way better than I imagined. It looks clean, it loads fast, and it works great on phones too. He really listened to what I needed and made the process super smooth. Totally recommend him.",
        name: "Alicia Ryz",
        // Logo de Kurokink, no un retrato: es lo unico que hay de ella.
        org: "Ecommerce store",
        photo: "/testimonials/alicia-ryz.png",
        initials: "AR",
      },
    ],
  },
  call: {
    before: "Start with a ",
    nowrap: "30-minute",
    after: " call",
    lede:
      "We look at your site, follow one request through it, and tell you what we would change. Even if you do not hire us.",
    cta: "Book a 30-minute call",
    or: "or write to us instead",
    scene:
      "A booking calendar with 10:30 selected, next to what happens in the 30 minutes: we look at your site, follow one request through, and tell you what we would change.",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "What exactly do you do?",
        a: "Two things: we design and build websites, and we set up the CRM and automations behind them. That covers the site itself, the forms, instant replies, quote follow-ups, review requests and reporting.",
        open: true,
      },
      {
        q: "Are you a fit for a small business?",
        a: "That is most of our work. We are not built for enterprise projects and we do not pretend otherwise. If your company is small enough that the owner still reads the messages that come in, we are probably a good fit.",
      },
      {
        q: "I already have a website. Do I need a new one?",
        a: "Not always. Sometimes the site is fine and the problem is what happens after someone fills in the form. We will tell you which one it is on the call.",
      },
      {
        q: "Will this work with the software I already use?",
        a: "Usually yes. We work with GoHighLevel, Kickserv, Airtable, Stripe and most tools that have an API. If yours does not connect, we will say so before you pay anything.",
      },
      {
        q: "Who owns the website and the customer data?",
        a: "You do. If you leave, you take the site, the domain and the database with you, and we help you move the hosting.",
      },
      {
        q: "How do I get started?",
        a: "Book a thirty-minute call. We look at what happens to a request on your site today and tell you what we would change. No slide deck.",
      },
    ],
  },
  contact: {
    title: "Talk to us",
    lede:
      "Tell us what you are trying to fix. We will tell you what we would do about it, and whether it is worth paying us for.",
  },
};

const es: HomeCopy = {
  meta: {
    title: "emmvi · Cada solicitud de presupuesto respondida en menos de un minuto",
    description:
      "Construimos la web que recibe la solicitud y el sistema que hay detrás: la respuesta inmediata, el seguimiento del presupuesto y la petición de reseña.",
  },
  hero: {
    title: "Cada solicitud de presupuesto respondida en menos de un minuto",
    lede:
      "Construimos la web que recibe la solicitud y el sistema que responde, hace seguimiento del presupuesto y pide la reseña.",
    cta: "Reservar una llamada de 30 minutos",
    seeMore: "Ver qué pasa con una solicitud",
    scene:
      "Una solicitud de presupuesto para un cargador de coche eléctrico enviada desde una web a las 21:47, respondida por mensaje 34 segundos después, con el seguimiento del presupuesto y la petición de reseña en cola.",
  },
  lost: {
    title: "Dónde se pierde el trabajo",
    body:
      "No en la obra. En las horas después de que llegue la solicitud, mientras estás en un tejado y el teléfono va en el bolsillo.",
    scene:
      "Un WhatsApp sin leer, dos llamadas perdidas, catorce correos sin abrir, un mensaje de voz de un número nuevo y una hoja de libreta que dice llamar a Sarah.",
  },
  services: {
    title: "Qué pasa con una solicitud",
    lede: "Del formulario a la reseña, sin que nadie tenga que acordarse.",
    scene:
      "Entra una solicitud a las 21:47, la respuesta sale 34 segundos después, el presupuesto tiene seguimiento el día 2 y se pide una reseña el día 9.",
  },
  board: {
    title: "Todas las solicitudes en un solo sitio",
    body:
      "Web, llamadas, WhatsApp y correo caen en un mismo tablero, cada una con responsable y fecha. Se acabó la libreta.",
    scene:
      "Un tablero con columnas Nueva, Presupuestada, Ganada y Reseña pedida, con una tarjeta por trabajo, alimentado por WhatsApp, llamadas, correo y el formulario de la web.",
  },
  work: {
    title: "Bien hecha, y tuya",
    body:
      "Diseño, desarrollo y alojamiento, a nuestro cargo. La web, el dominio y los datos de tus clientes son tuyos. Si te vas, te los llevas.",
    scene:
      "La portada de jbzbeats.com, una web que construimos, en una ventana de navegador, junto a una tarjeta que dice que el cliente es dueño de la web, el dominio y los datos de clientes.",
  },
  about: {
    title: "Conoce a emmvi",
    body:
      "emmvi construye webs y los sistemas que las hacen funcionar por detrás, desde Valencia y desde Argentina. Diseño, desarrollo y automatización se hacen en casa: hablas con quien hace el trabajo y nada pasa por un proveedor que no conoces.",
    timezones:
      "Trabajar en las dos zonas horarias cubre casi toda la jornada laboral de clientes en Europa y América.",
  },
  who: {
    title: "Con quién trabajamos",
    rows: [
      {
        title: "Instaladores y servicios a domicilio",
        body:
          "Solar, cargadores de coche eléctrico, seguridad, climatización. Es donde más hemos profundizado.",
      },
      {
        title: "Clínicas y consultas privadas",
        body:
          "Citas, recordatorios y seguimiento de presupuestos, con el cuidado extra que piden los datos de salud.",
      },
      {
        title: "Agencias que necesitan quien construya",
        body:
          "Construimos con tu nombre. Tú mantienes la relación con el cliente; nosotros hacemos el trabajo y no nos metemos en medio.",
      },
    ],
    note:
      "Si no estás en esta lista, dilo en la llamada. Te diremos con sinceridad si somos los indicados.",
  },
  testimonials: {
    eyebrow: "Testimonios",
    title: "Lo que dicen nuestros clientes",
    items: [
      {
        title: "Por fin llegan clientes",
        quote:
          "Gustavo y Nico hacen un gran trabajo. Estoy muy contento con las varias webs que me han construido. Tienen muy buen ojo para el diseño y se centran en la experiencia de uso, para que todo no solo se vea bien sino que sea fácil de navegar. Son buenos, fiables y fáciles de tratar.",
        name: "Jared White",
        org: "JBZ Beats",
        photo: "/testimonials/jared-white.png",
        initials: "JW",
      },
      {
        title: "Automatización que funciona",
        quote:
          "Me ahogaba en trabajo manual y le pedí ayuda a Nico con las automatizaciones. Montó flujos de correo, seguimientos y pequeños sistemas que ni sabía que necesitaba. Ahora todo está mucho más ordenado. Muy agradecida, esto me cambió el negocio.",
        name: "Adriana Patania",
        org: "Gimnasio local",
        photo: "/testimonials/adriana-patania-1.png",
        initials: "AP",
      },
      {
        title: "Un rediseño sin fricción",
        quote:
          "Gus me ayudó a rediseñar mi web y, la verdad, quedó mucho mejor de lo que imaginaba. Se ve limpia, carga rápido y funciona genial en el móvil. Escuchó de verdad lo que necesitaba y el proceso fue muy fácil. Lo recomiendo sin dudar.",
        name: "Alicia Ryz",
        org: "Tienda online",
        photo: "/testimonials/alicia-ryz.png",
        initials: "AR",
      },
    ],
  },
  call: {
    before: "Empieza con una llamada de ",
    nowrap: "30 minutos",
    after: "",
    lede:
      "Miramos tu web, seguimos una solicitud de principio a fin y te decimos qué cambiaríamos. Aunque no nos contrates.",
    cta: "Reservar una llamada de 30 minutos",
    or: "o escríbenos",
    scene:
      "Un calendario de reservas con las 10:30 seleccionadas, junto a lo que pasa en esos 30 minutos: miramos tu web, seguimos una solicitud y te decimos qué cambiaríamos.",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué hacéis exactamente?",
        a: "Dos cosas: diseñamos y construimos webs, y montamos el CRM y las automatizaciones que van detrás. Eso incluye la propia web, los formularios, las respuestas inmediatas, el seguimiento de presupuestos, las peticiones de reseña y los informes.",
        open: true,
      },
      {
        q: "¿Encajáis con una empresa pequeña?",
        a: "Es la mayor parte de nuestro trabajo. No estamos hechos para proyectos de gran empresa y no fingimos lo contrario. Si tu empresa es lo bastante pequeña como para que el dueño siga leyendo los mensajes que entran, seguramente encajamos.",
      },
      {
        q: "Ya tengo web. ¿Necesito una nueva?",
        a: "No siempre. A veces la web está bien y el problema es lo que pasa después de que alguien rellene el formulario. Te diremos cuál de las dos cosas es en la llamada.",
      },
      {
        q: "¿Funciona con el software que ya uso?",
        a: "Normalmente sí. Trabajamos con GoHighLevel, Kickserv, Airtable, Stripe y casi cualquier herramienta con API. Si la tuya no se conecta, te lo diremos antes de que pagues nada.",
      },
      {
        q: "¿De quién son la web y los datos de clientes?",
        a: "Tuyos. Si te vas, te llevas la web, el dominio y la base de datos, y te ayudamos a mover el alojamiento.",
      },
      {
        q: "¿Cómo empiezo?",
        a: "Reserva una llamada de treinta minutos. Miramos qué pasa hoy con una solicitud en tu web y te decimos qué cambiaríamos. Sin presentaciones.",
      },
    ],
  },
  contact: {
    title: "Habla con nosotros",
    lede:
      "Cuéntanos qué intentas arreglar. Te diremos qué haríamos y si merece la pena pagarnos por ello.",
  },
};

export const homeCopy: Record<Locale, HomeCopy> = { en, es };
