<template>
  <div uk-alert
    :class="currentClass"
    :animation="animation"
    :duration="computedDuration">
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
      acceptedClass: {
        primary: 'uk-alert-primary',
        success: 'uk-alert-success',
        warning: 'uk-alert-warning',
        danger: 'uk-alert-danger'
      }
    }
  },

  beforeMount () {
    if (this.programmatic) document.querySelector(this.el).appendChild(this.$el)
  },

  computed: {
    computedDuration () {
      return this.animation ? this.duration : 0
    },
    currentClass () {
      return this.acceptedClass[Object.keys(this.acceptedClass).find(key => key === this.type)]
    }
  },

  methods: {
    close () {
      setTimeout(() => {
        this.$destroy()
        this.$el.remove()
        this.$emit('close')
      }, this.duration)
    }
  }
}
</script>
