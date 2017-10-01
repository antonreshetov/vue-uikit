# Alert

Display success, warning and error messages.

## Basic usage

To render this component, add the tag and pass the necessary properties

```html
<vu-alert></vu-alert>
```

```example
<template>
    <div>
        <vu-alert :closeBtn="true" >{{msg}}</vu-alert>
        <vu-alert :closeBtn="true" :duration="500" type="primary">Primary</vu-alert>
        <vu-alert :closeBtn="true" type="success">Success</vu-alert>
        <vu-alert :closeBtn="true" type="warning">Warning</vu-alert>
        <vu-alert :closeBtn="true" type="danger">Danger</vu-alert>
        <vu-alert :closeBtn="true">
            <div class="uk-text-lead">Title</div>
            <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</div>
        </vu-alert>
    </div>
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
## Programmatic usage

To use, call the method `$alert` at the instance and pass the necessary parameters

```js
vm.$alert.open(params)
```

```example
<template>
    <div>
        <button class="uk-button uk-button-default"
            @click="openModal">Add alert
        </button>
        <br><br>
        <div id="alert-mount"></div>
    </div>
</template>
<script>
    export default {
        data () {
            return {}
        },

        methods: {
            openModal () {
                this.$alert.open({
                   content: 'New alert',
                   closeBtn: true,
                   el: '#alert-mount'
                })
            }
        }
    }
</script>
```

## Attributes

|Attribute|Description|Type|Accepted Values|Default|
|---|---|---|---|---|
|type|Type of alert.|`string`|primary/success/warning/danger|-|
|closeBtn|Show close button.|`boolean`|-|-|
|animation|Fade out animation.|`boolean`|-|`true`|
|duration|Animation duration in milliseconds.|`number`|-|`150`|
|content|Transferred content|`string`|-|-|
|el|Element to mount alert (programmatic)|`string`|-|-|

## Events
|Event name|Description|Parameters|
|---|---|---|
|close|Fires when alert is closed.|-|