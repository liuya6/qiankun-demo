import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Layout from '@/views/layout/layout.vue'
import SubContainer from '@/components/SubContainer/SubContainer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path: '/',
      redirect: '/home',
      component: Layout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView
        }
      ]
    },
    {
      path: '/about',
      redirect: '/about/detail',
      component: Layout,
      children: [
        {
          path: 'detail',
          name: 'detail',
          component: () => import('../views/AboutView.vue')
        }
      ]
    },
    {
      path: '/form',
      redirect: '/form/formDemo',
      component: Layout,
      children: [
        {
          path: 'formDemo',
          name: 'formDemo',
          component: () => import('../views/formDemo/formDemo.vue')
        }
      ]
    },
    {
      path: '/table',
      redirect: '/table/tableDemo',
      component: Layout,
      children: [
        {
          path: 'tableDemo',
          name: 'tableDemo',
          component: () => import('../views/tableDemo/tableDemo.vue')
        }
      ]
    },
    {
      path: '/vue2',
      redirect: '/vue2/home',
      component: Layout,
      children: [
        {
          path: 'home/:pathMatch(.*)*',
          name: 'vue2',
          component: SubContainer
        }
      ]
    },
    {
      path: '/vue3',
      redirect: '/vue3/home',
      component: Layout,
      children: [
        {
          path: 'home/:pathMatch(.*)*',
          name: 'vue3',
          component: SubContainer
        }
      ]
    },
    {
      path: '/react',
      redirect: '/react/home',
      component: Layout,
      children: [
        {
          path: 'home/:pathMatch(.*)*',
          name: 'react',
          component: SubContainer
        }
      ]
    }
  ]
})

export default router
