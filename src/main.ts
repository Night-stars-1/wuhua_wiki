/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-15 20:29:22
 * @LastEditTime: 2024-07-20 19:52:43
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 */
import { createApp } from "vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import axios from "axios";
import "./style.css";
import App from "./App.vue";
import router from "@/plugin/router";
// import 'element-plus/theme-chalk/dark/css-vars.css'

axios.defaults.baseURL = window.location.origin;

const app = createApp(App);
router(app);
app.use(ElementPlus, {
  locale: zhCn,
});
app.config.globalProperties.$http = axios;
app.mount("#app");
