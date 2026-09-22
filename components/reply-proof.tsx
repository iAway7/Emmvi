/**
 * La promesa central del sitio es "toda consulta contestada en menos de un
 * minuto". Este panel no la afirma: la deja ocurrir. La respuesta llega sola
 * unos segundos despues de cargar.
 *
 * Contraste: el gradiente se queda entre #171717 y #000 a proposito. El
 * gradiente --night completo termina en #7d7d7d, donde el blanco al 62% de las
 * etiquetas cae a 2.62:1. Acotado aqui, ese mismo 62% rinde 7.45:1 o mejor.
 */
export function ReplyProof() {
  return (
    <figure className="reply-proof m-0 w-full max-w-[420px] rounded-lg bg-[linear-gradient(180deg,#171717_0%,#000_100%)] p-6 sm:p-7">
      <figcaption className="sr-only">
        A quote request arriving at 9:47pm and the automatic reply that goes out
        thirty-four seconds later.
      </figcaption>

      <div className="flex items-center justify-between px-2 pb-4 text-small text-white/62">
        <span>Messages</span>
        <span>21:47</span>
      </div>

      <div className="space-y-3">
        <div className="max-w-[88%] rounded-[18px] rounded-bl-[6px] bg-white/12 px-4 py-3.5">
          <span className="mb-1 block text-small text-white/62">
            Quote request · your website
          </span>
          <p className="text-ui tracking-[-0.2px] text-white">
            Hi, looking for a price on an EV charger for a semi-detached,
            driveway parking.
          </p>
        </div>

        <p className="reply-proof__tick my-3.5 text-center text-small text-white/62">
          21:47 · 34 seconds later
        </p>

        <div className="reply-proof__reply ml-auto max-w-[88%] rounded-[18px] rounded-br-[6px] bg-violet px-4 py-3.5">
          <span className="mb-1 block text-small text-white">You</span>
          <p className="text-ui tracking-[-0.2px] text-white">
            Thanks Mark, got your request. I&rsquo;ve booked you in for a survey
            call tomorrow at 9am. Reply CHANGE if that doesn&rsquo;t suit.
          </p>
        </div>
      </div>
    </figure>
  );
}
