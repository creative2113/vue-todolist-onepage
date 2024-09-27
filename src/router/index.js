import { createMemoryHistory, createRouter } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Todo from '../components/todo.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/todo', component: Todo },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;