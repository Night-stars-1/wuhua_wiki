<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-16 21:59:03
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-16 23:04:27
-->
<template>
  <el-card body-style="padding:0;">
    <el-tabs type="border-card" v-loading="loading">
      <el-tab-pane
        v-for="(card, index) in charProgress"
        :label="cardList[index].label"
      >
        <el-row v-for="char in card">
          <el-col :span="4"> {{ char.name }}: </el-col>
          <el-col :span="20">
            <CircularProgress
              :progress="(char.count / 70) * 100"
              :label="`${char.count}`"
            />
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script lang="ts" setup>
defineProps<{
  charProgress: {
    [key: number]: {
      name: string;
      count: number;
    }[];
  };
  cardList: { label: string }[];
  loading: boolean;
}>();
</script>

<style lang="scss" scoped>
.el-row {
  padding-bottom: 20px;
}

.el-row:last-child {
  padding-bottom: 0px;
}
</style>
