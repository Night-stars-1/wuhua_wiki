<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-11 18:18:36
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-12 15:19:47
-->
<template>
  <div class="skill">
    <el-space wrap size="default" style="justify-content: center">
      <div class="image-container" v-for="item in skillData">
        <el-image
          class="image"
          :src="`/char/${id}/skill/${item.icon}.png`"
          lazy
        />
        <el-tag size="small" class="level">{{ item.level }}</el-tag>
      </div>
    </el-space>
  </div>
</template>

<script lang="ts" setup>
import { skill2icon } from "@/utils/skill";

const props = defineProps<{
  id: string;
  data: CharSkill[];
}>();

const skillData = ref<{
  [key: string]: {
    icon: string;
    level: number;
  };
}>({});
onMounted(async () => {
  props.data.forEach(async (item) => {
    const icon = await skill2icon(item.id);
    skillData.value[item.id] = {
      icon,
      level: item.level,
    };
  });
});
</script>

<style lang="scss" scoped>
.skill {
  min-height: 48px;
}

.image-container {
  position: relative;
  width: 48px;
  height: 48px;
}

.image {
  border-radius: 5px;
}

.level {
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2px 4px;
  border-style: unset;
}
</style>
