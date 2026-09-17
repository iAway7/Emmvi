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

export function validate(form: {
  name: unknown;
  email: unknown;
  company: unknown;
  message: unknown;
}): Validation {
  const name = typeof form.name === "string" ? normalizeText(form.name) : "";
  const email =
    typeof form.email === "string" ? normalizeText(form.email).toLowerCase() : "";
  const company =
    typeof form.company === "string" ? normalizeText(form.company) : "";
  const message =
    typeof form.message === "string" ? normalizeMessage(form.message) : "";

  if (!name || !email || !message) {
    return { ok: false, error: "Name, email and message are required." };
  }
  if (!isValidEmail(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (
    name.length > FIELD_LIMITS.name ||
    email.length > FIELD_LIMITS.email ||
    company.length > FIELD_LIMITS.company ||
    message.length > FIELD_LIMITS.message
  ) {
    return { ok: false, error: "One of the fields is too long." };
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
