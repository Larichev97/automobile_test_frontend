import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'vehicle',
      component: () => import('../views/Vehicle.vue')
    }
  ]
})

export default router
