import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CONTACT_EMAIL, SITE_NAME, controller, pageMetadata } from "@/lib/site";

/**
 * Aviso legal en español: la traduccion de app/(en)/legal-notice/page.tsx,
 * apartado por apartado y con la misma estructura.
 *
 * Es una pagina aparte y no una plantilla con diccionario, a diferencia de la
 * home o el contacto, porque es prosa con enlaces dentro y cambia una vez al
 * año. Convertirla en datos costaria mas de lo que ahorra. **El precio es que
 * un cambio en la version inglesa hay que repetirlo aqui a mano**, y por eso
 * las dos comparten `LAST_UPDATED`: si las fechas no coinciden, alguien se
 * olvido de una.
 *
 * Los datos del responsable salen de lib/site.ts, como en la inglesa: aqui no
 * se escribe a mano ni el nombre ni el NIF.
 */

export const metadata: Metadata = pageMetadata({
  path: "/legal-notice",
  locale: "es",
  title: "Aviso legal",
  description:
    "Quién responde de esta web, qué puedes hacer con ella y qué ley se aplica.",
});

/** Misma fecha que la version inglesa. Se cambian las dos a la vez. */
const LAST_UPDATED = "20 de septiembre de 2026";

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";

const h2 = "mt-14 text-ink";
const p = "mt-5 text-body text-pretty text-ink-soft";
const a =
  "text-ink underline underline-offset-[3px] transition-colors hover:text-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet";

export default function LegalNoticeEs() {
  return (
    <>
      <SiteHeader locale="es" path="/legal-notice" />

      <main className={`${wrap} py-16 lg:py-24`}>
        <h1 className="max-w-[16em] text-ink">
          Aviso legal
        </h1>
        <p className="mt-6 max-w-[44ch] text-lede text-pretty text-ink-soft">
          Quién responde de esta web, qué puedes hacer con ella y qué ley se
          aplica si algo va mal.
        </p>
        <p className="mt-6 font-mono text-small text-ink-soft">
          Última actualización: {LAST_UPDATED}
        </p>

        <div className="doc mt-12 max-w-[68ch]">
          <h2 className={`${h2} mt-10`}>Quién está detrás de esta web</h2>
          <p className={p}>
            {SITE_NAME} es el nombre comercial de {controller.legalName}, NIF{" "}
            {controller.taxId}, con domicilio en {controller.registeredAddress}.
          </p>
          <p className={p}>
            {SITE_NAME} es una marca registrada en España. El titular es una
            persona física y no una sociedad, así que no hay datos de registro
            mercantil que dar.
          </p>
          <p className={p}>
            La forma de escribirnos es{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className={a}>
              {CONTACT_EMAIL}
            </a>
            . Lo lee una persona, y es la dirección que sirve para cualquier
            cosa de esta página.
          </p>

          <h2 className={h2}>Para qué es esta web</h2>
          <p className={p}>
            Cuenta lo que hacemos y te permite escribirnos o reservar una
            llamada. Aquí no se vende nada: no hay tienda, ni pago, ni cuenta
            que crear. Si acabamos trabajando juntos, las condiciones de ese
            trabajo están en la propuesta y el contrato que firmemos, no en
            esta página.
          </p>

          <h2 className={h2}>Uso de la web</h2>
          <p className={p}>
            Puedes leerla, citarla indicando la fuente y enlazarla. Lo que no
            puedes hacer es la lista corta que cabría esperar: atacarla,
            rastrearla de forma que la degrade para los demás, usar el
            formulario de contacto para enviar comunicaciones comerciales no
            solicitadas, o intentar acceder a partes que no son públicas.
          </p>
          <p className={p}>
            Si usas el formulario de contacto, lo que escribes es tuyo y eres
            responsable de ello, incluido tener derecho a compartir los datos de
            otras personas que pongas en el mensaje.
          </p>

          <h2 className={h2}>Qué es de quién</h2>
          <p className={p}>
            El diseño, los textos, el código y el nombre y la marca {SITE_NAME}{" "}
            son nuestros. Visitar la web no te da licencia para reutilizarlos
            más allá de la cita y el enlace de arriba.
          </p>
          <p className={p}>
            En esta web aparecen nombres, logotipos y marcas de otras empresas:
            las herramientas que usamos y las plataformas de las que
            escribimos. Pertenecen a sus dueños. Las mencionamos para ser
            concretos sobre con qué trabajamos, y esa mención no es una
            asociación, un respaldo ni una certificación salvo que la página lo
            diga con todas las letras.
          </p>
          <p className={p}>
            El trabajo hecho para clientes se muestra con su permiso. Sus marcas
            siguen siendo suyas.
          </p>

          <h2 className={h2}>El blog es opinión, no asesoramiento</h2>
          <p className={p}>
            Los artículos nombran herramientas, proveedores de alojamiento y
            plataformas concretas, y dicen lo que pensamos de ellas. Es una
            opinión escrita en un momento dado, desde nuestra propia
            experiencia. No es asesoramiento profesional, técnico, financiero
            ni legal, y nadie paga por aparecer: en esta web no hay enlaces de
            afiliado.
          </p>
          <p className={p}>
            El software cambia más rápido que los artículos. Comprueba las
            condiciones, precios y funciones actuales con el proveedor antes de
            decidir nada por algo que hayas leído aquí.
          </p>

          <h2 className={h2}>Enlaces a otras webs</h2>
          <p className={p}>
            Enlazamos hacia fuera cuando es útil. No controlamos esas webs, no
            respondemos de lo que contienen o hacen, y un enlace no es un
            respaldo de todo lo que hay al otro lado.
          </p>

          <h2 className={h2}>Disponibilidad y exactitud</h2>
          <p className={p}>
            Mantenemos la web funcionando y veraz, pero no prometemos que esté
            disponible sin interrupciones ni libre de errores. El contenido
            puede cambiar o retirarse sin aviso. Cuando una página indica una
            fecha, describe cómo estaban las cosas en esa fecha.
          </p>

          <h2 className={h2}>Tus datos</h2>
          <p className={p}>
            Qué recoge esta web, quién lo trata y cómo pedir que se borre está
            en la{" "}
            <Link href="/es/privacy-policy/" className={a}>
              política de privacidad
            </Link>
            , en palabras llanas y no en jerga legal.
          </p>

          <h2 className={h2}>Qué ley se aplica</h2>
          <p className={p}>
            Este aviso se rige por la ley española y, en particular, por la Ley
            34/2002, de servicios de la sociedad de la información y de
            comercio electrónico (LSSI-CE). Cualquier conflicto se resuelve en
            los tribunales que determinen las normas aplicables. Si eres
            consumidor, normalmente son los de tu lugar de residencia, y nada
            de lo escrito aquí te quita los derechos que tengas según la ley de
            tu país.
          </p>

          <p className="mt-14 text-body text-ink-soft">
            ¿Algo de esto no está claro o está mal?{" "}
            <Link href="/es/contact-us/" className={a}>
              Dínoslo
            </Link>{" "}
            y lo corregimos.
          </p>
        </div>
      </main>

      <SiteFooter locale="es" path="/legal-notice" />
    </>
  );
}
