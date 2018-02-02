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
  <vu-button tag="a" href="#" disabled>Disabled button</vu-button>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
```

**Note** To change html tag to `<a></a>`, just add attribute `tag` with param `a` to component. To disable the button just add attribute `disabled` to component.

## Style modifiers

To change the button styles, add the `type` attribute to component and pass one of the accepted styles.

```example
<template>
  <div>
    <vu-button>Default</vu-button>
    <vu-button type="primary" >Primary</vu-button>
    <vu-button type="secondary">Secondary</vu-button>
    <vu-button type="danger">Danger</vu-button>
    <vu-button type="text">Text</vu-button>
    <vu-button type="link">Link</vu-button>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
```

## Size modifiers

To change size add the attribute `size` to component with one of the accepted param: `small` or `large`.

```example
<template>
  <p>
    <vu-button size="small">Default</vu-button>
    <vu-button size="small" type="primary" >Primary</vu-button>
    <vu-button size="small" type="secondary">Secondary</vu-button>
    <vu-button size="small" type="danger">Danger</vu-button>
  </p>
  <p>
    <vu-button size="large">Default</vu-button>
    <vu-button size="large" type="primary" >Primary</vu-button>
    <vu-button size="large" type="secondary">Secondary</vu-button>
    <vu-button size="large" type="danger">Danger</vu-button>
  </p>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
```

## Size modifiers

Add the one of the UIKit width [classes](https://getuikit.com/docs/width) like `.uk-width-1-1` to change button width.

```example
<template>
  <div>
    <p>
      <vu-button class="uk-width-1-1">Default</vu-button>
    </p>
    <p>
      <vu-button class="uk-width-1-2" type="primary" >Primary</vu-button>
    </p>
    <p>
      <vu-button class="uk-width-1-3" type="secondary">Secondary</vu-button>
    </p>
    <p>
      <vu-button class="uk-width-1-4" type="danger">Danger</vu-button>
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
```
