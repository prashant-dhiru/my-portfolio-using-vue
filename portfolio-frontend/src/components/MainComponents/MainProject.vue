<template>
  <div>
    <md-card md-with-hover class="card">
      <md-card-header>
        <div class="md-title">{{projectDetails.name}}</div>
        <div class="md-subhead">{{projectDetails.year}}</div>
      </md-card-header>

      <md-card-content>{{projectDetails.Description}}
      </md-card-content>

      <md-card-actions  md-alignment="left">
        <md-button :href="projectDetails.github" target="_blank" >GitHub Link</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>

export default {
  name: 'ProjectComponet',
  props:{
    projectDetails : []
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  margin-bottom: 30px;
}
</style>