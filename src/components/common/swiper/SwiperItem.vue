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
  }

  .swiperimages img {
    width: 100%;
    height: 100%;
  }
</style>