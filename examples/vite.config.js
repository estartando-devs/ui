import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: ".",
  plugins: [tailwindcss()],
  server: {
    port: 4173,
    open: true,
  },
});
