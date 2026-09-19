"use client";

import posthog from "posthog-js";
import { useActionState } from "react";

import { submitContact, type ContactState } from "@/app/actions/contact";
import { FIELD_LIMITS } from "@/lib/contact";

/**
 * "Talk to our Sales team" del Figma: nombre partido en dos, tres preguntas de
 * calificación y el mensaje. Va contra la misma Server Action que la home, así
 * que envía también sin JS, con el mismo rate limit y el mismo honeypot.
 *
 * OJO con las escalas de los desplegables: el Figma solo enseña la opción
 * seleccionada ("1-5", "Yes", "Less than $1.000"). Los tramos de páginas y de
 * presupuesto de aquí abajo son una escalera inventada para completar el campo,
 * y el precio es una decisión de negocio sin cerrar. Cambiarlos aquí.
 */

const PAGE_RANGES = ["1-5", "6-10", "11-20", "More than 20"];
const HOSTING_ANSWERS = ["Yes", "No", "Not sure yet"];
const BUDGET_RANGES = [
  "Less than $1.000",
  "$1.000 - $3.000",
  "$3.000 - $5.000",
  "$5.000 - $10.000",
  "More than $10.000",
];

const initialState: ContactState = { status: "idle", message: "" };

/**
 * `mt-auto`: en una fila de dos columnas, "How many pages do you need?" ocupa
 * dos lineas y "Company Name (Optional)" una, asi que el select arrancaba mas
 * abajo que el input de al lado. Las celdas del grid ya se estiran a la altura
 * de la mas alta; empujando el control al fondo, los dos quedan alineados sea
 * cual sea el largo de la etiqueta.
 */
const fieldClass =
  "mt-auto h-12 w-full rounded-sm border border-line bg-paper px-4 text-[1rem] leading-6 text-ink " +
  "focus-visible:border-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet";

const labelClass = "mb-2 block text-small leading-5 text-ink-soft";

/**
 * React re-aplica `defaultValue` de un <input> no controlado cuando la Server
 * Action devuelve, pero en un <select> no: el atributo `selected` se fijó en el
 * montaje y el reset del formulario lo devuelve a la primera opción. Se
 * comprobó enviando con presupuesto "$3.000 - $5.000" y volviendo con "Less
 * than $1.000". Cambiar la key remonta el select con el valor correcto.
 */
function selectKey(name: string, value: string | undefined) {
  return `${name}:${value ?? ""}`;
}

function Required() {
  return (
    <span aria-hidden="true" className="text-violet">
      {" "}
      *
    </span>
  );
}

export function SalesForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState,
  );

  async function handleSubmit(formData: FormData) {
    if (
      process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST
    ) {
      posthog.capture("contact_form_submitted", { form_type: "sales" });
    }
    return formAction(formData);
  }

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-md border border-line bg-paper p-8">
        <p className="text-h3 text-balance text-ink">Message sent</p>
        <p className="mt-3 text-body text-pretty text-ink-soft">
          {state.message}
        </p>
      </div>
    );
  }

  const v = state.values;
  const e = state.extras;

  return (
    <form action={handleSubmit} className="rounded-md border border-line bg-paper p-6 min-[900px]:p-8">
      {/* Honeypot. Fuera de pantalla y fuera del orden de tabulacion. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="s-website">Leave this empty</label>
        <input id="s-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" ? (
        <p
          role="alert"
          className="mb-5 rounded-sm border border-line bg-paper-alt p-4 text-[1rem] leading-6 text-ink"
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid items-stretch gap-5 sm:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="s-name" className={labelClass}>
            Full Name
            <Required />
          </label>
          <input
            id="s-name"
            name="name"
            type="text"
            required
            maxLength={50}
            autoComplete="given-name"
            defaultValue={v?.name}
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="s-last" className={labelClass}>
            Last Name
            <Required />
          </label>
          <input
            id="s-last"
            name="lastName"
            type="text"
            required
            maxLength={50}
            autoComplete="family-name"
            defaultValue={e?.lastName}
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col sm:col-span-2">
          <label htmlFor="s-email" className={labelClass}>
            Email Address
            <Required />
          </label>
          <input
            id="s-email"
            name="email"
            type="email"
            required
            maxLength={FIELD_LIMITS.email}
            autoComplete="email"
            inputMode="email"
            defaultValue={v?.email}
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="s-company" className={labelClass}>
            Company Name (Optional)
          </label>
          <input
            id="s-company"
            name="company"
            type="text"
            maxLength={FIELD_LIMITS.company}
            autoComplete="organization"
            defaultValue={v?.company}
            className={fieldClass}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="s-pages" className={labelClass}>
            How many pages do you need?
            <Required />
          </label>
          <select
            id="s-pages"
            key={selectKey("pages", e?.pages)}
            name="pages"
            required
            defaultValue={e?.pages || PAGE_RANGES[0]}
            className={fieldClass}
          >
            {PAGE_RANGES.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:col-span-2">
          <label htmlFor="s-hosting" className={labelClass}>
            Are you going to host the website with us?
            <Required />
          </label>
          <select
            id="s-hosting"
            key={selectKey("hosting", e?.hosting)}
            name="hosting"
            required
            defaultValue={e?.hosting || HOSTING_ANSWERS[0]}
            className={fieldClass}
          >
            {HOSTING_ANSWERS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:col-span-2">
          <label htmlFor="s-budget" className={labelClass}>
            What&rsquo;s your budget?
            <Required />
          </label>
          <select
            id="s-budget"
            key={selectKey("budget", e?.budget)}
            name="budget"
            required
            defaultValue={e?.budget || BUDGET_RANGES[0]}
            className={fieldClass}
          >
            {BUDGET_RANGES.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col sm:col-span-2">
          <label htmlFor="s-message" className={labelClass}>
            How Can We Help You?
            <Required />
          </label>
          <textarea
            id="s-message"
            name="message"
            required
            rows={4}
            maxLength={FIELD_LIMITS.message}
            defaultValue={v?.message}
            className="min-h-[104px] w-full resize-y rounded-sm border border-line bg-paper px-4 py-3 text-[1rem] leading-6 text-ink focus-visible:border-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="mt-6 inline-flex h-12 items-center justify-center rounded-sm bg-ink px-6 text-[1rem] font-medium leading-6 text-paper transition-colors duration-150 hover:bg-ink-black focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet disabled:opacity-70"
      >
        {isPending ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
