<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-11 19:20:45
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-12 14:59:26
-->
<template>
  <el-card
    v-if="data.id"
    class="weapoon-card"
    body-style="display: flex;gap: 10px;flex-direction: column;"
  >
    <el-row justify="space-between">
      <div class="image-container">
        <el-image class="image" :src="`/weapons/${data.id}.png`" lazy />
        <span>{{ weaponData.name }}</span>
      </div>
      <span>Lv {{ data.level }}</span>
    </el-row>
    <el-row justify="space-between" v-for="add in weaponAdditionalData">
      <span>{{ add.name }}</span>
      <span>{{ add.count }}</span>
    </el-row>
  </el-card>
</template>

<script lang="ts" setup>
import { getAdditionalData, getWeaponData } from "@/utils/charinfo";

const props = defineProps<{
  data: CharWeapon;
}>();

const weaponData = ref<WeaponData>({
  name: "",
  rare: 0,
});
const weaponAdditionalData = ref<
  {
    name: string;
    count: string;
  }[]
>([]);
onMounted(async () => {
  if (props.data.id) {
    weaponData.value = await getWeaponData(props.data.id);
    props.data.additional.forEach(async (item) => {
      const additionalData = await getAdditionalData(item.id);
      const addData = additionalData.attrs[weaponData.value.rare];
      weaponAdditionalData.value.push({
        name: additionalData.name,
        count: `${addData.init + addData.grow * item.level}${
          additionalData.type
        }`,
      });
    });
  }
});
</script>

<style lang="scss" scoped>
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
.weapoon-card {
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
}
</style>
