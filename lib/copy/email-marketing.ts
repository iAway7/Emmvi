import type { Locale } from "@/lib/i18n";

/**
 * El texto de /services/email-marketing y /es/services/email-marketing. La
 * plantilla que lo pinta es components/pages/email-marketing.tsx.
 *
 * El ingles es el del frame "Services - Email Marketing" del Figma, literal,
 * mas las siete respuestas del FAQ que el frame dejaba vacias (ver la nota
 * sobre `faq` mas abajo). El español (2026-10-03) va mas corto a proposito,
 * como el resto de /es/: titulares de cuatro a seis palabras y parrafos
 * recortados, no traduccion literal. Fernhouse y Lucy M. son los mismos en
 * los dos; el texto que va dentro de las escenas SVG vive en
 * components/services/email-illustrations.tsx, no aqui.
 */

/** Las cuatro tarjetas, cada una con su icono-escena. */
export type PillarScene = "strategy" | "automation" | "design" | "analysis";

export type EmailMarketingCopy = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    cta: string;
    /** Lo que oye un lector de pantalla de la escena del hero. */
    label: string;
  };
  tools: { label: string };
  capture: {
    title: string;
    lede: string;
    pillars: readonly {
      title: string;
      body: string;
      scene: PillarScene;
      /** Lo que oye un lector de pantalla del icono-escena. */
      alt: string;
    }[];
  };
  retention: {
    title: string;
    body: readonly string[];
    outcomes: readonly string[];
    cta: string;
    label: string;
  };
  automate: {
    title: string;
    body: readonly string[];
    cta: string;
    label: string;
  };
  testimonials: { title: string };
  faq: {
    title: string;
    lede: string;
    items: readonly { q: string; a: string }[];
    cta: string;
  };
  contact: { title: string; lede: string };
};

const en: EmailMarketingCopy = {
  meta: {
    title: "Email Marketing and Follow-Up Sequences",
    description:
      "Campaigns, follow-up sequences and the automation behind them, set up so the message goes out whether or not anyone remembers to send it.",
  },
  hero: {
    eyebrow: "Email Marketing",
    title: "Maximize Customer Engagement",
    lede: "Our team handles every aspect, ensuring your email campaigns are expertly crafted, timed, and fine-tuned for success.",
    cta: "Get Started",
    label:
      "A welcome email from an example shop being written for new subscribers, and the same email arriving at the top of a customer's inbox.",
  },
  tools: { label: "Platforms we work with" },
  capture: {
    title: "Capture, sell, and retain customers.",
    lede: "Transform every website visit into loyal, repeat customers. With our proven methodology, you can boost your store’s sales and achieve sustainable, long-term growth.",
    pillars: [
      {
        title: "Customized Strategies",
        body: "We dive deep into your brand to define, design, and implement tailored strategies that align with both your brand identity and your specific business needs.",
        scene: "strategy",
        alt: "A plan with its steps ticked off and a target.",
      },
      {
        title: "Newsletters and Automation",
        body: "Send the emails your customers genuinely want to read and engage with, fostering a close relationship and a sense of belonging that retains and fosters your community..",
        scene: "automation",
        alt: "An email with a repeat sign: it sends itself.",
      },
      {
        title: "Impactful Texts and Designs",
        body: "Your emails won't be 'just another one.' Each email is crafted to make an impact and hold the customer's attention until the end. Stand out from your competition and position yourself in your customers' 'top of mind.",
        scene: "design",
        alt: "An email layout with type, an image and a button, and a pen.",
      },
      {
        title: "Analysis and Continuous Optimization",
        body: "Without analysis, there's no improvement. That's why we closely track your metrics and adjust the strategy to maximize results, ensuring your sales continually improve.",
        scene: "analysis",
        alt: "A chart that rises month on month, under a magnifying glass.",
      },
    ],
  },
  retention: {
    title: "Maximize Customer Engagement",
    body: [
      "Rising advertising costs make acquiring new customers increasingly expensive. Relying solely on paid traffic leaves your business vulnerable and less profitable, allowing better-funded competitors to outperform you.",
      "You need a robust customer retention and customer lifetime value (LTV) enhancement system.",
    ],
    outcomes: [
      "Transform website visitors into subscribers.",
      "Build strong relationships that drive sales.",
      "Foster customer loyalty and maximize profits.",
    ],
    cta: "Get Started",
    label:
      "An example customer, Lucy, with three orders since March, surrounded by the emails that brought her back: welcome, saved cart, thank-you and something new in.",
  },
  automate: {
    title: "Automate Processes and Scale Your Sales",
    body: [
      "Imagine being able to send each customer the right message at the right moment, entirely personalized based on their relationship with your brand.",
      "Now, picture being able to send that personalized email automatically. What would be the impact on your business?",
      "Let the systems work for you, achieving higher productivity, more sales, and a solid, scalable growth.",
    ],
    cta: "Get Started",
    label:
      "The lifecycle of email flows around a loyal customer: welcome series, browse abandonment, abandoned cart, first sale, post-purchase, upsell and cross-sell, win-back and sunset flow.",
  },
  testimonials: { title: "What Our Clients Say" },
  /**
   * El Figma solo escribe la primera respuesta; las otras siete estaban sin
   * contenido y el acordeon las filtraba, asi que la pagina publicaba un FAQ
   * de una sola pregunta con el hueco debajo.
   *
   * Las siete se escriben aqui en el registro de PRODUCT.md, no en el del
   * frame: son afirmaciones sobre el servicio y tienen que poder defenderse
   * en una llamada. De ahi tres decisiones que conviene no deshacer sin
   * pensarlo:
   *
   * - **"What kind of results can I expect?" no lleva cifra**, y dice por
   *   que. Es la pregunta donde la regla de no prometer porcentajes de
   *   facturacion se juega entera; el Figma la dibuja esperando el numero
   *   que aqui no va.
   * - **"Have you worked with brands in my niche?" nombra los tres clientes
   *   reales** —la tienda, el gimnasio, el productor musical— y admite que
   *   eso es variedad, no especialidad. Es lo unico verificable que hay.
   * - Cada respuesta larga termina en el mecanismo o en el limite, no en el
   *   beneficio.
   *
   * La primera sigue siendo la del Figma, que promete "the perfect solution
   * for you" y es el lenguaje de consultora que PRODUCT.md lista como
   * anti-referencia. Se deja porque es contenido del archivo y no un hueco;
   * si se reescribe, es la unica del bloque que cambia de registro.
   */
  faq: {
    title: "Frequently Asked Questions",
    lede: "If you have any questions that aren’t listed below, feel free to schedule a call to speak with someone from our team.",
    items: [
      {
        q: "Can my store benefit from email marketing?",
        a: "We focus on helping all types of online stores reach their full potential through email marketing. If you're looking for an effective way to engage your audience, increase conversion rates, and generate more sales, our service can be the perfect solution for you.",
      },
      {
        q: "What are flows or automations?",
        a: "An email that sends itself when something happens, instead of when someone remembers. A cart gets abandoned, a first order arrives, three months go by with no opens: each of those can start a sequence. You write it once and it keeps running, including on the days nobody is at a desk.",
      },
      {
        q: "What do your services include?",
        a: "Strategy, the writing, the design, the build inside your email platform, and the reporting afterwards. In practice that is the automated flows, the campaigns you send by hand, the templates they use, how the list is segmented, and a monthly read of what actually happened. If some of it already exists we work with what is there instead of starting again.",
      },
      {
        q: "Will you consider the brand's branding?",
        a: "Yes. If you have guidelines we follow them, and if you do not we work from what your site and your products already look like. An email that does not look like the shop it came from gets deleted by people, which is a worse problem than being caught by a spam filter.",
      },
      {
        q: "Have you worked with brands in my niche?",
        a: "Maybe, and we will tell you straight on the call rather than stretch a case to fit. So far this has been built for an online store, a local gym and a music producer, which is a range rather than a speciality. What carries across is the mechanism, not the subject matter, and where it does not carry across, you should hear that before you pay for anything.",
      },
      {
        q: "What kind of results can I expect?",
        a: "No number from us before we have seen your list, your product and your margins. Anyone who gives you one at this stage is guessing. What we will commit to is what gets built: the flows live and tested, the campaigns going out on a schedule, and a monthly report showing opens, clicks, revenue attributed to email and what changed. If those are not moving after a few months, that is a conversation we start, not one you have to.",
      },
      {
        q: "What are newsletters or email campaigns?",
        a: "The ones you decide to send: a launch, an offer, a seasonal message, something worth telling. They go out to a list, or a segment of it, on a date you pick. Flows run themselves off what a customer does; campaigns have a person deciding. Most stores want both, and it is usually the flows that earn quietly in the background.",
      },
      {
        q: "Is there any type of reporting or tracking?",
        a: "Yes, and it is the part that usually gets skipped. Every month you get what was sent, what was opened and clicked, what was bought as a result, and which flows are paying for themselves, written in plain language, not a platform export forwarded to you. You keep your own access to the platform too, so nothing we report is something you cannot go and check.",
      },
    ],
    cta: "Get Started",
  },
  contact: {
    title: "Talk to our Sales team",
    lede: "We’ll help you find the right plan and pricing for your business.",
  },
};

/**
 * Mas corto que el ingles, no traduccion. El h1 y el h2 que en ingles repiten
 * "Maximize Customer Engagement" aqui dicen cosas distintas: el h1 la promesa
 * y el h2 el argumento de la seccion (retener sale mas barato que captar).
 * Los tres clientes del FAQ y la ausencia de cifras se mantienen.
 */
const es: EmailMarketingCopy = {
  meta: {
    title: "Email marketing y secuencias de seguimiento",
    description:
      "Campañas, secuencias de seguimiento y la automatización que las sostiene, montadas para que el mensaje salga aunque nadie se acuerde de enviarlo.",
  },
  hero: {
    eyebrow: "Email marketing",
    title: "Clientes que vuelven a comprar",
    lede: "Nos ocupamos de todo: redacción, diseño, envío y ajuste de cada campaña.",
    cta: "Empezar",
    label:
      "Un email de bienvenida de una tienda de ejemplo, escrito para nuevos suscriptores, y el mismo email llegando a la bandeja de un cliente.",
  },
  tools: { label: "Plataformas con las que trabajamos" },
  capture: {
    title: "Captar, vender y fidelizar",
    lede: "Convierte cada visita en un cliente que repite. Un método claro para que tu tienda venda más y crezca de forma sostenida.",
    pillars: [
      {
        title: "Estrategia a medida",
        body: "Estudiamos tu marca y definimos, diseñamos y ponemos en marcha una estrategia que encaja con tu identidad y con lo que necesita tu negocio.",
        scene: "strategy",
        alt: "Un plan con sus pasos marcados y una diana.",
      },
      {
        title: "Newsletters y automatización",
        body: "Emails que tus clientes quieren leer. Crean cercanía y sentido de pertenencia, y eso es lo que mantiene a tu comunidad.",
        scene: "automation",
        alt: "Un email con un signo de repetición: se envía solo.",
      },
      {
        title: "Textos y diseños con impacto",
        body: "Tus emails no serán uno más. Cada uno está pensado para captar la atención hasta el final y que tu marca sea la primera en la que piensan.",
        scene: "design",
        alt: "La maqueta de un email con texto, imagen y botón, y un bolígrafo.",
      },
      {
        title: "Análisis y mejora continua",
        body: "Sin análisis no hay mejora. Seguimos tus métricas de cerca y ajustamos la estrategia para sacarle más partido a cada envío.",
        scene: "analysis",
        alt: "Una gráfica que sube mes a mes, bajo una lupa.",
      },
    ],
  },
  retention: {
    title: "Retener cuesta menos que captar",
    body: [
      "Anunciarse es cada vez más caro. Depender solo del tráfico de pago te deja expuesto y con menos margen frente a competidores con más presupuesto.",
      "Necesitas un sistema que retenga a tus clientes y aumente lo que cada uno te compra a lo largo del tiempo.",
    ],
    outcomes: [
      "Convierte visitas en suscriptores.",
      "Crea relaciones que acaban en ventas.",
      "Fideliza y mejora el margen.",
    ],
    cta: "Empezar",
    label:
      "Una clienta de ejemplo, Lucy, con tres pedidos desde marzo, rodeada de los emails que la hicieron volver: bienvenida, cesta guardada, agradecimiento y novedades.",
  },
  automate: {
    title: "Automatiza y vende más",
    body: [
      "Imagina enviar a cada cliente el mensaje adecuado en el momento justo, según su relación con tu marca.",
      "Ahora imagina que ese email sale solo. ¿Qué cambiaría en tu negocio?",
      "Deja que los sistemas trabajen por ti: más productividad, más ventas y un crecimiento que se sostiene.",
    ],
    cta: "Empezar",
    label:
      "El ciclo de flujos de email alrededor de un cliente fiel: bienvenida, visita sin compra, cesta olvidada, primera compra, posventa, venta cruzada, rescate y despedida.",
  },
  testimonials: { title: "Lo que dicen nuestros clientes" },
  faq: {
    title: "Preguntas frecuentes",
    lede: "Si tienes alguna duda que no esté aquí, agenda una llamada con alguien del equipo.",
    items: [
      {
        q: "¿Le sirve el email marketing a mi tienda?",
        a: "Trabajamos con todo tipo de tiendas online. Si buscas una forma eficaz de llegar a tu audiencia, convertir más y vender más, el email marketing suele ser la pieza que falta.",
      },
      {
        q: "¿Qué son los flujos o automatizaciones?",
        a: "Un email que se envía solo cuando pasa algo, no cuando alguien se acuerda. Una cesta abandonada, un primer pedido, tres meses sin abrir nada: cada caso puede arrancar una secuencia. Se escribe una vez y sigue funcionando, también los días en que nadie está delante del ordenador.",
      },
      {
        q: "¿Qué incluye el servicio?",
        a: "Estrategia, redacción, diseño, el montaje en tu plataforma de email y el informe posterior. En la práctica: los flujos automáticos, las campañas que envías a mano, sus plantillas, la segmentación de la lista y una lectura mensual de lo que ha pasado. Si algo ya existe, partimos de ahí en vez de empezar de cero.",
      },
      {
        q: "¿Respetáis la imagen de mi marca?",
        a: "Sí. Si tienes una guía de estilo la seguimos; si no, partimos de cómo se ven ya tu web y tus productos. Un email que no parece de la tienda que lo envía se borra, y eso es peor que caer en el filtro de spam.",
      },
      {
        q: "¿Habéis trabajado en mi sector?",
        a: "Puede, y te lo diremos claro en la llamada en vez de estirar un caso para que encaje. Hasta ahora lo hemos montado para una tienda online, un gimnasio y un productor musical: variedad, no especialidad. Lo que se traslada es el mecanismo, no el sector, y donde no se traslada, debes saberlo antes de pagar nada.",
      },
      {
        q: "¿Qué resultados puedo esperar?",
        a: "Ninguna cifra antes de ver tu lista, tu producto y tus márgenes. Quien te dé una a estas alturas está adivinando. A lo que sí nos comprometemos es a lo que se construye: los flujos activos y probados, las campañas saliendo con calendario y un informe mensual con aperturas, clics, ingresos atribuidos al email y qué ha cambiado. Si tras unos meses eso no se mueve, la conversación la empezamos nosotros.",
      },
      {
        q: "¿Qué son las newsletters o campañas?",
        a: "Las que decides enviar tú: un lanzamiento, una oferta, un mensaje de temporada, algo que merece contarse. Van a la lista, o a un segmento, en la fecha que elijas. Los flujos se disparan por lo que hace el cliente; en las campañas decide una persona. Casi todas las tiendas quieren ambas, y suelen ser los flujos los que rinden en silencio.",
      },
      {
        q: "¿Hay informes o seguimiento?",
        a: "Sí, y es la parte que casi siempre se salta. Cada mes recibes qué se envió, qué se abrió y se hizo clic, qué se compró a raíz de ello y qué flujos se pagan solos, en lenguaje claro y no como una exportación reenviada. Además conservas tu acceso a la plataforma, así que todo lo que te contamos lo puedes comprobar.",
      },
    ],
    cta: "Empezar",
  },
  contact: {
    title: "Habla con nuestro equipo",
    lede: "Te ayudamos a elegir el plan y el precio adecuados para tu negocio.",
  },
};

export const emailMarketingCopy: Record<Locale, EmailMarketingCopy> = { en, es };
