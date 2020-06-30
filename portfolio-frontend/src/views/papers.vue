<template>
  <div class="md-layout md-gutter">
    <div v-for="paper in papers" :key="paper.key" class="md-layout-item md-size-50" >
      <MainPaper v-bind:paperDetails="paper" class="card"></MainPaper>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import MainPaper from '@/components/MainComponents/MainPaper.vue'
import {db} from '@/firebase'
export default {
  name: 'Papers',
  data(){
    return{
      papers: []
    }
  },
  firestore(){
    return{
      papers: db.collection('my-papers')
    }
  },
  components: {
    MainPaper
  }
}
</script>
<style>
.md-layout{
  padding-left:20px;
  padding-right: 20px;
}
</style>