<template>
  <div>
    <div class="body">
      {{PostBody.text}}
    </div>
  </div>
</template>

<script>
export default {
  name: "PostBody",
  props: {
    PostBody: {
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