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
            path: '/:page',
            component: Page
        }
    ]
})

export default router
