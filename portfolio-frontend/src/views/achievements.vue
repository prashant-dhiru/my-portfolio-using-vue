<template>
  <div class="md-layout md-gutter">
    <div v-for="achievement in achievements" :key="achievement.key" class="md-layout-item md-size-50 md-small-size-100" >
      <MainAchievements v-bind:achievementDetails="achievement" class="card"></MainAchievements>
    </div>
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import MainAchievements from '@/components/MainComponents/MainAchievement.vue'
import {db} from '@/firebase'
export default {
  name: 'Achievements',
  data(){
    return{
      achievements: []
    }
  },
  firestore(){
    return{
      achievements: db.collection('my-achievements')
    }
  },
  components: {
    MainAchievements
  }
}
</script>
<style>
.md-layout{
  padding-left:20px;
  padding-right: 20px;
}
</style>