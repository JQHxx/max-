<template>
  <Swiper>
    <!-- 若干swiperitem，不加key引警告  -->
    <SwiperItem v-for="(item, index) in RotationImages" :key=index>
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </SwiperItem>
  </Swiper>
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
</style>