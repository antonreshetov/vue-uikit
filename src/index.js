import VuAlert from './package/alert/Alert.vue'
import VuAlertFn from './package/alert/alert'
import VuTable from './package/table/Table.vue'
import VuTableColumn from './package/table/Column.vue'

const components = [
    VuAlert,
    VuTable,
    VuTableColumn
]

window._ = require('lodash')

const VueUIkit = {
    install (Vue, options) {
        components.map(component => {
            Vue.component(component.name, component)
        })

        Vue.prototype.$alert = VuAlertFn
    }
}
export default VueUIkit
