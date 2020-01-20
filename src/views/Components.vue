<template>
  <div class="components">
      <el-row :gutter="30">
        <el-col :sm="24" :md="12" :lg="8">
          <h2>Прогресс:</h2>
          <Progress :percentage="85" />
          <br />
          <Progress :percentage="100" status="success" />
          <br />
          <Progress :percentage="5" status="exception" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <h2>Индикаторы:</h2>
          <Indicator :value="12" />
          <br />
          <Indicator :value="-12" />
          <br />
          <Indicator :value="-6" />
          <br />
          <Indicator :value="0" />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <h2>Graph:</h2>
          <Graph
            :progressValue="50"
            :label="50"
            text="Всего записей"
          />
        </el-col>
      </el-row>
      <h2>Graph:</h2>
      <el-row :gutter="30">
        <el-col :sm="24" :md="12" :lg="8">
          <Graph
            :indicatorValue="12"
            :progressValue="50"
            :label="50"
            align="left"
            text="Всего записей"
          />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <Graph
            :indicatorValue="12"
            :chartSeries="chartSeries"
            :label="50"
            align="left"
            text="Всего записей"
          />
        </el-col>
        <el-col :sm="24" :md="12" :lg="8">
          <Graph
            :indicatorValue="-12"
            :chartSeries="chartSeries"
            :label="50"
            markerColor="#FF0000"
            align="left"
            text="Всего записей"
          />
        </el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :sm="24" :lg="12">
          <Slider :value="[15, 75]"></Slider>
        </el-col>
        <el-col :sm="24" :lg="12">
          <Slider :value="5000" :options="{ range: { min: 1500, max: 18464 }, step: 100 }"></Slider>
        </el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :sm="24" :lg="12">
          <Icons></Icons>
        </el-col>
        <el-col :sm="24" :lg="12">
        </el-col>
      </el-row>
  </div>
</template>

<script>
import Progress from '@/components/Progress.vue';
import Indicator from '@/components/Indicator.vue';
import Graph from '@/components/Graph.vue';
import Slider from '@/components/Slider.vue';
import Icons from '@/views/Icons.vue';

export default {
  name: 'progresses',
  components: {
    Progress,
    Indicator,
    Graph,
    Slider,
    Icons,
  },
  data() {
    return {
      chartSeries: [{ name: ' ', data: [{ y: 23 }, { y: 65 }, { y: 45 }, { y: 87 }, { y: 78 }] }],
    };
  },
};
</script>

<style lang="scss" scoped>
  .components {
    text-align: left;
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
