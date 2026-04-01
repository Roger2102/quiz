import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/quiz/", // igual ao nome do repositório
  plugins: [react()],
});
