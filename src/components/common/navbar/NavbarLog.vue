<template>
  <div class="navbar-logo">
    <div class="logo-image">
      <img src="../../../assets/img/common/log-icon.png" alt="">
    </div>
    <div class="logo-text">
      <span class="navbar-text">MAX-</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarLog",
}
</script>

<style>
  .navbar-logo {
    display: flex;
    /* 父级水平居中 */
    justify-content: center;
  }

  .logo-image {
    width: 25px;
    height: 24px;
    margin-right: 4px;
    margin-left: 4px;
  }

  .logo-text {
    color: white;
    font-size: 15px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    margin-right: 4px;
    margin-left: 4px;
  }
</style>