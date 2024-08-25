<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-21 18:18:56
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-25 22:00:52
-->
<template>
  <el-image
    class="char-image"
    fit="cover"
    :src="`/char/${id}/skin/${skin?.[skinIndex]?.id}.png`"
  >
    <template #error>
      <div />
    </template>
  </el-image>
  <el-dropdown>
    <el-button class="skin-list-button">
      {{ skin?.[skinIndex].name }}
      <el-icon><ArrowUp /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(skin, index) in skin"
          @click="skinIndex = index"
        >
          {{ skin.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
const props = defineProps<{
  id: string;
  skin?: SkinInfo[];
}>();
import { ArrowUp } from "@element-plus/icons-vue";

const skinIndex = ref(0);

watch(
  () => props.id,
  (__, _) => {
    skinIndex.value = 0;
  }
);
</script>

<style scoped>
.char-image {
  top: 50px;
  position: fixed;
  height: 90%;
}

/** 下拉菜单-皮肤列表 */
.el-dropdown {
  height: calc(100vh - 90px);
}
/** 皮肤列表 */
.skin-list-button {
  position: absolute;
  bottom: 1rem;
  left: 2rem;
  z-index: 99;
}

@media (max-width: 992px) {
  .char-view-place {
    height: 385px;
  }
  .char-image {
    position: unset;
    height: auto;
    left: 0;
    z-index: -1;
  }
  /** 下拉菜单-皮肤列表 */
  .el-dropdown {
    height: 0px;
    width: 100%;
  }
  /** 皮肤列表 */
  .skin-list-button {
    left: 6px;
    bottom: 0px;
  }
}
</style>
