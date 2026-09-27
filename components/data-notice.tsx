import Link from "next/link";

import { chrome } from "@/lib/chrome-copy";
import { localizePath, type Locale } from "@/lib/i18n";
import { CONTACT_EMAIL, controller } from "@/lib/site";

/**
 * Primera capa del deber de informar (RGPD art. 13), junto al formulario.
 *
 * La politica de privacidad es la segunda capa y ya lo cubre todo. Lo que
 * faltaba es esto: informar **en el momento** de recoger los datos, no a un
 * clic de distancia. Un "he leido la politica" no cumple el art. 13; lo que
 * cumple es tener delante quien trata los datos, para que y con que base.
 *
 * **No lleva casilla de consentimiento, y es deliberado.** La base de una
 * peticion de presupuesto es el art. 6.1.b —medidas precontractuales a
 * peticion del interesado—, no el consentimiento. Pedirlo donde ya hay otra
 * base es peor, por dos razones:
 *
 * 1. El consentimiento se retira cuando uno quiere. Habria que borrar la
 *    consulta que el propio cliente pidio que atendieras.
 * 2. No seria libre: sin marcar la casilla no puede escribirte. Un
 *    consentimiento obligatorio para usar el servicio no es valido.
 *
 * **Sin NIF ni direccion.** El art. 13 pide la *identidad* del responsable,
 * no su ficha fiscal. El NIF y el domicilio ya se publican en el aviso legal
 * —ahi los exige la LSSI-CE— y otra vez en la politica de privacidad.
 * Repetirlos junto al formulario no cumple nada de mas.
 *
 * **Aqui va solo el nombre comercial.** emmvi es nombre comercial de una
 * persona fisica, asi que "emmvi" a secas no identifica al responsable — pero
 * no hace falta que lo identifique *en esta capa*. El nombre legal completo
 * esta en /privacy-policy/ (segunda capa del art. 13) y otra vez en
 * /legal-notice/ (donde lo exige la LSSI-CE art. 10), y esta nota enlaza a la
 * primera. Eso es exactamente para lo que sirve el modelo por capas.
 *
 * Lo que NO se puede es quitarlo de esas dos paginas: ahi si es obligatorio.
 *
 * **Corta a proposito.** El modelo por capas de la AEPD pide que la primera
 * sea *basica*: responsable, finalidad, base, derechos y donde esta el resto.
 * Destinatarios, plazos de conservacion y direccion completa viven en la
 * politica, que ya tiene un apartado para cada uno. Alargar esta capa no
 * cumple mas, solo consigue que nadie la lea.
 *
 * La casilla hace falta para **otra cosa**: mandarle correo comercial despues.
 * Eso si es consentimiento, y va separado, opcional y desmarcado. Hoy no se
 * manda nada de eso, asi que no hay casilla.
 *
 * En español enlaza a la politica en español: la segunda capa tiene que estar
 * en el idioma en que se leyo la primera.
 */
export function DataNotice({ locale = "en" }: { locale?: Locale }) {
  const copy = chrome[locale].notice;
  const strong = "font-semibold text-ink";
  const link = "text-ink underline underline-offset-[3px] hover:text-violet";

  return (
    <p className="mt-5 text-small text-pretty text-ink-soft">
      <strong className={strong}>{copy.controller}</strong>{" "}
      {controller.tradingName}. <strong className={strong}>{copy.purpose}</strong>{" "}
      {copy.purposeText} <strong className={strong}>{copy.rights}</strong>{" "}
      {copy.rightsText}{" "}
      <a href={`mailto:${CONTACT_EMAIL}`} className={link}>
        {CONTACT_EMAIL}
      </a>
      {copy.complain}{" "}
      <a href="https://www.aepd.es" className={link}>
        AEPD
      </a>
      . <strong className={strong}>{copy.rest}</strong>{" "}
      <Link href={localizePath("/privacy-policy", locale)} className={link}>
        {copy.privacy}
      </Link>
      .
    </p>
  );
}
