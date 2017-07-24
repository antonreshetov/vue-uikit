<template>
    <table class="uk-table">
        <slot></slot>
        <table-body ref="table-body"></table-body>
    </table>
</template>
<script>
import TableBody from './body'

export default {
    name: 'VuTable',

    props: {
        source: Array
    },

    components: {
        TableBody
    },

    data () {
        return {}
    }
}
</script>
<style>

</style>
