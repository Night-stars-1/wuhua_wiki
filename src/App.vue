<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-15 20:29:22
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-19 22:11:36
-->
<template>
  <router-link to="/char">
    <el-button>角色</el-button>
  </router-link>
  <router-link to="/drawcard" style="margin-left: 10px;">
    <el-button>抽卡分析</el-button>
  </router-link>
  <router-link to="/charinfo" style="margin-left: 10px;">
    <el-button>角色信息</el-button>
  </router-link>
  <router-view />
  <div id="background" :style="{ background: `url(${bgImage})center/cover` }" />
</template>

<script lang="ts" setup>
const isMobile = (() => {
  const userAgent = navigator.userAgent.toLowerCase();
  return /mobile|android|iphone|ipad|phone|ipod|blackberry|iemobile|opera mini/.test(userAgent);
})();

const bgImage = computed(() => {
  console.log("测试")
  return `https://api.anosu.top/img/?sort=${isMobile ? "mp" : "pc"}`
});
</script>
