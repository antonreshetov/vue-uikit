import VuAlert from './package/alert/Alert.vue'

const components = [
    VuAlert
]

const VueUIkit = {
    install (Vue, options) {
        components.map(component => {
            Vue.component(component.name, component)
        })
    }
}
export default VueUIkit
