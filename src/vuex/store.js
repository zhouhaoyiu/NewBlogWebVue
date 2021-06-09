import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  blogId: null,
  userRole: 0
}

export default new Vuex.Store({
  state,
  plugins: [persistedState()]
})
