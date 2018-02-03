<template>
  <d-tag
    :tag="tag"
    :class="['uk-button', currentClass, currentSize]">
    <slot></slot>
  </d-tag>
</template>
<script>
export default {
  name: 'VuButton',

  props: {
    size: String,
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
      acceptedClass: {
        default: 'uk-button-default',
        primary: 'uk-button-primary',
        secondary: 'uk-button-secondary',
        danger: 'uk-button-danger',
        text: 'uk-button-text',
        link: 'uk-button-link'
      }
    }
  },

  computed: {
    currentClass () {
      return this.acceptedClass[Object.keys(this.acceptedClass).find(key => key === this.type)]
    },
    currentSize () {
      if (this.size === 'small') return 'uk-button-small'
      if (this.size === 'large') return 'uk-button-large'
    }
  }
}
</script>
