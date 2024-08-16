<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-27 14:51:16
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-01 16:47:05
-->
<template>
  <div class="threaded-progress-bar">
    <div class="progress">
      <div class="thread" :style="{ width: progress + '%' }"></div>
      <div class="progress-text">{{ label }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  progress: number
  label: string
}>();
</script>

<style scoped>
.threaded-progress-bar {
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
}
.dark .threaded-progress-bar {
  background-color: #2e2d2d;
}

.progress {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 15px;
}

.thread {
  height: 100%;
  background: linear-gradient(
    -45deg,
    #4caf50 25%,
    #388e3c 25%,
    #388e3c 50%,
    #4caf50 50%,
    #4caf50 75%,
    #388e3c 75%,
    #388e3c 100%
  );
  background-size: 20px 20px;
  animation: moveThread 2s linear infinite;
}

.progress-text {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  white-space: nowrap;
}

@keyframes moveThread {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 20px 20px;
  }
}
</style>
