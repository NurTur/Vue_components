<template>
  <div class="indicator">
    <i
      v-if="value"
      :class="`indicator__icon el-icon-caret-${value > 0 ? 'top' : 'bottom'}`"
    ></i>
    <span class="indicator__text">{{ `${ value > 0 ? '+' : '' }` + value }}</span>
  </div>
</template>

<script>
export default {
  name: 'Indicator',
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .indicator {
    display: inline-flex;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    &__icon {
      font-size: 20px;
      margin-right: 4px;
    }
    .el-icon-caret-top {
      color: green;
    }
    .el-icon-caret-bottom {
      color: red;
    }
  }
</style>
