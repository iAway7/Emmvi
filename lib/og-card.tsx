import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { WORDMARK_PATHS, WORDMARK_VIEWBOX } from "@/components/wordmark";

/**
 * La miniatura que sale al pegar un enlace de emmvi.com en WhatsApp, LinkedIn,
 * Slack o X. Hasta ahora no habia ninguna, asi que cada enlace salia como un
 * rectangulo gris con la URL — justo cuando el visitante llega desde outreach
 * en frio y el enlace es lo primero que ve de la marca.
 *
 * Se dibuja aqui y no es un PNG en public/ porque asi el texto sale del mismo
 * sitio que el de la pagina: cambiar el posicionamiento no deja una imagen
 * vieja contradiciendo al titulo.
 *
 * La composicion es la de la pagina de espera —oscuro, violeta claro, wordmark
 * arriba— para que el enlace y la pagina que abre se reconozcan como lo mismo.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * DM Sans en TTF, en assets/ y no en public/: se usa solo al generar la imagen
 * en build, y publicarla la serviria al navegador sin que nadie la pida.
 *
 * next/font/google ya descarga DM Sans para el sitio, pero deja woff2 en
 * .next/static, y satori no lee woff2. De ahi la segunda copia. Son las dos
 * instancias estaticas que sirve Google Fonts (400 y 800), subconjunto latino,
 * 48 kB cada una. Licencia en assets/fonts/OFL.txt.
 */
async function brandFonts() {
  const dir = path.join(process.cwd(), "assets", "fonts");
  const [regular, extraBold] = await Promise.all([
    readFile(path.join(dir, "DMSans-Regular.ttf")),
    readFile(path.join(dir, "DMSans-ExtraBold.ttf")),
  ]);

  return [
    { name: "DM Sans", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "DM Sans", data: extraBold, weight: 800 as const, style: "normal" as const },
  ];
}

/**
 * Violeta claro, no el violeta de marca: sobre el fondo oscuro de la tarjeta
 * el de marca se queda en 2.61:1 y casi desaparece. Es la misma correccion que
 * ya lleva la pagina de espera, medida en PRODUCT.md.
 */
const VIOLET_LIGHT = "#847ff8";

/**
 * @param headline Titular de la tarjeta. Los saltos de linea se respetan: a
 *   este tamano el texto cabe de varias formas y ninguna la elige bien sola,
 *   asi que el corte se escribe a mano donde la frase se parte de verdad.
 *   Queda como parametro para que anadir una miniatura propia a una pagina sea
 *   un archivo de tres lineas (`opengraph-image.tsx` en su carpeta) en vez de
 *   copiar esta composicion.
 */
export async function renderOgCard(headline: string) {
  const lines = headline.split("\n");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 80px",
          backgroundColor: "#000000",
          // Mismo degradado radial que la pagina de espera.
          backgroundImage:
            "radial-gradient(ellipse at 50% 38%, #1a1a1a 0%, #000000 70%)",
          fontFamily: "DM Sans",
        }}
      >
        <svg
          width={195}
          height={55}
          viewBox={WORDMARK_VIEWBOX}
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
        >
          {WORDMARK_PATHS.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </svg>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* El rombo de la pagina de espera, aqui como vineta del antetitulo. */}
            <div
              style={{
                width: 9,
                height: 9,
                marginRight: 16,
                backgroundColor: VIOLET_LIGHT,
                transform: "rotate(45deg)",
              }}
            />
            <div
              style={{
                fontSize: 23,
                letterSpacing: 5.5,
                textTransform: "uppercase",
                color: VIOLET_LIGHT,
              }}
            >
              Websites and automation
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 30,
              // 44 dejaba la segunda linea a 17 px del margen: cabe, pero sin
              // holgura para un cambio de texto. A 42 sobran 60 y no se nota.
              fontSize: 42,
              fontWeight: 800,
              lineHeight: 1.22,
              letterSpacing: -1.1,
              color: "#ffffff",
            }}
          >
            {lines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 30,
            borderTop: "1px solid rgba(255,255,255,0.14)",
            fontSize: 22,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <div style={{ color: "#ffffff" }}>emmvi.com</div>
          <div>Installers · Home services · Small teams</div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: await brandFonts() },
  );
}
