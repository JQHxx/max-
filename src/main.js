import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import fastclick from 'fastclick'
import {timestampToTime, timestampToDetail} from './utils/utils'

Vue.config.productionTip = false;
Vue.filter('timestampToTime', timestampToTime)
Vue.filter('timestampToDetail', timestampToDetail)

// 移动端300延迟1.安装导入，2.此处调用
fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')