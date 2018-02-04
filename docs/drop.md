# Drop

Toggleable dropdown.

## Basic usage

To render this component, add the tag and pass the necessary properties

```html
<vu-drop></vu-drop>
```

```example
<template>
  <div>
    <vu-button id="drop-me">Drop me</vu-button>
    <vu-drop target="#drop-me" :options="options">
       <div class="uk-card uk-card-body uk-card-default">(╯°□°）╯︵ ┻━┻</div>
    </vu-drop>
  </div>
</template>
<script>
export default {
  data () {
    return {
      options: {
        pos: 'right-top'
      }
    }
  }
}
</script>
```

## Attributes

| Attribute | Description                                                             | Type     | Default |
| --------- | ----------------------------------------------------------------------- | -------- | ------- |
| `target`  | To simplify the connection to CSS selector. Like the toggle in options. | `string` | -       |
| `options` | Options provided uikit drop component. <a href="#options">See here</a>. | `object` | -       |
| `content` | Transferred content to dropdown.                                        | `string` | -       |

## Slots

| Name      | Description                             |
| --------- | --------------------------------------- |
| `default` | The container for the dropdown content. |

## Options

| Attribute        | Description                                                                   | Type              | Default        |
| ---------------- | ----------------------------------------------------------------------------- | ----------------- | -------------- |
| `toggle`         | CSS selector for the element to be used as the toggler.                       | `string, boolean` | `true`         |
| `pos`            | The position of the drop.                                                     | `string`          | `bottom-left`  |
| `mode`           | Comma separated list of drop trigger behaviour modes: `hover, click`          | `string`          | `click, hover` |
| `delay-show`     | Delay time in milliseconds before a drop is displayed in hover mode.          | `number`          | `0`            |
| `delay-hide`     | Delay time in milliseconds before a drop is hidden in hover mode.             | `number`          | `800`          |
| `boundary`       | CSS selector of the element to maintain the drop's visibility.                | `string`          | `window`       |
| `boundary-align` | Align the drop to its boundary.                                               | `boolean`         | `false`        |
| `flip`           | Automatically flip the drop. Possible values are `false`, `true`, `x` or `y`. | `string, booelan` | `true`         |
| `offset`         | The offset of the drop's container.                                           | `number`          | `0`            |
| `animation`      | Space separated names of animations to apply.                                 | `string`          | `false`        |
| `duration`       | Animation duration in milliseconds.                                           | `number`          | `200`          |

## Events

| Event name   | Description                                          |
| ------------ | ---------------------------------------------------- |
| `toggle`     | Fires before an item is toggled.                     |
| `beforeshow` | Fires before an item is shown.                       |
| `show`       | Fires after an item is shown.                        |
| `shown`      | Fires after the item's show animation has completed. |
| `beforehide` | Fires before an item is hidden.                      |
| `hide`       | Fires after an item is hidden.                       |
| `hidden`     | Fires after an item is hidden.                       |
