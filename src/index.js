const components = [

]

const VueUIkit = {
    install (Vue, options) {
        components.map(component => {
            Vue.component(component.name, component)
        })
    }
}
export default VueUIkit
