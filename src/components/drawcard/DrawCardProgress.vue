<template>
  <el-card class="table-card" body-style="padding:0;">
    <el-tabs type="border-card" v-loading="loading">
      <el-tab-pane
        v-for="(card, index) in charProgress"
        :label="cardList[index].label"
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
    </el-tabs>
  </el-card>
</template>

<script lang="ts" setup>
defineProps<{
  charProgress: {
    [key: number]: {
      name: string;
      count: number;
    }[];
  };
  cardList: { label: string }[];
  loading: boolean;
}>();
</script>

<style lang="scss" scoped>
.el-row {
  padding-bottom: 20px;
}

.el-row:last-child {
  padding-bottom: 0px;
}
</style>
