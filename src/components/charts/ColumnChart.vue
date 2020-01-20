<template>
    <highcharts :options="chartOptions" />
</template>

<script>

export default {
  name: 'ColumnChart',
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
    },
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          type: 'column',
          spacingBottom: 5,
          marginLeft: 30,
          marginRight: 30,
        },
        plotOptions: {
          column: {
            stacking: null,
            stickyTracking: false,
            borderWidth: 0,
          },
          series: {
            color: '#EAE9E5',
            pointWidth: 70,
            pointPadding: 0.5,
            groupPadding: 0.5,
          },
        },
        legend: {
          floating: false,
          layout: 'horizontal',
          align: 'left',
          verticalAlign: 'bottom',
          enabled: true,
          itemMarginBottom: 5,
          itemDistance: 100,
          itemStyle: {
            color: '#A3A3A3',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'normal',
            textOverflow: 'ellipsis',
          },
          x: 25,
        },
        tooltip: {
          enabled: true,
        },
        xAxis: {
          title: {
            text: '',
            enabled: false,
          },
          categories: [
            'pd',
            'dd',
            'dfg',
            'dsf',
            'sdf',
            'dfdg',
          ],
          alignTicks: false,
          tickWidth: 0,
          gridLineWidth: 0,
          lineWidth: 0,
          margin: 0,
          labels: {
            enabled: false,
          },
        },
        yAxis: {
          title: {
            text: '',
            enabled: false,
          },
          labels: {
            enabled: false,
          },
          min: 0,
          gridLineWidth: 0,
        },
        series: this.series,
        title: {
          text: this.title,
          align: 'left',
          x: 30,
          y: 30,
          style: {
            color: '#000000',
            fontWeight: 'bold',
          },
        },
        ...this.options,
      };
    },
  },
};

</script>
