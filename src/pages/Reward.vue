<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-24 20:06:02
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-25 00:05:06
-->
<template>
  <Panel class="reward-panel">
    <el-row class="reward-content">
      <LoginCard
        ref="login"
        card-style="border-radius: 10px;"
        button-text="保存"
      />
      <el-card>
        <el-text> 请输入兑换码： </el-text>
        <el-input
          v-model="rewardCode"
          placeholder="请输入兑换码："
          style="padding-top: 10px"
        ></el-input>
        <el-button
          :loading="rewarding"
          style="margin-top: 10px; margin-bottom: 20px; float: right"
          @click="onReward"
          >兑换</el-button
        >
      </el-card>
      <el-card v-if="codeList.length > 0">
        <el-button v-for="code in codeList" @click="rewardCode=code">{{ code }}</el-button>
      </el-card>
    </el-row>
  </Panel>
</template>

<script lang="ts" setup>
import { reward } from "@/utils/wuhua";

const rewardCode = ref("");
const rewarding = ref(false);
const login = ref<{
  code: string;
  uid: string;
}>({
  code: "",
  uid: "",
});
const codeList = ref<string[]>(["whmx2024", "whmxguyu", "whmx0419", "TRAVEL"])

async function onReward() {
  rewarding.value = true;
  const data = await reward(
    login.value.code,
    login.value.uid,
    rewardCode.value
  );
  rewarding.value = false;
  ElMessage({
    message: data,
    type: "success",
  });
}
</script>

<style lang="scss" scoped>
.reward-panel {
  padding: 5px 10px;
  min-height: calc(100vh - 62px);
}

.reward-content {
  flex-direction: column;
  gap: 20px
}
</style>
