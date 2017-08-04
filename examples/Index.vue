<template>
    <div id="html"></div>
</template>
<style lang="scss">
@import "../node_modules/uikit/dist/css/uikit";
</style>
<script>
import { parse } from './utils'

export default {
    created () {
        axios.get('examples/docs/alert.md').then(res => {
            document.getElementById('html').innerHTML = parse(res.data)
        })
    }
}
</script>
