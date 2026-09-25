"use server";

import { headers } from "next/headers";
import { after } from "next/server";
import { Resend } from "resend";

import { escapeHtml, isRateLimited, normalizeText, validate } from "@/lib/contact";
import { notifySlack } from "@/lib/slack";
import { CONTACT_EMAIL } from "@/lib/site";

/**
 * Campos extra del formulario de /services/website-design, que el Figma dibuja
 * con apellido y tres preguntas de calificacion. La home no los envia, asi que
 * llegan vacios y no cambian nada de su comportamiento.
 */
export type SalesExtras = {
  pages: string;
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
/**
 * Varios destinatarios, separados por comas: `sales@emmvi.com, nico@emmvi.com`.
 * Resend admite hasta cincuenta en `to`, pero como cadena suelta trata la coma
 * como parte de la direccion y la rechaza entera, asi que se parte aqui.
 *
 * Van todos en `to` y no en `bcc` a proposito: es correo interno del equipo, y
 * asi un "responder a todos" mantiene la conversacion junta. Al cliente se le
 * responde igual con un "responder" normal, que `replyTo` apunta a el.
 */
const toEmails = (process.env.CONTACT_TO_EMAIL ?? "")
  .split(",")
  .map((address) => address.trim())
  .filter(Boolean);

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
    pages: field("pages"),
    budget: field("budget"),
  };

  const firstName = String(formData.get("name") ?? "");
  const raw = {
    name: firstName,
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

  const { name, email, company, message } = result.values;
  const qualifiers: [string, string][] = [
    ["Pages", extras.pages],
    ["Budget", extras.budget],
  ];

  const source = headerList.get("referer") ?? "unknown";

  /**
   * Avisa a Slack pase lo que pase con el correo, y despues de responder.
   *
   * `after()` lo saca del camino critico: el visitante no espera a Slack. Y se
   * manda tambien cuando Resend falla, que es justo cuando mas hace falta —
   * ahi este aviso es el unico registro que queda de la consulta.
   */
  const avisar = (emailDelivered: boolean) =>
    after(() =>
      notifySlack({
        name,
        email,
        company,
        message,
        qualifiers: qualifiers.filter(([, v]) => v),
        emailDelivered,
        source,
      }),
    );

  if (!resend || !fromEmail || toEmails.length === 0) {
    console.error(
      "[contact] Falta configuracion. Requiere RESEND_API_KEY, CONTACT_FROM_EMAIL y CONTACT_TO_EMAIL.",
    );
    avisar(false);
    return {
      status: "error",
      message: GENERIC_ERROR,
      values: { ...result.values, name: firstName },
      extras,
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmails,
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
      avisar(false);
      return {
        status: "error",
        message: GENERIC_ERROR,
        values: { ...result.values, name: firstName },
        extras,
      };
    }
  } catch (err) {
    console.error("[contact] Fallo el envio:", err);
    avisar(false);
    return {
      status: "error",
      message: GENERIC_ERROR,
      values: { ...result.values, name: firstName },
      extras,
    };
  }

  avisar(true);

  return {
    status: "success",
    message: "Thanks. We read every one of these and will reply shortly.",
  };
}
