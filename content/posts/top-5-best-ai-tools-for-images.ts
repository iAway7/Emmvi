import type { Post } from "@/lib/posts";

/**
 * Recuperado del backup del WordPress anterior (agosto de 2026) y sustituido
 * el 27 de septiembre de 2026 por la reescritura de content/rewrites/.
 *
 * El original describia versiones y funciones que caducan en meses, y su
 * description nombraba cinco herramientas distintas de las del cuerpo. Este
 * cuerpo se escribe por lo que dura: para que sirve cada una, que licencia
 * deja y cuando no usar ninguna. Runway sale de la lista porque se ha ido al
 * video; se dice en la entrada. Slug, fecha de publicacion, imagen y
 * categoria no se tocan.
 */
const body: Post["body"] = [
  { kind: "p", text: "This field moves faster than anything else in software, so treat the specifics below as a starting point rather than a verdict. What changes slowly is what each tool is shaped for, and that is what the list is about." },
  { kind: "p", text: "Runway, which was on the earlier version of this list, is left out: it has put its weight behind video, and this list is about still images." },

  { kind: "h2", text: "Midjourney" },
  { kind: "p", text: "Still the one with the strongest aesthetic. Ask for something atmospheric and it will give you something that looks deliberately art-directed rather than merely assembled. The cost is control: getting a specific thing, rather than a beautiful thing, takes practice." },
  { kind: "p", text: "Best for: mood, backgrounds, concept work. Worst for: an image that has to contain exact text or a specific product." },

  { kind: "h2", text: "ChatGPT and DALL·E" },
  { kind: "p", text: "The most forgiving to talk to, because you can describe what is wrong in ordinary language and iterate without learning any syntax. Text inside images, the standing joke for years, has improved a great deal and is now usable for simple cases." },
  { kind: "p", text: "Best for: quick iteration, illustrations, anything where you would rather have a conversation than write a prompt." },

  { kind: "h2", text: "Adobe Firefly" },
  { kind: "p", text: [
    "The commercially cautious option. ",
    { text: "Adobe says", href: "https://www.adobe.com/ai/overview/firefly/gen-ai-approach.html" },
    " it trains Firefly on licensed content such as Adobe Stock and on public-domain material, and it offers intellectual property indemnification to enterprise customers. That is why it turns up in companies whose legal department has opinions. It is also built into Photoshop as generative fill, which is where most people actually use it.",
  ] },
  { kind: "p", text: "Best for: extending or repairing photographs you already own, and for organisations that need a clear answer about provenance." },

  { kind: "h2", text: "Stable Diffusion" },
  { kind: "p", text: "Open weights, runs on your own machine, endlessly customisable. It is the only one on this list where nothing you make has to leave your computer, and the only one with a genuine learning curve attached." },
  { kind: "p", text: "Best for: volume, consistency through custom training, and work that cannot be uploaded to someone else's service. Worst for: anyone who wants an image in the next five minutes." },

  { kind: "h2", text: "Canva" },
  { kind: "p", text: "The one non-designers reach for, and reasonably so. Its image generation is not the most capable of the five, but it sits inside the tool where the finished graphic gets made, and not having to move between applications is worth more than a slightly better render." },
  { kind: "p", text: "Best for: social posts, quick graphics, anybody who was never going to open Photoshop." },

  { kind: "h2", text: "The licence question" },
  { kind: "p", text: "Before you put a generated image on something you sell, check three things: whether your plan permits commercial use, whether the free tier differs from the paid one on that point, and whether the provider offers any indemnity if a claim arrives." },
  { kind: "p", text: "These terms vary between providers and change with some regularity. It is a five-minute check on the current terms page, and it is the difference between an image you can use and one you are borrowing without knowing it." },

  { kind: "h2", text: "When not to use one" },
  { kind: "p", text: "If you run a service business, the images that convince people are photographs of work you actually did. A generated picture of a kitchen you never fitted is the same problem as a stock photograph of a smiling stranger in a hard hat. The visitor cannot verify it, and the ones who spot it trust you less than if you had shown nothing." },
  { kind: "p", text: [
    "Use these tools for the parts of a site nobody is asked to believe: a background, an abstract header, an illustration. For proof, use a phone and take a picture of the job. The same goes for the rest of the page, as ",
    { text: "these web design mistakes", href: "/top-7-web-design-mistakes-that-are-killing-your-conversions-in-2025" },
    " show.",
  ] },

  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business, and emmvi is not affiliated with any of these vendors. Features, limits and licence terms change often, so check each tool on its own site before subscribing, and read the licence in particular if the images are for client work." },
];

export const top5BestAi: Post = {
  slug: "top-5-best-ai-tools-for-images",
  title: "5 AI Tools for Images, and When Not to Use Them",
  description: "Midjourney, ChatGPT, Adobe Firefly, Stable Diffusion and Canva: what each AI image tool is good at, what the licence allows, and when a photo is better.",
  lede: "The interesting question is no longer whether these work. It is which job you are handing them, and whether you are allowed to sell what comes out.",
  category: "AI",
  // Fecha original de publicacion. No se toca: es parte de lo que se restaura.
  published: "2025-04-03",
  updated: "2026-09-27",
  /** Destacada del WordPress. `alt` vacio a proposito: la imagen va dentro
   *  del enlace, pegada al titular que ya dice lo mismo, y describir una
   *  ilustracion generica ahi solo anade ruido a un lector de pantalla. */
  image: {
    src: "/blog/top-5-best-ai-tools-for-images.jpg",
    width: 1520,
    height: 760,
    alt: "",
  },
  body,
};
