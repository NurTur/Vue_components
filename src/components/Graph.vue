<template>
  <div class="graph">
    <Indicator
      v-if="indicatorValue !== undefined"
      class="graph__indicator"
      :value="indicatorValue"
    />
    <div class="graph__body">
      <div
        class="graph__content"
        :class="{ [`graph__content--${align}`]: true, 'graph__content--chart': chartSeries }"
      >
        <div v-if="label !== undefined" class="graph__label">{{label}}</div>
        <div v-if="text !== undefined" class="graph__text">{{text}}</div>
      </div>
      <GraphChart
        v-if="chartSeries !== undefined"
        class="graph__chart"
        :series="chartSeries"
        :markerColor="markerColor"
      />
    </div>
    <Progress
      v-if="progressValue !== undefined"
      :percentage="50"
      :show-text="false"
      :status="progressStatus"
      class="graph__progress"
    />
  </div>
</template>

<script>
import Indicator from '@/components/Indicator.vue';
import Progress from '@/components/Progress.vue';
import GraphChart from '@/components/charts/GraphChart.vue';

export default {
  name: 'Graph',
  components: {
    Indicator,
    Progress,
    GraphChart,
  },
  props: {
    indicatorValue: {
      type: Number,
    },
    progressValue: {
      type: Number,
    },
    text: [String, Number],
    label: [String, Number],
    align: {
      type: String,
      default: 'center',
      validator: align => ['center', 'left'].includes(align),
    },
    progressStatus: {
      type: String,
      default: 'success',
    },
    chartSeries: {
      type: Array,
    },
    markerColor: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
  .graph {
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px solid #e1e4e9;
    border-radius: 18px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    min-height: 60px;
    padding: 16px 12px;

    &__content {
      display: flex;
      flex-direction: column;
      margin-right: 10px;
      &:not(.graph__content--chart) {
        margin-right: 0;
        width: 100%;
      }
      &--center {
        align-items: center;
      }
      &--left {
        align-items: flex-start;
        .graph {
          &__label {
            display: flex;
            align-items: center;
            font-size: 40px;
            font-weight: 800;
            color: #616161;
            min-height: 60px;
          }
          &__text {
            margin-bottom: 5px;
            order: -1;
          }
        }
      }
    }
    &__progress {
      margin-top: 10px;
    }
    &__indicator {
      position: absolute;
      top: 16px;
      right: 16px;
      z-index: 10;
    }
    &__body {
      margin-bottom: auto;
      display: flex;
      width: 100%;
    }
    &__label {
      font-size: 55px;
      color: gray;
    }
    &__text {
      font-weight: 600;
    }
    &__chart {
      width: 200px;
    }
  }
</style>
