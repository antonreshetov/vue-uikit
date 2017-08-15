<template>
    <div class="welcome">
        <div class="main">
            <div class="logo-container">
                <div class="logo">Vue<span>UIkit</span>
                <span class="uk-label version">beta 0.1.0</span>
                </div>
                <div class="desc">A collection of Vue components<br>built on top of the UIkit framework</div>
                <router-link to="/alert" class="pill white">Get started</router-link>
                <a href="https://github.com/antonreshetov/vue-uikit" class="pill">GitHub</a>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.welcome {
    background-color: #1e88f0;
    height: 100vh;
}

.logo {
    color: #fff;
    font-size: 56px;
    font-weight: 100;
    span {
        font-weight: 300;
    }
}

.logo-container {
    text-align: center;
}

.main {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%)
}

.desc {
    color: #fff;
    font-weight: 100;
    font-size: 18px;
    margin-bottom: 20px;
}

.pill {
    color: #fff;
    border-radius: 100px;
    border: 1px solid rgba(255, 255, 255, .5);
    padding: 5px 20px;
    font-weight: 100;
    display: inline-block;
    text-decoration: none;
    &.white {
      background-color: rgba(255, 255, 255, .8);
      color: #000;
      &:hover {
        background-color: rgba(255, 255, 255, 1);
      }
    }
    &:hover {
       border: 1px solid rgba(255, 255, 255, 1);
    }
}

.version {
  background-color: yellow;
  font-size: 12px;
  text-transform: none;
  color: #000;
}
</style>
