<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-20 19:47:57
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-10-10 23:34:30
-->
<template>
  <el-row class="char-container">
    <el-col :md="13">
      <div class="char-view-content">
        <el-button class="char-list-button" @click="isShowCharList = true">
          器者列表
          <template #icon>
            <IMsiFormatListBulletedRounded />
          </template>
        </el-button>
        <CharView :id="id" :skin="data.skin" />
      </div>
    </el-col>
    <el-col :md="12" style="flex: 1" v-if="data?.info && data?.skill">
      <Panel class="char">
        <CharName
          :name="data.info.name"
          :rareId="data.info.rare"
          :jobId="data.info.job"
          :tag="data.info.tag"
        />
        <el-tabs modelValue="0" class="char-tabs">
          <el-tab-pane label="信息">
            <CharInfo :data="data.info" />
          </el-tab-pane>
          <el-tab-pane label="技能">
            <CharSkill :id="id" :dataList="data.skill" />
          </el-tab-pane>
          <el-tab-pane label="评估">
            <CharEstimate />
          </el-tab-pane>
          <el-tab-pane label="档案">
            <el-card> 档案 </el-card>
          </el-tab-pane>
        </el-tabs>
      </Panel>
    </el-col>
  </el-row>
  <Transition name="char-list">
    <div v-if="isShowCharList" class="char-list-wrapper">
      <div
        v-if="isShowCharList"
        class="char-list-exit-screen"
        @click="isShowCharList = false"
      />
      <CharList
        class="char-list"
        :data="allChar"
        @exit="isShowCharList = false"
      />
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import type { ComponentInternalInstance } from "vue";
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const http = appContext.config.globalProperties.$http;

const route = useRoute();
const allChar = ref<CharData[]>([]);
const id = ref<string>(route.params.id?.toString());
const data = ref<Char>({});
const isShowCharList = ref(false);

onMounted(async () => {
  const response = await http.get("charinfo/allCharacter.json");
  allChar.value = response.data;
  if (!id.value) {
    id.value = allChar.value[0].id;
  }
  getCharData();
});

async function getCharData() {
  try {
    const charData = await http.get(`charinfo/${id.value}.json`);
    data.value = charData.data;
  } catch (error) {
    console.error("Error fetching the user data:", error);
  }
}
watch(
  () => route.params.id,
  (newId, _) => {
    id.value = newId.toString();
    getCharData();
  }
);
</script>

<style lang="scss" scoped>
.char {
  position: relative;
}

/** 器者列表 */
.char-list-button {
  position: fixed;
  top: 4rem;
  left: 2rem;
  z-index: 99;
}
/** 器者列表关闭面板 */
.char-list-exit-screen {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
}

/** 器者列表动画 */
.char-list-enter-active,
.char-list-leave-active {
  transition-duration: 0.3s;
  .char-list {
    transition: all 0.3s ease-out;
  }
}
/** 器者列表动画 */
.char-list-enter-from,
.char-list-leave-to {
  .char-list {
    opacity: 0;
    margin-top: -10rem !important;
  }
}

/** 角色预览内容 */
.char-view-content {
  position: fixed;
}


@media (max-width: 992px) {
  /** 角色预览内容 */
  .char-view-content {
    position: unset;
  }
  .char-list-button {
    left: 1rem;
  }
}
</style>
