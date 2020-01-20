<template>
  <el-button class="custom-link-button" :icon="icon">
    {{ getText }}
    <span v-if="active" class="circle" />
  </el-button>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    active: { type: Boolean, required: false },
    text: { type: String, required: true },
    icon: { type: String, default: null },
  },

  computed: {
    getText() {
      return this.loading ? '' : this.text;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.custom-link-button {
  position: relative;
  color: $button-primary-color;
  height: 36px;
  padding: 0 23px;
  border: none;
  border-radius: 12px;
  transition: 0s !important;
  &:focus {
    border: 2px solid $button-primary-color;
  }
  &:hover {
    background-color: $link_button-color !important;
  }
}
.circle {
  display: block;
  background: red;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  top: 20%;
  right: 5%;
  position: absolute;
}
</style>
