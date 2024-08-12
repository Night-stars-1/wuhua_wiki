<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-11 18:56:38
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-12 20:54:07
-->
<template>
  <el-row :gutter="20" v-for="count, name in styleList.data">
    <el-col :md="4"> {{ name }}: </el-col>
    <el-col :md="20">
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="50"
        color="rgb(224 207 165)"
      >
        <span>{{ count }}</span>
      </el-progress>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { getStyleData } from "@/utils/charinfo";

const props = defineProps<{
  data: CharStyle;
}>();

const styleList = ref<{
  name?: string;
  data: {[key: string]: number};
}>({
  data: {},
});
onMounted(async () => {
  const id = props.data.id;
  const points = props.data.points;
  const styleData = await getStyleData(id);
  styleList.value.name = styleData.name
  points.forEach((count, index) => {
    styleList.value.data[styleData.sector[index]] = count;
  });
});
</script>
