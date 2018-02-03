<template>
  <div :id="id">
    <slot>{{content}}</slot>
  </div>
</template>
<script>
import UIkit from 'uikit'
import mixins from '../mixins'

export default {
  name: 'VuDrop',

  mixins: [mixins],

  props: {
    id: String,
    target: String,
    content: String,
    options: Object
  },

  data () {
    return {}
  },

  mounted () {
    this.init()
    this.eventsConnection()
  },

  methods: {
    /**
     * Initialization
     */
    init () {
      // To simplify the connection via the this.target property
      const options = Object.assign({ toggle: this.target || true }, this.options)

      UIkit.drop(this.$el, options)
    },
    /**
     * Connection uikit event with vue
     */
    eventsConnection () {
      const events = [
        'beforeshow',
        'show',
        'shown',
        'beforehide',
        'hide',
        'hidden',
        'stack'
      ]
      this.eventsConnector(`#${this.id}`, events)
    }
  }
}
</script>
