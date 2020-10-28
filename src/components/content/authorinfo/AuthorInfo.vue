<template>
<div>
  <div class="portrait">
    <img :src="portrait" alt="">
  </div>
  <div class="nickname">{{nick_name}}</div>
  <div class="detail-time">{{time | timestampToDetail}}</div>
</div>
</template>

<script>
import {timestampToDetail} from "../../../utils/utils"

export default {
  props: {
    portrait: {
      type: String,
      default() {return ""}
    },
    nick_name: {
      type: String,
      default() {return ""}
    },
    time: {
      type: Number,
      default() {return 0}
    },
  },
  mounted() {
    /*  */
  },
  methods: {
    /*  */
  }
}
</script>

<style scoped>
.portrait {
  height: 100%;
  display: flex;
  align-items: center;
}

.portrait img {
  height: 30px;
  width: 30px;
  border-radius: 15px;

}

.nickname {
  flex: 1;
  margin-left: 10px;
  display: flex;
  align-items: center;
  font-size: 12px;
}

.detail-time {
  display: flex;
  align-items: center;
  font-size: 12px;
}
</style>