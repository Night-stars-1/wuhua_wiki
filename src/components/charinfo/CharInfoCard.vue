<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-11 17:50:13
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-12 20:17:21
-->
<template>
  <el-card
    class="card"
    body-style="display: flex;gap: 10px;flex-direction: column;"
  >
    <el-row justify="space-between">
      <div class="image-container">
        <el-image
          class="image"
          :src="`/char/${id}/avatar.png`"
          lazy
        />
        <span>{{ name }}</span>
      </div>
      <div class="image-container">
        <span>Lv {{ data.level }}</span>
      </div>
    </el-row>
    <StyleProgress :data="data.style" />
    <CharInfoSkill :id="id" :data="data.skills" />
    <CharInfoWeapon :data="data.weapon" />
  </el-card>
</template>

<script lang="ts" setup>
import { id2name } from '@/utils/charinfo';

const props = defineProps<{
  id: string;
  data: CharInfoData;
}>();

const name = ref('')
onMounted(async () => {
  name.value = await id2name(props.id)
})
</script>

<style lang="scss" scoped>
.card {
  .image-container {
    .image {
      width: 32px;
      height: 32px;
      border-radius: 5px;
      margin-right: 5px;
    }
    display: flex;
    align-items: center;
  }
  height: 100%;
}
</style>
