<template>
  <div>
    <Avatar
        size='small'
        src='http://192.168.102.87/ForDesigner/img/avatar.jpg?17030'
    />
    <br/>
    <Avatar
        size='small'
    />
    <br/>-
    <Avatar
        size='big'
        :edit='true'
        :onClick='onClick'
    />
    <br/>
    <Avatar
        size='big'
    />
    <br/>
    <Avatar
        size='big'
        src='http://192.168.102.87/ForDesigner/img/avatar_big.png?17030'
        :edit='true'
        :onClick='onClick'
    />
    <br/>
    <Avatar
        size='big'
        src='http://192.168.102.87/ForDesigner/img/avatar_big.png?17030'
    />
    <br/>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue';

export default {
  name: 'avatar',
  components: {
    Avatar,
  },
  methods: {
    onClick(event) {
      console.log(event, ' Изменить аватарку');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
