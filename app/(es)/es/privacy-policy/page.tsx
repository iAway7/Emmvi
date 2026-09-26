import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  ENQUIRY_RETENTION_MONTHS,
  GA4_RETENTION_MONTHS,
  PRIVACY_LAST_UPDATED,
  SESSION_RECORDING_RETENTION_DAYS,
} from "@/lib/privacy";
import { CONTACT_EMAIL, controller, pageMetadata } from "@/lib/site";

/**
 * Politica de privacidad en español: la traduccion de
 * app/(en)/privacy-policy/page.tsx, apartado por apartado.
 *
 * Todo lo que la version inglesa explica en su comentario de cabecera vale
 * aqui: cada afirmacion sale de leer el codigo, describe GA4 y PostHog como
 * ya instalados, y hace tres promesas que la configuracion tiene que cumplir
 * (enmascarado de PostHog, nube europea, nada conectado a publicidad).
 *
 * **Un cambio en la inglesa hay que repetirlo aqui a mano.** Es una pagina
 * aparte y no una plantilla con diccionario, por lo mismo que el aviso legal:
 * prosa con enlaces que cambia poco. Lo que no puede diverger —fecha y
 * plazos— vive en lib/privacy.ts y lo leen las dos.
 */
export const metadata: Metadata = pageMetadata({
  path: "/privacy-policy",
  locale: "es",
  title: "Política de privacidad",
  description:
    "Qué recoge esta web, qué no, quién lo trata y cómo pedir que se borre, en palabras llanas y no en jerga legal.",
});

const incomplete = !controller.legalName || !controller.registeredAddress;

const LAST_UPDATED = new Date(PRIVACY_LAST_UPDATED).toLocaleDateString("es-ES", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";

const h2 = "mt-14 text-ink";
const p = "mt-5 text-body text-pretty text-ink-soft";
const ul = "mt-5 flex flex-col gap-3 pl-6 text-body list-disc text-ink-soft";
const a =
  "text-ink underline underline-offset-[3px] transition-colors hover:text-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet";

function External({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className={a} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function PrivacyPolicyEs() {
  return (
    <>
      <SiteHeader locale="es" path="/privacy-policy" />

      <main className={`${wrap} py-16 lg:py-24`}>
        <h1 className="max-w-[16em] text-ink">
          Política de privacidad
        </h1>
        <p className="mt-6 max-w-[44ch] text-lede text-pretty text-ink-soft">
          Qué recoge esta web, qué no recoge a propósito y cómo pedir que se
          borre cualquier cosa.
        </p>
        <p className="mt-6 font-mono text-small text-ink-soft">
          Última actualización: {LAST_UPDATED}
        </p>

        <div className="doc mt-12 max-w-[68ch]">
          {incomplete && (
            <p className="border-l-[3px] border-violet bg-paper-alt p-5 text-body text-pretty text-ink">
              <strong>Borrador.</strong> Los datos registrales del primer
              apartado están por completar. Todo lo demás describe lo que la web
              hace hoy.
            </p>
          )}

          <h2 className={`${h2} mt-10`}>Quién es el responsable</h2>
          {controller.legalName && controller.registeredAddress ? (
            <p className={p}>
              {controller.tradingName} es el nombre comercial de{" "}
              {controller.legalName}
              {controller.taxId ? `, NIF ${controller.taxId}` : ""}, con
              domicilio en {controller.registeredAddress}, responsable del
              tratamiento de los datos de esta web,{" "}
              <span className="font-mono">emmvi.com</span>. emmvi es una marca
              registrada en España.
            </p>
          ) : (
            <p className={p}>
              {controller.tradingName} es el responsable del tratamiento de los
              datos de esta web, <span className="font-mono">emmvi.com</span>.
              Razón social, domicilio y NIF: por completar.
            </p>
          )}
          <p className={p}>
            Para cualquier cosa de esta página, incluidas las solicitudes que se
            describen más abajo, escribe a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className={a}>
              {CONTACT_EMAIL}
            </a>
            . Lo lee una persona.
          </p>

          <h2 className={h2}>Qué cubre esta política</h2>
          <p className={p}>
            Solo esta web. No cubre las webs, CRM ni automatizaciones que
            construimos para clientes: en ellas, el cliente es el responsable
            de los datos de sus propios clientes y se aplica su propia política.
          </p>

          <h2 className={h2}>Qué recogemos cuando rellenas un formulario</h2>
          <p className={p}>
            Los formularios piden tu nombre, tu correo electrónico, tu empresa
            (opcional) y tu mensaje. El formulario de la página de diseño web
            pregunta además, a grandes rasgos, cuántas páginas necesitas, si
            quieres que alojemos la web y un rango de presupuesto.
          </p>
          <p className={p}>
            Al enviarlo, el mensaje va directo a nuestra bandeja como un correo,
            a través de un servicio de envío llamado Resend. No se guarda en
            ninguna base de datos de esta web, porque esta web no tiene ninguna.
            Tu dirección queda como remitente de respuesta para poder
            contestarte.
          </p>
          <p className={p}>
            La base legal es tu petición: nos pides que contactemos contigo, lo
            que según el RGPD es un tratamiento necesario para aplicar medidas
            precontractuales a petición del interesado.
          </p>

          <h2 className={h2}>Qué pasa cuando reservas una llamada</h2>
          <p className={p}>
            La reserva pasa por Calendly. Lo que escribas en su formulario lo
            recoge Calendly y nos llega como una invitación de calendario. Lo
            que hagan con ello se rige por su política de privacidad.
          </p>
          <p className={p}>
            Una cosa que conviene decir claro, porque la mayoría de las webs no
            lo dicen: el script y la hoja de estilos de Calendly se cargan solos
            en cualquier página con un botón de reserva, no solo cuando lo
            pulsas. Eso significa que los servidores de Calendly pueden ver tu
            dirección IP y los datos de tu navegador aunque nunca hagas clic. No
            se muestra ni se abre nada hasta que lo haces.
          </p>

          <h2 className={h2}>Medición</h2>
          <p className={p}>
            Medimos cómo se usa la web para saber qué escribir y qué arreglar.
            Intervienen tres herramientas, y merece la pena concretar qué hace
            cada una.
          </p>
          <ul className={ul}>
            <li>
              <strong className="text-ink">Google Tag Manager</strong> es un
              contenedor. No mide nada por sí mismo: carga a las otras dos. Como
              lo sirve Google, Google recibe tu dirección IP y los datos de tu
              navegador al cargar la página.
            </li>
            <li>
              <strong className="text-ink">Google Analytics 4</strong> cuenta
              páginas vistas y sesiones, y nos dice aproximadamente de dónde
              vienen las visitas y qué páginas leen. Google afirma que Analytics
              no almacena direcciones IP: las usa para calcular una ubicación
              aproximada y después las descarta.
            </li>
            <li>
              <strong className="text-ink">PostHog</strong> es analítica de
              producto. Registra qué páginas abres y en qué haces clic, y
              vincula esos eventos a un identificador generado al azar para
              distinguir una visita de otra. No sabe tu nombre salvo que nos lo
              des en un formulario. Usamos{" "}
              <strong className="text-ink">la nube europea de PostHog</strong>,
              así que estos datos se guardan en la UE y no salen de ella.
            </li>
          </ul>
          <p className={p}>
            Nada de esto está conectado a ninguna plataforma de publicidad. No
            hacemos anuncios y no se lo pasamos a nadie que los haga.
          </p>
          <p className={p}>
            La base legal de la medición es tu consentimiento, y puedes pararla
            toda en cualquier momento con una extensión que bloquee
            rastreadores o con la protección de tu propio navegador. Nada de
            esta web deja de funcionar si lo haces.
          </p>

          <h2 className={h2}>Grabación de sesiones</h2>
          <p className={p}>
            Es lo más intrusivo de esta página, así que tiene su propio apartado
            y no una línea enterrada en una lista.
          </p>
          <p className={p}>
            PostHog graba sesiones en esta web. Es decir, una reproducción de tu
            visita tal como se veía la página: las páginas por las que pasaste,
            hasta dónde hiciste scroll y en qué hiciste clic. Las vemos para
            encontrar los sitios donde la web confunde a la gente.
          </p>
          <p className={p}>
            <strong className="text-ink">
              Lo que escribes en los formularios se enmascara y nunca llega a
              la grabación.
            </strong>{" "}
            Tu nombre, tu correo y tu mensaje se sustituyen antes de que la
            grabación salga de tu navegador, así que solo existen en el correo
            que nos llega. Las grabaciones se guardan en la nube europea de
            PostHog y se borran solas a los{" "}
            {SESSION_RECORDING_RETENTION_DAYS} días.
          </p>
          <p className={p}>
            Si prefieres que no te grabemos, una extensión que bloquee
            rastreadores lo impide, y puedes escribirnos para que borremos
            cualquier grabación de tu visita.
          </p>

          <h2 className={h2}>Qué se recoge automáticamente</h2>
          <ul className={ul}>
            <li>
              Registros del servidor. Nuestro proveedor de alojamiento, Vercel,
              guarda la información habitual de cada petición: dirección IP,
              navegador, página solicitada y hora. Es lo normal en cualquier
              servidor web y sirve para mantener la web en marcha y segura.
            </li>
            <li>
              Protección contra spam. Al enviar un formulario, tu dirección IP
              se guarda en la memoria del servidor durante diez minutos para
              que no puedan llegar más de cinco envíos desde la misma conexión
              en ese intervalo. Nunca se escribe en disco, nunca se guarda junto
              a tu mensaje y desaparece cuando pasa el intervalo o el servidor
              se reinicia.
            </li>
          </ul>

          <h2 className={h2}>Cookies</h2>
          <p className={p}>
            La web en sí no pone ninguna cookie. No tiene inicio de sesión, ni
            sesión, ni preferencias que guardar, así que no hay nada nuestro que
            recordar.
          </p>
          <p className={p}>
            Las herramientas descritas arriba sí ponen las suyas, y estas son
            las que encontrarás si miras:
          </p>
          <ul className={ul}>
            <li>
              Google Analytics pone cookies que empiezan por{" "}
              <span className="font-mono">_ga</span> para distinguir visitas
              repetidas. La duración por defecto que les da Google es de dos
              años.
            </li>
            <li>
              PostHog pone una cookie que empieza por{" "}
              <span className="font-mono">ph_</span> con el identificador
              aleatorio descrito arriba, y usa además el almacenamiento local de
              tu navegador.
            </li>
            <li>
              Calendly puede poner las suyas cuando carga su widget o cuando
              abres la ventana de reserva.
            </li>
          </ul>
          <p className={p}>
            Pertenecen a esas empresas y no a nosotros, y sus propias políticas
            las describen al completo. Borrar las cookies y los datos de sitios
            de tu navegador las elimina todas.
          </p>

          <h2 className={h2}>Qué no hacemos</h2>
          <p className={p}>
            Esta lista es tan parte de la política como el resto.
          </p>
          <ul className={ul}>
            <li>
              Ningún rastreador de publicidad ni de retargeting, y ningún
              vínculo entre nuestra analítica y una cuenta publicitaria.
            </li>
            <li>
              Ninguna llamada a Google Fonts. La tipografía se descarga al
              construir la web y se sirve desde nuestro propio dominio, así que
              nada de cómo se dibuja esta página implica una petición a Google.
            </li>
            <li>
              Ninguna venta, alquiler ni cesión de tus datos a nadie para su
              propio marketing.
            </li>
            <li>
              Ninguna decisión automatizada sobre ti. Nada de aquí decide nada
              por su cuenta: cuando envías una consulta, la lee una persona y la
              contesta una persona.
            </li>
            <li>
              Ningún intento de identificarte. El identificador de analítica es
              aleatorio y nunca intentamos cruzarlo con un nombre, un correo o
              una empresa salvo que nos digas quién eres en un formulario.
            </li>
            <li>
              Ninguna suscripción a boletines escondida en el formulario de
              contacto. Si algún día la añadimos, será una casilla aparte que
              tendrás que marcar.
            </li>
          </ul>

          <h2 className={h2}>Quién más maneja tu información</h2>
          <p className={p}>
            Cinco servicios intervienen en el funcionamiento de esta web. Cada
            uno trata datos por cuenta nuestra o como responsable independiente
            de su propia plataforma, y cada uno publica su política y sus
            garantías.
          </p>
          <ul className={ul}>
            <li>
              <External href="https://resend.com/legal/privacy-policy">
                Resend
              </External>{" "}
              entrega el correo de la consulta en nuestra bandeja.
            </li>
            <li>
              <External href="https://calendly.com/privacy">Calendly</External>{" "}
              gestiona las reservas de llamadas.
            </li>
            <li>
              <External href="https://vercel.com/legal/privacy-policy">
                Vercel
              </External>{" "}
              aloja y sirve la web.
            </li>
            <li>
              <External href="https://policies.google.com/privacy">
                Google
              </External>{" "}
              sirve el contenedor de Tag Manager y ejecuta Analytics.
            </li>
            <li>
              <External href="https://posthog.com/privacy">PostHog</External>{" "}
              analítica de producto y grabación de sesiones, en su nube europea.
            </li>
          </ul>
          <p className={p}>
            Resend, Calendly, Vercel y Google tienen su sede en Estados Unidos o
            tratan datos allí, así que enviar una consulta implica una
            transferencia internacional. Cada uno publica las garantías en que
            se apoya para las transferencias fuera del Espacio Económico
            Europeo; los enlaces de arriba son las versiones vigentes.
          </p>
          <p className={p}>
            PostHog es la excepción, y a propósito: elegimos su nube europea,
            así que la analítica y las grabaciones de sesión se quedan en la UE
            y en su caso no hay transferencia alguna.
          </p>

          <h2 className={h2}>Cuánto tiempo lo guardamos</h2>
          <ul className={ul}>
            <li>
              Consultas que no acaban en trabajo: se borran en un plazo de{" "}
              {ENQUIRY_RETENTION_MONTHS} meses.
            </li>
            <li>
              Si te conviertes en cliente: mientras trabajemos juntos y, después,
              durante el periodo en que la legislación mercantil y fiscal
              española obliga a conservar los registros.
            </li>
            <li>
              Registros del servidor: el periodo de retención que aplica nuestro
              proveedor de alojamiento, que es corto y se mide en días.
            </li>
            <li>
              Analítica: {GA4_RETENTION_MONTHS} meses en Google Analytics, y el
              periodo equivalente en PostHog.
            </li>
            <li>
              Grabaciones de sesión: {SESSION_RECORDING_RETENTION_DAYS} días, y
              después se borran solas.
            </li>
          </ul>
          <p className={p}>
            Puedes pedirnos que borremos una consulta en cualquier momento antes
            de ese plazo y lo haremos, salvo que la ley nos obligue a
            conservarla.
          </p>

          <h2 className={h2}>Tus derechos</h2>
          <p className={p}>
            Según el RGPD puedes pedirnos una copia de lo que tenemos sobre ti,
            corregirlo, borrarlo, limitar lo que hacemos con ello, recibirlo en
            un formato portable u oponerte a que lo tratemos. Cuando el
            tratamiento se apoya en tu consentimiento, puedes retirarlo en
            cualquier momento.
          </p>
          <p className={p}>
            Escribe a{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className={a}>
              {CONTACT_EMAIL}
            </a>
            . Contestaremos en el plazo de un mes y no te pediremos que
            justifiques la solicitud.
          </p>
          <p className={p}>
            Si crees que hemos tratado mal tus datos, puedes reclamar ante una
            autoridad de control. En España es la Agencia Española de Protección
            de Datos (<External href="https://www.aepd.es">aepd.es</External>).
            En el Reino Unido es la Information Commissioner&rsquo;s Office (
            <External href="https://ico.org.uk">ico.org.uk</External>). También
            puedes reclamar ante la autoridad del lugar donde vives.
          </p>

          <h2 className={h2}>Menores</h2>
          <p className={p}>
            Esta web se dirige a empresas y no está pensada para menores de 16
            años. No recogemos su información a sabiendas.
          </p>

          <h2 className={h2}>Cambios en esta política</h2>
          <p className={p}>
            Si cambia lo que hace la web, esta página cambia con ella, y la
            fecha de arriba también. No hay archivo de versiones anteriores; si
            necesitas la de una fecha concreta, pídenosla.
          </p>

          <p className="mt-14 text-body text-ink-soft">
            ¿Dudas sobre algo de esto?{" "}
            <Link href="/es/contact-us/" className={a}>
              Escríbenos
            </Link>
            .
          </p>
        </div>
      </main>

      <SiteFooter locale="es" path="/privacy-policy" />
    </>
  );
}
