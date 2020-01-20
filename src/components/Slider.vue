<template>
  <div class="abk-slider range-slider">
    <div :id="`vue-nouislider-${id}`"></div>
  </div>
</template>

<script>
import noUiSlider from 'nouislider';

export default {
  name: 'Slider',
  props: {
    id: {
      type: String,
      default() {
        return Math.random().toString(36).substr(2, 4);
      },
    },
    options: {
      type: Object,
    },
    value: {
      type: [Array, Number],
      required: true,
    },
  },
  data() {
    return {
      init: false,
    };
  },
  computed: {
    slider() {
      return document.getElementById(`vue-nouislider-${this.id}`);
    },
    sliderOptions() {
      return {
        ...{
          connect: true,
          range: {
            min: 0,
            max: 100,
          },
          direction: 'ltr',
          step: 1,
          pips: {
            mode: 'positions',
            values: [
              0,
              25,
              50,
              75,
              100,
            ],
            density: 4,
            stepped: true,
          },
          tooltips: true,
        },
        ...(this.options || {}),
      };
    },
  },
  mounted() {
    const vnus = this;
    vnus.sliderOptions.start = vnus.value;
    noUiSlider.create(vnus.slider, vnus.sliderOptions);
    vnus.slider.noUiSlider.on('update', (values) => {
      vnus.$emit('update', values);
    });
  },
  watch: {
    value(nv) {
      if (this.init) {
        let nus = this.slider.noUiSlider.get();
        if (!Array.isArray(nus)) nus = [nus];
        if (JSON.stringify(nus) !== JSON.stringify(nv)) this.slider.noUiSlider.set(nv);
      } else {
        this.init = true;
      }
    },
  },
};
</script>

<style lang="scss">
</style>
