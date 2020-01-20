import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: () => import(/* webpackChunkName: "buttons" */ '../views/Buttons.vue'),
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: () => import(/* webpackChunkName: "Notifications" */ '../views/Notifications.vue'),
  },
  {
    path: '/avatar',
    name: 'avatar',
    component: () => import(/* webpackChunkName: "Avatar" */ '../views/Avatar.vue'),
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: () => import(/* webpackChunkName: "Tabs" */ '../views/Tabs.vue'),
  },
  {
    path: '/date-pickers',
    name: 'DatePickers',
    component: () => import(/* webpackChunkName: "buttons" */ '../views/DatePickers.vue'),
  },
  {
    path: '/charts',
    name: 'charts',
    component: () => import(/* webpackChunkName: "charts" */ '../views/Charts.vue'),
  },
  {
    path: '/components',
    name: 'components',
    component: () => import(/* webpackChunkName: "charts" */ '../views/Components.vue'),
  },
  {
    path: '/labels',
    name: 'labels',
    component: () => import(/* webpackChunkName: "labels" */ '../views/Labels.vue'),
  },
  {
    path: '/inputs',
    name: 'inputs',
    component: () => import(/* webpackChunkName: "labels" */ '../views/Inputs.vue'),
  },
  {
    path: '/tables',
    name: 'tables',
    component: () => import(/* webpackChunkName: "tables" */ '../views/Tables.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
