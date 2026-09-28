import type { Stat } from "@/components/stat-band";

/**
 * Con que trabaja emmvi, y las cifras que lo acompañan.
 *
 * Vive aqui y no dentro de una plantilla porque lo usan la home y el
 * laboratorio: dos copias de esta lista se separan en cuanto alguien añade una
 * herramienta en un sitio y no en el otro, y entonces la cifra de la banda
 * miente en una de las dos paginas.
 */
export const tools = [
  "GoHighLevel", "Zapier", "Klaviyo", "Mailchimp", "ActiveCampaign",
  "SendGrid", "Stripe", "Airtable", "Google Analytics", "Search Console",
  "PostHog", "Ahrefs", "Semrush", "Moz", "WordPress", "Elementor",
  "Cloudflare", "Figma",
];

/**
 * **Cada cifra tiene que poder contarse.** Es la regla de PRODUCT.md —ninguna
 * sin medir— y aqui pesa el doble: una cifra redonda e inventada es de lo que
 * vive la competencia, y lo que separa a emmvi de ella es no hacerlo. Si una
 * deja de poder demostrarse se quita; no se redondea hacia arriba.
 *
 * Tampoco entra nada que revele el tamaño del equipo. Ver PRODUCT.md.
 *
 * De donde sale cada una:
 *  - 10 años en marketing digital y 5 dentro de GoHighLevel: los declara el
 *    dueño del negocio.
 *  - Herramientas: se cuentan del array de arriba, para que no se quede vieja
 *    al añadir una. Es ademas la unica que el lector puede verificar sin salir
 *    de la pagina, contando las chapas de la cinta.
 *  - 113 negocios: lo da el dueño (2026-09-27). **No sale de esta pagina**: la
 *    cinta enseña 10 logos, que son los que tienen permiso de marca, no todos
 *    los clientes. Si alguien la revisa, que no la "corrija" a 10.
 */
export const stats: Stat[] = [
  { value: { en: "10 yrs", es: "10 años" }, label: { en: "In digital marketing", es: "En marketing digital" } },
  { value: { en: "5 yrs", es: "5 años" }, label: { en: "Building inside GoHighLevel", es: "Dentro de GoHighLevel" } },
  { value: String(tools.length), label: { en: "Tools wired together", es: "Herramientas conectadas" } },
  // El 113 va al final, lejos del "10 yrs": dos cifras iguales pegadas se leen
  // como una repeticion, no como dos datos.
  { value: "113",    label: { en: "Businesses we have built for", es: "Negocios atendidos" } },
];
