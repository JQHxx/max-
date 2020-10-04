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
  </div>
</template>>

<script type>
  import Navbar from "../../components/common/navbar/Navbar"
  import NavbarLogin from "../../components/common/navbar/NavbarLogin"
  import NavbarLog from "../../components/common/navbar/NavbarLog"
  import NavbarSearch from "../../components/common/navbar/NavbarSeach"
  import {getFindMultidata} from "../../network/find"

  export default {
    name: "Find",
    components: {
      Navbar,
      NavbarLogin,
      NavbarLog,
      NavbarSearch
    },
    data() {
      return {
        result: null
      }
    },
    created() {
      getFindMultidata()
      .then(res=>{
        console.log(res);
        this.result = res})
    }
  }
</script>

<style>
  #find {
    position: relative;
    font-size: 28px;
  }
</style>>