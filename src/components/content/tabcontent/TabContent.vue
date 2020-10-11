<template>
  <div class="hy-tab">
    <div class="tab-content" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabContent",
  props: {
    tabIndex: {
      type: Number,
      default: 0
    }
  },
  computed: {
    contentStyle() {
      return {
        transform: `translate3d(${this.$store.state.screenWidth*(-this.tabIndex)}px,0px,0px)`
      }
    }
  }
}
</script>

<style>
  .hy-tab {
    overflow: hidden;
    position: absolute;
    top: 80px;
    left: 0%;
    right: 0%;
  }

  .tab-content {
    display: flex;
    height: 100%;
    transition: transform 300ms ease-in-out;
  }
</style>