<template>
  <div class="projects">
    <h1>home</h1> 
    <MainProject />
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import MainProject from '@/components/MainComponents/MainProject.vue'
export default {
  name: 'Projects',
  components: {
    MainProject
  }
}
</script>
<style>
.md-layout{
  padding-left:30px;
  padding-right: 30px;
}
</style>