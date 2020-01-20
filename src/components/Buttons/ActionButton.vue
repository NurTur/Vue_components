<template>
  <el-tooltip
    open-delay='1'
    :content="tooltipText"
    placement="bottom"
    effect="light"
    popper-class='custom-popper'
  >
    <i :class="`${icon} ${hoverFontColor}`" class="actions-button" />
  </el-tooltip>
</template>

<script>
export default {
  name: 'ActionButton',

  props: {
    tooltipText: { type: String, required: true },
    icon: { type: String, default: null },
    hoverFontColor: { type: String, default: 'default' },
  },
};
</script>

 <style lang="scss" scoped>
 @import "@/assets/styles/_variables.scss";
.actions-button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  width: 44px;
  height: 44px;
  border-radius: 8px !important;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  color: $button_info_disabled-color;
}

.default:hover {
  color: #000;
}
.green:hover {
  color: #42d332;
}
.red:hover {
  color: red;
}
.blue:hover {
  color: #0d9ae2;
}
</style>
