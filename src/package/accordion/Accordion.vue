<template>
    <ul uk-accordion
        :collapsible="collapsible"
        :multiple="multiple"
        :animation="animation"
        :transition="transition"
        :duration="duration">
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
        },
        animation: {
            type: Boolean,
            default: true
        },
        transition: {
            type: String,
            default: 'ease'
        },
        duration: {
            type: Number,
            default: 200
        }
    },

    data () {
        return {}
    }
}
</script>
<style>

</style>
