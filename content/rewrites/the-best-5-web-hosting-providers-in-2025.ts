import type { Post } from "@/lib/posts";

/**
 * El slug dice "in 2025" y estamos en 2026: la URL se queda, el titulo va sin
 * año.
 *
 * **Sin precios ni planes concretos.** Cambian cada pocos meses y un articulo
 * con tarifas caducas miente sin querer. Lo que si dura es que hay que mirar
 * copias de seguridad, entorno de pruebas y politica de salida, asi que el
 * articulo va de eso.
 *
 * Tampoco lleva enlaces de afiliado, que es de lo que suelen vivir los
 * articulos con este titulo.
 */
export const hostingProviders: Post = {
  slug: "the-best-5-web-hosting-providers-in-2025",
  title: "Five hosting providers worth considering, and what to check first",
  description:
    "Five options for a small business site, plus the four questions that matter more than the monthly price.",
  lede: "Hosting is the part of a website nobody thinks about until the week it goes wrong, and then it is the only thing anybody thinks about.",
  category: "Web Hosting",
  published: "2026-09-19",
  body: [
    {
      kind: "p",
      text: "Comparisons of hosting usually turn into a table of prices and storage limits. Those are the least important numbers on the page. For a small business site, the monthly cost is a rounding error against one day offline during a busy week.",
    },
    {
      kind: "p",
      text: "So the five are below, but read the four questions first. They will tell you more than any of the five will.",
    },

    { kind: "h2", text: "The four questions" },
    {
      kind: "list",
      ordered: true,
      items: [
        "How are backups taken, how far back do they go, and can you restore one yourself without contacting support? Daily backups you cannot reach in a hurry are not really backups.",
        "Is there a staging environment? Without one, every change to a live site is an experiment performed on your customers.",
        "What happens if you stop paying, and for how long? Some hosts suspend and keep your data for months. Others purge on a schedule you will not be told about until you need it.",
        "How do you get everything out? Files and database, exported by you, without a support ticket. If the answer is unclear, that is the answer.",
      ],
    },
    {
      kind: "aside",
      text: "The fourth question is the one people skip and the one that ends badly. Keep your own copy of the site somewhere the hosting account cannot reach — a drive, a cloud folder, anywhere. Hosting is where a site lives, not where it is safe.",
    },

    { kind: "h2", text: "The five" },
    {
      kind: "p",
      text: "These are the ones that come up repeatedly for small business sites. Which fits depends far more on how much you want to think about servers than on any feature list.",
    },

    { kind: "h2", text: "SiteGround" },
    {
      kind: "p",
      text: "Shared hosting done properly. Good support, straightforward backups, a staging tool on the higher plans. It is the sensible default for a small WordPress site where nobody wants to learn anything about infrastructure. The renewal price is considerably higher than the introductory one, which is worth knowing before the second year.",
    },

    { kind: "h2", text: "Kinsta" },
    {
      kind: "p",
      text: "Managed WordPress on Google Cloud. Fast, with genuinely good staging and backups, and support that understands WordPress rather than reading a script. It costs more than shared hosting and is worth it when the site actually earns money.",
    },

    { kind: "h2", text: "WP Engine" },
    {
      kind: "p",
      text: "The other established managed-WordPress option, and the one most agencies have used at some point. Strong tooling for people managing several sites at once. The trade is rigidity: it is opinionated about what you are allowed to install.",
    },

    { kind: "h2", text: "Cloudways" },
    {
      kind: "p",
      text: "Sits between managed hosting and running your own server. You pick the underlying provider and Cloudways handles the administration. Better value than fully managed hosting if somebody involved is comfortable with the concept of a server, uncomfortable if nobody is.",
    },

    { kind: "h2", text: "Hostinger" },
    {
      kind: "p",
      text: "The budget end, and honest about it. Fine for a brochure site with modest traffic. Support and performance are what you would expect at the price, so it is a reasonable starting point and a poor place to still be once the site matters.",
    },

    { kind: "h2", text: "If the site is not WordPress" },
    {
      kind: "p",
      text: "None of the above really applies to a site built with a modern framework. Those deploy to platforms like Vercel, Netlify or Cloudflare, where there is no server to maintain, the free tier covers a small business site comfortably, and a deployment is a push to a repository.",
    },
    {
      kind: "p",
      text: "Different model, same fourth question: know where your code and your customer data live, and keep a copy somewhere the platform does not control.",
    },
  ],
};
