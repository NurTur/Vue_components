<template>
  <button class="el-button custom-button custom-select-button" @blur="onBlur" @click="onClick">
    <span>{{ value }}</span>
    <i class="el-icon-d-caret"></i>
    <ul v-if="isOpen" class="drop_down">
      <li v-for="(item, index) in items" :key="index" @click="select(item)">
        {{ item }}
        <i class="el-icon-check icon"></i>
      </li>
    </ul>
  </button>
</template>

<script>
export default {
  name: 'SelectButton',
  data() {
    return {
      items: [5, 10, 15, 20],
      value: '',
      isOpen: false,
    };
  },
  methods: {
    selectItem(value) {
      this.value = value;
    },
    onBlur() {
      this.isOpen = false;
    },
    onClick() {
      this.isOpen = !this.isOpen;
    },
    select(value) {
      this.value = value;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.custom-select-button {
    border: solid 1px #d9d9d9;
    border-radius: 9px;
    display: flex;
    justify-content: space-between;
    padding: 6px 6px;
    background: #fff;
    color: #616161;
    min-width: 70px;
    text-decoration: none;
    text-align: left;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    cursor: pointer;
    position: relative;
}
.drop_down {
  position: absolute;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
  box-shadow: 0px -2px 14px 0px #969aa185;
  padding: 10px;
  background: #fff;
  width: 77px;
  left: -7px;
  position: absolute;
  bottom: 13px;
  list-style: none;
  li {
    padding: 8px;
    margin: 0;
    font-family: "Open-Sans", sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    position: relative;
    .icon {
      float: right;
      display: none;
      position: absolute;
      right: 6px;
      bottom: 5px;
    }
    &:hover {
      background: #f3f7f9 !important;
      border-radius: 8px;
      background-image: none;
      color: $button-primary-color;
      cursor: pointer;
      .icon {
        display: inline-block;
      }
    }
  }
}
</style>
