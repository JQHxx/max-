<template>
<div class="back-route" @click="itemclick">
  <img src="../../../assets/img/common/back.svg" alt="">
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
      this.$router.back()
    }
  }
}
</script>

<style>
.back-route {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back-route img {
  width: 24px;
  height: 24px;
}
</style>