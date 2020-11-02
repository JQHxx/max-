<template>
<div id="container">
  <div class="list">
    <div class="item" v-for="(item, key) in CategoryList" :key=key>
      {{item.name}}
    </div>
  </div>
  <div class="content"></div>
</div>
</template>

<script>
export default {
  name: "CategoryList",
  props: {
    CategoryList : Array
  }
}
</script>

<style scoped>
#container {
  height: 100%;
  width: 100%;
}

.list {
  width: 30%;
  height: 100%;
  background-color: #e6e6e6;
}

.item {
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: #bfbfbf;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}

.content {
  width: 70%;
  height: 100%;
}
</style>