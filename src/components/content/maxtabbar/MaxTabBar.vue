<template>
<Tabbar>
  <!-- 这里五个TabbarItem模板没具名，因此默认为default数据插入了Tabbar的default插槽 -->
  <TabbarItem path="/user">
    <img slot="item-icon-fill" src="../../../assets/img/tabbar/user-fill.svg" alt="">
    <img slot="item-icon" src="../../../assets/img/tabbar/user.svg" alt="">
    <span slot="item-text">我的</span>
  </TabbarItem>
  <TabbarItem path="/contest">
    <img slot="item-icon-fill" src="../../../assets/img/tabbar/contest-fill.svg" alt="">
    <img slot="item-icon" src="../../../assets/img/tabbar/contest.svg" alt="">
    <span slot="item-text">赛事</span>
  </TabbarItem>
  <TabbarItem path="/community">
    <img slot="item-icon-fill" src="../../../assets/img/tabbar/community-fill.svg" alt="">
    <img slot="item-icon" src="../../../assets/img/tabbar/community.svg" alt="">
    <span slot="item-text">社区</span>
  </TabbarItem>
  <TabbarItem path="/find">
    <img slot="item-icon-fill" src="../../../assets/img/tabbar/find-fill.svg" alt="">
    <img slot="item-icon" src="../../../assets/img/tabbar/find.svg" alt="">
    <span slot="item-text">发现</span>
  </TabbarItem>
</Tabbar>
</template>

<script>
import Tabbar from "../../common/tabbar/Tabbar"
import TabbarItem from "../../common/tabbar/TabbarItem"

export default {
  name: "MaxTabBar",
  components: {
    Tabbar,
    TabbarItem
  },
}
</script>

<style>
</style>