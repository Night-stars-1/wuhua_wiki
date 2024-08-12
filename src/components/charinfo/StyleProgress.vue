<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-08-11 18:56:38
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-11 19:20:08
-->
<template>
  <el-row :gutter="20">
    <el-col :md="4"> 深造: </el-col>
    <el-col :md="20">
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="50"
        color="rgb(224 207 165)"
      >
        <span>7</span>
      </el-progress>
    </el-col>
  </el-row>
</template>
