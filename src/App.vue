<!--
  * @Author: Night-stars-1 nujj1042633805@gmail.com
  * @Date: 2024-07-15 20:29:22
  * @LastEditTime: 2024-07-16 12:07:21
  * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
-->
<template>
  <div>
    <div style="text-align: center">
      <h2>物华弥新抽卡分析</h2>
    </div>
    <el-row :gutter="20" style="padding: 0 15px 0 15px">
      <el-col :span="24">
        <el-card>
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
            @click="Init"
            >查询</el-button
          >
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card body-style="padding:0">
          <el-tabs v-model="activeName" class="demo-tabs" type="border-card">
            <div v-for="item in analysisList">
              <el-tab-pane v-bind:label="item.label" v-bind:name="item.label">
                <div class="statistic-card">
                  <el-text size="large" style="font-weight: bolder">
                    {{ item.label }}
                  </el-text>
                  <el-row style="padding-top: 10px" :gutter="10">
                    <el-col :xs="24" :sm="4">
                      <el-statistic :value="item.total" style="padding: 10px">
                        <template #title>
                          <div
                            style="display: inline-flex; align-items: center"
                          >
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
                          <div
                            style="display: inline-flex; align-items: center"
                          >
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
                            : '未知'
                        "
                        style="padding: 10px"
                      >
                        <template #title>
                          <div
                            style="display: inline-flex; align-items: center"
                          >
                            平均出金
                          </div>
                        </template>
                      </el-statistic>
                    </el-col>
                  </el-row>
                </div>
              </el-tab-pane>
            </div>
          </el-tabs>
        </el-card>
      </el-col>
      <el-col :span="24">
        <el-card body-style="padding:0;text-align: center">
          <el-table
            v-loading="loading"
            :data="tableData()"
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
              @current-change="handleCurrentChange"
              @size-change="handleSizeChange"
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
    </el-row>
    <el-dialog v-model="dialogTableVisible" title="提示">
      <span v-text="dialogText"></span>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import type { ComponentInternalInstance } from "vue";
import { Moon, StarFilled } from "@element-plus/icons";
import { useDark } from "@vueuse/core";
import iconSun from "@/components/icon/IconSun.vue";
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const http = appContext.config.globalProperties.$http;

const isDark = useDark();

const code = ref(localStorage.getItem("code")) ?? ref("");
const uid = ref(localStorage.getItem("uid")) ?? ref("");
const activeName = "限时渠道";
const analysisList = ref([
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
]);
const loading = ref(false);
const cardList: Card[] = [];
const state = ref({
  page: 1,
  limit: 10,
  total: cardList.length,
});
const tableData = () => {
  return cardList.filter(
    (_, index) =>
      index < state.value.page * state.value.limit &&
      index >= state.value.limit * (state.value.page - 1)
  );
};
const dialogTableVisible = ref(false);
const dialogText = ref("开始读取抽卡数据...");

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
async function getDrawCardHistory(
  page: number = 0
): Promise<DrawCardHistory[]> {
  const response = await http.post(
    "https://goda.srap.link/getDrawCardHistory",
    {
      code: code.value,
      uid: uid.value,
      type: ["time", "oldtime", "newPlayer", "normal"],
      page: page,
      pagesize: 10,
    },
    {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.data;
}

function handleCurrentChange(e: number) {
  state.value.page = e;
}
function handleSizeChange(e: number) {
  state.value.limit = e;
}

async function Init() {
  localStorage.setItem("code", code.value ?? "");
  localStorage.setItem("uid", uid.value ?? "");
  dialogTableVisible.value = true;
  loading.value = true;
  let page = 0;
  while (true) {
    const dataList = await getDrawCardHistory(page);
    if (dataList.length == 0) {
      [...cardList].reverse().forEach((data) => {
        const gachaId = getGachaId(data.gachaType);
        switch (data.rankType) {
          case 3:
            analysisList.value[gachaId].three++;
            break;
          case 4:
            analysisList.value[gachaId].four++;
            break;
        }
        analysisList.value[gachaId].pull++;
        if (data.rankType == 4) {
          analysisList.value[gachaId].pull = 0;
        }
        analysisList.value[gachaId].total++;
      });
      dialogTableVisible.value = false;
      loading.value = false;
      state.value.total = cardList.length;
      break;
    }
    dataList.forEach((data) => {
      cardList.push({
        name: data.CardName,
        rankType: data.Rare,
        gachaName: data.PoolName,
        gachaType: data.PoolType,
        time: new Date(data.Time * 1000).toLocaleString(),
      });
    });
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
</script>

<style>
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
  --el-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 20px 20px 0;
  border-radius: 4px;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.statistic-card {
  padding: 0;
}

.pagination-container {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
}

@media (max-width: 600px) {
  .pagination-container {
    flex-direction: column;
    align-items: stretch;
  }

  .el-pagination .el-select {
    width: calc(200%)
  }
  
  .theme-switch {
    margin-top: 10px;
    align-self: center;
  }
}
</style>
