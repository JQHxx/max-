<template>
<div class="category-navbar">
  <Navbar>
    <BackRoute slot="left"/>
    <div class="category-logo" slot="center">{{categoryInfo.slice(4)}}</div>
  </Navbar>
</div>
</template>

<script>
import Navbar from "../../common/navbar/Navbar"
import BackRoute from "../../common/backroute/BackRoute"

export default {
  name: "CategoryNavbar",
  components: {
    Navbar,
    BackRoute
  },
  props: {
    categoryInfo: String,
  }
}
</script>

<style scoped>
.category-navbar {
  position: relative;
  height: 45px;
  width: 100%;
}

.category-logo {
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