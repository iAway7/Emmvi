import type { Locale } from "@/lib/i18n";
import { CALENDLY_URL } from "@/lib/links";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

/**
 * Validacion y rate limiting del formulario de contacto.
 * Mismos limites, normalizacion y ventana de rate limit que el endpoint del
 * portfolio, para que las dos bases se comporten igual.
 */
export const FIELD_LIMITS = {
  name: 100,
  email: 200,
  company: 200,
  message: 5000,
} as const;

export type ContactValues = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export type Validation =
  | { ok: true; values: ContactValues }
  | { ok: false; error: string };

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/** Quita caracteres de control y colapsa espacios. Para campos de una linea. */
export function normalizeText(value: string) {
  return value.replace(/[\x00-\x1f\x7f]+/g, " ").replace(/\s+/g, " ").trim();
}

/** Conserva saltos de linea, normaliza CRLF y quita nulos. Para el mensaje. */
export function normalizeMessage(value: string) {
  return value.replace(/\r\n/g, "\n").replace(/\r/g, "\n").replace(/\x00/g, "").trim();
}

/**
 * Lo que el formulario le dice al visitante, en su idioma. Vive aqui y no en
 * lib/chrome-copy.ts porque lo lee la Server Action, y `CONTACT_EMAIL` entra
 * en el error generico.
 *
 * El idioma llega en un campo oculto del formulario (`locale`); cualquier
 * valor que no sea uno de los dos cae en ingles.
 */
export const formMessages: Record<
  Locale,
  {
    required: string;
    invalidEmail: string;
    tooLong: string;
    rateLimited: string;
    generic: string;
    success: string;
    honeypot: string;
  }
> = {
  en: {
    required: "Name, email and message are required.",
    invalidEmail: "Please enter a valid email address.",
    tooLong: "One of the fields is too long.",
    rateLimited: "Too many messages from this connection. Try again in a few minutes.",
    generic: `Something went wrong sending that. Email us at ${CONTACT_EMAIL} instead.`,
    success: "Thanks. We read every one of these and will reply shortly.",
    honeypot: "Thanks. We will be in touch.",
  },
  es: {
    required: "Nombre, correo y mensaje son obligatorios.",
    invalidEmail: "Escribe una dirección de correo válida.",
    tooLong: "Uno de los campos es demasiado largo.",
    rateLimited: "Demasiados mensajes desde esta conexión. Inténtalo de nuevo en unos minutos.",
    generic: `Algo ha fallado al enviarlo. Escríbenos a ${CONTACT_EMAIL}.`,
    success: "Gracias. Leemos todos los mensajes y te contestamos en breve.",
    honeypot: "Gracias. Nos pondremos en contacto.",
  },
};

export function toLocale(value: unknown): Locale {
  return value === "es" ? "es" : "en";
}

export function validate(
  form: {
    name: unknown;
    email: unknown;
    company: unknown;
    message: unknown;
  },
  locale: Locale = "en",
): Validation {
  const t = formMessages[locale];
  const name = typeof form.name === "string" ? normalizeText(form.name) : "";
  const email =
    typeof form.email === "string" ? normalizeText(form.email).toLowerCase() : "";
  const company =
    typeof form.company === "string" ? normalizeText(form.company) : "";
  const message =
    typeof form.message === "string" ? normalizeMessage(form.message) : "";

  if (!name || !email || !message) {
    return { ok: false, error: t.required };
  }
  if (!isValidEmail(email)) {
    return { ok: false, error: t.invalidEmail };
  }
  if (
    name.length > FIELD_LIMITS.name ||
    email.length > FIELD_LIMITS.email ||
    company.length > FIELD_LIMITS.company ||
    message.length > FIELD_LIMITS.message
  ) {
    return { ok: false, error: t.tooLong };
  }

  return { ok: true, values: { name, email, company, message } };
}

/**
 * Rate limit por IP, en memoria. Se reinicia con cada instancia serverless en
 * Vercel, lo que basta para frenar abuso casual sin montar infraestructura.
 */
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

export function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, recent);
    return true;
  }
  recent.push(now);
  requestLog.set(ip, recent);
  if (requestLog.size > 5000) requestLog.clear();
  return false;
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * El acuse de recibo que le llega a quien rellena el formulario, en su idioma.
 *
 * Existe porque hasta 2026-09-30 el formulario solo avisaba hacia dentro: el
 * visitante veia el mensaje de exito en pantalla y a partir de ahi, silencio.
 * La primera consulta real que entro por aqui estuvo dos dias sin respuesta y
 * sin nada en su bandeja que dijera que habia llegado a alguna parte.
 *
 * **El plazo que promete es una promesa.** Si deja de cumplirse hace mas dano
 * que no decir nada, porque el visitante ya cuenta los dias. Se cambia aqui.
 *
 * No lleva imagenes a proposito: un logo remoto que no cargue deja un hueco
 * roto en el primer correo que esa persona recibe de la empresa, y el texto se
 * lee igual con las imagenes bloqueadas, que es como llega a un desconocido.
 */
const autoReplyCopy: Record<
  Locale,
  { subject: string; greeting: (name: string) => string; body: string[]; cta: string }
> = {
  en: {
    subject: "Thanks, we got your message",
    greeting: (name) => `Hi ${name},`,
    body: [
      "Thanks for getting in touch. Your message reached us and we read every one that comes through the site.",
      "We normally reply within one working day. If you would rather talk it through sooner, you can book a 30 minute call:",
    ],
    cta: "Book a 30 minute call",
  },
  es: {
    subject: "Gracias, hemos recibido tu mensaje",
    greeting: (name) => `Hola ${name}:`,
    body: [
      "Gracias por escribirnos. Tu mensaje nos ha llegado y leemos todos los que entran por la web.",
      "Normalmente respondemos en un día laborable. Si prefieres hablarlo antes, puedes reservar una llamada de 30 minutos:",
    ],
    cta: "Reservar una llamada de 30 minutos",
  },
};

export function buildAutoReply(locale: Locale, name: string) {
  const copy = autoReplyCopy[locale];
  const greeting = copy.greeting(name);

  const html = [
    `<div style="font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.6;color:#171717;">`,
    `<p style="margin:0 0 16px;">${escapeHtml(greeting)}</p>`,
    ...copy.body.map((line) => `<p style="margin:0 0 16px;">${escapeHtml(line)}</p>`),
    `<p style="margin:0 0 28px;"><a href="${CALENDLY_URL}" style="color:#423af4;">${escapeHtml(copy.cta)}</a></p>`,
    `<p style="margin:0;color:#666666;font-size:13px;">emmvi<br>`,
    `<a href="${SITE_URL}" style="color:#666666;">emmvi.com</a></p>`,
    `</div>`,
  ].join("\n");

  const text = [greeting, "", ...copy.body, "", CALENDLY_URL, "", "emmvi", SITE_URL].join("\n");

  return { subject: copy.subject, html, text };
}
