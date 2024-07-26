<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-20 20:30:12
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-07-22 15:20:18
-->
<template>
  <el-card>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-row justify="space-between">
          <div>生命值</div>
          <div>{{ data.Hp + level * data.Hp_GROW }}</div>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row justify="space-between">
          <div>攻击力</div>
          <div>{{ data.Atk + level * data.Atk_GROW }}</div>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row justify="space-between">
          <div>物理防御</div>
          <div>{{ data.PhysicDef + level * data.PhysicDef_GROW }}</div>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row justify="space-between">
          <div>构素防御</div>
          <div>{{ data.MagicDef + level * data.MagicDef_GROW }}</div>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row justify="space-between">
          <div>速度</div>
          <div>{{ data.Speed + level * data.Speed_GROW }}</div>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row justify="space-between">
          <div>移动力</div>
          <div>{{ data.Mov }}</div>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row justify="space-between">
          <div>命中率</div>
          <div>{{ data.HitRate + level * data.HitRate_GROW }}</div>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row justify="space-between">
          <div>闪避率</div>
          <div>{{ data.MissRate + level * data.MissRate_GROW }}</div>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row justify="space-between">
          <div>暴击率</div>
          <div>{{ data.Critical + level * data.Critical_GROW }}</div>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row justify="space-between">
          <div>暴击伤害</div>
          <div>{{ data.CritDmg + level * data.CritDmg_GROW }}</div>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row justify="space-between">
          <div>暴击抗性</div>
          <div>{{ data.CritRes + level * data.CritRes_GROW }}</div>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row justify="space-between">
          <div>暴击伤害抗性</div>
          <div>{{ data.CritDmgRes + level * data.CritDmgRes_GROW }}</div>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row justify="space-between">
          <div>格挡穿透</div>
          <div>{{ data.BlockPenetrate + level * data.BlockPenetrate_GROW }}</div>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row justify="space-between">
          <div>能量上限</div>
          <div>{{ data.EnergyLimit + level * data.EnergyLimit_GROW }}</div>
        </el-row>
      </el-col>
    </el-row>
    <el-row align="middle">
      <p style="margin-right: 20px">等级</p>
      <el-slider style="flex: 1" v-model="_level" :min="1" :max="60" />
    </el-row>
  </el-card>
</template>

<script lang="ts" setup>
defineProps<{
  data: CharInfo;
}>();

const _level = ref(1);
const level = computed(() => _level.value - 1);
</script>

<style scoped>
.el-col {
  margin-bottom: 10px;
}
.el-col:last-child {
  margin-bottom: 0;
}
</style>
