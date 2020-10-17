<template>
  <div class="detail-navbar">
    <Navbar>
      <BackRoute slot="left"/>
      <div class="detail-logo" slot="center">MAX- 新闻</div>
      <div class="" slot="right"></div>
    </Navbar>
  </div>
</template>

<script>
import Navbar from "../../../common/navbar/Navbar"
import BackRoute from "../../../common/backroute/BackRoute"

export default {
  name: "DetailNavbar",
  components: {
    Navbar,
    BackRoute
  }
}
</script>

<style>
.detail-logo {
  height: 100%;
  width: 100%;
  color: white;
  font-size: 15px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>