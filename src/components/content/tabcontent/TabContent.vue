<template>
<div class="hy-tab">
  <div class="tab-control">
    <div class="tab-item-cover">
      <div class="tabs-inv-bar"></div>
    </div>
    <div v-for="(item, index) in tabTitles"
      class="tab-control-item"
      :class="{isActive: index === cIndex}"
      @click="itemClick(index)"
      :key=index>
      <span>{{item}}</span>
    </div>
  </div>
  <div class="tab-content"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "TabContent",
  data() {
    return {
      cIndex: 0,// 全局索引
      switchRatio: 0.2,// 触发切换比例
      switchLimit: 0,// 触发切换临界值
      tabItemWidth: 0,// 单个选项卡宽度
      ContentcurrentPosition: 0,// 目前内容位置
      tabCurrentPosition: 0,// 目前选项卡位置
      tabcontentStyle: {},// 内容风格
      tabbarStyle: {},// 选项卡导航指针风格
      moveRatio: 0.2,// 边界滑动限制比例
      moveLimit: 0,// 边界滑动临界值
    }
  },
  props: {
    tabTitles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let tabContent = document.querySelector('.hy-tab .tab-content');
      this.tabcontentStyle = tabContent.style;
      let tabElement = document.querySelector('.hy-tab .tab-control .tab-item-cover');
      this.tabbarStyle = tabElement.style;
      this.tabItemWidth = this.$store.state.screenWidth/this.tabTitles.length;
      this.tabbarStyle.width = `${this.tabItemWidth}px`
      this.switchLimit = this.switchRatio*this.$store.state.screenWidth
      this.moveLimit = this.moveRatio*this.tabItemWidth
    },

    computePostion() {
      this.contentCurrentPosition = -this.cIndex*this.$store.state.screenWidth
      this.tabCurrentPosition = this.cIndex*this.tabItemWidth
    },

    itemClick(index) {
      if (this.cIndex === index) {return}
      /* 子传父供其他组件调用 */
      this.cIndex = index
      this.computePostion()
      this.tabSetTransform(0)
      this.contentSetTransform(0)
    },

    contentSetTransform(distance) {
      let contentPostion = this.contentCurrentPosition+distance
      this.tabcontentStyle.transform = `translate3d(${contentPostion}px, 0, 0)`;
      this.tabcontentStyle['-webkit-transform'] = `translate3d(${contentPostion}px), 0, 0`;
      this.tabcontentStyle['-ms-transform'] = `translate3d(${contentPostion}px), 0, 0`;
    },

    tabSetTransform(distance) {
      let tabPostion = this.tabCurrentPosition+(-distance/this.$store.state.screenWidth*this.tabItemWidth)
      this.tabbarStyle.transform = `translate3d(${tabPostion}px, 0, 0)`;
      this.tabbarStyle['-webkit-transform'] = `translate3d(${tabPostion}px), 0, 0`;
      this.tabbarStyle['-ms-transform'] = `translate3d(${tabPostion}px), 0, 0`;
    },

    touchStart(e) {
      this.startX = e.touches[0].pageX;
    },

    touchMove(e) {
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX-this.startX;
      let l = this.distance
      if (this.cIndex === 0 && this.distance>0) {
        this.distance>this.moveLimit ? l=this.moveLimit : l=this.distance
      }
      else if (this.cIndex === this.tabTitles.length-1 && this.distance<0) {
        this.distance<-this.moveLimit ? l=-this.moveLimit : l=this.distance
      }
      this.contentSetTransform(l)
      this.tabSetTransform(l)
    },

    touchEnd(e) {
      let currentMove = Math.abs(this.distance);
      if (this.distance == 0) {return}
      if (this.distance>0 && this.cIndex>0 && currentMove>this.switchLimit) {
        this.cIndex--}
      else if (this.distance<0 && this.cIndex<(this.tabTitles.length-1) && currentMove>this.switchLimit) {
        this.cIndex++}
      // 执行切换，如果没超过划动限制那么索引不变图像归位
      this.computePostion()
      this.contentSetTransform(0)
      this.tabSetTransform(0)
    }
  }
}
/* 当插针只是文字的不同时，如选项卡，没有除数量以外的扩展性，使用插槽代码会冗余，
一般一个遍历数组就能把所有元素展示出来 */
/* mounted是在模板渲染后初始化，created是在渲染前即应用实例挂载在模板之前 */
/* 元素的绝对位置不会以风格移动而发生改变，因此左移1个单位再右移1个单位回到原点的思路是错误的
即风格转移都是以绝对位置计算的 */
/* 共性太多共享数据太多共享方法太多的组件完全可以合并成一个组件 */
</script>

<style>
.hy-tab {
  overflow: hidden;
  position: absolute;
  top: 45px;
  left: 0%;
  right: 0%;
}

.tab-content {
  display: flex;
  transition: transform 300ms ease-in-out;
}

.tab-control {
  display: flex;
  position: relative;
  width: 100%;
  text-align: center;
  font-size: 15px;
  height: 45px;
  background-color: black;
  align-items: center;
}

.tab-item-cover {
  position: absolute;
  left: 0px;
  bottom: 4px;
  height: 4px;
  display: flex;
  justify-content: center;
  transition: transform 300ms ease-in-out;
}

.tabs-inv-bar {
  width: 15px;
  height: 100%;
  background-color: white;
  border-radius: 2px;
  bottom: 1px;
}

.tab-control-item {
  flex: 1;
  color: #bababa;
}

.isActive {
  color: white;
}
</style>