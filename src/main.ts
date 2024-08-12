/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-15 20:29:22
 * @LastEditTime: 2024-08-12 17:06:48
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 */
import { createApp } from "vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "./assets/style.scss";
import App from "./App.vue";
import router from "@/plugin/router";
import axios from "@/plugin/axios";
import lazy from "@/plugin/lazy";
import "element-plus/theme-chalk/dark/css-vars.css";

const app = createApp(App);
router(app);
axios(app);
lazy(app)
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount("#app");
