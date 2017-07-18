import './bootstrap'

import Vue from 'vue'
import VueUIkit from '../src/index'

import Index from './Index.vue'

Vue.use(VueUIkit)

/* eslint-disable no-new */
new Vue({
    el: '#examples',
    render: h => h(Index)
})
