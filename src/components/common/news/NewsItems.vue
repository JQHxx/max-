<template>
  <div class="news-item" @click="itemclick">
    <div class="image">
      <slot name="image"></slot>
    </div>
    <div class="title">
      <slot name="title"></slot>
      <div class="date">
        <slot name="date"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsItems",
  methods: {
    itemclick () {
      /*  */
    }
  }
}
</script>

<style>
  .news-item {
    display: flex;
    border-top-style: solid;
    border-width: 2px;
    border-color: #bababa;
    height: 84px;
    align-items: center;
  }

  .title {
    color: black;
    font-size: 15px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    margin: 0 15px 0 15px;
    line-height: 20px;
  }

  .date {
    text-align: right;
    font-size: 10px;
    color: #bababa;
  }

  .image {
    background-color: black;
    top:0px;
    left: 0px;
    bottom: 0px;
  }

  .news-item img {
    width: 140px;
    height: 78px;
  }
</style>