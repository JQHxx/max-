<template>
<div class="news-item" @click="itemclick">
  <div class="image">
    <slot name="image"></slot>
  </div>
  <div class="title">
    <div class="title-text">
      <slot name="title"></slot>
    </div>
    <div class="endnote">
      <div class="views">
        <div class="views-icon">
          <img src="../../../assets/img/common/browse-icon.svg" alt="">
        </div>
        <div class="views-text">
          <slot name="views"></slot>
        </div>
      </div>
      <div class="date">
        <div class="date-icon">
          <img src="../../../assets/img/common/clock-icon.svg" alt="">
        </div>
        <div class="date-text">
          <slot name="date"></slot>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "NewsItems",
  props: {
    NewsItemId: {
      type: Number,
      default() {return 0}
    }
  },
  methods: {
    itemclick () {
      let id = this.NewsItemId;
      this.$router.push({path: '/detail', query: {id}})
    }
  }
}
</script>

<style>
  .news-item {
    display: flex;
    border-top-style: solid;
    border-bottom-style: solid;
    border-width: 1px;
    border-color: #bfbfbf;
    height: 84px;
    width: 100%;
  }

  .title {
    width: 65%;
    height: 100%;
    padding: 0 15px 0 15px;
  }

  .title-text {
    padding-top: 10px;
    width: 100%;
    height: 55%;
    color: black;
    font-size: 14px;
    font-weight: bold;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  .endnote {
    bottom: 5%;
    width: 100%;
    display: flex;
    align-items: center;
    height: 20%;
  }

  .views {
    display: flex;
    width: 50%;
    height: 100%;
    align-items: center;
  }

  .views-text {
    margin-left: 5px;
    color: #bababa;
    font-size: 10px;
  }
  
  .views-icon {
    display: inline-block;
    height: 100%;
    width: 15%;
  }

  .date {
    display: flex;
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content:flex-end;
  }

  .date-icon {
    width: 15%;
    height: 100%;
  }

  .date-text {
    padding-left: 5px;
    font-size: 10px;
    color: #bababa;
  }

  .image {
    width: 35%;
    height: 100%;
    background-color: black;
  }

  .news-item img {
    width: 100%;
    height: 100%;
  }
</style>