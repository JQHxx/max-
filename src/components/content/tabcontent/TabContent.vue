<template>
<div class="hy-tab">
  <div class="tab-control">
    <div class="tab-item-cover" :style="barStyle">
      <div class="tabs-inv-bar"></div>
    </div>
    <div v-for="(item, index) in tabTitles"
      class="tab-control-item"
      :class="{isActive: index === tabIndex}"
      @click="itemClick(index)"
      :key=index>
      <span>{{item}}</span>
    </div>
  </div>
  <div class="tab-content"
    :style="contentStyle"
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
      moveRatio: 0.2,
      tabcontentStyle: {},
      tabbarStyle: {},
      tabItemWidth: 0,
    }
  },
  props: {
    tabTitles: {
      type: Array,
      default() {
        return []
      }
    },
    tabIndex: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  mounted() {
    this.init()
  },
  computed: {
    contentStyle() {
      return {
        transform: `translate3d(${this.$store.state.screenWidth*(-this.tabIndex)}px,0px,0px)`
      }
    },
    barStyle() {
      return {
        color: `white`,
        transform: `translate3d(${this.tabItemWidth*this.tabIndex}px,0px,0px)`
      }
    }
  },
  methods: {
    init() {
      let tabContent = document.querySelector('#app #community .hy-tab .tab-content');
      this.tabcontentStyle = tabContent.style;
      let tabElement = document.querySelector('#app #community .tab-control .tab-item-cover');
      this.tabbarStyle = tabElement.style;
      this.tabItemWidth = this.$store.state.screenWidth/this.tabTitles.length;
      this.tabbarStyle.width = `${this.tabItemWidth}px`
    },

    itemClick(index) {
      if (this.tabIndex === index) {return}
      /* 子传父供其他组件调用 */
      this.$emit('tabClick', index)
    },

    setTransform(position) {
      this.tabcontentStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.tabcontentStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
      this.tabcontentStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
    },

    touchStart(e) {
      this.startX = e.touches[0].pageX;
    },

    touchMove(e) {
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX-this.startX;
      if (this.tabIndex>0 && this.distance>0){this.setTransform(this.distance)}
      if (this.tabIndex<this.tabTitles.length-1 && this.distance <0){this.setTransform(this.distance)}
    },

    touchEnd(e) {
      let currentMove = Math.abs(this.distance);
      if (this.distance === 0) {return}
      else if (this.distance>0 && currentMove>this.moveRatio*this.$store.state.screenWidth && this.cpntabIndex>0) {
        this.$emit("tabTouch", this.cpntabIndex-1)
      }
      else if (this.distance<0 && currentMove>this.moveRatio*this.$store.state.screenWidth && this.cpntabIndex<this.tabTitles.length-1) {
        this.$emit("tabTouch", this.cpntabIndex+1)
      }
      console.log(this.distance,this.tabTitles,this.cpntabIndex)
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
  top: 40px;
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
  height: 40px;
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