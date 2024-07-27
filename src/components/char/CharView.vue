<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-21 18:18:56
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-07-27 14:15:08
-->
<template>
  <div class="char-view-root">
    <div class="char-view">
      <el-image
        class="char-image"
        fit="contain"
        :src="`/char/${id}/skin/${data.id}.png`"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  id: string;
  data: SkinInfo;
}>();
</script>

<style scoped>
.char-view-root {
  width: 100%;
  height: calc(100vh - 20px);
}

.char-view {
  text-align: center;
  height: 100%;
}

.char-image {
  height: 100%;
}

@media (max-width: 992px) {
  .char-view-root {
    margin: 0 auto;
    width: 100% !important;
    height: 506px;
  }
  .char-image {
    position: fixed;
    height: auto;
    top: 50px;
    left: 0;
    z-index: -1;
  }
}
</style>
