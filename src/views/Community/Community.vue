<template>
  <div id="community">
    <Navbar>
      <NavbarLogin slot="left"/>
      <NavbarLog slot="center"/>
      <NavbarSearch slot="right"/>
    </Navbar>
    <TabContent :tabTitles="tabTitles" ref="content">
      <CommunityPost/>
      <CommunityTopic/>
    </TabContent>
  </div>
</template>

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
  components: {
    Navbar,
    NavbarLogin,
    NavbarLog,
    NavbarSearch,
    TabContent,
    CommunityTopic,
    CommunityPost,
  },
  data() {
    return {
      tabTitles: ['帖子', '话题']
    }
  },
  mounted() {
    this.bodyHeight()
  },
  methods: {
    bodyHeight() {
      let c = this.$refs.content.$el.getElementsByClassName("tab-content")[0]
      c.style.height = `${this.$store.state.screenHeight-45*2}px`;
    }
  }
}
</script>

<style scoped>
</style>