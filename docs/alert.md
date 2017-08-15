# Alert

Display success, warning and error messages.

## Basic usage

To render this component, add the tag:

```html
<vu-alert></vu-alert>
```
 
```example
<template>
    <vu-alert :closeBtn="true">{{msg}}</vu-alert>
    <vu-alert :closeBtn="true" type="primary">Primary</vu-alert>
    <vu-alert :closeBtn="true" type="success">Success</vu-alert>
    <vu-alert :closeBtn="true" type="warning">Warning</vu-alert>
    <vu-alert :closeBtn="true" type="danger">Danger</vu-alert>
</template>
<script>
    export default {
        data () {
            return {
                msg: "Default alert"
            }
        }
    }
</script>
```