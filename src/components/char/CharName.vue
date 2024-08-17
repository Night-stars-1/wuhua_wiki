<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-26 11:59:41
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-17 18:20:07
-->
<template>
  <div class="char-name">
    <el-row justify="space-between">
      <div class="char-info">
        <el-image style="width: 64px; height: 64px" :src="`yc/${rareId}_${jobId}.png`" fit="cover" />
        <span :id="rare">{{ name }}</span>
      </div>
      <el-space>
        <el-tag type="primary" v-for="tagName in tag.split(';')">{{ tagName }}</el-tag>
      </el-space>
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
const rareId2rare: { [key: number]: string } = {
  2: "新生",
  3: "优异",
  4: "特出",
};
const jobId2job: { [key: number]: string } = {
  1: "宿卫",
  2: "轻锐",
  3: "远击",
  4: "构术",
  5: "战略",
};
const rare = computed(() => rareId2rare?.[props.rareId]);
const job = computed(() => jobId2job?.[props.jobId]);
</script>

<style lang="scss" scoped>
.char-name {
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
}

/** 器者职业等信息 */
.char-info {
  display: flex;
  align-items: center;
}

#新生 {
  color: #42b8dd;
}
#优异 {
  color: #003261;
}
#特出 {
  color: #db2828;
}
</style>
