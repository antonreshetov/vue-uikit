import UIkit from 'uikit'

export default {
  methods: {
    /**
     * Connection uikit event with vue
     * @param {string} element - DOM element which corresponds to the uikit component
     * @param {array} events - Array of events for a specific uikit component
     */
    eventsConnector (element, events) {
      events.forEach(event => {
        UIkit.util.on(element, event, () => {
          this.$emit(event)
        })
      })
    }
  }
}
