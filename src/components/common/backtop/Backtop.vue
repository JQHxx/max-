<template>
<div @click="itemclick">
  <img src="../../../assets/img/common/backtop.png" alt="">
</div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    itemclick() {
      this.$emit("itemclick")
    }
  }
}
</script>

<style scoped>
.backtop img {
  width: 100%;
  height: 100%;
}
</style>