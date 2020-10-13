<template>
<div class="find-swiper">
  <Swiper>
    <!-- 若干swiperitem，不加key引警告  -->
    <SwiperItem v-for="(item, index) in RotationImages" :key=index>
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </SwiperItem>
  </Swiper>
</div>
</template>

<script>
  import SwiperItem from "../../../components/common/swiper/SwiperItem"
  import Swiper from "../../../components/common/swiper/Swiper"

  export default {
    name: "FindSwiper",
    props: {
      RotationImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style>
.find-swiper {
  position: absolute;
  height: 250px;
  top: 0px;
  left: 0px;
  right: 0px;
}
</style>