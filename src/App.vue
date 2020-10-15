<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Tabbar>
      <!-- 这里五个TabbarItem模板没具名，因此默认为default数据插入了Tabbar的default插槽 -->
      <TabbarItem path="/user">
        <img slot="item-icon-fill" src="./assets/img/tabbar/user-fill.svg" alt="">
        <img slot="item-icon" src="./assets/img/tabbar/user.svg" alt="">
        <span slot="item-text">我的</span>
      </TabbarItem>
      <TabbarItem path="/data">
        <img slot="item-icon-fill" src="./assets/img/tabbar/data-fill.svg" alt="">
        <img slot="item-icon" src="./assets/img/tabbar/data.svg" alt="">
        <span slot="item-text">数据</span>
      </TabbarItem>
      <TabbarItem path="/contest">
        <img slot="item-icon-fill" src="./assets/img/tabbar/contest-fill.svg" alt="">
        <img slot="item-icon" src="./assets/img/tabbar/contest.svg" alt="">
        <span slot="item-text">赛事</span>
      </TabbarItem>
      <TabbarItem path="/community">
        <img slot="item-icon-fill" src="./assets/img/tabbar/community-fill.svg" alt="">
        <img slot="item-icon" src="./assets/img/tabbar/community.svg" alt="">
        <span slot="item-text">社区</span>
      </TabbarItem>
      <TabbarItem path="/find">
        <img slot="item-icon-fill" src="./assets/img/tabbar/find-fill.svg" alt="">
        <img slot="item-icon" src="./assets/img/tabbar/find.svg" alt="">
        <span slot="item-text">发现</span>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from "./components/common/tabbar/Tabbar"
import TabbarItem from "./components/common/tabbar/TabbarItem"
export default {
  name: 'App',
  components: {
    Tabbar,
    TabbarItem
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