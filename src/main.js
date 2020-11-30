import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import {timestampToTime, timestampToDetail} from './utils/utils'

Vue.config.productionTip = false;
Vue.filter('timestampToTime', timestampToTime)
Vue.filter('timestampToDetail', timestampToDetail)

// 移动端300延迟1.安装导入，2.此处调用
fastclick.attach(document.body)

// 图片懒加载，v-bind替换为v-lazy
Vue.use(VueLazyLoad,{
  loading: require('./assets/img/common/max.jpg')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')