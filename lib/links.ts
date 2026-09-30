/**
 * Enlaces externos que aparecen en mas de un sitio.
 *
 * Van aparte de lib/site.ts a proposito: ese fichero importa lib/posts, que
 * arrastra el contenido entero del blog, y de aqui tira tambien
 * components/calendly-button.tsx, que es un componente de cliente. Sin imports
 * en este fichero, el cliente no paga ese peaje.
 */

/**
 * **La unica definicion del enlace de reserva.** Hasta 2026-09-30 vivia escrita
 * a mano dentro de components/calendly-button.tsx, que era el unico sitio que
 * la usaba. Desde que la autorespuesta del formulario tambien la manda, dos
 * copias son dos sitios donde olvidarse de una el dia que cambie el
 * calendario, y la que se olvide mandara gente a un enlace muerto.
 */
export const CALENDLY_URL = "https://calendly.com/emmvi/30min";
