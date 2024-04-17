import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default ({mode}) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  return defineConfig({
    plugins: [react()],
    server: {
      host: true,
      port: process.env.VITE_SERVER_PORT || 8003,
    },
    preview: {
      host: true,
      port: process.env.VITE_PREVIEW_PORT || 8003,
    },
  });
};
