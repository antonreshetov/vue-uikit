<template>
  <d-tag
    :tag="tag"
    :class="['uk-button', currentClass, checkSize()]">
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
      currentClass: '',
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

  created () {
    this.checkType()
  },

  methods: {
    checkType () {
      Object.keys(this.acceptedClass).forEach(key => {
        if (key === this.type) this.currentClass = this.acceptedClass[key]
      })
    },
    checkSize () {
      if (this.size === 'small') return 'uk-button-small'
      if (this.size === 'large') return 'uk-button-large'
    }
  }
}
</script>
