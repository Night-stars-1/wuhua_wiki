<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-11 17:47:09
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-16 23:34:41
-->
<template>
  <Panel class="charinfo-panel">
    <div class="login-card">
      <LoginCard card-style="border-radius: 10px;" @check="Save" />
    </div>
    <el-space
      fill
      wrap
      :fill-ratio="20"
      direction="horizontal"
      alignment="stretch"
      class="info-space"
    >
      <div class="lazy" v-for="(item, id) in data" :key="id" v-lazy @lazy-load="handleLazyLoad">
        <CharInfoCard v-if="lazyLoadMap[id]" :id="id.toString()" :data="item" />
      </div>
    </el-space>
  </Panel>
</template>

<script lang="ts" setup>
import { getCharacterData } from "@/utils/wuhua";
// import html2canvas from 'html2canvas';

const dataStr = localStorage.getItem("cardInfo");
const data = dataStr
  ? ref<{ [key: string]: CharInfoData }>(JSON.parse(dataStr))
  : ref<{ [key: string]: CharInfoData }>({});
const lazyLoadMap = ref<Record<string, boolean>>({});

function sortCharacterData(obj: { [key: string]: CharInfoData }) {
  const entries = Object.entries(obj);

  entries.sort((a, b) => {
    return b[1].level - a[1].level;
  });

  const sortedObj = Object.fromEntries(entries);

  return sortedObj;
}

async function Save(code: string, uid: string) {
  const result = await getCharacterData(code, uid);
  const sortResult = sortCharacterData(result);
  if (Object.keys(sortResult).length !== 0) {
    localStorage.setItem("cardInfo", JSON.stringify(sortResult));
    data.value = sortResult;
  }
}
function handleLazyLoad(id: string) {
  lazyLoadMap.value[id] = true
}
// async function captureImage() {
//   const captureElement = document.querySelector('.info-space');
//   if (captureElement) {
//     const canvas = await html2canvas(captureElement);
//     const image = canvas.toDataURL('image/png');

//     // 创建一个虚拟的链接元素
//     const link = document.createElement('a');
//     link.href = image;
//     link.download = 'capture.png'; // 图片下载的默认名称
//     link.click(); // 模拟点击下载图片
//   }
// };
</script>

<style lang="scss" scoped>
.lazy {
  width: 23vi;
  min-height: 334.67px;
}

@media (max-width: 992px) {
  .lazy {
    width: 45vi;
    min-height: 240.67px;
  }
}

.charinfo-panel {
  padding: 5px 10px;
}
.login-card {
  padding-bottom: 20px;
}

.info-space {
  width: 100%;
  // justify-content: center;
}
</style>
