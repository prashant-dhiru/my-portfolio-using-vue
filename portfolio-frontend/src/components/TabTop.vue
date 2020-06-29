<template>
<div class="TabTop" md-sync-route>
     <md-tabs class="md-primary" md-alignment="fixed" md-elevation=3 md-active-tab="tab-project">
      <md-tab id="tab-project"  class ="tabText" md-label="Projects" to="/home"></md-tab>
      <md-tab id="tab-paper" class ="tabText" md-label="Papers" to="/papers"></md-tab>
      <md-tab id="tab-achievements" class ="tabText" md-label="Achievement" to="/achievements"></md-tab>
      <md-tab id="tab-certificate" class ="tabText" md-label="Certificates" to="/certificates"></md-tab>
    </md-tabs>
</div>
</template>

<script>
export default {
    name:'TabTop'
}
</script>

<style>
.TabTop{
  margin-top: 15px;
  margin-left: 10px;
  margin-bottom: 15px;
}
</style>