<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-15 20:29:22
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-25 20:31:36
-->
<template>
  <el-container>
    <el-header>
      <AppBar />
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
  <div id="background" :style="{ background: `url(${bgImage})center/cover` }" />
</template>

<script lang="ts" setup>
const isMobile = (() => {
  const userAgent = navigator.userAgent.toLowerCase();
  return /mobile|android|iphone|ipad|phone|ipod|blackberry|iemobile|opera mini/.test(
    userAgent
  );
})();

const bgImage = computed(() => {
  return `https://moe.jitsu.top/img/?sort=${isMobile ? "mp" : "pc"}`;
});
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0px;
  height: 5vh;
}
</style>
