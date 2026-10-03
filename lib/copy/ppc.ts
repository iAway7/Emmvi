import type { FaqItem } from "@/components/faq-accordion";
import type { Locale } from "@/lib/i18n";

/**
 * El texto de /services/ppc y /es/services/ppc. La plantilla que lo pinta es
 * components/pages/ppc.tsx; las escenas con texto dentro del SVG se traducen
 * en components/services/ppc-illustrations.tsx.
 *
 * El ingles es el del Figma "Services - PPC" (nodo 165:3225) con las
 * correcciones anotadas abajo. El español (2026-10-03) va mas corto a
 * proposito, como el resto de /es/: titulares de cuatro a seis palabras y
 * parrafos recortados, no traduccion literal. Los nombres de plataforma se
 * quedan.
 */

export type PpcCopy = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    cta: string;
    /** Lo que oye un lector de pantalla de la escena del hero. */
    label: string;
  };
  platforms: { caption: string };
  roi: {
    title: string;
    body: string;
    highlights: readonly string[];
    cta: string;
    label: string;
  };
  control: {
    title: string;
    p1: string;
    p2: string;
    label: string;
  };
  /** Mismo orden que los iconos de la plantilla: Google, Meta, TikTok, LinkedIn. */
  channels: readonly { title: string; body: string }[];
  what: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    cta: string;
  };
  types: {
    title: string;
    p1: string;
    p2: string;
    items: readonly string[];
    cta: string;
  };
  benefits: {
    title: string;
    lede: string;
    /** Mismo orden que los iconos de la plantilla. */
    items: readonly { title: string; body: string; alt: string }[];
  };
  faq: {
    title: string;
    lede: string;
    items: readonly FaqItem[];
    cta: string;
  };
  contact: { title: string; lede: string };
};

/* --------------------------------------------------------------------------
   Ingles
   -------------------------------------------------------------------------- */

const en: PpcCopy = {
  meta: {
    title: "PPC Management for Google, Meta and TikTok Ads",
    description:
      "Paid campaigns built, measured and adjusted across Google, Meta, TikTok and LinkedIn. The ad accounts and the data stay yours, whoever runs them.",
  },
  hero: {
    eyebrow: "PPC",
    title: "Paid Advertising Services to Make Every Click Count",
    lede: "Unlock the potential of your business with our PPC expertise. Drive targeted traffic, maximize ROI, and experience growth like never before.",
    cta: "Get Started",
    label:
      "A sponsored search result for an example EV charger installer in Leeds is tapped on a phone, opens the business's quote page, and arrives as a new enquiry from the Google ad, while the campaign shows as running.",
  },
  platforms: { caption: "Platforms we run ads on" },
  roi: {
    title: "Need a Paid Ads Agency to Boost ROI?",
    body: "Ready to reach new customers and supercharge your business? Paid advertising is the way to go, but it’s not just about spending money. You need a friendly, results-driven agency that knows how to create winning campaigns, measure success, and boost conversions.",
    /**
     * El segundo punto del Figma dice "Paid ads management boosting conversions
     * by 311% on average". Esa cifra no está medida, así que se cae — no el
     * punto.
     *
     * El tercero viene roto en el archivo: "Visually fun data reports ‍real-time
     * data reports on KPIs" repite "data reports" porque el original une dos
     * fragmentos con un ZWJ. Es errata, como "Reponsive Design" en
     * website-design.
     */
    highlights: [
      "A team of certified paid advertising experts",
      "Paid ads management focused on conversions",
      "Visually fun, real-time data reports on KPIs",
      "Omni-channel PPC management services",
    ],
    cta: "Get Started",
    label:
      "Every step tracked, from seeing the ad to clicking to asking for a quote, and a weekly report sent every Monday covering spend, clicks, enquiries and cost per enquiry.",
  },
  control: {
    title: "Skilled Paid Ads Control Delivered by Online Advertising Pros",
    p1: "We believe in promoting your message across different channels and optimizing for conversions. After all, we’ve done it time and time again.",
    // El Figma escribe "matters most- whether", con guion corto pegado. Es
    // puntuación rota, no decisión de diseño.
    p2: "We help you get found when and where it matters most, whether that’s on Google, Facebook, TikTok, LinkedIn, or any other channel. Our paid advertising agency offers a variety of services to help you reach your goals, including but not limited to:",
    label: "A channel panel with Google, Meta, TikTok and LinkedIn, all switched on.",
  },
  channels: [
    {
      title: "Google Ads",
      body: "Bypassing organic search results, Google Ads puts your message in front of people who are already searching for what you have to offer. Ads are displayed at the top of SERPs, which means they will be seen by potential customers.",
    },
    {
      title: "Facebook and Instagram Ads",
      body: "Get your message in front of billions of active monthly users on the world’s largest social media platform. We target your audience with laser precision, whether they’re scrolling through their newsfeed, looking for something specific, or using Facebook to research products and services.",
    },
    {
      title: "TikTok Ads",
      body: "With over 1 billion active monthly users, TikTok is one of the fastest-growing social media platforms. We create engaging, short-form videos that capture the attention of your target audience and prompt them to take action.",
    },
    {
      title: "LinkedIn Ads",
      body: "Allow your brand to be seen by professionals on the world’s largest professional network. We create ads that drive awareness, engagement, and conversions by targeting your ideal customer with powerful filters.",
    },
  ],
  what: {
    title: "What Is Paid Advertising and How Does It Work?",
    p1: "Paid advertising is when businesses pay to put their ads on platforms like Google, Facebook, Instagram, and LinkedIn. It’s a powerful online marketing method. Using services like PPC campaign management, businesses can place ads strategically to find the right audience.",
    p2: "When someone clicks on your ad, they go to your website or a special page to learn more. Paid advertising lets you target your ideal customer very precisely, making it more likely they’ll become a paying customer.",
    p3: "While paid advertising helps get new customers, remember, it’s just part of the whole picture. A successful marketing strategy also includes other things like SEO, content marketing, and social media.",
    cta: "Get Started",
  },
  types: {
    title: "Types of Paid Ads",
    p1: "We will help you decide which type of paid ads will be best for your business, based on your goals, target audience, and budget, but it doesn’t hurt to know the basics.",
    p2: "The most common types are:",
    items: [
      "Search engine marketing (SEM)",
      "Display advertising",
      "Social media advertising",
      "Google shopping advertising",
      "Local services advertising",
      "Remarketing advertising",
    ],
    cta: "Get Started",
  },
  benefits: {
    /* El Figma escribe "The Benefits of Paid Online Advertising With emmvi",
       que a 64px son cuatro líneas en esta columna. Acortado a dos, en la
       misma forma de pregunta que los otros dos titulares de la pantalla. */
    title: "Why Run Your Ads With Us",
    lede: "Having gained insights into the fundamentals of paid online advertising and its mechanics, let’s explore the advantages of leveraging our PPC management services:",
    items: [
      {
        title: "Diversified Service",
        body: "emmvi goes beyond mere paid advertising; we provide a diverse array of customizable digital marketing services tailored to suit your specific requirements.",
        alt: "An isometric gear linked to three cubes.",
      },
      {
        title: "Expertise Within Our Walls",
        body: "Our in-house team comprises experts proficient in every facet of digital marketing. From crafting campaigns to devising strategies, and thorough analysis to comprehensive reporting, we’ve got it all covered.",
        alt: "An isometric browser window beside a bar chart.",
      },
      {
        title: "Customized Solutions",
        body: "Recognizing the uniqueness of each business, we provide customized solutions crafted specifically for your needs. We invest time in understanding your business, goals, and target audience before formulating a personalized plan of action.",
        alt: "An isometric dartboard with an arrow in the bullseye.",
      },
      {
        title: "Transparency and Communication",
        body: "At emmvi, we prioritize transparency and open communication. You’ll stay informed about your campaign’s progress and budget allocation. Regular reports and analyses ensure you witness the tangible results of our dedicated efforts.",
        alt: "An isometric envelope with a bar chart rising out of it.",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    lede: "If you have any questions that aren’t listed below, feel free to schedule a call to speak with someone from our team.",
    /**
     * Recuperado del backup del WordPress (`.wpress` de agosto de 2026, tabla
     * `posts`, pagina `ppc`). El Figma escribe las siete preguntas y
     * desarrolla solo la que dibuja abierta; las otras seis estuvieron
     * marcadas como pendientes hasta que se abrio el backup, que las tenia
     * escritas. Es el mismo copy: el archivo de Figma reutilizaba el texto del
     * sitio vivo.
     *
     * **Texto intacto**, como con los articulos. No se ha reescrito nada.
     *
     * "How does PPC work?" va primera porque es la que el archivo dibuja
     * abierta, aunque en el orden de capas esté al final.
     */
    items: [
      {
        q: "How does PPC work?",
        a: "In a PPC campaign, advertisers bid on specific keywords, and their ads are displayed when users search for those keywords. Advertisers pay a fee only when their ad is clicked.",
      },
      {
        q: "What platforms support PPC advertising?",
        a: "PPC advertising is widely supported on platforms such as Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, and more.",
      },
      {
        q: "How can PPC benefit my business?",
        a: "PPC offers immediate visibility, precise audience targeting, and measurable results. It’s an effective way to drive traffic, generate leads, and increase conversions.",
      },
      {
        q: "Do I have control over my PPC budget?",
        a: "Yes, advertisers have full control over their PPC budget. You can set a daily or monthly budget, and once it’s reached, your ads will no longer appear until the next budget cycle.",
      },
      {
        q: "How do I choose the right keywords for my PPC campaign?",
        a: "Keyword selection involves identifying terms relevant to your business. Comprehensive keyword research, considering search volume and relevance, is crucial for a successful PPC campaign.",
      },
      {
        q: "How do you measure the success of a PPC campaign?",
        a: "Success is measured through key performance indicators (KPIs) like click-through rate (CTR), conversion rate, and return on investment (ROI). Detailed analytics provide insights into campaign performance.",
      },
      {
        q: "What ongoing management is required for a PPC campaign?",
        a: "Ongoing management includes monitoring campaign performance, adjusting bids, refining ad copy, and staying updated on industry trends. Regular optimization ensures sustained success.",
      },
    ],
    cta: "Schedule a Call",
  },
  contact: {
    title: "Talk to our Sales team",
    lede: "We’ll help you find the right plan and pricing for your business.",
  },
};

/* --------------------------------------------------------------------------
   Español. Mas corto que el ingles; tuteo; "emmvi" en minuscula.
   -------------------------------------------------------------------------- */

const es: PpcCopy = {
  meta: {
    title: "Gestión de PPC en Google, Meta y TikTok Ads",
    description:
      "Campañas de pago montadas, medidas y ajustadas en Google, Meta, TikTok y LinkedIn. Las cuentas y los datos son tuyos, los lleve quien los lleve.",
  },
  hero: {
    eyebrow: "PPC",
    title: "Anuncios de pago que convierten",
    lede: "Tráfico que ya busca lo que vendes, presupuesto bajo control y resultados que se pueden medir.",
    cta: "Empezar",
    label:
      "Un resultado patrocinado de un instalador de cargadores de ejemplo en Leeds se toca en un móvil, abre la página de presupuesto del negocio y entra como solicitud nueva desde el anuncio de Google, con la campaña en marcha.",
  },
  platforms: { caption: "Plataformas en las que anunciamos" },
  roi: {
    title: "¿Necesitas una agencia de PPC?",
    body: "Pagar anuncios es fácil; que rindan, no. Hace falta quien sepa montar campañas, medirlas y mejorar la conversión semana a semana.",
    highlights: [
      "Equipo certificado en publicidad de pago",
      "Campañas pensadas para convertir",
      "Informes claros y en tiempo real",
      "PPC en todos los canales",
    ],
    cta: "Empezar",
    label:
      "Cada paso medido, de ver el anuncio a pedir presupuesto, y un informe cada lunes con gasto, clics, leads y coste por lead.",
  },
  control: {
    title: "Campañas llevadas por profesionales",
    p1: "Llevamos tu mensaje a varios canales y optimizamos para convertir. Lo hemos hecho muchas veces.",
    p2: "Te encontrarán donde y cuando importa: Google, Facebook, TikTok, LinkedIn o el canal que toque. Entre otros servicios:",
    label: "Un panel de canales con Google, Meta, TikTok y LinkedIn, todos activados.",
  },
  channels: [
    {
      title: "Google Ads",
      body: "Tu anuncio sale arriba de los resultados cuando alguien ya busca lo que ofreces, sin esperar al posicionamiento orgánico.",
    },
    {
      title: "Facebook e Instagram Ads",
      body: "Llega a miles de millones de usuarios activos y segmenta con precisión, estén mirando el muro, buscando algo concreto o comparando servicios.",
    },
    {
      title: "TikTok Ads",
      body: "Más de mil millones de usuarios al mes y una de las redes que más crece. Creamos vídeos cortos que captan la atención y llevan a actuar.",
    },
    {
      title: "LinkedIn Ads",
      body: "Tu marca ante profesionales, en la mayor red profesional del mundo. Anuncios con filtros potentes que generan notoriedad, interacción y conversiones.",
    },
  ],
  what: {
    title: "¿Qué es la publicidad de pago?",
    p1: "Es pagar por mostrar tus anuncios en Google, Facebook, Instagram o LinkedIn. Con una gestión de campañas bien hecha, el anuncio llega justo al público adecuado.",
    p2: "Quien hace clic va a tu web o a una página pensada para ese anuncio. La segmentación es tan precisa que es más probable que acabe comprando.",
    p3: "Trae clientes nuevos, pero es solo una parte. Una estrategia completa suma SEO, contenidos y redes sociales.",
    cta: "Empezar",
  },
  types: {
    title: "Tipos de anuncios de pago",
    p1: "Te ayudamos a elegir el tipo que mejor encaja con tus objetivos, tu público y tu presupuesto. Aun así, conviene conocer lo básico.",
    p2: "Los más habituales:",
    items: [
      "Anuncios en buscadores (SEM)",
      "Anuncios de display",
      "Anuncios en redes sociales",
      "Google Shopping",
      "Anuncios de servicios locales",
      "Remarketing",
    ],
    cta: "Empezar",
  },
  benefits: {
    title: "Por qué anunciarte con nosotros",
    lede: "Ya sabes cómo funciona la publicidad de pago. Esto es lo que aporta nuestra gestión de PPC:",
    items: [
      {
        title: "Más que anuncios",
        body: "emmvi no se queda en los anuncios: ofrecemos servicios de marketing digital a medida de lo que necesites.",
        alt: "Un engranaje isométrico unido a tres cubos.",
      },
      {
        title: "Equipo propio",
        body: "Nuestro equipo cubre cada parte del marketing digital: campañas, estrategia, análisis e informes. Sin externalizar.",
        alt: "Una ventana de navegador isométrica junto a un gráfico de barras.",
      },
      {
        title: "Soluciones a medida",
        body: "Cada negocio es distinto. Antes de proponer un plan, entendemos tu negocio, tus objetivos y tu público.",
        alt: "Una diana isométrica con una flecha en el centro.",
      },
      {
        title: "Transparencia y comunicación",
        body: "Sabrás siempre cómo va la campaña y en qué se gasta el presupuesto. Informes periódicos con resultados reales.",
        alt: "Un sobre isométrico del que sale un gráfico de barras.",
      },
    ],
  },
  faq: {
    title: "Preguntas frecuentes",
    lede: "Si tienes alguna duda que no esté aquí, agenda una llamada con nuestro equipo.",
    items: [
      {
        q: "¿Cómo funciona el PPC?",
        a: "Pujas por palabras clave y tu anuncio aparece cuando alguien las busca. Solo pagas cuando hacen clic.",
      },
      {
        q: "¿En qué plataformas hay PPC?",
        a: "En Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads y muchas más.",
      },
      {
        q: "¿Qué aporta el PPC a mi negocio?",
        a: "Visibilidad inmediata, segmentación precisa y resultados medibles. Sirve para atraer tráfico, generar contactos y aumentar conversiones.",
      },
      {
        q: "¿Controlo el presupuesto?",
        a: "Sí, del todo. Fijas un presupuesto diario o mensual y, al alcanzarlo, los anuncios se detienen hasta el siguiente ciclo.",
      },
      {
        q: "¿Cómo se eligen las palabras clave?",
        a: "Buscando términos relevantes para tu negocio y valorando su volumen de búsqueda. Es la base de una campaña que funciona.",
      },
      {
        q: "¿Cómo se mide el éxito?",
        a: "Con indicadores como el CTR, la tasa de conversión y el retorno de la inversión (ROI). La analítica detallada muestra cómo va la campaña.",
      },
      {
        q: "¿Qué gestión continua necesita?",
        a: "Seguir el rendimiento, ajustar pujas, afinar los textos y estar al día de las novedades. La optimización regular mantiene los resultados.",
      },
    ],
    cta: "Agendar una llamada",
  },
  contact: {
    title: "Habla con nuestro equipo",
    lede: "Te ayudamos a encontrar el plan y el precio adecuados para tu negocio.",
  },
};

export const ppcCopy: Record<Locale, PpcCopy> = { en, es };
