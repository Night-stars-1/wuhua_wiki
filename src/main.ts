/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-15 20:29:22
 * @LastEditTime: 2024-07-27 16:12:57
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 */
import { createApp } from "vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import "./style.css";
import App from "./App.vue";
import router from "@/plugin/router";
import axios from "@/plugin/axios";
import "element-plus/theme-chalk/dark/css-vars.css";

const app = createApp(App);
router(app);
axios(app);
app.use(ElementPlus, {
  locale: zhCn,
});

app.mount("#app");
