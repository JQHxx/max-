<template>
  <div class="date">
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
.date{
  font-size: 12px;
  color: #bababa;
}
</style>