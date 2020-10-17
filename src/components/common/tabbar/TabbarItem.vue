<template>
<div class="tabbar-item" @click="itemclick">
  <div v-if="isactive">
    <slot name="item-icon-fill"></slot>
  </div>
  <div v-else>
    <slot name="item-icon"></slot>
  </div>
  <div :class="{item_text: isactive}">
    <slot name="item-text"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "TabbarItem",
  props: {
    path: String,
    activecolor: {
      type: String,
      default: "blue"
    }
  },
  data () {
    return {
    }
  },
  computed: {
    isactive () {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    itemclick () {
      if (this.$route.path==this.path) {
        return
      }
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
.tabbar-item {
  flex: 1;
  text-align: center;
  position: relative;
  color: #bababa;
  font-size: 8px;
}

.item_text {
  color: blue
}

.tabbar-item img {
  width: 24px;
  height: 24px;
}
</style>