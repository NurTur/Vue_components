<template>
    <div class="search">
      <div class="search__icons">
        <i class="el-icon-fa-close"></i>
        <i class="el-icon-fa-search"></i>
      </div>
        <input  :class="'search__value '+ hoverState +
                ' search' + colorBorder"
                type='text'
                :autocomplete="autocomplete"
                :placeholder="placeholder">
    </div>
</template>

<script>
export default {
  name: 'InputSearch',
  props: {
    label: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    autocomplete: {
      type: String,
      required: false,
      default: 'on',
      validator: item => ['on', 'off'].includes(item),
    },
    hover: {
      type: String,
      required: false,
      default: 'on',
      validator: item => ['on', 'off'].includes(item),
    },
    redBorder: {
      type: String,
      required: false,
      default: 'off',
      validator: item => ['on', 'off'].includes(item),
    },
  },

  data() {
    return {
      hoverState: this.hover === 'on' ? 'search__value__hover' : '',
      colorBorder: this.redBorder === 'on' ? '__red-border' : '',
    };
  },

};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.search { position: relative;

    &__value {
        border: 0;
        padding: 7px 0;
        border-bottom: 1px solid #e5e5ea;
        &__hover {
            &:hover{ border-bottom: 1px solid #afafbb; }
        }

    }
    &__red-border{
            width: 100%;
            border-bottom: 2px solid red;
    }
    &__icons {
      position: absolute;
      width: 48px;
      height: 100%;
      z-index: 10000;
      background-color: white;
      right: 0px;
      bottom: 2px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      i {
        font-size: 20px;
        color: $button_info_disabled-color;
        &:hover {
        color: #626265;
        }
      }
    }


    input { font-size: 15px; vertical-align: middle;   height: 30px;
            background-color:#fff;
            font-family: 'Open-Sans', Meiryo, sans-serif; font-weight: 600;
            color: #282828; width: 100%;
    }
    :focus{ outline: none; }
    ::-webkit-input-placeholder {
        font-size: 14px;
        vertical-align: middle;
        font-family:'Open-Sans', Meiryo, sans-serif;
        font-weight: 600; letter-spacing: 1px;
        color: #ccc;
    }
}
</style>
