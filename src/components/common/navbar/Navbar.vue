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
    position: fixed;
    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
    height: 40px;
    /* 父级垂直居中 */
    align-items: center;
    text-align: center;
  }

  .right {
    width: 40px;
  }

  .left {
    width: 40px;
  }

  .center {
    flex: 1;
  }
</style>
