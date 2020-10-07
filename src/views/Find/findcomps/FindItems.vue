<template>
  <div class="find-items">
    <div v-for="(item, index) in items" class="item" :key=index>
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FindItems",
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .find-items {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }

  .item {
    flex: 1;
  }

  .item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
