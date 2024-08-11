<template>
  <div style="text-align: center">
    <h2>物华弥新抽卡分析</h2>
  </div>
  <el-row>
    <el-col :span="24">
      <el-card body-style="padding:0">
        <el-tabs
          v-model="loginType"
          class="drawcard-tabs"
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
            ></el-input>
            <el-input
              v-model="uid"
              placeholder="请输入uid"
              style="padding-top: 10px"
            ></el-input>
            <el-button
              style="margin-top: 10px; margin-bottom: 20px; float: right"
              @click="Save"
              >查询</el-button
            >
          </el-tab-pane>
          <el-tab-pane label="账号密码" name="pwd">
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
            ></el-input>
            <el-input
              v-model="pwd"
              placeholder="哔哩哔哩密码"
              style="padding-top: 10px"
            ></el-input>
            <el-button
              style="margin-top: 10px; margin-bottom: 20px; float: right"
              @click="Login"
              >登录</el-button
            >
          </el-tab-pane>
          <el-tab-pane label="扫码登录" name="qrcode">
            <el-alert
              title="密码在本地进行加密，后端无法获取真实密码也不会保存账号密码"
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
              <el-button type="primary" @click="tabChange('qrcode')">显示二维码</el-button>
            </el-empty>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
    <el-col :span="24">
      <el-card body-style="padding:0">
        <el-tabs v-model="activeName" class="drawcard-tabs" type="border-card">
          <el-tab-pane
            :label="item.label"
            :name="item.label"
            v-for="item in analysisList"
          >
            <div class="statistic-card">
              <el-text size="large" style="font-weight: bolder">
                {{ item.label }}
              </el-text>
              <el-row style="padding-top: 10px" :gutter="10">
                <el-col :xs="24" :sm="4">
                  <el-statistic :value="item.total" style="padding: 10px">
                    <template #title>
                      <div style="display: inline-flex; align-items: center">
                        抽卡总数
                      </div>
                    </template>
                  </el-statistic>
                </el-col>
                <el-col :xs="24" :sm="4">
                  <el-statistic
                    :value="item.four"
                    style="padding: 10px"
                    value-style="color: #DC7B00"
                  >
                    <template #title>
                      <div
                        class="four_star"
                        style="display: inline-flex; align-items: center"
                      >
                        特出
                      </div>
                    </template>
                  </el-statistic>
                </el-col>
                <el-col :xs="24" :sm="4">
                  <el-statistic
                    :value="item.three"
                    style="padding: 10px"
                    value-style="color: #A256E0"
                  >
                    <template #title>
                      <div
                        class="three_star"
                        style="display: inline-flex; align-items: center"
                      >
                        优异
                      </div>
                    </template>
                  </el-statistic>
                </el-col>
                <el-col :xs="24" :sm="4">
                  <el-statistic :value="item.pull" style="padding: 10px">
                    <template #title>
                      <div style="display: inline-flex; align-items: center">
                        已垫抽数
                      </div>
                    </template>
                  </el-statistic>
                </el-col>
                <el-col :xs="24" :sm="4">
                  <el-statistic
                    :value="
                      (item.total - item.pull) / item.four > 0
                        ? (item.total - item.pull) / item.four
                        : -1
                    "
                    style="padding: 10px"
                  >
                    <template #title>
                      <div style="display: inline-flex; align-items: center">
                        平均出金
                      </div>
                    </template>
                  </el-statistic>
                </el-col>
              </el-row>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </el-col>
    <el-col :span="24">
      <el-card body-style="padding:0;text-align: center">
        <el-table
          v-loading="loading"
          :data="tableData"
          :row-class-name="tableRowClassName"
          height="100%"
        >
          <el-table-column label="名称">
            <template #default="scope">
              {{ scope.row.name }}
            </template>
          </el-table-column>
          <el-table-column
            label="星级"
            min-width="95px"
            prop="rankType"
            sortable
          >
            <template #default="scope">
              <el-icon v-for="_ in scope.row.rankType">
                <StarFilled />
              </el-icon>
            </template>
          </el-table-column>
          <el-table-column label="稀有度">
            <template #default="scope">
              <div v-if="scope.row.rankType == 2">
                <el-tag disable-transitions type="info">新生</el-tag>
              </div>
              <div v-if="scope.row.rankType == 3">
                <el-tag disable-transitions type="primary">优异</el-tag>
              </div>
              <div v-if="scope.row.rankType == 4">
                <el-tag disable-transition type="danger">特出</el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="卡池">
            <template #default="scope">
              <div v-if="scope.row.gachaType == 'time'">
                <el-tag disable-transitions>限时渠道</el-tag>
              </div>
              <div v-if="scope.row.gachaType == '2'">
                <el-tag disable-transitions type="info">新手池</el-tag>
              </div>
              <div v-if="scope.row.gachaType == '11'">
                <el-tag disable-transition>up角色池</el-tag>
              </div>
              <div v-if="scope.row.gachaType == '12'">
                <el-tag disable-transitions type="success">up武器池</el-tag>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="时间" prop="time" sortable />
        </el-table>
        <div class="pagination-container">
          <el-pagination
            background
            layout="prev, pager, next ,total,sizes"
            :total="state.total"
            @current-change="(e) => (state.page = e)"
            @size-change="(e) => (state.limit = e)"
          />
          <el-switch
            v-model="isDark"
            :active-icon="Moon"
            :inactive-icon="iconSun"
            inline-prompt
            class="theme-switch"
          />
        </div>
      </el-card>
    </el-col>
    <el-col :span="24">
      <el-card>
        <el-row v-for="char in charProgress">
          <el-col :span="4"> {{ char.name }}: </el-col>
          <el-col :span="20">
            <CircularProgress
              :progress="(char.count / 70) * 100"
              :label="`${char.count}`"
            />
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
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
import type { ComponentInternalInstance } from "vue";
import type { TabPaneName } from "element-plus";
import VueQrcode from "vue-qrcode";
import { Moon, StarFilled } from "@element-plus/icons-vue";
import { useDark } from "@vueuse/core";
import iconSun from "@/components/icon/IconSun.vue";
import { mergeLists, findOverlapIndex } from "@/utils/list";
import Auth from "@/utils/biliLogin";
import { getDrawCardHistory, getWuhuaKey } from "@/utils/wuhua";
import { cloneDeep } from "lodash";
import QRCodeLogin from "@/utils/qrcodeLogin";
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const http = appContext.config.globalProperties.$http;

const isDark = useDark();

const codeStr = localStorage.getItem("code");
const code = codeStr ? ref(codeStr) : ref("");
const uidStr = localStorage.getItem("uid");
const uid = uidStr ? ref(uidStr) : ref("");
const userId = ref("");
const pwd = ref("");
const activeName = ref("限时渠道");
const loginType = ref("token");
const analysisList = ref([
  {
    label: "限时渠道",
    total: 0,
    three: 0,
    four: 0,
    /**
     * 已垫抽数
     */
    pull: 0,
  },
  {
    label: "招募渠道",
    total: 0,
    three: 0,
    four: 0,
    pull: 0,
  },
  {
    label: "征集渠道",
    total: 0,
    three: 0,
    four: 0,
    pull: 0,
  },
]);
const loading = ref(false);
const cardListStr = localStorage.getItem("cardList");
let cardList = cardListStr
  ? ref<Card[]>(JSON.parse(cardListStr))
  : ref<Card[]>([]);
const state = ref({
  page: 1,
  limit: 10,
  total: cardList.value.length,
});
const tableData = computed(() => {
  return cardList.value.filter(
    (_, index) =>
      index < state.value.page * state.value.limit &&
      index >= state.value.limit * (state.value.page - 1)
  );
});
const charProgress = ref([
  {
    name: "未知",
    count: 0,
  },
]);
const dialogTableVisible = ref(false);
const dialogText = ref(`开始读取抽卡数据...`);
const name2id = ref<{ [key: string]: string }>({});
const qrcodeLoginUrl = ref("");
const tabLoading = ref(false);
onMounted(async () => {
  const response = await http.get("charinfo/allCharacter.json");
  name2id.value = response.data;
});

function getGachaId(gachaType: string): number {
  switch (gachaType) {
    case "time":
      return 0;
    case "normal":
      return 1;
    case "oldtime":
      return 2;
    case "newPlayer":
      return 2;
    default:
      return -1;
  }
}

function initCardList() {
  charProgress.value = [
    {
      name: "未知",
      count: 0,
    },
  ];
  cloneDeep(cardList.value)
    .reverse()
    .forEach((data) => {
      const gachaId = getGachaId(data.gachaType);
      switch (data.rankType) {
        case 3:
          analysisList.value[gachaId].three++;
          break;
        case 4:
          analysisList.value[gachaId].four++;
          if (gachaId == 0) {
            charProgress.value[charProgress.value.length - 1].name = data.name;
            charProgress.value.push({
              name: "未知",
              count: 0,
            });
          }
          break;
      }
      gachaId == 0 && charProgress.value[charProgress.value.length - 1].count++;
      analysisList.value[gachaId].pull++;
      if (data.rankType == 4) {
        analysisList.value[gachaId].pull = 0;
      }
      analysisList.value[gachaId].total++;
    });
  state.value.total = cardList.value.length;
}
initCardList();

async function Save() {
  let page = 1;
  const tmpCardList: Card[] = [];
  analysisList.value = [
    {
      label: "限时渠道",
      total: 0,
      three: 0,
      four: 0,
      pull: 0,
    },
    {
      label: "招募渠道",
      total: 0,
      three: 0,
      four: 0,
      pull: 0,
    },
    {
      label: "征集渠道",
      total: 0,
      three: 0,
      four: 0,
      pull: 0,
    },
  ];
  localStorage.setItem("code", code.value ?? "");
  localStorage.setItem("uid", uid.value ?? "");
  dialogTableVisible.value = true;
  loading.value = true;
  dialogText.value = "开始读取抽卡数据...";
  const key = await getWuhuaKey(code.value, uid.value);
  while (true) {
    dialogText.value = `开始读取抽卡数据... 第${page}页`;
    const dataList = await getDrawCardHistory(key, "", "", page);

    dataList.forEach((data) => {
      tmpCardList.push({
        name: data.CardName,
        rankType: data.Rare,
        gachaName: data.PoolName,
        gachaType: data.PoolType,
        time: new Date(data.Time * 1000).toLocaleString(),
      });
    });
    const overlapIndex = findOverlapIndex(
      tmpCardList,
      cardList.value[0],
      cardList.value[1]
    );
    if (dataList.length == 0 || overlapIndex != -1) {
      cardList.value = mergeLists(tmpCardList, cardList.value);

      initCardList();

      dialogTableVisible.value = false;
      loading.value = false;
      localStorage.setItem("cardList", JSON.stringify(cardList.value));
      break;
    }
    page += 1;
    // await new Promise((resolve) => setTimeout(resolve, 100));
  }
}

function tableRowClassName(row: any) {
  if (row.row.rankType == 4) {
    return "four_star";
  } else if (row.row.rankType == 3) {
    return "three_star";
  } else {
    return "two_star";
  }
}

async function Login() {
  dialogTableVisible.value = true;
  dialogText.value = "开始获取登录信息...";
  const auth = new Auth();
  pwd.value = await auth.signPassword(pwd.value);
  const data = await auth.getAccessKey(userId.value, pwd.value);
  code.value = data.access_key;
  uid.value = data.uid;
  loginType.value = "token";
  dialogTableVisible.value = false;
}

let qrcodeInterval: NodeJS.Timeout;
async function tabChange(name: TabPaneName) {
  if (name === "qrcode") {
    tabLoading.value = true
    const qrcodeLogin = new QRCodeLogin();
    await qrcodeLogin.qrcodeLogin();
    qrcodeLoginUrl.value = qrcodeLogin.ticket
    tabLoading.value = false
    let countdown = 30;
    qrcodeInterval = setInterval(async () => {
      countdown--;
      const data = await qrcodeLogin.checkQRCode();
      if (data) {
        code.value = data.access_key;
        uid.value = data.uid;
        loginType.value = "token";
        countdown = -1;
      }
      if (countdown < 0) {
        qrcodeLoginUrl.value = ''
        clearInterval(qrcodeInterval);
      }
    }, 2000);
  } else {
    clearInterval(qrcodeInterval);
  }
}
</script>

<style scoped>
.el-col {
  padding-bottom: 20px;
}

.four_star {
  color: #dc7b00;
}

.three_star {
  color: #a256e0;
}

.two_star {
  color: #5aa897;
}

:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.el-statistic {
  display: flex;
  align-items: center;
  flex-direction: column;
  --el-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 0;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
}

.drawcard-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.pagination-container {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
}

@media (max-width: 600px) {
  #app {
    padding: 0;
  }

  .pagination-container {
    flex-direction: column;
    align-items: stretch;
  }

  .el-pagination {
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .theme-switch {
    margin-top: 10px;
    align-self: center;
  }
}
</style>
