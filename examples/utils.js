import Vue from 'vue'
import { escape } from 'he'
import slug from 'slug'
import marked from 'marked'

const guid = () => {
    return Math.random().toString(36).substring(2, 15)
}

// Inspired by https://github.com/uikit/uikit-site
export function parse (markdown, cb) {
    const renderer = new marked.Renderer({ langPrefix: 'lang-' })
    const base = new marked.Renderer({ langPrefix: 'lang-' })

    /* eslint-disable no-useless-escape */
    const example = code => {
        const id = guid()
        const component = code.match(/<vu(.*?)<\/vu(.*?>)/g)
        let data = code.match(/return\s+([^\}]+.)/)
        if (data) data = JSON.parse(data[1])

        const vm = new Vue({
            template: `<div>${component}</div>`,
            data
        }).$mount()

        return `<div class="uk-position-relative uk-margin-medium">
                    <ul uk-tab>
                        <li><a href="#">Preview</a></li>
                        <li><a href="#">Markup</a></li>
                    </ul>
                    <ul class="uk-switcher uk-margin">
                        <li><span class="code">${vm.$el.innerHTML}</span</li>
                        <li><pre><code id="${id}" class="lang-html">${escape(code)}</code></pre></li>
                    </ul>
                </div>`
    }

    renderer.strong = text => text === 'Note' ? `<span class="uk-label">${text}</span>` : `<strong>${text}</strong>`
    renderer.list = text => `<ul class="uk-list uk-list-bulconst">${text}</ul>`
    renderer.link = (href, title, text) => href.match(/\.md/) ? base.link(href.replace(/.md(.*)/, '$1'), title, text) : base.link(href, title, text)
    renderer.code = (code, lang, escaped) => lang === 'example' ? example(code) : '<div class="uk-margin-medium">' + base.code(code, lang, escaped) + '</div>'
    renderer.hr = () => `<hr class="uk-margin-large">`
    renderer.table = (header, body) => `<div class="uk-overflow-auto"><table class="uk-table uk-table-divider"><thead>${header}</thead><tbody>${body}</tbody></table></div>`
    renderer.heading = (text, level) => `<h${level} id="${slug(text)}" class="uk-h${level > 1 ? level + 1 : level} tm-heading-fragment"><a href="#${slug(text)}">${text}</a></h${level}>`

    return marked(markdown, { renderer })
}
