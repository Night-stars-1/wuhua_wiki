<!--
 * @Author: Night-stars-1 nujj1042633805@gmail.com
 * @Date: 2024-07-22 17:27:21
 * @LastEditors: Night-stars-1 nujj1042633805@gmail.com
 * @LastEditTime: 2024-08-17 19:22:12
-->
<template>
  <Panel class="char-list-planel">
    <el-scrollbar>
      <el-space wrap style="justify-content: space-between">
        <div
          :id="char.id"
          class="char-card"
          @click="checkChar(char.id)"
          v-for="char in data"
        >
          <el-image
            class="char-image"
            :src="`/char/${char.id}/card.png`"
            lazy
          />
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
const route = useRoute();
const router = useRouter();

onMounted(() => {
  goChar(route.params.id?.toString())
});

function checkChar(id: string) {
  emit("exit");
  router.push(`/char/${id}`);
}

function goChar(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
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
