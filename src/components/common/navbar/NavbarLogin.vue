<template>
  <div class="navbar-login" @click="itemclick">
    <img src="../../../assets/img/common/login-icon.svg" alt="">
  </div>
</template>

<script scoped>
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

<style scoped>
  .navbar-login img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
</style>