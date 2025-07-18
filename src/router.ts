import { createRouter, createWebHistory } from 'vue-router';

const routes = [
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
