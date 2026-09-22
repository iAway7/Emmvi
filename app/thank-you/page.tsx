import type { Metadata } from "next";
import Image from "next/image";

import { CalendlyButton } from "@/components/calendly-button";
import { CtaLink } from "@/components/cta-link";
import { CONTACT_EMAIL } from "@/lib/site";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

/**
 * Pagina de gracias, recuperada del WordPress anterior: es una de las 31 URLs
 * indexadas y hasta ahora devolvia 404.
 *
 * La composicion es la del original —ilustracion arriba, titular, dos
 * parrafos, todo centrado— y la ilustracion es la misma, recoloreada del
 * #2e343b que traia al tinte del sitio. Eran cuatro rellenos, un solo color.
 *
 * **El texto no se restaura tal cual**, y es a proposito. El original decia
 * "typically within the next 24-48 hours", y /contact ya tomo la decision
 * contraria por escrito: lo que se puede defender es que lo lee una persona,
 * no en cuanto contesta. Restaurar el plazo aqui contradiria esa pagina y la
 * regla de PRODUCT.md de no prometer lo que no se puede cumplir. Tambien cae
 * "our team is already hard at work reviewing your inquiry", que en el momento
 * de enviar el formulario no es cierto.
 *
 * Lleva `noindex` porque una pagina de gracias no le sirve a nadie que llegue
 * desde el buscador: no responde a ninguna busqueda y es contenido minimo. La
 * URL existe para quien la tenga guardada y para poder enviar aqui el
 * formulario el dia que interese medir la conversion con una URL propia.
 */
export const metadata: Metadata = {
  title: "Thank you",
  description:
    "Your message is in. A person reads every one of these, and you will hear back.",
  robots: { index: false, follow: true },
};

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";

export default function ThankYou() {
  return (
    <>
      <SiteHeader />

      <main className={`${wrap} py-16 lg:py-24`}>
        <div className="mx-auto flex max-w-[52ch] flex-col items-center text-center">
          {/* alt vacio a proposito: el h1 de debajo ya dice en palabras lo que
              el dibujo cuenta, y repetirlo solo alarga lo que oye un lector de
              pantalla. Mismo criterio que la ilustracion del 404. */}
          <Image
            src="/illustrations/thank-you.svg"
            alt=""
            width={436}
            height={515}
            priority
            className="h-auto w-full max-w-[260px]"
          />

          <h1 className="mt-10 text-display text-balance text-ink">
            Thank you
          </h1>

          <p className="mt-6 text-lede text-pretty text-ink-soft">
            Your message is in. A person reads every one of these, not a queue
            and not a bot.
          </p>

          <p className="mt-5 max-w-[46ch] text-body text-pretty text-ink-soft">
            We read what you wrote and look at your site before answering, so
            the reply is worth reading. If it makes sense, we will suggest a
            thirty-minute call to go through it properly.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {/* La via rapida de verdad: quien acaba de escribir es quien mas
                cerca esta de reservar. */}
            <CalendlyButton>Book the call now</CalendlyButton>
            <CtaLink href="/" variant="ghost">
              Back to the homepage
            </CtaLink>
          </div>

          <p className="mt-9 text-small text-ink-soft">
            Nothing else to do. If you would rather write again, the address is{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-ink underline underline-offset-[3px] transition-colors hover:text-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
