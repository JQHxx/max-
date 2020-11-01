<template>
<div class="item">
  <div class="author-info">
    <slot name="author"></slot>
  </div>
  <div class="body-click" @click="itemclick">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="abstract">
      <slot name="abstract"></slot>
    </div>
    <div class="footnote">
      <div class="category">
        <slot name="cimage"></slot>
        <slot name="category"></slot>
      </div>
      <div class="likes">
        <img src="../../../assets/img/common/likes.svg" alt="">
        <slot name="likes"></slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {getCommentary} from "../../../network/community"
import {timestampToDetail} from "../../../utils/utils"

export default {
  name: "NewsItems",
  props: {
    PostId: Number
  },
  methods: {
    itemclick () {
      let id = this.PostId;
      this.$router.push({path: '/post', query: {id}})
    }
  }
}
</script>

<style scoped>
.author-info {
  padding: 0px 10px 0px 10px;
}

.item {
  width: 100%;
  border-bottom-style: solid;
  border-width: 1px;
  border-color: #bfbfbf;
}

.title {
  padding: 0 10px 5px 55px;
  font-size: 15px;
  font-weight: bold;
}

.abstract {
  display: flex;
  text-align: justify;
  font-size: 13px;
  padding: 0px 10px 0px 55px;
  color: #bababa;
}

.footnote {
  display: flex;
  padding: 0 10px 0 55px;
  height: 40px;
  align-items: center;
  font-size: 12px;
  color: #bababa;
}
.category {
  flex: 1;
  display: flex;
}
.category img {
  width: 15px;
  height: 15px;
  padding-right: 5px;
}
.likes {
  display: flex;
  justify-content: end;
}
.likes img {
  width: 12px;
  padding-right: 5px;
}
</style>