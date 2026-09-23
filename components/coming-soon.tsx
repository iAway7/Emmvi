import { CalendlyButton } from "@/components/calendly-button";
import { Wordmark } from "@/components/wordmark";
import { CONTACT_EMAIL, SITE_TAGLINE, pageMetadata } from "@/lib/site";

/**
 * Pagina de espera mientras emmvi.com (WordPress) esta caido con 503.
 *
 * Composicion centrada sobre oscuro, del tipo que pidio el usuario. El violeta
 * de marca ocupa el sitio que en esa referencia ocupaba el dorado.
 *
 * Contraste sobre el degradado radial (#1a1a1a centro -> #000 bordes):
 *   - violeta de marca #423af4: 2.61:1 en el centro. **No vale ni para el
 *     titular**, que como texto grande pide 3:1. Con el violeta anterior
 *     (#635dff, 3.76:1) si pasaba, y por eso el titular lo llevaba.
 *   - --color-violet-light #847ff8: 5.28:1 en el centro, 6.37:1 en el borde.
 *     Lo llevan ahora el titular, el eyebrow y el divisor, asi que sobre
 *     oscuro hay un solo violeta en vez de dos.
 *   - blanco al 70%: 7.93:1 o mejor.
 *
 * Mantiene reserva de llamada y correo: la promesa de emmvi es que toda
 * consulta se contesta en menos de un minuto, asi que una pagina que corta el
 * contacto contradice el posicionamiento justo cuando alguien llega desde el
 * outreach.
 */
export const COMING_SOON_TITLE =
  "emmvi: websites and automation for installers";

/**
 * La linea de marca mas la invitacion a reservar. Sale de `SITE_TAGLINE` en
 * vez de estar escrita otra vez aqui: es la misma frase que preside la
 * tarjeta de Open Graph, y dos copias se separan a la primera correccion.
 */
export const COMING_SOON_DESCRIPTION = `${SITE_TAGLINE} Book a 30-minute call.`;

/**
 * La usa la raiz cuando COMING_SOON=1. Lleva canonica y Open Graph como
 * cualquier otra pagina: el robots.txt cerrado frena al buscador, pero no a
 * WhatsApp ni a LinkedIn, que son justo por donde llega el enlace del outreach
 * mientras dura la espera.
 */
export const comingSoonMetadata = pageMetadata({
  path: "/",
  title: COMING_SOON_TITLE,
  absoluteTitle: true,
  description: COMING_SOON_DESCRIPTION,
});

export function ComingSoon() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-[radial-gradient(ellipse_at_50%_38%,#1a1a1a_0%,#000_70%)] px-6 py-20 text-center">
      <Wordmark className="h-9 w-auto text-white" />

      <p className="mt-10 text-small font-medium tracking-[0.25em] text-violet-light uppercase">
        Websites and automation
      </p>

      <h1 className="mt-4 text-[clamp(2rem,1.2rem+3.5vw,3.5rem)] font-extrabold tracking-[0.02em] text-balance text-violet-light uppercase">
        Being rebuilt
      </h1>

      {/* Regla — rombo — regla, como en la referencia. */}
      <div aria-hidden="true" className="mt-9 flex items-center gap-4">
        <span className="h-px w-16 bg-violet-light/40 sm:w-24" />
        <span className="size-1.5 rotate-45 bg-violet-light" />
        <span className="h-px w-16 bg-violet-light/40 sm:w-24" />
      </div>

      <p className="mt-9 max-w-[46ch] text-lede text-pretty text-white/70">
        The new site is on the way. The part that answers your enquiries is
        already running, so you can still book a call today.
      </p>

      <div className="mt-10 flex flex-col items-center gap-5">
        <CalendlyButton variant="light">
          Schedule a 30-minute call
        </CalendlyButton>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex min-h-[44px] items-center text-ui text-white/70 underline underline-offset-[5px] transition-colors hover:text-white focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet-light"
        >
          {CONTACT_EMAIL}
        </a>
      </div>

      <p className="mt-16 max-w-[52ch] text-small text-white/50">
        Websites and automation for installers, home-service companies and small
        teams in the UK, the US and Spain.
      </p>
    </main>
  );
}
