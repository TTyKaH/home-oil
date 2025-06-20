import { createRouter, createWebHistory } from 'vue-router'

// layouts
import DefaultLayout from '@/layouts/default.vue'
// views
import Home from '@/views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home,
        },
      ],
    },
  ],
})

export default router
