<template>
  <div id="html"></div>
</template>
<script>
import { parse } from '../utils'
export default {
  created () {
    axios.get('/CHANGELOG.md').then(res => {
      document.getElementById('html').innerHTML = parse(res.data)
    })
  }
}
</script>
