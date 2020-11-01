<template>
  <div class="container">
    {{date | timestampToDetail}}
  </div>
</template>

<script>
export default {
  name: "Date",
  props: {
    date: {
      default() {return ""}
    }
  }
}
</script>

<style scoped>
.container{
  font-size: 12px;
  color: #bababa;
}
</style>