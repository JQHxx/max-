import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import {timestampToTime, timestampToDetail} from './utils/utils'

Vue.config.productionTip = false;
Vue.filter('timestampToTime', timestampToTime)
Vue.filter('timestampToDetail', timestampToDetail)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')