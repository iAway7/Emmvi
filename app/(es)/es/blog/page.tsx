import type { Metadata } from "next";

import { BlogPage, blogCopy } from "@/components/pages/blog";
import { pageMetadata } from "@/lib/site";

/** /es/blog: la misma portada, con los articulos (en ingles) y la nota que lo dice. */
export const metadata: Metadata = pageMetadata({
  path: "/blog",
  locale: "es",
  title: blogCopy.es.title,
  description: blogCopy.es.description,
});

export default function BlogIndexEs() {
  return <BlogPage locale="es" />;
}
