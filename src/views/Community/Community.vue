<template>
  <div id="community">
    <Navbar>
      <NavbarLogin slot="left"/>
      <NavbarLog slot="center"/>
      <NavbarSearch slot="right"/>
    </Navbar>
    <TabContent :tabTitles="tabTitles" :tabIndex="tabIndex" @tabClick="updateIndex">
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
  import TabContent from "../../components/content/tabcontent/TabContent"
  import CommunityTopic from "../../views/community/communitycomps/CommunityTopic"
  import CommunityPost from "../../views/community/communitycomps/CommunityPost"

  export default {
    name: "Community",
    data() {
      return {
        tabIndex: 0,
        tabTitles: ['帖子', '话题', '多标签测试']
      }
    },
    components: {
      Navbar,
      NavbarLogin,
      NavbarLog,
      NavbarSearch,
      TabContent,
      CommunityTopic,
      CommunityPost
    },
    methods: {
      updateIndex(index) {
        this.tabIndex = index
      }
    }
  }
</script>

<style>
</style>>