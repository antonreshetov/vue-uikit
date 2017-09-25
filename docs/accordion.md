# Accordion

Create a list of items that can be shown individually by clicking an item's header.

## Basic usage

To render this component, add the tag and pass the necessary properties

```html
<vu-accordion>
    <vu-accordion-item></vu-accordion-item>
</vu-accordion>
```

```example
<template>
    <vu-accordion>
        <vu-accordion-item title="Title 1">
            <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</div>
        </vu-accordion-item>
        <vu-accordion-item title="Title 2" :open="true">
            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
        </vu-accordion-item>
        <vu-accordion-item title="Title 3">
            <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
        </vu-accordion-item>
        <vu-accordion-item title="Title 4">
            <p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,</p>
        </vu-accordion-item>
    </vu-accordion>
</template>
<script>
    export default {
        data () {
            return {}
        }
    }
</script>
```

## Attributes

|Attribute|Description|Type|Default|
|---|---|---|---|
|collapsible|Allow all items to be closed.|`boolean`|`true`|
|multiple|Allow multiple open items.|`boolean`|`false`|
|animation|Fade out animation.|`boolean`|`true`|
|transition|The transition to use when revealing items. Use keyword for [easing functions.](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function#Keywords_for_common_timing-functions)|`boolean`|`true`|
|duration|Animation duration in milliseconds.|`number`|`200`|