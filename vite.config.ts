/// <reference types="vitest" />
import inject from "@rollup/plugin-inject";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [inject({ Buffer: ["buffer", "Buffer"] })],
    },
  },
  plugins: [
    react({
      babel: {
        presets: ["jotai/babel/preset"],
      },
    }),
    UnoCSS(),
  ],
  test: {
    globals: true, // so RTL cleanup() runs after each test.
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
  },
});
