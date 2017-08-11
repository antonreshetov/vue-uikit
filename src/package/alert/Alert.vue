<template>
    <div uk-alert :class="currentClass">
        <a v-if="closeBtn" class="uk-alert-close" uk-close @click="close"></a>
        <slot>{{content}}</slot>
    </div>
</template>
<script>
export default {
    name: 'VuAlert',

    props: {
        closeBtn: Boolean,
        type: String,
        el: String,
        animation: {
            type: Boolean,
            default: true
        },
        duration: {
            type: Number,
            default: 150
        },
        programmatic: {
            type: Boolean,
            default: false
        },
        content: String
    },

    data () {
        return {
            currentClass: '',
            acceptedClass: {
                primary: 'uk-alert-primary',
                success: 'uk-alert-success',
                warning: 'uk-alert-warning',
                danger: 'uk-alert-danger'
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
        },
        close () {
            setTimeout(() => {
                this.$destroy()
                this.$el.remove()
            }, this.duration)
        }
    },

    beforeMount () {
        if (this.programmatic) document.querySelector(this.el).appendChild(this.$el)
    }
}
</script>
