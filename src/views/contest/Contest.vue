<template>
  <div class="page" ref="one">
    <div class="content">
      <div class="contest">赛事</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div class="sticky">-*--*--*-</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>
  </div>
</template>>

<script>
  import BScroll from '@better-scroll/core'
  export default {
    name: "Data",
    components: {},
    mounted() {
      this.init()
    },
    methods: {
      init() {
        this.bscroll = new BScroll(this.$refs.one, {
          click:true,
          probeType: 3,
        })
      }
    }
  }
</script>

<style>
.page {
  height: 400px;
  background-color: red;
  width: 100%;
}

.contest {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  background-color: yellow;
}

.sticky {
  top: 45px;
  position: sticky;
}
</style>