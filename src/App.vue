<template>
  <div id="app" ref="app">
    <!-- 另一种保存当前阅读位置的方法，使用activated和deactivated生命周期函数，
      首先由scrollHandler获取的position动态存储在父组件，当deactivated触发离开页面时
      记录当前位置，activated触发进入页面时，调用scrollTo前往当前页面 -->
    <!-- <keep-alive exclude="Post, Detail">
      <router-view></router-view>
    </keep-alive> -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
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
    init() {
      /* 注意如果ref是挂载在模板标签上获取的是组件，需要加this.$refs.app.$el.offsetWidth获取模板 */
      let w = this.$refs.app.offsetWidth;
      let h = this.$refs.app.offsetHeight;
      // 参数只接收一个
      this.$store.commit("getScreenWidthHeight", [w, h])
    }
  },
  mounted() {
    this.init()
  },
  computed: {
    keepAlive() {
      return this.$route.meta.keepAlive
    }
  }
}
// updated亦可，与mounted，watched不同的是，updated只在数据变化和模板渲染完毕的同时执行操作
  /* updated() {
    this.init()
  } */
// 另一种方法：
      /* 
      let app = document.querySelector('#app');
      let w = app.offsetWidth;
      let h = app.offsetHeight;
      */
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