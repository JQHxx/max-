<template>
  <div class="detail-body">
    <div class="detail-cover">
      <div class="detail-img">
        <img :src="item.cover_url" alt="">
      </div>
      <div class="detail-title-re">
        <div class="detail-title">
          {{ item.title}}
        </div>
      </div>
    </div>
    <div class="detail-text">
      {{item.text}}
    </div>
  </div>
</template>

<script>
import Navbar from "../../../common/navbar/Navbar"
import BackRoute from "../../../common/backroute/BackRoute"
import Share from "../../../common/share/Share"

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
    Share
  }
}
</script>

<style>
.detail-body {
  top: 0px;
  height: 100%;
  width: 100%;
}

.detail-cover{
  background-color: black;
  height: 250px;
  width: 100%;
}

.detail-img {
  width: 100%;
  height: 100%;
}

.detail-img img {
  width: 100%;
  height: 100%;
}

.detail-title-re {
  position: relative;
}

.detail-title {
  position: absolute;
  bottom: 20px;
  margin: 0 20px 0 20px;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.detail-text {
  margin: 0 20px 0 20px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>