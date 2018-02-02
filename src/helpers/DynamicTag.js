export default {
  name: 'DTag',

  render (createElement) {
    return createElement(this.tag, this.$slots.default)
  },

  props: {
    tag: {
      type: String,
      require: true
    }
  }
}
