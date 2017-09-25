<template>
    <li :class="{'uk-open': open }">
        <h3 class="uk-accordion-title">{{title}}</h3>
        <div class="uk-accordion-content"><slot></slot></div>
    </li>
</template>
<script>
export default {
    name: 'VuAccordionItem',

    props: {
        title: String,
        open: {
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
