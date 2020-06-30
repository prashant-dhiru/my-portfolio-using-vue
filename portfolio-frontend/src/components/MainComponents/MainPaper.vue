<template>
  <div>
    <md-card md-with-hover class="card">
      <md-card-header>
        <div class="md-title">{{paperDetails.name}}</div>
        <div class="md-subhead">{{paperDetails.tech}}</div>
      </md-card-header>

      <md-card-content>{{paperDetails.desc}}
      </md-card-content>

      <md-card-actions  md-alignment="left">
        <md-button :href="paperDetails.link" target="_blank" >Link</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'MainPapers',
  props:{
    paperDetails : Object
  }
}
</script>