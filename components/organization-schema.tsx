import { CONTACT_EMAIL, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

/**
 * JSON-LD de organizacion, para que el buscador sepa que "emmvi" es una
 * empresa y no una palabra suelta, y con que logo y correo asociarla.
 *
 * Solo en la home: Google pide que el marcado de organizacion viva en una
 * pagina, no repetido en las siete.
 *
 * **Se declara solo lo verificable**, por la misma regla que el resto del
 * sitio. Nada de `numberOfEmployees` —PRODUCT.md prohibe dar el tamano del
 * equipo—, nada de `aggregateRating` sin reseñas publicas que lo respalden, y
 * nada de `areaServed` mientras el footer diga "Europa y America" y la pagina
 * de espera diga "Reino Unido, EE. UU. y Espana": son dos alcances distintos y
 * el marcado no es el sitio donde arbitrarlo.
 *
 * Sin `WebSite` + `SearchAction`: el sitio no tiene buscador, y declararlo
 * seria pedirle a Google que enseñe una caja de busqueda que no existe.
 */
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/emmvi-mark.svg`,
  description: SITE_TAGLINE,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: CONTACT_EMAIL,
  },
};

export function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      // El objeto es estatico y no lleva entrada de usuario, pero escapar "<"
      // es lo que impide que un texto cualquiera cierre la etiqueta el dia que
      // alguien meta aqui un campo que venga de fuera.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
      }}
    />
  );
}
