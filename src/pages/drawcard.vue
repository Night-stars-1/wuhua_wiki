<template>
  <div style="text-align: center">
    <h2>物华弥新抽卡分析</h2>
  </div>
  <el-row>
    <el-col :span="24">
      <LoginCard @check="Save" />
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
                <el-tag disable-transitions>{{ scope.row.gachaName }}</el-tag>
              </div>
              <div v-if="scope.row.gachaType == 'normal'">
                <el-tag disable-transitions type="info">{{ scope.row.gachaName }}</el-tag>
              </div>
              <div v-if="scope.row.gachaType == 'oldtime'">
                <el-tag disable-transition>{{ scope.row.gachaName }}</el-tag>
              </div>
              <div v-if="scope.row.gachaType == 'newPlayer'">
                <el-tag disable-transitions type="success">{{ scope.row.gachaName }}</el-tag>
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
import { Moon, StarFilled } from "@element-plus/icons-vue";
import { useDark } from "@vueuse/core";
import iconSun from "@/components/icon/IconSun.vue";
import { mergeLists, findOverlapIndex } from "@/utils/list";
import { getDrawCardHistory, getWuhuaKey } from "@/utils/wuhua";
import { cloneDeep } from "lodash";
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const http = appContext.config.globalProperties.$http;

const isDark = useDark();

const activeName = ref("限时渠道");
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
      gachaId == 0 && charProgress.value[charProgress.value.length - 1].count++;
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
      analysisList.value[gachaId].pull++;
      if (data.rankType == 4) {
        analysisList.value[gachaId].pull = 0;
      }
      analysisList.value[gachaId].total++;
    });
  state.value.total = cardList.value.length;
}
initCardList();

async function Save(code: string, uid: string) {
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
  dialogTableVisible.value = true;
  loading.value = true;
  dialogText.value = "开始读取抽卡数据...";
  const key = await getWuhuaKey(code, uid);
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
