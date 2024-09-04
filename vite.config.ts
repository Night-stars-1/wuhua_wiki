/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-15 20:29:22
 * @LastEditTime: 2024-09-04 22:59:35
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 */
import path from "node:path";
import { defineConfig } from "vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://wh.srap.link/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    // vueDevTools(),
    AutoImport({
      imports: ["vue", "vue-router"],
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: "icon",
        }),
      ],
    }),
    Components({
      dirs: ["src/components"],
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
        }),
        // 自动注册图标组件
        IconsResolver({
          alias: { gt: "grommet-icons", msi: "material-symbols-light" },
          enabledCollections: ["ep", "material-symbols-light", "grommet-icons"],
        }),
      ],
    }),
    Icons({
      compiler: "vue3",
      autoInstall: true,
    }),
  ],
});
