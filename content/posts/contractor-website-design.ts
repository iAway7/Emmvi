import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "contractor website design". Las cifras citadas se comprobaron en la fuente
 * el dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "It is 9pm on a Tuesday. A homeowner has three EV charger installers open in three browser tabs. The first site takes a while to load and shows a slideshow of vans. The second has a nice gallery but no price range, no area served and a contact form with eleven fields. The third says, in one line, what they install and where, has a button that says \"Get a quote\", and asks for a name, a phone number, a ZIP code and a sentence about the job. Guess which one gets the quote request." },
  { kind: "p", text: "Contractor website design is mostly judged on looks: the inspiration galleries that rank for it are full of drone shots and bold type. Looks matter, but they are not the job. This article covers what a contractor or installer website needs so that a visit becomes a quote request, and what has to happen after that." },

  { kind: "h2", text: "What the website is actually for" },
  { kind: "p", text: "For most installers and home-service businesses, the website has one job: get the right people to ask for a quote, and make it easy for them to do it on a phone. Everything else (the about page, the gallery, the blog) supports that job or gets out of its way." },
  { kind: "p", text: "That sounds obvious, but it changes how you judge a design. The question is not \"does it look modern?\" but \"can a homeowner standing in their kitchen understand what we do, believe we do it well, and send a request in under a minute?\" A site can be beautiful and fail that test. A plain site can pass it." },
  { kind: "h3", text: "The three questions a visitor needs answered" },
  { kind: "list", ordered: true, items: [
    [{ text: "Do you do my job?", bold: true }, " Solar panels, heat pumps, a bathroom refit. Named in plain words, not \"energy solutions\"."],
    [{ text: "Do you cover my area?", bold: true }, " Towns or counties listed, ideally near the top of the page."],
    [{ text: "How do I ask you?", bold: true }, " One clear action, repeated, that works with a thumb."],
  ] },
  { kind: "p", text: "If those three answers are not visible without much scrolling on a phone, the rest of the design is decoration." },

  { kind: "h2", text: "The pages a contractor site needs" },
  { kind: "p", text: "A contractor site does not need to be big. It needs the right few pages, each with a clear reason to exist." },
  { kind: "h3", text: "Home page" },
  { kind: "p", text: "One sentence that says what you install and where. A short list of services. Some proof: real photos of real jobs, reviews with first names and towns, accreditations you actually hold. And the quote button, near the top and again at the bottom." },
  { kind: "h3", text: "One page per service" },
  { kind: "p", text: "A page for solar, a page for battery storage, a page for EV chargers. Each one explains what the job involves, roughly how long it takes, what the customer needs to have ready, and what affects the price. This is where people searching for a specific job land, and a page that answers their real questions is far more useful than one generic \"Services\" page with six icons." },
  { kind: "h3", text: "Area pages, only if they are real" },
  { kind: "p", text: "If you genuinely work in several towns, a page per area with jobs you have done there helps both visitors and search. If the pages are the same text with the town name swapped, skip them. They read as filler to people and to search engines." },
  { kind: "h3", text: "Proof that you did the work" },
  { kind: "p", text: [
    "Project photos with a line about each job (\"8-panel system, Maple Grove, two days\") beat stock images every time. Reviews matter even more, and they are easier to collect than most installers think: see ",
    { text: "how to get more Google reviews", href: "/how-to-get-more-google-reviews/" },
    " for a simple routine.",
  ] },
  { kind: "h3", text: "Contact, with every route" },
  { kind: "p", text: "A short form, a phone number you can tap, an email address, your hours and the area you cover. Some people will never fill in a form. Let them call." },

  { kind: "h2", text: "The quote request form" },
  { kind: "p", text: "The form is where most contractor websites lose people, and it is usually because it asks for too much too early. The visitor wants to know if you can help and roughly what it costs. You want enough information to call back with something useful. Those overlap less than you think." },
  { kind: "p", text: "A good first form asks for:" },
  { kind: "list", items: [
    "Name.",
    "Phone number (and email, optional).",
    "ZIP code or town, so you know if it is in your area.",
    "What they need, as a short choice (\"Solar\", \"Battery\", \"EV charger\", \"Not sure\").",
    "One optional free-text box: \"Anything we should know?\"",
  ] },
  { kind: "p", text: "Roof orientation, meter type, budget and photos are all useful, but they belong in the follow-up conversation, not in front of a stranger at 9pm. Every extra required field is another reason to close the tab." },
  { kind: "aside", tone: "tip", text: "Fill in your own quote form on your phone, one-handed, with the screen at the brightness you'd use outdoors. If you get annoyed before you finish, so will your customers." },
  { kind: "h3", text: "Say what happens next" },
  { kind: "p", text: "Under the button, one line: \"We reply within the hour during working hours, and the same evening otherwise.\" Only write what you can keep. A promise you break on the first request is worse than no promise at all." },

  { kind: "h2", text: "Speed and the phone in a hand" },
  { kind: "p", text: [
    "Most homeowners find an installer on their phone, and search engines look at your site the same way. Google says it ",
    { text: "uses the mobile version of a site's content", href: "https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing" },
    " for indexing and ranking. If the mobile version is a squashed copy of the desktop site, that is the version that counts.",
  ] },
  { kind: "p", text: [
    "Speed is measurable. Google's web.dev guidance says the main content of a page should appear in ",
    { text: "2.5 seconds or less", bold: true },
    " (the ",
    { text: "Largest Contentful Paint metric", href: "https://web.dev/articles/lcp" },
    "), measured at the 75th percentile of real page loads on mobile and desktop. That is a target for the page, not a guarantee of rankings or of more quote requests, but it is a fair test of whether the design is getting in the way.",
  ] },
  { kind: "p", text: "The usual culprits on contractor sites are the same every time: a full-screen video in the header, uncompressed project photos straight from the camera, a slider with five large images, and a stack of plugins and chat widgets that each load their own scripts." },
  { kind: "h3", text: "Small things that matter on a phone" },
  { kind: "list", items: [
    "The phone number is a tap-to-call link, not an image or plain text.",
    "Buttons are big enough to hit with a thumb, with space around them.",
    "The quote button stays reachable without scrolling back to the top.",
    "Text is readable without zooming, and nothing slides sideways.",
  ] },
  { kind: "p", text: [
    "For a longer list of what goes wrong, see ",
    { text: "seven web design mistakes that cost you quote requests", href: "/top-7-web-design-mistakes-that-are-killing-your-conversions-in-2025/" },
    ".",
  ] },

  { kind: "h2", text: "What happens after someone submits" },
  { kind: "p", text: "This is the part most contractor website design ignores, and it decides whether the site was worth building. A form that sends an email to an inbox nobody checks until the evening has done its job; the business hasn't." },
  { kind: "p", text: [
    "Homeowners often ask two or three installers at once. The first one to reply has the conversation; the others are sending a quote to someone who has already booked a survey. The article on ",
    { text: "speed to lead", href: "/speed-to-lead/" },
    " goes into why, and how installers reply first without living on their phone.",
  ] },
  { kind: "p", text: "In practice, the website should hand every request to a system that does three things at once:" },
  { kind: "list", ordered: true, items: [
    [{ text: "Replies to the customer straight away", bold: true }, " by text, confirming the request and saying when a person will call."],
    [{ text: "Tells you, on your phone,", bold: true }, " with the name, the job and the area, so you can decide whether to call from the van."],
    [{ text: "Logs the request in one place", bold: true }, " (a CRM), so it can be followed up if the first call goes to voicemail."],
  ] },
  { kind: "p", text: "An instant reply might look like this:" },
  { kind: "aside", text: "\"Hi Sarah, thanks for your solar quote request with Northside Solar. We've got your details and someone will call you today before 6pm. If it's easier, reply here with a good time to talk.\"" },
  { kind: "p", text: [
    "The same applies to the phone number on the site. A call you miss while you are on a roof can trigger a text back automatically, which is covered in ",
    { text: "missed call text back", href: "/missed-call-text-back/" },
    ".",
  ] },

  { kind: "h2", text: "What design can't fix" },
  { kind: "p", text: "A well-built site makes it easier to ask for a quote. It does not create demand that isn't there, it does not make a quote cheaper, and it will not save a request nobody answers. If a business takes two days to call back, a redesign mostly changes how the delay looks." },
  { kind: "p", text: "It also takes time to show results in search. A new or rebuilt site is not found overnight, and nobody can honestly promise a ranking position or a number of new jobs. What you can check is concrete: does the page load fast on a phone, can a visitor send a request in under a minute, does every request get an answer, and do you know where each one came from." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. A contractor who works mostly from referrals, or a commercial installer bidding on tenders, needs a different site from a residential installer who gets quote requests from search. Start from where your work actually comes from." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How many pages does a contractor website need?" },
  { kind: "p", text: "Fewer than most people think. A home page, one page per service you really sell, a projects or reviews page, and a contact page cover most installers. Add area pages only if you have real work to show in each area." },
  { kind: "h3", text: "Should I put prices on my website?" },
  { kind: "p", text: "Exact prices are rarely possible for installs, because every property is different. A typical range, or the things that move the price, helps visitors decide whether to ask. It also filters out requests that were never going to go ahead." },
  { kind: "h3", text: "Is a website builder good enough?" },
  { kind: "p", text: "It can be, if the result loads fast on a phone, has a short form, and connects to something that answers requests straight away. The tool matters less than whether those three things work." },
  { kind: "h3", text: "How do I know if my current site works?" },
  { kind: "p", text: "Count the quote requests it sends each month, and check how long each one waited for a reply. Then fill in the form yourself on your phone. Those three checks will tell you more than a design review." },
  { kind: "p", text: [
    "If you would rather have the site and the system behind it built and tested together, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const contractorWebsiteDesign: Post = {
  slug: "contractor-website-design",
  title: "Contractor Website Design That Gets Quote Requests",
  description: "Contractor website design for installers: the pages you need, a quote form people finish on a phone, speed targets, and what happens after someone submits.",
  lede: "A contractor site has one job: turning a visit into a quote request.",
  category: "Website Design",
  published: "2026-10-02",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/contractor-website-design.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
