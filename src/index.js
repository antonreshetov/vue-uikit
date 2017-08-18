import VuAccordion from './package/accordion/Accordion.vue'
import VuAlert from './package/alert/Alert.vue'
import VuAlertFn from './package/alert/alert'

const components = [
    VuAccordion,
    VuAlert
]

const VueUIkit = {
    install (Vue, options) {
        components.map(component => {
            Vue.component(component.name, component)
        })

        Vue.prototype.$alert = VuAlertFn
    }
}
export default VueUIkit
