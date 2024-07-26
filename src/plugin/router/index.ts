/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-20 19:43:20
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-07-26 17:11:53
 */
import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default function (app: App) {
  app.use(router)
}
