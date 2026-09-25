import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleSchema } from "@/components/article-schema";
import { CtaLink } from "@/components/cta-link";
import { PostBody } from "@/components/post-body";
import { ShareLinks } from "@/components/share-links";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { findPost, postSlugs, readingTime, relatedPosts } from "@/lib/posts";
import { pageMetadata, SITE_URL } from "@/lib/site";
import { tableOfContents } from "@/lib/toc";

/**
 * Los articulos del blog, **en la raiz y no bajo /blog/**, porque asi los tenia
 * el WordPress anterior y son esas URLs las que estan indexadas:
 * emmvi.com/top-5-best-ai-tools-for-images, no /blog/top-5-...
 *
 * Una ruta dinamica en la raiz da miedo con razon: `[slug]` podria tragarse
 * todo el sitio. No lo hace, por dos motivos que conviene no tocar:
 *
 *  1. En el App Router un segmento estatico gana siempre al dinamico, asi que
 *     /contact, /about-us, /blog y /coming-soon siguen resolviendo a su propia
 *     pagina. /services/seo tampoco entra: `[slug]` es un solo segmento.
 *  2. `dynamicParams = false` hace que cualquier slug que no salga de
 *     `generateStaticParams` devuelva 404 en vez de intentar renderizarse.
 *
 * Sin el punto 2, una URL inventada como /cualquier-cosa entraria aqui y se
 * caeria dentro del componente en vez de dar un 404 limpio.
 *
 * ## La plantilla es la del WordPress
 *
 * Reconstruida desde "Single Post" del backup (`elementor_library` ID 2652,
 * la que llevaba la condicion `include/singular/post`): portada centrada con
 * el titular a 4rem y peso 800, indice de contenidos en columna, imagen
 * destacada, cuerpo a 18px, "Share the Post" y dos articulos relacionados.
 *
 * Tres cosas del original no vuelven:
 *
 * - **El bloque de suscripcion** ("Get Updates every Week!"), por lo mismo que
 *   en /blog: no hay lista de correo detras.
 * - **El autor en la cabecera.** El original ponia fecha y autor; el autor no
 *   es un dato que tengamos por articulo y, sobre todo, firmar diecisiete
 *   piezas con un nombre propio empieza a decir cuanta gente hay. Ver
 *   PRODUCT.md.
 * - **El "Load More"** de los relacionados. Son tres, fijos.
 *
 * Se queda el CTA del final, que es del posicionamiento nuevo y no del Figma
 * viejo: sin el, el blog es trafico que entra y se va.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return {};

  return pageMetadata({
    path: `/${slug}`,
    title: post.title,
    description: post.description,
    article: { publishedTime: post.published },
  });
}

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = findPost(slug);
  // Inalcanzable con `dynamicParams = false`, pero es lo que le dice a
  // TypeScript que abajo `post` ya no es undefined.
  if (!post) notFound();

  const toc = tableOfContents(post.body);
  const related = relatedPosts(post);
  const minutos = readingTime(post.body);
  const fecha = new Date(post.published).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <SiteHeader />

      <main className={`${wrap} pt-12 pb-16 lg:pt-16 lg:pb-24`}>
        <ArticleSchema post={post} />

        {/* Portada. El original la centraba sobre 970px; va al ancho del
            contenedor —1192px en escritorio, que es el `--container-wrap` de
            1296 menos los dos `--spacing-gut` de 52— para que el titular y la
            imagen caigan en la misma caja que la reticula de abajo.

            Sin `max-w` propio: se hereda del `wrap` y asi el dia que cambie el
            contenedor no queda una medida suelta contradiciendolo. */}
        {/* La vuelta al indice va a la izquierda y fuera del bloque centrado:
            es navegacion, no parte de la portada, y centrada se leia como el
            primer renglon del titular. */}
        <Link
          href="/blog/"
          className="inline-flex min-h-[44px] items-center rounded-sm text-small text-ink-soft transition-colors hover:text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
        >
          &larr; All articles
        </Link>

        <div className="mt-4 text-center">
          <p>
            <span className="inline-flex w-fit items-center rounded-sm bg-violet-wash px-2.5 py-1 text-small font-medium text-violet">{post.category}</span>
          </p>
          <h1 className="mt-3 text-display text-balance text-ink">
            {post.title}
          </h1>
          {/* La entradilla es la `rank_math_description` del WordPress, o sea
              texto escrito para el resultado de busqueda. Se publica igual:
              resume el articulo antes de pedir el scroll, y reescribir
              diecisiete no es trabajo de maquetacion. Va a 44 caracteres de
              medida aunque el bloque sea ancho, que es lo que la mantiene
              legible centrada. */}
          <p className="mx-auto mt-6 max-w-[44ch] text-lede text-pretty text-ink-soft">
            {post.lede}
          </p>
          {/* Sin firma ni avatar: el articulo lo publica el sitio, y repetir
              la marca dentro de una pagina que ya la lleva en la cabecera no
              anade nada. Queda lo que el lector si usa para decidir si entra
              ahora o lo deja para luego.

              El tiempo de lectura se calcula de las palabras del cuerpo, no se
              escribe: ver `readingTime`. En mono, como el resto de artefactos
              reales del sitio. */}
          <p className="mt-6 font-mono text-small text-ink-soft">
            {minutos} min read
            <span aria-hidden="true"> · </span>
            <time dateTime={post.published}>{fecha}</time>
          </p>
        </div>

        <article className="mt-12 lg:mt-16">
          {post.image ? (
            <Image
              src={post.image.src}
              alt={post.image.alt}
              width={post.image.width}
              height={post.image.height}
              priority
              className="aspect-[16/9] w-full rounded-md bg-paper-alt object-cover"
              sizes="(min-width: 1296px) 1192px, 92vw"
            />
          ) : null}

          {/* Indice a un lado y cuerpo al otro, como el original. El indice va
              primero en el marcado: en movil, donde la rejilla se apila, es
              donde tiene sentido —antes del texto, no despues. */}
          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-16">
            {toc.length > 1 ? (
              <nav
                aria-labelledby="toc-title"
                className="lg:sticky lg:top-28 lg:self-start"
              >
                <h2
                  id="toc-title"
                  className="border-b border-line pb-3 font-mono text-small tracking-wide text-ink-soft uppercase"
                >
                  Table of Contents
                </h2>
                <ol className="mt-4 space-y-2.5">
                  {toc.map((t) => (
                    <li key={t.id}>
                      <a
                        href={`#${t.id}`}
                        className="text-small text-ink-soft underline decoration-line underline-offset-[3px] transition-colors hover:text-violet hover:decoration-violet focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
                      >
                        {t.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : (
              // Sin indice, el cuerpo no se queda en la columna estrecha.
              <div aria-hidden="true" className="hidden lg:block" />
            )}

            <div>
              <PostBody blocks={post.body} />

              <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-line pt-6">
                <p className="text-ui font-medium text-ink">
                  Share the post:
                </p>
                <ShareLinks
                  url={`${SITE_URL}/${post.slug}/`}
                  title={post.title}
                />
              </div>

              {/* La llamada va aqui y no tras los relacionados: este es el
                  momento en que alguien acaba de leer. Despues de una fila de
                  "sigue leyendo" ya se ha ido a otro sitio.

                  Dentro de la columna del texto, asi que hereda su ancho en vez
                  de cruzar la pagina por debajo del indice. */}
              <aside className="mt-10 rounded-lg bg-paper-panel p-8 lg:p-10">
                <h2 className="text-h3 text-balance text-ink">
                  Want this handled for you?
                </h2>
                <p className="mt-4 text-body text-pretty text-ink-soft">
                  We build the website and the system behind it, so the work
                  that happens after someone fills in a form does not depend on
                  anyone remembering.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <CtaLink href="/contact-us/">Get in touch</CtaLink>
                  <CtaLink href="/blog/" variant="ghost">
                    Read more articles
                  </CtaLink>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {related.length > 0 ? (
          <section className="mt-20 border-t border-line pt-12">
            <h2 className="text-h2 text-balance text-ink">Related posts</h2>
            {/* Tres, que es lo que devuelve `relatedPosts`: la fila queda
                llena y sin huecos. */}
            <ul className="mt-10 grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/${r.slug}`}
                    className="lift group flex h-full flex-col overflow-hidden rounded-md border border-line bg-paper transition-colors hover:border-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
                  >
                    {r.image ? (
                      <Image
                        src={r.image.src}
                        alt={r.image.alt}
                        width={r.image.width}
                        height={r.image.height}
                        loading="lazy"
                        className="aspect-[16/9] w-full bg-paper-alt object-cover"
                        sizes="(min-width: 640px) 38rem, 90vw"
                      />
                    ) : null}
                    <div className="flex flex-1 flex-col p-6">
                      <p className="inline-flex w-fit items-center rounded-sm bg-violet-wash px-2.5 py-1 text-small font-medium text-violet">
                        {r.category}
                      </p>
                      <h3 className="mt-2 text-h3 text-balance text-ink group-hover:text-violet">
                        {r.title}
                      </h3>
                      <p className="mt-3 flex-1 text-copy text-pretty text-ink-soft">
                        {r.lede}
                      </p>
                      <span
                        aria-hidden="true"
                        className="mt-5 text-ui font-medium text-violet"
                      >
                        Read more &raquo;
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

      </main>

      <SiteFooter />
    </>
  );
}
