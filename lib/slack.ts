/**
 * Aviso a Slack de cada consulta, por Incoming Webhook.
 *
 * Tres reglas que gobiernan este archivo:
 *
 * 1. **Nunca rompe el envio.** Todo va dentro de try/catch y la funcion no
 *    lanza. Si Slack esta caido o el webhook esta mal, el visitante no se
 *    entera y el correo sigue su camino.
 * 2. **Nunca hace esperar al visitante.** Se invoca desde `after()`, asi que
 *    corre cuando la respuesta ya salio.
 * 3. **Se manda aunque el correo falle.** Es justo cuando mas hace falta: si
 *    Resend no responde, este mensaje es el unico registro que queda de esa
 *    consulta. Por eso lleva `emailDelivered` y lo dice en el aviso.
 *
 * Sin `SLACK_WEBHOOK_URL` no hace nada, en silencio: es un canal opcional, no
 * una pieza que falte.
 */

const webhookUrl = process.env.SLACK_WEBHOOK_URL;

/**
 * La barra de color lateral solo existe dentro de `attachments`; los `blocks`
 * sueltos no la tienen. Por eso el mensaje va envuelto en un adjunto de uno:
 * el contenido sigue siendo Block Kit (el formato actual) y el adjunto aporta
 * solo el color. Los `fields` de tipo `{title, value, short}` que salen en la
 * documentacion de adjuntos son el formato antiguo y no se usan aqui.
 */
const COLORS = {
  /** Violeta de marca. Consulta que siguio su curso normal. */
  ok: "#423af4",
  /** El correo no salio: hay que actuar desde el canal. */
  alert: "#d00000",
} as const;

export type SlackEnquiry = {
  name: string;
  email: string;
  company: string;
  message: string;
  /** Etiqueta -> valor, ya filtrados. Vacio en el formulario de la home. */
  qualifiers: [string, string][];
  /** false cuando Resend fallo o no estaba configurado. */
  emailDelivered: boolean;
  /** De que pagina salio, para no tener que adivinarlo. */
  source: string;
};

/** Slack interpreta `&`, `<` y `>` como marcado. Solo esos tres. */
function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Recorta para que un mensaje largo no reviente el limite de bloque (3000). */
function clamp(value: string, max = 2600) {
  return value.length > max ? `${value.slice(0, max)}…` : value;
}

export async function notifySlack(enquiry: SlackEnquiry): Promise<void> {
  if (!webhookUrl) return;

  const { name, email, company, message, qualifiers, emailDelivered, source } =
    enquiry;

  const campos = [
    `*Name*\n${esc(name)}`,
    `*Email*\n<mailto:${esc(email)}|${esc(email)}>`,
    company ? `*Company*\n${esc(company)}` : null,
    `*Page*\n${esc(source)}`,
    ...qualifiers.map(([label, value]) => `*${esc(label)}*\n${esc(value)}`),
  ].filter(Boolean) as string[];

  const blocks: unknown[] = [
    // Slack solo admite diez campos por bloque de seccion.
    {
      type: "section",
      fields: campos.slice(0, 10).map((text) => ({ type: "mrkdwn", text })),
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `>${clamp(esc(message)).replace(/\n/g, "\n>")}`,
      },
    },
  ];

  if (!emailDelivered) {
    blocks.push({
      type: "context",
      elements: [
        {
          type: "mrkdwn",
          text: ":warning: *The email did not go out.* This alert is the only record of this enquiry — reply from here.",
        },
      ],
    });
  }

  // Encabeza el mensaje y es lo que se lee en la notificacion del movil, donde
  // ni los bloques ni el adjunto se muestran.
  const resumen = `New enquiry from ${name}${company ? ` (${company})` : ""}`;

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: resumen,
        attachments: [
          {
            color: emailDelivered ? COLORS.ok : COLORS.alert,
            // Para clientes viejos que no saben pintar bloques.
            fallback: `${resumen} — ${email}`,
            blocks,
          },
        ],
      }),
    });
    if (!res.ok) {
      console.error(
        `[slack] El webhook respondio ${res.status}: ${await res.text()}`,
      );
    }
  } catch (err) {
    console.error("[slack] No se pudo avisar:", err);
  }
}
