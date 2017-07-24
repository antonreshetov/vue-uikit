<template>

</template>
<script>
export default {
    name: 'VuTableColumn',

    props: {
        col: String,
        label: String
    },

    data () {
        return {
            column: []
        }
    },

    mounted () {
        this.fetch()
    },

    methods: {
        fetch () {
            this.$parent.source.forEach((row, index) => {
                this.column.push(row[this.col])
            })
        }
    }
}
</script>
