<template>
    <div :class="'textarea textarea' + borderState">
        <textarea  :class="'textarea' + borderState + '__value '+
                    ' textarea' + borderState + readOnly +
                    ' textarea' + borderState + '__value' + hoverState +
                    ' textarea' + borderState + colorBorder"
                   :readonly='readonly'></textarea>
        <span  v-show="effects==='on' && redBorder==='off'"
                class="focus-border">
        </span>
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
    redBorder: {
      type: String,
      required: false,
      default: 'off',
      validator: item => ['on', 'off'].includes(item),
    },
    readonly: {
      type: Boolean,
      required: false,
      default: false,
    },
    border: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  data() {
    return {
      hoverState: this.hover === 'on' ? '__hover' : '',
      readOnly: this.readonly ? '__readonly' : '',
      borderState: this.border ? '__with-border' : '__without-border',
      colorBorder: this.redBorder === 'on' ? '__red-border' : '',
    };
  },

};
</script>

<style lang="scss" scoped>
textarea {
    font-size: 14px; vertical-align: middle;
    height: 70px;  font-weight: 600; padding: 7px 0px 0px 14px;
    font-family: 'Open-Sans', Meiryo, sans-serif;
    color: #343a40; width: 100%; letter-spacing: 1px;
}

.textarea {
    position: relative;
    &__with-border {
      border: none;
      background: transparent;
        &__value {
            border: 1px solid #e5e5ea;
            border-radius: 3px;
            &__hover {
                &:hover{ border: 1px solid #afafbb;  border-radius: 3px; }
            }
        }
        &__red-border{
            width: 100%;
            border: 2px solid red;
        }

        &__readonly {
            background-color: #f1f3f5;
            border-radius:4px;
        }

        :focus{ outline: none; }

        &~ .focus-border {
            position: absolute; left: 50%; top: 0;
            width: 0;  border: transparent;
            height: 100%; transition: 0.4s; z-index: 10000;
        }

        :focus ~ .focus-border{
            transition: 0.4s; width: 100%; height: 98%;
            padding-left: 14px; left:0;
            border: 2px solid #3399FF; border-radius: 3px;
      }
    }

    &__without-border
    {
        border: none;
        background: transparent;
        &__value {
            border-bottom: 1px solid #e5e5ea;
            &__hover {
                &:hover{ border-bottom: 1px solid #afafbb; }
            }
        }

        &__red-border{
           width: 100%;
            border-bottom: 2px solid red;
        }

        &__readonly {
            background-color: #f1f3f5;
            border-radius:4px;
        }
        :focus{ outline: none; }

        &~ .focus-border{
            position: absolute; bottom: 0;
            left: 50%; width: 0; height: 2px;
            background-color: #3399FF;
        }

        :focus ~ .focus-border{
            padding-left: 14px; left:0;
            width: 100%; transition: 0.4s;
        }
    }
}
</style>
