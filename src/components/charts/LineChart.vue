<template>
    <Chart type="line" :title="title" :series="series" :options="chartOptions" />
</template>

<script>
import Chart from './Chart.vue';

export default {
  name: 'LineChart',
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
          line: {
            stickyTracking: false,
          },
          series: {
            pointStart: 0,
          },
        },
        xAxis: {
          title: { text: '' },
          type: 'linear',
          gridLineWidth: 1,
          tickmarkPlacement: 'on',
          startOnTick: false,
        },
        yAxis: [
          {
            gridLineWidth: 0,
            title: {
              text: '',
            },
            labels: {
              align: 'left',
              x: -20,
              y: 0,
            },
            showFirstLabel: true,
          },
          {
            linkedTo: 0,
            opposite: true,
            gridLineWidth: 0,
            title: {
              text: '',
            },
            labels: {
              align: 'right',
              x: 3,
              y: 16,
              format: '{value:}',
            },
            showFirstLabel: false,
          },
        ],
        ...this.options,
      };
    },
  },
};

</script>
