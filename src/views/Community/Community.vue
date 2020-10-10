<template>
  <div id="community">
    <Navbar>
      <NavbarLogin slot="left"/>
      <NavbarLog slot="center"/>
      <NavbarSearch slot="right"/>
    </Navbar>
    <!-- 子传父 -->
    <TabControl :tabTitles="['帖子', '话题']" @childClick="fatherClick"/>
  </div>
</template>>

<script>
  import Navbar from "../../components/common/navbar/Navbar"
  import NavbarLogin from "../../components/common/navbar/NavbarLogin"
  import NavbarLog from "../../components/common/navbar/NavbarLog"
  import NavbarSearch from "../../components/common/navbar/NavbarSeach"
  import TabControl from "../../components/content/tabcontrol/TabControl"

  export default {
    name: "Community",
    data() {
      return {
        currentType: 0,
      }
    },
    components: {
      Navbar,
      NavbarLogin,
      NavbarLog,
      NavbarSearch,
      TabControl
    },
    methods: {
      fatherClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
        }
      }
    }
  }
</script>

<style>
</style>>