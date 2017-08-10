<template>
    <div>
        <div class="header" uk-sticky>
            <div class="logo">Vue<span>UIkit</span></div>
        </div>
        <div class="sidebar">
             <ul class="uk-nav uk-nav-default">
                <li class="uk-nav-header">Components</li>
                <li class="uk-active"><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
                <li><a href="#">Item</a></li>
            </ul>
        </div>
        <div class="content uk-container uk-container-small uk-position-relative">
            <div id="html"></div>
        </div>
    </div>
</template>
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
<style lang="scss">
@import "../node_modules/uikit/dist/css/uikit";
@import "./styles/theme";
@import "../node_modules/highlight.js/styles/atom-one-light.css";
@import url('https://fonts.googleapis.com/css?family=Fira+Mono');

.header {
    height: 80px;
    background: linear-gradient(to right, #1e88f0, #27a4f5);
    .logo {
        font-size: 24px;
        color: #fff;
        font-weight: 100;
        position: relative;
        padding: 0 20px;
        top: 20px;
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

.content {
    margin-top: 80px;
    max-width: 650px;
}
</style>
