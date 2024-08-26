<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-20 20:00:23
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-26 10:27:30
-->
<template>
  <div class="panel">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.panel {
  background: var(--panel-bg-color);
  // box-shadow: #A59F8F 0px 1px 3px;
  border: 2px solid rgb(156 156 156 / 65%);
  border-radius: 8px;
  backdrop-filter: blur(1rem);
}
.content {
  overflow-wrap: break-word;
  height: 100%;
}
</style>
