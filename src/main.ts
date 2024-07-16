/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-15 20:29:22
 * @LastEditTime: 2024-07-15 23:56:48
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 */
import { createApp } from 'vue'
import axios from 'axios'
import './style.css'
import App from './App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)
app.config.globalProperties.$http = axios
app.mount('#app')
