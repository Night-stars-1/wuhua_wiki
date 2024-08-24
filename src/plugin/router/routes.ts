/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-02-23 23:55:47
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-11 17:46:48
 */
export const routes = [
  { path: '/', component: () => import('@/pages/Char.vue') },
  { path: '/char', component: () => import('@/pages/Char.vue') },
  { path: '/char/:id', component: () => import('@/pages/Char.vue') },
  { path: '/drawcard', component: () => import('@/pages/DrawCard.vue') },
  { path: '/charinfo', component: () => import('@/pages/CharInfo.vue') },
  { path: '/reward', component: () => import('@/pages/Reward.vue') },
]
