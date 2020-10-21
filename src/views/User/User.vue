<template>
  <div id="user">
    <!-- 层级插槽无祖孙关系只有父子关系，即子模板只在父模板(注册的地方)有效，作用域亦然 -->
    <!-- 记住规律：slot=""插针总是插向包裹它的子模板-->
    <!-- 这里slot插针就无法写在navbarlogin组件页面，因为同一页面没有包裹他的模板标签，模板标签写在了user页面 -->
    <Navbar>
      <NavbarLogin slot="left"/>
      <NavbarLog slot="center"/>
      <NavbarSearch slot="right"/>
    </Navbar>
    <div class="user-content">
      <Login/>
    </div>
  </div>
</template>>

<script>
  import Navbar from "../../components/common/navbar/Navbar"
  import NavbarLogin from "../../components/common/navbar/NavbarLogin"
  import NavbarLog from "../../components/common/navbar/NavbarLog"
  import NavbarSearch from "../../components/common/navbar/NavbarSeach"
  import Login from "../../components/common/login/Login"

  export default {
    name: "User",
    components: {
      Navbar,
      NavbarLogin,
      NavbarLog,
      NavbarSearch,
      Login
    }
  }
</script>

<style>
.user-content {
  position: absolute;
  overflow: hidden;
  top: 45px;
  bottom: 45px;
  right: 0px;
  left: 0px;
}
</style>>