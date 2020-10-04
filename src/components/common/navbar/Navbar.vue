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

<style scoped>
  #navbar {
    display: flex;
    height: 40px;
    background-color: black;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }

  .right {
    width: 40px;
    text-align: center;
  }

  .left {
    text-align: center;
    width: 40px;
  }

  .center {
    flex: auto;
    text-align: center;
  }
</style>
