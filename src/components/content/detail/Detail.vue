<template>
<div class="detail">
  <DetailNavbar/>
</div>
</template>

<script>
import DetailNavbar from "./detailcomps/DetailNavbar"

export default {
  name: "Detail",
  data() {
    return {
      id: Number
    }
  },
  components: {
    DetailNavbar
  },
  created() {
    this.id = this.$route.query.id
    console.log(this.id)
  }
}
</script>

<style>
</style>