<template>
<!-- ref位于dom上通过this.$refs.scroll获取的是节点，位于组件模板标签上获取的是vue实例，
可以通过this.$refs.scroll.message获取数据 -->
<div class="wrapper" ref="scroll">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from '@better-scroll/core'

export default {
  name: "Scroll",
  mounted() {
    this.initBscroll()
  },
  methods: {
    initBscroll() {
      this.bscroll = new BScroll(this.$refs.scroll, {
        click: true,
        probeType: 3
      })
    }
  }
}
</script>

<style>
  .wrapper {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
  .content {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 800px;
  }
</style>
