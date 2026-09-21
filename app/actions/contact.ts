"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

import { escapeHtml, isRateLimited, normalizeText, validate } from "@/lib/contact";
import { CONTACT_EMAIL } from "@/lib/site";

/**
 * Campos extra del formulario de /services/website-design, que el Figma dibuja
 * con apellido y tres preguntas de calificacion. La home no los envia, asi que
 * llegan vacios y no cambian nada de su comportamiento.
 */
export type SalesExtras = {
  lastName: string;
  pages: string;
  hosting: string;
  budget: string;
};

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Devuelto en error para repoblar el formulario sin JS. */
  values?: { name: string; email: string; company: string; message: string };
  extras?: SalesExtras;
};

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "";
const toEmail = process.env.CONTACT_TO_EMAIL ?? "";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

const GENERIC_ERROR = `Something went wrong sending that. Email us at ${CONTACT_EMAIL} instead.`;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: campo oculto que un humano nunca rellena.
  if (formData.get("website")) {
    return { status: "success", message: "Thanks. We will be in touch." };
  }

  const field = (key: string) => normalizeText(String(formData.get(key) ?? ""));
  const extras: SalesExtras = {
    lastName: field("lastName"),
    pages: field("pages"),
    hosting: field("hosting"),
    budget: field("budget"),
  };

  // El nombre viaja partido en dos cuando lo manda el formulario de ventas.
  const firstName = String(formData.get("name") ?? "");
  const raw = {
    name: extras.lastName ? `${firstName} ${extras.lastName}` : firstName,
    email: formData.get("email"),
    company: formData.get("company"),
    message: formData.get("message"),
  };

  const result = validate(raw);
  if (!result.ok) {
    return {
      status: "error",
      message: result.error,
      values: {
        name: firstName,
        email: String(raw.email ?? ""),
        company: String(raw.company ?? ""),
        message: String(raw.message ?? ""),
      },
      extras,
    };
  }

  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Too many messages from this connection. Try again in a few minutes.",
      values: { ...result.values, name: firstName },
      extras,
    };
  }

  if (!resend || !fromEmail || !toEmail) {
    console.error(
      "[contact] Falta configuracion. Requiere RESEND_API_KEY, CONTACT_FROM_EMAIL y CONTACT_TO_EMAIL.",
    );
    return {
      status: "error",
      message: GENERIC_ERROR,
      values: { ...result.values, name: firstName },
      extras,
    };
  }

  const { name, email, company, message } = result.values;
  const qualifiers: [string, string][] = [
    ["Pages", extras.pages],
    ["Hosting with us", extras.hosting],
    ["Budget", extras.budget],
  ];

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New enquiry from ${name}${company ? ` (${company})` : ""}`,
      html: [
        `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
        `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
        company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : "",
        ...qualifiers
          .filter(([, value]) => value)
          .map(([label, value]) => `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`),
        `<p><strong>Message:</strong></p>`,
        `<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend devolvio un error:", error);
      return {
        status: "error",
        message: GENERIC_ERROR,
        values: { ...result.values, name: firstName },
        extras,
      };
    }
  } catch (err) {
    console.error("[contact] Fallo el envio:", err);
    return {
      status: "error",
      message: GENERIC_ERROR,
      values: { ...result.values, name: firstName },
      extras,
    };
  }

  return {
    status: "success",
    message: "Thanks. We read every one of these and will reply shortly.",
  };
}
