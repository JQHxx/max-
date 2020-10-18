<template>
<div class="share" @click="itemclick">
  <img src="../../../assets/img/common/share.svg" alt="">
</div>
</template>

<script>
export default {
  name: "Share",
  methods: {
    itemclick () {
      /*  */
    }
  }
}
</script>

<style>
.share {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.share img {
  width: 24px;
  height: 24px;
}
</style>