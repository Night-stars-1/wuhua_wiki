<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-20 23:29:32
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-07-22 16:00:52
-->
<template>
  <el-card>
    <el-space class="skill-root" fill direction="vertical">
      <Panel class="skill-panel" v-for="buff in buffs">
        <div class="skill-buff-text">
          <span v-html="buff.name" />
          <span>：</span>
          <span v-html="buff.des" />
        </div>
      </Panel>
      <Panel class="skill-panel" v-for="data in dataList">
        <el-row justify="space-between" class="skill-row">
          <el-image
            style="width: 64px; height: 64px"
            :src="`${data.icon}.png`"
          />
          <el-space
            class="skil-tag"
            alignment="flex-start"
            direction="vertical"
          >
            {{ data.name }}
            <el-space>
              <el-tag
                v-for="(item, index) in data.tag"
                :type="`${index == 0 ? 'primary' : 'success'}`"
                >{{ item }}</el-tag
              >
            </el-space>
          </el-space>
          <el-image
            class="skill-range"
            style="width: 64px; height: 64px"
            :src="`${data.icon}.png`"
          />
        </el-row>
        <div class="skill-text">
          <span v-html="data.des" />
        </div>
      </Panel>
    </el-space>
  </el-card>
</template>

<script lang="ts" setup>
const props = defineProps<{
  dataList: SkillInfo[];
}>();
const buffs = computed(() =>
  props.dataList
    .filter((item) => item.buff && item.buff.length > 0)
    .flatMap((item) => item.buff)
);
</script>

<style lang="scss">
.skil-tag {
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
}

.skill-text {
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
}

.skill-buff-text {
  margin-left: 10px;
  margin-right: 10px;
}

.skill-row {
  margin: 10px;
}

.skill-root,
.skill-panel {
  width: 100%;
}
</style>
