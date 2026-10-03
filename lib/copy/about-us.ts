import type { Locale } from "@/lib/i18n";

/**
 * El texto de /about-us y /es/about-us. La plantilla que lo pinta es
 * components/pages/about-us.tsx.
 *
 * El ingles es el del frame "Services - About Us" del Figma, literal. El
 * español (2026-10-03) va mas corto a proposito, como el resto de /es/:
 * titulares de cuatro a seis palabras y parrafos recortados, no traduccion
 * literal. Los nombres del equipo se quedan; los cargos se traducen.
 *
 * La banda "About Us" interpola el año de fundacion y los años que han
 * pasado, que se calculan en la plantilla: `{founded}` y `{years}` son los
 * huecos y los rellena `fillYears`.
 */

export type AboutUsCopy = {
  meta: { title: string; description: string };
  mission: { badge: string; title: string; lede: string };
  values: readonly { icon: string; title: string; body: string }[];
  /** La banda oscura. `body` lleva `{founded}` y `{years}`. */
  about: { eyebrow: string; body: string };
  missionBand: { eyebrow: string; body: string };
  teamBand: { eyebrow: string; title: string; body: string };
  team: {
    title: string;
    lede: string;
    members: readonly { name: string; role: string; photo: string }[];
  };
  join: { title: string; lede: string; cta: string };
  sales: {
    title: string;
    lede: string;
    quote: { text: string; name: string; org: string; photo: string };
  };
};

/** Rellena `{founded}` y `{years}` en la banda "About Us". */
export function fillYears(text: string, founded: number, years: number): string {
  return text.replace("{founded}", String(founded)).replace("{years}", String(years));
}

/** Los tres SVG traen la caja de 56 px, su borde y el dibujo, como los iconos
 *  de website-design: el markup no vuelve a pintar el chip. */
const valueIcons = {
  expertise: "/figma/about-us/expertise.svg",
  clientCentric: "/figma/about-us/client-centric.svg",
  transparency: "/figma/about-us/transparency-and-integrity.svg",
};

/**
 * Los siete del archivo, con sus cargos. La reticula del Figma dibuja un
 * octavo hueco (nodo 165:2246, una copia de Camila oculta) para cuadrar la
 * fila: en la plantilla la celda vacia la deja el propio grid.
 *
 * Las seis primeras fotos las entrego el usuario. La de Nicolas no venia en la
 * entrega y se exporto del mismo nodo del Figma, reescalada a los 191 px de
 * las otras seis.
 */
const photos = {
  nicolas: "nicolas-mastromarino",
  gustavo: "gustavo-polin",
  ezequiel: "ezequiel-cenicola",
  camila: "camila-garcia",
  facundo: "facundo-palombo",
  araceli: "araceli-villalba",
  lucas: "lucas-burgos",
};

const en: AboutUsCopy = {
  meta: {
    // Absoluto: la plantilla "%s · emmvi" dejaria "About emmvi · emmvi".
    title: "About emmvi: websites and the systems behind them",
    description:
      "emmvi builds websites and the systems that run behind them, from Valencia and from Argentina. How a project actually runs, and who we work with.",
  },
  mission: {
    badge: "Our Mission",
    title: "Streamlining Entrepreneurial Journeys",
    lede:
      "At emmvi.com, our mission is clear: to provide affordable solutions for entrepreneurs and help them grow without the hassle of dealing with the technical complexities that often accompany business growth.",
  },
  values: [
    {
      icon: valueIcons.expertise,
      title: "Expertise",
      body: "Highlighting our experience and knowledge in the industry.",
    },
    {
      icon: valueIcons.clientCentric,
      title: "Client-Centric",
      body: "Emphasizing our commitment to client satisfaction.",
    },
    {
      icon: valueIcons.transparency,
      title: "Transparency and Integrity",
      body: "At emmvi, honesty is our guiding principle. We make realistic promises and work closely with you to achieve your goals effectively.",
    },
  ],
  about: {
    eyebrow: "About Us",
    body: "At emmvi, we believe in simplicity and honesty. Founded in {founded} by a team of professionals with over {years} years of experience in digital marketing, design, and development, our company was born out of a passion for helping entrepreneurs establish effective online presences.",
  },
  missionBand: {
    eyebrow: "Our mission",
    body: "Our mission is to simplify the lives of entrepreneurs, from small businesses to large agencies. We understand that establishing an online presence can be overwhelming, which is why we offer comprehensive services, including SEO, Email Marketing, Web Design, and PPC, so you can focus on what you do best while we take care of the rest.",
  },
  teamBand: {
    eyebrow: "The team behind",
    title: "Worldwide Digital Marketing Professionals.",
    body: "Our story began when a group of experts decided to combine their knowledge and experience in the digital world to establish emmvi. After years of collaboration in the industry, we knew we could make a difference by providing high-quality services with a focus on honesty and transparency.",
  },
  team: {
    title: "Our Team",
    lede: "emmvi started with helping people build awesome projects. Each day our team continues to grow and empower more creators in the world to do that.",
    members: [
      { name: "Nicolas Mastromarino", role: "Marketing Operations", photo: photos.nicolas },
      { name: "Gustavo Polin", role: "Product Designer", photo: photos.gustavo },
      { name: "Ezequiel Cenicola", role: "Product Designer", photo: photos.ezequiel },
      { name: "Camila Garcia", role: "Software Engineer", photo: photos.camila },
      { name: "Facundo Palombo", role: "Sr. Software Engineer", photo: photos.facundo },
      { name: "Araceli Villalba", role: "Social Media Manager", photo: photos.araceli },
      { name: "Lucas Burgos", role: "Motion Designer", photo: photos.lucas },
    ],
  },
  join: {
    title: "Join Our Passionate Crew",
    lede: "Join us and shape the future of the web",
    cta: "Explore Opportunities",
  },
  sales: {
    title: "Talk to our Sales team",
    lede: "We’ll help you find the right plan and pricing for your business.",
    quote: {
      text: "I was drowning in manual work and reached out to Nico for help with automations. He set up email flows, follow-ups, and little systems I didn’t even know I needed. Everything feels more organized now.",
      name: "Adriana Patania",
      org: "Local gym",
      photo: "/testimonials/adriana-patania-1.png",
    },
  },
};

const es: AboutUsCopy = {
  meta: {
    // Absoluto, como el ingles: la plantilla dejaria "Sobre emmvi · emmvi".
    title: "Sobre emmvi: webs y los sistemas que hay detrás",
    description:
      "emmvi hace webs y los sistemas que las mueven, desde Valencia y desde Argentina. Cómo va un proyecto de verdad y con quién trabajamos.",
  },
  mission: {
    badge: "Nuestra misión",
    title: "Allanar el camino al emprendedor",
    lede:
      "Soluciones asequibles para que crezcas sin pelearte con la parte técnica. De eso nos ocupamos nosotros.",
  },
  values: [
    {
      icon: valueIcons.expertise,
      title: "Experiencia",
      body: "Años de oficio en el sector, puestos a tu servicio.",
    },
    {
      icon: valueIcons.clientCentric,
      title: "Centrados en ti",
      body: "Tu satisfacción es lo que mide el trabajo.",
    },
    {
      icon: valueIcons.transparency,
      title: "Transparencia y honestidad",
      body: "Prometemos solo lo que podemos cumplir y trabajamos contigo, de cerca, hasta conseguirlo.",
    },
  ],
  about: {
    eyebrow: "Quiénes somos",
    body: "En emmvi creemos en la sencillez y la honestidad. Nacimos en {founded}, con más de {years} años de experiencia en marketing digital, diseño y desarrollo, para ayudar a emprendedores a tener una presencia online que funcione.",
  },
  missionBand: {
    eyebrow: "Nuestra misión",
    body: "Hacerle la vida más fácil al emprendedor, del pequeño negocio a la gran agencia. Estar online puede abrumar, así que lo cubrimos entero: SEO, email marketing, diseño web y PPC. Tú a lo tuyo; del resto nos ocupamos nosotros.",
  },
  teamBand: {
    eyebrow: "El equipo detrás",
    title: "Un equipo repartido por el mundo.",
    body: "emmvi nació cuando un grupo de profesionales del mundo digital decidió juntar lo que sabía. Tras años trabajando juntos en el sector, teníamos claro cómo marcar la diferencia: buen trabajo, honestidad y transparencia.",
  },
  team: {
    title: "Nuestro equipo",
    lede: "emmvi empezó ayudando a la gente a levantar buenos proyectos. Cada día el equipo crece para seguir haciéndolo.",
    members: [
      { name: "Nicolas Mastromarino", role: "Operaciones de marketing", photo: photos.nicolas },
      { name: "Gustavo Polin", role: "Diseñador de producto", photo: photos.gustavo },
      { name: "Ezequiel Cenicola", role: "Diseñador de producto", photo: photos.ezequiel },
      { name: "Camila Garcia", role: "Ingeniera de software", photo: photos.camila },
      { name: "Facundo Palombo", role: "Ingeniero de software sénior", photo: photos.facundo },
      { name: "Araceli Villalba", role: "Responsable de redes sociales", photo: photos.araceli },
      { name: "Lucas Burgos", role: "Diseñador de animación", photo: photos.lucas },
    ],
  },
  join: {
    title: "Únete al equipo",
    lede: "Ayúdanos a construir la web que viene",
    cta: "Ver oportunidades",
  },
  sales: {
    title: "Habla con el equipo de ventas",
    lede: "Te ayudamos a elegir el plan que encaja con tu negocio.",
    quote: {
      // La misma cita que en la home en español (lib/copy/home.ts), recortada
      // como la inglesa de esta pagina.
      text: "Me ahogaba en trabajo manual y le pedí ayuda a Nico con las automatizaciones. Montó flujos de correo, seguimientos y pequeños sistemas que ni sabía que necesitaba. Ahora todo está más ordenado.",
      name: "Adriana Patania",
      org: "Gimnasio local",
      photo: "/testimonials/adriana-patania-1.png",
    },
  },
};

export const aboutUsCopy: Record<Locale, AboutUsCopy> = { en, es };
