import type { Post } from "@/lib/posts";

/**
 * El mas alejado del posicionamiento nuevo de los ocho, y el que mas rapido
 * caduca. Se escribe por caracteristicas duraderas —para que sirve cada uno,
 * que licencia deja— y no por versiones ni precios, que a los seis meses son
 * falsos. Lleva ademas una advertencia explicita de que el campo se mueve.
 *
 * El cierre lo conecta con el articulo de errores de diseño: una imagen
 * generada sin criterio es el mismo problema que una foto de banco.
 */
export const aiImageTools: Post = {
  slug: "top-5-best-ai-tools-for-images",
  title: "Five AI image tools worth knowing, and when not to use them",
  description:
    "What each tool is genuinely good at, what the licence lets you do commercially, and why an AI image can still be the wrong choice.",
  lede: "The interesting question is no longer whether these work. It is which job you are handing them, and whether you are allowed to sell what comes out.",
  category: "AI",
  published: "2026-09-19",
  body: [
    {
      kind: "p",
      text: "This field moves faster than anything else in software, so treat the specifics below as a starting point rather than a verdict. What changes slowly is what each tool is shaped for, and that is what the list is about.",
    },

    { kind: "h2", text: "Midjourney" },
    {
      kind: "p",
      text: "Still the one with the strongest aesthetic. Ask for something atmospheric and it will give you something that looks deliberately art-directed rather than merely assembled. The cost is control: getting a specific thing, rather than a beautiful thing, takes practice.",
    },
    {
      kind: "p",
      text: "Best for: mood, backgrounds, concept work. Worst for: an image that has to contain exact text or a specific product.",
    },

    { kind: "h2", text: "ChatGPT and DALL·E" },
    {
      kind: "p",
      text: "The most forgiving to talk to, because you can describe what is wrong in ordinary language and iterate without learning any syntax. Text rendering inside images improved enormously and is now usable for simple cases, which was the standing joke for years.",
    },
    {
      kind: "p",
      text: "Best for: quick iteration, illustrations, anything where you would rather have a conversation than write a prompt.",
    },

    { kind: "h2", text: "Adobe Firefly" },
    {
      kind: "p",
      text: "The commercially cautious option. Adobe trained it on licensed and public-domain material and offers indemnification on some enterprise plans, which is why it turns up in companies whose legal department has opinions. It is also embedded directly in Photoshop as generative fill, which is where most people actually use it.",
    },
    {
      kind: "p",
      text: "Best for: extending or repairing photographs you already own, and for organisations that need a clear answer about provenance.",
    },

    { kind: "h2", text: "Stable Diffusion" },
    {
      kind: "p",
      text: "Open weights, runs on your own machine, endlessly customisable. It is the only one on this list where nothing you make leaves your computer, and the only one with a genuine learning curve attached.",
    },
    {
      kind: "p",
      text: "Best for: volume, consistency through custom training, and work that cannot be uploaded to someone else's service. Worst for: anyone who wants an image in the next five minutes.",
    },

    { kind: "h2", text: "Canva" },
    {
      kind: "p",
      text: "The one non-designers reach for, and reasonably so. The generation is not the strongest of the five, but it sits inside the tool where the finished graphic gets made, and not having to move between applications is worth more than a slightly better render.",
    },
    {
      kind: "p",
      text: "Best for: social posts, quick graphics, anybody who was never going to open Photoshop.",
    },

    { kind: "h2", text: "The licence question" },
    {
      kind: "p",
      text: "Before you put a generated image on something you sell, check three things: whether your plan permits commercial use, whether the free tier differs from the paid one on that point, and whether the provider offers any indemnity if a claim arrives.",
    },
    {
      kind: "p",
      text: "These terms vary between providers and change with some regularity. It is a five-minute check on the current terms page, and it is the difference between an image you can use and one you are borrowing without knowing it.",
    },

    { kind: "h2", text: "When not to use one at all" },
    {
      kind: "p",
      text: "If you run a service business, the images that convince people are photographs of work you actually did. A generated picture of a kitchen you never fitted is the same problem as a stock photograph of a smiling stranger in a hard hat — the visitor cannot verify it, and the ones who spot it trust you less than if you had shown nothing.",
    },
    {
      kind: "p",
      text: "Use these tools for the parts of a site nobody is asked to believe: a background, an abstract header, an illustration. For proof, use a phone and take a picture of the job.",
    },
  ],
};
