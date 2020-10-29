<template>
<div id="find">
  <Navbar>
    <NavbarLogin slot="left"/>
    <NavbarLog slot="center"/>
    <NavbarSearch slot="right"/>
  </Navbar>
  <Scroll class="wrapper" ref="scroll"
          :probeType="3" :pullUpLoad="true"
          :listLengthStatus="listLengthStatus"
          @pullingUps="getFindNews"
          @scrollPostion="isShowBackTop">
    <FindSwiper :RotationItems="RotationItems"/>
    <FindNews :FindNews="FindNews.list"/>
  </Scroll>
  <BackTop class="backtop" @itemclick="handleBackTop" v-show="backTopState"/>
</div>
</template>

<script type>
import Navbar from "../../components/common/navbar/Navbar"
import NavbarLogin from "../../components/common/navbar/NavbarLogin"
import NavbarLog from "../../components/common/navbar/NavbarLog"
import NavbarSearch from "../../components/common/navbar/NavbarSeach"
import FindSwiper from "./findcomps/FindSwiper"
import FindNews from "./findcomps/FindNews"
import Scroll from "../../components/common/scroll/Scroll"
import BackTop from "../../components/common/backtop/Backtop"
import {getFindHeadlines, getFindNews} from "../../network/find"

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
    BackTop
  },
  created() {
    /* created函数是模板渲染之前执行的函数，不要在这里写太过复杂的逻辑 */
    this.getFindHeadlines(),
    this.getFindNews()
  },
  data() {
    return {
      RotationItems: [],
      FindNews: {page: 0, list: []},
      backTopState: false,
      listLengthStatus: false
    }
  },
  computed: {},
  methods: {
    getFindHeadlines() {
      getFindHeadlines()
      .then(res=>{this.RotationItems=res.results.slice(0,4)})
    },

    // async 包装为promise对象
    async getFindNews() {
      const page = this.FindNews.page+1
      // await等待语句完成
      await getFindNews(page)
      .then(res=>{
        this.listLengthStatus = !this.listLengthStatus
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
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: absolute;
  overflow: hidden;
  top: 45px;
  bottom: 45px;
  right: 0px;
  left: 0px;
}

.backtop {
  position: fixed;
  right: 8px;
  bottom: 55px;
  width: 45px;
  height: 45px;
}
</style>>