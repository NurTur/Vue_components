<template>
<div class="Tabs">
  <Tabs
    type=''
    :activeTab='1'
    tabPosition='top'
    :onClick='onClick'
  >
    <el-tab-pane label='HelloWorld'>
        <HelloWorld
            msg='Welcome to Your Vue.js App'
        />
    </el-tab-pane>

    <el-tab-pane label='Button'>
        <Button
            text='loading Primary'
            size='medium'
            :loading='true'
        />
    </el-tab-pane>

    <el-tab-pane label='Notifications'>
        <Notifications
            name='NotifOfTEST1'
            title='First Test'
            message='This is notification'
            tagMessage='h1'
            color='blue'
            position='bottom-left'
            type='success'
            :duration='2000'
            :showClose='false'
        />
    </el-tab-pane>

    <el-tab-pane label='Avatar'>
        <Avatar
            size='100'
            src='https://s3.amazonaws.com/freecodecamp/relaxing-cat.jpg'
            shape='square'
        />
    </el-tab-pane>
  </Tabs>
</div>
</template>

<script>

import Tabs from '@/components/Tabs.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Button from '@/components/Buttons/Button.vue';
import Notifications from '@/components/Notifications.vue';
import Avatar from '@/components/Avatar.vue';

export default {
  name: 'tabs',
  components: {
    Tabs,
    HelloWorld,
    Button,
    Notifications,
    Avatar,
  },
  methods: {
    onClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
