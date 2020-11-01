<template>
  <div class="container" @click="itemclick">
    {{nickname}}
  </div>
</template>

<script>
export default {
  name: "NickName",
  props: {
    nickname: {
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
.container {
  font-size: 12px;
}
</style>