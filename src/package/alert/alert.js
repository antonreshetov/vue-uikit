import Vue from 'vue'
import VuAlert from './Alert.vue'

export default {
  open (params) {
    const AlertConstructor = Vue.extend(VuAlert)

    const defaultParams = {
      programmatic: true
    }

    const propsData = Object.assign(defaultParams, params)

    return new AlertConstructor({
      el: document.createElement('div'),
      propsData
    })
  }
}
