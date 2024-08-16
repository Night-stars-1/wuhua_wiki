<template>
  <el-card body-style="padding:0;text-align: center">
    <el-table
      v-loading="loading"
      :data="tableData"
      :row-class-name="tableRowClassName"
      height="100%"
    >
      <el-table-column label="名称">
        <template #default="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="星级" min-width="95px" prop="rankType" sortable>
        <template #default="scope">
          <el-icon v-for="_ in scope.row.rankType">
            <StarFilled />
          </el-icon>
        </template>
      </el-table-column>
      <el-table-column label="稀有度">
        <template #default="scope">
          <div v-if="scope.row.rankType == 2">
            <el-tag disable-transitions type="info">新生</el-tag>
          </div>
          <div v-if="scope.row.rankType == 3">
            <el-tag disable-transitions type="primary">优异</el-tag>
          </div>
          <div v-if="scope.row.rankType == 4">
            <el-tag disable-transition type="danger">特出</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="卡池">
        <template #default="scope">
          <div v-if="scope.row.gachaType == 'time'">
            <el-tag disable-transitions>{{ scope.row.gachaName }}</el-tag>
          </div>
          <div v-if="scope.row.gachaType == 'normal'">
            <el-tag disable-transitions type="info">{{
              scope.row.gachaName
            }}</el-tag>
          </div>
          <div v-if="scope.row.gachaType == 'oldtime'">
            <el-tag disable-transition>{{ scope.row.gachaName }}</el-tag>
          </div>
          <div v-if="scope.row.gachaType == 'newPlayer'">
            <el-tag disable-transitions type="success">{{
              scope.row.gachaName
            }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="时间" prop="time" sortable />
    </el-table>
    <div class="pagination-container">
      <el-pagination
        background
        layout="prev, pager, next ,total,sizes"
        :total="state.total"
        @current-change="(e) => (state.page = e)"
        @size-change="(e) => (state.limit = e)"
      />
      <el-switch
        v-model="isDark"
        :active-icon="Moon"
        :inactive-icon="iconSun"
        inline-prompt
        class="theme-switch"
      />
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { Moon, StarFilled } from "@element-plus/icons-vue";
import { useDark } from "@vueuse/core";
import iconSun from "@/components/icon/IconSun.vue";

defineProps<{
  loading: boolean;
  tableData: {
    name: string;
    rankType: number;
    gachaName: string;
    gachaType: string;
    time: string;
  }[];
  state: {
    page: number;
    limit: number;
    total: number;
  };
}>();

const isDark = useDark();

function tableRowClassName(row: any) {
  if (row.row.rankType == 4) {
    return "four_star";
  } else if (row.row.rankType == 3) {
    return "three_star";
  } else {
    return "two_star";
  }
}
</script>

<style lang="scss" scoped>
.pagination-container {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
}

@media (max-width: 992px) {
  .pagination-container {
    flex-direction: column;
    align-items: stretch;
  }

  .theme-switch {
    margin-top: 10px;
    align-self: center;
  }
  
  .el-pagination {
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
</style>
