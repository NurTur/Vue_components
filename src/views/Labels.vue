<template>
  <div class='labels'>
    <Label
        type='primary'
        text='Одобрено'
    />
    <br/> <br/>
    <Label
        type='default'
        text='Одобрено'
    />
    <br/> <br/>
    <Label
        type='success'
        text='Одобрено'
    />
     <br/> <br/>
    <Label
        type='info'
        text='Одобрено'
    />
     <br/> <br/>
    <Label
        type='danger'
        text='Одобрено'
    />
     <br/> <br/>
    <Label
        type='warning'
        text='Одобрено'
    />
    <br/> <br/>
    <Label
        type='avatarContainer'
        text='Текст'
        src='http://192.168.102.87/ForDesigner/img/no_image.png?17030'
    />
  </div>
</template>

<script>
import Label from '@/components/Label.vue';

export default {
  name: 'label',
  components: {
    Label,
  },
};
</script>
