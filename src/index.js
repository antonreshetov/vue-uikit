import VuAccordion from './package/accordion/Accordion.vue'
import VuAccordionItem from './package/accordion/Item.vue'
import VuAlert from './package/alert/Alert.vue'
import VuAlertFn from './package/alert/alert'
import VuButton from './package/button/Button.vue'
import VuDrop from './package/drop/Drop.vue'
import DTag from './helpers/DynamicTag'

const components = [
  VuAccordion,
  VuAccordionItem,
  VuAlert,
  VuButton,
  VuDrop,
  DTag
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
