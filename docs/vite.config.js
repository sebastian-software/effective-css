import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: ".",
  base: "./",
  server: {
    port: 4000,
  },
  preview: {
    port: 4001,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        demo: resolve(__dirname, "demo.html"),
      },
    },
  },
  resolve: {
    alias: {
      "@effective/css": resolve(__dirname, "../src/index.css"),
    },
  },
});

