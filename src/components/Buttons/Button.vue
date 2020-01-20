<template>
    <el-button
        class='custom-button'
        :type="buttonType"
        :size="size"
        :disabled='disabled'
        :icon='icon'
    >
        {{ getText }}
        <img
          class="button-loader"
          v-if="isLoading"
          src="@/assets/img/white-spin.png"
        />
    </el-button>
</template>

<script>
export default {
  name: 'Button',

  props: {
    text: { type: String, required: true },
    size: { type: String, default: 'medium' },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    buttonType: { type: String, default: 'primary' },
    icon: { type: String, default: null },
  },

  computed: {
    getText() {
      return this.loading ? '' : this.text;
    },
    isLoading() {
      return this.loading ? 'el-icon-loading' : null;
    },
  },
};
</script>

<style lang="scss" scoped>
  .button-loader {
    width: 25px;
    animation: 0.4s linear 0s normal none infinite running rotate;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
  }
}
</style>
