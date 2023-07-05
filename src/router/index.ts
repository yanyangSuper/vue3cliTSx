/*
 * @Author: yangyang 1710001012@qq.com
 * @Date: 2023-06-06 13:25:09
 * @LastEditors: yangyang 1710001012@qq.com
 * @LastEditTime: 2023-07-05 17:31:49
 * @FilePath: /vueclits/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    redirect: '/login'
    // component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About/about'),
    meta: {
      title: '关于',
      icon: 'table',
      roles: 'admin'
    },
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/login'),
    meta: {
      title: '登录',
      icon: 'table'
    },
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../layout/index'),
    meta: {
      title: '首页',
      icon: 'table'
    },
    redirect: '/general',
    children: [
      {
        path: '/general',
        name: '首页',
        component: () => import('../views/Login/register/index')
      }
    ]
  }
]

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/authority',
    name: 'authority',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/login'),
    meta: {
      title: '权限管理',
      icon: 'authority',
    },
  },
]
export { constantRoutes, asyncRoutes }

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes
})

export default router
