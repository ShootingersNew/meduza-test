import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/Home/index.vue'
import AuthPage from '@/pages/Auth/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'auth',
      component: AuthPage,
    },
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
  ],
})

export default router
