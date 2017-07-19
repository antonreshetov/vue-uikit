import Vue from 'vue'
import VuAlert from './Alert.vue'

export default {
    open (params) {
        const AlertConstructor = Vue.extend(VuAlert)
        return new AlertConstructor({
            el: document.createElement('div'),
            propsData: params
        })
    }
}
