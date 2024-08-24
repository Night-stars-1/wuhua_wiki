<template>
  <Panel class="charinfo-panel">
    <div class="login-card">
      <LoginCard
        ref="login"
        card-style="border-radius: 10px;"
        button-text="保存"
      />
    </div>
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
  </Panel>
</template>

<script lang="ts" setup>
import { reward } from "@/utils/wuhua";

const rewardCode = ref("");
const rewarding = ref(false)
const login = ref<{
  code: string;
  uid: string;
}>({
  code: "",
  uid: "",
});

async function onReward() {
  rewarding.value = true
  const data = await reward(
    login.value.code,
    login.value.uid,
    rewardCode.value
  );
  rewarding.value = false
  ElMessage({
    message: data,
    type: "success",
  });
}
</script>

<style lang="scss" scoped>
.charinfo-panel {
  padding: 5px 10px;
}
.login-card {
  padding-bottom: 20px;
}
</style>
