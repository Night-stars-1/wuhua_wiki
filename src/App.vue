<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-15 20:29:22
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-25 22:25:50
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
// .el-container {
//   overflow-y: auto;
//   height: 100vh;
// }
.el-header {
  --el-header-padding: 0px;
  height: 5vh;
}
.el-main {
  --el-main-padding: 10px;
}
</style>
