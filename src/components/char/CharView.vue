<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-21 18:18:56
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-16 21:08:57
-->
<template>
    <el-image
      class="char-image"
      fit="cover"
      :src="`/char/${id}/skin/${data?.id}.png`"
    />
    <div class="char-view-place" />
</template>

<script lang="ts" setup>
defineProps<{
  id: string;
  data: SkinInfo;
}>();
</script>

<style scoped>
.char-image {
  top: 50px;
  position: fixed;
  height: 90%;
}

@media (max-width: 992px) {
  .char-view-place {
    height: 490px;
  }
  .char-image {
    height: auto;
    left: 0;
    z-index: -1;
  }
}
</style>
