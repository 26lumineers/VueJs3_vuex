import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:2
  },
  mutations: {
    setCount(state,value){
      state.count =value
    }
  },
  actions: {
    addAction(context){
      context.commit('setCount',this.getters.getCount+1)
    },
    delAction(context){
      context.commit('setCount',this.getters.getCount-1)
    }
  },
  modules: {
  },
  getters:{
    getCount(state){
      return state.count
    }
  }
})
