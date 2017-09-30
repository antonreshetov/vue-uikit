<template>
    <d-tag
        :tag="tag"
        :class="['uk-button', currentClass]">
        <slot></slot>
    </d-tag>
</template>
<script>
export default {
    name: 'VuButton',

    props: {
        tag: {
            type: String,
            default: 'button'
        },
        type: {
            type: String,
            default: 'default'
        }
    },

    data () {
        return {
            currentClass: '',
            acceptedClass: {
                default: 'uk-button-default',
                primary: 'uk-button-primary',
                secondary: 'uk-button-danger',
                text: 'uk-button-text',
                link: 'uk-button-link'
            }
        }
    },

    created () {
        this.checkType()
    },

    methods: {
        checkType () {
            Object.keys(this.acceptedClass).forEach(key => {
                if (key === this.type) this.currentClass = this.acceptedClass[key]
            })
        }
    }
}
</script>
