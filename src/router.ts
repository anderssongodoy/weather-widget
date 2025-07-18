import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/weather',
    name: 'Weather',
    component: () => import('./modules/weather/WeatherWidget.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
