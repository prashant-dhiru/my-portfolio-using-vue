<template>
  <div class="md-layout md-gutter">
    <div v-for="project in projects" :key="project.key" class="md-layout-item md-size-50 md-small-size-100" >
      <MainProject v-bind:projectDetails="project" class="card"></MainProject>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import MainProject from '@/components/MainComponents/MainProject.vue'
import {db} from '@/firebase'
export default {
  name: 'Projects',
  data(){
    return{
      projects: []
    }
  },
  firestore(){
    return{
      projects: db.collection('my-projects').orderBy("year","desc")
    }
  },
  components: {
    MainProject
  }
}
</script>
<style>
.md-layout{
  padding-left:20px;
  padding-right: 20px;
}
</style>