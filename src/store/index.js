import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    screenWidth: 0,
  },
  mutations: {
    getScreenWidth (state, width) {
      state.screenWidth = width
    }
  },
  actions: {},
  getters: {},
  modules: {}
})

export default store