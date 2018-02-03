import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from './components/Page.vue'
import Welcome from './components/Welcome.vue'
import Workbench from './components/Workbench.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  history: true,
  linkActiveClass: 'uk-active',
  routes: [
    {
      path: '/',
      component: Welcome
    },
    {
      path: '/components/:page',
      component: Page,
      meta: 'docs'
    },
    {
      path: '/changelog',
      component: Page,
      meta: 'page'
    },
    {
      path: '/workbench',
      component: Workbench
    }
  ]
})

export default router
