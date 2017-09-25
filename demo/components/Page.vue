<template>
    <div>
        <div class="header" uk-sticky>
            <div class="logo">
                <router-link to="/">
                    Vue<span>UIkit</span>
                </router-link>
            </div>
        </div>
        <div class="sidebar">
             <ul class="uk-nav uk-nav-default">
                <li class="uk-nav-header">Getting Started</li>
                <router-link
                    v-for="item in gettingStarted"
                    :to="item.page"
                    :key="item.page"
                    tag="li">
                    <a>{{item.name}}</a>
                </router-link>
                <li class="uk-nav-header">Components</li>
                <router-link
                    v-for="item in components"
                    :to="item.page"
                    :key="item.page"
                    tag="li">
                    <a>{{item.name}}</a>
                </router-link>
            </ul>
        </div>
        <div class="content uk-container uk-container-small uk-position-relative">
            <div id="html"></div>
        </div>
    </div>
</template>
<script>
import { parse } from '../utils'
import navigation from '../navigation.json'

const components = Object.keys(navigation['Components']).map(component => {
    return {
        name: component,
        page: navigation['Components'][component]
    }
})

const gettingStarted = Object.keys(navigation['Getting Started']).map(item => {
    return {
        name: item,
        page: navigation['Getting Started'][item]
    }
})

export default {
    data () {
        return {
            components,
            gettingStarted
        }
    },
    created () {
        this.buildPage()
    },

    watch: {
        $route () {
            this.buildPage()
        }
    },

    methods: {
        buildPage () {
            if (this.$route.meta === 'docs') {
                axios.get(`../docs/${this.$route.params.page}.md`).then(res => {
                    let html
                    let vms
                        ;[html, vms] = parse(res.data)

                    document.getElementById('html').innerHTML = html
                    for (let i = 0; i < vms.length; i++) {
                        document.getElementById(`demo-${i}`).appendChild(vms[i].$el)
                    }
                    document.querySelectorAll('pre code').forEach(block => {
                        hljs.highlightBlock(block)
                    })
                })
            } else {
                axios.get('/CHANGELOG.md').then(res => {
                    document.getElementById('html').innerHTML = parse(res.data)[0]
                })
            }
        }
    }
}
</script>
<style lang="scss">
.header {
    height: 80px;
    background: linear-gradient(to right, #1e88f0, #27a4f5);
    .logo {
        a {
            font-size: 24px;
            color: #fff;
            font-weight: 100;
            position: relative;
            padding-left: 40px;
            top: 20px;
            &:hover {
                text-decoration: none;
            }
        }
        > span {
            font-weight: 300;
        }
    }
}

.sidebar {
    top: 80px;
    position: fixed;
    padding: 40px 40px 60px 40px;
    box-sizing: border-box;
    width: 240px;
    bottom: 0;
    overflow: auto;
    border-right: 1px solid #ccc;
}
</style>
