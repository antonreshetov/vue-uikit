import Vue from 'vue'
import VueUIkit from '../src/index'
import { escape } from 'he'
import marked from 'marked'
import emoji from 'node-emoji'

Vue.use(VueUIkit)

const guid = () => {
  return Math.random()
    .toString(36)
    .substring(2, 15)
}
// Inspired by https://github.com/uikit/uikit-site
const sluggify = text => {
  return text
    .toLowerCase()
    .trim()
    .replace(/:.*:/g, '')
    .replace(/ +$/g, '')
    .replace(/(&amp;| & )/g, '-and-')
    .replace(/&(.+?);/g, '')
    .replace(/[\s\W-]+/g, '-')
}
export function parse (markdown, cb) {
  const renderer = new marked.Renderer({ langPrefix: 'lang-' })
  const base = new marked.Renderer({ langPrefix: 'lang-' })
  const replacer = match => emoji.emojify(match)
  const vms = []
  let vm

  /* eslint-disable no-useless-escape */
  const example = code => {
    const id = guid()
    let template = code.match(/<template>(.|\n)*<\/template>/g)
    let params = code.match(/export default\s+((.|\s)+(?=<\/script>))/)

    let defaultParams = {
      template: `<div>${template}</div>`
    }

    /* eslint-disable no-eval */
    params = eval(`params = ${params[1]}`)
    params = Object.assign(defaultParams, params)

    vm = new Vue(params).$mount()

    vms.push(vm)
    // prettier-ignore
    return `<div class="uk-position-relative uk-margin-medium">
        <ul uk-tab>
            <li><a href="#">Preview</a></li>
            <li><a href="#">Markup</a></li>
        </ul>
        <ul class="uk-switcher uk-margin">
            <li><span class="code"><span id="demo-${vms.length - 1}"></span></span</li>
            <li><pre><code id="${id}" class="lang-html">${escape(code)}</code></pre></li>
        </ul>
    </div>`
  }

  renderer.strong = text => {
    return text === 'Note'
      ? `<span class="uk-label">${text}</span>`
      : `<strong>${text}</strong>`
  }
  renderer.list = text => `<ul class="uk-list uk-list-bulconst">${text}</ul>`
  renderer.link = (href, title, text) => {
    return href.match(/\.md/)
      ? base.link(href.replace(/.md(.*)/, '$1'), title, text)
      : base.link(href, title, text)
  }
  renderer.code = (code, lang, escaped) => {
    return lang === 'example'
      ? example(code)
      : `<div class="uk-margin-medium">${base.code(code, lang, escaped)}</div>`
  }
  renderer.hr = () => `<hr class="uk-margin-large">`
  renderer.table = (header, body) => {
    return `<div class="uk-overflow-auto">
      <table class="uk-table uk-table-divider">
        <thead>${header}</thead>
        <tbody>${body}</tbody>
      </table>
    </div>`
  }
  renderer.heading = (text, level) => {
    return `<h${level} id="${sluggify(
      text
    )}" class="tm-heading-fragment"><a href="#${sluggify(
      text
    )}">${text}</a></h${level}>`
  }

  markdown = markdown.replace(/(:.*:)/g, replacer)

  return [marked(markdown, { renderer }), vms]
}
