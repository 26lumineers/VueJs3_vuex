<template>
  <div id="comB">
      <h1>Com B </h1>
      <h2>{{$store.getters.getCount}}</h2>
          <v-btn medium @click="del" color="error">Del</v-btn>
      
  </div>
</template>

<script>
export default {
name:"comB",
methods:{
    del(){
        this.$store.dispatch("delAction")
    }
}
}
</script>

<style>

</style>