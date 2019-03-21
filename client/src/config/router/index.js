import Vue from 'vue';
import Router from 'vue-router';
import beforeEach from './beforeEach';
import { routes as app } from '../../app/';

Vue.use(Router);

const routes = [...app];
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes
  // routes: [
  //   {
  //     path: '/login',
  //     component: () => import('./../templates/auth/Login'),
  //     meta: { requiresAuth: false },
  //     children: [
  //       {
  //         name: 'login',
  //         path: '',
  //         component: () => import('./../views/Login'),
  //       },
  //     ],
  //   },
  // ]
});

router.beforeEach(beforeEach);

export default router;
