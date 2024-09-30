import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import SinglePageTodoList from '../pages/SinglePageTodoList.vue'
import About from '../pages/about.vue'

const routes = [
  {
    path: '/',
    name: Home,
    component: Home
  },
  {
    path: '/about',
    name: About,
    component: About
  },
  {
    path: '/todo',
    name: SinglePageTodoList,
    component: SinglePageTodoList
  },
]

const router = createRouter({
  // history: createMemoryHistory(),
  history: createWebHistory(),
  routes,
})

export default router;