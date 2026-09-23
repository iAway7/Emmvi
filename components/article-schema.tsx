import type { Post } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

/**
 * JSON-LD de articulo para los diecisiete posts del blog.
 *
 * Hasta ahora el unico marcado del sitio era el de `OrganizationSchema`, en la
 * home. Los articulos, que son las URLs con historial en el buscador, no
 * declaraban nada: ni que eran articulos, ni de cuando eran, ni de quien.
 *
 * **`author` y `publisher` apuntan al `@id` de la organizacion** en vez de
 * repetir sus datos. Asi los dos marcados se unen en el mismo grafo, y ademas
 * evita la pregunta de quien firma cada articulo: los firma emmvi. Los textos
 * vienen del WordPress anterior y no tienen autor atribuible, y PRODUCT.md
 * pide no repartir nombres propios por el sitio.
 *
 * **`dateModified` es la misma fecha que `datePublished`**, y es deliberado:
 * la fecha que hay es la de publicacion de esta version, la unica que se
 * conoce. Inventar una fecha de modificacion mas reciente para parecer fresco
 * es exactamente el tipo de afirmacion sin respaldo que el proyecto no hace.
 *
 * `image` solo va cuando el articulo trae una de verdad —hoy uno de los
 * diecisiete—. Declarar una imagen que no existe es peor que no declarar
 * ninguna: Google lo comprueba.
 */
export function ArticleSchema({ post }: { post: Post }) {
  const firstImage = post.body.find((block) => block.kind === "image");

  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/${post.slug}/#article`,
    mainEntityOfPage: `${SITE_URL}/${post.slug}/`,
    url: `${SITE_URL}/${post.slug}/`,
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.published,
    inLanguage: "en",
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    ...(firstImage ? { image: `${SITE_URL}${firstImage.src}` } : {}),
  };

  return (
    <script
      type="application/ld+json"
      // Mismo escapado que OrganizationSchema. Aqui importa mas: el titulo y
      // la descripcion salen de los ficheros de content/, no de constantes,
      // asi que un "<" suelto en un articulo cerraria la etiqueta.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(article).replace(/</g, "\\u003c"),
      }}
    />
  );
}
