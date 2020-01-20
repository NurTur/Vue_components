<template>
  <div class="home">
    <el-date-picker type="date" placeholder="Pick a date" />
    <br />
    <br />
    <el-date-picker
      type="daterange"
      range-separator="-"
      start-placeholder="Дата Начала"
      end-placeholder="Дата Окончания"
      :picker-options="pickerOptions"
    />
    <br />
    <br />
    <el-date-picker
      type="daterange"
      range-separator="-"
      start-placeholder="Дата Начала"
      end-placeholder="Дата Окончания"
    />
  </div>
</template>

<script>
export default {
  name: 'DatePickers',
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: 'Сегодня',
          },
          {
            text: 'Эта неделя',
          },
          {
            text: 'Этот месяц',
          },
          {
            text: 'Этот год',
          },
        ],
      },
      value1: '',
      value2: '',
    };
  },
};
</script>


<style lang="scss">
</style>
