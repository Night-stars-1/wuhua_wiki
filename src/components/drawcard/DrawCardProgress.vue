<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-16 21:59:03
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-25 22:40:57
-->
<template>
  <el-card body-style="padding:0;">
    <el-tabs type="border-card" v-loading="loading">
      <el-tab-pane
        v-for="(card, index) in charProgress"
        :label="cardList[index]?.label"
      >
        <el-row v-for="char in card">
          <el-col :span="4"> {{ char.name }}: </el-col>
          <el-col :span="20">
            <CircularProgress
              :progress="(char.count / 70) * 100"
              :label="`${char.count}`"
            />
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="限定分池">
        <div class="gacha-card" v-for="(cards, name) in newCardData">
          <div class="card-name">{{ name }}</div>
          <div class="card-content-root" v-for="card in cards">
            <el-image
              class="four-image"
              :src="`char/${card.id}/avatar.png`"
              fit="cover"
              loading="lazy"
            >
              <template #error>
                <div class="el-image__error"> {{ card.name }} </div>
              </template>
            </el-image>
            <el-row class="card-content">
              <CircularProgress
                :progress="(card.count / 70) * 100"
                :label="`${card.count}`"
              />
              <el-image
                class="three-image"
                :src="`char/${id}/avatar.png`"
                fit="cover"
                loading="lazy"
                v-for="id in card.ids"
              />
            </el-row>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script lang="ts" setup>
import { name2id } from "@/utils/charinfo";

const props = defineProps<{
  charProgress: charProgress;
  cardList: { label: string }[];
  loading: boolean;
  cardData: cardData;
}>();

const newCardData = ref<cardData>({})
for (const cardName in props.cardData) {
  const cards = props.cardData[cardName];
  newCardData.value[cardName] = cards
  cards.forEach(async (card) => (card.ids = []));
  cards.forEach(async (card) => {
    card.id = await name2id(card.name);
    card.three.forEach(async (name) => card.ids.push(await name2id(name)));
  });
}
</script>

<style lang="scss" scoped>
.el-row {
  padding-bottom: 20px;
}

.el-row:last-child {
  padding-bottom: 0px;
}

.gacha-card {
  /** 卡池名称 */
  .card-name {
    padding-bottom: 5px;
  }

  .card-content-root {
    /** 卡池特出器者图片 */
    .four-image {
      width: 48px;
      height: 57px;
      border-radius: 5px;
    }

    .three-image {
      width: 32px;
      height: 32px;
      border-radius: 5px;
    }

    /** 卡池信息 */
    .card-content {
      gap: 5px;
      padding-left: 5px;
      width: 100%;
    }
    display: flex;
    padding-bottom: 10px;

    &:last-child {
      padding-bottom: 0px;
    }
  }

  padding-bottom: 10px;
}
</style>
