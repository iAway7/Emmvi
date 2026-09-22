import type { Post } from "@/lib/posts";

/**
 * El slug lleva "in 2025" y estamos en 2026. La URL no se toca —es la que
 * Google conoce— pero el titulo visible va sin año: dentro de doce meses
 * volveria a estar caduco, y lo que cuenta no depende del año.
 */
export const webDesignMistakes: Post = {
  slug: "top-7-web-design-mistakes-that-are-killing-your-conversions-in-2025",
  title: "Seven web design mistakes that cost you enquiries",
  description:
    "Seven specific things that make visitors leave a service business website, and what to do about each one.",
  lede: "None of these are about taste. They are about a person on a phone, with one hand free, deciding in a few seconds whether to bother.",
  category: "Website Design",
  published: "2026-09-19",
  body: [
    {
      kind: "p",
      text: "Design arguments usually turn into taste arguments, which nobody wins. These seven are not matters of taste. Each one is a specific reason a visitor who wanted to contact you did not, and each one has a fix that takes hours rather than a redesign.",
    },

    { kind: "h2", text: "1. It is slow on a phone on mobile data" },
    {
      kind: "p",
      text: "Not slow on your laptop on office broadband. Slow on a four-year-old phone, on mobile data, on a street. That is where trade websites get opened. The usual culprits are uncompressed photographs straight off a camera, a carousel nobody asked for, and five tracking scripts.",
    },
    {
      kind: "p",
      text: "Test it on your own phone with wifi turned off. If you find yourself waiting, so did every visitor you lost.",
    },

    { kind: "h2", text: "2. The visitor cannot tell what you do" },
    {
      kind: "p",
      text: "Homepages often open with a mood — a wide photograph, a slogan about excellence — and state the actual trade somewhere further down. The visitor has to work for the one piece of information they came for. Say the trade and the area in the first line.",
    },

    { kind: "h2", text: "3. The phone number is not tappable" },
    {
      kind: "p",
      text: "If the number is baked into an image, or lives only in the footer, you have put a step between deciding to call and calling. It belongs in the header, as a real link, on every page.",
    },

    { kind: "h2", text: "4. The form asks for too much" },
    {
      kind: "p",
      text: "Company name, budget range, how did you hear about us, preferred contact method. Every one of those is a small reason to stop. Collect what you need to have a first conversation and get the rest during it.",
    },

    { kind: "h2", text: "5. Nothing happens after the form is sent" },
    {
      kind: "p",
      text: "This is the one nobody counts as a design problem, and it costs more than the other six together. The visitor submits, sees a thank-you line, and then hears nothing until someone gets round to the inbox. Meanwhile they have enquired with two competitors.",
    },
    {
      kind: "aside",
      text: "The page is the easy half. The half that decides whether the enquiry becomes a job is what happens in the hour afterwards, and that is not a design decision — it is a system you either have or do not.",
    },

    { kind: "h2", text: "6. The proof is generic" },
    {
      kind: "p",
      text: "Stock photographs of people in hard hats who are not your team. Logos of companies you did not work for. Testimonials with no name attached. A visitor cannot verify any of it, and the ones who notice trust you less than if you had shown nothing.",
    },
    {
      kind: "p",
      text: "Three real photographs of your own jobs, with the town named, beat any of it.",
    },

    { kind: "h2", text: "7. Every page ends in a dead end" },
    {
      kind: "p",
      text: "A visitor reaches the bottom of a service page and there is nothing to do. No contact form, no number, no next page. They go back to the search results, which is where your competitors are.",
    },
    {
      kind: "p",
      text: "Every page should end with the same obvious action. It does not have to be clever. It has to be there.",
    },

    { kind: "h2", text: "The order to fix them in" },
    {
      kind: "p",
      text: "Five, one and three, in that order. What happens after the form is sent, then speed, then the tappable number. They are the cheapest and they move the most. The rest can wait for the next round.",
    },
  ],
};
