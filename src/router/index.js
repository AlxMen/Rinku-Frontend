import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import SubscriptionView from '../views/SubscriptionView.vue'
import AboutUsViewVue from '../views/AboutUsView.vue'
import FAQView from '../views/FAQView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/subscription',
    name: 'subscription',
    component: SubscriptionView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUsViewVue
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AuthView.vue')
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FAQView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
