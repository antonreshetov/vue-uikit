<template>
    <ul uk-accordion
        :collapsible="collapsible"
        :multiple="multiple">
        <slot></slot>
    </ul>
</template>
<script>
export default {
    name: 'VuAccordion',

    props: {
        collapsible: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {}
    }
}
</script>
<style>

</style>
