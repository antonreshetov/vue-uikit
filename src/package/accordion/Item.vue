<template>
    <li>
        <h3 class="uk-accordion-title">{{title}}</h3>
        <div class="uk-accordion-content"><slot></slot></div>
    </li>
</template>
<script>
export default {
    name: 'VuAccordionItem',

    props: {
        title: String
    },

    data () {
        return {}
    }
}
</script>
<style>

</style>
