<template>
  <div>
    <p>window.innerWidth: {{ viewportWidth }} px</p>
    <p>window.innerHeight: {{ viewportHeight }} px</p>
    <p>document.documentElement.clientWidth: {{ clientWidth }} px</p>
    <p>document.documentElement.clientHeight: {{ clientHeight }} px</p>
    <p>window.outerWidth: {{ outerWidth }} px</p>
    <p>window.outerHeight: {{ outerHeight }} px</p>
    <p>window.screen.width: {{ screenWidth }} px</p>
    <p>window.screen.height: {{ screenHeight }} px</p>
    <p>document.body.clientWidth: {{ bodyClientWidth }} px</p>
    <p>document.body.clientHeight: {{ bodyClientHeight }} px</p>
    <p>document.body.offsetWidth: {{ bodyOffsetWidth }} px</p>
    <p>document.body.offsetHeight: {{ bodyOffsetHeight }} px</p>
    <p>document.body.scrollWidth: {{ bodyScrollWidth }} px</p>
    <p>document.body.scrollHeight: {{ bodyScrollHeight }} px</p>
  </div>
  <div>
    <!-- 输入框和按钮 -->
    <div class="command-section">
      <el-input v-model="command" placeholder="输入JavaScript命令" :autosize="{ minRows: 2, maxRows: 4 } type="textarea" />
      <el-button @click="executeCommand"> 执行命令 </el-button>
    </div>
    
    <!-- 显示命令执行结果 -->
    <div v-if="commandResult !== null">
      <h3>命令结果:</h3>
      <pre>{{ commandResult }}</pre>
    </div>

    <div v-if="errorMessage">
      <h3>错误信息:</h3>
      <pre>{{ errorMessage }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

// 定义响应式变量
const viewportWidth = ref(0);
const viewportHeight = ref(0);
const screenWidth = ref(0);
const screenHeight = ref(0);
const outerWidth = ref(0);
const outerHeight = ref(0)
const clientWidth = ref(0);
const clientHeight = ref(0);
const bodyClientWidth = ref(0);
const bodyClientHeight = ref(0);
const bodyOffsetWidth = ref(0);
const bodyOffsetHeight = ref(0);
const bodyScrollWidth = ref(0);
const bodyScrollHeight = ref(0);

const command = ref('');
const commandResult = ref(null);
const errorMessage = ref('');

// 更新宽高信息
const updateDimensions = () => {
  viewportWidth.value = window.innerWidth;
  viewportHeight.value = window.innerHeight;
  outerWidth.value = window.outerWidth;
  outerHeight.value = window.outerHeight;
  screenWidth.value = window.screen.width;
  screenHeight.value = window.screen.height;
  clientWidth.value = document.documentElement.clientWidth;
  clientHeight.value = document.documentElement.clientHeight;
  bodyClientWidth.value = document.body.clientWidth;
  bodyClientHeight.value = document.body.clientHeight;
  bodyOffsetWidth.value = document.body.offsetWidth;
  bodyOffsetHeight.value = document.body.offsetHeight;
  bodyScrollWidth.value = document.body.scrollWidth;
  bodyScrollHeight.value = document.body.scrollHeight;
};

onMounted(() => {
  updateDimensions();
  window.addEventListener('resize', updateDimensions);
});
// 定义执行命令的函数
const executeCommand = () => {
  commandResult.value = null;
  errorMessage.value = '';
  
  try {
    // 使用 eval 执行命令，并将结果存储在 commandResult 中
    commandResult.value = eval(command.value);
  } catch (error) {
    // 捕获执行命令时的错误，并存储在 errorMessage 中
    errorMessage.value = (error as Error).toString();
  }
  
  command.value = ''; // 清空输入框
};
</script>

<style lang="scss" scoped>
.command-section {
  display: flex;
  gap: 5px;
}
</style>
