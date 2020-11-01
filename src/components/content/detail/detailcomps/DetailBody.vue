<template>
  <div class="body-text">
    {{NewsBody.text}}
  </div>
</template>

<script>

export default {
  name: "DetailBody",
  props: {
    NewsBody: {
      default() {return {}}
    }
  }
}
</script>

<style scoped>
.body-text {
  text-align: justify;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>