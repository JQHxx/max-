<template>
  <div class="detail-navbar">
    <Navbar>
      <BackRoute slot="left"/>
      <div class="detail-logo" slot="center">MAX- 新闻</div>
      <Share slot="right"/>
    </Navbar>
  </div>
</template>

<script>
import Navbar from "../../../common/navbar/Navbar"
import BackRoute from "../../../common/backroute/BackRoute"
import Share from "../../../common/share/Share"

export default {
  name: "DetailNavbar",
  components: {
    Navbar,
    BackRoute,
    Share
  }
}
</script>

<style>
.detail-navbar{
  position: relative;
  height: 45px;
  width: 100%;
}

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