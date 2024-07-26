<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-26 11:59:41
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-07-26 12:03:11
-->
<template>
  <div class="char-name">
    <el-row justify="space-between">
      <div>{{ name }}</div>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
}>();
</script>

<style lang="scss" scoped>
.char-name {
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
