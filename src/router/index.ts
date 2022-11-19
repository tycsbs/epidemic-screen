import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
       component:() => import('@/components/core/starSky.vue'),
       path:'/',
       children:[
        // {
        //   component: () => import('@/components/core/starSky.vue'),
        //   path: '/skyStar'
        // }
       ]
     }
  ]
})

export default router
