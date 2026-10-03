import type { Locale } from "@/lib/i18n";

/**
 * Los textos de lo que se repite en todas las paginas: cabecera, menu movil,
 * pie, formulario de contacto y aviso de datos. Cada componente recibe
 * `locale` y lee de aqui; las paginas no tienen que saber nada de esto.
 *
 * Las rutas van **con prefijo ya puesto** cuando el destino cambia de idioma.
 * El menu y el pie en español tienen **las mismas entradas que el ingles**:
 * los servicios, /about-us y el blog se enlazan aunque sigan en ingles,
 * porque esconderlos deja la version española sin oferta a la vista.
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
  /**
   * Aviso del art. 13, en prosa y sin rotulos tipo "Controller:". Esos son el
   * modelo de clausula de la AEPD —una convencion util en documentos largos,
   * no una exigencia legal— y en cuatro lineas solo hacen ruido. Ver el
   * comentario de components/data-notice.tsx.
   *
   * Los tres tramos envuelven los dos enlaces (correo y AEPD) y el tercero
   * cierra con el de la politica.
   */
  notice: {
    /** Hasta el correo: quien, para que y con que base. */
    lead: string;
    /** Entre el correo y la AEPD. */
    middle: string;
    /** Entre la AEPD y el enlace a la politica. */
    tail: string;
    /** Cierra la frase despues del enlace. */
    end: string;
    privacy: string;
  };
};

/**
 * Las cinco paginas de servicio que cuelgan de "Services" en la nav.
 *
 * **GoHighLevel Automation entra y Full-Stack Development sale**, por decision
 * del usuario el 2026-09-27. Va primera: es la unica de la lista que vende el
 * posicionamiento nuevo.
 *
 * Dos cosas que ese cambio deja pendientes, anotadas aqui porque no se ven
 * desde este archivo:
 *
 * - La pagina de Full-Stack **se queda sin un solo enlace interno**. El pie
 *   nunca la tuvo, asi que esta era su unica via. Sigue en el sitemap
 *   (`currentRoutes` de lib/site.ts) y responde 200, pero una pagina indexada
 *   a la que no apunta nadie se rastrea peor. O vuelve al pie, o sale del
 *   sitemap con el mismo criterio que /web-hosting.
 * - **La pagina de GoHighLevel sigue siendo borrador**: pide `noindex` y no
 *   esta en el sitemap. Enlazarla desde las veinticinco paginas del sitio y
 *   pedirle a Google que no la indexe es trabajo que se tira. Para publicarla,
 *   ver la cabecera de su propio page.tsx.
 */
const services: readonly NavChild[] = [
  {
    href: "/services/gohighlevel-automation/",
    label: "GoHighLevel Automation",
  },
  { href: "/services/website-design/", label: "Web Design" },
  { href: "/services/email-marketing/", label: "Email Marketing" },
  { href: "/services/seo/", label: "SEO Services" },
  { href: "/services/ppc/", label: "PPC" },
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
          { href: "/careers/", label: "Careers" },
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
    lead:
      "What you send here goes to emmvi, and we use it to answer you and quote for the work. That is the step before any contract, which is what you came for. Ask to see it, change it or have it deleted at",
    middle: ". If we handle it badly you can complain to the",
    tail: ". The",
    end: "has the rest.",
    privacy: "Privacy Policy",
  },
};

/**
 * Mismas entradas que el ingles. Las paginas de servicio y /about-us siguen
 * en ingles (no estan traducidas), pero se enlazan igual: quitar los
 * servicios del menu español era peor que mandar a una pagina en ingles. Si
 * algun dia se traducen, solo cambia el prefijo de la ruta.
 */
const serviciosEs: readonly NavChild[] = [
  {
    href: "/services/gohighlevel-automation/",
    label: "Automatización con GoHighLevel",
  },
  { href: "/services/website-design/", label: "Diseño web" },
  { href: "/services/email-marketing/", label: "Email marketing" },
  { href: "/services/seo/", label: "SEO" },
  { href: "/services/ppc/", label: "PPC" },
];

const es: ChromeCopy = {
  header: {
    homeLabel: "emmvi, inicio",
    navLabel: "Principal",
    links: [
      { href: "/es/#services", label: "Servicios", children: serviciosEs },
      { href: "/es/#who", label: "Clientes" },
      { href: "/about-us/", label: "Nosotros" },
      { href: "/es/#faq", label: "Preguntas" },
    ],
    cta: "Agendar una llamada",
  },
  menu: { open: "Abrir el menú", close: "Cerrar el menú", label: "Menú" },
  switcher: {
    label: "Idioma",
    homeOnly: "Esta página no está en inglés. Abre la portada en inglés.",
  },
  footer: {
    tagline:
      "Webs y los sistemas de detrás, para pequeñas empresas de Europa y América.",
    columns: [
      {
        title: "Servicios",
        links: [
          { href: "/services/website-design/", label: "Diseño web" },
          { href: "/services/email-marketing/", label: "Email marketing" },
          { href: "/services/seo/", label: "SEO" },
          { href: "/services/ppc/", label: "PPC" },
        ],
      },
      {
        title: "Empresa",
        links: [
          { href: "/about-us/", label: "Nosotros" },
          { href: "/es/careers/", label: "Empleo" },
          { href: "/blog/", label: "Blog" },
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
    lead:
      "Lo que nos mandas aquí lo tratamos en emmvi para responderte y presupuestar el trabajo. Es el paso previo a cualquier contrato, que es a lo que vienes. Puedes pedir verlo, cambiarlo o que lo borremos en",
    middle: ". Si lo hacemos mal, puedes reclamar ante la",
    tail: ". El resto está en la",
    end: ".",
    privacy: "Política de privacidad",
  },
};

export const chrome: Record<Locale, ChromeCopy> = { en, es };
