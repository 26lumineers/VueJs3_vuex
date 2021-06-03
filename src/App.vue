<template>
  <div id="app">
    
    <v-app>q
    
      <v-app-bar app>
      </v-app-bar>
    
      <v-main>
    
        <v-container fluid>
     <v-row > 
        <v-col>
          <p class="purple dark white--text" >purple</p>
          <h1>Demo VueX</h1>
          <h1>{{ $store.getters.getCount }}</h1>
          <v-btn depressed @click="viewData">FIDZ</v-btn>
        </v-col>
        <v-col>
          <v-btn raised dark color="primary">FIDZ</v-btn>

        </v-col>

        <hr>
      </v-row>
      <hr>
      <br>
      <ComA />
      <br>
      <hr>
      <ComB />
        </v-container>
      </v-main>
    
      <v-footer app>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import ComA from "@/components/ComA.vue";
import ComB from "@/components/ComB.vue";
export default {
  name: "app",
  mounted() {
    setInterval(() => {
      // this.$store.state.count++;
    }, 1000);
  },
  components: {
    ComA,
    ComB
  }
};
</script>

<style>
</style>