<template>
  <div class="navbar-logo">
      <img src="../../../assets/img/common/log-icon.png" alt="">

      <span class="navbar-text">MAX-</span>

  </div>
</template>

<script>
export default {
  name: "NavbarLog",
}
</script>

<style>
.navbar-logo {
  height: 100%;
  width: 100%;
  display: flex;
  /* 父级水平居中 */
  justify-content: center;
  align-items: center;
}

.navbar-logo img {
  width: 25px;
  height: 24px;
  margin-right: 4px;
  margin-left: 4px;
}

.navbar-text {
  color: white;
  font-size: 15px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: bold;
  margin-right: 4px;
  margin-left: 4px;
}
</style>