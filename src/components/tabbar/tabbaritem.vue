<template>
  <div class="tabbar-item" @click="itemclick">
    <div v-if="isactive">
      <slot name="item-icon-fill"></slot>
    </div>
    <div v-else name="item-icon">
      <slot name="item-icon"></slot>
    </div>
    <div :style="activestyle">
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
    },
    activestyle () {
      return this.isactive ? {color: "blue"} : {}
    }
  },
  methods: {
    itemclick () {
      if (this.$route.path==this.path){
        return
      }
      this.$router.push(this.path)
      console.log(this.$route.path)
    }
  }
}
</script>

<style scoped>
  .tabbar-item {
    flex: auto;

    margin-top: 0%;
    vertical-align: middle;
    margin-bottom: 0%;

    text-align: center;
    text-emphasis-color: initial;
    font-size: 200%;
  }

  .tabbar-item img {
    width: 25%;
  }
</style>