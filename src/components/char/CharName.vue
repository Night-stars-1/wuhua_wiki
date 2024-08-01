<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-26 11:59:41
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-01 17:46:45
-->
<template>
  <div class="char-name">
    <el-row justify="space-between">
      <div>{{ name }} - {{ rare }} - {{ job }} - {{ tag }}</div>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
  rareId: number;
  jobId: number;
  tag: string;
}>();
const rareId2rare: {[key: number]: string} = {
  2: "新生",
  3: "优异",
  4: "特出"
}
const jobId2job: {[key: number]: string} = {
  1: "宿卫",
  2: "轻锐",
  3: "远击",
  4: "构术",
  5: "战略"
}
const rare = computed(() => rareId2rare?.[props.rareId]);
const job = computed(() => jobId2job?.[props.jobId]);
</script>

<style lang="scss" scoped>
.char-name {
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
