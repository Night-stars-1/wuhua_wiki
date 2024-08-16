<template>
  <el-card body-style="padding:0">
    <el-tabs v-model="activeName" type="border-card">
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
                  <div style="display: inline-flex; align-items: center">
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
                  <div style="display: inline-flex; align-items: center">
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
                :value="(item.total - item.pull) / item.four"
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
</template>

<script lang="ts" setup>
defineProps<{
  analysisList: {
    label: string;
    total: number;
    three: number;
    four: number;
    /**
     * 已垫抽数
     */
    pull: number;
  }[];
}>();
const activeName = ref("限时渠道");
</script>

<style lang="scss" scoped>
.el-statistic {
  display: flex;
  align-items: center;
  flex-direction: column;
  --el-statistic-content-font-size: 28px; // 字体大小
}

.statistic-card {
  display: flex;
  flex-direction: column;
}
</style>
