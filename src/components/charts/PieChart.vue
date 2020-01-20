<template>
    <Chart type="pie" :title="title" :series="series" :options="chartOptions" />
</template>

<script>
import Chart from './Chart.vue';

export default {
  name: 'PieChart',
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
        tooltip: {
          enabled: true,
          formatter() {
            if (this.point.tooltip) {
              return this.point.tooltip;
            }
            return `${this.point.name}: <b>${this.y}</b>`;
          },
        },
        plotOptions: {
          pie: {
            innerSize: '25%',
            dataLabels: {
              enabled: false,
              formatter() {
                return `${this.point.name}: ${this.point.y}`;
              },
            },
            showInLegend: true,
            stickyTracking: false,
            point: { events: { legendItemClick() { return false; } } },
          },
        },
        legend: {
          align: 'right',
          verticalAlign: 'middle',
          layout: 'vertical',
          x: -100,
          y: 0,
          itemMarginBottom: 5,
          itemStyle: {
            color: '#D3D3D3',
          },
          floating: false,
        },
        ...this.options,
      };
    },
  },
};

</script>
