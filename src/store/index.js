import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    screenWidth: 0,
    screenHeight: 0
  },
  mutations: {
    getScreenWidthHeight(state, l) {
      state.screenWidth = l[0]
      state.screenHeight = l[1]
    }
  },
  actions: {},
  getters: {},
  modules: {}
})

export default store