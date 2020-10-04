<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar>
      <!-- 这里五个TabbarItem模板没具名，因此默认为default数据插入了Tabbar的default插槽 -->
      <TabbarItem path="/user">
        <img slot="item-icon-fill" src="./assets/img/tabbar/user-fill.svg" alt="">
        <img slot="item-icon" src="./assets/img/tabbar/user.svg" alt="">
        <div slot="item-text">我的</div>
      </TabbarItem>
      <TabbarItem path="/data">
        <img slot="item-icon-fill" src="./assets/img/tabbar/data-fill.svg" alt="">
        <img slot="item-icon" src="./assets/img/tabbar/data.svg" alt="">
        <div slot="item-text">数据</div>
      </TabbarItem>
      <TabbarItem path="/contest">
        <img slot="item-icon-fill" src="./assets/img/tabbar/contest-fill.svg" alt="">
        <img slot="item-icon" src="./assets/img/tabbar/contest.svg" alt="">
        <div slot="item-text">赛事</div>
      </TabbarItem>
      <TabbarItem path="/community">
        <img slot="item-icon-fill" src="./assets/img/tabbar/community-fill.svg" alt="">
        <img slot="item-icon" src="./assets/img/tabbar/community.svg" alt="">
        <div slot="item-text">社区</div>
      </TabbarItem>
      <TabbarItem path="/find">
        <img slot="item-icon-fill" src="./assets/img/tabbar/find-fill.svg" alt="">
        <img slot="item-icon" src="./assets/img/tabbar/find.svg" alt="">
        <div slot="item-text">发现</div>
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
    }
  }
</script>

<style>
  @import url('./assets/css/base.css');
</style>