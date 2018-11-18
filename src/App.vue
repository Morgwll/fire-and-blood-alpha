<template>
  <div id="app" class="app-styling">
    <app-world-menu></app-world-menu>
    <app-roll-result v-if="this.$store.state.showRollModal"></app-roll-result>
    <router-view></router-view>
  </div>
</template>

<script>
import appWorldMenu from './components/menus/World-Menu.vue';
import appRollResult from './components/rollResult.vue';
export default {
  name: 'app',
  components: {
    appRollResult,
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
  max-width: 992px;
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
  .addToRoster {
    background-color: transparent;
    font-family: "New Rocker";
    border: 3px solid #000;
        margin: 10px calc(50% - 145px);
    border-radius: 6px;
    font-size: 2rem;
    padding: 5px;
    line-height: 50px;
    cursor: pointer;
    i {
      font-size: 3rem;
    }
  }
  .card {
    &-header {
      display: flex;
      border: 1px solid #000;
      padding: 20px;
      &-info {
        width: 100%;
        padding: 5px 0;
        font-family: "New Rocker";
        font-size: 1.7rem;
      }
      //justify-content: center;
      //align-items: center;
      &-counters {
        display: flex;
        &__hp, &__sanity, &__stamina {
          background: #fff;
          text-align: center;
          margin: 0 10px;
          font-family: New Rocker;
          padding: 5px;
          font-size: 2.5rem;
          min-width: 85px;
          max-height: 275px;
          font-size: .9rem;
          &-score {
            font-size: 2.5rem;
          }
          button {
            margin: 0 auto;
          }
          h4 {
            font-size: 1rem;
          }
          p {
            margin: 10px;
            
          }
        }
      }
      &-stats {
        margin: 0 20px;
        border: 1px solid #000;
        padding: 5px;
        text-align: center;
        &__block {
          display: flex;
          &-container {
            padding: 5px;
            border: 3px solid #000;
            background: #fff;
            margin: 5px;
            min-width: 85px;
            border-radius: 10%;
            font-weight: 700;
            font-size: 2.4rem;
            font-family: "New Rocker";
            h4 {
              font-size: 1rem;
              margin: 10px 0 0 0;
            }
            &-bonus {
              font-size: 1.8rem;
            }
          }
        }
      }
      &-portrait {
          width: 275px;
          height: 275px;
          overflow: hidden;
          float: left;
          img {
              width: 100%;
          }
      }
    }
  }
</style>
 