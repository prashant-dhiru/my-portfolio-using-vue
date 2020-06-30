<template>
  <div>
    <md-card md-with-hover class="card">
      <md-card-header>
        <div class="md-title">{{certificateDetails.name}}</div>
        <div class="md-subhead">{{certificateDetails.type}}</div>
      </md-card-header>

      <md-card-actions  md-alignment="left">
        <md-button :href="certificateDetails.link" target="_blank" >Link</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default{
  name: 'MainCertificates',
  props:{
    certificateDetails : Object
  }
}
</script>
<style>
.card{
  margin-top: 20px;
}
</style>