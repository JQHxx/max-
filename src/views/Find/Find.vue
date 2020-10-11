<template>
  <div id="find">
    <Navbar>
      <NavbarLogin slot="left"/>
      <NavbarLog slot="center"/>
      <NavbarSearch slot="right"/>
    </Navbar>
    <FindSwiper :RotationImages="RotationImages"/>
    <FindNews :FindNews="FindNews"/>
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

  export default {
    name: "Find",
    components: {
      Navbar,
      NavbarLogin,
      NavbarLog,
      NavbarSearch,
      FindSwiper,
      FindNews
    },
    data() {
      return {
        RotationImages: [],
        FindNews: [],
      }
    },
    methods: {
      getFindMultidata() {
        getFindMultidata().then(res=>{this.RotationImages=res.data.banner.list})
      },
      getFindNews() {
        getFindNews().then(res=>{this.FindNews=res.results})
      }
    },
    created() {
      /* created函数是模板渲染之前执行的函数，不要在这里写太过复杂的逻辑 */
      this.getFindMultidata(),
      this.getFindNews()
    }
  }
</script>

<style>
</style>>