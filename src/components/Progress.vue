<template>
  <div class="progress">
    <div class="progress__text" v-if="showText">
      {{ percentage ? `${percentage} %` : '' }}
    </div>
    <el-progress
      class="progress__bar"
      :percentage="percentage"
      :stroke-width="strokeWidth"
      :status="status"
      :color="color"
      :show-text="false"
    ></el-progress>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    percentage: {
      type: Number,
      required: true,
    },
    strokeWidth: {
      type: Number,
      default: 8,
    },
    showText: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
    },
    color: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
  .progress {
    display: flex;
    width: 100%;
    align-items: center;

    &__text {
      width: 50px;
      font-size: 14px;
      text-align: left;
    }
    &__bar {
      flex-grow: 1;
    }
  }
</style>
