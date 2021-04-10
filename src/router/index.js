import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/option',
    name: 'Option',
    component: () => import('../views/Option.vue')
  },
  {
    path: '/composition',
    name: 'Composition',
    component: () => import('../views/Composition.vue')
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('../views/Vuex.vue')
  },
  {
    path: '/vuexOption',
    name: 'VuexOption',
    component: () => import('../views/VuexOption.vue')
  },
  {
    path: '/vuexComposition',
    name: 'VuexComposition',
    component: () => import('../views/VuexComposition.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/Todo.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
