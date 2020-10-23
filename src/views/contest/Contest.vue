<template>
  <div id="contest">
    <Navbar>
      <div slot="center" class="logo">全部赛事</div>
    </Navbar>
    <Scroll class="wrapper">
      <ContestContent/>
    </Scroll>
  </div>
</template>>

<script>
  import Navbar from "../../components/common/navbar/Navbar"
  import Scroll from "../../components/common/scroll/Scroll"
  import ContestContent from "./contestcamps/ContestContent"

  export default {
    name: "Data",
    components: {
      Navbar,
      Scroll,
      ContestContent
    },
    mounted() {},
    methods: {}
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

.logo {
  height: 100%;
  width: 100%;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
}
</style>