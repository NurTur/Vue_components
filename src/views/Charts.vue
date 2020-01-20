<template>
  <div class="charts">
    <el-row>
      <el-col :sm="12">
        <PieChart :series="pieChartSeries" title="Попадание в список" />
      </el-col>
      <el-col :sm="12">
        <PieChart :series="pieChartsSeries" title="Скомпрометированный канал" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :sm="12">
        <LineChart :series="lineChartsSeries" title="Сохранено средств" />
      </el-col>
      <el-col :sm="12">
        <ColumnChart :series="columnChartSeries" title="Инциденты по типам операций"></ColumnChart>
      </el-col>
    </el-row>
    <el-row>
      <el-col :sm="12">
        <AreaChart :series="areaChartsSeries" title="Сохранено средств" />
      </el-col>
      <el-col :sm="12">
        <AreaChart
          title="Сохранено средств"
          :series="areaChartSeries"
          :options="areaChartOptions"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col :sm="12" :offset="12">
        <BarChart :series="barChartsSeries" title="World's largest cities per 2017" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import LineChart from '../components/charts/LineChart.vue';
import AreaChart from '../components/charts/AreaChart.vue';
import PieChart from '../components/charts/PieChart.vue';
import BarChart from '../components/charts/BarChart.vue';
import ColumnChart from '../components/charts/ColumnChart.vue';

export default {
  name: 'Charts',
  components: {
    LineChart,
    AreaChart,
    PieChart,
    BarChart,
    ColumnChart,
  },
  data() {
    return {
      pieChartSeries: [
        {
          name: ' ',
          data: [
            { name: 'ddryvrt', y: 10 },
            { name: 'ddffdgdfgdfgdfg', y: 90 },
          ],
        },
      ],
      pieChartsSeries: [
        {
          name: ' ',
          data: [
            { name: 'ddryvrt', y: 10 },
            { name: 'ddffdgdfgdfgdfg', y: 90 },
            { name: 'sdfsdf', y: 80 },
            { name: 'dsf', y: 80 },
            { name: 'dfgdf', y: 56 },
          ],
        },
      ],
      lineChartsSeries: [{
        data: [
          [0.5, 29.9],
          [1, 29.9],
          [1.5, 29.9],
          [2, 71.5],
          [3.5, 29.9],
          [4, 29.9],
          [4.5, 29.9],
          [5, 71.5],
        ],
        color: '#708C52',
        name: 'dd',
      }, {
        data: [
          [0.5, 60.9],
          [1, 70.9],
          [1.5, 40.9],
          [2, 71.5],
          [3.5, 50.9],
          [4, 98.9],
          [4.5, 67.9],
          [5, 88.5],
        ],
        color: '#7B2E36',
        name: 'dd',
      }, {
        data: [
          [0.5, 90.9],
          [1, 80.9],
          [1.5, 60.9],
          [2, 21.5],
          [3.5, 80.9],
          [4, 78.9],
          [4.5, 77.9],
          [5, 88.5],
        ],
        color: '#E5E5E5',
        name: 'dd',
      }],
      columnChartSeries: [
        {
          name: 'Сохранено средст7в',
          data: [
            { y: 700, color: '#FFC48C' },
            { y: null },
            { y: null },
            { y: null },
            { y: null },
            { y: null },
          ],
          color: '#FFC48C',
        },
        {
          name: 'Сохранено средст4в',
          data: [
            { y: null },
            { y: 300, color: '#9EE076' },
            { y: null },
            { y: null },
            { y: null },
            { y: null },
          ],
          color: '#9EE076',
        },
        {
          name: 'Сохранено сред5ств',
          data: [
            { y: null },
            { y: null },
            { y: 770, color: '#99E2F1' },
            { y: null },
            { y: null },
            { y: null },
          ],
          color: '#99E2F1',
        },
        {
          name: 'Сохранено средст3в',
          data: [
            { y: null },
            { y: null },
            { y: null },
            { y: 457, color: '#FEF143' },
            { y: null },
            { y: null },
          ],
          color: '#FEF143',
        },
        {
          name: 'Сохранено средст2в',
          data: [
            { y: null },
            { y: null },
            { y: null },
            { y: null },
            { y: 787, color: '#FF5F2D' },
            { y: null },
          ],
          color: '#FF5F2D',
        },
        {
          name: 'Сохранено средс',
          data: [
            { y: null },
            { y: null },
            { y: null },
            { y: null },
            { y: null },
            { y: 56, color: '#C698F2' },
          ],
          color: '#C698F2',
        },
      ],
      areaChartsSeries: [{
        data: [
          [0.5, 29.9],
          [1, 29.9],
          [1.5, 29.9],
          [2, 71.5],
          [3.5, 29.9],
          [4, 29.9],
          [4.5, 29.9],
          [5, 71.5],
        ],
        color: '#FFC907',
        name: 'dd',
      }, {
        data: [
          [0.5, 60.9],
          [1, 70.9],
          [1.5, 40.9],
          [2, 71.5],
          [3.5, 50.9],
          [4, 98.9],
          [4.5, 67.9],
          [5, 88.5],
        ],
        color: '#FF6026',
        name: 'dd',
      }],
      areaChartSeries: [{
        data: [
          [0.5, 29.9],
          [1, 29.9],
          [1.5, 29.9],
          [2, 71.5],
          [3.5, 29.9],
          [4, 29.9],
          [4.5, 29.9],
          [5, 71.5],
        ],
        color: '#92C75B',
        name: 'dd',
      }],
      areaChartOptions: {
        xAxis: {
          title: { text: '' },
          type: 'linear',
          gridLineWidth: 1,
          tickmarkPlacement: 'on',
          startOnTick: false,
        },
        yAxis: {
          title: { text: '' },
          gridLineWidth: 0,
          tickAmount: 8,
          minorTickWidth: 1,

        },
      },
      barChartsSeries: [{
        name: 'Population',
        data: [{
          y: 24.2,
          name: 'Shanghai',
          pointWidth: 16,
        }, {
          y: 20.8,
          name: 'Beijing',
          pointWidth: 16,
        }, {
          y: 14.9,
          name: 'Karachi',
          pointWidth: 16,
        }, {
          y: 13.7,
          name: 'Shenzhen',
          pointWidth: 16,
        }, {
          y: 13.1,
          name: 'Guangzhou',
          pointWidth: 16,
        }],
        dataLabels: {
          enabled: true,
          rotation: 0,
          color: '#000000',
          align: 'right',
          formatter() {
            return this.y;
          },
          y: 0,
          x: 35,
          style: {
            fontSize: '12px',
            fontFamily: 'Verdana, sans-serif',
            fontWeight: 'normal',
          },
        },
      }],
    };
  },
};

</script>
