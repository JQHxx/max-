
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
  }
}