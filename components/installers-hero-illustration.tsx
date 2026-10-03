/**
 * Escena del hero de /installers: lo que ve el cliente del instalador. El
 * movil con la solicitud de las 21:47 y la respuesta de Dan, que es el mismo
 * texto que tenia el panel "What your customer sees" al que sustituye; al
 * lado, la solicitud tal como sale de la web y "In your words" (lo escribis
 * con nosotros y lo aprobais antes de que salga).
 *
 * "Northline Solar & EV" es un negocio de ejemplo, el mismo de las demas
 * escenas. En movil se recorta al telefono. Ver components/scene.tsx.
 */
import { Scene, translateScene, type SceneData } from "@/components/scene";
import type { Locale } from "@/lib/i18n";

const scene: SceneData = {
  viewBox: "0 0 1200 960",
  mobileViewBox: "118 30 430 890",
  markup: "<path stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\" d=\"M520 300 H590\"/><path stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\" d=\"M520 700 H600\"/><rect fill=\"#e6e6ea\" x=\"148\" y=\"58\" width=\"400\" height=\"860\" rx=\"48\"/><rect stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#ffffff\" x=\"130\" y=\"40\" width=\"400\" height=\"860\" rx=\"48\"/><rect x=\"290\" y=\"60\" width=\"80\" height=\"12\" rx=\"6\" fill=\"#171717\"/><text x=\"160\" y=\"124\" font-size=\"19\" font-weight=\"600\" fill=\"#5c5c66\" text-anchor=\"start\" opacity=\"1\">Messages</text><text x=\"500\" y=\"124\" font-size=\"19\" font-weight=\"500\" fill=\"#5c5c66\" text-anchor=\"end\" opacity=\"1\">Tue 21:47</text><circle stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#dcdafe\" cx=\"330\" cy=\"190\" r=\"34\"/><text x=\"330\" y=\"200\" font-size=\"28\" font-weight=\"800\" fill=\"#171717\" text-anchor=\"middle\" opacity=\"1\">N</text><text x=\"330\" y=\"256\" font-size=\"20\" font-weight=\"700\" fill=\"#171717\" text-anchor=\"middle\" opacity=\"1\">Northline Solar &amp; EV</text><rect stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#f1f1f3\" x=\"160\" y=\"290\" width=\"340\" height=\"110\" rx=\"18\"/><text x=\"178\" y=\"324\" font-size=\"20\" font-weight=\"400\" fill=\"#171717\" text-anchor=\"start\" opacity=\"1\">Hi, after a price for an</text><text x=\"178\" y=\"352\" font-size=\"20\" font-weight=\"400\" fill=\"#171717\" text-anchor=\"start\" opacity=\"1\">EV charger. Semi-detached,</text><text x=\"178\" y=\"380\" font-size=\"20\" font-weight=\"400\" fill=\"#171717\" text-anchor=\"start\" opacity=\"1\">parking on the drive.</text><text x=\"330\" y=\"446\" font-size=\"17\" font-weight=\"600\" fill=\"#5c5c66\" text-anchor=\"middle\" opacity=\"1\">21:47 \u00b7 reply sent</text><rect stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#423af4\" x=\"170\" y=\"470\" width=\"340\" height=\"194\" rx=\"18\"/><text x=\"188\" y=\"504\" font-size=\"20\" font-weight=\"400\" fill=\"#ffffff\" text-anchor=\"start\" opacity=\"1\">Thanks Mark, it&#x27;s Dan. I&#x27;m</text><text x=\"188\" y=\"532\" font-size=\"20\" font-weight=\"400\" fill=\"#ffffff\" text-anchor=\"start\" opacity=\"1\">on a job till late but I&#x27;ve</text><text x=\"188\" y=\"560\" font-size=\"20\" font-weight=\"400\" fill=\"#ffffff\" text-anchor=\"start\" opacity=\"1\">got your request. Can I ring</text><text x=\"188\" y=\"588\" font-size=\"20\" font-weight=\"400\" fill=\"#ffffff\" text-anchor=\"start\" opacity=\"1\">you tomorrow at 9 to ask a</text><text x=\"188\" y=\"616\" font-size=\"20\" font-weight=\"400\" fill=\"#ffffff\" text-anchor=\"start\" opacity=\"1\">couple of things about the</text><text x=\"188\" y=\"644\" font-size=\"20\" font-weight=\"400\" fill=\"#ffffff\" text-anchor=\"start\" opacity=\"1\">drive?</text><rect stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#ffffff\" x=\"160\" y=\"820\" width=\"340\" height=\"52\" rx=\"26\"/><text x=\"186\" y=\"853\" font-size=\"18\" font-weight=\"400\" fill=\"#5c5c66\" text-anchor=\"start\" opacity=\"1\">Message</text><g transform=\"rotate(3 840.0 320.0)\"><rect fill=\"#e6e6ea\" x=\"618\" y=\"188\" width=\"480\" height=\"300\" rx=\"26\"/><rect stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#f1f1f3\" x=\"600\" y=\"170\" width=\"480\" height=\"300\" rx=\"26\"/></g><g transform=\"rotate(3 840 320)\"><text x=\"632\" y=\"222\" font-size=\"22\" font-weight=\"800\" fill=\"#171717\" text-anchor=\"start\" opacity=\"1\">Quote request</text><text x=\"632\" y=\"252\" font-size=\"17\" font-weight=\"400\" fill=\"#5c5c66\" text-anchor=\"start\" opacity=\"1\">From your website</text><rect stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#ffffff\" x=\"632\" y=\"274\" width=\"410\" height=\"46\" rx=\"10\"/><text x=\"652\" y=\"304\" font-size=\"18\" font-weight=\"400\" fill=\"#171717\" text-anchor=\"start\" opacity=\"1\">EV charger \u00b7 semi-detached</text><rect stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#ffffff\" x=\"632\" y=\"334\" width=\"190\" height=\"46\" rx=\"10\"/><text x=\"652\" y=\"364\" font-size=\"18\" font-weight=\"400\" fill=\"#171717\" text-anchor=\"start\" opacity=\"1\">LS6 2AB</text><rect stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#423af4\" x=\"632\" y=\"400\" width=\"170\" height=\"46\" rx=\"10\"/><text x=\"717\" y=\"430\" font-size=\"17\" font-weight=\"700\" fill=\"#ffffff\" text-anchor=\"middle\" opacity=\"1\">Sent 21:47</text></g><g transform=\"rotate(-3 845.0 705.0)\"><rect fill=\"#e6e6ea\" x=\"628\" y=\"638\" width=\"470\" height=\"170\" rx=\"26\"/><rect stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#ffffff\" x=\"610\" y=\"620\" width=\"470\" height=\"170\" rx=\"26\"/></g><g transform=\"rotate(-3 845 705)\"><text x=\"646\" y=\"676\" font-size=\"24\" font-weight=\"800\" fill=\"#171717\" text-anchor=\"start\" opacity=\"1\">In your words</text><circle stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#c9f7a8\" cx=\"662\" cy=\"722\" r=\"14\"/><path stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\" d=\"M654 722 l6 6 l11 -12\"/><text x=\"688\" y=\"729\" font-size=\"18\" font-weight=\"500\" fill=\"#171717\" text-anchor=\"start\" opacity=\"1\">You write it with us</text><circle stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#c9f7a8\" cx=\"662\" cy=\"762\" r=\"14\"/><path stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\" d=\"M654 762 l6 6 l11 -12\"/><text x=\"688\" y=\"769\" font-size=\"18\" font-weight=\"500\" fill=\"#171717\" text-anchor=\"start\" opacity=\"1\">You approve it before it goes live</text></g><g transform=\"rotate(8 1048.0 108.0)\"><rect fill=\"#e6e6ea\" x=\"1010\" y=\"70\" width=\"96\" height=\"96\" rx=\"21.12\"/><rect stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#c9f7a8\" x=\"1000\" y=\"60\" width=\"96\" height=\"96\" rx=\"21.12\"/><circle stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#ffffff\" cx=\"1048.0\" cy=\"108.0\" r=\"26\"/><path stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"none\" d=\"M1048.0 94.0 V108.0 L1059.0 116.0\"/></g><path stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#c9f7a8\" d=\"M80 496 Q84.32 515.68 104 520 Q84.32 524.32 80 544 Q75.68 524.32 56 520 Q75.68 515.68 80 496 Z\"/><path stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#dcdafe\" d=\"M1150 542 Q1153.24 556.76 1168 560 Q1153.24 563.24 1150 578 Q1146.76 563.24 1132 560 Q1146.76 556.76 1150 542 Z\"/><path stroke=\"#171717\" stroke-width=\"3.5\" stroke-linejoin=\"round\" stroke-linecap=\"round\" fill=\"#c9f7a8\" d=\"M1100 860 Q1103.6 876.4 1120 880 Q1103.6 883.6 1100 900 Q1096.4 883.6 1080 880 Q1096.4 876.4 1100 860 Z\"/>",
};

/**
 * El texto de la escena en español. Igual o mas corto que el ingles, linea a
 * linea, porque el bocadillo no crece (ver `translateScene`). Dan y Mark son
 * los mismos; "Northline Solar & EV" no se traduce.
 */
const spanish: Record<string, string> = {
  Messages: "Mensajes",
  "Tue 21:47": "Mar 21:47",
  "Quote request": "Solicitud",
  "From your website": "Desde tu web",
  "Hi, after a price for an": "Hola, ¿precio de un",
  "EV charger. Semi-detached,": "cargador? Adosado,",
  "parking on the drive.": "plaza en el garaje.",
  "Sent 21:47": "Env. 21:47",
  "21:47 · reply sent": "21:47 · respondido",
  "Thanks Mark, it&#x27;s Dan. I&#x27;m": "Gracias Mark, soy Dan.",
  "on a job till late but I&#x27;ve": "Estoy en una obra, pero",
  "got your request. Can I ring": "tengo tu solicitud. ¿Te",
  "you tomorrow at 9 to ask a": "llamo mañana a las 9 para",
  "couple of things about the": "preguntarte un par de",
  "drive?": "cosas del garaje?",
  Message: "Mensaje",
  "In your words": "Tus palabras",
  "You write it with us": "Lo escribimos juntos",
  "You approve it before it goes live": "Lo apruebas antes de publicarlo",
  "EV charger · semi-detached": "Cargador · adosado",
};

export function InstallersHeroIllustration({
  label,
  locale = "en",
  className,
}: {
  label: string;
  locale?: Locale;
  className?: string;
}) {
  const localized =
    locale === "es" ? { ...scene, markup: translateScene(scene.markup, spanish) } : scene;
  return (
    <Scene id="installers-hero" scene={localized} label={label} className={className} />
  );
}
