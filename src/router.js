import vue from 'vue';
import VueRouter from 'vue-router';

import checkout from './views/checkout.vue';

vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'checkout',
    component: checkout,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
