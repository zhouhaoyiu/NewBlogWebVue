import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {

}

export default new Vuex.Store({
  state,
  plugins: [persistedState()]
})
