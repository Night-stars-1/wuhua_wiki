<template>
  <div>
    <p>屏幕宽度: {{ screenWidth }} px</p>
    <p>屏幕高度: {{ screenHeight }} px</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    };
  },
  mounted() {
    // 监听窗口大小变化事件
    window.addEventListener('resize', this.updateDimensions);
  },
  beforeUnmount() {
    // 在组件销毁前移除监听器
    window.removeEventListener('resize', this.updateDimensions);
  },
  methods: {
    // 更新屏幕宽高
    updateDimensions() {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
    },
  },
};
</script>
