window.$ = require('jquery')
window.UIkit = require('uikit')
window.axios = require('axios')
window.hljs = require('highlight.js')

$(document).ready(function () {
    $('pre code').each(function (i, block) {
        hljs.highlightBlock(block)
    })
})
