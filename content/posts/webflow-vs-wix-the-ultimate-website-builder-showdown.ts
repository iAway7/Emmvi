import type { Post } from "@/lib/posts";

/**
 * Recuperado del backup del WordPress anterior (agosto de 2026) y revisado en
 * septiembre de 2026 con la reescritura de `content/rewrites/`.
 *
 * La reescritura sola se quedaba en el 44% de las palabras del original y
 * perdia sus secciones de facilidad de uso, funciones, diseño y movil, hosting
 * y plantillas, que es lo que Google posiciono. Vuelven escritas sin el tono
 * de folleto y con cada dato comprobado en la pagina del propio fabricante
 * (septiembre de 2026): exportacion de codigo sin CMS, plantillas de Wix que
 * no se pueden cambiar, Wix Studio responsive frente al Wix Editor. Los
 * precios de plantillas del original ($20 a $100) no se pudieron comprobar y
 * se quitan. El slug no se toca: es la URL indexada.
 */
const body: Post["body"] = [
  { kind: "p", text: "Both are hosted website builders: you design in the browser, they run the servers, you pay monthly. Beyond that they have almost opposite philosophies, and picking the wrong one is how people end up rebuilding a site eighteen months later." },
  { kind: "p", text: "Below is how they compare on ease of use, features, design control, hosting and templates, then who each one is actually for, and the question that matters more than any of those." },

  { kind: "h2", text: "Wix, in plain terms" },
  { kind: "image", src: "/blog/Webflow-vs-Wix-1024x576.jpg", alt: "The Webflow and Wix logos side by side.", width: 1024, height: 576 },
  { kind: "p", text: "Wix is built so that somebody with no technical background can get a decent site live on a weekend. You start from a template, drag things where you want them, and the platform handles hosting, certificates and updates without ever mentioning them to you." },
  { kind: "p", text: "The strength is the floor: it is very hard to end up with something broken. The limit is the ceiling. Once you want a layout the templates do not anticipate, you are working against the tool rather than with it." },
  { kind: "p", text: "Its search-engine capabilities used to be a genuine weakness and largely are not any more. If somebody tells you Wix cannot rank, they are repeating something that was true several years ago." },

  { kind: "h2", text: "Webflow, in plain terms" },
  { kind: "p", text: "Webflow is a visual interface over real HTML and CSS. You are manipulating the same box model a developer would, with a mouse instead of a keyboard. That means the design control is close to unlimited, and it means you have to understand the box model." },
  { kind: "p", text: "This is the part people underestimate. Webflow is not a harder version of Wix, it is a different job. If nobody at your company knows what a flex container is, the site will be lovely on the day it launches and frozen from then on, because changing anything is genuinely difficult." },
  { kind: "p", text: "Where it earns its price is a site with structure: a CMS with proper collections, a design system reused across dozens of pages, a marketing team that changes things weekly." },

  { kind: "h2", text: "Ease of use compared" },
  { kind: "p", text: "Signing up is quick on both, with Google or an email address, and both ask a few questions at the start to set up the first project. The difference shows up the moment the editor opens." },
  { kind: "list", items: [
    "Wix opens on a template you can already click into and change. Text, images and sections are edited where they sit, and nothing on screen assumes you know how a web page is built.",
    "Webflow opens on a designer with panels for layout, styles and element settings. It has an interactive guide for first-timers, and Webflow University, its own library of lessons and videos, is one of the better free resources for learning web layout at all.",
    "Neither requires code. On Webflow some knowledge of HTML and CSS makes a large difference; on Wix it mostly does not come up.",
  ] },
  { kind: "p", text: "In short: Wix is the easier start, Webflow the easier ceiling. Which of those matters depends on who will be doing the editing." },

  { kind: "h2", text: "Features compared" },
  { kind: "h3", text: "What Webflow includes" },
  { kind: "p", text: "Webflow writes clean HTML and CSS as you design, and on paid plans you can export that code as a ZIP of HTML, CSS, JavaScript and images. You can also add your own custom code to pages when the visual tools are not enough." },
  { kind: "p", text: "Its interactions tool builds animations, scroll effects and 3D transforms without writing JavaScript. Used with restraint it is one of Webflow's real strengths; used freely it is how sites end up slow and distracting." },
  { kind: "p", text: "On top of that it has a proper CMS, e-commerce, hosting, and SEO settings for each page and each CMS item." },
  { kind: "h3", text: "What Wix includes" },
  { kind: "p", text: "Wix puts most of its tools in one dashboard, with more in its App Market. Some of those apps are free and some are paid, so it is worth checking before building a site around one." },
  { kind: "p", text: "It also offers an AI site builder: you describe the business, it proposes a working site, and you edit from there. It is a quick way to a first draft, not a finished site." },
  { kind: "p", text: "For people who do write code, Velo lets you add JavaScript to a Wix site, work with data collections and build custom functionality, and you can embed your own code as well. That gives Wix more technical room than its reputation suggests, though still less control over the page itself than Webflow." },

  { kind: "h2", text: "Design control and mobile" },
  { kind: "p", text: "Webflow is built around breakpoints. You design for desktop, switch to tablet or phone, and adjust how each element behaves at that size. Because the layout is real CSS, it adapts to the screen rather than being rearranged by hand." },
  { kind: "p", text: "Wix has two editors, and the difference matters here. The classic Wix Editor places elements by position, creates a mobile version from the desktop one, and gives you a separate mobile editor to fix what does not fit. Changes to the desktop site carry over to mobile, but not the other way round, so long pages often need tidying by hand on the phone view." },
  { kind: "p", text: "Wix Studio, the newer editor aimed at designers and agencies, is responsive in the same sense as Webflow: desktop, tablet and mobile breakpoints, with changes flowing down from the larger ones. If you are choosing Wix for a site with a lot of layout, it is worth knowing which of the two you are signing up for." },

  { kind: "h2", text: "Hosting and security" },
  { kind: "p", text: "Neither asks you to find hosting: it is part of the plan on both. What Webflow lists as included on its site plans:" },
  { kind: "list", items: [
    "SSL certificates at no extra cost, renewed automatically.",
    "A global content delivery network, so pages load from a server close to the visitor.",
    "Hosting that scales with traffic spikes without you changing anything.",
    "Automatic backups you can preview and restore, plus save points you create yourself.",
    "Password protection for single pages or the whole site.",
    "Built-in forms and site search.",
    "Security patching and maintenance handled by Webflow, not by you.",
  ] },
  { kind: "p", text: "Wix covers the same basics for a typical small business site: SSL, hosting and updates are handled for you and never need thinking about. The practical difference between them is less about security and more about who is expected to be in the editor." },

  { kind: "h2", text: "Templates compared" },
  { kind: "image", src: "/blog/Webflow-vs-Wix-Comparing-Template-1024x576.webp", alt: "Template galleries from Webflow and Wix compared side by side.", width: 1024, height: 576 },
  { kind: "p", text: [
    "Webflow's ",
    { text: "template gallery", href: "https://webflow.com/templates" },
    " lists more than 7,000 templates as of September 2026, some free and some paid, and you can filter by category, style and feature. Most are built by independent designers, so quality varies. They reward someone who can read how a template is structured before editing it.",
  ] },
  { kind: "p", text: [
    "Wix lists ",
    { text: "more than 2,000 templates", href: "https://www.wix.com/website/templates" },
    " as of September 2026, all free to use, and you can also start from a blank page. They suit people who want something that looks finished without designing it themselves.",
  ] },
  { kind: "p", text: "One thing to know before you pick: on the classic Wix Editor you cannot switch an existing site to a different template. Changing your mind later means starting a new site and moving your pages, media and domain across. Choose the template carefully the first time." },

  { kind: "h2", text: "Who each is actually for" },
  { kind: "list", items: [
    "A trade or local service business that needs a credible site and will barely touch it afterwards: Wix does this well and cheaply, and the limitations will never come up.",
    "A company with a designer or an agency on hand, a real content operation, and opinions about layout: Webflow.",
    "Anyone whose site is mostly a lead form and five service pages: either, and the choice matters far less than what happens after the form is submitted.",
  ] },

  { kind: "h2", text: "Can you take the site with you?" },
  { kind: "p", text: "Both are closed platforms. You are renting the building. Wix does not let you take the site elsewhere in any practical sense. Webflow will export static code, but by its own documentation the export leaves out the CMS, e-commerce and user accounts, so a content-driven site is not really portable either. CMS content can be downloaded separately as CSV files, which is a backup, not a working site." },
  { kind: "p", text: "That is not automatically a problem. It is a trade you should make knowingly rather than discover later. Before you choose, ask what happens if you want to leave in three years, and where your customer data lives in the meantime." },
  { kind: "aside", text: [
    "For what it is worth: the sites ",
    { text: "we build", href: "/services/website-design/" },
    " are usually on WordPress, because most of our clients want to own the site outright and be able to move it. That is a preference, not a verdict. Plenty of businesses are better served by a builder that never asks them to think about a server.",
  ] },

  { kind: "h2", text: "If you cannot decide" },
  { kind: "p", text: "Pick the one that matches the person who will be editing the site in a year. Not the one that matches your ambition for it, and not the one with the better demo reel. A site somebody is comfortable updating beats a better-designed site that nobody dares touch." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. Features and template counts were checked on each vendor's own pages in September 2026 and both platforms change often. emmvi is an independent company and is not affiliated with, endorsed by or certified by Webflow or Wix. If you already have a site that works, the honest answer is often that neither is worth the move." },
];

export const webflowVsWixThe: Post = {
  slug: "webflow-vs-wix-the-ultimate-website-builder-showdown",
  title: "Webflow vs Wix: Which Builder Fits Your Business",
  description: "Webflow vs Wix on ease of use, features, mobile design, hosting, templates and how portable your site is, and who each builder is actually for.",
  lede: "They are aimed at different people. The useful question is not which is better but which one matches who will look after the site.",
  category: "Versus",
  // Fecha original de publicacion. No se toca: es parte de lo que se restaura.
  published: "2024-11-12",
  updated: "2026-09-28",
  /** Destacada del WordPress. `alt` vacio a proposito: la imagen va dentro
   *  del enlace, pegada al titular que ya dice lo mismo, y describir una
   *  ilustracion generica ahi solo anade ruido a un lector de pantalla. */
  image: {
    src: "/blog/webflow-vs-wix-the-ultimate-website-builder-showdown.jpg",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
