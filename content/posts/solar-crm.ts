import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (septiembre de 2026). Palabra clave:
 * "solar crm". La guia del Departamento de Energia de EE. UU. y las funciones
 * de HighLevel y OpenSolar citadas se comprobaron en la fuente el dia de
 * publicacion.
 */
const body: Post["body"] = [
  { kind: "p", text: "A solar enquiry comes in at 9pm on a Tuesday: Priya, a detached house, a south-facing roof, an electricity bill she's tired of. You book the site survey for Thursday, design the system over the weekend and send the quote on Monday. Then the waiting starts. Priya is comparing you with two other installers, her partner wants to talk about financing, and if she signs, there is still a permit, an inspection and a utility sign-off between the contract and a working system." },
  { kind: "p", text: "Most installers run that journey from a notebook, a shared inbox and memory. It works until there are twenty Priyas at different stages at once. This article covers what a solar CRM is actually for, which stages to track, what it should do without you, and how to choose one without paying for features you won't use." },

  { kind: "h2", text: "What a solar CRM is for" },
  { kind: "p", text: "A CRM (customer relationship management system) is a single record for every homeowner who contacts you, with everything that has happened and what should happen next. For a solar installer, that record needs to cover a long road: from the first enquiry, through the survey and the quote, to the day the system is switched on and the review request goes out." },
  { kind: "p", text: "The value is not the software. It's being able to answer three questions at any moment, without phoning anyone:" },
  { kind: "list", items: [
    [{ text: "Where is each job?", bold: true }, " Which homeowners are waiting for a survey, which have a quote and haven't replied, which are stuck on a permit."],
    [{ text: "What's the next step, and whose is it?", bold: true }, " A job with no next step is a job someone has quietly stopped working on."],
    [{ text: "Where did the work come from?", bold: true }, " If you pay for ads, directories or lead lists, the CRM is where you find out which of them turn into signed contracts, not just enquiries."],
  ] },
  { kind: "p", text: "If a CRM can't answer those three, it's a contact list with a subscription fee." },

  { kind: "h2", text: "Why solar sales are harder to track" },
  { kind: "p", text: "A boiler repair can go from phone call to invoice in a day. Solar is different in three ways that matter for tracking." },
  { kind: "h3", text: "Homeowners are told to shop around" },
  { kind: "p", text: [
    "The US Department of Energy's ",
    { text: "step-by-step guide for consumers going solar", href: "https://www.energy.gov/cmei/systems/articles/walk-me-through-it-step-step-guide-consumers-going-solar" },
    " advises homeowners to \"comparison-shop by asking multiple installers to come assess your roof.\" So you should expect to be one of several quotes. The installer who answers questions quickly and follows up clearly has an advantage that has nothing to do with price.",
  ] },
  { kind: "h3", text: "The job doesn't end when the contract is signed" },
  { kind: "p", text: "The same guide notes that installation generally takes only a few days, but permits and inspections can take weeks to months. During that time the homeowner has paid or committed, and hears nothing unless you tell them. Silence after signing is where cancellations and angry phone calls come from." },
  { kind: "h3", text: "More people touch each job" },
  { kind: "p", text: "The person who took the enquiry, the surveyor, the designer, the installation crew and whoever deals with the utility may all be different. Each handover is a chance for a job to sit in someone's inbox. A shared record, with the stage and the next step on it, is what stops that." },

  { kind: "h2", text: "The pipeline stages that matter" },
  { kind: "p", text: "A pipeline is the list of stages a job moves through, shown as columns or a list. Keep it close to how the work really happens. Too few stages and you can't see where things stall. Too many and nobody updates them." },
  { kind: "h3", text: "Before the sale" },
  { kind: "list", ordered: true, items: [
    [{ text: "New enquiry:", bold: true }, " the form, call or message has arrived. The clock is running."],
    [{ text: "Survey booked:", bold: true }, " a date is agreed for the site visit or remote assessment."],
    [{ text: "Quote sent:", bold: true }, " the design and price are with the homeowner. This is where most jobs go quiet."],
    [{ text: "Signed:", bold: true }, " contract and deposit, or finance approved."],
  ] },
  { kind: "h3", text: "After the sale" },
  { kind: "list", ordered: true, items: [
    [{ text: "Permit and approvals:", bold: true }, " applications submitted, waiting on the local authority and the utility."],
    [{ text: "Install booked:", bold: true }, " crew and date confirmed with the homeowner."],
    [{ text: "Switched on:", bold: true }, " inspected, approved and producing. This is the trigger for the review request and the handover pack."],
  ] },
  { kind: "p", text: "Add a \"Lost\" outcome with a short reason (price, timing, went elsewhere, no reply). After a few months, those reasons tell you more about your quotes than any report." },
  { kind: "h3", text: "Record the source on day one" },
  { kind: "p", text: "Every new enquiry should carry where it came from: website form, phone, referral, a particular ad or directory. Set it automatically where you can (a form can pass it in) and make it a required field where you can't. It's the only way to know later which spending produced signed jobs." },

  { kind: "h2", text: "What it should do without you" },
  { kind: "p", text: "A CRM that only stores information depends on someone opening it. The useful part is what happens automatically when a job enters or leaves a stage. Illustration: if you have 25 open jobs spread over seven stages, that's 25 next steps to remember every day, on top of the work itself. The reminders are where things slip." },
  { kind: "list", items: [
    [{ text: "New enquiry:", bold: true }, " an instant reply by text and email that confirms you've received it and offers survey times. The same idea covers calls you can't answer on a roof, as explained in ", { text: "how missed call text back works for installers", href: "/missed-call-text-back/" }, "."],
    [{ text: "Survey booked:", bold: true }, " a confirmation and a reminder the day before, so you don't drive to an empty house."],
    [{ text: "Quote sent:", bold: true }, " a short follow-up sequence that stops as soon as the homeowner replies. The schedule and wording are in ", { text: "our guide to quote follow up", href: "/quote-follow-up/" }, "."],
    [{ text: "Permit and approvals:", bold: true }, " a short status update to the homeowner every week or two, even when the update is \"still waiting on the utility\"."],
    [{ text: "Switched on:", bold: true }, " a thank you and a review request a day or two later. See ", { text: "how to get more Google reviews as an installer", href: "/how-to-get-more-google-reviews/" }, " for what to say and what Google bans."],
  ] },
  { kind: "p", text: [
    "Most CRMs can do this with a trigger on the stage change. In HighLevel, for example, the \"Pipeline Stage Changed\" workflow trigger runs when an opportunity moves from one stage to another, and can be filtered by pipeline, stage, assigned user or lead value, according to ",
    { text: "HighLevel's help article on that trigger", href: "https://help.gohighlevel.com/support/solutions/articles/155000002493-workflow-trigger-pipeline-stage-changed" },
    " (as of September 2026). Other tools call it something different, but the principle is the same: move the job, and the right message goes out.",
  ] },
  { kind: "h3", text: "What still needs a person" },
  { kind: "p", text: "Automation sends messages on time. It doesn't answer \"will the panels be visible from the street?\" or notice that a homeowner sounds worried. Someone has to read replies the same day and move jobs to the right stage. If the stages aren't kept up to date, every automated message will be wrong." },

  { kind: "h2", text: "Solar-specific tools or a general CRM" },
  { kind: "p", text: "There are two broad routes, and neither is right for everyone." },
  { kind: "h3", text: "Tools built for solar" },
  { kind: "p", text: [
    "Some solar design and proposal tools include a CRM. OpenSolar, for example, says its project management CRM lets you manage customers and solar projects \"from pre-sale through installation\", with projects in table or Kanban view and site visits and installs scheduled in the same place, according to ",
    { text: "its CRM page", href: "https://www.opensolar.com/project-management-crm/" },
    " (as of September 2026). The advantage is that the design, the proposal and the customer record live together. The limit is usually on the messaging and automation side, so check that part carefully.",
  ] },
  { kind: "h3", text: "General CRMs set up for solar" },
  { kind: "p", text: "A general CRM with good automation can be shaped to the stages above and connected to your website forms, phone number and calendar. The advantage is flexibility and stronger messaging. The limit is that someone has to set it up properly, and the design work still happens in a separate tool." },
  { kind: "h3", text: "Questions to ask before choosing" },
  { kind: "list", items: [
    "Can a website form, a phone call and a text all create the same kind of record automatically?",
    "Can a stage change send a text and an email without anyone pressing a button?",
    "Can I see which lead source produced signed jobs, not just enquiries?",
    "Does it work properly on a phone, for someone standing on a roof?",
    "If I leave, can I export my contacts and history?",
  ] },
  { kind: "aside", text: "This is general guidance, not a recommendation for every business. If you install a handful of systems a month and one person handles every job, a well-kept spreadsheet and calendar reminders may be enough for now. Check what the design or quoting software you already pay for can do before adding another tool." },

  { kind: "h2", text: "Setting it up without making a mess" },
  { kind: "p", text: "Most CRM projects fail on setup, not on the software. A few habits make the difference:" },
  { kind: "list", items: [
    [{ text: "Start with the stages, not the features.", bold: true }, " Write your pipeline on paper first and agree it with everyone who touches a job."],
    [{ text: "Import open jobs only.", bold: true }, " Bring in live enquiries, open quotes and jobs in progress. Old contacts can come later, or not at all."],
    [{ text: "Give every stage an owner.", bold: true }, " Somebody is responsible for moving jobs out of each column."],
    [{ text: "Turn on one automation at a time.", bold: true }, " Start with the instant reply to new enquiries, check it for a week, then add the next one."],
    [{ text: "Review the board weekly.", bold: true }, " Ten minutes looking for jobs that haven't moved catches most problems before the homeowner notices."],
  ] },
  { kind: "p", text: [
    "If your enquiries currently arrive in three different places, start there: ",
    { text: "where enquiries get lost between the form and the sale", href: "/streamline-lead-capture-and-sales-with-a-smarter-crm/" },
    " covers that step.",
  ] },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "Do I need a CRM built specifically for solar?" },
  { kind: "p", text: "Not necessarily. What matters is that it matches your stages, captures every enquiry automatically and can send messages when a job moves. Some solar tools do that well; some general CRMs do it better. Test both against the questions above." },
  { kind: "h3", text: "How many pipeline stages should a solar installer have?" },
  { kind: "p", text: "Usually six to eight, plus a Lost outcome. Fewer hides where jobs stall; more tends to mean stages nobody updates." },
  { kind: "h3", text: "Can a CRM tell me which marketing works?" },
  { kind: "p", text: "Only if every enquiry has its source recorded from the start and jobs are moved to Signed or Lost honestly. The report is only as accurate as those two habits." },
  { kind: "h3", text: "What should I automate first?" },
  { kind: "p", text: "The reply to new enquiries. It's the step where speed matters most and the one that is hardest to do by hand in the evening or from a roof." },
  { kind: "p", text: [
    "If you'd like your pipeline set up with these stages and the messages running on each one, you can ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const solarCrm: Post = {
  slug: "solar-crm",
  title: "Solar CRM: What a Solar Installer Actually Needs",
  description: "What a solar CRM should track from enquiry to switch-on, the pipeline stages to set up, what to automate first, and how to choose one for your business.",
  lede: "A solar sale takes weeks and several quotes. The CRM's job is to keep each one moving.",
  category: "CRM",
  published: "2026-09-25",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/solar-crm.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
