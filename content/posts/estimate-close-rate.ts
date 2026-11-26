import type { Post } from "@/lib/posts";

/**
 * Articulo nuevo del agente de contenido (noviembre de 2026). Palabra clave:
 * "estimate close rate". Hermano de unsold-estimates: no que hacer con los
 * presupuestos parados, sino como medir cuantos se firman. Las reglas de
 * ServiceTitan (que trabajos no cuentan como oportunidad, el "Sold
 * Threshold") se comprobaron el dia de publicacion en su centro de ayuda.
 * No se da ninguna cifra de "buen" ratio: no hay una fuente que la sostenga.
 */
const body: Post["body"] = [
  { kind: "p", text: "Ask three installers for their close rate and you will get three numbers that can't be compared. One divides signed jobs by every quote request that came in. One divides by estimates sent. One counts dollars instead of jobs. All three are calling it the same thing, and all three are using it to decide whether the sales side of the business is working." },
  { kind: "p", text: "The number is useful, but only once you decide what goes on top, what goes underneath, and what you are going to do when it moves. Here is how to measure it so you can trust it month to month, split it to see where jobs are lost, and track it without an evening of admin." },

  { kind: "h2", text: "What estimate close rate measures" },
  { kind: "p", text: "Estimate close rate is the share of estimates you sent that turned into signed jobs over a given period. If you sent 24 estimates in October and 8 of them were signed, your close rate for October is 8 out of 24, or one in three." },
  { kind: "p", text: "That sounds simple, and the arithmetic is. The trouble is in the two words people skip over: which estimates count, and when a job counts as signed." },
  { kind: "h3", text: "It is not the same as lead conversion" },
  { kind: "p", text: [
    "Lead conversion starts earlier. It divides signed jobs by every quote request, including the ones you never visited, the ones outside your area and the ones who stopped answering after the first call. Older trade writing often uses this wider version: ",
    { text: "a 1999 column in the Journal of Light Construction", href: "https://www.jlconline.com/business/strictly-business-rethinking-close-rate-ratios_o/" },
    " describes close rate as the ratio of leads to sales.",
  ] },
  { kind: "p", text: "Neither is wrong. Lead conversion tells you how much of your marketing spend ends up as work. Estimate close rate tells you how good your estimates and your follow-up are once a customer is seriously considering you. Mixing them is how a business ends up fixing its quotes when the real problem was the leads, or the other way round." },
  { kind: "aside", tone: "tip", text: "Track both numbers, but give them different names in your notes and your CRM. \"Close rate\" for estimates, \"conversion\" for quote requests. Most of the confusion goes away once the label stops being shared." },

  { kind: "h2", text: "Pick one definition and keep it" },
  { kind: "p", text: "The definition matters less than keeping it the same every month. A rate that changes because you changed the rules tells you nothing about the business. Decide these four things once, write them down, and stick to them." },
  { kind: "list", ordered: true, items: [
    [{ text: "What counts as an estimate.", bold: true }, " A written price the customer received. A ballpark on the phone (\"usually somewhere between 12 and 18 thousand\") is not an estimate for this purpose. Neither is a revised version of a quote you already counted."],
    [{ text: "What counts as signed.", bold: true }, " Pick one moment: signed contract, deposit paid, or job booked on the calendar. Deposit paid is the hardest to argue with."],
    [{ text: "Which work is left out.", bold: true }, " Warranty visits, callbacks and free inspections are not sales opportunities. ", { text: "ServiceTitan's help center", href: "https://help.servicetitan.com/problem-solution/technicians-close-or-conversion-rate-does-not-look-correct" }, ", for example, says no-charge, recall and warranty jobs do not count as opportunities in its close and conversion rates."],
    [{ text: "Which period an estimate belongs to.", bold: true }, " Count each estimate in the month it was sent, and credit the signature back to that month even if it comes later. Otherwise a slow December looks like a great January."],
  ] },
  { kind: "p", text: [
    "The last point catches people out. A solar estimate sent in late October might be signed in the second week of November. If you count it as a November win, October looks weak and November looks better than it was. Crediting it back to October means the rate for recent months will keep rising for a few weeks as late signatures land. That's expected: read a month's rate as final once its estimates have had time to close, and keep the ones still waiting in a separate column, the way the ",
    { text: "unsold estimates", href: "/unsold-estimates/" },
    " list works.",
  ] },
  { kind: "h3", text: "Software defines it too" },
  { kind: "p", text: [
    "If your estimating or field service tool reports a close rate, check how it calculates it before comparing it with anything else. ",
    { text: "ServiceTitan's help article on close rates that look wrong", href: "https://help.servicetitan.com/problem-solution/technicians-close-or-conversion-rate-does-not-look-correct" },
    " says the cause is usually a misunderstanding of how the rate is calculated, and explains that an estimate only counts as sold above a minimum amount the business sets for each job type. Set that minimum too low and a small call-out fee can count as a sale.",
  ] },

  { kind: "h2", text: "Count jobs and dollars separately" },
  { kind: "p", text: "A close rate by count and a close rate by value can tell very different stories, and you need both." },
  { kind: "p", text: "Illustration: in one month an installer sends 24 estimates. They sign 8, which is a third by count. But the 8 signed jobs are mostly small: EV charger installs and panel upgrades. The four large solar and battery estimates in the same month all went quiet. Measured by value, the month looks much weaker than one in three." },
  { kind: "p", text: "Neither number is the real one. By count shows whether customers trust you enough to sign. By value shows whether the work that matters most to your revenue is being won. When the two drift apart, the gap usually points at one type of job, which is where the next section comes in." },

  { kind: "h2", text: "Split it by source and job type" },
  { kind: "p", text: "One close rate for the whole business is an average of very different things. A referral from a past customer and a lead from a comparison site are not the same customer, and a water heater replacement is not the same sale as a full roof. Splitting the rate is where it starts being useful." },
  { kind: "list", items: [
    [{ text: "By source.", bold: true }, " Referrals, your website, Google Business Profile calls, paid ads, lead marketplaces. If one source closes far lower than the rest, the question is whether it's worth what you pay for it, not whether your estimates are bad."],
    [{ text: "By job type.", bold: true }, " Small, urgent jobs tend to close differently from large, considered ones. Comparing your solar close rate with your service call close rate tells you nothing; comparing this quarter's solar rate with last quarter's does."],
    [{ text: "By who quoted.", bold: true }, " If more than one person writes estimates, a split by estimator shows coaching opportunities. Keep it private and look at months, not single weeks, because a few jobs either way swing a small number a lot."],
  ] },
  { kind: "p", text: [
    "The split by source only works if every quote request carries its source from the first contact. That's a setup job more than a reporting one, and ",
    { text: "lead source tracking", href: "/lead-source-tracking/" },
    " walks through how to capture it on calls, forms and texts.",
  ] },
  { kind: "h3", text: "Watch the sample size" },
  { kind: "p", text: "A business that sends 20 estimates a month will see its rate jump around for reasons that mean nothing. Two extra signatures move it by ten points. Look at rolling three-month numbers before you change how you quote, and don't split so finely that each slice holds three estimates." },

  { kind: "h2", text: "Where estimates are lost" },
  { kind: "p", text: "A close rate tells you that something changed. It doesn't tell you what. For that you need to look at the steps between the first call and the signature, and most of them have nothing to do with the price on the estimate." },
  { kind: "h3", text: "Time to send the estimate" },
  { kind: "p", text: "Track the days between the site visit and the estimate arriving in the customer's inbox. A roofer who measures on Tuesday and sends the estimate the following Monday has given the customer a week to collect other quotes. If the close rate drops in the busy season, this is often the first thing that slipped." },
  { kind: "h3", text: "Follow-up that never happened" },
  { kind: "p", text: [
    "Check what share of open estimates got every planned follow-up step. An estimate that was sent and never chased hasn't really been tested. If your pipeline shows a stack of cards sitting in \"Quote sent\" for two or three weeks with no activity, the close rate is measuring your follow-up, not your pricing. The ",
    { text: "quote follow-up", href: "/quote-follow-up/" },
    " guide covers a sequence that runs without anyone remembering it.",
  ] },
  { kind: "h3", text: "Lost reasons nobody wrote down" },
  { kind: "p", text: "When a job is lost, record one reason from a short fixed list: price, timing, went with another company, decided not to do it, no answer. Free text fields fill up with \"customer ghosted\" and \"idk\". A short list gives you a count, and the count is what tells you whether to look at prices, speed or follow-up." },
  { kind: "aside", tone: "important", text: "This is general guidance, not a recommendation for every business. Which definition, which splits and which tool make sense depend on how many estimates you send, how long your jobs take to decide, and what you already use. A business sending ten estimates a month may get more from a spreadsheet than from a new system." },

  { kind: "h2", text: "Track it without extra admin" },
  { kind: "p", text: "The close rate breaks down when it depends on someone updating a spreadsheet on Friday night. The way to keep it honest is to make the number fall out of work you already do." },
  { kind: "list", items: [
    [{ text: "One pipeline for every estimate.", bold: true }, " Each quote request becomes a card. It moves to \"Estimate sent\" when the estimate goes out and to \"Won\" or \"Lost\" when it's decided. The close rate is then a count of cards, not a separate report."],
    [{ text: "Dates captured automatically.", bold: true }, " When the card moves, the system records the date. That gives you time to send and time to sign without anyone typing them in."],
    [{ text: "A required lost reason.", bold: true }, " A card can't move to \"Lost\" without picking one from the list. It takes two seconds and it's the most useful data you'll collect."],
    [{ text: "A monthly look, not a daily one.", bold: true }, " Put 20 minutes on the calendar at the start of each month to read last quarter's rate by source and by job type, and the lost reasons behind it."],
  ] },
  { kind: "p", text: [
    "Most CRMs built for trades can do this, and so can a well set up GoHighLevel account. The stages themselves are covered in ",
    { text: "contractor sales pipeline", href: "/contractor-sales-pipeline/" },
    ", and if you'd rather have the pipeline, the automatic follow-up and the reporting built for you, that's what ",
    { text: "GoHighLevel automation", href: "/services/gohighlevel-automation/" },
    " covers.",
  ] },

  { kind: "h2", text: "FAQ" },
  { kind: "h3", text: "What is a good estimate close rate?" },
  { kind: "p", text: "There isn't a number that holds across trades, because businesses count different things and sell very different jobs. The more useful comparison is your own rate against your own previous months, measured the same way, split by source and job type." },
  { kind: "h3", text: "Does a higher close rate always mean things are better?" },
  { kind: "p", text: "No. A rate can rise because you stopped quoting harder jobs, or because you cut prices. Read it next to the value of signed work and the number of estimates sent, so you can see what moved." },
  { kind: "h3", text: "How long until I can trust the number?" },
  { kind: "p", text: [
    "Usually after about three months of consistent tracking, once enough estimates have been decided to smooth out the noise. If you'd like help setting up the pipeline so it counts itself, ",
    { text: "talk to emmvi", href: "/contact-us/" },
    ".",
  ] },
];

export const estimateCloseRate: Post = {
  slug: "estimate-close-rate",
  title: "Estimate Close Rate: How Installers Should Measure It",
  description: "How to measure estimate close rate: one definition, count jobs and dollars separately, split by source and job type, and see where estimates are lost.",
  lede: "One definition, a few honest splits, and what the number can and can't tell you.",
  category: "CRM",
  published: "2026-11-26",
  // `alt` vacio como en el resto: la imagen va pegada al titular.
  image: {
    src: "/blog/estimate-close-rate.png",
    width: 1600,
    height: 900,
    alt: "",
  },
  body,
};
