<template>
  <div class="navbar-search" @click="itemclick">
    <img src="../../../assets/img/common/search-icon.svg" alt="">
  </div>
</template>

<script scoped>
export default {
  name: "NavbarSearch",
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
  .navbar-search img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
</style>