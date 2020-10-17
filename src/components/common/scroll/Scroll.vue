<template>
<!-- ref位于dom上通过this.$refs.scroll获取的是节点，位于组件模板标签上获取的是vue实例，
可以通过this.$refs.scroll.message获取数据 -->
<div class="wrapper" ref="scroll">
  <div class="scroll">
    <slot></slot>
  </div>
</div>
</template>

<script>
// 1.导入better-scroll
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      bscroll: null,
    }
  },
  mounted() {
    //setTimeout(this.initBscroll, 200)
    this.initBscroll()
  },
  methods: {
    // 2.创建bs实例，属性由父传子提供
    initBscroll() {
      this.bscroll = new BScroll(this.$refs.scroll, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
    // 3.监听滚动相关事件，注意这里不是调用的函数接口
    this.bscroll.on('pullingUp', this.pullingUpHandler)
    this.bscroll.on('scroll', (position)=>{this.scrollHandler(position)})
    },

    pullingUpHandler() {
      // 发送上拉指令，触发父组件事件
      this.$emit('pullingUps')
    },

    finishPullUpHandler() {
      if (this.bscroll === null) {return}
      this.bscroll.finishPullUp(),
      this.bscroll.refresh()
    },

    scrollHandler(position) {
      this.$emit('scrollPostion', position)
    },

    scrollTo(x, y, time) {
        this.bscroll.scrollTo(x, y, time)
    },
  }
}
</script>

<style>
/* 1.content的高度一定要大于ref的wrapper，2.dom有图片需要延迟mounted挂载 */
.wrapper {
  height: 100%;
  width: 100%;
}
</style>