import { defineConfig } from "astro/config";
import glslify from "vite-plugin-glslify";

export default defineConfig({
  vite: {
    plugins: [glslify()],
  },
});
