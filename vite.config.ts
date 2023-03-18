import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const buildFolder =
  process.env.NODE_ENV === "production" ? "packages" : "build";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  plugins: [svelte()],
  root: "./",
  base: "",
  publicDir: "./public",
});
