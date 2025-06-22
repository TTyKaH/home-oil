import { createRouter, createWebHistory } from 'vue-router'

// layouts
import DefaultLayout from '@/layouts/default.vue'
// views
import Contacts from '@/views/contacts.vue'
import OilList from '@/views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'oil-list',
          component: OilList,
        },
        {
          path: '/contacts',
          name: 'contacts',
          component: Contacts,
        },
      ],
    },
  ],
})

export default router
