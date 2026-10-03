import type { Locale } from "@/lib/i18n";

/**
 * El texto de /services/seo y /es/services/seo. La plantilla que lo pinta es
 * components/pages/seo.tsx.
 *
 * El ingles es el literal de la pagina heredada (Figma + backup del WordPress,
 * ver los comentarios de la plantilla). El español (2026-10-03) va mas corto a
 * proposito, como el resto de /es/: titulares de cuatro a seis palabras y
 * parrafos recortados, no traduccion literal. Las pestañas del paquete y la
 * FAQ se resumen en vez de traducir los parrafos largos del WordPress.
 *
 * Nada en español promete lo que el ingles no promete: ni cifras ni primeros
 * puestos. "¿Garantizais el primer puesto?" sigue respondiendo que no.
 */

export type SeoCopy = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    cta: string;
    /** Lo que oye un lector de pantalla de la escena del hero. */
    scene: string;
  };
  tools: { label: string };
  services: {
    title: string;
    items: readonly { title: string; body: string; alt: string }[];
    cta: string;
    moreTitle: string;
    moreCta: string;
  };
  pkg: {
    eyebrow: string;
    title: string;
    lede: string;
    /** El `aria-label` de la lista de pestañas. */
    tablist: string;
    tabs: readonly { title: string; heading: string; body: string }[];
  };
  steps: { title: string; lede: string; items: readonly string[]; cta: string };
  clients: {
    title: string;
    quote: string;
    name: string;
    role: string;
    /** Lo que oye un lector de pantalla de la tarjeta de reseña. */
    scene: string;
  };
  faq: { title: string; lede: string; items: readonly { q: string; a: string }[]; cta: string };
  contact: { title: string; lede: string; quote: string; name: string; role: string };
};

const en: SeoCopy = {
  meta: {
    title: "SEO Services: Local SEO, Audits and Link Building",
    description:
      "Local SEO, site audits, keyword research and link building. We tell you what is worth doing on your site and what is not worth paying for.",
  },
  hero: {
    eyebrow: "Search Engine Optimization",
    title: "Fueling Startup Growth with SEO",
    lede:
      "Celebrate startup growth with our SEO expertise. Discover how we can fuel your success and propel your brand to new heights.",
    cta: "Get Started",
    scene:
      "A local search for an EV charger installer in Leeds: the map pins the example business, it tops the list of results, and a chart shows its clicks from Google rising from January to June.",
  },
  tools: { label: "Tools we work with" },
  services: {
    title: "Services",
    items: [
      {
        title: "Comprehensive SEO Audit",
        body: "An easy start to boost your business. Get the best results tailored to your industry.",
        alt: "An isometric dashboard with a bar chart and a magnifier.",
      },
      {
        title: "Local SEO",
        body: "Reach the pinnacle of local search with highly effective geographic targeting.",
        alt: "A map pin marked SEO dropped on a location.",
      },
      {
        title: "Link Building",
        body: "Maximize budget efficiency with top-tier backlinks.",
        alt: "A monitor showing a rising line chart beside two gears.",
      },
    ],
    cta: "Let’s Talk",
    moreTitle: "Can’t find what you need?",
    moreCta: "Contact Us",
  },
  pkg: {
    eyebrow: "SEO Package",
    title: "What is included in our SEO package?",
    lede:
      "When you join forces with emmvi, we’ll enhance your website’s visibility, drive traffic, and supercharge conversions. Our services are crafted to optimize your website and elevate your ranking, encompassing:",
    tablist: "What the SEO package includes",
    /**
     * Recuperado del backup del WordPress (`.wpress` de agosto de 2026, tabla
     * `posts`, pagina `seo`). El Figma solo desarrollaba la primera; las demas
     * estuvieron marcadas como pendientes hasta que se abrio el backup, que las
     * tenia escritas enteras. Es el mismo copy: el archivo de Figma reutilizaba
     * el texto del sitio vivo.
     *
     * **Texto intacto**, como con los articulos. No se ha reescrito nada.
     */
    tabs: [
      {
        title: "Website Audit",
        heading: "Website Audit Services",
        body: "At emmvi, our first step in enhancing your online presence is to conduct a comprehensive website audit. This audit involves a meticulous evaluation of every vital aspect of your website to uncover potential issues that could impact its performance, user experience, and search engine ranking. Our goal is to help you identify and rectify issues like broken links, slow loading times, duplicate content, subpar design, low-quality backlinks, and more. We're here to provide you with expert recommendations and best practices that will elevate your website's SEO, user-friendliness, and conversion rates.",
      },
      {
        title: "Keyword Research",
        heading: "Keyword Research Service",
        body: "At emmvi, our team of SEO experts is dedicated to elevating your online presence. We employ a range of advanced tools, including Google Ads Keyword Planner, Ahrefs Keyword Generator, and cutting-edge AI-driven keyword research instruments to unearth the perfect keywords for your website, content, or online marketing initiatives. Keywords are the building blocks of online searches: the words and phrases people use to discover information, products, or services on the internet. By strategically targeting the most relevant keywords, you can amplify your visibility, drive more traffic, and increase conversions on major search engines such as Google, Bing, YouTube, Amazon, and beyond. Unlock the potential of your digital presence with our comprehensive keyword research services.",
      },
      {
        title: "On-page Optimization",
        heading: "On-page Optimization Service",
        body: "At emmvi, our dedicated on-page SEO experts are here to elevate your web presence. We specialize in enhancing the quality and relevance of your web pages to ensure they cater to both users and search engines. On-page optimization is a meticulous process that involves fine-tuning various elements on your web pages, including content, HTML code, title tags, meta descriptions, headings, images, links, and more. By optimizing these elements, you can significantly improve your website’s usability, performance, and search engine ranking. Our goal is to enhance your online visibility and provide users with a seamless experience while boosting your presence in search results.",
      },
      {
        title: "Off-page Optimization",
        heading: "Off-page Optimization Service",
        body: "emmvi’s off-page optimization boosts your website’s authority and trust by acquiring links, mentions, reviews, and signals from reputable sources. Actions include quality backlink building, brand awareness, audience-focused content, and maintaining NAP consistency.",
      },
    ],
  },
  steps: {
    title: "Steps in Website Search Optimization",
    lede: "Unlocking Search Optimization Success",
    items: [
      "Thorough Analysis of the Niche (Topics) in the Target Region",
      "Development of a Comprehensive Promotion Strategy, Including Content Marketing and Link Building",
      "Complete Technical Analysis of the Website",
      "EAT (Expertise, Authoritativeness, Trustworthiness) Analysis of the Website",
      "Iterative Semantic Core Preparation",
      "Website Optimization for Target Region's Search Engines",
      "Link Building Maintenance for Quality Backlinks",
      "Website Structure Creation",
      "Competitor Audit",
      "Preparation of Essential Content of All Types",
    ],
    cta: "Get Started",
  },
  clients: {
    title: "What Our Clients Say",
    quote:
      "Gustavo and Nico do great work. I’ve been really happy with multiple websites they’ve built for me. They have a great eye for design and a strong focus on user experience, making sure everything not only looks good but is easy to navigate. They’re talented, reliable, and easy to work with.",
    name: "Jared White",
    role: "Founder at JBZ Beats",
    scene: "A five-star review card, posted on Google.",
  },
  faq: {
    title: "Frequently Asked Questions",
    lede:
      "If you have any questions that aren’t listed below, feel free to schedule a call to speak with someone from our team.",
    /**
     * Recuperado del backup del WordPress, igual que las pestañas. Texto
     * intacto. "Do you guarantee the #1 position?" responde que no, y esa la
     * firma emmvi hoy igual que entonces: es de las pocas del posicionamiento
     * viejo que pasa el filtro de PRODUCT.md tal cual.
     */
    items: [
      {
        q: "What is SEO, and why do I need it?",
        a: "SEO, or Search Engine Optimization, is the process of improving your website's visibility in search engine results. It's essential for driving organic traffic, increasing online presence, and ultimately boosting business success.",
      },
      {
        q: "How long does it take to see SEO results?",
        a: "SEO results vary, but improvements can be seen in a few months. However, a comprehensive SEO strategy is an ongoing effort, and long-term benefits are the focus.",
      },
      {
        q: "What is link building, and why is it essential for SEO?",
        a: "Link building is the process of acquiring quality backlinks from other websites. It’s vital because search engines consider backlinks a vote of confidence, which can improve your website’s authority and rankings.",
      },
      {
        q: "Do you guarantee the #1 position in search results?",
        a: "We cannot guarantee the #1 position, as SEO depends on various factors, including competition and algorithm changes. Our aim is to improve your rankings and visibility.",
      },
      {
        q: "What reporting and analytics do you provide for SEO?",
        a: "We provide detailed monthly reports that include keyword ranking, traffic analytics, backlink progress, and a summary of the work performed. This transparency helps you track your SEO performance.",
      },
    ],
    cta: "Schedule a Call",
  },
  contact: {
    title: "Talk to our Sales team",
    lede: "We’ll help you find the right plan and pricing for your business.",
    quote:
      "Gus helped me redesign my website and honestly, it turned out way better than I imagined. It looks clean, it loads fast, and it works great on phones too.",
    name: "Alicia Ryz",
    role: "Ecommerce store",
  },
};

const es: SeoCopy = {
  meta: {
    title: "SEO: posicionamiento local, auditorías y enlaces",
    description:
      "SEO local, auditorías, palabras clave y enlaces. Te decimos qué merece la pena hacer en tu web y por qué no merece la pena pagar.",
  },
  hero: {
    eyebrow: "Posicionamiento en buscadores",
    title: "Crece en Google con SEO",
    lede:
      "Más visitas desde buscadores, sin humo. Te decimos qué merece la pena hacer en tu web y qué no, y lo hacemos contigo.",
    cta: "Empezar",
    scene:
      "Una búsqueda local de instalador de cargadores en Leeds: el mapa marca el negocio de ejemplo, sale el primero de la lista y una gráfica muestra sus clics desde Google subiendo de enero a junio.",
  },
  tools: { label: "Herramientas con las que trabajamos" },
  services: {
    title: "Servicios",
    items: [
      {
        title: "Auditoría SEO completa",
        body: "El punto de partida: qué falla en tu web y por dónde empezar.",
        alt: "Un panel isométrico con una gráfica de barras y una lupa.",
      },
      {
        title: "SEO local",
        body: "Que te encuentre quien busca cerca de ti.",
        alt: "Un marcador de mapa con la palabra SEO sobre una ubicación.",
      },
      {
        title: "Enlaces de calidad",
        body: "Enlaces que suman autoridad, sin pagar por los que no sirven.",
        alt: "Un monitor con una gráfica ascendente junto a dos engranajes.",
      },
    ],
    cta: "Hablemos",
    moreTitle: "¿No encuentras lo que buscas?",
    moreCta: "Contáctanos",
  },
  pkg: {
    eyebrow: "Paquete SEO",
    title: "¿Qué incluye el paquete SEO?",
    lede:
      "Trabajamos para que tu web se vea más, reciba más visitas y convierta mejor. El paquete incluye:",
    tablist: "Qué incluye el paquete SEO",
    tabs: [
      {
        title: "Auditoría web",
        heading: "Auditoría de tu web",
        body: "Empezamos revisando tu web a fondo: enlaces rotos, velocidad, contenido duplicado, diseño, enlaces de poca calidad y todo lo que frena tu posicionamiento. Te damos recomendaciones claras para mejorar el SEO, la experiencia de uso y las conversiones.",
      },
      {
        title: "Palabras clave",
        heading: "Investigación de palabras clave",
        body: "Buscamos las palabras y frases que usa tu cliente para encontrar lo que ofreces, con Google Ads Keyword Planner, Ahrefs y herramientas de IA. Apuntar a las correctas te da más visibilidad, más visitas y más conversiones en Google, Bing, YouTube o Amazon.",
      },
      {
        title: "Optimización on-page",
        heading: "Optimización on-page",
        body: "Afinamos lo que está dentro de tu web: contenido, código HTML, títulos, meta descripciones, encabezados, imágenes y enlaces. Así tus páginas funcionan mejor para quien las visita y para los buscadores.",
      },
      {
        title: "Optimización off-page",
        heading: "Optimización off-page",
        body: "Reforzamos la autoridad de tu web desde fuera: enlaces de calidad, menciones, reseñas, contenido pensado para tu público y datos de contacto coherentes en todos los directorios.",
      },
    ],
  },
  steps: {
    title: "Cómo trabajamos el SEO",
    lede: "Los diez pasos del posicionamiento",
    items: [
      "Análisis del sector en tu zona",
      "Estrategia de contenidos y enlaces",
      "Análisis técnico completo de la web",
      "Análisis EAT: experiencia, autoridad y confianza",
      "Preparación iterativa del núcleo semántico",
      "Optimización para los buscadores de tu zona",
      "Mantenimiento de enlaces de calidad",
      "Creación de la estructura de la web",
      "Auditoría de la competencia",
      "Preparación de los contenidos esenciales",
    ],
    cta: "Empezar",
  },
  clients: {
    title: "Lo que dicen nuestros clientes",
    // La misma traduccion que la home (lib/copy/home.ts): una sola voz.
    quote:
      "Gustavo y Nico hacen un gran trabajo. Estoy muy contento con las webs que me han construido. Tienen buen ojo para el diseño y cuidan la experiencia de uso: todo se ve bien y es fácil de navegar. Buenos, fiables y fáciles de tratar.",
    name: "Jared White",
    role: "Fundador de JBZ Beats",
    scene: "Una tarjeta de reseña de cinco estrellas, publicada en Google.",
  },
  faq: {
    title: "Preguntas frecuentes",
    lede: "Si tienes otra duda, agenda una llamada y la vemos contigo.",
    items: [
      {
        q: "¿Qué es el SEO y para qué lo necesito?",
        a: "Es mejorar la visibilidad de tu web en los resultados de los buscadores. Sirve para atraer visitas sin pagar por cada clic y para que tu negocio aparezca cuando alguien busca lo que ofreces.",
      },
      {
        q: "¿Cuánto tarda en notarse?",
        a: "Depende de cada caso, pero las primeras mejoras suelen verse en unos meses. El SEO es un trabajo continuo y lo que importa es el resultado a largo plazo.",
      },
      {
        q: "¿Qué es el link building y por qué importa?",
        a: "Es conseguir enlaces de calidad desde otras webs. Los buscadores los leen como un voto de confianza, y eso mejora la autoridad y la posición de tu web.",
      },
      {
        q: "¿Garantizáis el primer puesto en Google?",
        a: "No. El SEO depende de la competencia y de cambios de algoritmo que nadie controla. Lo que hacemos es mejorar tu posición y tu visibilidad.",
      },
      {
        q: "¿Qué informes recibo?",
        a: "Un informe mensual con la posición de tus palabras clave, las visitas, los enlaces conseguidos y un resumen del trabajo hecho. Así sabes en qué va tu SEO.",
      },
    ],
    cta: "Agendar una llamada",
  },
  contact: {
    title: "Habla con nuestro equipo",
    lede: "Te ayudamos a elegir el plan y el precio que encajan con tu negocio.",
    // Recorte de la misma traduccion que la home (lib/copy/home.ts).
    quote:
      "Gus rediseñó mi web y quedó mucho mejor de lo que imaginaba. Limpia, rápida y funciona genial en el móvil.",
    name: "Alicia Ryz",
    role: "Tienda online",
  },
};

export const seoCopy: Record<Locale, SeoCopy> = { en, es };
