import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (octubre de 2026). Palabra clave:
 * "quote request form". Las fuentes citadas se comprobaron en la fuente el
 * dia de publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "A homeowner is on the sofa at 9pm, phone in one hand, reading about solar panels. They tap \"Get a quote\" on your site and see a form with eleven fields, two of them asking for things they do not know: roof pitch and annual kWh usage. They close the tab and fill in a shorter form on the next installer's site. You never find out they were there." },
  { kind: "p", text: "A quote request form has two jobs that pull in opposite directions. It has to be short enough that a busy person finishes it on a phone, and it has to give you enough to reply with something useful instead of a string of questions. This article covers which fields earn their place, how to lay the form out for a thumb, and what should happen in the minute after someone presses send." },

  { kind: "h2", text: "What the form is really for" },
  { kind: "p", text: "The form is not the quote. Very few installation jobs can be priced from a web form alone: a roof, an electrical panel or a bathroom usually needs photos, a call or a visit. So the form only has to do three things." },
  { kind: "list", ordered: true, items: [
    [{ text: "Tell you who to contact and how.", bold: true }, " A name and a mobile number you can text."],
    [{ text: "Tell you if the job is yours.", bold: true }, " The type of work and the area, so you can spot a job you do not cover before anyone drives anywhere."],
    [{ text: "Tell you how soon to move.", bold: true }, " Someone with no hot water and someone planning next spring both deserve a reply, but not the same one."],
  ] },
  { kind: "p", text: "Everything else is a nice-to-have. If a field does not change what you do next, it belongs in the first conversation, not on the form." },

  { kind: "h2", text: "The fields worth asking for" },
  { kind: "p", text: [
    "Google's guidance for web forms on web.dev puts it plainly: ",
    { text: "\"Ask for as little data as possible.\"", href: "https://web.dev/articles/payment-and-address-form-best-practices" },
    " For an installer, that usually leaves six fields.",
  ] },
  { kind: "h3", text: "Name, in one box" },
  { kind: "p", text: "One field called \"Name\", not first and last name split in two. The same web.dev guidance recommends a single name input because it makes forms less complex and autofill simpler. You only need to know what to call them." },
  { kind: "h3", text: "Mobile number" },
  { kind: "p", text: "Ask for a mobile number by name, because a text is how most replies will start. Email can be optional. If you plan to send automatic texts, say so right next to the field (\"We'll text you to confirm\") so the first message is not a surprise, and check the consent rules that apply to business texting where you work." },
  { kind: "h3", text: "Address or ZIP code" },
  { kind: "p", text: "A ZIP code is enough to check you cover the area. A full address is better if you will look at the roof on satellite imagery before calling, which many solar installers do. Pick one based on what you actually use it for." },
  { kind: "h3", text: "Type of job, as buttons" },
  { kind: "p", text: "A short list to tap, not a blank box: \"Solar panels\", \"Battery\", \"EV charger\", \"Repair\", \"Other\". Buttons are faster on a phone than typing, and they give you clean data to sort by later. Keep the list to the jobs you want, in the words customers use." },
  { kind: "h3", text: "Timing" },
  { kind: "p", text: "\"As soon as possible\", \"In the next month\", \"Just planning\". This single question tells you whether to call tonight or send information and follow up. It is the most useful field on the form after the phone number, and the one most forms leave out." },
  { kind: "h3", text: "A free-text box, optional" },
  { kind: "p", text: "\"Anything we should know?\" catches the detail you did not think to ask: a flat roof, a rented house, a deadline before a new baby arrives. Keep it optional, so nobody stops at it." },
  { kind: "aside", tone: "tip", text: "Fill in your own quote request form on your phone, with your thumb, and time it. If it takes more than a minute, find the field you can remove." },

  { kind: "h2", text: "Fields that cost you requests" },
  { kind: "p", text: "Some fields feel useful to you and stop the customer cold. The common ones on installer sites:" },
  { kind: "list", items: [
    [{ text: "Budget.", bold: true }, " Most homeowners do not know what the job should cost. That is why they are asking you. A budget field makes them guess, or leave."],
    [{ text: "Technical details.", bold: true }, " Roof pitch, panel capacity, amperage of the main breaker. You can find these out from photos or on the visit. The customer usually cannot."],
    [{ text: "\"How did you hear about us?\" as a required field.", bold: true }, " Useful information, wrong place to force it. Track the source automatically instead, which the article on ",
      { text: "lead source tracking", href: "/lead-source-tracking/" },
      " explains."],
    [{ text: "Preferred date and time.", bold: true }, " Fine for a booking form, odd on a quote request where you have not agreed the job yet."],
    [{ text: "A CAPTCHA puzzle up front.", bold: true }, " Spam is real, but there are quieter ways to filter it, such as a hidden field that only bots fill in. A puzzle on a phone at night is one more reason to give up."],
  ] },
  { kind: "p", text: "Each of these has a place later in the conversation. The test for any field is simple: would you rather have this answer, or have the request?" },

  { kind: "h2", text: "Photos: the field that saves a visit" },
  { kind: "p", text: [
    "An optional photo upload is the one extra worth adding. A picture of the electrical panel tells an EV charger installer whether the panel needs an upgrade. A photo of the old furnace and its label tells an HVAC technician what they are replacing. The article on ",
    { text: "plumbing website design", href: "/plumbing-website-design/" },
    " makes the same point for leaks and water heaters.",
  ] },
  { kind: "h3", text: "How to ask for the photo" },
  { kind: "p", text: "Say exactly what to photograph, in one line under the button: \"A photo of your electrical panel with the door open\" or \"The front of your roof from the street\". People will send a useful picture if they know which one you want." },
  { kind: "p", text: [
    "On the technical side, a file input that accepts images opens the phone's photo picker. MDN documents a ",
    { text: "capture attribute", href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/capture" },
    " that asks the browser to use the camera for a new picture. That is handy on the roof, but it can get in the way of someone who already took the photo earlier, so test both on a real phone before choosing. On a desktop, MDN notes, you will likely get a normal file picker either way.",
  ] },

  { kind: "h2", text: "Built for a thumb, not a desk" },
  { kind: "p", text: "Most quote requests for home services start on a phone, often in the evening. A form that works well on a desktop can still be painful on a five-inch screen. A few details make the difference." },
  { kind: "list", items: [
    [{ text: "The right keyboard.", bold: true }, " A phone field set as type \"tel\" brings up the number pad; an email field set as \"email\" brings up the @ key. web.dev recommends using the appropriate input type for exactly this reason."],
    [{ text: "Autofill switched on.", bold: true }, " Fields marked with the right autocomplete values let the phone fill in name, number and address in one tap."],
    [{ text: "Labels that stay visible.", bold: true }, " Grey placeholder text inside the box disappears as soon as someone starts typing. web.dev advises against using placeholders instead of labels for that reason."],
    [{ text: "One column, big buttons.", bold: true }, " Fields stacked in a single column, with tap targets large enough for a thumb in a work glove."],
    [{ text: "A clear button label.", bold: true }, " \"Send my quote request\" says what happens. \"Submit\" says nothing."],
  ] },
  { kind: "h3", text: "Where the form sits" },
  { kind: "p", text: "Put the form, or a button that opens it, on every service page and at the top of the home page on mobile. A visitor reading about battery storage should not have to go back to a contact page to ask about it. If you have one page per service, the job type can be filled in already." },

  { kind: "h2", text: "The minute after they press send" },
  { kind: "p", text: [
    "A well-built form that drops the request into an inbox nobody reads until Friday has only done half the job. The customer who just pressed send is, at that moment, the most interested they will ever be. The article on ",
    { text: "speed to lead", href: "/speed-to-lead/" },
    " covers why that first reply matters and what it should say.",
  ] },
  { kind: "p", text: "Here is what should happen without anyone touching a keyboard:" },
  { kind: "list", ordered: true, items: [
    [{ text: "A thank-you screen that sets expectations.", bold: true }, " Not \"Thanks for your submission\", but who will be in touch and roughly when."],
    [{ text: "A text to the customer within a minute.", bold: true }, " Confirming you have it, from a number they can reply to."],
    [{ text: "An alert to whoever replies.", bold: true }, " On their phone, with the name, the job type, the timing and the photo."],
    [{ text: "A record in one list.", bold: true }, " So the request does not live only in someone's email, and nothing gets lost when that person is on vacation."],
  ] },
  { kind: "p", text: "The first text can be short:" },
  { kind: "aside", text: "\"Hi Dana, thanks for your solar quote request. This is Mark from Northfield Solar. I'll look at your roof on the map tonight and call you tomorrow before noon. If it's easier to talk at another time, just reply here.\"" },
  { kind: "p", text: [
    "After that, the request needs a follow-up path. If the customer goes quiet after receiving a quote, two or three short messages over the next week, stopped as soon as they reply, catch most of the ones that were simply busy. The guide on ",
    { text: "quote follow-up", href: "/quote-follow-up/" },
    " sets out the timing and wording.",
  ] },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. A company that only does large commercial jobs may need more detail up front, and a regulated trade may have to collect specific information. Start from what you need to send a useful first reply and remove everything else." },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "How many fields should a quote request form have?" },
  { kind: "p", text: "As few as let you reply usefully. For most installers that is name, mobile number, area, job type and timing, with photos and a free-text box as optional extras. If you are not sure a field earns its place, remove it for a month and see whether you miss it." },
  { kind: "h3", text: "Should I use a multi-step form?" },
  { kind: "p", text: "It can help when you have a few questions that depend on each other, such as showing roof questions only for solar. Keep it to two or three short steps, show progress, and ask for contact details early so a half-finished request is not lost entirely." },
  { kind: "h3", text: "Is a form better than a phone number?" },
  { kind: "p", text: "Offer both. Some people want to talk now, others would rather not call at all, especially in the evening. A form and a tappable phone number side by side cover both, as long as missed calls also get a quick reply." },
  { kind: "h3", text: "What if I get spam through the form?" },
  { kind: "p", text: "Start with a hidden honeypot field and a basic filter on the server. Most simple spam stops there. Add a visible check only if it keeps coming, because every extra step also costs some real requests." },
  { kind: "p", text: [
    "If you would rather have the form and what happens after it built and tested together, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const quoteRequestForm: Post = {
  slug: "quote-request-form",
  title: "Quote Request Form: The Fields Installers Need",
  description: "How to build a quote request form for an installer website: which fields to ask for, which to cut, photos, mobile layout and the reply that follows.",
  lede: "Ask for enough to reply well, and nothing that makes them close the tab.",
  category: "Lead Generation",
  published: "2026-10-18",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/quote-request-form.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
