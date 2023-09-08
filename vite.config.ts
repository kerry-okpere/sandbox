import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    plugins: [vue()],
    resolve: {
      alias: [{ find: "@", replacement: "/src" }],
    },
    server: {
      proxy: {
        "/api": {
          target: process.env.VITE_BASE_URL,
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/api/, `/${process.env.VITE_API_VERSION}`),
        },
      },
    },
  });
};
