<template>
  <div class="hello">
    <h1>{{ counter }}</h1>
    <md-button @click="incrementCounter" class="md-raised md-primary">Increment Counter</md-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return {
      counter : 0
    }
  },  
  methods : {
    incrementCounter : function(){
      this.counter++;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
