<template>
  <div class="notifications">
    <Notifications
        type=''
        text='Мы обнарулижили 11 ошибок в данных по кейсу 1580225.
        Пожалуйста проверьте правильность введенных данных'
    />
    <Notifications
        type='success'
        text='Данный кейса 1580225 обновлены'
        :closeAble='true'
    />

     <Notifications
        type='error'
        text='Данные по кейсу 1580225 заполнены с ошибками'
    />

    <Notifications
        type='upload'
        :progressPercent='50'
        text='Загрузка файлов: Empty.pdf'
        :closeAble='true'
        :progressAble='true'
    />
  </div>
</template>

<script>
import Notifications from '@/components/Notifications.vue';


export default {
  name: 'notifications',
  components: {
    Notifications,
  },
};
</script>
