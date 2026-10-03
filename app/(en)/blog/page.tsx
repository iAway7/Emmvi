import type { Metadata } from "next";

import { BlogPage, blogCopy } from "@/components/pages/blog";
import { pageMetadata } from "@/lib/site";

/** Portada del blog en ingles. Composicion y texto en components/pages/blog.tsx. */
export const metadata: Metadata = pageMetadata({
  path: "/blog",
  title: blogCopy.en.title,
  description: blogCopy.en.description,
});

export default function BlogIndex() {
  return <BlogPage locale="en" />;
}
