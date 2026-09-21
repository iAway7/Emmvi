/**
 * La columna que acompaña al formulario en el panel "Talk to our Sales team".
 *
 * Ese hueco lo ocupaba en el Figma una cita firmada con el logo de un cliente
 * que no es atribuible, y durante un tiempo una caja de línea discontinua que
 * decía "Placeholder. The Figma signs this quote with a client logo we cannot
 * verify" —razonamiento interno, publicado—. No es un hueco decorativo: es lo
 * último que se lee antes de decidir si se rellena el formulario.
 *
 * **Ninguna de las tres frases es una promesa nueva.** Las tres están ya
 * firmadas en /privacy-policy, en la lista "What we do not do":
 *
 *  - "when you send an enquiry, a person reads it and a person answers it"
 *  - "No newsletter sign-up hidden inside the contact form. If we ever add one,
 *    it will be a separate box you have to tick."
 *
 * y la tercera es la misma que la home ("our honest read, whether you hire us
 * or not"). Si alguna deja de ser cierta, hay que cambiarla en los dos sitios.
 *
 * **Sin plazo de respuesta**, por decisión del usuario el 2026-09-21. Un "same
 * working day" ayuda cuando se cumple y se vuelve en contra el primer día que
 * no, y aquí no hace falta: lo que tranquiliza es quién contesta, no cuándo.
 *
 * No lleva enlace a la política porque el propio formulario ya tiene uno
 * justo al lado, debajo del botón de envío.
 */
const points = [
  {
    title: "A person reads it, and a person answers it.",
    /**
     * Cuidado con esta frase: la primera version decia "nothing is filed away
     * for later", que **contradice la propia politica** —las consultas se
     * guardan doce meses, `ENQUIRY_RETENTION_MONTHS`—. Lo que la politica si
     * firma es que no hay decision automatizada, y eso es lo que dice ahora.
     */
    body: "Nothing scores you or sorts you into a bucket first. It goes straight to the people who would do the work.",
  },
  {
    title: "You are not signed up to anything.",
    body: "There is no newsletter hidden inside this form. If we ever add one, it will be a box you tick.",
  },
  {
    title: "If we are not the right fit, we say so.",
    body: "You get our honest read on what you are trying to fix, whether you hire us or not.",
  },
];

export function AfterYouSend() {
  return (
    <div className="max-w-[34em]">
      <h3 className="text-h3 text-balance text-ink">
        What happens when you send this
      </h3>
      <ul className="mt-7 flex list-none flex-col gap-6">
        {points.map((point) => (
          <li key={point.title}>
            <p className="text-[1rem] leading-[26px] font-bold text-pretty text-ink">
              {point.title}
            </p>
            <p className="mt-1.5 text-[1rem] leading-[26px] text-pretty text-ink-soft">
              {point.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
