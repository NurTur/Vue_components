<template>
  <button :class="`el-button custom-button custom-filter-button ${ getActiveClass }`">
    <span v-if="active" class="circle" />
    <i class="el-icon-ic_filter_list"></i>
    <div class="info">
      <span class="label">Фильтр</span>
      <span class="status">{{ getStatusText }}</span>
    </div>
    <i class="el-icon-caret-bottom"></i>
  </button>
</template>

<script>
export default {
  name: 'FilterButton',
  props: {
    active: { type: Boolean, required: false },
    icon: { type: String, default: null },
  },

  computed: {
    getText() {
      return this.loading ? '' : this.text;
    },
    getActiveClass() {
      return this.active ? 'active' : '';
    },
    getStatusText() {
      return this.active ? 'Aктивен' : 'Неактивен';
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.custom-filter-button {
  position: relative;
  height: 58px;
  transition: 0s !important;
  display: flex !important;
  flex-direction: row !important;
  justify-content: center !important;
  align-items: center !important;
  border: none;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  color: #919191;
  &:active{
    border: 2px solid $button-primary-color;
    border-radius: 12px;
  }
  &:focus{
    background-color: $link_button-color !important;
  }
  &:hover {
    background-color: $link_button-color !important;
  }
}
.active{
    border: 2px solid $button-primary-color;
    border-radius: 12px;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  .label{
    font-size: 15px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.2px;
    color: $info-text-color;
  }
  .status{
    font-size: 10px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 0.2px;
  }
}
.circle {
  width: 8px;
  height: 8px;
  background-color: $active_circle-color;
  border-radius: 50%;
  position: absolute;
  left: 28px;
  top: 18px;
}
</style>
