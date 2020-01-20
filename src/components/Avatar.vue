<template>
  <div :class="size+'-avatar'">
    <div
        v-show="edit"
        class="big-avatar__icon-basic big-avatar__icon-edit"
        v-on:click="handleClick"
    ></div>
    <img :class="'avatar__'+ size"  :src="srcAvatar"/>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: false,
      default: '',
    },
    edit: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: String,
      required: true,
      default: 'small',
      validator: size => ['small', 'big'].includes(size),
    },
    onClick: {
      type: Function,
    },
  },
  data() {
    const srcSmallAvatar = 'http://192.168.102.87/ForDesigner/img/no_image.png?17030';
    const srcBigAvatar = 'http://192.168.102.87/ForDesigner/img/no_image_big.png?17030';
    const defaultSrc = this.size === 'small' ? srcSmallAvatar : srcBigAvatar;
    const src = this.src === '' ? defaultSrc : this.src;
    return { srcAvatar: src };
  },
  methods: {
    handleClick(event) {
      return this.onClick(event);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.small-avatar {
    width: 40px;
    height: 40px;
}
.big-avatar
{
    width: 130px;
    height: 130px;
    &__icon-edit {
      position: absolute;
      box-shadow: 0 12px 6px 2px rgba(50, 53, 56, 0.03);
      background-color: $button-primary-color;
      border-radius: 50%;
      margin-left: 100px;
      margin-top: 95px;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'%3e%3cdefs%3e%3cpath id='a' d='M4 16.36v3.04h3.04l8.8-8.88-3.04-3.04L4 16.36zM18.16 8.2c.32-.32.32-.8 0-1.12l-1.84-1.84a.773.773 0 0 0-1.12 0l-1.44 1.44 3.04 3.04 1.36-1.52zm-6.96 9.6l-1.6 1.6H20v-1.6h-8.8z'/%3e%3c/defs%3e%3cg fill='none' fill-rule='evenodd'%3e%3cmask id='b' fill='%23fff'%3e%3cuse xlink:href='%23a'/%3e%3c/mask%3e%3cg fill='%23fff' mask='url(%23b)'%3e%3cpath d='M0 0h24v24H0z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e");
  }
    &__icon-basic {
      display: inline-flex;
      width: 24px;
      height: 24px;
      background-size: contain;
      background-repeat: no-repeat;
      cursor: pointer;
  }
}

.avatar {
    &__small {
      width: 36px;
      height: 36px;
      border-radius: 18px;
    }
    &__big {
      width: 125px;
      height: 125px;
      border-radius: 87px;
      border: 3px solid #fff;
      box-shadow: 0 6px 4px 0 rgba(50, 53, 56, 0.04),
                0 6px 8px 4px rgba(50, 53, 56, 0.04),
                0 12px 6px 2px rgba(50, 53, 56, 0.03);
    }
}
</style>
