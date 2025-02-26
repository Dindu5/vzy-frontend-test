import { createRouter, createWebHistory } from 'vue-router'
import Poll from '../views/Poll.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Poll,
    },
  ],
})

export default router
