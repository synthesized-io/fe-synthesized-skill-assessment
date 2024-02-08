import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { codegenApi } from "./tasks/codegenApi";

export default defineConfig({
  plugins: [tsconfigPaths(), react(), codegenApi()],
  server: {
    proxy: {
      '/api': {
        target: 'http://51.11.179.192',
        changeOrigin: true,
      }
    }
  }
});
