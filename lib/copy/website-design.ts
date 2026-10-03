import type { Locale } from "@/lib/i18n";

/**
 * El texto de /services/website-design y /es/services/website-design. La
 * plantilla que lo pinta es components/pages/website-design.tsx.
 *
 * El ingles es el del Figma "Services - Website Design" (165:831), literal,
 * con las dos correcciones anotadas en la plantilla ("Reponsive" y la prueba
 * social prestada). El español (2026-10-03) va mas corto a proposito, como el
 * resto de /es/: titulares de cuatro a seis palabras y parrafos recortados,
 * no traduccion literal. Las cifras que ya estaban en ingles (30 copias,
 * 30 % de carga, 20+ integraciones) se quedan; no se añade ninguna.
 *
 * Los iconos de "que incluye" y del hosting no estan aqui: son los mismos en
 * los dos idiomas y viven en la plantilla, en el mismo orden que estas listas.
 */

export type WebsiteDesignCopy = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    cta: string;
    /** Lo que oye un lector de pantalla de la escena del hero. */
    label: string;
  };
  benefits: {
    items: readonly { title: string; body: string }[];
    /** La escena del recorrido (buscador, formulario, movil). */
    label: string;
    /** La imagen de los paneles del productor musical. */
    mockupsAlt: string;
  };
  journey: {
    title: string;
    /** "Week 1", "Semana 1"... La plantilla le añade el numero. */
    week: string;
    meeting: string;
    steps: readonly { title: string; body: string }[];
  };
  kickoff: {
    title: string;
    cta: string;
    steps: readonly { title: string; body: string; alt: string }[];
  };
  included: {
    title: string;
    items: readonly { title: string; body: string }[];
  };
  hosting: {
    title: string;
    lede: string;
    items: readonly { title: string; body: string }[];
    cta: string;
    more: string;
  };
  showcase: {
    title: string;
    lede: string;
    /** El alt de cada captura; `{name}` es el cliente. */
    alt: string;
    cta: string;
  };
  testimonials: { title: string };
  contact: { title: string; lede: string };
};

const en: WebsiteDesignCopy = {
  meta: {
    title: "Website Design That Turns Visitors Into Enquiries",
    description:
      "Design, copy, build and hosting for sites with one job: getting the enquiry. Usually WordPress, sometimes not, depending on what the site has to do.",
  },
  hero: {
    eyebrow: "Website Design",
    title: "Crafting Unique Online Experiences",
    lede: "Our web design expertise transforms your vision into captivating, user-centric digital experiences that leave a lasting impact.",
    cta: "Get Started",
    label:
      "An example installer's website, with a Get a quote button, shown on a desktop browser and on a phone, next to a card with the brand's colours and type.",
  },
  benefits: {
    items: [
      {
        title: "Enhanced User Experience",
        body: "Professional web design ensures your website is user-friendly, making it easy for visitors to navigate, find information, and engage with your content or products.",
      },
      {
        title: "Mobile Responsiveness",
        body: "A professionally designed website is optimized for mobile devices, ensuring that it looks and functions well on smartphones and tablets, increasing your reach to mobile users.",
      },
      {
        title: "Improved SEO",
        body: "Properly structured websites with clean code and optimized elements rank higher in search engines, driving more organic traffic to your site.",
      },
    ],
    label:
      "A search for solar installer leeds finds an example installer's site, the visitor fills in its quote form, and the phone confirms: request sent, we'll reply in under a minute.",
    mockupsAlt:
      "Panels of a finished site for a music producer, laid out in perspective: home, beat catalogue, licensing tiers, about, FAQ and contact.",
  },
  journey: {
    title: "Navigating the Web Design Journey",
    week: "Week",
    meeting: "Meeting with Client",
    steps: [
      {
        title: "Research & Planning",
        body: "Research and assess competitors’ websites to identify strengths and areas for differentiation.",
      },
      {
        title: "Design & Structure",
        body: "Develop wireframes and design mockups for visual and structural planning.",
      },
      {
        title: "Content Assembly",
        body: "Use the page builder to assemble the website’s layout and integrate required functionalities.",
      },
      {
        title: "Testing & Optimization",
        body: "Thoroughly test and optimize the site for performance and user experience.",
      },
      {
        title: "Launch & Promotion",
        body: "Deploy the website and implement promotion strategies for a successful launch.",
      },
    ],
  },
  kickoff: {
    title: "Project Kickoff and Planning",
    cta: "Get Started",
    steps: [
      {
        title: "Design Phase in Figma",
        body: "In this phase, we bring your vision to life within the Figma design platform. We focus on crafting the visual elements and layout that will define your website's aesthetic.",
        alt: "A page being designed in Figma: a layers panel, a selected block with its handles, and the brand colours.",
      },
      {
        title: "Figma-to-WordPress Transformation",
        body: "Next, we take the meticulously crafted Figma design and replicate it in WordPress. This step is all about turning the static design into a dynamic, functional website.",
        alt: "The approved design turned into the live site, page for page.",
      },
      {
        title: "Integrations, Quality Checks, and Delivery",
        body: "Finally, we seamlessly integrate your website with the necessary tools and perform thorough testing to ensure it functions flawlessly. Once it's perfect, we deliver your fully functional website.",
        alt: "A pre-launch checklist: forms connected, works on mobile, speed tested, SSL on. Then the site goes live.",
      },
    ],
  },
  included: {
    title: "Here’s What’s Included",
    items: [
      {
        title: "Site Speed Optimization",
        body: "We fine-tune your website for lightning-fast loading times, ensuring a seamless and responsive UX.",
      },
      {
        title: "Responsive Design",
        body: "Our designs adapt to any device, delivering an optimal viewing experience on mobile, tablet, and desktop.",
      },
      {
        title: "SEO Optimized",
        body: "Our web design service goes beyond aesthetics. We'll craft a stunning website and ensure it's on-page SEO-optimized for higher search engine visibility.",
      },
      {
        title: "20+ App Integrations",
        body: "Integrate your website seamlessly with a range of apps to streamline operations and offer additional features to your users.",
      },
      {
        title: "Premium Plugins for Free",
        body: "Access a selection of premium plugins at no extra cost, enhancing your website's functionality and performance.",
      },
    ],
  },
  hosting: {
    title: "No hosting? Get it all with us!",
    lede: "Upgrade your web design with our premium hosting. A fast, secure, and reliable solution to power your online success.",
    items: [
      {
        title: "Ultrafast PHP",
        body: "Custom PHP setup that cuts the TTFB (time to first byte) and makes the overall resource usage more efficient, to ultimately let your web pages load 30% faster compared to standard PHP setups.",
      },
      {
        title: "Powered By Google Cloud",
        body: "We run our service on Google Cloud, which guarantees premium availability and reliability and one of the fastest networks out there. We use distributed SSD storage for multiple redundancies.",
      },
      {
        title: "Free SSL Certificates",
        body: "Let’s Encrypt Standard and Wildcard SSL certificates at no extra cost. For your convenience, the Standard SSL comes preinstalled on your site.",
      },
      {
        title: "Daily Backups",
        body: "We back up your account daily and keep up to 30 copies. You also have the option to create instant on-demand backups with the click of a button.",
      },
      {
        title: "Dev Toolkit",
        body: "Advanced users will love our tools like WP-CLI, SSH access, PHP version control, Git integration and more that make workflows easy and fast.",
      },
      {
        title: "Staging Tool",
        body: "Making changes on your site has never been easier. Make a copy of your site in a click, work on it, and then push the changes live with our staging tool.",
      },
    ],
    cta: "Yes, I want both!",
    more: "Learn More",
  },
  showcase: {
    title: "Our Work Showcase",
    lede: "Celebrating Our Creative Excellence: Take a Closer Look at Our Diverse Web Design Portfolio.",
    alt: "The {name} website, built by emmvi.",
    cta: "Get Started",
  },
  testimonials: { title: "Real-Life Experiences" },
  contact: {
    title: "Talk to our Sales team",
    lede: "We’ll help you find the right plan and pricing for your business.",
  },
};

const es: WebsiteDesignCopy = {
  meta: {
    title: "Diseño web que convierte visitas en solicitudes",
    description:
      "Diseño, textos, desarrollo y hosting para webs con un solo trabajo: conseguir la solicitud. Normalmente WordPress; a veces no, según lo que la web tenga que hacer.",
  },
  hero: {
    eyebrow: "Diseño web",
    title: "Diseño web que convierte",
    lede: "Diseñamos webs claras y rápidas, pensadas para que quien llega pida presupuesto.",
    cta: "Empezar",
    label:
      "La web de un instalador de ejemplo, con un botón de presupuesto, en un navegador de escritorio y en un móvil, junto a una tarjeta con los colores y la tipografía de la marca.",
  },
  benefits: {
    items: [
      {
        title: "Fácil de usar",
        body: "Una web clara: quien entra encuentra lo que busca, entiende qué haces y sabe cómo pedirlo.",
      },
      {
        title: "Perfecta en el móvil",
        body: "Se ve y funciona bien en el móvil y en la tablet, que es desde donde te buscan la mayoría.",
      },
      {
        title: "Mejor posicionamiento",
        body: "Código limpio y estructura cuidada: Google la entiende mejor y te trae más visitas sin pagar.",
      },
    ],
    label:
      "Una búsqueda de placas solares leeds encuentra la web de un instalador de ejemplo, el visitante rellena su formulario de presupuesto y el móvil confirma: enviado, te respondemos en un minuto.",
    mockupsAlt:
      "Paneles de una web terminada para un productor musical, en perspectiva: inicio, catálogo de beats, licencias, quiénes somos, preguntas frecuentes y contacto.",
  },
  journey: {
    title: "Cinco semanas, paso a paso",
    week: "Semana",
    meeting: "Reunión contigo",
    steps: [
      {
        title: "Investigación y plan",
        body: "Miramos las webs de tu competencia para ver qué hacen bien y en qué puedes diferenciarte.",
      },
      {
        title: "Diseño y estructura",
        body: "Esquemas y maquetas para fijar la estructura y el aspecto antes de construir.",
      },
      {
        title: "Montaje del contenido",
        body: "Montamos las páginas con el maquetador e integramos lo que la web necesita.",
      },
      {
        title: "Pruebas y ajustes",
        body: "Probamos y afinamos velocidad y experiencia de uso en todos los dispositivos.",
      },
      {
        title: "Lanzamiento y promoción",
        body: "Publicamos la web y ponemos en marcha lo necesario para que empiece a traer visitas.",
      },
    ],
  },
  kickoff: {
    title: "Cómo arranca el proyecto",
    cta: "Empezar",
    steps: [
      {
        title: "Diseño en Figma",
        body: "Diseñamos en Figma cada página de la web: el aspecto, la estructura y los elementos visuales que la definirán.",
        alt: "Una página diseñándose en Figma: el panel de capas, un bloque seleccionado con sus tiradores y los colores de la marca.",
      },
      {
        title: "De Figma a WordPress",
        body: "Construimos en WordPress el diseño aprobado, tal cual, hasta convertirlo en una web funcional.",
        alt: "El diseño aprobado convertido en la web publicada, página a página.",
      },
      {
        title: "Integraciones, pruebas y entrega",
        body: "Conectamos las herramientas que necesitas, probamos que todo funcione y te entregamos la web lista para usar.",
        alt: "Una lista de comprobación previa: formularios conectados, móvil probado, carga rápida, SSL activo. Después la web sale online.",
      },
    ],
  },
  included: {
    title: "Qué incluye cada web",
    items: [
      {
        title: "Velocidad de carga",
        body: "Afinamos la web para que cargue rápido y responda sin esperas.",
      },
      {
        title: "Diseño adaptable",
        body: "Se adapta a cualquier pantalla: móvil, tablet y ordenador.",
      },
      {
        title: "Optimizada para SEO",
        body: "Además de bonita, con el SEO on-page resuelto para que Google la encuentre.",
      },
      {
        title: "Más de 20 integraciones",
        body: "Conectada con las aplicaciones que usas para ahorrarte trabajo y dar más servicio.",
      },
      {
        title: "Plugins premium incluidos",
        body: "Una selección de plugins de pago sin coste extra, para más funciones y mejor rendimiento.",
      },
    ],
  },
  hosting: {
    title: "¿Sin hosting? Lo ponemos nosotros",
    lede: "Completa el diseño con nuestro hosting premium: rápido, seguro y fiable.",
    items: [
      {
        title: "PHP ultrarrápido",
        body: "Configuración PHP propia que baja el TTFB (tiempo hasta el primer byte) y carga las páginas hasta un 30 % más rápido que un PHP estándar.",
      },
      {
        title: "Sobre Google Cloud",
        body: "Servicio alojado en Google Cloud, con una de las redes más rápidas y almacenamiento SSD distribuido con varias redundancias.",
      },
      {
        title: "Certificados SSL gratis",
        body: "Certificados Let’s Encrypt estándar y wildcard sin coste. El estándar viene preinstalado en tu web.",
      },
      {
        title: "Copias diarias",
        body: "Copia de seguridad cada día, con hasta 30 versiones guardadas. También puedes crear una al instante con un clic.",
      },
      {
        title: "Herramientas de desarrollo",
        body: "WP-CLI, acceso SSH, control de versión de PHP, integración con Git y más, para quien quiera ir por su cuenta.",
      },
      {
        title: "Entorno de pruebas",
        body: "Copia la web con un clic, trabaja sobre la copia y publica los cambios cuando estén listos.",
      },
    ],
    cta: "Sí, quiero las dos cosas",
    more: "Saber más",
  },
  showcase: {
    title: "Webs que hemos hecho",
    lede: "Una muestra de lo que diseñamos y construimos.",
    alt: "La web de {name}, hecha por emmvi.",
    cta: "Empezar",
  },
  testimonials: { title: "Lo que dicen los clientes" },
  contact: {
    title: "Habla con nuestro equipo",
    lede: "Te ayudamos a elegir el plan y el precio que encajan con tu negocio.",
  },
};

export const websiteDesignCopy: Record<Locale, WebsiteDesignCopy> = { en, es };
