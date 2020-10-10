<template>
  <div class="tab-control">
    <!-- 当插针只是文字的不同时，如选项卡，没有除数量以外的扩展性，使用插槽代码会冗余 -->
    <div class="tab-item-cover">
      <div class="tabs-inv-bar"></div>
    </div>
    <div v-for="(item, index) in tabTitles"
      class="tab-control-item"
      :class="{isActive: index === currentIndex}"
      @click="itemClick(index)"
      @touchstart="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
      :key=index>
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      tabTitles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0,
        moveRatio: 0.25,
        screenWidth: 0,
        tabItemWidth: 0,
        tabItemStyle: {}
      }
    },
    /* mounted是在模板渲染后初始化，created是在渲染前即应用实例挂载在模板之前 */
    mounted: function () {
      this.init()
    },
    computed: {},
    methods: {
      init() {
        let tabElement = document.querySelector('.tab-control');
        /* get方法获得的时list */
        let tabItem = tabElement.getElementsByClassName('tab-item-cover')[0]
        this.screenWidth = tabElement.offsetWidth
        this.tabItemStyle = tabItem.style;
        this.tabItemWidth = this.screenWidth/this.tabTitles.length
        this.tabItemStyle.width = `${this.tabItemWidth}px`
      },

      setTransform: function (position) {
        this.tabItemStyle.transform = `translate3d(${position}px, 0, 0)`;
        this.tabItemStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
        this.tabItemStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
      },

      itemClick(index) {
        if (this.currentIndex === index) {return}
        let position = index*this.tabItemWidth
        /* 元素的绝对位置不会以风格移动而发生改变，因此左移1个单位再右移1个单位回到原点的思路是错误的 */
        /* 即风格转移都是以绝对位置计算的 */
        this.setTransform(position)
        this.currentIndex = index;
      },

      touchStart: function (e) {
        this.startX = e.touches[0].pageX;
      },

      touchMove: function (e) {
        this.currentX = e.touches[0].pageX;
        this.distance = this.currentX-this.startX;
      },

      touchEnd: function (e) {
        let currentMove = Math.abs(this.distance);
        if (this.distance === 0) {return}
        else if (this.distance>0 && currentMove>this.moveRatio*this.tabElementWidth && this.currentIndex>0) {
          this.currentIndex--
        }
        else if (this.distance<0 && currentMove>this.moveRatio*this.tabElementWidth && this.currentIndex<this.tabTitles.length-1) {
          this.currentIndex++
        }
      }
    }
  }
</script>

<style>
  .tab-control {
    top: 40px;
    display: flex;
    position: fixed;
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
    transition: transform 300ms;
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