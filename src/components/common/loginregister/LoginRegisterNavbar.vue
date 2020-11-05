<template>
<div class="lr">
  <Navbar>
    <BackRoute slot="left"/>
  </Navbar>
</div>
</template>

<script>
import Navbar from "../navbar/Navbar"
import BackRoute from "../backroute/BackRoute"

export default {
  name: "LoginRegisterNavbar",
  components: {
    Navbar,
    BackRoute
  }
}
</script>

<style scoped>
.lr {
  height: 45px;
  position: relative;
}
</style>