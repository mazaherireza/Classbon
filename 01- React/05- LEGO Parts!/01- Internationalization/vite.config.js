import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@contexts": resolve(__dirname, "./src/contexts"),
    },
  },
  plugins: [react()],
});
