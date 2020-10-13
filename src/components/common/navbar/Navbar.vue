<template>
<div id="navbar">
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style>
#navbar {
  display: flex;
  background-color: black;
  height: 100%;
  width: 100%;
  /* 父级垂直居中 */
  align-items: center;
  text-align: center;
}

.right {
  width: 45px;
}

.left {
  width: 45px;
}

.center {
  flex: 1;
}
</style>
