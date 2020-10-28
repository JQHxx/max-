<template>
<div>
  <div class="portrait">
    <img :src="author_info.portrait" alt="">
  </div>
  <div class="nickname">{{author_info.nickname}}</div>
</div>
</template>

<script>
import {timestampToDetail} from "../../../utils/utils"

export default {
  props: {
    author_info: {
      type: Object,
      default() {return {}}
    }
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
</style>