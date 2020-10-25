<template>
  <div class="body">
    <div class="cover">
      <div class="cover-image">
        <img :src="item.cover_url" alt="">
      </div>
      <div class="title-relative">
        <div class="title-absolute">
          {{item.title}}
        </div>
      </div>
    </div>
    <AuthorInfo class="container"
    :portrait="item.author_portrait" :time="item.released_timestamp" :nick_name="item.author_nickname"/>
    <div class="body-text">
      {{item.text}}
    </div>
  </div>
</template>

<script>
import Navbar from "../../../common/navbar/Navbar"
import BackRoute from "../../../common/backroute/BackRoute"
import Share from "../../../common/share/Share"
import AuthorInfo from "../../authorinfo/AuthorInfo"

export default {
  name: "DetailNavbar",
  props: {
    item: {
      type: Object,
      default() {return {}}
    }
  },

  components: {
    Navbar,
    BackRoute,
    Share,
    AuthorInfo
  }
}
</script>

<style scoped>
.body {
  top: 0px;
  height: 100%;
  width: 100%;
}

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
}

.title-absolute {
  position: absolute;
  bottom: 20px;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.container {
  display: flex;
  height: 45px;
  width: 100%;
  padding: 0 20px 0px 20px;
}

.body-text {
  text-align: justify;
  margin: 0 20px 20px 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>