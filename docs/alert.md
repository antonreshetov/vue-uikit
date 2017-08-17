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
## Programatic usage

To use, call the method `$alert` at the instance and pass the necessary parameters

```js
    vm.$alert.open(params)
```

```example
<template>
    <button class="uk-button uk-button-default"
        @click="$alert.open({content: 'New alert', closeBtn: true, el: '#alert-mount'})">Add alert
    </button>
    <br><br>
    <div id="alert-mount"></div>
</template>
<script>
    export default {
        data () {
            return {}
        }
    }
</script>
```