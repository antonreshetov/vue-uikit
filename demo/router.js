import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from './components/Page.vue'
import Welcome from './components/Welcome.vue'

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
        }
    ]
})

export default router
