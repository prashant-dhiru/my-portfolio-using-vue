<template>
  <div>
    <md-card class="card">
      <md-card-header>
        <div class="md-title">{{achievementDetails.name}}</div>
        <div class="md-subhead">{{achievementDetails.year}}</div>
      </md-card-header>

      <md-card-content>{{achievementDetails.desc}}
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'MainPapers',
  props:{
    achievementDetails : Object
  }
}
</script>
<style>
.card{
  margin-top: 20px;
}
</style>