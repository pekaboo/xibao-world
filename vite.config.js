import { defineConfig } from "vite";

// base "./" keeps every asset URL relative, so the site works at
// https://<user>.github.io/<repo>/ as well as on a custom domain.
export default defineConfig({
  base: "./",
  build: {
    target: "es2020",
    assetsInlineLimit: 0,
  },
});
