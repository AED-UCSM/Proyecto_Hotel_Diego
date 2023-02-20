import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    target: "es2015",
    polyfillDynamicImport: false,
    outDir: "build",
    assetsDir: "assets",
    minify: true,
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  esbuild: {
    jsxInject: "import React from 'react'",
    jsxFactory: "React.createElement",
    jsxFragment: "React.Fragment",
  },
});
