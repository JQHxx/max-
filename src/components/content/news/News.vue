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
  position: absolute;
  width: 100%;
  top: 0px;
  display: list-item;
}
</style>