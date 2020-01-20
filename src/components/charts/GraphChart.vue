<template>
  <highcharts class="graph-chart" :options="chartOptions"></highcharts>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  name: 'GraphChart',
  props: {
    series: {
      type: Array,
      required: true,
    },
    markerColor: {
      type: String,
      default() {
        return '#88E03E';
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
          type: 'spline',
          spacingBottom: 5,
          inverted: false,
          animation: false,
          height: '50%',
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
          text: '',
        },
        colors: ['#e1e4e9'],
        plotOptions: {
          line: { stickyTracking: false },
          series: {
            marker: {
              enabled: false,
              fillColor: this.markerColor,
              lineWidth: 0,
              lineColor: '#ffffff', // inherit from series
              hover: {
                enabled: true,
              },
            },
          },
        },
        xAxis: {
          title: { text: '' },
          categories: ['dd', 'dd', 'dd', 'dd', 'dd'],
          gridLineWidth: 1,
          gridLineColor: '#e5e5ea',
          tickColor: '#e5e5ea',
          lineColor: '#e5e5ea',
          visible: false,
        },
        yAxis: {
          title: { text: '' },
          gridLineWidth: 0,
          visible: false,
        },
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
