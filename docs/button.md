# Button

Easily create nice looking buttons, which come in different styles.

## Basic usage

To render this component, add the tag and pass the necessary properties

```html
<vu-button></vu-button>
```

```example
<template>
    <vu-button>Default</vu-button>
    <vu-button type="primary">Primary</vu-button>
    <vu-button type="secondary">Secondary</vu-button>
    <vu-button type="text">Text</vu-button>
    <vu-button type="link">Link</vu-button>
</template>
<script>
    export default {
        data () {
            return {}
        }
    }
</script>
```