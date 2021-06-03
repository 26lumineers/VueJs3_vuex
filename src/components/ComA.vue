<template>
  <div id="comA">
      <h1>this is com A</h1>
      <h1>{{$store.getters.getCount}}</h1>
          <v-btn medium elevation="2" @click="add" color="success">Add</v-btn>
      
  </div>
</template>

<script>
export default {
    name:"comA",
    methods:{
        add(){
            this.$store.dispatch("addAction")
        }
    }
}
</script>

<style>

</style>