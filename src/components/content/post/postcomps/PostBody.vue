<template>
<div>
  <div class="title">
    {{PostBody.title}}
  </div>
  <div class="text">
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
.title {
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 0 10px 0 10px;
  font-weight: bold;
  height: 45px;
}


.text {
  padding: 0 10px 10px 10px;
  text-align: justify;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>