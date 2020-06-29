<template>
  <div id="app">
    <header-material></header-material>
    <div class="md-layout">
      <div class="md-layout-item md-small-size-100 md-size-25">
        <layout-left></layout-left>
      </div>  
      <div class="md-layout-item">
        <TabTop></TabTop>
        <router-view/>
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      </div>  
    </div>
    
  </div>
</template>
<script>

import HeaderMaterial from '@/components/HeaderMaterial.vue'
import LayoutLeft from '@/components/LayoutLeft.vue'
import TabTop from '@/components/TabTop.vue'

// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    HeaderMaterial,
    LayoutLeft,
    TabTop
  }
}
</script>>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:#ffffff;
  min-height: 100vh;
  background-color:#f8f8ff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
