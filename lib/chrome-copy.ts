import type { Locale } from "@/lib/i18n";

/**
 * Los textos de lo que se repite en todas las paginas: cabecera, menu movil,
 * pie, formulario de contacto y aviso de datos. Cada componente recibe
 * `locale` y lee de aqui; las paginas no tienen que saber nada de esto.
 *
 * Las rutas van **con prefijo ya puesto** cuando el destino cambia de idioma.
 * En español, "Servicios" y "Nosotros" apuntan a secciones de la home y no a
 * /services/... ni a /about-us/: esas paginas son el posicionamiento viejo del
 * Figma (ver `indexLegacyPages` en lib/site.ts) y no se han traducido. El
 * blog se enlaza en ingles y se dice: se publica solo, en ingles, y mandar a
 * alguien sin avisar a una pagina en otro idioma es peor que no enlazarla.
 */

export type NavChild = { href: string; label: string };

export type NavLink = {
  href: string;
  label: string;
  children?: readonly NavChild[];
};

type FooterColumn = {
  title: string;
  links: readonly NavChild[];
  cookieButton?: boolean;
};

export type ChromeCopy = {
  header: {
    homeLabel: string;
    navLabel: string;
    links: readonly NavLink[];
    cta: string;
  };
  menu: {
    open: string;
    close: string;
    label: string;
  };
  switcher: {
    /** Etiqueta accesible del bloque de idiomas. */
    label: string;
    /** Aviso cuando la pagina no existe en el otro idioma y se va a su home. */
    homeOnly: string;
  };
  footer: {
    tagline: string;
    columns: readonly FooterColumn[];
    cookies: string;
    rights: string;
    trademark: string;
  };
  form: {
    sent: string;
    honeypot: string;
    name: string;
    email: string;
    company: string;
    optional: string;
    message: string;
    sending: string;
    send: string;
  };
  notice: {
    controller: string;
    purpose: string;
    purposeText: string;
    rights: string;
    rightsText: string;
    complain: string;
    rest: string;
    privacy: string;
  };
};

/**
 * Las cinco paginas de servicio. Cuelgan de "Services" en la nav en vez de
 * quedarse solo en el pie, que hasta ahora era la unica via para llegar a
 * ellas desde dentro del sitio.
 *
 * "Full-Stack Development" no vive bajo /services/ como las otras cuatro: es
 * la URL que el WordPress tenia indexada y se conserva. Ver next.config.ts.
 *
 * /services/gohighlevel-automation no esta aqui: la pagina existe pero sale
 * como borrador, sin enlazar y sin indexar. Ver su propio page.tsx.
 */
const services: readonly NavChild[] = [
  { href: "/services/website-design/", label: "Web Design" },
  { href: "/services/email-marketing/", label: "Email Marketing" },
  { href: "/services/seo/", label: "SEO Services" },
  { href: "/services/ppc/", label: "PPC" },
  { href: "/full-stack-development-services/", label: "Full-Stack Development" },
];

const en: ChromeCopy = {
  header: {
    homeLabel: "emmvi, home",
    navLabel: "Main",
    /**
     * Anclas absolutas (`/#services`, no `#services`): este header no vive
     * solo en la home, y fuera de ella un ancla relativa no lleva a ninguna
     * parte. `children` convierte una entrada en desplegable.
     */
    links: [
      { href: "/#services", label: "Services", children: services },
      { href: "/#who", label: "Who we work with" },
      // Pagina propia, no el ancla de la seccion "Meet emmvi" de la home.
      { href: "/about-us/", label: "About" },
      { href: "/#faq", label: "FAQ" },
    ],
    cta: "Schedule a call",
  },
  menu: { open: "Open menu", close: "Close menu", label: "Menu" },
  switcher: {
    label: "Language",
    homeOnly: "This page is not available in Spanish. Opens the Spanish homepage.",
  },
  footer: {
    tagline:
      "Websites and the systems that run behind them, for small businesses in Europe and the Americas.",
    columns: [
      {
        title: "Services",
        links: [
          { href: "/services/website-design/", label: "Web Design" },
          { href: "/services/email-marketing/", label: "Email Marketing" },
          { href: "/services/seo/", label: "SEO Services" },
          { href: "/services/ppc/", label: "PPC" },
        ],
      },
      {
        title: "Company",
        links: [
          { href: "/about-us/", label: "About" },
          { href: "/blog/", label: "Blog" },
          { href: "/contact-us/", label: "Contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { href: "/legal-notice/", label: "Legal Notice" },
          { href: "/privacy-policy/", label: "Privacy Policy" },
        ],
        cookieButton: true,
      },
    ],
    cookies: "Cookie preferences",
    rights: "© 2026 emmvi. All rights reserved.",
    trademark: "emmvi® is a registered trademark in Spain.",
  },
  form: {
    sent: "Message sent",
    honeypot: "Leave this empty",
    name: "Full name",
    email: "Email address",
    company: "Company name",
    optional: "(optional)",
    message: "How can we help you?",
    sending: "Sending…",
    send: "Send",
  },
  notice: {
    controller: "Controller:",
    purpose: "Purpose:",
    purposeText:
      "to answer you and quote for the work, on the basis of steps taken at your request before a contract.",
    rights: "Your rights:",
    rightsText: "access, erasure and objection at",
    complain: ", or complain to the",
    rest: "The rest:",
    privacy: "Privacy Policy",
  },
};

const es: ChromeCopy = {
  header: {
    homeLabel: "emmvi, inicio",
    navLabel: "Principal",
    links: [
      /**
       * Etiquetas cortas a proposito: "Con quién trabajamos" y "Preguntas
       * frecuentes" partian en dos lineas y la nav se comia el CTA. En la
       * home las secciones conservan su titulo largo.
       */
      { href: "/es/#services", label: "Servicios" },
      { href: "/es/#who", label: "Clientes" },
      { href: "/es/#about", label: "Nosotros" },
      { href: "/es/#faq", label: "Preguntas" },
    ],
    cta: "Reservar una llamada",
  },
  menu: { open: "Abrir el menú", close: "Cerrar el menú", label: "Menú" },
  switcher: {
    label: "Idioma",
    homeOnly: "Esta página no está en inglés. Abre la portada en inglés.",
  },
  footer: {
    tagline:
      "Webs y los sistemas que las hacen funcionar por detrás, para pequeñas empresas de Europa y América.",
    columns: [
      {
        title: "Empresa",
        links: [
          { href: "/es/#about", label: "Nosotros" },
          { href: "/blog/", label: "Blog (en inglés)" },
          { href: "/es/contact-us/", label: "Contacto" },
        ],
      },
      {
        title: "Legal",
        links: [
          { href: "/es/legal-notice/", label: "Aviso legal" },
          { href: "/es/privacy-policy/", label: "Política de privacidad" },
        ],
        cookieButton: true,
      },
    ],
    cookies: "Preferencias de cookies",
    rights: "© 2026 emmvi. Todos los derechos reservados.",
    trademark: "emmvi® es una marca registrada en España.",
  },
  form: {
    sent: "Mensaje enviado",
    honeypot: "Deja esto vacío",
    name: "Nombre completo",
    email: "Correo electrónico",
    company: "Empresa",
    optional: "(opcional)",
    message: "¿En qué podemos ayudarte?",
    sending: "Enviando…",
    send: "Enviar",
  },
  notice: {
    controller: "Responsable:",
    purpose: "Finalidad:",
    purposeText:
      "responderte y presupuestar el trabajo, sobre la base de las medidas precontractuales que nos pides.",
    rights: "Tus derechos:",
    rightsText: "acceso, supresión y oposición en",
    complain: ", o reclamar ante la",
    rest: "El resto:",
    privacy: "Política de privacidad",
  },
};

export const chrome: Record<Locale, ChromeCopy> = { en, es };
