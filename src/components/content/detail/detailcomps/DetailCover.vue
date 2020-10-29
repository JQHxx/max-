<template>
<div class="cover">
  <div class="cover-image">
    <img :src="NewsCover.cover_url" alt="">
  </div>
  <div class="title-relative">
    <div class="title-absolute">
      {{NewsCover.title}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "DetailCover",
  props: {
    NewsCover: {
      default() {return {}}
    }
  }
}
</script>

<style scoped>
.cover{
  background-color: black;
  height: 250px;
  width: 100%;
}

.cover-image {
  width: 100%;
  height: 100%;
}

.cover-image img {
  width: 100%;
  height: 100%;
}

.title-relative {
  position: relative;
  width: 100%;
}

.title-absolute {
  width: 100%;
  position: absolute;
  bottom: 20px;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>