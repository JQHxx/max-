<template>
<div class="detail">
  <DetailNavbar/>
  <Scroll class="wrapper"
          ref="scroll"
          :probeType="3" :pullUpLoad="true"
          @pullingUps="getComments">
    <div class="body">
      <DetailBody :item="item"/>
    </div>
    <BottomItem/>
  </Scroll>
  <CommentBox/>
</div>
</template>

<script>
import DetailNavbar from "./detailcomps/DetailNavbar"
import DetailBody from "./detailcomps/DetailBody"
import Scroll from "../../common/scroll/Scroll"
import BottomItem from "../bottemitem/BottemItem"
import CommentBox from "../commentbox/CommentBox"
import {getFindDetail} from "../../../network/detail"

export default {
  name: "Detail",
  data() {
    return {
      id: Number,
      item: {
        type: Object,
        default() {return {}}
      },
    }
  },

  components: {
    DetailNavbar,
    DetailBody,
    Scroll,
    BottomItem,
    CommentBox
  },

  created() {
    this.id = this.$route.query.id

    getFindDetail(this.id).then(res=>{
      this.item = res
    })
  },
  methods: {
    getComments() {
      this.$refs.scroll.finishPullUpHandler()
    },
  }
}
</script>

<style scoped>
.detail {
  position: relative;
  top: 0px;
  width: 100%;
  display: list-item;
  z-index: 999;
  background: #ffffff;
  height: 100%;
  overflow: hidden;
}

.wrapper{
  position: absolute;
  top: 45px;
  bottom: 45px;
  width: 100%;
}

/* 父元素使用relative很好的解决了子元素absolute脱离文档解构的问题 */
.body {
  position: relative;
  width: 100%;
}
</style>