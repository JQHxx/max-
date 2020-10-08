<template>
  <div class="swiperimages">
    <slot></slot>
  </div>
</template>

<script>
	export default {
		name: "SwiperItem"
	}
</script>

<style>
  .swiperimages {
    width: 100%;
    flex-shrink: 0;
    position: relative;
  }

  .swiperimages img {
    width: 100%;
    height: 230px;
  }
</style>