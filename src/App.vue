<template>
  <div id="app">
    <!-- 另一种保存当前阅读位置的方法，使用activated和deactivated生命周期函数，
      首先由scrollHandler获取的position动态存储在父组件，当deactivated触发离开页面时
      记录当前位置，activated触发进入页面时，调用scrollTo前往当前页面 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <MaxTabBar/>
  </div>
</template>

<script>
import MaxTabBar from "./components/content/maxtabbar/MaxTabBar"

export default {
  name: 'App',
  components: {
    MaxTabBar
  },
  methods: {
    // 全局常量屏幕宽度
    init() {
      let app = document.querySelector('#app')
      let w = app.offsetWidth;
      let h = app.offsetHeight;
      // 参数只接收一个
      this.$store.commit("getScreenWidthHeight", [w, h])
    }
  },
  mounted: function () {
    this.init()
  }
}
</script>

<style>
#app {
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
}
</style>