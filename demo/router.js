import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from './Index.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    history: true,
    linkActiveClass: 'uk-active',
    routes: [
        {
            path: '/:page',
            component: Index
        }
    ]
})

export default router
