<template>
  <div class="swiperitem">
    <div class="swiper-images">
      <slot name="image"></slot>
    </div>
    <div class="swiper-title">
    <div class="swiper-title-text">
      <slot name="title"></slot>
    </div>
    <div class="swiper-endnote">
      <div class="swiper-views">
        <div class="swiper-views-icon">
          <img src="../../../assets/img/common/browse-icon.svg" alt="">
        </div>
        <div class="swiper-views-text">
          <slot name="views"></slot>
        </div>
      </div>
      <div class="middle-line">|</div>
      <div class="swiper-date">
        <div class="swiper-date-icon">
          <img src="../../../assets/img/common/clock-icon.svg" alt="">
        </div>
        <div class="swiper-date-text">
          <slot name="date"></slot>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
	export default {
    name: "SwiperItem",
    methods: {
      itemclick() {
         
      }
    }
	}
</script>

<style>
.swiperitem {
  height: 100%;
  width: 100%;
  flex-shrink: 0;
}

.swiper-images {
  width: 100%;
  height: 100%;
}

.swiper-title {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 40%;
}

.swiper-title-text {
  margin: 0 20px 0 20px;
  text-align: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.swiper-endnote {
  width: 100%;
  height: 18%;
  display: flex;
  justify-content: center;
}

.swiper-views {
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.swiper-views-icon img {
  height: 100%;
  width: 13px;
}

.swiper-views-text {
  margin-left: 5px;
  height: 100%;
  color: #bfbfbf;
  font-size: 100%;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.swiper-date {
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;
}

.swiper-date-text {
  margin-left: 5px;
  height: 100%;
  color: #bfbfbf;
  font-size: 90%;
  font-weight: bold;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.swiper-date-icon img {
  height: 100%;
  width: 13px;
}

.middle-line {
  color: #bfbfbf;
  font-size: 100%;
  width: 30px;
  text-align: center;
}
</style>