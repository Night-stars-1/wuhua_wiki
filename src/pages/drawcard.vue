<template>
  <div style="text-align: center">
    <h2>物华弥新抽卡分析</h2>
  </div>
  <el-space class="drawcard-content" fill :size="20">
    <LoginCard @check="Save" />
    <DrawCardStatistic :analysis-list="analysisList" />
    <DrawCardTable :loading="loading" :table-data="tableData" :state="state" />
    <DrawCardProgress :char-progress="charProgress" :card-list="analysisList" :loading="loading" />
  </el-space>
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
import { mergeLists, findOverlapIndex } from "@/utils/list";
import { getDrawCardHistory, getWuhuaKey } from "@/utils/wuhua";
import { cloneDeep } from "lodash";
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const http = appContext.config.globalProperties.$http;

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
  {
    label: "新人招募",
    total: 0,
    three: 0,
    four: 0,
    pull: 0,
  }
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
const charProgress = ref<{
  [key: number]: {
    name: string;
    count: number;
  }[];
}>({});
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
      return 3;
    default:
      return -1;
  }
}

function initCharProgress() {
  const _charProgress: { [key: number]: { name: string; count: number }[] } =
    {};
  for (let i = 0; i < analysisList.value.length; i++) {
    _charProgress[i] = [
      {
        name: "未知",
        count: 0,
      },
    ];
  }
  return _charProgress;
}

function initCardList() {
  charProgress.value = initCharProgress();
  cloneDeep(cardList.value)
    .reverse()
    .forEach((data) => {
      const gachaId = getGachaId(data.gachaType);
      charProgress.value[gachaId][charProgress.value[gachaId].length - 1].count++;
      switch (data.rankType) {
        case 3:
          analysisList.value[gachaId].three++;
          break;
        case 4:
          analysisList.value[gachaId].four++;
          charProgress.value[gachaId][charProgress.value[gachaId].length - 1].name = data.name;
          charProgress.value[gachaId].push({
            name: "未知",
            count: 0,
          });
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
</script>

<style lang="scss" scoped>
.drawcard-content {
  width: 100%;
}
</style>
