# Button

Easily create nice looking buttons, which come in different styles.

## Basic usage

To render this component, add the tag and pass the necessary properties.

```html
<vu-button></vu-button>
```

```example
<template>
    <vu-button>Simple button</vu-button>
    <vu-button disabled>Disabled button</vu-button>
</template>
<script>
    export default {
        data () {
            return {}
        }
    }
</script>
```

**Note** To disable the button just add attribute `disabled` to component.

## Style modifiers

```example
<template>
    <vu-button tag="a" href="#">Default</vu-button>
    <vu-button type="primary" >Primary</vu-button>
    <vu-button type="secondary">Secondary</vu-button>
    <vu-button type="danger">Danger</vu-button>
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