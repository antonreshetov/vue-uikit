<template>
    <div uk-alert :class="currentClass">
        <a v-if="closeBtn" class="uk-alert-close" uk-close></a>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'VuAlert',

    props: {
        closeBtn: Boolean,
        type: String
    },

    data () {
        return {
            currentClass: '',
            acceptedClass: {
                primary: 'uk-alert-primary',
                success: 'uk-alert-success',
                warning: 'uk-alert-warning',
                alert: 'uk-alert-alert'
            }
        }
    },

    created () {
        this.checkType()
    },

    methods: {
        checkType () {
            let keys = Object.keys(this.acceptedClass)
            keys.forEach(key => {
                if (key === this.type) this.currentClass = this.acceptedClass[key]
            })
        }
    }
}
</script>
