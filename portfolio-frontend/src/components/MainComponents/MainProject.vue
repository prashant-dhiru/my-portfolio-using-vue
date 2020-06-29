<template>
  <div>{{project}}</div>
</template>

<script>
import {db} from '@/firebase'
export default {
  name: 'MainComponet',
  data(){
    return{
      project: []
    }
  },
  firestore(){
    return{
      project: db.collection('my-projects')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>