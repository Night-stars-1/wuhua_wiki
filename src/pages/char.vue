<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-20 19:47:57
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-07-26 12:14:03
-->
<template>
  <el-row class="char-container">
    <el-col :md="13">
      <el-button class="char-list-button" @click="showCharList">
        器者列表
        <template #icon>
          <IMaterialSymbolsLightFormatListBulletedRounded />
        </template>
      </el-button>
      <CharView :id="id" v-if="id" />
    </el-col>
    <el-col :md="12" style="flex: 1" v-if="data?.info && data?.skill">
      <Panel class="char">
        <CharName :name="data.info.name" />
        <el-tabs modelValue="0" class="char-tabs">
          <el-tab-pane label="信息">
            <CharInfo :data="data.info" />
          </el-tab-pane>
          <el-tab-pane label="技能">
            <CharSkill :dataList="data.skill" />
          </el-tab-pane>
          <el-tab-pane label="致知">致知</el-tab-pane>
          <!-- <el-tab-pane label="精研">精研</el-tab-pane> -->
          <el-tab-pane label="档案">档案</el-tab-pane>
        </el-tabs>
      </Panel>
    </el-col>
  </el-row>
  <Transition>
    <div v-if="isShowCharList" class="screen" @click="hideCharList"></div>
  </Transition>
  <Transition name="char-list">
    <div v-if="isShowCharList" class="char-list-wrapper">
      <CharList class="char-list" :data="allChar" @exit="hideCharList" />
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import type { ComponentInternalInstance } from "vue";
const { appContext } = getCurrentInstance() as ComponentInternalInstance;
const http = appContext.config.globalProperties.$http;

const route = useRoute();
let allChar = ref<CharData[]>([]);
let charList = ref<{ [key: string]: { info?: CharInfo; skill?: SkillInfo[] } }>(
  {
    V0059: {
      info: {
        name: "扯淡碑",
        star: 0,
        Hp: 699,
        Atk: 265,
        PhysicDef: 46,
        MagicDef: 46,
        Speed: 95,
        HitRate: 100,
        MissRate: 0,
        Critical: 0,
        CritDmg: 150,
        CritRes: 0,
        CritDmgRes: 0,
        BlockPenetrate: 0,
        EnergyLimit: 3,
        Mov: 4,
        Hp_GROW: 56,
        Atk_GROW: 18,
        PhysicDef_GROW: 5,
        MagicDef_GROW: 5,
        Speed_GROW: 0,
        HitRate_GROW: 0,
        MissRate_GROW: 0,
        Critical_GROW: 0,
        CritDmg_GROW: 0,
        CritRes_GROW: 0,
        CritDmgRes_GROW: 0,
        BlockPenetrate_GROW: 0,
        EnergyLimit_GROW: 0,
      },
      skill: [
        {
          name: "再不来了",
          des: '对选定的敌方单体造成自身攻击力<span style="color:#158bdb">100%</span>的物理伤害。',
          tag: ["射程1格 ", "无消耗"],
          icon: "skillicon_Commonattack_V",
          buff: [],
        },
        {
          name: "为善最乐",
          des: '对选定的敌方单体造成自身攻击力<span style="color:#158bdb">200%</span>的物理伤害，若自身处于<span style="color:#ff6724">为道</span>状态，则自身回复已损失生命值<span style="color:#158bdb">10%</span>的生命值。',
          tag: ["射程1格 ", "消耗:3"],
          icon: "skillicon_V005902",
          buff: [],
        },
        {
          name: "不欺",
          des: '使用常击或绝技时，若自身<span style="color:#158bdb">周围3格</span>内不存在友方单位，则自身获得<span style="color:#ff6724">为道</span>状态，效果持续<span style="color:#158bdb">1</span>回合。',
          tag: ["被动触发"],
          icon: "skillicon_V005903",
          buff: [
            {
              name: '<span style="color:#ff6724">为道</span>',
              des: '常击后进行连击，对受击敌方单位造成攻击力<span style="color:#158bdb">[EffectParam,2]%</span>的物理伤害。',
            },
          ],
        },
        {
          name: "云梦访道",
          des: '处于<span style="color:#ff6724">为道</span>状态时，若单次损失生命值大于最大生命值的<span style="color:#ff6724">20%</span>，则自身获得<span style="color:#ff6724">不负三光</span>状态；处于<span style="color:#ff6724">不负三光</span>状态时受到攻击，则自身进入<span style="color:#ff6724">有归于无</span>状态。',
          tag: ["被动触发"],
          icon: "skillicon_V005904",
          buff: [
            {
              name: '<span style="color:#ff6724">不负三光</span>',
              des: '陷入沉睡不可行动，持续<span style="color:#158bdb">2</span>回合，期间被暴击概率提高<span style="color:#158bdb">-30%</span>，同时闪避率提高<span style="color:#158bdb">30%</span>，并在受到攻击后醒来；若在持续时间内未受到攻击，将对随机<span style="color:#158bdb">2</span>名敌方目标施加<span style="color:#ff6724">沉睡</span>效果。',
            },
            {
              name: '<span style="color:#ff6724">有归于无</span>',
              des: '贯穿概率提高<span style="color:#158bdb">20%</span>，持续<span style="color:#158bdb">2</span>回合。',
            },
          ],
        },
        {
          name: "仙翁脱骨",
          des: '处于<span style="color:#ff6724">不负三光</span>状态时，若自身闪避敌方攻击，则有<span style="color:#ff6724">30%</span>概率获得<span style="color:#158bdb">30</span>点能量，并立刻获得额外行动机会<span style="color:#158bdb">1</span>次。',
          tag: ["被动触发"],
          icon: "skillicon_V005905",
          buff: [],
        },
        {
          name: "先走一步",
          des: '使用后自身获得再行动<span style="color:#158bdb">1</span>次，该次再行动的移动力减少<span style="color:#158bdb">2</span>。',
          tag: ["自身", "无消耗"],
          icon: "skillicon_Jobskill_V",
          buff: [],
        },
      ],
    },
  }
);
const id = ref<string>(route.params.id?.toString());
const data = ref<{ info?: CharInfo; skill?: SkillInfo[] }>({});
const isShowCharList = ref(false);

function showCharList() {
  isShowCharList.value = true;
}

function hideCharList() {
  isShowCharList.value = false;
}
async function getData() {
  try {
    const response = await http.get("allCharacter.json");
    allChar.value = response.data;
    const response1 = await http.get("character.json");
    charList.value = response1.data;
    data.value = charList.value[id.value];
  } catch (error) {
    console.error("Error fetching the user data:", error);
  }
}
getData();
watch(
  () => route.params.id,
  (newId, _) => {
    id.value = newId.toString();
    data.value = charList.value[id.value];
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
