import Vue from 'vue';
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ru-RU';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/styles/theme.scss';
import '@/assets/styles/icons.scss';
import 'nouislider/distribute/nouislider.css';
import '@/assets/styles/vue-nouislider.scss';

Highcharts.setOptions({
  lang: {
    decimalPoint: ',',
    thousandsSep: ' ',
  },
  colors: ['#0082c8', '#a6ccea', '#cc1439', '#e68c7c', '#53b336', '#a5d38e', '#e68a00', '#f3da61', '#976bb3', '#ccb8cc'],
});

Vue.use(HighchartsVue);

Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App),
}).$mount('#app');
