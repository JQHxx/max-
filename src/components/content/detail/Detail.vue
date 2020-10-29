<template>
<div class="detail">
  <DetailNavbar/>
  <Scroll class="wrapper"
          ref="scroll"
          :probeType="3" :pullUpLoad="true"
          @pullingUps="getComments">
    <DetailCover :NewsCover="NewsCover"/>
    <AuthorInfo class="author-info">
      <Portrait slot="left" :portrait="Author.portrait"/>
      <NickName slot="center" :nickname="Author.nickname"/>
      <Date slot="right" :date="item.released_timestamp"/>
    </AuthorInfo>
    <DetailBody class="detail-body" :NewsBody="NewsBody"/>
    <BottomItem/>
  </Scroll>
  <CommentBox/>
</div>
</template>

<script>
import DetailNavbar from "./detailcomps/DetailNavbar"
import DetailBody from "./detailcomps/DetailBody"
import DetailCover from "./detailcomps/DetailCover"
import Scroll from "../../common/scroll/Scroll"
import BottomItem from "../bottemitem/BottemItem"
import CommentBox from "../commentbox/CommentBox"
import AuthorInfo from "../authorinfo/AuthorInfo"
import Portrait from "../authorinfo/Portrait"
import NickName from "../authorinfo/NickName"
import Date from "../authorinfo/Date"
import {getFindDetail} from "../../../network/detail"
import {NewsCoverC, NewsBodyC, AuthorinfoC} from "./constructor"

export default {
  name: "Detail",
  data() {
    return {
      id: Number,
      item: {
        default() {return {}}
      },
      NewsCover: Object,
      NewsBody: Object,
      Author: Object,
    }
  },

  components: {
    DetailNavbar,
    DetailCover,
    DetailBody,
    Scroll,
    BottomItem,
    CommentBox,
    AuthorInfo,
    Portrait,
    NickName,
    Date
  },

  created() {
    this.id = this.$route.query.id
    getFindDetail(this.id).then(res=>{
      this.item = res.results[0]
      this.NewsCover = new NewsCoverC(this.item)
      this.NewsBody = new NewsBodyC(this.item)
      this.Author = new AuthorinfoC(this.item)
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

.author-info {
  padding: 0 20px 0 20px;
  height: 45px;
  display: flex;
}

.detail-body {
  padding: 0 20px 20px 20px;
}
/* 父元素使用relative很好的解决了子元素absolute脱离文档结构的问题 */
</style>