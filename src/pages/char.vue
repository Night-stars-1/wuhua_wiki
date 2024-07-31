<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-20 19:47:57
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-07-27 14:33:07
-->
<template>
  <el-row class="char-container">
    <el-col :md="13">
      <el-button class="char-list-button" @click="isShowCharList = true">
        器者列表
        <template #icon>
          <IMaterialSymbolsLightFormatListBulletedRounded />
        </template>
      </el-button>
      <CharView :id="id":data="data.skin[0]" v-if="data.skin" />
    </el-col>
    <el-col :md="12" style="flex: 1" v-if="data?.info && data?.skill">
      <Panel class="char">
        <CharName :name="data.info.name" :rareId="data.info.rare" :jobId="data.info.job" />
        <el-tabs modelValue="0" class="char-tabs">
          <el-tab-pane label="信息">
            <CharInfo :data="data.info" />
          </el-tab-pane>
          <el-tab-pane label="技能">
            <CharSkill :id="id" :dataList="data.skill" />
          </el-tab-pane>
          <el-tab-pane label="致知">致知</el-tab-pane>
          <!-- <el-tab-pane label="精研">精研</el-tab-pane> -->
          <el-tab-pane label="档案">档案</el-tab-pane>
        </el-tabs>
      </Panel>
    </el-col>
  </el-row>
  <Transition>
    <div
      v-if="isShowCharList"
      class="screen"
      @click="isShowCharList = false"
    ></div>
  </Transition>
  <Transition name="char-list">
    <div v-if="isShowCharList" class="char-list-wrapper">
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
    id.value = allChar.value[0].id
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

<style lang="scss">
.char {
  position: relative;
  z-index: 100;
}
.char-container {
  .el-tabs__nav-scroll {
    padding-left: 20px;
    padding-right: 20px;
  }
}

.char-list-button {
  position: fixed;
  top: 4rem;
  left: 2rem;
  z-index: 99;
}

.screen {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
}

.char-list-enter-active,
.char-list-leave-active {
  transition-duration: 0.3s;
  .char-list {
    transition: all 0.3s ease-out;
  }
}

.char-list-enter-from,
.char-list-leave-to {
  .char-list {
    opacity: 0;
    margin-top: -10rem !important;
  }
}

@media (max-width: 992px) {
  .char-list-button {
    left: 1rem;
  }
}
</style>
