import VuAccordion from './package/accordion/Accordion.vue'
import VuAccordionItem from './package/accordion/Item.vue'
import VuAlert from './package/alert/Alert.vue'
import VuAlertFn from './package/alert/alert'
import VuButton from './package/button/Button.vue'

const components = [
    VuAccordion,
    VuAccordionItem,
    VuAlert,
    VuButton
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
