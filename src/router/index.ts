import { createRouter, createWebHistory } from 'vue-router';
import BLayout from '@/layout/BLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      component: BLayout,
      path: '/',
      children: []
    }
  ],
});

export default router;
