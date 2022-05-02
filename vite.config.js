import { defineConfig } from "vite";
import fmp from "vite-plugin-filesystem-multi-pages";

export default defineConfig({
  plugins: [
    fmp({
      dir: "views",
    }),
  ],
});
