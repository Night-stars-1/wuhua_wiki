/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-20 19:43:20
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-07-26 17:22:43
 */
import type { App } from 'vue'
import axios from "axios";

axios.defaults.baseURL = import.meta.env.BASE_URL;

export default function (app: App) {
  app.config.globalProperties.$http = axios;
}

export {
  axios
}
