<template>
  <div id="data">
    <Navbar>
      <NavbarLogin slot="left">
      </NavbarLogin>
      <NavbarLog slot="center">
      </NavbarLog>
      <NavbarSearch slot="right">
      </NavbarSearch>
    </Navbar>
  </div>
</template>>

<script type>
  import Navbar from "../../components/common/navbar/Navbar"
  import NavbarLogin from "../../components/common/navbar/NavbarLogin"
  import NavbarLog from "../../components/common/navbar/NavbarLog"
  import NavbarSearch from "../../components/common/navbar/NavbarSeach"
  export default {
    name: "Data",
    components: {
      Navbar,
      NavbarLogin,
      NavbarLog,
      NavbarSearch
    }
  }
</script>

<style>
  #data {
    position: relative;
    font-size: 28px;
  }
</style>>