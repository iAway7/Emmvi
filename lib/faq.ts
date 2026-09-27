/**
 * Las preguntas frecuentes de la home.
 *
 * Viven aqui y no dentro de `app/page.tsx` porque ahora las leen dos sitios: el
 * acordeon que las pinta y el `FAQPage` de `components/faq-schema.tsx`. Con la
 * lista dentro de la pagina, la unica forma de darselas al marcado era copiarla
 * —y una copia es una respuesta que se corrige en un sitio y no en el otro.
 *
 * Mismo criterio que `lib/posts.ts` con los articulos.
 */
export type Faq = {
  q: string;
  a: string;
  /** Abierta al cargar. Solo la primera, para ensenar de que va el bloque. */
  open?: boolean;
};

export const faqs: readonly Faq[] = [
  {
    q: "What exactly do you do?",
    a: "Two things: we design and build websites, and we set up the CRM and automations behind them. That covers the site itself, the forms, instant replies, quote follow-ups, review requests and reporting.",
    open: true,
  },
  {
    q: "Are you a fit for a small business?",
    a: "That is most of our work. We are not built for enterprise projects and we do not pretend otherwise. If your company is small enough that the owner still reads the enquiries, we are probably a good fit.",
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
    a: "Book a thirty-minute call. We look at what happens to an enquiry on your site today and tell you what we would change. No slide deck.",
  },
];
