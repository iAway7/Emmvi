import type { Metadata } from "next";

import { ContactPage } from "@/components/pages/contact";
import { contactCopy } from "@/lib/copy/contact";
import { pageMetadata } from "@/lib/site";

/**
 * /es/contact-us. La ruta conserva el slug ingles a proposito: asi la
 * correspondencia entre idiomas es mecanica (lib/i18n.ts) y no hay que
 * mantener una tabla de slugs traducidos. El titulo y el contenido si van en
 * español, que es lo que lee la persona y el buscador.
 */
export const metadata: Metadata = pageMetadata({
  path: "/contact-us",
  locale: "es",
  title: contactCopy.es.meta.title,
  description: contactCopy.es.meta.description,
});

export default function ContactEs() {
  return <ContactPage locale="es" />;
}
