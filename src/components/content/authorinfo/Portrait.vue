<template>
  <div class="portrait" @click="itemclick">
    <img :src="portrait" alt="">
  </div>
</template>

<script>
export default {
  name: "Portrait",
  props: {
    portrait: {
      default() {return ""}
    }
  },
  methods: {
    itemclick() {
      /*  */
    }
  }
}
</script>

<style scoped>
.portrait {
  width: 80%;
  height: 80%;
  border-radius: 50%;
  overflow: hidden;
}
.portrait img{
  width: 100%;
  height: 100%;
}
</style>