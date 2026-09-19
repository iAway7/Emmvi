import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

/**
 * Icono para iOS. `app/icon.svg` ya cubre la pestaña del navegador y los
 * resultados de Google, pero Safari no usa un SVG al guardar la pagina en la
 * pantalla de inicio: sin `apple-icon` pone una captura de la pagina.
 *
 * Se dibuja a partir del propio icon.svg en vez de ser otro archivo: asi una
 * correccion del icono llega a los dos sitios. Va sobre un fondo negro opaco
 * porque el SVG tiene las esquinas redondeadas y iOS redondea otra vez por su
 * cuenta; sin el fondo, las cuatro esquinas quedarian transparentes.
 *
 * Sin `fonts`: la tarjeta no lleva texto, solo trazados.
 */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const svg = await readFile(path.join(process.cwd(), "app", "icon.svg"));
  const dataUri = `data:image/svg+xml;base64,${svg.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#000000",
        }}
      >
        <img src={dataUri} alt="" width={size.width} height={size.height} />
      </div>
    ),
    size,
  );
}
