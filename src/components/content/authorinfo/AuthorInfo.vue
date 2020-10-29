<template>
<div id="author-info">
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {
  name: "AuthorInfo"
}
</script>

<style scoped>
.right {
  height: 45px;
  width: auto;
  display: flex;
  align-items: center;
}

.left {
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
}

.center {
  height: 45px;
  flex: 1;
  display: flex;
  align-items: center;
}
</style>
