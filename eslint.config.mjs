/**
 * eslint-config-next 16 exporta flat config nativa. El envoltorio FlatCompat
 * que genera create-next-app@15 provoca "Converting circular structure to JSON"
 * contra esta version, asi que se importa directo.
 */
import coreWebVitals from "eslint-config-next/core-web-vitals";
import typescript from "eslint-config-next/typescript";

/**
 * Un `text-[18px]` suelto en una clase. La escala tipografica vive entera en
 * app/globals.css (text-display, h2, h3, h4, lede, body, copy, ui, small,
 * stat) y cualquier tamano nuevo se anade alli, no en la pagina: asi es como
 * el sitio anterior acabo con 46 tamanos a mano y un h2 mas grande que el h1
 * en movil. Si de verdad hace falta una excepcion —un glifo decorativo— se
 * desactiva en esa linea con el motivo al lado.
 */
const ARBITRARY_TEXT_SIZE = "(^|\\s|:)text-\\[[0-9.]+(rem|px|em)\\]";
const noArbitraryTextSize = {
  files: ["app/**/*.tsx", "components/**/*.tsx"],
  rules: {
    "no-restricted-syntax": [
      "error",
      {
        selector: `Literal[value=/${ARBITRARY_TEXT_SIZE}/]`,
        message:
          "Tamano de texto a mano. Usa un token de la escala (text-body, text-h4, text-stat...) o anade uno en app/globals.css.",
      },
      {
        selector: `TemplateElement[value.raw=/${ARBITRARY_TEXT_SIZE}/]`,
        message:
          "Tamano de texto a mano. Usa un token de la escala (text-body, text-h4, text-stat...) o anade uno en app/globals.css.",
      },
    ],
  },
};

const eslintConfig = [
  ...(Array.isArray(coreWebVitals) ? coreWebVitals : [coreWebVitals]),
  ...(Array.isArray(typescript) ? typescript : [typescript]),
  noArbitraryTextSize,
  {
    ignores: [
      // Artefactos de build de un worktree de agente, no codigo fuente: metian
      // 14 avisos por ejecucion sobre chunks generados por Turbopack.
      ".seo-agent/**",
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
