<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-22 17:27:21
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-07-26 11:48:45
-->
<template>
  <Panel class="char-list-planel">
    <el-scrollbar>
      <el-space wrap style="justify-content: space-between">
        <div class="char-card" @click="checkChar(char.id)" v-for="char in data">
          <el-image class="char-image" :src="`/char/${char.id}.png`" lazy />
          <div class="char-name">
            <span>{{ char.name }}</span>
          </div>
        </div>
      </el-space>
    </el-scrollbar>
  </Panel>
</template>

<script lang="ts" setup>
defineProps<{
  data: CharData[];
}>();
const emit = defineEmits<{ exit: [] }>();

const router = useRouter();

function checkChar(id: string) {
  // window.location.href = `/char/${id}`;
  emit("exit");
  router.push(`/char/${id}`);
}
</script>

<style lang="scss" scoped>
.char-list-planel {
  padding: 20px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  height: 80%;
  width: 80%;
}

.char-card {
  width: 125px;
  border: 2px solid rgb(156 156 156 / 65%);
  border-radius: 8px;
  backdrop-filter: blur(1rem);
  z-index: 1;
}

.char-name {
  color: black;
  text-align: center;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.char-image {
  width: 125px;
  height: 250px;
}
</style>
