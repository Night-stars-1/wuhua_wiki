<template>
  <el-menu :default-active="$route.matched?.[0]?.path" mode="horizontal" router>
    <el-menu-item index="/char">角色</el-menu-item>
    <el-menu-item index="/drawcard">抽卡分析</el-menu-item>
    <el-menu-item index="/charinfo">角色信息</el-menu-item>
    <el-menu-item index="/reward">兑换码</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
const route = useRoute();
console.log(route);
</script>

<style lang="scss" scoped>
.el-menu {
  position: fixed;
  width: 100vw;
  z-index: 999;
  background-color: rgb(202 194 174);
  border-bottom: solid 1px rgb(199 178 126);
  height: 5vh;
  // background-image: radial-gradient(transparent 1px, #fff 1px);
  // background-size: 4px 4px;
}

@media screen and (min-width: 768px) {
    .el-menu {
        padding:0 12px 0 32px
    }
}

@media screen and (min-width: 1280px) {
    .el-menu {
        padding:0 32px
    }
}

@media screen and (min-width: 1680px) {
    .el-menu {
        padding:0 48px
    }
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus {
  background-color: rgb(196, 184, 155);
}
</style>
