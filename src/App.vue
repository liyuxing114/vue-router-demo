<template>
  <div id="app">
    <nav-modle></nav-modle>
    <router-view></router-view>
    <foot-modle></foot-modle>
  </div>
</template>

<script>

import NavModle from "./components/NavModle";
import FootModle from "./components/FootModle";
export default {
  name: 'app',
  components: {
      FootModle,
      NavModle
  }
}
</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
