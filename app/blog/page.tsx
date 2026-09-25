import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { posts } from "@/lib/posts";
import { pageMetadata } from "@/lib/site";

/**
 * Indice del blog. Otra URL que el WordPress anterior dejo indexada.
 *
 * Existe sobre todo para que los diecisiete articulos no queden huerfanos: una
 * pagina a la que no enlaza nadie desde dentro del sitio se rastrea peor y
 * pesa menos, por buena que sea. Desde aqui y desde el footer, cada articulo
 * tiene al menos dos vias de entrada.
 *
 * ## La retícula es la del WordPress
 *
 * Reconstruida desde la plantilla "Blog" del backup (`elementor_library`
 * ID 2632, skin `archive_cards`): tarjeta con borde, imagen arriba, titular,
 * extracto y un enlace de lectura. Del archivo salen tambien las medidas —
 * titular a 24px sobre 36 de linea, extracto a 16 sobre 24, 32px de aire entre
 * tarjeta y tarjeta, 16 bajo el titular— que aqui se expresan con los tokens
 * del sitio en vez de a pelo.
 *
 * Tres cosas del original **no** se reconstruyen, y no es por falta de datos:
 *
 * - **El radio de 20px.** DESIGN.md tiene 8, 12 y 32; una cuarta medida suelta
 *   solo para esta pagina es deuda. Va con 12, que es el de las tarjetas del
 *   resto del sitio.
 * - **El formulario de suscripcion** ("Get Updates every Week!"). No hay lista
 *   de correo ni nada que recoja esas direcciones: seria pedir un email para
 *   no mandar nada. Cuando exista la lista, el bloque del Figma esta descrito
 *   en el README.
 * - **"Load More" con scroll infinito.** Diecisiete articulos caben de una vez;
 *   paginar aqui es maquinaria para un problema que no existe.
 *
 * El h1 del WordPress era "Mastering the Digital Sphere: Our Blog's Knowledge
 * Repository", que es el lenguaje de consultora que PRODUCT.md lista como
 * anti-referencia. Se queda el titular corto.
 */
export const metadata: Metadata = pageMetadata({
  path: "/blog",
  title: "Notes on Websites, Follow-Up and Automation",
  description:
    "Notes on websites, follow-up and the tools behind them, for people who run the business rather than the marketing.",
});

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";

export default function BlogIndex() {
  return (
    <>
      <SiteHeader />

      <main className={`${wrap} pt-16 pb-16 lg:pt-24 lg:pb-24`}>
        {/* Portada centrada, como la del articulo: las dos paginas del blog
            abren igual.

            El h1 deja de ser "Blog" a secas. Centrado y a tamano display, una
            palabra sola se lee como un error de maquetacion, y ademas la
            palabra ya esta en la nav y en la pestana: el titular puede decir
            de que va en vez de repetir donde estas. El del WordPress era
            "Mastering the Digital Sphere: Our Blog's Knowledge Repository",
            que es el lenguaje de consultora que PRODUCT.md lista como
            anti-referencia. */}
        <div className="mx-auto max-w-[900px] text-center">
          <h1 className="text-display text-balance text-ink">
            Notes on websites and the systems behind them
          </h1>
          <p className="mx-auto mt-6 max-w-[50ch] text-lede text-pretty text-ink-soft">
            Written for people who run the business rather than the marketing.
          </p>
        </div>

        <ul className="mt-16 grid list-none gap-8 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/${post.slug}`}
                className="lift group flex h-full flex-col overflow-hidden rounded-md border border-line bg-paper transition-colors hover:border-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-violet"
              >
                {/* Las destacadas del WordPress vienen en cinco proporciones
                    distintas —de 750x401 a 1066x1600— asi que el hueco es fijo
                    y recorta. Sin esto, la retícula se descuadra sola. */}
                {post.image ? (
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    width={post.image.width}
                    height={post.image.height}
                    className="aspect-[16/9] w-full bg-paper-alt object-cover"
                    sizes="(min-width: 1024px) 26rem, (min-width: 640px) 45vw, 90vw"
                  />
                ) : null}

                <div className="flex flex-1 flex-col p-6">
                  {/* La categoria va aqui y no encima de la imagen, que es
                      donde la ponia el skin del WordPress: las destacadas
                      llevan su propia composicion y un badge flotando tapa lo
                      que haya debajo. Sobre papel no molesta a nada y ademas
                      no depende del contraste de cada foto. */}
                  <p className="inline-flex w-fit items-center rounded-sm bg-violet-wash px-2.5 py-1 text-small font-medium text-violet">
                    {post.category}
                  </p>
                  <h2 className="mt-2 text-h3 text-balance text-ink group-hover:text-violet">
                    {post.title}
                  </h2>
                  {/* La entradilla, no `description`: aquella es la meta
                      description del WordPress —168 caracteres de media— y
                      llenaba cinco lineas desiguales. `lede` esta reescrito a
                      menos de 80 y da dos. `description` sigue intacta donde
                      hace falta, que es en la metadata. */}
                  <p className="mt-4 flex-1 text-copy text-pretty text-ink-soft">
                    {post.lede}
                  </p>
                  {/* El "Read More »" del original. No es un enlace propio: la
                      tarjeta entera ya lo es, y anidar uno dentro seria un
                      segundo destino para el teclado sin nada nuevo detras. */}
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
      </main>

      <SiteFooter />
    </>
  );
}
