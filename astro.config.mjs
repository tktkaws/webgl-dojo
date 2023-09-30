import { defineConfig } from "astro/config";
// import glsl from "vite-plugin-glsl";
import glslify from "vite-plugin-glslify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      glslify(),
      // glsl({
      //   watch: false,
      // }),
    ],
  },
});
