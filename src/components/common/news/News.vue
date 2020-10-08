<template>
  <div class="news">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "News",
}
</script>

<style>
  .news {
    display: list-item;
    top: 270px;
    left: 0px;
    right: 0px;
    margin-bottom: 45px;
    position: absolute;
  }
</style>