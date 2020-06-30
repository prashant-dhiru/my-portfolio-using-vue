import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/projects.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/projects',
    name: 'Home',
    component: Home
  },
  { path: '/',
    name: 'Projects',
    component: Home
  },
  {
    path: '/papers',
    name: 'Papers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/papers.vue')
  },
  {
    path: '/achievements',
    name: 'Achievements',
    component: () => import('../views/achievements.vue')
  },
  {
    path: '/certificates',
    name: 'Certificates',
    component: () => import('../views/certificates.vue')
  } 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
