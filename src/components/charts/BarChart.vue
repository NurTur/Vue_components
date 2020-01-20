<template>
    <highcharts :options="chartOptions" />
</template>

<script>

export default {
  name: 'BarChart',
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
        chart: {
          type: 'bar',
          spacingBottom: 5,
          spacingTop: 0,
          spacingLeft: 120,
          spacingRight: 30,
        },
        title: {
          text: this.title,
        },
        plotOptions: {
          bar: {
            stacking: null,
            stickyTracking: false,
            borderWidth: 0,
          },
        },
        series: this.series,
        legend: { enabled: false },
        xAxis: {
          type: 'category',
          tickWidth: 0,
          gridLineWidth: 0,
          lineWidth: 0,
          margin: 0,
          title: { text: '', x: -6, margin: 5 },
          labels: {
            y: null,
            align: 'left',
            distance: 500,
            x: -100,
            rotation: 0,
            padding: 15,
            style: {
              fontSize: '13px',
              fontFamily: 'Verdana, sans-serif',
              color: '#91BE95',

            },
            formatter() {
              return this.value;
            },
          },
          categories: ['dd'],
        },
        yAxis: {
          title: { text: '', enabled: false },
          labels: { y: 16, enabled: false },
          min: 0,
          gridLineWidth: 0,
        },
        ...this.options,
      };
    },
  },
};

</script>
