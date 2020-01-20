<template>
    <Chart type="area" :title="title" :series="series" :options="chartOptions" />
</template>

<script>
import Chart from './Chart.vue';

export default {
  name: 'AreaChart',
  components: {
    Chart,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    series: {
      type: Array,
      required: true,
    },
    options: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    chartOptions() {
      return {
        plotOptions: {
          area: {
            stickyTracking: false,
            stacking: 'normal',
          },
          series: {
            pointStart: 0,
          },
        },
        xAxis: {
          title: { text: '' },
          type: 'linear',
          gridLineWidth: 0,
          tickmarkPlacement: 'on',
          startOnTick: false,
        },
        yAxis: { title: { text: '' } },
        ...this.options,
      };
    },
  },
};

</script>
