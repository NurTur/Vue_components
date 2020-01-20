<template>
  <el-tooltip
    open-delay='1'
    :content='tooltipText'
    placement='bottom'
    effect='light'
    popper-class='custom-popper'
  >
    <el-button
        class='download custom-button'
        :type='buttonType'
        :size='size'
        :disabled='disabled'
        :icon='getIcon'
    >
      {{ getText }}
      <img class='button-loader' v-if='loading' src='@/assets/img/blue-spin.png' />
    </el-button>
  </el-tooltip>
</template>

<script>
export default {
  name: 'DownloadButton',

  props: {
    text: { type: String, required: true },
    tooltipText: { type: String, required: true },
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
    getIcon() {
      return this.loading ? '' : this.icon;
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/assets/styles/_variables.scss";
.button-loader {
  width: 25px;
  animation: 0.4s linear 0s normal none infinite running rotate;
}

.is-disabled{
  background-color: $button_info_disabled-color !important;
  &:focus,
  &:active{
    border: none !important;
    border-radius: 8px !important;
  }
}

.download,
.download:active,
.download:hover,
.download:focus {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  cursor: pointer;
  background-color: #ffffff;
  outline: none !important;
  padding: 10px 30px;
  width: auto;
  border: 2px solid transparent;
  border-radius: 8px !important;
  transition: border 0s;
  &:focus{
    border: 2px solid $button-primary-color !important;
  }
  &:active{
    border: 2px solid $button-primary-color !important;
    border-radius: 12px !important;
    color: $info-text-color;
  }
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
