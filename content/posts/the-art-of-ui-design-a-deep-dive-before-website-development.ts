import type { Post } from "@/lib/posts";

/**
 * Recuperado del backup del WordPress anterior (agosto de 2026), convertido
 * desde el marcado Gutenberg original.
 *
 * Revisado el 2026-10-02: InVision cerro a finales de 2024 y Adobe XD esta en
 * modo mantenimiento desde 2023, asi que dejan de recomendarse como
 * herramientas (con enlace a Adobe). Fuera el lenguaje de consultora
 * ("magic", "pivotal", "seamless", "high-converting"). Misma estructura.
 */
const body: Post["body"] = [
  { kind: "p", text: [
    "The first impression a website makes shapes much of what a visitor does next.",
    { text: "A great website doesn’t just function well", href: "/services/website-design" },
    "; it is also easy to understand at a glance and pleasant to use. Getting there is the job of",
    { text: "UI (User Interface) design", bold: true },
    ".",
  ] },
  { kind: "p", text: "UI design isn’t just about attractive layouts and pretty colors. It is about building something that anticipates what visitors need, solves their problem and gets out of their way. Before developers write any code, there is a design process that decides most of how the site will work. It needs creativity, but also an understanding of how people behave, what the business needs from the site and what the technology can do." },
  { kind: "p", text: "In this article, we’ll walk through the UI design process that happens before a website is developed: the steps, and what each one decides about the final product." },
  { kind: "h2", text: "1. Understanding the Users and Business Goals" },
  { kind: "p", text: [
    "The first step in the UI design process, and the one the rest depends on, is",
    { text: "understanding the users", bold: true },
    ". A website designed without knowing who it is for ends up designed for whoever made it. To start, UI designers gather information through research and conversations with the people who own the project. This stage is the groundwork for an interface that meets both the business’s goals and its visitors’ expectations.",
  ] },
  { kind: "h3", text: "a. User Research and Personas" },
  { kind: "p", text: [
    "User research is the process of gathering insights into the behaviors, needs, and challenges of the",
    { text: "website’s target audience", href: "/services/seo" },
    ". This research can take many forms:",
  ] },
  { kind: "list", items: [
    [
      { text: "Surveys and Questionnaires:", bold: true },
      "These tools allow designers to gather direct input from real users, identifying common pain points, preferences, and desires.",
    ],
    [
      { text: "User Interviews:", bold: true },
      "Conducting one-on-one interviews with potential or existing users provides qualitative data about their needs and experiences.",
    ],
    [
      { text: "Analytics Review:", bold: true },
      "Reviewing existing user data from similar platforms or previous website iterations helps designers understand how users are currently interacting with the platform.",
    ],
  ] },
  { kind: "p", text: [
    "Once this research is completed,",
    { text: "user personas", bold: true },
    "are created. Personas are fictional, generalized representations of the website’s primary users, helping designers empathize with them and guide design decisions. These personas include key characteristics such as age, profession, challenges, preferences, and goals.",
  ] },
  { kind: "h3", text: "b. Business and Brand Goals" },
  { kind: "p", text: "The user’s perspective comes first, but designers also need a clear picture of the business goals behind the website. Whether it’s increasing sales, capturing leads, or providing educational content, the UI design needs to align with these objectives." },
  { kind: "p", text: [
    "To accomplish this, designers often conduct",
    { text: "stakeholder interviews", bold: true },
    "to clarify business objectives and gather expectations. During these discussions, designers can learn about:",
  ] },
  { kind: "list", items: [
    [
      "The",
      { text: "brand’s values", bold: true },
      "and how the website should communicate them visually.",
    ],
    [
      "The",
      { text: "website’s core functions", bold: true },
      ", such as e-commerce, informational, or service-based goals.",
    ],
    [
      "The",
      { text: "desired tone and voice", bold: true },
      "of the site, which informs color schemes, typography, and overall visual style.",
    ],
  ] },
  { kind: "p", text: "Understanding both the user’s needs and the business objectives lets UI designers build a site that is useful to visitors and does the job the business needs, whether that is a sale, a booking or a quote request." },
  { kind: "h2", text: "2. Wireframing and Prototyping" },
  { kind: "p", text: [
    "Once the research phase is complete, the next step is to create a blueprint for the website, ",
    { text: "wireframing", bold: true },
    ". This stage of the UI design process deals with layout, how the content is organised, and the structure of the website.",
  ] },
  { kind: "h3", text: "a. Wireframing: The Blueprint" },
  { kind: "p", text: "Wireframes are low-fidelity visual representations of a website’s layout. They act as a skeleton, showing where each element of the website: (navigation, buttons, images and text) will be placed. Wireframing is done in black-and-white, without detailed graphics or branding, as it is meant to emphasize functionality and user flow." },
  { kind: "p", text: [
    "Wireframes can be created in design tools like",
    { text: "Figma", bold: true },
    "or",
    { text: "Sketch", bold: true },
    ". Adobe XD was a common choice too, but Adobe has put it in",
    { text: "maintenance mode", href: "https://helpx.adobe.com/support/xd.html" },
    ", with no new features, so it is not a tool to start a new project in. Wireframes typically feature:",
  ] },
  { kind: "list", items: [
    [
      { text: "Navigation elements", bold: true },
      "like menus and links.",
    ],
    [
      { text: "Content sections", bold: true },
      "such as headers, footers, and sidebars.",
    ],
    [
      { text: "Buttons and CTAs (Call to Actions)", bold: true },
      "that guide users to take the next step (e.g., \"Contact Us,\" \"Sign Up,\" \"Shop Now\").",
    ],
  ] },
  { kind: "p", text: "Wireframing doesn’t just show where elements are placed. It also helps designers determine the flow of interactions. For example, how users will move from one page to another, or what will happen when they click on a particular element." },
  { kind: "h3", text: "b. Prototyping: Bringing Wireframes to Life" },
  { kind: "p", text: [
    "While wireframes help establish the structure,",
    { text: "prototypes", bold: true },
    "add interactivity, bringing wireframes to life. A prototype is an interactive version of a wireframe that demonstrates how the user will experience the website. Unlike wireframes, prototypes allow designers to test the user journey and make adjustments before finalizing the design.",
  ] },
  { kind: "p", text: "Prototypes can range from simple clickable versions of wireframes to fully functional, high-fidelity prototypes that mimic the final website. The key benefit of prototyping is that it enables designers and stakeholders to test user interactions in real-time, identifying any issues in the flow or usability that might not have been obvious in static wireframes." },
  { kind: "p", text: [
    "Tools like",
    { text: "Figma", bold: true },
    "and",
    { text: "Marvel", bold: true },
    "are commonly used to create prototypes that can be shared and tested with the business or with real users. InVision, which older guides still recommend, shut down its design services at the end of 2024.",
  ] },
  { kind: "h2", text: "3. Visual Design and Branding" },
  { kind: "p", text: [
    "Once the wireframes and prototypes have been tested and approved, the next step is to turn these blueprints into finished designs. This is the job of",
    { text: "visual design", bold: true },
    ", where the look of the website is decided.",
  ] },
  { kind: "h3", text: "a. Typography and Color" },
  { kind: "p", text: [
    "The careful selection of",
    { text: "typography", bold: true },
    "and",
    { text: "color schemes", bold: true },
    "shapes a large part of how the site feels to use.",
  ] },
  { kind: "list", items: [
    [
      { text: "Typography", bold: true },
      "should reflect the brand’s personality, whether it’s sleek and modern, classic, or fun and quirky. It should also prioritize legibility, ensuring that users can easily read and interact with the website across devices. Designers choose font families that complement each other in terms of weight, size, and style to create visual harmony.",
    ],
    [
      { text: "Color schemes", bold: true },
      "are critical for setting the mood and guiding the user’s eye. Colors evoke emotions and influence behavior, so UI designers must choose colors that align with the brand’s message while ensuring readability and accessibility. For example, blue might convey trust, while green often symbolizes growth or health. Designers also need to consider",
      { text: "color contrast", bold: true },
      ", ensuring that the site is readable for users with visual impairments.",
    ],
  ] },
  { kind: "h3", text: "b. Imagery and Iconography" },
  { kind: "p", text: "Good UI design uses imagery and iconography that help the visitor, not just decorate the page. Images should be high-quality and optimized for fast loading times, while icons help break up text and provide intuitive visual cues for navigation." },
  { kind: "p", text: [
    "UI designers will often create a",
    { text: "visual library", bold: true },
    "of icons, buttons, and other elements that maintain consistency throughout the site. This library ensures that every design element is aligned with the brand’s identity and creates a unified look and feel across pages.",
  ] },
  { kind: "h3", text: "c. Responsive Design" },
  { kind: "p", text: "Many visitors arrive on a phone, often first, so responsive design is not optional. A responsive UI works on screens of every size, from desktops to smartphones. Designers have to plan for those sizes and make sure the layout adapts without losing anything the visitor needs." },
  { kind: "p", text: "To achieve responsive design, UI designers often use flexible grids, scalable images, and media queries to ensure the website’s layout adjusts based on the device it’s viewed on." },
  { kind: "h2", text: "4. Design Handoff to Developers" },
  { kind: "p", text: [
    "The final phase in the UI design process is the",
    { text: "handoff to developers", bold: true },
    ". This is where the design is translated into actual code, and the website starts to take form. While this might seem like a simple task of sending over files, it requires detailed communication and collaboration between designers and developers to ensure the final product matches the design vision.",
  ] },
  { kind: "h3", text: "a. Preparing Design Assets" },
  { kind: "p", text: "UI designers prepare all design assets for developers, including high-resolution images, icons, fonts, and other visual elements. They also provide specifications such as color codes, font sizes, and spacing guidelines, ensuring that the website’s visual elements are implemented accurately." },
  { kind: "h3", text: "b. Design Collaboration and Testing" },
  { kind: "p", text: "The design handoff isn’t a one-way process; it requires ongoing collaboration. Designers work closely with developers to ensure that the website functions exactly as envisioned. This often involves several rounds of testing and revisions to ensure the design is properly implemented." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. This is what a full design phase looks like, and a small site rarely needs all of it. Naming a tool is not an endorsement either: the steps matter more than the software you run them in." },

  { kind: "h2", text: "Final Thoughts" },
  { kind: "p", text: "The UI design process is where most of a website’s quality is decided. By understanding the users and business goals, wireframing and prototyping the structure, refining the visual design, and working closely with developers, designers give the build a clear plan to follow." },
  { kind: "p", text: "A strong UI design isn’t just about looking good. It is about a site that is easy to use and built around what its visitors need. Whether you’re building a new website or redesigning an existing one, the time spent on this process is cheaper than fixing the same problems after launch." },
  { kind: "p", text: [
    "Planning a new site or a redesign?",
    { text: "Book a free call", href: "/contact-us" },
    "and we will walk through which of these steps your project actually needs.",
  ] },
];

export const theArtOfUi: Post = {
  slug: "the-art-of-ui-design-a-deep-dive-before-website-development",
  title: "UI Design: What Happens Before the Build",
  description: "The UI design work that comes before development: user research, wireframes, prototypes, visual design and the handoff to developers, step by step.",
  lede: "The research, wireframes and prototypes that come before anyone writes code.",
  category: "UI Design",
  // Fecha original de publicacion. No se toca: es parte de lo que se restaura.
  published: "2025-04-02",
  updated: "2026-10-02",
  /** Destacada del WordPress. `alt` vacio a proposito: la imagen va dentro
   *  del enlace, pegada al titular que ya dice lo mismo, y describir una
   *  ilustracion generica ahi solo anade ruido a un lector de pantalla. */
  image: {
    src: "/blog/the-art-of-ui-design-a-deep-dive-before-website-development.png",
    width: 1280,
    height: 641,
    alt: "",
  },
  body,
};
