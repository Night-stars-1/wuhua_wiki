<!--
  * @Author: Night-stars-1 nujj1042633805@gmail.com
  * @Date: 2024-07-15 20:29:22
  * @LastEditTime: 2024-07-16 11:12:49
  * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
-->
<template>
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
                  <el-col :span="4">
                    <el-statistic :value="item.total" style="padding: 10px">
                      <template #title>
                        <div style="display: inline-flex; align-items: center">
                          抽卡总数
                        </div>
                      </template>
                    </el-statistic>
                  </el-col>
                  <el-col :span="4">
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
                  <el-col :span="4">
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
                  <el-col :span="4">
                    <el-statistic :value="item.pull" style="padding: 10px">
                      <template #title>
                        <div style="display: inline-flex; align-items: center">
                          已垫抽数
                        </div>
                      </template>
                    </el-statistic>
                  </el-col>
                  <el-col :span="4">
                    <el-statistic
                      :value="
                        (item.total - item.pull) / item.four > 0
                          ? (item.total - item.pull) / item.four
                          : '未知'
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
          </div>
        </el-tabs>
      </el-card>
    </el-col>
    <el-col :span="24">
      <el-card body-style="padding:0;text-align: center">
        <el-table
          v-loading="loading"
          :data="cardList"
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
        <div style="padding: 10px">
          <el-switch
            v-model="isDark"
            :active-icon="Moon"
            :inactive-icon="iconSun"
            inline-prompt
            style="
              padding: 0;
              float: right;
              --el-switch-border-color: #dcdfe6;
              --el-switch-on-color: #1d1e1f;
              --el-switch-off-color: #f2f2f2;
            "
          />
          <el-text
            size="small"
            type="info"
            v-text="'共' + cardList.length + '条数据'"
          />
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-dialog v-model="dialogTableVisible" title="提示">
    <span v-text="dialogText"></span>
  </el-dialog>
</template>

<script lang="ts" setup>
import type { ComponentInternalInstance } from "vue";
import { Moon, StarFilled } from "@element-plus/icons";
import { useDark } from "@vueuse/core";
import iconSun from "@/components/icon/IconSun.vue";
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const http = appContext.config.globalProperties.$http;

const isDark = useDark();

const code = ref("");
const uid = ref("");
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
const cardList: Ref<Card[]> = ref([]);
const dialogTableVisible = ref(false);
const dialogText = ref("开始读取抽卡数据...");

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
async function Init() {
  dialogTableVisible.value = true;
  loading.value = true;
  let page = 0;
  while (true) {
    const dataList = await getDrawCardHistory();
    if (dataList.length == 0) {
      dialogTableVisible.value = false;
      loading.value = false;
      break;
    }
    dataList.forEach((data) => {
      switch (data.Rare) {
        case 3:
          analysisList.value[0].three++;
          break;
        case 4:
          analysisList.value[0].four++;
          break;
      }
      analysisList.value[0].pull++;
      if (data.Rare == 4) {
        analysisList.value[0].pull = 0;
      }
      analysisList.value[0].total++;
      cardList.value.push({
        name: data.CardName,
        rankType: data.Rare,
        gachaName: data.PoolName,
        gachaType: data.PoolType,
        time: new Date(data.Time * 1000).toLocaleString(),
      });
    });
    page += 1;

    await new Promise((resolve) => setTimeout(resolve, 100));
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
</style>
