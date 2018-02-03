<template>
  <div uk-alert
    :id="id"
    :class="currentClass"
    :animation="animation"
    :duration="computedDuration">
    <a v-if="closeBtn" class="uk-alert-close" uk-close @click="close"></a>
    <slot>{{content}}</slot>
  </div>
</template>
<script>
import mixins from '../mixins'

export default {
  name: 'VuAlert',

  mixins: [mixins],

  props: {
    id: String,
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
    /**
     * Adding component in DOM
     */
    if (this.programmatic) document.querySelector(this.el).appendChild(this.$el)
  },

  mounted () {
    this.eventsConnection()
  },

  computed: {
    /**
     * Computed duration
     */
    computedDuration () {
      return this.animation ? this.duration : 0
    },
    /**
     * Type checking and return the appropriate class
     */
    currentClass () {
      return this.acceptedClass[Object.keys(this.acceptedClass).find(key => key === this.type)]
    }
  },

  methods: {
    /**
     * Close alert after timeout duration of the animation
     */
    close () {
      setTimeout(() => {
        this.$destroy()
        this.$el.remove()
      }, this.duration)
    },
    /**
     * Connection uikit event with vue
     */
    eventsConnection () {
      const events = [
        'beforehide',
        'hide'
      ]
      this.eventsConnector(`#${this.id}`, events)
    }
  }
}
</script>
