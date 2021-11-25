import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('@/views/Home/index.vue') }, 
  { path: '/video/:id', component: () => import('@/views/Video/index.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
