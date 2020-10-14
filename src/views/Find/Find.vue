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
            @pullingUps="getFindNews">
      <FindSwiper :RotationImages="RotationImages"/>
      <FindNews :FindNews="FindNews.list"/>
    </Scroll>
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

export default {
  name: "Find",
  components: {
    Navbar,
    NavbarLogin,
    NavbarLog,
    NavbarSearch,
    FindSwiper,
    FindNews,
    Scroll
  },
  data() {
    return {
      isPullUpLoad: false
    }
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
    }
  },
  methods: {
    getFindMultidata() {
      getFindMultidata()
      .then(res=>{this.RotationImages=res.data.banner.list})
    },

    getFindNews() {
      const page = this.FindNews.page+1
      getFindNews(page)
      .then(res=>{
        this.FindNews.list.push(...res.results)
        this.FindNews.page += 1
        console.log(page)
      })
      .catch(err=>{console.log(err)})
    },
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
</style>>