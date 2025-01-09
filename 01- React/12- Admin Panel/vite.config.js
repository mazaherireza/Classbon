import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "./src/assets"),
      "@components": resolve(__dirname, "./src/components"),
      "@core": resolve(__dirname, "./src/core"),
      "@helpers": resolve(__dirname, "./src/helpers"),
      "@features": resolve(__dirname, "./src/features"),
    },
  },
  plugins: [react()],
});
