<template>
<div id="swiper">
  <div class="swiper-main" ref="swipermain" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <slot></slot>
  </div>
  <div class="indicator">
    <slot name="indicator" v-if="showIndicator && slideCount>1">
      <div v-for="(item, index) in slideCount" class="indi-item" :class="{active: index === currentIndex-1}" :key="index"></div>
    </slot>
  </div>
</div>
</template>

<script>
export default {
  name: "Swiper",

  props: {
    // 轮播间隔
    interval: {
      type: Number,
      default: 3000
    },
    // 滚动花费时间
    animDuration: {
      type: Number,
      default: 300
    },
    // 下一张滑动边界
    moveRatio: {
      type: Number,
      default: 0.2
    },
    // 显示指示器
    showIndicator: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      slideCount: 0, // 元素个数
      totalWidth: this.$store.state.screenWidth, // swiper的宽度，屏宽
      swiperStyle: {}, // swiper样式
      currentIndex: 1, // 当前的index
      scrolling: false, // 是否正在滚动
    }
  },

  mounted() {
    setTimeout(()=>{
      this.handleDom();
      this.startTimer()}, 3000)
    },

  methods: {
    startTimer() {
      this.playTimer = window.setInterval(
        () => {this.currentIndex++; this.scrollContent(-this.currentIndex * this.totalWidth)},
        this.interval)
    },

    stopTimer() {
      window.clearInterval(this.playTimer);
    },

    scrollContent(moveDistance) {
      this.scrolling = true;
      this.swiperStyle.transition = 'transform '+this.animDuration+'ms';
      this.setTransform(moveDistance);
      this.checkPosition();
      this.scrolling = false
    },

    checkPosition() {
      window.setTimeout(() => {
        this.swiperStyle.transition = '0ms';
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
      }, this.animDuration)
    },

    setTransform(position) {
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
    },

    handleDom() {
      // let swiperElements = document.querySelector('#swiper .swiper-main');
      let swiperElements = this.$refs.swipermain
      let swiperitem = swiperElements.getElementsByClassName('swiperitem');
      this.slideCount = swiperitem.length;
      if (this.slideCount > 1) {
        let cloneFirst = swiperitem[0].cloneNode(true);
        let cloneLast = swiperitem[this.slideCount-1].cloneNode(true);
        swiperElements.insertBefore(cloneLast, swiperitem[0]);
        swiperElements.appendChild(cloneFirst);
        this.swiperStyle = swiperElements.style;
      }
      this.setTransform(-this.totalWidth);
    },

    touchStart(e) {
      if (this.scrolling) return;
      this.stopTimer();
      this.startX = e.touches[0].pageX;
    },

    touchMove(e) {
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let moveDistance = -this.currentIndex * this.totalWidth;
      moveDistance = this.distance + moveDistance;
      this.setTransform(moveDistance);
    },

    touchEnd(e) {
      let currentMove = Math.abs(this.distance);
      if (this.distance === 0) {
        return
      }
      else if (this.distance>0 && currentMove>this.totalWidth*this.moveRatio) {
        this.currentIndex--
      }
      else if (this.distance<0 && currentMove>this.totalWidth*this.moveRatio) {
        this.currentIndex++
      }
      this.scrollContent(-this.currentIndex*this.totalWidth);
      this.startTimer();
    },

    previous() {
      this.changeItem(-1);
    },

    next() {
      this.changeItem(1);
    },

    changeItem(num) {
      this.stopTimer();
      this.currentIndex += num;
      this.scrollContent(-this.currentIndex * this.totalWidth);
      this.startTimer();
    }
  }
}
</script>

<style>
#swiper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.swiper-main {
  display: flex;
  height: 100%;
}

.indicator {
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 8px;
  z-index: 999;
  /* 配合父元素的relative可以不使父元素脱离文档结构 */
  position: absolute;
}

.indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  border-radius: 4px;/* 添加圆角，值为高宽一办则为圆形 */
  background-color: white;
  text-align: center;
  margin: 0 3px 0 3px;
}

.indi-item.active {
  background-color: black;
}
</style>
