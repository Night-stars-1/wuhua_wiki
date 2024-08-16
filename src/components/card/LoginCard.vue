<template>
  <el-card :style="cardStyle" body-style="padding:0">
    <el-tabs
      v-model="loginType"
      type="border-card"
      v-loading="tabLoading"
      @tab-change="tabChange"
    >
      <el-tab-pane label="Token登陆" name="token">
        <el-text> 请输入抽卡信息： </el-text>
        <el-input
          v-model="code"
          placeholder="请输入access_key"
          style="padding-top: 10px"
          show-password
        ></el-input>
        <el-input
          v-model="uid"
          placeholder="请输入uid"
          style="padding-top: 10px"
          show-password
        ></el-input>
        <el-button
          style="margin-top: 10px; margin-bottom: 20px; float: right"
          @click="emit('check', code, uid)"
          >查询</el-button
        >
      </el-tab-pane>
      <!-- <el-tab-pane label="账号密码" name="pwd">
        <el-alert
          title="密码在本地进行加密，后端无法获取真实密码也不会保存账号密码"
          type="warning"
          show-icon
          :closable="false"
        />
        <el-text> 请输入账号密码： </el-text>
        <el-input
          v-model="userId"
          placeholder="哔哩哔哩账号"
          style="padding-top: 10px"
          show-password
        ></el-input>
        <el-input
          v-model="pwd"
          placeholder="哔哩哔哩密码"
          style="padding-top: 10px"
          show-password
        ></el-input>
        <el-button
          style="margin-top: 10px; margin-bottom: 20px; float: right"
          @click="Login"
          >登录</el-button
        >
      </el-tab-pane> -->
      <el-tab-pane label="扫码登录" name="qrcode">
        <el-alert
          title="扫码登录不会存在账号密码的输入与传输"
          type="warning"
          show-icon
          :closable="false"
        />
        <el-row justify="center">
          <vue-qrcode
            v-if="qrcodeLoginUrl"
            :value="`biligame://portal/auth/login/qrcode?${qrcodeLoginUrl}`"
            type="image/webp"
            :color="{ dark: '#000000', light: '#FFFFFF' }"
          />
        </el-row>
        <el-empty v-if="!qrcodeLoginUrl">
          <el-button type="primary" @click="tabChange('qrcode')"
            >显示二维码</el-button
          >
        </el-empty>
      </el-tab-pane>
    </el-tabs>
  </el-card>
  <el-dialog
    v-model="dialogTableVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :show-close="false"
    title="提示"
  >
    <span v-text="dialogText"></span>
  </el-dialog>
</template>

<script lang="ts" setup>
defineProps<{
  cardStyle?: string;
}>();
const emit = defineEmits<{ check: [code: string, uid: string] }>();

import type { TabPaneName } from "element-plus";
import VueQrcode from "vue-qrcode";
// import Auth from "@/utils/biliLogin";
import QRCodeLogin from "@/utils/qrcodeLogin";

// const userId = ref("");
// const pwd = ref("");
const qrcodeLoginUrl = ref("");
const tabLoading = ref(false);
const loginType = ref("token");
const dialogTableVisible = ref(false);
const dialogText = ref(`开始读取抽卡数据...`);

const codeStr = localStorage.getItem("code");
const code = codeStr ? ref(codeStr) : ref("");
const uidStr = localStorage.getItem("uid");
const uid = uidStr ? ref(uidStr) : ref("");

// async function Login() {
//   dialogTableVisible.value = true;
//   dialogText.value = "开始获取登录信息...";
//   const auth = new Auth();
//   pwd.value = await auth.signPassword(pwd.value);
//   const data = await auth.getAccessKey(userId.value, pwd.value);
//   code.value = data.access_key;
//   uid.value = data.uid.toString();
//   localStorage.setItem("code", code.value ?? "");
//   localStorage.setItem("uid", uid.value ?? "");
//   loginType.value = "token";
//   dialogTableVisible.value = false;
// }

let qrcodeInterval: NodeJS.Timeout;
async function tabChange(name: TabPaneName) {
  if (name === "qrcode") {
    tabLoading.value = true;
    const qrcodeLogin = new QRCodeLogin();
    await qrcodeLogin.qrcodeLogin();
    qrcodeLoginUrl.value = qrcodeLogin.ticket;
    tabLoading.value = false;
    let countdown = 30;
    qrcodeInterval = setInterval(async () => {
      countdown--;
      const data = await qrcodeLogin.checkQRCode();
      if (data) {
        code.value = data.access_key;
        uid.value = data.uid.toString();
        localStorage.setItem("code", code.value ?? "");
        localStorage.setItem("uid", uid.value ?? "");
        loginType.value = "token";
        countdown = -1;
      }
      if (countdown < 0) {
        qrcodeLoginUrl.value = "";
        clearInterval(qrcodeInterval);
      }
    }, 2000);
  } else {
    clearInterval(qrcodeInterval);
  }
}
</script>

