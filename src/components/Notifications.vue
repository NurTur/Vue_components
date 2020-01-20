<template>
<div v-if ="visible" style="z-index:10000">
  <div style="width: 98%; border-radius:8px;">
    <div  role="alert"
          class="el-notification left el-notification-style"
          :style="styleAlert"
    >
        <i  :style="{'color': this.getTypeData().colorIcon }"
            class='el-notification__icon'
            :class="this.getTypeData().icon"
        ></i>
        <div class="el-notification__group is-with-icon notification-flex">
            <div
                class="el-notification__title"
                :class="this.getTypeData().classIcon"
            >
                {{text}}
            </div>
            <div
                class="el-notification__closeBtn"
                style="font-size: 12px;"
                v-if ="closeAble"
            >
                <div v-on:click="visible=!visible">Отмена</div>
            </div>
        </div>
    </div>
  </div>
  <div
      class="progress"
      v-if ="progressAble"
  >
      <div class="bar" :style="{'width': progressPercent + '%'}"/>
  </div>
 </div>
</template>

<script>
export default {
  props: {
    progressPercent: { type: Number, default: 50 },
    text: { type: String, default: '' },
    closeAble: { type: Boolean, default: false },
    progressAble: { type: Boolean, default: false },
    type: {
      type: String,
      required: true,
      default: '',
      validator: item => ['upload', 'error', 'success', ''].includes(item),
    },
  },

  data() {
    const borderBottom = this.progressAble ? '' : 'border-bottom:#fff 2px solid;';
    return {
      visible: true,
      styleAlert: this.type === ''
        ? 'border: none; background-color: #ffecea;'
        : borderBottom,
    };
  },

  methods: {
    getTypeData() {
      switch (this.type) {
        case 'upload': return {
          colorIcon: '#0D9BE2',
          icon: 'el-icon-upload',
          classIcon: 'notification-text',
        };
        case 'success': return {
          colorIcon: '#88E03E',
          icon: 'el-icon-success',
          classIcon: 'notification-text',
        };
        case 'error': return {
          colorIcon: 'red',
          icon: 'el-icon-error',
          classIcon: 'notification-text',
        };
        default: return {
          colorIcon: '',
          icon: '',
          classIcon: 'notification-text-error',
        };
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.el-notification-style
{
        background-color: #f4f4f8;
        z-index: 2005;position:relative;
        width: 100%;
        margin-top:20px;
        border-top:#fff 2px solid;
        border-left:#fff 2px solid;
        border-right:#fff 2px solid;
        margin-left: -16px;
}
.notification-flex
{
        display: flex;
        align-items: center;
}
.notification-text
{
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        z-index: 10001;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        color: #909399;
}
.notification-text-error
{
        font-size: 12px;
        z-index: 10001;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.58;
        letter-spacing: normal;
        color: #ff4733;
}

.progress {
    margin-left:0.5%;
    padding:0px;
    width:97%;
    height:2px;
    overflow:hidden;
    background:#e5e5e5;
    border-radius:6px;
    .bar {
      min-width:1%;
      height:100%;
      background:$button-primary-color;
    }
}
</style>
