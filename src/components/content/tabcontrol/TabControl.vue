<template>

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
    },
    tabIndex: {
      type: Number,
      default() {
        return 0
      }
    }
  },
  data() {
    return {
      moveRatio: 0.2,
      tabItemWidth: 0,
      tabItemStyle: {}
    }
  },
  mounted() {
    this.init()
  },
  computed: {
    tabbarStyle() {
      return {
        color: `white`,
        transform: `translate3d(${this.tabItemWidth*this.tabIndex}px,0px,0px)`
      }
    }
  },
  methods: {
    init() {
      let tabElement = document.querySelector('#app #community .tab-control .tab-item-cover');
      this.tabItemStyle = tabElement.style;
      this.tabItemWidth = this.$store.state.screenWidth/this.tabTitles.length
      this.tabItemStyle.width = `${this.tabItemWidth}px`
    },

    itemClick(index) {
      if (this.tabIndex === index) {return}
      /* 子传父供其他组件调用 */
      this.$emit('tabClick', index)
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