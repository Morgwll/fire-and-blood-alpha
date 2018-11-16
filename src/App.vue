<template>
  <div id="app">
    <app-story-menu></app-story-menu>
    <app-world-menu></app-world-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import appStoryMenu from './components/menus/Story-Menu.vue';
import appWorldMenu from './components/menus/World-Menu.vue';

export default {
  name: 'app',
  components: {
    appStoryMenu,
    appWorldMenu,
  }
}
</script>

<style lang="scss">

</style>
 