<template>
<div>
  <div v-show='visibleAvatar' class='label__avatar-container'>
      <div class='label__avatar-container__img'>
        <img style='width: 100%;' :src="src" alt='Avatar'/>
      </div>
      <div class='label__avatar-container__text'>{{ text }}</div>
  </div>
  <div  v-show='!visibleAvatar' :class="'label label__'+type">{{ text }}</div>
 </div>
</template>

<script>
export default {
  name: 'Label',
  props: {
    text: {
      type: String,
      required: false,
      default: '',
    },
    src: {
      type: String,
      required: false,
      default: 'http://192.168.102.87/ForDesigner/img/no_image.png?17030',
    },
    type: {
      type: String,
      required: false,
      default: 'default',
      validator: item => ['default', 'primary', 'success', 'info', 'danger', 'warning', 'avatarContainer'].includes(item),
    },
  },
  data() {
    const visibleAvatar = (this.type === 'avatarContainer');
    return { visibleAvatar };
  },
};
</script>

<style lang="scss" scoped>
.label {
    font-family: 'Open-Sans', sans-serif;
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: 700;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;

    &__primary {
      background-color: #777 !important;
    }
    &__default {
      background-color: #337ab7 !important;
    }
    &__success {
      background-color: #5cb85c !important;
    }
    &__info {
      background-color: #5bc0de !important;
    }
    &__danger {
      background-color: #d9534f !important;
    }
    &__warning {
      background-color: #f0ad4e !important;
    }

    &__avatar-container {
      display: flex;
      padding: 5px 10px;
      box-shadow: inset 0 -1px 0 0 #dadade, inset -1px 0 0 0 #dadade;
      width: 15%;
      &__img {
          border-radius: 50%;
          width: 50px !important;
          margin-right: 10px;
          overflow: hidden;
          height: 50px;
      }
      &__text {
          display: flex;
          align-items: center;
          font-family: Open-Sans;
          font-weight: 600;
      }
    }

}
</style>
