<template>
  <div id="find">
    <Navbar>
      <NavbarLogin slot="left">
      </NavbarLogin>
      <NavbarLog slot="center">
      </NavbarLog>
      <NavbarSearch slot="right">
      </NavbarSearch>
    </Navbar>
    <FindSwiper class="find-swiper" :RotationImages="RotationImages"/>
    <FindItems class="find-items" :FindItems="FindItems"></FindItems>
  </div>
</template>

<script type>
  import Navbar from "../../components/common/navbar/Navbar"
  import NavbarLogin from "../../components/common/navbar/NavbarLogin"
  import NavbarLog from "../../components/common/navbar/NavbarLog"
  import NavbarSearch from "../../components/common/navbar/NavbarSeach"
  import {getFindMultidata} from "../../network/find"
  import FindSwiper from "./findcomps/FindSwiper"
  import FindItems from "./findcomps/FindItems"

  export default {
    name: "Find",
    components: {
      Navbar,
      NavbarLogin,
      NavbarLog,
      NavbarSearch,
      FindSwiper,
      FindItems
    },
    data() {
      return {
        RotationImages: [],
        FindItems: [],
      }
    },
    methods: {
      getFindMultidata() {
        getFindMultidata().then(res=>{this.RotationImages = res.data.banner.list})
      }
    },
    created() {
      this.getFindMultidata()
    }
  }
</script>

<style>
  #find {
    position: relative;
    font-size: 28px;
  }

  .find-swiper {
    position: absolute;
    top: 40px;
    left: 0%;
    right: 0%;
  }
</style>>