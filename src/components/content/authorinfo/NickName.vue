<template>
  <div class="nickname" @click="itemclick">
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
.nickname {
  font-size: 12px;
}
</style>