export const $_backTop = {
  data() {
    return {
      backTopState: false,
    }
  },
  methods: {
    handleBackTop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    isShowBackTop(position) {
      this.backTopState = Math.abs(position.y) > this.$store.state.screenHeight
    }
  }
}