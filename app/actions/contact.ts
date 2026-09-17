"use server";

import { headers } from "next/headers";
import { Resend } from "resend";

import { escapeHtml, isRateLimited, validate } from "@/lib/contact";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Devuelto en error para repoblar el formulario sin JS. */
  values?: { name: string; email: string; company: string; message: string };
};

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "";
const toEmail = process.env.CONTACT_TO_EMAIL ?? "";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

/** sales@emmvi.com sale de la propia configuracion de Calendly ("please forward
 *  any relevant information to sales@emmvi.com"). Confirmar que es la direccion
 *  correcta para este fallback. */
const CONTACT_EMAIL = "sales@emmvi.com";

const GENERIC_ERROR = `Something went wrong sending that. Email us at ${CONTACT_EMAIL} instead.`;

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: campo oculto que un humano nunca rellena.
  if (formData.get("website")) {
    return { status: "success", message: "Thanks. We will be in touch." };
  }

  const raw = {
    name: formData.get("name"),
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
        name: String(raw.name ?? ""),
        email: String(raw.email ?? ""),
        company: String(raw.company ?? ""),
        message: String(raw.message ?? ""),
      },
    };
  }

  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Too many messages from this connection. Try again in a few minutes.",
      values: result.values,
    };
  }

  if (!resend || !fromEmail || !toEmail) {
    console.error(
      "[contact] Falta configuracion. Requiere RESEND_API_KEY, CONTACT_FROM_EMAIL y CONTACT_TO_EMAIL.",
    );
    return { status: "error", message: GENERIC_ERROR, values: result.values };
  }

  const { name, email, company, message } = result.values;

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
        `<p><strong>Message:</strong></p>`,
        `<p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
      ].join("\n"),
    });

    if (error) {
      console.error("[contact] Resend devolvio un error:", error);
      return { status: "error", message: GENERIC_ERROR, values: result.values };
    }
  } catch (err) {
    console.error("[contact] Fallo el envio:", err);
    return { status: "error", message: GENERIC_ERROR, values: result.values };
  }

  return {
    status: "success",
    message: "Thanks. We read every one of these and will reply shortly.",
  };
}
