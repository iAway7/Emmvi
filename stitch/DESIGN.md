# Design System: emmvi home

Written for Google Stitch. Paste this file as the design context when
generating screens for emmvi. It describes the site as it is built in
`components/pages/home-lab.tsx` and `app/globals.css`; every value below is a
real token from that code, not an aspiration. The project's own design notes
live in the repository root `DESIGN.md` (Spanish); this file is the Stitch
translation and must not drift from it.

Brand name: always written `emmvi`, lowercase, even at the start of a sentence.

## 1. Visual Theme & Atmosphere

A calm, paper-white marketing page for owners of small installation businesses
(solar, EV chargers, heating, security) who read it on a phone, in daylight,
between jobs. The page tells one story: a quote request comes in, gets
answered, gets chased, gets a review. Every section shows that story with a
hand-drawn illustrated scene (cards, phones, sticky notes, sparkles) instead
of stock photography.

- **Density:** Art Gallery Airy (3). Sections breathe: 104px vertical padding
  on desktop, 64px on mobile. One idea per section.
- **Variance:** Offset Asymmetric (5). Sections split 5/7 or 7/5, text on one
  side and a scene on the other, alternating sides. Nothing is centered
  except the one wide "journey" diagram.
- **Motion:** Fluid CSS (4). A staggered fade-up on the hero, a scroll reveal
  on lower sections, a 1px press on buttons. No parallax, no loops.

The atmosphere is a well-lit workshop: white paper, near-black ink, one violet
that carries all the accent, and scenes drawn with a thin dark outline and
soft pastel fills.

## 2. Color Palette & Roles

Light theme only. There is no dark mode and Stitch must not invent one.

- **Paper** (#FFFFFF) - page background.
- **Paper Alt** (#F9FAFD) - full-width section bands and large panels.
- **Lavender Wash** (linear-gradient 90deg, #F9FAFF 0% to #F5F4FF 100%) - an
  alternative section band with a barely visible violet tint. Used once on
  the "Where the work gets lost" section. Use instead of Paper Alt when the
  band sits next to white illustrated cards.
- **Ink** (#171717) - headlines and primary text.
- **Ink Soft** (#666666) - body copy, descriptions, quote text.
- **Line** (#EAEAEA) - hairline borders, card outlines, row dividers.
- **Violet** (#423AF4) - the single accent. Primary buttons, open FAQ
  question, eyebrow labels, map markers, focus rings. 6.68:1 on white.
- **Violet Wash** (#F0EDFF) - chips, initials avatars, soft highlights.
- **Violet Light** (#847FF8) - the accent on dark panels only.
- **Night** (linear-gradient 180deg, #171717 0% to #000000 62% to #2E2E2E
  100%) - the one dark surface, used for the "Meet emmvi" map panel. White
  text at 80% opacity on it. Never use it for a hero.

Illustration fills, used only inside scenes: mint (#DDF7C8 range), lavender
(#E2DEFF range), butter (#F6EBD0 range). They never become UI colors.

The violet is the brand and stays. Do not add a second accent, do not add
gradients to buttons, do not add glows. Accent covers under 10% of any
screen; the voice is carried by the text, not by color.

## 3. Typography Rules

One family: **DM Sans**, loaded through next/font. Contrast comes from
weight (400 body to 800 display), never from mixing families. No serif
anywhere. No monospace anywhere on marketing pages.

Fluid scale with clamp(): fixed at the minimum up to 480px, growing in a
straight line to the maximum at 1280px.

- **Display / h1** - 36 to 64px, line-height 1.06, tracking -0.025em, weight
  800. One per page. Max width 14em. Balanced wrapping.
- **Section title / h2** - 28 to 51px, line-height 1.1, tracking -0.02em,
  weight 800. Four to six words. What needs explaining goes in the paragraph.
- **Card title / h3** - 22 to 24px, line-height 1.3, weight 700.
- **Small title / h4** - 20px, weight 700. FAQ questions, people's names.
- **Lede** - 18 to 24px, line-height 1.417, weight 400, Ink Soft. The
  paragraph under a title, and every testimonial quote.
- **Body** - 18px, line-height 1.611, Ink Soft. Max 30em under a title, 38em
  in prose.
- **Copy** - 16px / 26px. Reading text inside cards.
- **UI** - 16px / 24px. Navigation, buttons, labels, chips.
- **Small** - 14px. Legal, footer, dense lists.
- **Eyebrow** - 16px, weight 500, Ink. Sentence case, not uppercase, no
  letter-spacing. At most one eyebrow per three sections, and none when the
  headline already says it.

Body text never exceeds 18px on mobile. Headings use `text-wrap: balance`,
prose uses `text-wrap: pretty`.

Copy voice: plain, specific, verifiable. "Every quote request answered in
under a minute", not "Elevate your business". No percentages of revenue, no
promises the team cannot keep on a call. Never state the size of the team;
cities are fine, headcount is not. The chosen term is "quote request", never
"enquiry" or "lead" in headings.

## 4. Component Stylings

- **Primary button** - Violet fill, white text, 16px weight 500, 44px minimum
  height, 8px radius, no shadow, no gradient. Full width on mobile. On
  press it sinks 1px (transform only). Hover darkens the fill slightly. One
  primary CTA per section, and one label per intent across the page:
  booking a call is always the same words wherever it appears.
- **Secondary action** - a plain underlined text link in Ink, underline
  offset 5px. Never a ghost or outlined button.
- **Cards** - white fill, 1px Line border, 12px radius, 32px padding, no
  shadow. Used only for testimonials and blog entries. Feature content is
  grouped with spacing and hairline rows, not cards.
- **Large panels** - Paper Alt fill, 32px radius, 36px padding on mobile
  and 64px on desktop. Used once, for the contact form block.
- **Testimonials** - one large quote (7 columns, lede size, 48px padding)
  and two smaller ones stacked beside it (5 columns, copy size). Never three
  equal cards. Quotes are three lines maximum. Attribution is a 40px round
  photo or an initials disc on Violet Wash, then name in weight 600 and
  organisation in Ink Soft, separated from the quote by a hairline.
- **Row lists** - "Who we work with" is a list of rows: h3 on the left,
  body on the right in a 0.95fr / 1.05fr grid, one hairline between rows,
  32px vertical padding. Three to four rows, never more.
- **FAQ** - native disclosure rows. Question in h4 weight 600, a plus sign
  on the right that becomes a minus when open, question turns Violet when
  open, hairline under each row, first item open by default. Max width
  920px.
- **Inputs** - label above in UI size, 44px minimum height, 1px Line border,
  8px radius, Violet focus ring 3px with 3px offset, error text below in the
  same size. Placeholder is never the label. Required marks in Violet.
- **Illustrated scenes** - the visual of every section. Thin near-black
  outlines, 2px, on white cards with a soft offset shadow, pastel fills,
  small four-point sparkles as ornaments, slight card rotations of 2 to 6
  degrees. Text inside a scene is real content (a message, a time, a
  status), never lorem. A scene never overlaps the section's text column.
- **Client logo strip** - real client logos in a single quiet row under the
  hero, greyscale-friendly, no captions or industry labels under them.
- **Header** - 88px sticky, wordmark left, four text links and one primary
  button right. Under 900px the links and button move into a menu.
- **Footer** - four columns on Paper: wordmark plus one sentence, then
  Services, Company, Legal link lists. Small size, Ink Soft.

Loading states use skeleton blocks matching the final layout. Empty states
show the illustrated scene with a one-line instruction. Errors are inline,
below the field, in plain words.

## 5. Layout Principles

- Content width 1296px centered. Side gutter 52px on desktop, 24px on
  mobile.
- Story sections are a two-column grid, 5fr / 7fr, text and scene, sides
  alternating from one section to the next. Column gap 64px.
- The hero is a 50/50 split: h1, lede, primary button and one underlined
  secondary link on the left; the "reply" scene on the right. Top padding
  88px on desktop, 48px on mobile. The headline is eight words and sits on
  three lines at 64px; do not shrink it below 56px to force two.
- The one wide section, "What happens to a request", has a centered title
  and a 1040px diagram; on mobile the diagram becomes four stacked cards.
- Full-width bands (Paper Alt, Lavender Wash, Night) hold the same 1296px
  content grid inside.
- Section rhythm: hero, logo strip, story, wide diagram, story, story, dark
  map panel, row list, testimonials, call to action, FAQ, contact panel,
  footer. Twelve sections, at least five layout families.
- No element overlaps another outside an illustrated scene. No absolute
  positioning for content.

## 6. Responsive Rules

- Below 768px every grid collapses to one column, text first, scene second.
- Scenes bleed to the screen edge on mobile (negative 24px margin) so the
  drawing keeps its size; the map panel goes edge to edge.
- Type stays at the clamp minimum on phones: 36 / 28 / 22 / 20 / 18 / 16 /
  14. Body never above 18px.
- Buttons go full width on mobile. The hero's secondary link is hidden on
  mobile.
- Every tap target is at least 44px tall.
- Horizontal overflow is a failure: nothing wider than the viewport, ever.
- Section padding drops from 104px to 64px.

## 7. Motion & Interaction

- **Hero entry** - headline, lede, buttons and scene fade up 14px in that
  order, 700ms each, 90ms apart, easing cubic-bezier(0.16, 1, 0.3, 1). Says
  what to read first.
- **Scroll reveal** - lower sections fade up as they enter the viewport,
  600ms, same easing, driven by scroll position. The first section never
  animates; it is above the fold.
- **Buttons** - sink 1px on press. Color transitions 150ms.
- **Cards that are links** - lift 3px and gain a soft shadow on hover.
  Informational cards do not lift.
- **FAQ** - native open and close, no animation.
- Everything animates through transform and opacity only, and everything
  is disabled under `prefers-reduced-motion: reduce`. No perpetual loops,
  no marquee, no parallax, no typewriters.

## 8. Anti-Patterns (Banned)

- Dark mode, dark heroes, or Night used anywhere but the map panel.
- A second accent color, gradients on buttons, glows, neon, mesh
  backgrounds. The violet is the brand; do not decorate it.
- Any font other than DM Sans. No serif, no monospace, no Inter.
- Uppercase letter-spaced eyebrows, section numbers ("01", "002 ·"),
  version labels, "Scroll to explore" cues, bouncing chevrons.
- Em dashes and en dashes as separators. Use a period, a comma or a hyphen.
- Three equal feature cards in a row. Cards for content that is not a
  testimonial or a blog entry.
- Stock photography, div-built fake screenshots, generic avatars, emoji.
  Visuals are illustrated scenes with real content inside them.
- Quotes longer than three lines. Attribution without organisation.
- Generic names and brands ("John Doe", "Acme"). Real clients only.
- Marketing clichés: "Elevate", "Seamless", "Unleash", "Next-Gen",
  "Revolutionize". Revenue percentages. Any promise not kept on the call.
- Stating how many people work at emmvi. Capitalising "emmvi".
- "Enquiry" or "lead" in headings; the term is "quote request".
- Two different labels for the same action on one page.
- Headlines over six words in section titles.
- Custom cursors, `h-screen` heroes, absolute-positioned content stacks,
  horizontal scroll on mobile.
