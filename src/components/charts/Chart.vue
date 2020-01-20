<template>
  <highcharts class="chart" :options="chartOptions"></highcharts>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  name: 'Chart',
  props: {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    series: {
      type: Array,
      required: true,
    },
    colors: {
      type: Array,
      default() {
        return ['#99E2F1', '#EAE9E5', '#C798F2', '#FFC48C', '#FEF13F'];
      },
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
      const defaultChartOptions = {
        credits: {
          enabled: false,
        },
        chart: {
          type: this.type,
          spacingBottom: 5,
          marginLeft: 80,
        },
        legend: { enabled: false },
        tooltip: {
          enabled: true,
          formatter() {
            let points;
            if (this.point) {
              points = [this];
            } else {
              ({ points } = this);
            }

            let tooltip = '';
            for (let i = 0; i < points.length; i += 1) {
              if (points[i].point.tooltip) {
                tooltip += points[i].point.tooltip;
              } else {
                const { point } = points[i];
                tooltip += `${this.x}: <b>${Highcharts.numberFormat(point.y, -1)}</b>`;
              }
              tooltip += (i === points.length - 1 ? '' : '<br>');
            }
            return tooltip;
          },
        },
        title: {
          text: this.title,
          style: {
            color: '#000000',
            fontWeight: 'bold',
          },
          align: 'left',
          x: 90,
        },
        colors: this.colors,
        series: this.series,
      };

      return {
        ...defaultChartOptions,
        ...this.options,
      };
    },
  },
};

</script>
