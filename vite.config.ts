/// <reference types="vitest/config" />
import { resolve } from "path";
import { defineConfig } from "vite";
import pkg from "./package.json";

const root = "src";

export default defineConfig({
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, `${root}/index.ts`),
      fileName: "index",
      name: pkg.name,
    },
    outDir: resolve(__dirname, "dist"),
  },
  cacheDir: resolve(__dirname, ".cache"),
  root,
  test: {
    coverage: {
      reportsDirectory: resolve(__dirname, "coverage"),
    },
    environment: "jsdom",
    globals: true,
  },
});
