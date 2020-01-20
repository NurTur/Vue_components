<template>
    <div class="input">
        <label  class='input__label'>{{ label }}</label>
        <input  :class="'input__value '+ hoverState"
                :type="type"
                :autocomplete="autocomplete"
                :placeholder="placeholder">
        <span   v-show="effects==='on'"
                class="focus-border"
        />
    </div>
</template>

<script>
export default {
  name: 'Input',
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
    effects: {
      type: String,
      required: false,
      default: 'on',
      validator: item => ['on', 'off'].includes(item),
    },
  },

  data() {
    return { hoverState: this.hover === 'on' ? 'input__value__hover' : '' };
  },

};
</script>

<style lang="scss" scoped>
.input { position: relative;
    &__label {
        font-family: 'Open-Sans', sans-serif;
        font-size: 13px;
        color: #616161;
        display: flex; justify-content:flex-start;
    }
    &__value {
        border: 0;
        padding: 7px 0;
        border-bottom: 1px solid #e5e5ea;
        &~ .focus-border{
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 2px;
            background-color: #3399FF;
            transition: 0.4s;
        }
        &__hover {
            &:hover{ border-bottom: 1px solid #afafbb; }
        }

    }

    input { font-size: 15px; vertical-align: middle;   height: 30px;
            background-color:#fff;
            font-family: 'Open-Sans', Meiryo, sans-serif; font-weight: 600;
            color: #282828; width: 100%;
    }

    :focus{ outline: none; }
    :focus ~ .focus-border{width: 100%; transition: 0.4s; left: 0;}
    ::-webkit-input-placeholder { /* Chrome */
        font-size: 14px;
        vertical-align: middle;
        font-family:'Open-Sans', Meiryo, sans-serif;
        font-weight: 600; letter-spacing: 1px;
        color: #ccc;
    }
}
</style>
