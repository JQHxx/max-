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
      this.$router.push("/user")
    }
  }
}
</script>

<style>
.navbar-login {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-login img {
  width: 24px;
  height: 24px;
}
</style>