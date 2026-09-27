import { CONTACT_EMAIL, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

/**
 * JSON-LD de organizacion, para que el buscador sepa que "emmvi" es una
 * empresa y no una palabra suelta, y con que logo y correo asociarla.
 *
 * **Va en el layout, o sea en todas las paginas.** Estuvo solo en la home
 * hasta 2026-09-27, siguiendo la recomendacion de Google de declararlo en una
 * sola. Se cambio por quien lee el sitio ahora: los modelos que responden
 * preguntas se traen *una* URL —casi siempre un articulo, que es lo que
 * contesta a una busqueda— y alli no habia nada que dijera de quien era el
 * sitio. Ademas `ArticleSchema` y `FaqSchema` apuntan al `@id`
 * `/#organization`, que sin esto resolvia a una pagina distinta de la leida.
 *
 * El coste es ir contra esa recomendacion de Google. Es asumible: los
 * consumidores de JSON-LD unifican por `@id`, que es para lo que existe, asi
 * que repetirlo no crea dos organizaciones.
 *
 * **Se declara solo lo verificable**, por la misma regla que el resto del
 * sitio. Nada de `numberOfEmployees` —PRODUCT.md prohibe dar el tamano del
 * equipo— y nada de `areaServed` mientras el footer diga "Europa y America" y
 * la pagina de espera diga "Reino Unido, EE. UU. y Espana": son dos alcances
 * distintos y el marcado no es el sitio donde arbitrarlo.
 *
 * **Tampoco `aggregateRating`, y ahora menos que antes.** Este comentario dijo
 * durante un tiempo que faltaban reseñas publicas que lo respaldaran; desde
 * septiembre de 2026 hay tres en la ficha de Google, asi que conviene dejar
 * claro que el motivo es otro y no ha caducado: Google no admite que un sitio
 * publique el marcado de sus **propias** reseñas. Es "self-serving review
 * content", no da resultado enriquecido y expone a una accion manual. La
 * valoracion vive en la ficha, que es donde Google la lee de primera mano.
 *
 * Tampoco `address`, aunque el aviso legal lo publique porque la LSSI-CE
 * obliga: alli es el domicilio de una persona fisica cumpliendo una norma, y
 * pasarlo a dato estructurado lo convierte en otra cosa —invita a tratar el
 * sitio como negocio local con sede visitable—. Esa es una decision del
 * titular, no de la maquetacion.
 *
 * Sin `WebSite` + `SearchAction`: el sitio no tiene buscador, y declararlo
 * seria pedirle a Google que enseñe una caja de busqueda que no existe.
 */

/**
 * Los perfiles de emmvi en otros sitios.
 *
 * **Es el campo que mas falta hacia de todo este fichero.** Un modelo no
 * recomienda un negocio del que solo habla su propio dominio: necesita verlo
 * corroborado fuera. `sameAs` es como se declara "esta empresa y ese perfil
 * son la misma", y es lo que ata la entidad a LinkedIn o a la ficha de Google.
 *
 * El campo entero desaparece del marcado si la lista se queda vacia: declarar
 * `sameAs: []` no dice nada, y un perfil inventado es peor que ninguno.
 *
 * **Las URLs van canonicas, no acortadas.** Un `share.google/...` o un
 * `bit.ly` es un salto que puede caducar y que no identifica nada por si
 * mismo; esto es un campo que declara identidad, y tiene que apuntar al sitio
 * de verdad.
 */
const perfiles: readonly string[] = [
  "https://www.linkedin.com/company/emmvi/",
  /**
   * La ficha de Google, por su entidad de Knowledge Graph (`/g/11vsrtn_bw`)
   * en vez de por la URL de Maps.
   *
   * Que ese identificador exista ya es la noticia: significa que Google no
   * trata "emmvi" como una cadena de texto sino como una empresa con ficha
   * propia, que es el paso que hay que dar antes de que nadie te recomiende.
   *
   * Google ignorara este `sameAs` —conoce su propia ficha y la ata por el
   * perfil verificado, no por lo que diga el sitio—. Va para los demas: los
   * modelos que no son de Google no tienen ese atajo y esto les confirma que
   * detras del dominio hay un negocio con direccion y reseñas.
   */
  "https://www.google.com/search?kgmid=/g/11vsrtn_bw",
];

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
    // El sitio esta en ingles y es el idioma en que se responde.
    availableLanguage: "en",
  },
  ...(perfiles.length > 0 ? { sameAs: perfiles } : {}),
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
