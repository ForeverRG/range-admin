import { cacheHelper } from '@/utils'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    name: 'main',
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 前置守卫判断路由
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = cacheHelper.getCache('token')
    if (!token) {
      return '/login'
    }
  }
})

export default router
