<template>
  <div class="navbar-login" @click="itemclick">
    <img src="../../../assets/img/common/login-icon.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "NavbarLogin",
  props: {
    },
  data () {
    return {
    }
  },
  methods: {
    itemclick () {
    }
  }
}
</script>

<style>
  .navbar-login img {
    width: 24px;
    height: 24px;
  }
</style>