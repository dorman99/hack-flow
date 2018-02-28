<template>
  <div id="app">
      <navbarvue/>
      <router-view/>
      <footervue/>
  </div>
</template>

<script>
import navbarvue from './components/navbarvue.vue'
import bodyvue from './components/bodyvue.vue'
import footervue from './components/footervue.vue'
export default {
  name: 'app',
  components: {
    navbarvue,
    bodyvue,
    footervue
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
