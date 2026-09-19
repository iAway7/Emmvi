import type { Post } from "@/lib/posts";

/**
 * Quinta pagina por clics del dominio. Se recrea con su tema, pero **el tema
 * cambio**: Adobe dejo XD en mantenimiento en 2023 y no ha vuelto. Escribir la
 * comparacion como si fueran dos rivales vivos seria falso, asi que el
 * articulo responde a la busqueda contando lo que paso de verdad.
 *
 * Es ademas la respuesta mas util para quien la busca: casi nadie teclea eso
 * para leer una tabla de funciones, sino para decidir cual aprender.
 */
export const figmaVsXd: Post = {
  slug: "figma-vs-adobe-xd-which-design-tool-reigns-supreme",
  title: "Figma vs Adobe XD: why the comparison is over",
  description:
    "Adobe put XD into maintenance in 2023 and never came back. What happened, what it means if you still have files in it, and what to use now.",
  lede: "If you are choosing between them in 2026, you are not really choosing. Here is what happened, and what to do if your old files are stuck in XD.",
  published: "2026-09-19",
  body: [
    {
      kind: "p",
      text: "This comparison used to be a real argument. For a few years XD was a credible competitor, bundled with Creative Cloud and familiar to anyone who already lived in Adobe tools. That period ended, and it ended in a way most people outside the design world never heard about.",
    },

    { kind: "h2", text: "What actually happened" },
    {
      kind: "p",
      text: "In September 2022 Adobe announced it was buying Figma for around twenty billion dollars. Between the announcement and the deal closing, XD was effectively wound down — Adobe stopped active feature development and removed it from the main Creative Cloud plans, keeping it available to existing users as a single app.",
    },
    {
      kind: "p",
      text: "Then, in December 2023, the acquisition collapsed. Regulators in the United Kingdom and the European Union made clear they would not wave it through, and Adobe walked away, paying Figma a one-billion-dollar termination fee.",
    },
    {
      kind: "p",
      text: "That left an odd situation. Figma stayed independent. XD stayed in maintenance. Adobe had dismantled its own competitor to buy one it then could not buy, and has not meaningfully rebuilt it since.",
    },
    {
      kind: "aside",
      text: "Software of this kind moves quickly and this is the state of things as we write. If you are relying on it for a decision with money attached, check Adobe's current position on XD before you act.",
    },

    { kind: "h2", text: "What that means in practice" },
    {
      kind: "list",
      items: [
        "If you are learning a tool: learn Figma. Not because it won an argument on merit, but because that is where the plugins, the tutorials, the job listings and the other people are.",
        "If you are hiring a designer: they will send you a Figma link. Expect it, and make sure whoever is building the site can open it.",
        "If you have old XD files: they still open, but do not plan around that indefinitely. Get anything you still care about out while you can.",
      ],
    },

    { kind: "h2", text: "Getting files out of XD" },
    {
      kind: "p",
      text: "There is no clean official conversion. In practice people take one of three routes, in descending order of how well it works.",
    },
    {
      kind: "list",
      ordered: true,
      items: [
        "Export the assets — images, icons, logos — and rebuild the layout in the new tool. Tedious, but the result is native and editable.",
        "Use a third-party importer plugin. These get you most of the way and then leave you correcting text styles and spacing by hand.",
        "Export flat PDFs or images as a record. Not editable, but at least the design is not lost when the file stops opening.",
      ],
    },
    {
      kind: "p",
      text: "Which one is right depends on whether you will edit the design again. For a brand you still use, rebuild it. For an archive of a site you replaced two years ago, a PDF is enough.",
    },

    { kind: "h2", text: "The alternatives, briefly" },
    {
      kind: "p",
      text: "Figma is the default and has been for a while. Sketch is still around and still good, with the caveat that it is Mac-only and its collaboration story arrived later. Penpot is open source and self-hostable, which matters if you have a policy about where your files live. Framer sits closer to building the site than designing it, and suits people who want the design and the published page to be the same thing.",
    },
    {
      kind: "p",
      text: "For most small businesses none of this is a decision you need to make. You will receive a link, you will leave comments on it, and the tool underneath is somebody else's problem. The one thing worth insisting on is that you get the source file at the end, not just the exported pictures.",
    },
  ],
};
