<template>
  <div id="community">
    <Navbar>
      <NavbarLogin slot="left"/>
      <NavbarLog slot="center"/>
      <NavbarSearch slot="right"/>
    </Navbar>
    <TabControl :tabTitles="['帖子', '话题']" @tabClick="tabClick"/>
    <TabContent :tabIndex="tabIndex">
      <CommunityPost/>
      <CommunityTopic/>
    </TabContent>
  </div>
</template>>

<script>
  import Navbar from "../../components/common/navbar/Navbar"
  import NavbarLogin from "../../components/common/navbar/NavbarLogin"
  import NavbarLog from "../../components/common/navbar/NavbarLog"
  import NavbarSearch from "../../components/common/navbar/NavbarSeach"
  import TabControl from "../../components/content/tabcontrol/TabControl"
  import TabContent from "../../components/content/tabcontent/TabContent"
  import CommunityTopic from "../../views/community/communitycomps/CommunityTopic"
  import CommunityPost from "../../views/community/communitycomps/CommunityPost"

  export default {
    name: "Community",
    data() {
      return {
        tabIndex: 0,
      }
    },
    components: {
      Navbar,
      NavbarLogin,
      NavbarLog,
      NavbarSearch,
      TabControl,
      TabContent,
      CommunityTopic,
      CommunityPost
    },
    methods: {
      tabClick(index) {
        this.tabIndex = index
      }
    }
  }
</script>

<style>
</style>>