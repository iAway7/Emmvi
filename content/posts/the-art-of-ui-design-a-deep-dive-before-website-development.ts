import type { Post } from "@/lib/posts";

/**
 * Recuperado del backup del WordPress anterior (agosto de 2026), convertido
 * desde el marcado Gutenberg original.
 *
 * Texto intacto. Lo unico reescrito son los enlaces internos, que apuntaban a
 * rutas viejas: van al destino actual en vez de encadenar una redireccion, y
 * los que llevaban a una pagina retirada se quedan en texto llano.
 */
const body: Post["body"] = [
  { kind: "p", text: [
    "In today’s digital age, the first impression of a website often dictates the user’s entire experience with it.",
    { text: "A great website doesn’t just function well", href: "/services/website-design" },
    "; it also offers a smooth, intuitive, and visually appealing journey for its users. That’s where the magic of",
    { text: "UI (User Interface) design", bold: true },
    "comes into play.",
  ] },
  { kind: "p", text: "UI design isn’t just about creating aesthetically pleasing layouts and choosing pretty colors. It’s about creating a system that anticipates users’ needs, solves problems, and enhances their interactions. But before developers start coding, there’s a meticulous and strategic design process that sets the stage for a website’s success. This process not only requires creativity but a deep understanding of user psychology, business goals, and technology." },
  { kind: "p", text: "In this article, we’ll explore the intricate UI design process that takes place before the development of any website, uncovering the essential steps and considerations that shape the final product." },
  { kind: "h2", text: "1. Understanding the Users and Business Goals" },
  { kind: "p", text: [
    "The first and most crucial step in the UI design process is",
    { text: "understanding the users", bold: true },
    ". A website that is designed without knowledge of its target audience will inevitably fall short in providing a satisfying user experience. To start, UI designers must gather essential information through research and collaboration with stakeholders. This stage lays the groundwork for creating an interface that meets both business goals and user expectations.",
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
  { kind: "p", text: "The user perspective is essential, but designers must also have a clear understanding of the business goals behind the website. Whether it’s increasing sales, capturing leads, or providing educational content, the UI design needs to align with these objectives." },
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
  { kind: "p", text: "Understanding both the user’s needs and the business objectives allows UI designers to create a website that offers value to users while driving measurable results for the business." },
  { kind: "h2", text: "2. Wireframing and Prototyping" },
  { kind: "p", text: [
    "Once the research phase is complete, the next step is to create a blueprint for the website, ",
    { text: "wireframing", bold: true },
    ". This is a critical stage in the UI design process that focuses on layout, content organization, and the structure of the website.",
  ] },
  { kind: "h3", text: "a. Wireframing: The Blueprint" },
  { kind: "p", text: "Wireframes are low-fidelity visual representations of a website’s layout. They act as a skeleton, showing where each element of the website: (navigation, buttons, images and text) will be placed. Wireframing is done in black-and-white, without detailed graphics or branding, as it is meant to emphasize functionality and user flow." },
  { kind: "p", text: [
    "Wireframes can be created using design tools like",
    { text: "Sketch", bold: true },
    ",",
    { text: "Adobe XD", bold: true },
    ", or",
    { text: "Figma", bold: true },
    ", and they typically feature:",
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
    ",",
    { text: "InVision", bold: true },
    ", and",
    { text: "Marvel", bold: true },
    "are commonly used to create prototypes that can be shared and tested with stakeholders or even real users.",
  ] },
  { kind: "h2", text: "3. Visual Design and Branding" },
  { kind: "p", text: [
    "Once the wireframes and prototypes have been tested and approved, the next step is to transform these blueprints into visually rich, polished designs. This is where the magic of",
    { text: "visual design", bold: true },
    "comes into play, as the website’s aesthetics are finalized.",
  ] },
  { kind: "h3", text: "a. Typography and Color" },
  { kind: "p", text: [
    "The careful selection of",
    { text: "typography", bold: true },
    "and",
    { text: "color schemes", bold: true },
    "plays a pivotal role in shaping the user’s experience.",
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
  { kind: "p", text: "Great UI design involves choosing imagery and iconography that enhances the overall experience. Images should be high-quality and optimized for fast loading times, while icons help break up text and provide intuitive visual cues for navigation." },
  { kind: "p", text: [
    "UI designers will often create a",
    { text: "visual library", bold: true },
    "of icons, buttons, and other elements that maintain consistency throughout the site. This library ensures that every design element is aligned with the brand’s identity and creates a unified look and feel across pages.",
  ] },
  { kind: "h3", text: "c. Responsive Design" },
  { kind: "p", text: "In today’s mobile-first world, a responsive design is crucial. A responsive UI ensures that the website looks great on devices of all sizes, from desktops to smartphones. Designers must account for various screen sizes and ensure that the layout adapts seamlessly without sacrificing functionality or aesthetics." },
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
  { kind: "h2", text: "Final Thoughts" },
  { kind: "p", text: "The UI design process is a foundational part of creating a successful website. By understanding the users and business goals, wireframing and prototyping the structure, refining the visual design, and collaborating closely with developers, designers lay the groundwork for an intuitive, engaging, and functional website." },
  { kind: "p", text: "A strong UI design isn’t just about looking good. It’s about creating an experience that’s seamless, efficient, and tailored to the needs of the user. Whether you’re building a new website or redesigning an existing one, focusing on a thoughtful and thorough UI design process will set your project up for success." },
  { kind: "p", text: [
    "Ready to start designing a website that prioritizes user experience and business goals?",
    { text: "Let’s connect", href: "/contact-us" },
    "and create something exceptional together!",
  ] },
];

export const theArtOfUi: Post = {
  slug: "the-art-of-ui-design-a-deep-dive-before-website-development",
  title: "The Art of UI Design: A Deep Dive Before Website Development",
  description: "Master the art of UI design before development: learn key principles, user-focused layouts, visual hierarchy, and best practices to build intuitive, high-converting websites.",
  lede: "The research, wireframes and prototypes that come before anyone writes code.",
  category: "UI Design",
  // Fecha original de publicacion. No se toca: es parte de lo que se restaura.
  published: "2025-04-02",
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
