import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // react(),
    qiankun("react", {
      useDevMode: true,
    }),
  ],
  server: {
    origin: "http://localhost:5175",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
