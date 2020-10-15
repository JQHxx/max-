<template>
<div id="find">
  <div class="find-navbar">
    <Navbar>
      <NavbarLogin slot="left"/>
      <NavbarLog slot="center"/>
      <NavbarSearch slot="right"/>
    </Navbar>
  </div>
  <div class="find-content">
    <Scroll ref="scroll"
            :probeType="3" :pullUpLoad="true"
            @pullingUps="getFindNews"
            @scrollPostion="isShowBackTop">
      <FindSwiper :RotationImages="RotationImages"/>
      <FindNews :FindNews="FindNews.list"/>
    </Scroll>
  </div>
  <div class="find-backtop" @click="handleBackTop" v-show="backTopState">
    <BackTopcpn/>
  </div>
</div>
</template>

<script type>
import Navbar from "../../components/common/navbar/Navbar"
import NavbarLogin from "../../components/common/navbar/NavbarLogin"
import NavbarLog from "../../components/common/navbar/NavbarLog"
import NavbarSearch from "../../components/common/navbar/NavbarSeach"
import {getFindMultidata, getFindNews} from "../../network/find"
import FindSwiper from "./findcomps/FindSwiper"
import FindNews from "./findcomps/FindNews"
import Scroll from "../../components/common/scroll/Scroll"
import BackTopcpn from "../../components/content/backtop/BackTopcpn"

export default {
  name: "Find",
  components: {
    Navbar,
    NavbarLogin,
    NavbarLog,
    NavbarSearch,
    FindSwiper,
    FindNews,
    Scroll,
    BackTopcpn
  },
  created() {
    /* created函数是模板渲染之前执行的函数，不要在这里写太过复杂的逻辑 */
    this.getFindMultidata(),
    this.getFindNews()
  },
  data() {
    return {
      RotationImages: [],
      FindNews: {page: 0, list: []},
      backTopState: false
    }
  },
  computed: {},
  methods: {
    getFindMultidata() {
      getFindMultidata()
      .then(res=>{this.RotationImages=res.data.banner.list})
    },

    async getFindNews() {
      const page = this.FindNews.page+1
      await getFindNews(page)
      .then(res=>{
        this.FindNews.list.push(...res.results)
        this.FindNews.page += 1
      })
      .catch(err=>{
        console.log(err)
      })
      // 异步操作等待getFindNews结束后再关闭上拉，否则一次上拉过程finish过早，会频繁上拉调用getfindnews
      this.$refs.scroll.finishPullUpHandler()
    },

    handleBackTop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },

    isShowBackTop(position) {
      this.backTopState = Math.abs(position.y) > this.$store.state.screenHeight
      console.log(position, this.backTopState, this.$store.state.screenHeight)
    }
  }
}
</script>

<style>
.find-navbar {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 45px;
  z-index: 999;
}

.find-content {
  position: absolute;
  overflow: hidden;
  top: 45px;
  bottom: 45px;
  right: 0px;
  left: 0px;
}

.find-backtop {
  position: fixed;
  right: 8px;
  bottom: 55px;
  width: 45px;
  height: 45px;
}
</style>>