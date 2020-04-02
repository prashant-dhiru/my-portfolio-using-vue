<template>
  <div id="app">
    <header-material></header-material>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderMaterial from './components/HeaderMaterial.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeaderMaterial
  } 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
