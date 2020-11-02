<template>
<!-- ref位于dom上通过this.$refs.scroll获取的是节点，位于组件模板标签上获取的是vue实例，
可以通过this.$refs.scroll.message获取数据或方法，也可通过this.$refs.scroll.$el获取dom元素 -->
<div ref="scroll">
  <div class="scroll">
    <slot></slot>
  </div>
</div>
</template>

<script>
// 1.导入better-scroll
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import PullDown from '@better-scroll/pull-down'

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
    listLengthStatus: {
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
    setTimeout(this.initBscroll, 200)
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
      this.bscroll.finishPullUp()
      //this.bscroll.refresh()
    },

    refresh() {
      if (this.bscroll === null) {return}
      this.bscroll.refresh()
    },

    scrollHandler(position) {
      this.$emit('scrollPostion', position)
    },

    scrollTo(x, y, time) {
        this.bscroll.scrollTo(x, y, time)
    }
  },
  watch: {
    listLengthStatus: {
      // 零延时数据还未加载完毕就refresh会记录错误的位置
      handler() {
        setTimeout(this.refresh, 200)
      },
      deep: true
    }
  }
}
</script>

<style>
/* 1.content的高度一定要大于ref的wrapper，2.dom有图片需要延迟mounted挂载 */
</style>