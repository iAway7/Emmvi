/**
 * Las cifras que promete la politica de privacidad, compartidas por sus dos
 * versiones (app/(en)/privacy-policy y app/(es)/es/privacy-policy). Viven
 * aqui para que una fecha o un plazo no pueda cambiar en un idioma y no en
 * el otro.
 *
 * Son compromisos con el visitante, no descripciones: si la configuracion
 * real no coincide, la pagina promete algo que no se cumple.
 */

/** Al publicar cambios de fondo, subirla. En ISO; cada pagina la formatea. */
export const PRIVACY_LAST_UPDATED = "2026-09-19";

/**
 * Plazo de conservacion de las consultas que no acaban en trabajo. Conviene
 * que sea el que de verdad se cumple: si las consultas se quedan en la
 * bandeja para siempre, este numero es falso.
 */
export const ENQUIRY_RETENTION_MONTHS = 12;

/**
 * Los otros dos plazos. **Hay que comprobar que coinciden con lo configurado
 * de verdad** en GA4 (Administrar -> Conservacion de datos; el maximo que
 * permite Google son 14 meses) y en PostHog (la retencion de grabaciones
 * depende del plan).
 */
export const GA4_RETENTION_MONTHS = 14;
export const SESSION_RECORDING_RETENTION_DAYS = 30;
