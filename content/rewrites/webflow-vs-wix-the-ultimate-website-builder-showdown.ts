import type { Post } from "@/lib/posts";

/**
 * Cuarta pagina por clics de todo el dominio, segun Search Console. Es tema
 * del posicionamiento viejo —atrae a quien se lo quiere hacer solo— pero el
 * trafico es real, asi que se recrea con su tema.
 *
 * emmvi construye sobre todo en WordPress, y el articulo lo dice. Ocultarlo
 * para parecer neutral seria justo lo contrario del principio de PRODUCT.md:
 * decir lo que no se hace vende mas que decir lo que si.
 *
 * Sin precios concretos: cambian cada pocos meses y un articulo con tarifas
 * caducas miente sin querer.
 */
export const webflowVsWix: Post = {
  slug: "webflow-vs-wix-the-ultimate-website-builder-showdown",
  title: "Webflow vs Wix: which one fits the business you actually run",
  description:
    "An honest comparison of the two builders, who each is genuinely for, and the question that matters more than either.",
  lede: "They are aimed at different people, which is why the comparison is usually unsatisfying. The useful question is not which is better but which one matches who will be looking after the site.",
  category: "Versus",
  body: [
    {
      kind: "p",
      text: "Both are hosted website builders: you design in the browser, they run the servers, you pay monthly. Beyond that they have almost opposite philosophies, and picking the wrong one is how people end up rebuilding a site eighteen months later.",
    },

    { kind: "h2", text: "Wix, in plain terms" },
    {
      kind: "p",
      text: "Wix is built so that somebody with no technical background can get a decent site live on a weekend. You start from a template, drag things where you want them, and the platform handles hosting, certificates and updates without ever mentioning them to you.",
    },
    {
      kind: "p",
      text: "The strength is the floor: it is very hard to end up with something broken. The limit is the ceiling. Once you want a layout the templates do not anticipate, you are working against the tool rather than with it.",
    },
    {
      kind: "p",
      text: "Its search-engine capabilities used to be a genuine weakness and largely are not any more. If somebody tells you Wix cannot rank, they are repeating something that was true several years ago.",
    },

    { kind: "h2", text: "Webflow, in plain terms" },
    {
      kind: "p",
      text: "Webflow is a visual interface over real HTML and CSS. You are manipulating the same box model a developer would, with a mouse instead of a keyboard. That means the design control is close to unlimited, and it means you have to understand the box model.",
    },
    {
      kind: "p",
      text: "This is the part people underestimate. Webflow is not a harder version of Wix, it is a different job. If nobody at your company knows what a flex container is, the site will be lovely on the day it launches and frozen from then on, because changing anything is genuinely difficult.",
    },
    {
      kind: "p",
      text: "Where it earns its price is a site with structure — a CMS with proper collections, a design system reused across dozens of pages, a marketing team that changes things weekly.",
    },

    { kind: "h2", text: "Who each is actually for" },
    {
      kind: "list",
      items: [
        "A trade or local service business that needs a credible site and will barely touch it afterwards: Wix does this well and cheaply, and the limitations will never come up.",
        "A company with a designer or an agency on hand, a real content operation, and opinions about layout: Webflow.",
        "Anyone whose site is mostly a lead form and five service pages: either, and the choice matters far less than what happens after the form is submitted.",
      ],
    },

    { kind: "h2", text: "The question that matters more than the comparison" },
    {
      kind: "p",
      text: "Both are closed platforms. You are renting the building. Wix does not let you take the site elsewhere in any practical sense; Webflow will export static code, but not the CMS, so a content-driven site is not really portable either.",
    },
    {
      kind: "p",
      text: "That is not automatically a problem. It is a trade you should make knowingly rather than discover later. Before you choose, ask what happens if you want to leave in three years, and where your customer data lives in the meantime.",
    },
    {
      kind: "aside",
      text: "For what it is worth: we mostly build on WordPress, because most of our clients want to own the thing outright and be able to move it. That is a preference, not a verdict — plenty of businesses are better served by a builder that never asks them to think about a server.",
    },

    { kind: "h2", text: "If you cannot decide" },
    {
      kind: "p",
      text: "Pick the one that matches the person who will be editing the site in a year. Not the one that matches your ambition for it, and not the one with the better demo reel. A site somebody is comfortable updating beats a better-designed site that nobody dares touch.",
    },
  ],
  published: "2026-09-19",
};
