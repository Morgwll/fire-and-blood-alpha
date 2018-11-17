<template>
  <div id="app">
    <app-world-menu></app-world-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import appWorldMenu from './components/menus/World-Menu.vue';

export default {
  name: 'app',
  components: {
    appWorldMenu
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  background-image: url('https://5.imimg.com/data5/JB/EM/MY-11791301/parchment-paper-500x500.jpg');
  font-family: 'Roboto';
  padding: 20px 35px;
}
.app-styling {
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
}
h1, h2, h3, h4 {
  font-family: 'New Rocker';
  font-weight: 700;
  text-align: center;
}
  .menu-tab-left, .menu-tab-right {
    top: 20px;
    height: 25px;
    width: 20px;
    background-color: rgba(0,0,0,.6);
    color: #fff;
    padding: 5px;
    line-height: 25px;
    text-align: center;
  }
  .menu-tab-left {
    left: 100px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .menu-tab-right {
    right: 100px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .menu-element {
    transition: .2s;
    position: fixed;
    top: 20px;
    background-color: rgba(0,0,0,.8);
    &-left {
      left: 0;
      right: inherit;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    &-right {
      left: inherit;
      right: 0;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  }
  .menu {
    list-style-type: none;
    padding-left: 0;
    margin: 0 auto;
    max-width: 120px;
    max-height: calc(100vh - 43px);
    overflow: auto;
    &-hero {
      display: block;
      width: 100px;
      margin: 0 auto;
      color: #fff;
      text-decoration: none;
      text-align: center;
      padding: 10px 0;
      p {
        margin: 0;
      }
      &-portrait {
        margin: 0 auto;
        width: 60px;
        height: 60px;
        border: 2px solid;
        border-radius: 50%;
      }
    }
  }
  .menu-hidden-right {
    right: -100px;
    transition: .2s;
  }
  .active-tab {
    background-color: rgba(0,0,0,.8);
  }
  .tab-menu-left {
    position: absolute;
    top: -20px;
    left: 0;
    list-style-type: none;
    padding-left: 0;
    li {
      margin: 2px 0;
      cursor: pointer;
      a {
        color: #fff;
      }
    }
  }
</style>
 