/**
 * Example tailwind.config.js using @estartando/ui.
 *
 * If installed from npm:
 *   const estartandoUI = require("@estartando/ui");
 *
 * If local (development):
 *   const estartandoUI = require("../");
 */
const estartandoUI = require("../");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],

  plugins: [
    // ── Default (dark theme, all components) ─────────
    estartandoUI(),

    // ── Or with options: ─────────────────────────────
    // estartandoUI({
    //   defaultTheme: "light",
    //   radius: "1rem",
    //   colors: {
    //     "--color-primary": "#6c63ff",
    //     "--color-accent": "#81caa8",
    //   },
    // }),
  ],
};
