import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './../../components/Home.vue';
import Detail from './../../components/Detail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
		component: Home,
  },
  {
    path: '/detail/:id',
		component: Detail,
  }
];

export const router = new VueRouter({
  // mode: 'history',
	routes,
});

Vue.router = router;

export default router;
