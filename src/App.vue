<template>
  <div id="app">
    <router-view></router-view>
    <tabbar>
      <tabbar-item path="/user">
        <img slot="item-icon-fill" src="./assets/img/tabbar/user-fill.svg" alt="">
        <img slot="item-icon" src="./assets/img/tabbar/user.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbar-item>
      <tabbar-item path="/data">
        <img slot="item-icon-fill" src="./assets/img/tabbar/data-fill.svg" alt="">
        <img slot="item-icon" src="./assets/img/tabbar/data.svg" alt="">
        <div slot="item-text">数据</div>
      </tabbar-item>
      <tabbar-item path="/community">
        <img slot="item-icon-fill" src="./assets/img/tabbar/community-fill.svg" alt="">
        <img slot="item-icon" src="./assets/img/tabbar/community.svg" alt="">
        <div slot="item-text">社区</div>
      </tabbar-item>
      <tabbar-item path="/find">
        <img slot="item-icon-fill" src="./assets/img/tabbar/find-fill.svg" alt="">
        <img slot="item-icon" src="./assets/img/tabbar/find.svg" alt="">
        <div slot="item-text">发现</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import Tabbar from "./components/tabbar/tabbar"
  import TabbarItem from "./components/tabbar/tabbaritem"
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