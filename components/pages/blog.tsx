import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Locale } from "@/lib/i18n";
import { posts, readingMinutes } from "@/lib/posts";

/**
 * Portada del blog, en los dos idiomas. Las rutas app/(en)/blog y
 * app/(es)/es/blog solo eligen idioma.
 *
 * **Los articulos siguen en ingles.** Se publican solos cada dia (ver README,
 * "El blog se publica solo") y traducirlos es otro proyecto. La portada en
 * español existe para que /es/ no tenga un agujero en el menu, lista los
 * mismos articulos y lo dice en la entradilla: quien pulse sabe a que idioma
 * va. Cuando haya articulos en español, esta plantilla filtra por idioma y
 * la nota desaparece.
 */
export const blogCopy = {
  en: {
    title: "Notes on Websites, Follow-Up and Automation",
    description:
      "Notes on websites, follow-up and the tools behind them, for people who run the business rather than the marketing.",
    heading: "Notes on websites and the systems behind them",
    lede: "Written for people who run the business rather than the marketing.",
    readMore: "Read more",
  },
  es: {
    title: "Notas sobre webs, seguimiento y automatización",
    description:
      "Notas sobre webs, seguimiento y las herramientas de detrás, para quien lleva el negocio y no el marketing.",
    heading: "Notas sobre webs y sus sistemas",
    lede: "Escritas para quien lleva el negocio, no el marketing. Por ahora, en inglés.",
    readMore: "Leer (en inglés)",
  },
} satisfies Record<Locale, Record<string, string>>;

const wrap =
  "mx-auto w-full max-w-[var(--container-wrap)] px-6 lg:px-[var(--spacing-gut)]";

export function BlogPage({ locale }: { locale: Locale }) {
  const t = blogCopy[locale];

  return (
    <>
      <SiteHeader locale={locale} path="/blog" />

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
          <h1 className="text-ink">{t.heading}</h1>
          <p className="mx-auto mt-6 max-w-[50ch] text-lede text-pretty text-ink-soft">
            {t.lede}
          </p>
        </div>

        <ul className="mt-16 grid list-none gap-8 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              {/* Los articulos viven en la raiz y en ingles; desde /es/ el
                  enlace lleva alli y el `hrefLang` lo declara. */}
              <Link
                href={`/${post.slug}`}
                hrefLang="en"
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

                <div className="flex flex-1 flex-col p-6" lang="en">
                  {/* La categoria va aqui y no encima de la imagen, que es
                      donde la ponia el skin del WordPress: las destacadas
                      llevan su propia composicion y un badge flotando tapa lo
                      que haya debajo. Sobre papel no molesta a nada y ademas
                      no depende del contraste de cada foto. */}
                  <div className="flex items-center gap-3">
                    <p className="inline-flex w-fit items-center rounded-sm bg-violet-wash px-2.5 py-1 text-small font-medium text-violet">
                      {post.category}
                    </p>
                    {/* Los minutos se cuentan del cuerpo (lib/posts.ts), no se
                        escriben a mano: asi no se quedan viejos al editar. */}
                    <p className="text-small text-ink-soft">
                      {readingMinutes(post.body)} min
                    </p>
                  </div>
                  <h3 className="mt-2 text-ink group-hover:text-violet">
                    {post.title}
                  </h3>
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
                    lang={locale}
                    className="mt-5 text-ui font-medium text-violet"
                  >
                    {t.readMore} &raquo;
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <SiteFooter locale={locale} path="/blog" />
    </>
  );
}
