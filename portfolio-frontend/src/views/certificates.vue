<template>
  <div class="md-layout md-gutter">
    <div v-for="certificate in certificates" :key="certificate.key" class="md-layout-item md-size-50" >
      <MainCertificate v-bind:certificateDetails="certificate" class="card"></MainCertificate>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import MainCertificate from '@/components/MainComponents/MainCertificate.vue'
import {db} from '@/firebase'
export default {
  name: 'Certificates',
  data(){
    return{
      certificates: []
    }
  },
  firestore(){
    return{
      certificates: db.collection('my-certificates')
    }
  },
  components: {
    MainCertificate
  }
}
</script>
<style>
.md-layout{
  padding-left:20px;
  padding-right: 20px;
}
</style>