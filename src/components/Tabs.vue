<template>
    <el-tabs
        v-model="activeTabNumber"
        :type="type"
        :tab-position="tabPosition"
        @tab-click="handleClick"
        :style="{ 'height': this.height, 'width': this.width }"
    >
    <slot></slot>
    </el-tabs>
</template>

<script>
export default {
  props: {
    height: {
      type: String,
      required: false,
      default: '400px',
    },
    width: {
      type: String,
      required: false,
      default: '800px',
    },
    activeTab: {
      type: Number,
      required: false,
      default: 0,
      validator: num => num >= 0,
    },
    type: {
      type: String,
      required: false,
      default: '',
      validator: tag => ['', 'card', 'border-card'].includes(tag),
    },
    tabPosition: {
      type: String,
      required: false,
      default: 'top',
      validator: tag => ['top', 'right', 'bottom', 'left'].includes(tag),
    },
    onClick: {
      type: Function,
    },
  },
  data() {
    return {
      activeTabNumber: String(this.activeTab),
    };
  },
  methods: {
    handleClick(tab, event) {
      return this.onClick(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
