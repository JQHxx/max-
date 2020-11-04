<template>
<div id="post">
  <PostNavBar/>
  <Scroll class="wrapper" ref="scroll"
          :probeType="3" :pullUpLoad="true"
          @pullingUps="getComments">
    <AuthorInfo class="author-info">
      <Portrait slot="left" :portrait="Author.portrait"/>
      <NickName slot="center" :nickname="Author.nickname"/>
      <div slot="right">
        <div class="category">
          <img :src="Category.category_icon" alt="">
          <div class="category-text">{{Category.name.slice(4)}}</div>
        </div>
        <Date :date="item.modified_time_timestamp"/>
      </div>
    </AuthorInfo>
    <PostBody :PostBody="Body"/>
    <BottomItem/>
  </Scroll>
  <CommentBox/>
</div>
</template>

<script>
import PostNavBar from "./postcomps/PostNavBar"
import PostBody from "./postcomps/PostBody"
import Scroll from "../../common/scroll/Scroll"
import CommentBox from "../commentbox/CommentBox"
import BottomItem from "../bottemitem/BottomItem"
import AuthorInfo from "../authorinfo/AuthorInfo"
import Portrait from "../authorinfo/Portrait"
import NickName from "../authorinfo/NickName"
import Date from "../authorinfo/Date"
import {AuthorinfoC, PostBodyC, PostCategoryC} from "../../../utils/constructor"
import {getPostDetail} from "../../../network/community"

export default {
  name: "Post",
  components: {
    PostNavBar,
    Scroll,
    CommentBox,
    BottomItem,
    AuthorInfo,
    Portrait,
    NickName,
    Date,
    PostBody,
  },
  data() {
    return {
      id: Number,
      item: Object,
      Author: Object,
      Category: Object,
      Body: Object,
    }
  },
  created() {
    this.id = this.$route.query.id
    getPostDetail(this.id).then(res=>{
      this.item = res.results[0]
      this.Author = new AuthorinfoC(this.item)
      this.Category = new PostCategoryC(this.item)
      this.Body = new PostBodyC(this.item)
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
#post {
  position: relative;
  top: 0px;
  width: 100%;
  z-index: 999;
  background: #fff;
  height: 100%;
  overflow: hidden;
}

.wrapper{
  position: absolute;
  top: 45px;
  bottom: 0px;
  width: 100%;
}

.author-info {
  padding: 0 10px 0 10px;
}

.category {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.category img{
  width: 15px;
  height: 15px;
  padding-right: 5px;
}
</style>