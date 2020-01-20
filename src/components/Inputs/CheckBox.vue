<template >
    <label class="checkbox">{{text}}
        <input type="checkbox" :checked="checked">
        <span class="checkmark"></span>
    </label>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    text: {
      type: String,
      required: false,
      default: '',
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.checkbox {
    display: block;
    position: relative;
    width: 35px;
    height: 16px;
    border-radius: 7px;
    padding-left: 25px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #ebf0f5;
        color: $button-primary-color;
    }
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked ~ .checkmark {
            border: 2px solid $button-primary-color;
            border-radius: 4px;
            background-color: $button-primary-color;
        }
        &:checked ~ .checkmark:after {
            display: block;
        }
    }
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 12px;
        width: 12px;
        border: 2px solid #bebebe;
        border-radius: 4px;
        background-color: white;
    }
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }
    .checkmark:after {
        left: 3px;
        top: 2px;
        width: 3px;
        height: 5px;
        border: solid white;
        border-width: 0 1.5px 1.5px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
}
</style>
