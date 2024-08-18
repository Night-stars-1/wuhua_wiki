<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-16 21:59:03
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-18 16:05:21
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
      <!-- <el-tab-pane label="限定分池">
        <el-row v-for="cards, name in cardData">
          <el-col :span="4"> {{ name }}: </el-col>

        </el-row>
      </el-tab-pane> -->
    </el-tabs>
  </el-card>
</template>

<script lang="ts" setup>
// import { name2id } from "@/utils/charinfo";

defineProps<{
  charProgress: charProgress;
  cardList: { label: string }[];
  loading: boolean;
  cardData: cardData;
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
