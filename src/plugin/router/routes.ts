/*
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-02-23 23:55:47
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-25 20:00:07
 */

import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: () => import("@/pages/Char.vue") },
  {
    path: "/char",
    name: "char",
    component: () => import("@/pages/Char.vue"),
    children: [
      {
        path: ":id",
        component: () => import("@/pages/Char.vue"),
      },
    ],
  },
  {
    path: "/drawcard",
    name: "drawcard",
    component: () => import("@/pages/DrawCard.vue"),
  },
  {
    path: "/charinfo",
    name: "charinfo",
    component: () => import("@/pages/CharInfo.vue"),
  },
  {
    path: "/reward",
    name: "reward",
    component: () => import("@/pages/Reward.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/pages/Test.vue"),
  },
];
