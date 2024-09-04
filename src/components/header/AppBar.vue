<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-25 19:20:35
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-09-04 23:07:23
-->
<template>
  <el-menu
    class="app-bar"
    :default-active="$route.matched?.[0]?.path"
    mode="horizontal"
    router
  >
    <div class="route-content">
      <el-menu-item index="/char">角色</el-menu-item>
      <el-menu-item index="/drawcard">抽卡分析</el-menu-item>
      <el-menu-item index="/charinfo">角色信息</el-menu-item>
      <el-menu-item index="/reward">兑换码</el-menu-item>
    </div>
    <div class="icon-content">
      <el-switch
        v-model="isDark"
        :active-icon="Moon"
        :inactive-icon="iconSun"
        inline-prompt
        class="theme-switch"
      />
      <el-button
        size="small"
        circle
        tag="a"
        href="https://github.com/Night-stars-1/wuhua_wiki"
        target="_blank"
      >
        <IGtGithub />
      </el-button>
    </div>
  </el-menu>
</template>

<script lang="ts" setup>
import { Moon } from "@element-plus/icons-vue";
import { useDark } from "@vueuse/core";
import iconSun from "@/components/icon/IconSun.vue";

const isDark = useDark();
</script>

<style lang="scss" scoped>
.el-menu {
  position: fixed;
  justify-content: space-between;
  width: 100vw;
  z-index: 100;
  background-color: var(--app-bar-bg-color);
  border-bottom: solid 1px var(--app-bar-border-bt--color);
  height: 5vh;
  align-items: center;
  // background-image: radial-gradient(transparent 1px, #fff 1px);
  // background-size: 4px 4px;
}

@media screen and (min-width: 768px) {
  .el-menu {
    padding: 0 12px 0 32px;
  }
}

@media screen and (min-width: 1280px) {
  .el-menu {
    padding: 0 32px;
  }
}

@media screen and (min-width: 1680px) {
  .el-menu {
    padding: 0 48px;
  }
}

.route-content {
  display: flex;
  height: 100%;

  .el-menu-item {
    height: 100%;
  }
}

.icon-content {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
