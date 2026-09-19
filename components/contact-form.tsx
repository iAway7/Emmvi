"use client";

import Link from "next/link";
import posthog from "posthog-js";
import { useActionState } from "react";

import { submitContact, type ContactState } from "@/app/actions/contact";
import { FIELD_LIMITS } from "@/lib/contact";

const initialState: ContactState = { status: "idle", message: "" };

const inputClass =
  "h-12 w-full rounded-sm border border-line bg-paper px-4 text-[1rem] leading-6 text-ink " +
  "focus-visible:border-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet";

const labelClass = "mb-2 block text-[1rem] font-medium leading-6 text-ink";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState,
  );

  async function handleSubmit(formData: FormData) {
    if (
      process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN &&
      process.env.NEXT_PUBLIC_POSTHOG_HOST
    ) {
      posthog.capture("contact_form_submitted", { form_type: "contact" });
    }
    return formAction(formData);
  }

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-md border border-line bg-paper p-8"
      >
        <p className="text-h3 text-balance text-ink">Message sent</p>
        <p className="mt-3 text-body text-pretty text-ink-soft">
          {state.message}
        </p>
      </div>
    );
  }

  const v = state.values;

  return (
    <form action={handleSubmit} className="w-full">
      {/* Honeypot. Fuera de pantalla y fuera del orden de tabulacion. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="c-website">Leave this empty</label>
        <input id="c-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" ? (
        <p
          role="alert"
          className="mb-5 rounded-sm border border-line bg-paper p-4 text-[1rem] leading-6 text-ink"
        >
          {state.message}
        </p>
      ) : null}

      <div className="mb-5">
        <label htmlFor="c-name" className={labelClass}>
          Full name<span aria-hidden="true"> *</span>
        </label>
        <input
          id="c-name"
          name="name"
          type="text"
          required
          maxLength={FIELD_LIMITS.name}
          autoComplete="name"
          defaultValue={v?.name}
          className={inputClass}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="c-email" className={labelClass}>
          Email address<span aria-hidden="true"> *</span>
        </label>
        <input
          id="c-email"
          name="email"
          type="email"
          required
          maxLength={FIELD_LIMITS.email}
          autoComplete="email"
          inputMode="email"
          defaultValue={v?.email}
          className={inputClass}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="c-company" className={labelClass}>
          Company name<span className="text-ink-soft"> (optional)</span>
        </label>
        <input
          id="c-company"
          name="company"
          type="text"
          maxLength={FIELD_LIMITS.company}
          autoComplete="organization"
          defaultValue={v?.company}
          className={inputClass}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="c-help" className={labelClass}>
          How can we help you?<span aria-hidden="true"> *</span>
        </label>
        <textarea
          id="c-help"
          name="message"
          required
          rows={5}
          maxLength={FIELD_LIMITS.message}
          defaultValue={v?.message}
          className="min-h-[120px] w-full resize-y rounded-sm border border-line bg-paper px-4 py-3 text-[1rem] leading-6 text-ink focus-visible:border-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex h-12 w-full items-center justify-center rounded-sm bg-ink px-6 text-[1rem] font-medium leading-6 text-paper transition-colors duration-150 hover:bg-ink-black focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet disabled:opacity-70"
      >
        {isPending ? "Sending…" : "Send"}
      </button>

      <p className="mt-4 text-small text-ink-soft">
        By submitting this form, I confirm that I have read and understood the
        Emmvi{" "}
        <Link
          href="/privacy-policy/"
          className="text-ink underline underline-offset-[3px] hover:text-violet"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
