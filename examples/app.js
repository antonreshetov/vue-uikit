import './bootstrap'

import Vue from 'vue'
import router from './router'
import VueUIkit from '../src/index'

import Index from './Index.vue'

Vue.use(VueUIkit)

/* eslint-disable no-new */
new Vue({
    el: '#examples',
    router,
    render: h => h(Index)
})
